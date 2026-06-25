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
    status: "current",
    role: "Frontend Developer & QA Engineer",
    organisation: "SDS Modernisation",
    duration: "Feb 2026 - Present",
    category: "Software Development / Testing",
    summary:
      "Working on SDS Modernisation, a software system for the Software Development Studio subject at UTS. The system supports subject coordinators by improving project workflow visibility, project review processes, and coordination across student project activities.",
    keyContributions: [
      "Developed frontend interfaces for workflow and project-management features.",
      "Tested user flows to identify UI, functionality, and usability issues.",
      "Helped translate coordinator workflow needs into practical software features.",
      "Collaborated with team members across implementation, debugging, and refinement.",
      "Supported clearer project visibility, documentation, and handover.",
    ],
    relevance:
      "This role directly strengthens my frontend development, software testing, product thinking, workflow analysis, and team collaboration skills.",
    skills: [
      "Frontend Development",
      "Software Testing",
      "React",
      "Workflow Systems",
      "UI/UX Awareness",
      "Debugging",
      "Documentation",
      "Team Collaboration",
      "Product Thinking",
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
    id: "project-nomination-placeholder",
    section: "others",
    featured: false,
    placeholder: true,
    status: "pending",
    role: "Project Nomination",
    organisation: "University Software / Project Work",
    duration: "Details to be added",
    category: "Recognition / Project Milestone",
    summary:
      "Placeholder for project nomination details, showcase invitation, or recognition related to university software/project work.",
    keyContributions: [
      "This area will be updated with nomination details, project showcase context, or recognition evidence once final information is confirmed.",
    ],
    relevance:
      "Evidence pending. This placeholder avoids inventing award details while reserving space for confirmed project recognition.",
    skills: ["Evidence Pending", "Details To Be Added"],
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
  "frontend development",
  "software testing",
  "workflow improvement",
  "team collaboration",
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
