export type ProjectAction = {
  label: string;
  href: string;
  disabled?: boolean;
  note?: string;
};

export type ProjectFilter =
  | "all"
  | "web"
  | "workflow"
  | "cloud"
  | "mobile"
  | "game"
  | "ai";

export type ProjectType =
  | "workflow"
  | "cloud"
  | "mobile-ai"
  | "ios-game"
  | "web-mvc"
  | "portfolio"
  | "fullstack-workflow";

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
  featured: boolean;
  projectType: ProjectType;
  projectDisplayType?: string;
  projectDate?: string;
  imageSrc?: string;
  caseStudyStatus: string;
  areaAnchors: string[];
  filters: Exclude<ProjectFilter, "all">[];
  badges?: string[];
  deliveryFlow?: string[];
  featuredTechStack?: string[];
  featuredSkills?: string[];
  architecture?: ProjectArchitectureEntry[];
  recognitionFlag?: string;
};

export const SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION =
  "This project is nominated in Software Engineering Tech Fest";

export const projects: PortfolioProject[] = [
  {
    id: "sds-modernisation",
    title: "SDS Project Management Site",
    category: "Workflow System / Full-Stack MVC / Frontend & Testing",
    status: "Completed",
    role: "Frontend Developer & QA Engineer",
    summary:
      "A full-stack project management workflow system for the Software Development Studio subject at UTS. The system supports project brief submission, admin/coordinator review, student project discovery, team join requests, studio activity scheduling, client visibility, and project allocation workflows.",
    problem:
      "The SDS workflow involves multiple user groups, including coordinators/admins, clients, students, team leads, and tutors. Before centralisation, project information, review status, allocation timing, and supporting documents could become scattered across manual tools, shared drives, spreadsheets, or email communication. The system aims to reduce this fragmentation by bringing submission, review, project discovery, join request, and allocation workflows into a clearer web-based interface.",
    contributions: [
      "Built and refined React + TypeScript interfaces for project management, project details, forms, dashboards, and workflow visibility.",
      "Tested key user flows across project submission, coordinator review, student project browsing, join requests, and status-based behaviours.",
      "Helped validate frontend behaviour against requirements, user stories, and acceptance criteria.",
      "Worked with form handling, routing, state updates, and API-connected workflows.",
      "Supported consistency, usability, and documentation across screens so the system was easier to maintain and hand over.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Flask",
      "SQLite",
      "Vite",
      "React Router",
      "Axios",
      "Zod",
      "Vitest",
      "Pytest",
    ],
    skills: [
      "Frontend Development",
      "Full-Stack Workflow",
      "Software Testing",
      "UI/UX Awareness",
      "Data Modelling",
      "Workflow Analysis",
      "Team Collaboration",
      "Documentation",
    ],
    badges: [
      "Workflow System",
      "Full-Stack MVC",
      "Frontend & Testing",
    ],
    deliveryFlow: [
      "Requirements",
      "Frontend UI",
      "Flask APIs",
      "Data Validation",
      "Testing",
      "Workflow Visibility",
      "Documentation",
    ],
    featuredTechStack: [
      "React",
      "TypeScript",
      "Flask",
      "SQLite",
      "Vite",
      "Testing",
    ],
    featuredSkills: [
      "Frontend Development",
      "Full-Stack Workflow",
      "Software Testing",
      "UI/UX Awareness",
      "Data Modelling",
      "Workflow Analysis",
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
        technology: "React + TypeScript + CSS",
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
      {
        label: "GitHub / Repo",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
      {
        label: "Live Demo",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
    ],
    featured: true,
    projectType: "fullstack-workflow",
    projectDisplayType: "Workflow system",
    projectDate: "Feb 2026 - Present",
    imageSrc: "/images/projects/sds_projects.png",
    caseStudyStatus: "In progress",
    areaAnchors: ["workflow-systems"],
    filters: ["workflow", "web"],
    recognitionFlag: SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION,
  },
  {
    id: "freshbasket-aws",
    title: "FreshBasket AWS Deployment",
    category: "Cloud Deployment / Full-Stack Deployment",
    status: "Completed",
    role: "Cloud Deployment / Full-Stack Deployment",
    summary:
      "A documented AWS deployment case study for a Node.js, Express, EJS, and MySQL vendor portal using Elastic Beanstalk, EC2, RDS MySQL, load balancing, Auto Scaling, VPC networking, security groups, environment variables, and SNS notification setup.",
    problem:
      "The project demonstrates how a full-stack vendor portal can be configured, deployed, connected to a managed database, and documented in an AWS Academy Learner Lab environment after the live deployment expires.",
    contributions: [
      "Built customer-facing produce box request flow.",
      "Implemented admin request/status management.",
      "Connected application logic to MySQL/RDS database.",
      "Deployed application using AWS services.",
      "Captured evidence of cloud architecture, deployment, and database connectivity.",
    ],
    techStack: [
      "Node.js",
      "Express",
      "EJS",
      "MySQL",
      "AWS Elastic Beanstalk",
      "RDS",
      "EC2",
      "SNS",
      "VPC",
      "Auto Scaling",
    ],
    skills: [
      "Full-Stack Development",
      "Backend Logic",
      "Database Integration",
      "Cloud Deployment",
      "CRUD Workflows",
      "Admin Interfaces",
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
    featured: true,
    projectType: "cloud",
    projectDisplayType: "Cloud deployment",
    projectDate: "2026",
    imageSrc: "/images/projects/freshbasket.png",
    caseStudyStatus: "Documented",
    areaAnchors: ["cloud-projects"],
    filters: ["cloud", "web"],
  },
  {
    id: "lumora",
    title: "Lumora",
    category: "Mobile / AI-Assisted Learning",
    status: "Beta (Under Development)",
    role: "Product Design & Mobile Development",
    summary:
      "An AI-powered study workspace concept designed to support focused learning, flashcards, and productivity workflows.",
    problem:
      "Students need learning tools that support focus and active recall without overwhelming them with unnecessary complexity.",
    contributions: [
      "Designed product flow and interface direction.",
      "Explored AI-assisted learning interactions.",
      "Planned mobile-first experience and study workflow.",
      "Developed early concept direction for productivity and learning support.",
    ],
    techStack: [
      "SwiftUI",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT Auth",
      "AI Integration",
      "Firebase",
      "Mobile UI",
      "Product Design",
    ],
    skills: [
      "Mobile Interface Design",
      "Product Thinking",
      "AI-Assisted Workflows",
      "UX Planning",
      "Learning Tool Design",
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
    featured: true,
    projectType: "mobile-ai",
    projectDisplayType: "iOS / AI study app",
    projectDate: "2026",
    featuredTechStack: [
      "SwiftUI",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT Auth",
      "AI Integration",
    ],
    imageSrc: "/images/projects/Lumora/lumora.png",
    caseStudyStatus: "Concept in progress",
    areaAnchors: ["mobile-projects", "ai-tools"],
    filters: ["mobile", "ai"],
    recognitionFlag: SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION,
  },
  {
    id: "focuspop",
    title: "FocusPop",
    category: "Mobile Game / SwiftUI",
    status: "Completed",
    role: "iOS Game Designer & Developer",
    summary:
      "A polished SwiftUI bubble-popping game built around short focus sessions. Players choose a mode, pop weighted bubbles, build combo scores, and review session results through a clean mobile interface.",
    problem:
      "FocusPop explores how a small mobile game can make short focus sessions feel playful while keeping gameplay logic, scoring, persistence, and testing clear.",
    contributions: [
      "Designed a SwiftUI game flow from player setup to final score review.",
      "Implemented mode selection, timed sessions, bubble generation, scoring, combo logic, and pause/resume behaviour.",
      "Structured gameplay state with MVVM patterns and ObservableObject state updates.",
      "Used local persistence for settings and high-score leaderboard behaviour.",
      "Validated core gameplay logic with XCTest and UI test coverage.",
    ],
    techStack: [
      "Swift",
      "SwiftUI",
      "Combine",
      "MVVM",
      "UserDefaults",
      "XCTest",
      "UI Testing",
    ],
    skills: [
      "Mobile Game UI",
      "State Management",
      "Gameplay Logic",
      "Testable Architecture",
      "Accessibility IDs",
      "Iterative UI Polish",
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
    featured: true,
    projectType: "ios-game",
    projectDisplayType: "Mobile game",
    projectDate: "2026",
    imageSrc: "/images/projects/focuspop-preview.png",
    caseStudyStatus: "Submitted",
    areaAnchors: ["mobile-projects", "game-projects"],
    filters: ["mobile", "game"],
  },

  {
    id: "personal-portfolio",
    title: "Portfolio Redesign & Personal Brand System",
    category: "Frontend / Design System / Personal Branding",
    status: "In progress",
    role: "Frontend Developer & UI/UX Designer",
    summary:
      "A premium software engineering portfolio designed to present projects, work experience, skills, and personal story with a strong visual identity and recruiter-friendly structure.",
    problem:
      "I needed a professional portfolio that communicates software engineering ability, product thinking, practical work experience, and long-term growth clearly.",
    contributions: [
      "Designed a soft premium SaaS visual system.",
      "Built homepage, about, work, and projects pages.",
      "Created reusable components and structured page sections.",
      "Refined content for employer readability.",
      "Improved animations, responsiveness, and visual hierarchy.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design System",
    ],
    skills: [
      "Frontend Development",
      "UI/UX Design",
      "Component Design",
      "Responsive Design",
      "Content Strategy",
      "Personal Branding",
    ],
    actions: [
      {
        label: "View Case Study",
        href: "#",
        disabled: true,
        note: "Planned",
      },
      {
        label: "GitHub / Repo",
        href: "#",
        disabled: true,
        note: "Add repo",
      },
    ],
    featured: true,
    projectType: "portfolio",
    projectDisplayType: "Personal Website / UI System",
    projectDate: "2026",
    imageSrc: "/images/projects/porfolio-project.png",
    caseStudyStatus: "Iterating",
    areaAnchors: [],
    filters: ["web"],
  },
];
