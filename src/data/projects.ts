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
  | "web-mvc"
  | "portfolio";

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
};

export type CaseStudyPreview = {
  title: string;
  status: string;
  includes: string[];
};

export const projects: PortfolioProject[] = [
  {
    id: "sds-modernisation",
    title: "SDS Modernisation",
    category: "Workflow System / Frontend Development / Testing",
    status: "Active / Current",
    role: "Frontend Developer & Tester",
    summary:
      "A workflow system for the Software Development Studio subject at UTS, designed to support subject coordinators with clearer project visibility, review processes, and coordination.",
    problem:
      "Subject coordinators need clearer project workflow visibility, smoother project review processes, and more efficient management of student project activities.",
    contributions: [
      "Frontend interfaces for project and workflow management features.",
      "Testing user flows to identify UI, functionality, and usability issues.",
      "Refining system behaviour and consistency across screens.",
      "Translating academic workflow needs into practical software features.",
      "Supporting clearer handover through documentation and iteration.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Frontend UI",
      "Testing",
      "Workflow Systems",
      "Documentation",
    ],
    skills: [
      "Frontend Development",
      "Software Testing",
      "UI/UX Awareness",
      "Workflow Analysis",
      "Team Collaboration",
      "Product Thinking",
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
    projectType: "workflow",
    imageSrc: "/images/projects/sds_projects.png",
    caseStudyStatus: "In progress",
    areaAnchors: ["workflow-systems"],
    filters: ["workflow", "web"],
  },
  {
    id: "freshbasket-vendor-portal",
    title: "FreshBasket Vendor Portal",
    category: "Full-Stack / Cloud Deployment",
    status: "Completed / University Project",
    role: "Full-Stack Developer",
    summary:
      "A cloud-deployed produce marketplace/vendor portal built with Node.js, Express, EJS, MySQL, and AWS services.",
    problem:
      "The project demonstrates how a practical marketplace-style application can support produce selection, order/request management, admin status updates, and database-backed workflows.",
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
        label: "View Case Study",
        href: "#",
        disabled: true,
        note: "Coming soon",
      },
      {
        label: "GitHub / Repo",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
      {
        label: "Deployment Evidence",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
    ],
    featured: true,
    projectType: "cloud",
    imageSrc: "/images/projects/freshbasket.png",
    caseStudyStatus: "Drafting",
    areaAnchors: ["cloud-projects"],
    filters: ["cloud", "web"],
  },
  {
    id: "lumora",
    title: "Lumora",
    category: "Mobile / AI-Assisted Learning",
    status: "Concept / In Progress",
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
        label: "View Concept",
        href: "#",
        disabled: true,
        note: "Coming soon",
      },
      {
        label: "Case Study",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
    ],
    featured: true,
    projectType: "mobile-ai",
    imageSrc: "/images/projects/lumora.png",
    caseStudyStatus: "Concept in progress",
    areaAnchors: ["mobile-projects", "ai-tools"],
    filters: ["mobile", "ai"],
  },
  {
    id: "iotbay-shipment-management",
    title: "IoTBay Shipment Management",
    category: "Web Application / MVC / CRUD",
    status: "Completed / University Project",
    role: "Shipment Management Feature Developer",
    summary:
      "A shipment management module built as part of an IoTBay web application using Java, JSP, Servlets, SQLite, DAO patterns, and MVC architecture.",
    problem:
      "The system needed a dedicated shipment management feature to create, view, update, delete, and manage shipment records in a structured web application.",
    contributions: [
      "Implemented shipment CRUD functionality.",
      "Created servlets for add, update, delete, search, and view flows.",
      "Connected JSP views with backend controller logic and database access.",
      "Followed MVC structure and DAO patterns.",
      "Supported testing documentation and defect tracking.",
    ],
    techStack: ["Java", "JSP", "Servlets", "SQLite", "DAO", "MVC", "Tomcat"],
    skills: [
      "Backend Logic",
      "MVC Architecture",
      "CRUD Implementation",
      "Database Handling",
      "Testing Documentation",
      "Java Web Development",
    ],
    actions: [
      {
        label: "View Case Study",
        href: "#",
        disabled: true,
        note: "Coming soon",
      },
      {
        label: "GitHub / Repo",
        href: "#",
        disabled: true,
        note: "Placeholder",
      },
    ],
    featured: true,
    projectType: "web-mvc",
    imageSrc: "/images/projects/iotbay-shipment.png",
    caseStudyStatus: "Drafting",
    areaAnchors: [],
    filters: ["web"],
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
  {
    title: "IoTBay Shipment Management Case Study",
    status: "Drafting",
    includes: ["MVC structure", "CRUD flows", "servlets/DAO", "testing documentation"],
  },
];
