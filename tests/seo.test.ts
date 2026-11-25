/**
 * Every page has unique, sensibly sized metadata, and every page is in the
 * sitemap. TypeScript can't check either of these.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { seoPages } from "@/data/seo";

const APP = path.join(process.cwd(), "src/app");
const walk = (d: string): string[] =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)],
  );
const pageFiles = walk(APP).filter((f) => path.basename(f) === "page.tsx");
const routeOf = (f: string) => {
  const r = "/" + path.relative(APP, path.dirname(f)).split(path.sep).join("/");
  return r === "/." || r === "/" ? "/" : r;
};

describe("page metadata", () => {
  it.each(pageFiles.map((f) => [routeOf(f), f]))("%s exports pageMetadata for its own route", (route, file) => {
    const src = fs.readFileSync(file, "utf8");
    expect(src).toContain(`export const metadata = pageMetadata("${route}")`);
  });

  it("every route in seoPages has a real page", () => {
    const routes = pageFiles.map(routeOf).sort();
    expect(Object.keys(seoPages).sort()).toEqual(routes);
  });

  it("titles and descriptions are unique", () => {
    const pages = Object.values(seoPages);
    expect(new Set(pages.map((p) => p.title)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.description)).size).toBe(pages.length);
  });

  it.each(Object.entries(seoPages))("%s description is 70–160 characters", (_route, page) => {
    expect(page.description.length).toBeGreaterThanOrEqual(70);
    expect(page.description.length).toBeLessThanOrEqual(160);
  });
});

describe("sitemap", () => {
  it("lists every page with an absolute URL", () => {
    const urls = sitemap().map((e) => new URL(e.url).pathname);
    expect(urls.sort()).toEqual(Object.keys(seoPages).sort());
  });
});

describe("social cards", () => {
  it.each(Object.keys(seoPages))("%s keeps the image and large Twitter card", async (route) => {
    const { pageMetadata } = await import("@/data/seo");
    const m = pageMetadata(route as keyof typeof seoPages);
    // Regression: page-level openGraph replaces the layout's, so these must be set here.
    expect(JSON.stringify(m.openGraph)).toContain("/opengraph-image");
    expect(m.twitter).toMatchObject({ card: "summary_large_image" });
  });
});
