/**
 * SDS case-study claims verified with Yafie on 25 Nov 2026
 * (docs/UPDATE_SCOPE.md, "SDS case study: corrections").
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { sdsFacts, sdsFeatures } from "@/data/caseStudies/sdsModernisation";

const ROOT = process.cwd();
const files = [
  "src/data/caseStudies/sdsModernisation.ts",
  ...fs
    .readdirSync(path.join(ROOT, "src/components/sections/case-studies/sds"))
    .map((f) => `src/components/sections/case-studies/sds/${f}`),
];

describe("SDS case study", () => {
  it.each(["Present", "TypeScript", "Vite", "Pytest", "Tester", "Frontend Developer"])(
    "never claims %j",
    (claim) => {
      const hits = files.filter((f) =>
        new RegExp(`\\b${claim}\\b`).test(fs.readFileSync(path.join(ROOT, f), "utf8")),
      );
      expect(hits).toEqual([]);
    },
  );

  it("labels screen ownership as verified: 4 mine, 1 shared, 2 team-built", () => {
    const count = (o: string) => sdsFeatures.filter((f) => f.ownership === o).length;
    expect({ mine: count("mine"), shared: count("shared"), team: count("team") }).toEqual({
      mine: 4,
      shared: 1,
      team: 2,
    });
  });

  it("client-built screens are never labelled as mine", () => {
    for (const title of ["Project EOI form", "Client dashboard"]) {
      expect(sdsFeatures.find((f) => f.title === title)?.ownership).toBe("team");
    }
  });

  it("does not name the client", () => {
    expect(sdsFacts.client).toBe("An academic client at UTS");
  });
});
