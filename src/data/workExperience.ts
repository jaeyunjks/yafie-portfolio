import { sdsFacts } from "@/data/caseStudies/sdsModernisation";
export type WorkStatus = "current" | "past" | "pending";

export type WorkSection =
  | "software-experience"
  | "volunteer-experience"
  | "others"
  | "supporting-experience";

export type WorkCategory =
  | "Software Development / Testing"
  | "Volunteer / University Engagement"
  | "Recognition / Project Milestone"
  | "Supporting Leadership Experience"
  | "Supporting Work Experience";

export type WorkExperienceItem = {
  id: string;
  section: WorkSection;
  featured: boolean;
  placeholder?: boolean;
  status: WorkStatus;
  role: string;
  organisation: string;
  location?: string;
  duration: string;
  category: WorkCategory;
  summary: string;
  keyContributions: string[];
  relevance: string;
  skills: string[];
  responsibilities?: string[];
};

export type WorkGalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  aspectRatio: "landscape" | "portrait";
};

export const workExperience: WorkExperienceItem[] = [
  {
    id: "sds-modernisation-frontend-tester",
    section: "software-experience",
    featured: true,
    status: "past",
    role: sdsFacts.role,
    organisation: "SDS Modernisation · UTS Software Development Studio",
    duration: sdsFacts.timeline,
    category: "Software Development / Testing",
    summary:
      "Built a full-stack project management system for an academic client at UTS in a six-person, client-facing Agile team. It replaced manual proposal, discovery, join-request, scheduling and allocation workflows, was handed over to a satisfied client, and was nominated for the UTS Software Engineering Tech Fest 2026 showcase.",
    keyContributions: [
      "Built the React student and admin workflows (catalogue, join requests, rosters, imports, exports, reports, project status) from client requirements and connected them to the Flask REST API.",
      "Wrote early Flask routes and SQLite schema changes.",
      "Ran QA for the team: wrote Vitest + React Testing Library unit and integration tests and fixed the defects they found.",
      "Took part in sprint planning, sprint reviews and the client handover.",
    ],
    relevance:
      "The closest thing to a full-time engineering role: a real client, a six-person team, five sprints, and software that was delivered and handed over.",
    skills: [
      "React",
      "JavaScript",
      "Flask",
      "SQLite",
      "Vitest",
      "React Testing Library",
      "Client Delivery",
      "Agile / Scrum",
    ],
  },
  {
    id: "uts-tech-fest",
    section: "volunteer-experience",
    featured: false,
    status: "past",
    role: "Tech Fest Participant / Volunteer",
    organisation: "UTS Tech Fest",
    duration: "2026",
    category: "Volunteer / University Engagement",
    summary:
      "Participated in UTS Tech Fest as part of a project showcase environment, contributing to presentation, communication, and project explanation in a professional university setting.",
    keyContributions: [
      "Supported project showcase preparation and presentation.",
      "Explained project purpose, workflow, and value to different audiences.",
      "Practised communicating technical ideas clearly and professionally.",
      "Represented project work in a public-facing academic environment.",
    ],
    relevance:
      "Strengthens communication, stakeholder explanation, demo readiness, and confidence presenting software work.",
    skills: [
      "Presentation",
      "Communication",
      "Project Showcase",
      "Stakeholder Explanation",
      "Professional Engagement",
    ],
  },
  {
    id: "hacknow-2026-first-place",
    section: "others",
    featured: false,
    status: "past",
    role: "1st Place · ServiceNow ANZ HackNow 2026",
    organisation: "ServiceNow ANZ HackNow 2026",
    duration: "Jul 2026",
    category: "Recognition / Project Milestone",
    summary:
      "Won 1st place with Silver Service, an AI agent prototype built in a four-person team that helps older Australians and their trusted circle access citizen services.",
    keyContributions: [
      "Designed the eligibility, consent and permission models in ServiceNow AI Agent Studio, Build Agent and Flow Designer.",
      "Kept a human approval step in the agent workflow.",
    ],
    relevance:
      "Shows applied AI agent design on an enterprise platform under hackathon time pressure.",
    skills: ["ServiceNow", "AI Agents", "Flow Designer", "Teamwork"],
  },
  {
    id: "tech-fest-2026-nomination",
    section: "others",
    featured: false,
    status: "past",
    role: "Showcase Nominee · UTS SE Tech Fest 2026",
    organisation: "UTS Software Engineering Tech Fest 2026",
    duration: "2026",
    category: "Recognition / Project Milestone",
    summary:
      "Two projects I worked on were nominated for the Tech Fest 2026 showcase: the SDS Project Management Site and Lumora AI.",
    keyContributions: [
      "SDS Project Management Site: built the student and admin workflows and ran QA.",
      "Lumora AI: built the app's AI features.",
    ],
    relevance:
      "Independent recognition of the quality of both projects.",
    skills: ["Full-Stack Web", "Applied AI", "Software Testing"],
  },
  {
    id: "hospitality-team-leader-current",
    section: "supporting-experience",
    featured: false,
    status: "current",
    role: "Team Leader",
    organisation:
      "Global Hospitality Solutions x The Grand National Hotel by Saint Peter",
    duration: "Current",
    category: "Supporting Leadership Experience",
    summary:
      "Working as a Team Leader in a high-standard hospitality environment at The Grand National Hotel in Saint Peters, operated by Global Hospitality Solutions. The role involves team coordination, quality standards, task prioritisation, and communication in a fast-paced service environment.",
    keyContributions: [
      "The venue is connected to a well-known Australian chef-led hospitality brand, where service quality, presentation, consistency, and operational standards are important.",
    ],
    relevance:
      "This experience supports how I approach software teams: clarifying priorities, coordinating work, maintaining quality standards, communicating blockers, and staying reliable under pressure.",
    skills: [
      "Stakeholder communication",
      "Team coordination",
      "Quality assurance mindset",
      "Prioritisation",
      "Operational workflow thinking",
      "Accountability",
      "Calm problem-solving",
      "Documentation awareness",
    ],
    responsibilities: [
      "Coordinate team tasks and support daily operational flow.",
      "Maintain service and presentation standards in a high-expectation environment.",
      "Communicate priorities clearly with team members and management.",
      "Support quality checks, issue resolution, and time-sensitive execution.",
      "Adapt quickly when workload, priorities, or operational conditions change.",
    ],
  },
  {
    id: "hospitality-supervisor-past",
    section: "supporting-experience",
    featured: false,
    status: "past",
    role: "Supervisor",
    organisation: "Global Hospitality Solutions | Novotel Sydney City Centre",
    duration: "Past Role",
    category: "Supporting Work Experience",
    summary:
      "Supported daily operations, quality checks, task coordination, and communication under pressure.",
    keyContributions: [
      "Supported shift coordination and daily task execution.",
      "Helped maintain quality standards through room or area checks.",
      "Communicated issues and priorities clearly.",
      "Adapted to changing workloads and operational needs.",
    ],
    relevance:
      "Built habits around structured work, detail orientation, process discipline, and communication - useful in testing, documentation, project delivery, and software teamwork.",
    skills: [
      "Supervision",
      "Quality Control",
      "Attention to Detail",
      "Time Management",
      "Adaptability",
    ],
  },
];

