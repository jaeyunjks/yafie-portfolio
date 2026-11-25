import type { Metadata } from "next";
import { profile } from "@/data/profile";

/**
 * Title and description for every page, in one place. Pages export
 * `metadata = pageMetadata("/route")`, and sitemap.ts lists these routes,
 * so a new page can't silently ship without either.
 *
 * Titles are combined with the layout template: "<title> | Yafie Farabi".
 * Descriptions aim for 70–160 characters (what search results show).
 */
export const seoPages = {
  "/": {
    title: `${profile.name} | ${profile.role}`,
    description: `${profile.role} in Sydney: full-stack, backend, applied AI and cloud. 1st place at ServiceNow ANZ HackNow 2026. Open to graduate and junior roles.`,
  },
  "/about": {
    title: "About",
    description:
      "Final-year IT student at UTS (WAM 85.25) who builds, tests and ships full-stack, backend and AI applications on Azure and AWS.",
  },
  "/work": {
    title: "Work",
    description:
      "Software engineering on SDS Modernisation for an academic client at UTS, a HackNow 2026 win, a Tech Fest nomination and supporting experience.",
  },
  "/projects": {
    title: "Projects",
    description:
      "Full-stack, backend, applied AI, cloud and enterprise projects: HOMS, Silver Service, SDS, Lumora AI, FreshBasket on AWS and more.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Get in touch with Yafie Farabi about graduate and junior software engineering roles in full-stack, backend, applied AI and cloud.",
  },
  "/projects/homs": {
    title: "HOMS case study",
    description:
      "Staff & Shift Management module and a human-in-the-loop multi-agent server for a five-service hospital platform. Flask, SQLite, Docker, Azure, Ollama, MCP.",
  },
  "/projects/sds-modernisation": {
    title: "SDS Modernisation case study",
    description:
      "Full-stack project management system for an academic client at UTS: React student and admin workflows, Flask API integration and team QA.",
  },
  "/projects/lumora": {
    title: "Lumora AI case study",
    description:
      "AI study companion iOS app: chat grounded in students' own notes, PDFs and images, summaries, flashcards and quizzes, built with SwiftUI.",
  },
  "/projects/freshbasket-aws": {
    title: "FreshBasket on AWS case study",
    description:
      "Node.js ordering portal deployed on AWS with Elastic Beanstalk, EC2, RDS, a custom VPC across two AZs, load balancing and auto scaling.",
  },
  "/projects/focuspop": {
    title: "FocusPop case study",
    description:
      "SwiftUI bubble-popping game for short focus sessions, with weighted scoring, combos, a leaderboard and XCTest coverage.",
  },
} as const satisfies Record<string, { title: string; description: string }>;

export type SeoRoute = keyof typeof seoPages;

/**
 * Shared social-card fields. A page's `openGraph`/`twitter` objects REPLACE
 * the layout's (they aren't merged), so every page must repeat these.
 */
const socialImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name}, ${profile.headline}` };

export function pageMetadata(route: SeoRoute): Metadata {
  const { title, description } = seoPages[route];
  return {
    // The home title is already complete, so it skips the "| Yafie Farabi" template.
    title: route === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: route },
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: "en_AU",
      title,
      description,
      url: route,
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage.url] },
  };
}
