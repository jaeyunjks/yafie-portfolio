import { FaAws, FaDatabase, FaJava, FaShieldAlt } from "react-icons/fa";
import {
  SiClaude,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiHtmx,
  SiJavascript,
  SiJira,
  SiModelcontextprotocol,
  SiMysql,
  SiNextdotjs,
  SiOllama,
  SiOpenai,
  SiPytest,
  SiPython,
  SiReact,
  SiSalesforce,
  SiSharp,
  SiSqlite,
  SiSwift,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAzure, TbHierarchy3, TbSearch, TbTestPipe } from "react-icons/tb";
import { VscRobot } from "react-icons/vsc";
import type { TechCategory } from "@/types";

/**
 * Skills shown on the About page. Each item stores `months` of hands-on use;
 * the duration label and bar width are derived in src/lib/experience.ts.
 * Numbers confirmed by Yafie on 25 Nov 2026.
 */
export const techStack: TechCategory[] = [
  {
    title: "Languages",
    shortLabel: "Languages",
    label: "language.layer",
    description: "Languages I write application logic, services, queries and tests in.",
    items: [
      { name: "JavaScript", months: 36, status: "actively using", icon: SiJavascript, brandColor: "#f7c948" },
      { name: "TypeScript", months: 24, status: "actively using", icon: SiTypescript, brandColor: "#3178c6" },
      { name: "Python", months: 24, status: "actively using", icon: SiPython, brandColor: "#3776ab" },
      { name: "SQL", months: 24, status: "actively using", icon: FaDatabase, brandColor: "#2563eb" },
      { name: "C#", months: 6, status: "familiar", icon: SiSharp, brandColor: "#68217a" },
      { name: "Java", months: 12, status: "familiar", icon: FaJava, brandColor: "#e76f00" },
      { name: "Swift", months: 12, status: "familiar", icon: SiSwift, brandColor: "#f05138" },
    ],
  },
  {
    title: "Front End & APIs",
    shortLabel: "Front end",
    label: "interface.layer",
    description: "Frameworks I use to build interfaces and the REST APIs behind them.",
    items: [
      { name: "React", months: 24, status: "actively using", icon: SiReact, brandColor: "#149eca" },
      { name: "Next.js", months: 18, status: "actively using", icon: SiNextdotjs, brandColor: "#111827" },
      { name: "Flask", months: 12, status: "actively using", icon: SiFlask, brandColor: "#111827" },
      { name: "HTMX", months: 3, status: "familiar", icon: SiHtmx, brandColor: "#3d72d7" },
      { name: "Blazor / ASP.NET Core", months: 3, status: "familiar", icon: SiDotnet, brandColor: "#512bd4" },
      { name: "Node.js / Express", months: 18, status: "familiar", icon: SiExpress, brandColor: "#111827" },
      { name: "Tailwind CSS", months: 24, status: "actively using", icon: SiTailwindcss, brandColor: "#06b6d4" },
    ],
  },
  {
    title: "Databases",
    shortLabel: "Data",
    label: "data.layer",
    description: "Schema design, indexing, constraints and transactions across relational databases.",
    items: [
      { name: "SQLite", months: 12, status: "actively using", icon: SiSqlite, brandColor: "#003b57" },
      { name: "MySQL (RDS) / PostgreSQL", months: 24, status: "familiar", icon: SiMysql, brandColor: "#00758f" },
      { name: "EF Core migrations", months: 3, status: "familiar", icon: SiDotnet, brandColor: "#512bd4" },
    ],
  },
  {
    title: "Cloud, DevOps & CI/CD",
    shortLabel: "Cloud",
    label: "delivery.layer",
    description: "Containerising, deploying and automating checks so releases are repeatable.",
    items: [
      { name: "Docker / Compose", months: 4, status: "actively using", icon: SiDocker, brandColor: "#2496ed" },
      { name: "GitHub Actions", months: 4, status: "actively using", icon: SiGithubactions, brandColor: "#2088ff" },
      { name: "Azure Container Apps", months: 3, status: "familiar", icon: TbBrandAzure, brandColor: "#0078d4" },
      { name: "AWS (EB, EC2, RDS, VPC, SNS)", months: 8, status: "familiar", icon: FaAws, brandColor: "#ff9900" },
    ],
  },
  {
    title: "AI-Native Engineering",
    shortLabel: "AI",
    label: "agent.layer",
    description: "Agent workflows with tool calling, grounding, validated outputs and human approval.",
    items: [
      { name: "Multi-agent orchestration", months: 3, status: "actively using", icon: TbHierarchy3, brandColor: "#625595" },
      { name: "MCP tool calling", months: 3, status: "actively using", icon: SiModelcontextprotocol, brandColor: "#111827" },
      { name: "RAG integration", months: 3, status: "familiar", icon: TbSearch, brandColor: "#2d5f9d" },
      { name: "OpenAI API", months: 8, status: "familiar", icon: SiOpenai, brandColor: "#111827" },
      { name: "Ollama (local LLMs)", months: 3, status: "familiar", icon: SiOllama, brandColor: "#111827" },
      { name: "Claude Code / Codex", months: 12, status: "actively using", icon: SiClaude, brandColor: "#d97757" },
    ],
  },
  {
    title: "Testing, Security & Tools",
    shortLabel: "Testing",
    label: "quality.layer",
    description: "Automated tests, pipeline security checks and the platforms I deliver on.",
    items: [
      { name: "Pytest", months: 4, status: "actively using", icon: SiPytest, brandColor: "#0a9edc" },
      { name: "Vitest / React Testing Library", months: 9, status: "familiar", icon: SiTestinglibrary, brandColor: "#e33332" },
      { name: "NUnit / XCTest", months: 6, status: "familiar", icon: TbTestPipe, brandColor: "#2d5f9d" },
      { name: "Security checks (secret scanning, pip-audit)", months: 4, status: "actively using", icon: FaShieldAlt, brandColor: "#2d5f9d" },
      { name: "Git & GitHub", months: 36, status: "actively using", icon: SiGit, brandColor: "#f05032" },
      { name: "Jira / Agile", months: 24, status: "familiar", icon: SiJira, brandColor: "#0052cc" },
      { name: "ServiceNow AI Agent Studio", months: 4, status: "learning", icon: VscRobot, brandColor: "#62d84e" },
      { name: "Salesforce Platform", months: 5, status: "familiar", icon: SiSalesforce, brandColor: "#00a1e0" },
    ],
  },
];
