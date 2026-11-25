import {
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  ListChecks,
  LucideIcon,
  PanelsTopLeft,
  Users,
} from "lucide-react";

export type SDSOverviewCard = {
  title: string;
  body: string;
};

export type SDSUserGroup = {
  name: string;
  summary: string;
  problems: {
    title: string;
    body: string;
  }[];
};

export type SDSContribution = {
  title: string;
  body: string;
  featured?: boolean;
};

export type SDSSprint = {
  sprint: string;
  title: string;
  description: string;
  deliveryAreas: string[];
  testingFocus: string;
  employerValue: string;
  deliverables: string[];
};

/** Who built a showcased screen (verified with Yafie, 25 Nov 2026). */
export type SDSOwnership = "mine" | "shared" | "team";

export const sdsOwnershipLabels: Record<SDSOwnership, string> = {
  mine: "Built by me",
  shared: "Shared with frontend dev",
  team: "Team-built",
};

export type SDSFeature = {
  ownership: SDSOwnership;
  title: string;
  body: string;
  value: string;
  status: string;
  imageSrc: string;
  variant: SDSImageVariant;
  icon: LucideIcon;
};

export type SDSTestingCard = {
  title: string;
  body: string;
};

export type SDSReflection = {
  title: string;
  body: string;
};

export type SDSImageVariant =
  | "hero"
  | "dashboard"
  | "form"
  | "status"
  | "schedule"
  | "detail"
  | "request";

/**
 * Single source for SDS facts. projects.ts, workExperience.ts and the case
 * study all read from here, so the role and dates can't drift apart again.
 */
export const sdsFacts = {
  role: "Software Engineer (Frontend & Full-Stack Integration)",
  timeline: "Feb – Jul 2026",
  team: "6-person, client-facing Agile team",
  client: "An academic client at UTS",
  sprints: "5 sprints (Sprint 0 planning + 4 delivery)",
  outcome: "Delivered, handed over, Tech Fest 2026 nominee",
} as const;

export const sdsOverviewCards: SDSOverviewCard[] = [
  {
    title: "The context",
    body: "Software Development Studio involves clients, project briefs, students, team leads, tutors, and coordinators. Each group depends on clear information, reliable timing, and visible project status.",
  },
  {
    title: "The challenge",
    body: "When briefs, project documents, review status, or allocation details are scattered across spreadsheets, shared drives, or manual communication, students and coordinators spend more time searching, confirming, and correcting information.",
  },
  {
    title: "The system direction",
    body: "SDS Project Management Site centralises project workflows so coordinators can review, manage, release, and track projects more clearly, while students and clients gain clearer access to relevant project information.",
  },
  {
    title: "My contribution",
    body: "I built the React student and admin workflows, connected them to the Flask REST API, wrote early Flask routes and SQLite schema changes, and ran QA for the team.",
  },
];

export const sdsUserGroups: SDSUserGroup[] = [
  {
    name: "Admin / Subject Coordinator",
    summary:
      "Needs to review submissions, manage project visibility, coordinate release and allocation timing, communicate with clients, and track project status across the subject.",
    problems: [
      {
        title: "Project brief review visibility",
        body: "Coordinators need to see which project briefs are submitted, incomplete, under review, or ready to release.",
      },
      {
        title: "Easier communication with clients",
        body: "Client details, project updates, and clarification points need to be easier to track during review.",
      },
      {
        title: "Release and allocation date management",
        body: "Semester dates, project release timing, and allocation windows need to be managed clearly.",
      },
      {
        title: "Project status tracking",
        body: "Coordinators need visibility over pending, under review, allocated, on-hold, and revision-required projects.",
      },
      {
        title: "Reducing manual coordination",
        body: "The system should reduce reliance on scattered spreadsheets, emails, and manual tracking.",
      },
    ],
  },
  {
    name: "Student",
    summary:
      "Needs to browse available projects, understand project details, track allocation timing, and submit join requests through a clearer workflow. Team Leads need to manage team submission details accurately.",
    problems: [
      {
        title: "Scattered project information",
        body: "Previously, students could spend time browsing project briefs through spreadsheets, OneDrive folders, or scattered documents.",
      },
      {
        title: "Project discovery friction",
        body: "Students need a clearer catalogue to compare available projects, studio activities, and project details.",
      },
      {
        title: "Allocation timing clarity",
        body: "Students need to understand when projects are released and when allocation or join requests become available.",
      },
      {
        title: "Team Lead responsibility",
        body: "Team Leads need a clear way to submit team member information correctly with tutor involvement where required.",
      },
      {
        title: "Project detail visibility",
        body: "Students need enough information to make informed project choices without exposing restricted client information too early.",
      },
    ],
  },
  {
    name: "Client",
    summary:
      "Needs to submit accurate project information, communicate with coordinators, understand review progress, and know when details need clarification or updates.",
    problems: [
      {
        title: "Brief submission clarity",
        body: "Clients need a structured way to provide project details, requirements, mandatories, and contact information.",
      },
      {
        title: "Better communication with admin",
        body: "Clients benefit when coordinators can review, clarify, and follow up on project details through a clearer workflow.",
      },
      {
        title: "Submission status visibility",
        body: "Clients need to know whether their project is pending, under review, requires revision, or has progressed.",
      },
      {
        title: "Reducing expectation mismatch",
        body: "A clearer submission and review process helps reduce gaps between what is written in the brief and what the client expects.",
      },
      {
        title: "Project detail accuracy",
        body: "Project information should be easier to review and correct before being released to students.",
      },
    ],
  },
  {
    name: "Tutor",
    summary:
      "Needs visibility into relevant project and team context so they can support students, allocation discussions, and project progress where required.",
    problems: [
      {
        title: "Team context visibility",
        body: "Tutors need enough information to understand student and team project choices and join request context.",
      },
      {
        title: "Allocation support",
        body: "Tutors may need to support students during allocation or team formation activities.",
      },
      {
        title: "Progress discussion context",
        body: "Tutors benefit from clearer project information when discussing scope, requirements, and team direction.",
      },
      {
        title: "Reduced manual clarification",
        body: "A clearer system reduces the need for repeated explanation across students, coordinators, and tutors.",
      },
    ],
  },
];