export const workSummaryStats = [
  "full-stack development",
  "automated testing",
  "client delivery",
  "Agile teamwork",
];

export const softwareExperience = workExperience.find(
  (item) => item.section === "software-experience",
);

export const volunteerExperience = workExperience.filter(
  (item) => item.section === "volunteer-experience",
);

export const volunteerGalleryItems: WorkGalleryItem[] = [
  {
    src: "/images/achievements/withclientimage.JPG",
    alt: "SDS Project Management Site booth team standing with the client-facing Tech Fest setup",
    title: "With client",
    caption:
      "Client-facing showcase setup for the SDS Project Management Site, including the live screen, booth materials, and QR code handoff.",
    aspectRatio: "landscape",
  },
  {
    src: "/images/achievements/groupselfie.JPG",
    alt: "Team selfie in front of the SDS Project Management Site display at UTS Tech Fest",
    title: "Team selfie",
    caption:
      "A quick team photo from the booth after presenting the project and talking visitors through the system.",
    aspectRatio: "landscape",
  },
  {
    src: "/images/achievements/grouppic.JPG",
    alt: "Group photo beside the SDS Project Management Site booth and live display",
    title: "Group photo",
    caption:
      "Full group photo at the SDS booth with the main display, demo devices, and presentation setup in view.",
    aspectRatio: "landscape",
  },
  {
    src: "/images/achievements/techfestoverview.JPG",
    alt: "Overview of the SDS Project Management Site Tech Fest booth with QR code and demo screens",
    title: "Tech Fest overview",
    caption:
      "A closer look at the booth setup, showing the project board, QR code access, and demo screens used during the showcase.",
    aspectRatio: "portrait",
  },
];

export const otherSignals = workExperience.filter(
  (item) => item.section === "others",
);

export const supportingExperience = workExperience.filter(
  (item) => item.section === "supporting-experience",
);
