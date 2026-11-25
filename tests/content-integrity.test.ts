/**
 * Content integrity tests.
 *
 * TypeScript already checks the *shape* of our data. These tests check what
 * the type system can't see: that the files and pages the content points at
 * actually exist, and that no unfinished content ships.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { workExperience } from "@/data/workExperience";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const PUBLIC = path.join(ROOT, "public");
const APP = path.join(SRC, "app");

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sourceFiles = walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f));
const dataFiles = sourceFiles.filter((f) => f.includes(`${path.sep}data${path.sep}`));
const rel = (f: string) => path.relative(ROOT, f);

/** Removes line and block comments, so we only scan code and content. */
const stripComments = (code: string) =>
  code.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`])\/\/.*$/gm, "$1");

/** Every match of `pattern` (capture group 1) across `files`, with its file. */
function collect(files: string[], pattern: RegExp) {
  return files.flatMap((file) =>
    [...stripComments(fs.readFileSync(file, "utf8")).matchAll(pattern)].map((m) => ({
      file: rel(file),
      value: m[1],
    })),
  );
}

/**
 * Checks a path exists with the EXACT same letter case.
 * macOS ignores case ("Foo.PNG" finds "foo.png"), but Vercel's Linux servers
 * don't, so a case typo works locally and is a broken image in production.
 */
function existsWithExactCase(base: string, urlPath: string): boolean {
  let dir = base;
  for (const segment of urlPath.split("/").filter(Boolean)) {
    if (!fs.existsSync(dir) || !fs.readdirSync(dir).includes(segment)) return false;
    dir = path.join(dir, segment);
  }
  return true;
}

const ASSET_EXT = "png|jpe?g|webp|gif|svg|avif|pdf|ico|mp4|webm";

describe("static assets", () => {
  const assetRefs = collect(
    sourceFiles,
    new RegExp(`["'\`](/[^"'\`\\s]+\\.(?:${ASSET_EXT}))["'\`]`, "gi"),
  );

  it("finds asset references (sanity check that the scan works)", () => {
    expect(assetRefs.length).toBeGreaterThan(10);
  });

  it("every referenced file exists in public/ with exact filename case", () => {
    const missing = assetRefs.filter(
      ({ value }) => !existsWithExactCase(PUBLIC, decodeURI(value)),
    );
    expect(missing, "Missing or wrongly-cased assets").toEqual([]);
  });
});

describe("internal links", () => {
  // Every folder under src/app with a page.tsx is a route, e.g. "/projects/lumora".
  const routes = new Set(
    walk(APP)
      .filter((f) => path.basename(f) === "page.tsx")
      .map((f) => "/" + path.relative(APP, path.dirname(f)).split(path.sep).join("/"))
      .map((r) => (r === "/." || r === "/" ? "/" : r)),
  );

  const linkRefs = collect(sourceFiles, /href[=:]\s*\{?\s*["'`](\/[^"'`#?\s]*)/g).filter(
    ({ value }) => !new RegExp(`\\.(?:${ASSET_EXT})$`, "i").test(value),
  );

  it("every internal href points to a page that exists", () => {
    const broken = linkRefs.filter(({ value }) => !routes.has(value.replace(/\/$/, "") || "/"));
    expect(broken, `Known routes: ${[...routes].join(", ")}`).toEqual([]);
  });
});

describe("data identity", () => {
  it.each([
    ["projects", projects.map((p) => p.id)],
    ["workExperience", workExperience.map((w) => w.id)],
  ])("%s ids are unique", (_name, ids) => {
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates).toEqual([]);
  });
});

describe("unfinished content", () => {
  const PLACEHOLDER = /(details to be added|lorem ipsum|\bTODO\b|\bTBD\b|coming soon)/gi;

  /**
   * Known placeholders that are scheduled to be fixed in the content update
   * (see docs/UPDATE_SCOPE.md). This list should only ever shrink: when the
   * fix lands, delete the entry and the test keeps it from coming back.
   */
  const KNOWN: string[] = [];

  it("no placeholder text in src/data (outside the known list)", () => {
    const found = collect(dataFiles, PLACEHOLDER).filter(
      ({ file, value }) => !KNOWN.includes(`${file}: ${value}`),
    );
    expect(found).toEqual([]);
  });
});

describe("colour contrast guard", () => {
  /**
   * Brand blue text below 90% opacity fails WCAG AA (4.5:1) on our light
   * backgrounds (measured 25 Nov 2026: /70 is 3.3:1 on #eef4ff, /90 is 4.75:1).
   * Opacities of 55 or lower are allowed: they're only used on decorative icons.
   */
  it("no brand-blue text between 56% and 89% opacity", () => {
    const hits = collect(sourceFiles, /(text-\[#2d5f9d\]\/(?:5[6-9]|[6-8]\d))\b/g);
    expect(hits).toEqual([]);
  });

  it("small grey labels don't use slate-400 (2.4:1)", () => {
    const hits = collect(sourceFiles, /(text-\[0\.5\drem\][^"]*text-slate-400)/g);
    expect(hits).toEqual([]);
  });
});
