import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const read = (name) => readFile(new URL(`../dist/${name}`, import.meta.url), "utf8");

test("home presents the approved Skills journey", async () => {
  const html = await read("index.html");
  const labels = ["MODEL", "COORDINATE", "COLLABORATE", "VISUALIZE", "AUTOMATE"];
  const positions = labels.map((label) => html.indexOf(`>${label}<`));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
  assert.match(html, />SKILLS</);
  assert.doesNotMatch(html, /capabilit(?:y|ies)/i);
});

test("site contains no project-identifying metadata fields", async () => {
  const files = ["index.html", "model.html", "coordinate.html", "collaborate.html", "visualize.html", "automate.html"];
  const content = (await Promise.all(files.map(read))).join("\n");
  assert.doesNotMatch(content, /data-(?:project|client|company)-name/i);
});

test("responsive and reduced-motion rules are present", async () => {
  const css = await read("styles.css");
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /@media \(max-height: 760px\)/);
});

test("3D model is detail-only and under GitHub's single-file limit", async () => {
  const home = await read("index.html");
  const model = await read("model.html");
  assert.doesNotMatch(home, /elevated-station-concourse\.glb/);
  assert.match(model, /elevated-station-concourse\.glb/);
  const info = await stat(new URL("../dist/assets/models/elevated-station-concourse.glb", import.meta.url));
  assert.ok(info.size < 100 * 1024 * 1024);
});

test("visualization page uses the four approved renders", async () => {
  const html = await read("visualize.html");
  for (const name of ["igloo-exterior-day", "igloo-platform-day", "spiral-interior-night", "wave-exterior-night"]) {
    assert.match(html, new RegExp(name));
  }
});
