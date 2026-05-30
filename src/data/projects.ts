import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lumora",
    title: "Lumora",
    summary: "An AI-powered study workspace designed for smarter learning and streamlined productivity. Featuring intelligent flashcards and deep focus analytics.",
    caseStudy: "Designed a focused learning workspace that combines AI-assisted study generation, progress visibility, and calm mobile-first interaction design.",
    category: "Featured Project",
    stack: ["SwiftUI", "AI Integration", "Firebase"],
    featured: true,
  },
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
    title: "Design System Starter Kit",
    summary: "Reusable design primitives and accessibility-ready components for startup teams.",
    caseStudy: "Created a token-driven library to speed up feature development and maintain visual consistency.",
    category: "Design System",
    stack: ["React", "Storybook", "TypeScript"],
    featured: true,
  },
  {
    id: "p3",
    title: "Client Insights Workspace",
    summary: "A bento-style insights panel for project updates, KPI trends, and notes.",
    caseStudy: "Built modular card patterns with clear hierarchy to improve readability and executive confidence.",
    category: "Frontend",
    stack: ["Next.js", "Tailwind", "Recharts"],
  },
];
