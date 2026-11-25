/**
 * Rules for project data that TypeScript can't express.
 */
import { describe, expect, it } from "vitest";
import {
  featuredProjects,
  homeFeaturedProjects,
  otherProjects,
  projects,
} from "@/data/projects";
import { workExperience } from "@/data/workExperience";

describe("project tiers", () => {
  it("every project is either featured or other", () => {
    expect(featuredProjects.length + otherProjects.length).toBe(projects.length);
  });

  it("every featured project can be reached through at least one filter", () => {
    const unreachable = featuredProjects.filter((p) => p.filters.length === 0);
    expect(unreachable.map((p) => p.id)).toEqual([]);
  });

  it("home shows exactly three featured projects, all with images", () => {
    expect(homeFeaturedProjects).toHaveLength(3);
    for (const p of homeFeaturedProjects) {
      expect(p.tier).toBe("featured");
      expect(p.imageSrc).toBeTruthy();
    }
  });
});

/**
 * Corrections verified with Yafie on 25 Nov 2026 (docs/UPDATE_SCOPE.md).
 * These are regression tests for content: if an old claim is pasted back
 * in, CI fails.
 */
describe("verified claims", () => {
  const byId = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (!project) throw new Error(`missing project ${id}`);
    return JSON.stringify(project);
  };

  it.each([
    ["sds-modernisation", ["TypeScript", "Vite", "Pytest", "Present", "Actively Maintained"]],
    ["lumora", ["NestJS", "Prisma", "JWT", "Firebase"]],
  ])("%s does not claim %j", (id, banned) => {
    const text = byId(id);
    for (const claim of banned) {
      // Whole words only: "Vite" must not match "Vitest".
      expect(text, `${id} mentions "${claim}"`).not.toMatch(new RegExp(`\\b${claim}\\b`));
    }
  });

  it("the SDS role has ended (not 'Present' / 'current')", () => {
    const sds = workExperience.find((w) => w.id === "sds-modernisation-frontend-tester");
    expect(sds?.status).toBe("past");
    expect(sds?.duration).not.toMatch(/present/i);
  });

  it("FreshBasket says the live deployment is retired", () => {
    expect(byId("freshbasket-aws")).toMatch(/retired/i);
  });
});

describe("case study count", () => {
  it("counts every project that links to an on-site case study", async () => {
    const { caseStudyCount } = await import("@/data/projects");
    expect(caseStudyCount).toBe(5); // SDS, HOMS, Lumora, FreshBasket, FocusPop
  });
});
