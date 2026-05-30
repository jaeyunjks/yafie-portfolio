import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Studio Operations Dashboard",
    summary: "A premium admin portal for tracking submissions, meetings, and project health.",
    caseStudy: "Redesigned data-heavy workflows into clear, role-aware views with responsive layout and polished interaction states.",
    category: "Frontend",
    stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    featured: true,
  },
  {
    id: "p2",
    title: "Learning Companion Platform",
    summary: "Cross-platform product helping students organize study spaces and AI summaries.",
    caseStudy: "Shipped a scalable component architecture and improved data contracts between frontend and backend.",
    category: "Full-Stack",
    stack: ["SwiftUI", "NestJS", "Prisma"],
    featured: true,
  },
  {
    id: "p3",
    title: "Design System Starter Kit",
    summary: "Reusable design primitives and accessibility-ready components for startup teams.",
    caseStudy: "Created a token-driven library to speed up feature development and maintain visual consistency.",
    category: "Design System",
    stack: ["React", "Storybook", "TypeScript"],
    featured: true,
  },
  {
    id: "p4",
    title: "Client Insights Workspace",
    summary: "A bento-style insights panel for project updates, KPI trends, and notes.",
    caseStudy: "Built modular card patterns with clear hierarchy to improve readability and executive confidence.",
    category: "Frontend",
    stack: ["Next.js", "Tailwind", "Recharts"],
  },
];
