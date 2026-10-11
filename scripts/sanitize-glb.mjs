import fs from "node:fs";
import path from "node:path";

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error("Usage: node scripts/sanitize-glb.mjs <input.glb> <output.glb>");
  process.exit(1);
}

const GLB_MAGIC = 0x46546c67;
const JSON_CHUNK = 0x4e4f534a;
const source = fs.readFileSync(inputPath);

if (source.readUInt32LE(0) !== GLB_MAGIC) {
  throw new Error(`${inputPath} is not a binary glTF file.`);
}

const chunks = [];
let offset = 12;

while (offset < source.length) {
  const length = source.readUInt32LE(offset);
  const type = source.readUInt32LE(offset + 4);
  const data = source.subarray(offset + 8, offset + 8 + length);
  chunks.push({ type, data });
  offset += 8 + length;
}

const jsonChunk = chunks.find((chunk) => chunk.type === JSON_CHUNK);

if (!jsonChunk) {
  throw new Error("The model does not contain a JSON chunk.");
}

const document = JSON.parse(jsonChunk.data.toString("utf8").replace(/[\u0000 ]+$/u, ""));

function stripMetadata(value) {
  if (Array.isArray(value)) {
    value.forEach(stripMetadata);
    return;
  }

  if (!value || typeof value !== "object") return;

  delete value.name;
  delete value.extras;
  Object.values(value).forEach(stripMetadata);
}

stripMetadata(document);
document.asset = {
  ...(document.asset ?? {}),
  generator: "Portfolio model — public web edition",
};

const json = Buffer.from(JSON.stringify(document), "utf8");
const padding = (4 - (json.length % 4)) % 4;
const paddedJson = Buffer.concat([json, Buffer.alloc(padding, 0x20)]);

const outputChunks = chunks.map((chunk) =>
  chunk.type === JSON_CHUNK ? { type: chunk.type, data: paddedJson } : chunk,
);
const totalLength = 12 + outputChunks.reduce((sum, chunk) => sum + 8 + chunk.data.length, 0);
const header = Buffer.alloc(12);
header.writeUInt32LE(GLB_MAGIC, 0);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(totalLength, 8);

const encodedChunks = outputChunks.map((chunk) => {
  const chunkHeader = Buffer.alloc(8);
  chunkHeader.writeUInt32LE(chunk.data.length, 0);
  chunkHeader.writeUInt32LE(chunk.type, 4);
  return Buffer.concat([chunkHeader, chunk.data]);
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, Buffer.concat([header, ...encodedChunks]));
console.log(`Sanitized ${inputPath} → ${outputPath}`);