export const sdsContributions: SDSContribution[] = [
  {
    title: "Student & admin workflows",
    body: "Built the React student and admin workflows (catalogue, join requests, rosters, imports, exports, reports and project status) from client requirements.",
    featured: true,
  },
  {
    title: "API & data integration",
    body: "Connected the interfaces to the Flask REST API, and wrote early Flask routes and SQLite schema changes.",
    featured: true,
  },
  {
    title: "Team QA",
    body: "Ran QA for the team: wrote Vitest + React Testing Library unit and integration tests and fixed the defects they found.",
  },
  {
    title: "Client delivery",
    body: "Took part in sprint planning and reviews across five sprints, and in the handover to a client who was happy with the result.",
  },
];

export const sdsSkills = [
  "React",
  "JavaScript",
  "Flask",
  "SQLite",
  "Vitest",
  "React Testing Library",
];

export const sdsSprints: SDSSprint[] = [
  {
    sprint: "Sprint 0",
    title: "Discovery, requirements, and planning",
    description:
      "Focused on understanding the system context, user groups, workflow pain points, and project expectations before implementation.",
    deliveryAreas: [
      "stakeholder requirements",
      "user stories",
      "Jira planning",
      "acceptance criteria",
      "requirements testing",
    ],
    testingFocus:
      "Checked whether requirements were clear, testable, and connected to real user workflows.",
    employerValue:
      "Shows requirements thinking, planning discipline, and the ability to clarify ambiguous work before building.",
    deliverables: [
      "user stories",
      "acceptance criteria",
      "Jira task structure",
      "early workflow assumptions",
      "requirements validation notes",
    ],
  },
  {
    sprint: "Sprint 1",
    title: "Frontend design and implementation foundations",
    description:
      "Focused on translating early workflow understanding into interface structure, page layouts, navigation patterns, and initial frontend implementation.",
    deliveryAreas: [
      "frontend design",
      "UI layout",
      "navigation flow",
      "component structure",
      "code drafting",
    ],
    testingFocus:
      "Checked layout clarity, navigation consistency, and whether the early interface matched workflow expectations.",
    employerValue:
      "Shows ability to move from requirements into usable frontend structure.",
    deliverables: [
      "early screen layouts",
      "initial React components",
      "navigation patterns",
      "reusable UI structure",
      "design refinements",
    ],
  },
  {
    sprint: "Sprint 2",
    title: "Feature implementation and integration testing",
    description:
      "Focused on building key workflow features and checking how frontend behaviour connected across project management screens.",
    deliveryAreas: [
      "frontend implementation",
      "workflow features",
      "form behaviour",
      "unit testing",
      "integration testing",
    ],
    testingFocus:
      "Tested important UI behaviours, data flow assumptions, and feature interactions across screens.",
    employerValue:
      "Shows practical implementation, debugging, and ability to test how features work together.",
    deliverables: [
      "project management interfaces",
      "form and status behaviours",
      "unit test coverage where applicable",
      "integration test checks",
      "bug observations",
    ],
  },
  {
    sprint: "Sprint 3",
    title: "Refinement, usability, and consistency",
    description:
      "Focused on improving usability, visual consistency, edge cases, and workflow clarity after testing and feedback.",
    deliveryAreas: [
      "UI refinement",
      "usability fixes",
      "regression checks",
      "edge cases",
      "design consistency",
    ],
    testingFocus:
      "Retested key flows after changes and checked whether improvements introduced new issues.",
    employerValue:
      "Shows iteration mindset, attention to detail, and quality-focused frontend refinement.",
    deliverables: [
      "refined screens",
      "bug fixes",
      "improved interaction states",
      "consistency improvements",
      "updated testing notes",
    ],
  },
  {
    sprint: "Sprint 4",
    title: "Workflow visibility & documentation",
    description:
      "Focused on making project information easier to track, documenting important decisions, and preparing the system for clearer continuation or handover.",
    deliveryAreas: [
      "workflow visibility",
      "project status clarity",
      "documentation",
      "handover notes",
      "final review",
    ],
    testingFocus:
      "Checked whether key workflows were understandable, documented, and ready for review or continuation.",
    employerValue:
      "Shows delivery maturity, documentation awareness, and understanding that software must be maintainable beyond implementation.",
    deliverables: [
      "workflow visibility improvements",
      "documentation notes",
      "handover support",
      "final testing observations",
      "project review preparation",
    ],
  },
];

