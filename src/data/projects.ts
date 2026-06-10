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
  imageSrc?: string;
  caseStudyStatus: string;
  areaAnchors: string[];
  filters: Exclude<ProjectFilter, "all">[];
  badges?: string[];
  deliveryFlow?: string[];
  featuredTechStack?: string[];
  featuredSkills?: string[];
  architecture?: ProjectArchitectureEntry[];
};

export type CaseStudyPreview = {
  title: string;
  status: string;
  includes: string[];
};

export const projects: PortfolioProject[] = [
  {
    id: "sds-modernisation",
    title: "SDS Project Management Site",
    category: "Workflow System / Full-Stack MVC / Frontend & Testing",
    status: "Active / Current",
    role: "Frontend Developer & Tester",
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
    imageSrc: "/images/projects/sds_projects.png",
    caseStudyStatus: "In progress",
    areaAnchors: ["workflow-systems"],
    filters: ["workflow", "web"],
  },
  {
    id: "freshbasket-vendor-portal",
    title: "FreshBasket AWS Deployment",
    category: "AWS Deployment / Full-Stack Deployment",
    status: "Completed / University Project",
    role: "Cloud Deployment / Full-Stack Deployment",
    summary:
      "A documented AWS deployment case study for a Node.js, Express, EJS, and MySQL vendor portal. The project used Elastic Beanstalk, EC2, RDS MySQL, Load Balancer, Auto Scaling, custom VPC networking, security groups, environment variables, and SNS notification setup.",
    problem:
      "The project focused on taking a database-backed vendor portal beyond local development and documenting how the application, database, networking, scaling, and AWS configuration worked together in an AWS Academy deployment environment.",
    contributions: [
      "Deployed a Node.js, Express, EJS, and MySQL vendor portal using AWS Elastic Beanstalk, EC2, and RDS MySQL.",
      "Configured custom VPC networking, public subnets, route table access, Internet Gateway routing, and security groups.",
      "Connected the application to RDS MySQL using environment variables and validated database records through EC2 terminal SQL queries.",
      "Configured load-balanced Elastic Beanstalk deployment settings, Auto Scaling capacity, IAM roles, and health monitoring.",
      "Captured architecture diagrams, AWS configuration screenshots, database connection evidence, and application screenshots for assessment documentation.",
    ],
    techStack: [
      "AWS",
      "Elastic Beanstalk",
      "EC2",
      "RDS MySQL",
      "VPC",
      "Load Balancer",
      "Auto Scaling",
      "SNS",
      "Node.js",
      "Express",
      "EJS",
      "MySQL",
    ],
    skills: [
      "Cloud Deployment",
      "Infrastructure Configuration",
      "Database Connectivity",
      "Network Security",
      "Deployment Debugging",
      "Technical Documentation",
    ],
    badges: [
      "AWS Deployment",
      "Elastic Beanstalk",
      "RDS MySQL",
      "EC2",
      "Load Balanced",
      "Auto Scaling",
    ],
    deliveryFlow: [
      "Prepare App",
      "AWS Network",
      "RDS MySQL",
      "Elastic Beanstalk",
      "Environment Variables",
      "Connection Evidence",
      "Documentation",
    ],
    featuredTechStack: [
      "AWS",
      "Elastic Beanstalk",
      "EC2",
      "RDS MySQL",
      "VPC",
      "Load Balancer",
      "Auto Scaling",
      "SNS",
    ],
    featuredSkills: [
      "Cloud Deployment",
      "Infrastructure Configuration",
      "Database Connectivity",
      "Network Security",
      "Deployment Debugging",
      "Technical Documentation",
    ],
    actions: [
      {
        label: "View Case Study",
        href: "/projects/freshbasket-aws",
      },
      {
        label: "GitHub / Repo",
        href: "https://github.com/jaeyunjks/AWSFreshBasket",
      },
    ],
    featured: true,
    projectType: "cloud",
    imageSrc: "/images/projects/freshbasket.png",
    caseStudyStatus: "Documented",
    areaAnchors: ["cloud-projects"],
    filters: ["cloud", "web"],
  },
  {
    id: "lumora",
    title: "Lumora",
    category: "Mobile / AI-Assisted Learning",
    status: "Concept / In Progress",
    role: "iOS App Designer & Developer",
    summary:
      "A mobile-first smart study companion that helps students organise notes, files, images, and PDFs into clear AI-assisted summaries and study workflows.",
    problem:
      "Students often collect notes, PDFs, screenshots, slides, and images across different tools, but still need a clearer way to organise material and turn it into understanding.",
    contributions: [
      "Created user research, persona direction, and low-fidelity study flows.",
      "Designed mobile-first iOS screens for workspaces, notes, library, and AI summary interactions.",
      "Built SwiftUI MVP flows using MVVM structure and reliable state handling.",
      "Explored AI summary reliability through file/PDF/image content handling and guard checks.",
      "Iterated the product story from rough design to a usable study companion concept.",
    ],
    techStack: [
      "SwiftUI",
      "MVVM",
      "Core Data",
      "FileManager",
      "Vision / PDFKit",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "Figma",
    ],
    skills: [
      "Mobile App Development",
      "Product Thinking",
      "UI/UX Design",
      "AI Workflow",
      "File Handling",
      "User Research",
    ],
    badges: [
      "iOS App",
      "SwiftUI",
      "AI-Assisted Learning",
      "Product Design",
    ],
    actions: [
      {
        label: "View Case Study",
        href: "/projects/lumora",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/jaeyunjks/SmartStudyCompanion",
      },
    ],
    featured: true,
    projectType: "mobile-ai",
    imageSrc: "/images/projects/Lumora/lumora.png",
    caseStudyStatus: "Concept in progress",
    areaAnchors: ["mobile-projects", "ai-tools"],
    filters: ["mobile", "ai"],
  },
  {
    id: "focuspop",
    title: "FocusPop",
    category: "iOS Game / SwiftUI / Testing",
    status: "Submitted",
    role: "SwiftUI Game Developer",
    summary:
      "A polished SwiftUI bubble-popping game built around short focus sessions. Players choose a mode, pop weighted bubbles, build combo scores, and review session results through a clean mobile interface.",
    problem:
      "Short focus sessions can benefit from simple, playful feedback. FocusPop turns a lightweight timer-based session into a clear game loop with scoring, modes, result review, and local leaderboard persistence.",
    contributions: [
      "Built SwiftUI screens for setup, gameplay, pause/resume, result review, and local leaderboard flows.",
      "Structured gameplay state with MVVM, ObservableObject, and published state updates.",
      "Implemented weighted bubble scoring, combo rewards, generation constraints, and two gameplay modes.",
      "Added local persistence for settings and saved scores using UserDefaults, AppStorage, and JSON storage.",
      "Supported reliability with XCTest unit tests, UI tests, and accessibility identifiers for key flows.",
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
    badges: [
      "iOS Game",
      "SwiftUI",
      "MVVM",
      "Testing",
      "Local Persistence",
    ],
    deliveryFlow: [
      "Game Rules",
      "SwiftUI UI",
      "MVVM State",
      "Bubble Generation",
      "Scoring Logic",
      "XCTest / UI Tests",
      "Local Leaderboard",
    ],
    featuredTechStack: [
      "Swift",
      "SwiftUI",
      "Combine",
      "MVVM",
      "UserDefaults",
      "XCTest",
      "UI Testing",
    ],
    featuredSkills: [
      "Mobile Game UI",
      "State Management",
      "Gameplay Logic",
      "Testable Architecture",
      "Accessibility IDs",
      "Iterative UI Polish",
    ],
    actions: [
      {
        label: "View Case Study",
        href: "/projects/focuspop",
      },
      {
        label: "GitHub / Repo",
        href: "https://github.com/jaeyunjks/BubblePopGame",
      },
    ],
    featured: true,
    projectType: "ios-game",
    imageSrc: "/images/projects/focuspop-preview.png",
    caseStudyStatus: "Ready",
    areaAnchors: ["focuspop-game"],
    filters: ["mobile"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Frontend / Design System / Personal Branding",
    status: "Active / Iterating",
    role: "Designer & Frontend Developer",
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
        label: "View Source",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
      {
        label: "View Design Notes",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
    ],
    featured: true,
    projectType: "portfolio",
    imageSrc: "/images/projects/portfolio.png",
    caseStudyStatus: "Iterating",
    areaAnchors: [],
    filters: ["web"],
  },
];

export const caseStudyPreviews: CaseStudyPreview[] = [
  {
    title: "SDS Modernisation Case Study",
    status: "In progress",
    includes: [
      "workflow problem",
      "frontend contribution",
      "testing evidence",
      "project coordination",
    ],
  },
  {
    title: "FreshBasket AWS Deployment Case Study",
    status: "Drafting",
    includes: [
      "architecture",
      "deployment setup",
      "database connection",
      "screenshots/evidence",
    ],
  },
];
