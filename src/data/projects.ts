import { sdsFacts } from "@/data/caseStudies/sdsModernisation";
export type ProjectAction = {
  label: string;
  href: string;
  disabled?: boolean;
  note?: string;
};

export type ProjectFilter =
  | "all"
  | "web"
  | "backend"
  | "ai"
  | "cloud"
  | "mobile"
  | "enterprise";

export type ProjectType =
  | "workflow"
  | "cloud"
  | "mobile-ai"
  | "ios-game"
  | "web-mvc"
  | "portfolio"
  | "fullstack-workflow";

/** "featured" = full card in the explorer; "other" = compact list below it. */
export type ProjectTier = "featured" | "other";

export type ProjectArchitectureEntry = {
  layer: string;
  technology: string;
  responsibility: string;
};

export type ProjectTechnologyGroup = {
  title: string;
  items: {
    label: string;
    description: string;
  }[];
};

export type ProjectDataEntity = {
  entity: string;
  purpose: string;
  keyFields: string[];
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  status: string;
  role: string;
  summary: string;
  problem: string;
  contributions: string[];
  techStack: string[];
  skills: string[];
  actions: ProjectAction[];
  tier: ProjectTier;
  projectType: ProjectType;
  projectDisplayType?: string;
  projectDate?: string;
  imageSrc?: string;
  caseStudyStatus: string;
  areaAnchors: string[];
  filters: Exclude<ProjectFilter, "all">[];
  featuredTechStack?: string[];
  featuredSkills?: string[];
  architecture?: ProjectArchitectureEntry[];
  recognitionFlag?: string;
  contributionSummary?: string;
};

export const SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION =
  "Nominated for UTS Software Engineering Tech Fest 2026";

export const HACKNOW_2026_WIN = "1st Place, ServiceNow ANZ HackNow 2026";

/**
 * All projects, in display order (strongest first).
 * Wording follows the verified brief in docs/UPDATE_SCOPE.md §3: only claim
 * what Yafie built, and say what teammates built where it matters.
 */
