/**
 * HOMS case study content.
 *
 * Sources: Yafie's verified brief of 25 Nov 2026 (docs/UPDATE_SCOPE.md §3.2)
 * and the public repo (student-5/ = Staff & Shift Management,
 * ai-services/multi-agent-server/). Only claim what Yafie built; credit
 * teammates where their work appears.
 */
import type { CaseCard, CaseStat, FlowStep } from "@/types";

export const homsLinks = {
  github: "https://github.com/jaeyunjks/hospital-operations-management-system",
  module:
    "https://github.com/jaeyunjks/hospital-operations-management-system/tree/main/student-5",
  agentServer:
    "https://github.com/jaeyunjks/hospital-operations-management-system/tree/main/ai-services/multi-agent-server",
} as const;

export const homsFacts = {
  title: "Hospital Operations Management System",
  shortTitle: "HOMS",
  role: "Staff & Shift Management owner",
  team: "5-person team",
  timeline: "Aug – Oct 2026",
  moduleTests: 1040,
  agentServerTests: 66,
  tables: 5,
  indexes: 12,
  auditTriggers: 5,
} as const;

export const homsStats: CaseStat[] = [
  { value: homsFacts.moduleTests.toLocaleString("en-AU"), label: "Pytest tests (module)" },
  { value: String(homsFacts.agentServerTests), label: "Tests (agent server)" },
  { value: "3", label: "Services I owned" },
  { value: "Azure", label: "Container Apps deploy" },
];

export const homsScope: CaseCard[] = [
  {
    tag: "owned",
    title: "Staff & Shift Management",
    body: "Rosters, shift planning, availability, coverage, and leave requests with manager review, built as three independently deployed services.",
  },
  {
    tag: "owned",
    title: "Shared multi-agent server",
    body: "The team's Planner → Worker → Reviewer workflow with a human approval gate. I built all of it.",
  },
  {
    tag: "owned",
    title: "Deployment & security",
    body: "Azure Container Apps deploy scripts, integration CI, pre-commit security checks, and fixes for the team-wide security findings.",
  },
  {
    tag: "team",
    title: "The rest of the platform",
    body: "Four teammates each owned a feature area (admissions, clinical staff, pharmacy, beds). A teammate built the shared RAG service; I integrated it.",
  },
];

export const homsArchitecture: FlowStep[] = [
  {
    title: "HTMX front end",
    body: "Server-rendered pages with HTMX for partial updates. Its own container.",
  },
  {
    title: "Flask REST API",
    body: "Routes → services → validation. Business rules such as eligibility and coverage live here.",
  },
  {
    title: "SQLite database service",
    body: "Owns the schema and serves data through its own small API, in its own container.",
  },
];

export const homsAiServices: CaseCard[] = [
  {
    title: "Multi-agent server",
    body: "Planner → Worker → Reviewer → Human Review. Built by me.",
  },
  {
    title: "MCP server",
    body: "Shared tool server. I scaffolded it and added a ward-occupancy tool.",
  },
  {
    title: "RAG service",
    body: "Grounded answers with citations. Built by a teammate; I integrated it into my module.",
  },
  {
    title: "Ollama",
    body: "Local LLM runtime. Each agent role is routed to its own local model.",
  },
];

export const homsTables: CaseCard[] = [
  { title: "staff", body: "Staff members, role and department." },
  { title: "shift", body: "Shifts by date, department and status." },
  { title: "shift_assignment", body: "Who is assigned to which shift, with status." },
  { title: "staff_weekly_availability", body: "Each person's regular weekly availability." },
  {
    title: "staff_unavailability_request",
    body: "Leave and unavailability requests that a manager reviews.",
  },
];

export const homsSchemaRules: CaseCard[] = [
  {
    title: "Constraints in the database",
    body: "Foreign-key rules plus CHECK and UNIQUE constraints, so invalid states (the same person assigned twice to a shift, an unknown status, a shift needing zero staff) are rejected by the database itself, not only by the API.",
  },
  {
    title: "12 indexes",
    body: "On the columns the module actually filters and joins by: department, role, date, status, and the staff and shift keys.",
  },
  {
    title: "Audit triggers",
    body: "Five triggers keep each table's updated-at timestamp correct on every change.",
  },
  {
    title: "Safe queries",
    body: "Parameterised queries everywhere, and transactions around multi-step writes.",
  },
];

export const homsAgentFlow: FlowStep[] = [
  { title: "Planner", body: "Turns the task and evidence into a plan." },
  { title: "Worker", body: "Produces a recommendation from the plan and evidence." },
  { title: "Reviewer", body: "Checks the recommendation against the evidence and constraints." },
  {
    title: "Human Review",
    body: "A person chooses Approve, Correct, Reject or Partially Accept. Nothing is final without it.",
  },
];

export const homsAgentGuardrails: CaseCard[] = [
  {
    title: "Schema-constrained output",
    body: "Every role must return JSON that matches an explicit schema; anything else is rejected.",
  },
  {
    title: "Grounding checks",
    body: "Recommendations are cross-checked against the supplied evidence and constraints.",
  },
  {
    title: "Corrective re-prompts",
    body: "Invalid output triggers a retry that tells the model what was wrong.",
  },
  {
    title: "Labelled fallback",
    body: "If the model still fails, a deterministic fallback runs and the result is labelled as such, never passed off as a model answer.",
  },
  {
    title: "Human approval gate",
    body: "The agents never change data. A person approves, corrects, rejects or partially accepts every result.",
  },
  {
    title: "Audit trail",
    body: "Every run is saved, including a checkpoint before the human decision. It runs from a CLI or an HTTP API.",
  },
];

/** Symptom, cause and fix confirmed by Yafie on 25 Nov 2026. */
export const homsDeployIncident: FlowStep[] = [
  {
    title: "Symptom",
    body: "After deploying to Azure Container Apps, writes to the module's database started failing.",
  },
  {
    title: "Cause",
    body: "The SQLite file lived on an Azure Files share. With more than one replica or revision running, several processes could write to the same file.",
  },
  {
    title: "Fix",
    body: "Run a single replica, shut down old revisions before each deploy, and add startup tests that fail fast if the database isn't writable.",
  },
];

export const homsQuality: CaseCard[] = [
  {
    title: "1,040 Pytest tests",
    body: "Passing tests for the Staff & Shift Management module.",
  },
  {
    title: "Integration CI",
    body: "A GitHub Actions workflow that builds and starts the full Docker Compose stack and waits for every service to come up.",
  },
  {
    title: "Pre-commit security checks",
    body: "Ruff security rules, detect-secrets and pip-audit run before code is committed.",
  },
  {
    title: "Team-wide security fixes",
    body: "Fixed the security findings across the team's services: URL validation and dependency upgrades flagged by pip-audit.",
  },
];
