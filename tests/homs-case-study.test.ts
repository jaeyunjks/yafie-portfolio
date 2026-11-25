/**
 * HOMS facts appear in several places (project card, case study, stats).
 * These tests keep them consistent with each other and with the brief.
 */
import { describe, expect, it } from "vitest";
import {
  homsAgentFlow,
  homsFacts,
  homsQuality,
  homsStats,
  homsTables,
} from "@/data/caseStudies/homs";
import { projects } from "@/data/projects";

const homsCard = JSON.stringify(projects.find((p) => p.id === "homs"));

describe("HOMS facts", () => {
  it("match the verified brief", () => {
    expect(homsFacts).toMatchObject({
      moduleTests: 1040,
      agentServerTests: 66,
      tables: 5,
      indexes: 12,
      auditTriggers: 5,
    });
  });

  it("the table list has exactly as many tables as the facts claim", () => {
    expect(homsTables).toHaveLength(homsFacts.tables);
  });

  it("the project card quotes the same numbers as the case study", () => {
    expect(homsCard).toContain("1,040");
    expect(homsCard).toContain("66 tests");
    expect(homsCard).toContain(`${homsFacts.indexes} indexes`);
    expect(homsCard).toContain(`${homsFacts.tables} related tables`);
  });

  it("the stats and quality cards show the module test count", () => {
    expect(homsStats.map((s) => s.value)).toContain("1,040");
    expect(homsQuality.map((c) => c.title)).toContain("1,040 Pytest tests");
  });

  it("the card links to the live case study page", () => {
    expect(homsCard).toContain('"href":"/projects/homs"');
    expect(homsCard).not.toContain('"disabled":true');
  });
});

describe("multi-agent workflow", () => {
  it("always ends with a human decision", () => {
    expect(homsAgentFlow.at(-1)?.title).toBe("Human Review");
  });

  it("credits the teammate who built RAG", () => {
    expect(homsCard).toMatch(/RAG service \(built by a teammate\)/);
  });
});
