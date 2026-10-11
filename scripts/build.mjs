import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const pages = [
  "index.html",
  "model.html",
  "coordinate.html",
  "collaborate.html",
  "visualize.html",
  "automate.html",
  "404.html",
  "styles.css",
  "script.js",
  "favicon.svg",
  ".nojekyll"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const page of pages) await cp(join(root, page), join(dist, page));
await mkdir(join(dist, "assets", "models"), { recursive: true });
await cp(join(root, "assets", "media"), join(dist, "assets", "media"), { recursive: true });
await cp(
  join(root, "assets", "models", "elevated-station-concourse.glb"),
  join(dist, "assets", "models", "elevated-station-concourse.glb")
);
await mkdir(join(dist, "vendor"), { recursive: true });
await cp(
  join(root, "node_modules", "@google", "model-viewer", "dist", "model-viewer.min.js"),
  join(dist, "vendor", "model-viewer.min.js")
);

console.log("Portfolio build complete: dist/");
