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
};

export type SDSPainPoint = {
  title: string;
  body: string;
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
};

export type SDSFeature = {
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

export const sdsMetadata = [
  "Role: Frontend Developer & Tester",
  "Timeline: Feb 2026 - Present",
  "Context: UTS Software Development Studio",
  "Focus: Workflow systems - testing - frontend UI",
];

export const sdsOverviewCards: SDSOverviewCard[] = [
  {
    title: "The context",
    body: "Software Development Studio involves project submissions, student allocation, reviews, coordination, and communication between different users.",
  },
  {
    title: "The challenge",
    body: "Manual or disconnected workflows can make it harder for coordinators to track progress, review submissions, manage project visibility, and support allocation activities.",
  },
  {
    title: "The system direction",
    body: "The system modernises project coordination by centralising key workflows into a clearer web-based interface.",
  },
  {
    title: "My contribution",
    body: "I contributed through frontend development, testing, UI refinement, and helping translate workflow needs into practical interface behaviour.",
  },
];

export const sdsUserGroups: SDSUserGroup[] = [
  {
    name: "Subject coordinators",
    summary:
      "Need visibility over submitted projects, review status, studio activity schedules, and allocation workflow.",
  },
  {
    name: "Admin users",
    summary:
      "Need practical tools to manage submitted project data, review states, schedules, and coordinator-facing workflow signals.",
  },
  {
    name: "Clients",
    summary:
      "Need a clear submission path for project details, mandatory requirements, attachments, and review feedback.",
  },
  {
    name: "Students / team leads",
    summary:
      "Need accessible project details, application status visibility, and a clearer join request flow for team coordination.",
  },
  {
    name: "Tutors",
    summary:
      "Need better context around student activity, allocation timing, and the workflow checkpoints that affect studio support.",
  },
];

export const sdsPainPoints: SDSPainPoint[] = [
  {
    title: "Project submission visibility",
    body: "Submitted projects need to be easier to track, review, and understand across coordinator and admin workflows.",
  },
  {
    title: "Review status tracking",
    body: "Status changes should communicate where a project sits in the review process without relying on disconnected updates.",
  },
  {
    title: "Allocation timing",
    body: "Allocation windows and studio activity timing need clearer presentation so users can act at the right stage.",
  },
  {
    title: "Student join request flow",
    body: "Team leads need a structured request path that captures student details and tutor-present requirements clearly.",
  },
  {
    title: "Project detail access",
    body: "Students and clients benefit from project information that is readable, complete, and easy to navigate.",
  },
  {
    title: "Documentation and handover",
    body: "A workflow system needs clear documentation so behaviour, decisions, and known gaps can be understood later.",
  },
];

export const sdsContributions: SDSContribution[] = [
  {
    title: "Frontend implementation",
    body: "Built and refined screens that support project management, submissions, status visibility, and coordinator workflows.",
    featured: true,
  },
  {
    title: "Testing user flows",
    body: "Tested key interactions to identify UI issues, workflow bugs, edge cases, and unclear behaviours.",
    featured: true,
  },
  {
    title: "Workflow understanding",
    body: "Helped translate academic coordination needs into structured interface flows and usable project-management interactions.",
  },
  {
    title: "Documentation & handover",
    body: "Supported clearer documentation, decision explanation, and handover readiness.",
  },
];

export const sdsSkills = [
  "React",
  "Frontend UI",
  "Testing",
  "Workflow Systems",
  "Debugging",
  "Documentation",
  "Team Collaboration",
  "Product Thinking",
];

export const sdsSprints: SDSSprint[] = [
  {
    sprint: "Sprint 0",
    title: "Discovery & requirements",
    description:
      "Clarified coordinator workflow needs, project allocation pain points, and system expectations.",
  },
  {
    sprint: "Sprint 1",
    title: "Frontend foundations",
    description:
      "Built core interface structure, navigation patterns, and early workflow screens.",
  },
  {
    sprint: "Sprint 2",
    title: "Feature implementation",
    description:
      "Developed project-management interfaces and refined user flows for coordinator tasks.",
  },
  {
    sprint: "Sprint 3",
    title: "Testing & refinement",
    description:
      "Tested important flows, identified usability issues, and improved consistency across features.",
  },
  {
    sprint: "Sprint 4",
    title: "Workflow visibility & documentation",
    description:
      "Improved project visibility, documented decisions, and prepared the system for clearer handover.",
  },
];

export const sdsDeliveryAreas = [
  "requirements",
  "frontend UI",
  "testing",
  "workflow visibility",
  "documentation",
];

export const sdsFeatures: SDSFeature[] = [
  {
    title: "Admin dashboard",
    body: "Status overview, incoming submissions, review queues, and coordinator visibility.",
    value: "Helps coordinators scan project activity and review work faster.",
    status: "Coordinator view",
    imageSrc: "/images/projects/sds/admin-dashboard.png",
    variant: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Project EOI form",
    body: "Client/project submission flow for collecting project details.",
    value: "Turns project intake into a clearer structured submission path.",
    status: "Submission flow",
    imageSrc: "/images/projects/sds/eoi-form.png",
    variant: "form",
    icon: FileText,
  },
  {
    title: "My applications",
    body: "Student/client-facing submitted application status tracking.",
    value: "Makes submitted work easier to follow after the initial form flow.",
    status: "Status tracking",
    imageSrc: "/images/projects/sds/my-applications.png",
    variant: "status",
    icon: ClipboardCheck,
  },
  {
    title: "Studio activities",
    body: "Semester scheduling, release dates, allocation open dates, and timetable visibility.",
    value: "Improves timing clarity around studio milestones and allocation stages.",
    status: "Scheduling",
    imageSrc: "/images/projects/sds/studio-activities.png",
    variant: "schedule",
    icon: ListChecks,
  },
  {
    title: "Project detail page",
    body: "Project information, mandatories, client visibility, attachments, and join request entry point.",
    value: "Gives students and team leads clearer project context before acting.",
    status: "Project context",
    imageSrc: "/images/projects/sds/project-detail.png",
    variant: "detail",
    icon: PanelsTopLeft,
  },
  {
    title: "Join request flow",
    body: "Team lead request form with student ID entry and tutor-present requirement.",
    value: "Supports a more structured and auditable team request workflow.",
    status: "Team workflow",
    imageSrc: "/images/projects/sds/join-request.png",
    variant: "request",
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
    body: "I learned that a good system is not only about screens, but about how people move through tasks, decisions, and handoffs.",
  },
  {
    title: "Testing reveals unclear logic",
    body: "Testing helped expose where interactions, validation, or status changes could become confusing.",
  },
  {
    title: "Communication shapes delivery",
    body: "Explaining decisions, documenting behaviour, and aligning with teammates is part of building useful software.",
  },
];

export const sdsNextImprovements = [
  "clearer analytics/reporting views",
  "stronger role-based access polish",
  "improved handover documentation",
  "more automated testing coverage",
  "better mobile responsiveness",
];