export const sdsFeatures: SDSFeature[] = [
  {
    ownership: "shared",
    title: "Admin dashboard",
    body: "Admin / Subject Coordinator view for status overview, incoming submissions, review queues, and project visibility.",
    value: "Helps coordinators scan project activity and review work with clearer context.",
    status: "Coordinator workflow",
    imageSrc: "/images/projects/SDS/admin-dashboard.png",
    variant: "dashboard",
    icon: LayoutDashboard,
  },
  {
    ownership: "team",
    title: "Project EOI form",
    body: "Client-facing project brief submission flow for collecting project details, requirements, and review information.",
    value: "Turns project intake into a clearer structured path for brief visibility.",
    status: "Client submission",
    imageSrc: "/images/projects/SDS/eoi-form.png",
    variant: "form",
    icon: FileText,
  },
  {
    ownership: "mine",
    title: "My applications",
    body: "Student-facing submitted application status tracking for project requests and allocation context.",
    value: "Makes submitted work easier to follow after the initial application flow.",
    status: "Status tracking",
    imageSrc: "/images/projects/SDS/project-catalogue.png",
    variant: "status",
    icon: ClipboardCheck,
  },
  {
    ownership: "mine",
    title: "Studio activities",
    body: "Semester scheduling, release dates, allocation open dates, and timetable visibility.",
    value: "Improves timing clarity for Admin / Subject Coordinator workflows and student allocation stages.",
    status: "Scheduling",
    imageSrc: "/images/projects/SDS/studio-act-2.png",
    variant: "schedule",
    icon: ListChecks,
  },
  {
    ownership: "mine",
    title: "Project detail page",
    body: "Project information, mandatories, client visibility, attachments, and join request entry point.",
    value: "Gives Students and Team Leads clearer project context before acting.",
    status: "Project context",
    imageSrc: "/images/projects/SDS/student-project.png",
    variant: "detail",
    icon: PanelsTopLeft,
  },
  {
    ownership: "mine",
    title: "Join request flow",
    body: "Team Lead request form with student ID entry and tutor-present requirement.",
    value: "Supports a more structured Student and Team Lead request workflow.",
    status: "Team workflow",
    imageSrc: "/images/projects/SDS/student-request-project.png",
    variant: "request",
    icon: Users,
  },
  {
    ownership: "team",
    title: "Client dashboard",
    body: "Client-facing dashboard for tracking submitted project briefs, review progress, and project updates.",
    value: "Gives clients clearer visibility over submission status and coordinator follow-up.",
    status: "Client view",
    imageSrc: "/images/projects/SDS/client-dashboard.png",
    variant: "dashboard",
    icon: Users,
  },
];

export const sdsTestingCards: SDSTestingCard[] = [
  {
    title: "User-flow testing",
    body: "Checked important user journeys such as project submission, review status, project detail access, and join request flow.",
  },
  {
    title: "UI consistency",
    body: "Reviewed screens for layout consistency, readable hierarchy, and clear interaction states.",
  },
  {
    title: "Bug identification",
    body: "Identified issues that affected workflow clarity, validation, or expected system behaviour.",
  },
  {
    title: "Refinement feedback",
    body: "Used testing observations to improve usability, handover clarity, and team discussion.",
  },
];

export const sdsTestingLifecycle = [
  "Explore",
  "Test",
  "Identify",
  "Refine",
  "Document",
];

export const sdsReflections: SDSReflection[] = [
  {
    title: "Software is workflow",
    body: "I learned that a good system is not only about screens, but about how people move through tasks, decisions, visibility, and handoffs.",
  },
  {
    title: "Testing reveals unclear logic",
    body: "Testing helped expose where interactions, validation, status changes, or allocation timing could become confusing.",
  },
  {
    title: "Communication shapes delivery",
    body: "Explaining decisions, documenting behaviour, and aligning with teammates is part of building useful software that others can continue.",
  },
];

/** Replaces "next improvements": the project was delivered and handed over. */
export const sdsProof = [
  "Worked like a full-time engineer in a six-person, client-facing Agile team.",
  "Turned client requirements into working software across five sprints.",
  "Dealt directly with the client in sprint reviews and the final handover.",
  "Delivered to a client who was happy with the result, and earned a Tech Fest 2026 showcase nomination.",
];