export const projects: PortfolioProject[] = [
  {
    id: "homs",
    title: "Hospital Operations Management System (HOMS)",
    category: "Backend / Microservices / Applied AI",
    status: "Completed · public repo",
    role: "Staff & Shift Management owner · 5-person team",
    summary:
      "A five-service hospital platform. I owned the Staff & Shift Management module (HTMX front end, Flask REST API, SQLite database service) and built the team's shared multi-agent server.",
    contributionSummary:
      "Owned a three-service module end to end, deployed it to Azure, and built the shared Planner → Worker → Reviewer agent server.",
    problem:
      "Hospital staffing involves rosters, shift planning, availability, coverage and leave, and errors are costly. The module had to be reliable, auditable and safe to run alongside four other independently deployed services, and any AI help had to be validated and approved by a person before it changed data.",
    contributions: [
      "Owned the Staff & Shift Management module as three services (HTMX front end, Flask REST API, SQLite database service): rosters, shift planning, availability, coverage, and leave requests with manager review. 1,040 passing Pytest tests.",
      "Designed its schema: 5 related tables, foreign-key rules, CHECK/UNIQUE constraints, 12 indexes and audit triggers, with parameterised queries and transactions.",
      "Deployed it to Azure Container Apps with my own deploy scripts; fixed write failures on Azure Files with a single replica, retiring old revisions before each deploy, and startup tests.",
      "Fixed the team-wide security findings (URL validation, pip-audit upgrades) and set up integration CI and pre-commit security checks.",
      "Built the team's shared multi-agent server: Planner → Worker → Reviewer, each with its own Ollama model and version-controlled prompt, schema-constrained output, grounding checks, corrective re-prompts, a labelled fallback, a human approval gate, an audit trail, and a CLI and HTTP API (66 tests).",
      "Scaffolded the shared MCP server, added a ward-occupancy tool, and integrated the team's RAG service (built by a teammate).",
    ],
    techStack: [
      "Python",
      "Flask",
      "SQLite",
      "HTMX",
      "Docker",
      "GitHub Actions",
      "Azure Container Apps",
      "Ollama",
      "MCP",
      "RAG",
      "Pytest",
    ],
    featuredTechStack: ["Python", "Flask", "SQLite", "Docker", "Azure", "Ollama", "MCP"],
    skills: [
      "Backend Engineering",
      "Schema Design",
      "Multi-Agent Systems",
      "Human-in-the-Loop AI",
      "Cloud Deployment",
      "CI/CD & Security Checks",
      "Automated Testing",
    ],
    actions: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jaeyunjks/hospital-operations-management-system",
      },
      {
        label: "View Case Study",
        href: "/projects/homs",
      },
    ],
    tier: "featured",
    projectType: "web-mvc",
    projectDisplayType: "Backend & applied AI",
    projectDate: "Aug – Oct 2026",
    imageSrc: "/images/projects/HOMS/roster-week-grid.webp",
    caseStudyStatus: "Case study",
    areaAnchors: ["backend-projects", "ai-tools"],
    filters: ["backend", "ai", "cloud", "web"],
  },
  {
    id: "silver-service",
    title: "Silver Service",
    category: "Enterprise Platform / AI Agents",
    status: "Hackathon winner",
    role: "Co-builder · 4-person team",
    summary:
      "An AI agent prototype that helps older Australians and their trusted circle access citizen services. Built on ServiceNow and won 1st place at ServiceNow ANZ HackNow 2026.",
    problem:
      "Older Australians and the family or carers who help them often struggle to work out which citizen services they're eligible for, and who is allowed to act on their behalf.",
    contributions: [
      "Co-built an AI agent prototype for citizen services with specialised ServiceNow AI agents and agentic workflows.",
      "Designed the eligibility, consent and permission models in AI Agent Studio, Build Agent and Flow Designer.",
      "Kept a person in the loop: agents prepare actions and humans approve them.",
    ],
    techStack: [
      "ServiceNow",
      "AI Agent Studio",
      "Build Agent",
      "Flow Designer",
      "Now Assist",
    ],
    skills: [
      "AI Agent Design",
      "Data Modelling",
      "Consent & Permissions",
      "Human-in-the-Loop AI",
      "Rapid Prototyping",
    ],
    actions: [],
    tier: "featured",
    projectType: "workflow",
    projectDisplayType: "Enterprise AI agents",
    projectDate: "Jul 2026",
    caseStudyStatus: "Hackathon project",
    areaAnchors: ["enterprise-projects"],
    filters: ["ai", "enterprise"],
    recognitionFlag: HACKNOW_2026_WIN,
  },
  {
    id: "sds-modernisation",
    title: "SDS Project Management Site",
    category: "Full-Stack Web / Workflow System",
    status: "Delivered & handed over",
    role: `${sdsFacts.role} · 6-person team`,
    summary:
      "A full-stack project management system for the UTS Software Development Studio, built for an academic client. It replaced manual proposal, discovery, join-request, scheduling and allocation workflows.",
    contributionSummary:
      "Built the React student and admin workflows, connected them to the Flask API, and ran QA for the team.",
    problem:
      "The SDS workflow involves coordinators, clients, students, team leads and tutors. Before this system, project briefs, review status, allocation timing and supporting documents were scattered across spreadsheets, shared drives and email.",
    contributions: [
      "Built the React student and admin workflows (catalogue, join requests, rosters, imports, exports, reports, project status) from client requirements and connected them to the Flask REST API.",
      "Wrote early Flask routes and SQLite schema changes.",
      "Ran QA for the team: wrote Vitest + React Testing Library unit and integration tests and fixed the defects they found.",
      "Took part in sprint reviews and the client handover in a six-person, client-facing Agile team.",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Flask",
      "SQLite",
      "Vitest",
      "React Testing Library",
    ],
    featuredSkills: [
      "Frontend Engineering",
      "API Integration",
      "Software Testing",
      "Requirements to UI",
      "Client Delivery",
      "Agile Teamwork",
    ],
    skills: [
      "Frontend Engineering",
      "API Integration",
      "Software Testing",
      "Requirements to UI",
      "Client Delivery",
      "Agile Teamwork",
    ],
    architecture: [
      {
        layer: "Model",
        technology: "SQLite database + db_crud module",
        responsibility:
          "Data persistence, database schema management, CRUD operations",
      },
      {
        layer: "View",
        technology: "React + JavaScript + CSS",
        responsibility:
          "User interface rendering, form handling, component state management",
      },
      {
        layer: "Controller",
        technology: "Flask routes / Blueprint routes",
        responsibility:
          "Request handling, business logic, data validation, API endpoints",
      },
    ],
    actions: [
      {
        label: "View Case Study",
        href: "/projects/sds-modernisation",
      },
    ],
    tier: "featured",
    projectType: "fullstack-workflow",
    projectDisplayType: "Full-stack web",
    projectDate: sdsFacts.timeline,
    imageSrc: "/images/projects/sds_projects.png",
    caseStudyStatus: "Case study",
    areaAnchors: ["web-projects"],
    filters: ["web", "backend"],
    recognitionFlag: SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION,
  },
  {
    id: "lumora",
    title: "Lumora AI",
    category: "iOS / Applied AI",
    status: "Completed",
    role: "AI features developer · 3-person team",
    summary:
      "An AI study companion iOS app. I built its AI features: chat grounded in the student's own notes, PDFs and images, structured summaries, and flashcards and quizzes.",
    contributionSummary:
      "Built the app's AI features (52 of 53 app commits), including control over which context reaches the model.",
    problem:
      "Generic AI chat gives students answers that aren't based on their own course material. The app needed to ground answers in the student's notes and files, and to say so when there was nothing to ground on.",
    contributions: [
      "Built the app's AI features (52 of 53 app commits): chat grounded in the student's own notes, PDFs and images, with chat history.",
      "Built structured summaries, and flashcards and quizzes with adjustable count and difficulty.",
      "Controlled which context reaches the model: the study space's own notes first, otherwise its uploaded files, and the app tells the user when there's nothing to ground on.",
    ],
    techStack: ["Swift", "SwiftUI", "MVVM", "XCTest", "OpenAI-powered REST API"],
    skills: [
      "Applied AI",
      "Context Grounding",
      "iOS Development",
      "MVVM Architecture",
      "Testing",
    ],
    actions: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jaeyunjks/SmartStudyCompanion",
      },
      {
        label: "View Case Study",
        href: "/projects/lumora",
      },
    ],
    tier: "featured",
    projectType: "mobile-ai",
    projectDisplayType: "iOS / AI study app",
    projectDate: "Mar – May 2026",
    imageSrc: "/images/projects/Lumora/lumora.png",
    caseStudyStatus: "Case study",
    areaAnchors: ["mobile-projects"],
    filters: ["mobile", "ai"],
    recognitionFlag: SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION,
  },
  {
    id: "freshbasket-aws",
    title: "FreshBasket Ordering Portal on AWS",
    category: "Cloud / Full-Stack Web",
    status: "Deployment retired · documented",
    role: "Solo project",
    summary:
      "A produce-box ordering portal (Node.js, Express, MySQL) deployed on AWS with Elastic Beanstalk, EC2, Amazon RDS, a custom VPC across 2 availability zones, a load balancer, auto scaling and SNS. The live deployment has been retired; the case study documents it.",
    problem:
      "The project shows how a full-stack web app is deployed, connected to a managed database, scaled and secured on AWS, and documented so the work stays verifiable after the live environment is gone.",
    contributions: [
      "Built the customer ordering flow and admin request and status management.",
      "Used parameterised SQL and transactional orders with price snapshots.",
      "Deployed on Elastic Beanstalk and EC2 with Amazon RDS MySQL, a custom VPC across 2 AZs, a load balancer, auto scaling and SNS notifications.",
      "Documented the architecture, deployment and database connectivity with redacted evidence.",
    ],
    techStack: [
      "Node.js",
      "Express",
      "MySQL",
      "Amazon RDS",
      "Elastic Beanstalk",
      "EC2",
      "VPC",
      "Auto Scaling",
      "SNS",
    ],
    skills: [
      "Cloud Deployment",
      "VPC Networking",
      "Load Balancing",
      "Auto Scaling",
      "Transactional SQL",
      "Deployment Documentation",
    ],
    actions: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jaeyunjks/AWSFreshBasket",
      },
      {
        label: "View Case Study",
        href: "/projects/freshbasket-aws",
      },
    ],
    tier: "featured",
    projectType: "cloud",
    projectDisplayType: "Cloud deployment",
    projectDate: "May 2026",
    imageSrc: "/images/projects/freshbasket.png",
    caseStudyStatus: "Documented",
    areaAnchors: ["cloud-projects"],
    filters: ["cloud", "web", "backend"],
  },
  {
    id: "cafe-ordering",
    title: "Café Ordering & Operations App",
    category: "Full-Stack .NET",
    status: "Completed · private repo",
    role: "Order operations owner · 3-person team",
    summary:
      "A café ordering and operations app in C#, .NET 9, ASP.NET Core and Blazor. I owned order operations; teammates built inventory and waste tracking.",
    problem:
      "A café needed one system for taking orders, running the staff workflow and seeing what sells, instead of paper tickets and guesswork.",
    contributions: [
      "Owned order operations: the order domain and service layer.",
      "Wrote the EF Core migration and built the staff dashboard.",
      "Built LINQ sales analytics and integrated the Open Food Facts API.",
      "Wrote NUnit tests for the order logic.",
    ],
    techStack: [
      "C#",
      ".NET 9",
      "ASP.NET Core",
      "Blazor",
      "EF Core",
      "SQLite",
      "NUnit",
    ],
    skills: [
      "Domain Modelling",
      "Service Layer Design",
      "Database Migrations",
      "Data Analytics (LINQ)",
      "API Integration",
      "Unit Testing",
    ],
    actions: [],
    tier: "featured",
    projectType: "web-mvc",
    projectDisplayType: "Full-stack .NET",
    projectDate: "Sep – Oct 2026",
    caseStudyStatus: "Private repo",
    areaAnchors: [],
    filters: ["web", "backend", "enterprise"],
  },
  {
    id: "salesforce-hr-leave",
    title: "HR Leave Request App on Salesforce",
    category: "Enterprise Platform / Low-Code",
    status: "Completed",
    role: "3-person team",
    summary:
      "A leave request app on the Salesforce Platform, built declaratively: custom objects, validation rules, Flow Builder automation and role-based security, with no Apex.",
    problem:
      "Leave requests handled over email get lost, skip approval and leave no record. The app gives every request a status, an approver and an audit trail.",
    contributions: [
      "Built custom objects and validation rules for leave requests.",
      "Automated manager review tasks, notifications and a time-based reminder with Flow Builder.",
      "Set up role-based security so people see only what they should.",
    ],
    techStack: ["Salesforce Platform", "Flow Builder", "Custom Objects", "Validation Rules"],
    skills: [
      "Low-Code Automation",
      "Data Modelling",
      "Role-Based Security",
      "Business Process Design",
    ],
    actions: [],
    tier: "featured",
    projectType: "workflow",
    projectDisplayType: "Enterprise low-code",
    projectDate: "May 2026",
    caseStudyStatus: "Coursework project",
    areaAnchors: [],
    filters: ["enterprise"],
  },
  {
    id: "focuspop",
    title: "FocusPop",
    category: "Mobile Game / SwiftUI",
    status: "Completed iOS Project",
    role: "iOS Game Designer & Developer",
    summary:
      "A SwiftUI bubble-popping game built around short focus sessions, with weighted bubbles, combo scoring, a leaderboard and XCTest coverage.",
    problem:
      "FocusPop explores how a small mobile game can make short focus sessions feel playful while keeping gameplay logic, scoring, persistence, and testing clear.",
    contributions: [
      "Designed a SwiftUI game flow from player setup to final score review.",
      "Implemented mode selection, timed sessions, bubble generation, scoring, combo logic, and pause/resume behaviour.",
      "Structured gameplay state with MVVM patterns and ObservableObject state updates.",
      "Used local persistence for settings and high-score leaderboard behaviour.",
      "Validated core gameplay logic with XCTest and UI test coverage.",
    ],
    techStack: ["Swift", "SwiftUI", "Combine", "MVVM", "UserDefaults", "XCTest"],
    skills: [
      "Mobile Game UI",
      "State Management",
      "Gameplay Logic",
      "Testable Architecture",
    ],
    actions: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jaeyunjks/BubblePopGame",
      },
      {
        label: "View Case Study",
        href: "/projects/focuspop",
      },
    ],
    tier: "other",
    projectType: "ios-game",
    projectDisplayType: "Mobile game",
    projectDate: "2026",
    imageSrc: "/images/projects/focuspop-preview.png",
    caseStudyStatus: "Case study",
    areaAnchors: [],
    filters: ["mobile"],
  },
  {
    id: "personal-portfolio",
    title: "This Portfolio",
    category: "Frontend / Engineering Practice",
    status: "Live / Iterating",
    role: "Design & development",
    summary:
      "The site you're on: Next.js, React, TypeScript and Tailwind, with CI (lint, typecheck, tests, build), content-integrity tests and a single source of truth for profile data.",
    problem:
      "A portfolio has to stay accurate as experience changes, and has to show engineering practice, not only screenshots.",
    contributions: [
      "Designed the visual system and built every page and component.",
      "Added CI with lint, typecheck, Vitest and build checks on every pull request.",
      "Wrote content-integrity tests for assets, links and placeholder text.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest", "GitHub Actions"],
    skills: ["Frontend Engineering", "UI Design", "CI/CD", "Testing"],
    actions: [
      {
        label: "GitHub Repo",
        href: "https://github.com/jaeyunjks/yafie-portfolio",
      },
      {
        label: "Previous version",
        href: "https://yafie-portfolio.vercel.app",
      },
    ],
    tier: "other",
    projectType: "portfolio",
    projectDisplayType: "Personal website",
    projectDate: "2026",
    imageSrc: "/images/projects/porfolio-project.png",
    caseStudyStatus: "Live",
    areaAnchors: [],
    filters: ["web"],
  },
];

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const otherProjects = projects.filter((p) => p.tier === "other");

/** Home page "Selected work": first three featured projects with an image. */
export const homeFeaturedProjects = featuredProjects
  .filter((p): p is PortfolioProject & { imageSrc: string } => Boolean(p.imageSrc))
  .slice(0, 3);

/** Projects whose card links to an on-site case study page. */
export const caseStudyCount = projects.filter((p) =>
  p.actions.some((a) => !a.disabled && a.href.startsWith("/projects/")),
).length;
