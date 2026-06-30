"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import ProjectRecognitionFlag from "@/components/sections/projects/ProjectRecognitionFlag";
import { SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import TechPill from "@/components/sections/projects/TechPill";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";

const featuredProjects = [
  {
    title: "Lumora - Smart Study Companion",
    year: "2026",
    role: "iOS Mobile Development & Product Design ",
    description:
      "Mobile study workspace concept focused on interface design, AI-assisted learning support, and clearer student workflows.",
    tags: ["SwiftUI", "NestJS", "Prisma", "PostgreSQL", "JWT Auth"],
    image: "/images/projects/Lumora/lumora.png",
    status: "Mobile",
    alt: "Lumora smart study companion app preview",
    recognitionFlag: SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION,
  },
  {
    title: "FreshBasket Vendor Portal",
    year: "2026",
    role: "Full-Stack Development & Cloud Deployment",
    description:
      "AWS deployment case study covering vendor and admin workflows, MySQL-backed data, load-balanced hosting, and environment configuration.",
    tags: ["Node.js", "Express", "AWS", "MySQL"],
    image: "/images/projects/freshbasket.png",
    status: "Cloud",
    alt: "FreshBasket AWS deployment preview",
  },
  {
    title: "SDS Project Management Site",
    year: "2026",
    role: "Frontend Developer & QA Assurance",
    description:
      "UTS stakeholder workflow system focused on frontend implementation, QA, documentation, and project coordination visibility.",
    tags: ["React", "TypeScript", "Vite", "Python", "Flask", "Vitest", "Pytest"],
    image: "/images/projects/sds_projects.png",
    status: "Workflow",
    alt: "SDS project management site preview",
    recognitionFlag: SOFTWARE_ENGINEERING_TECH_FEST_NOMINATION,
  },
];

export default function FeaturedProject() {
  const { ref: mobileCarouselRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section className="pb-16 lg:pb-24">
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-5 border-l border-[#8dbbff]/45 pl-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              04 // selected.work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Selected Work.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-right">
            Projects that show how I approach frontend engineering, product
            thinking, testing, and delivery in practice.
          </p>
        </div>
      </Reveal>

      <div
        ref={mobileCarouselRef}
        className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
            className="h-full min-w-[88vw] snap-center sm:min-w-[72vw] lg:min-w-0"
          >
            <article className="group flex h-full min-h-[33rem] flex-col overflow-hidden rounded-[22px] border border-white/75 bg-white/68 p-3 shadow-[0_16px_44px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(45,95,157,0.14)] lg:min-h-[36rem] lg:rounded-[24px]">
              <div className="relative aspect-[1668/576] overflow-hidden rounded-[18px] border border-[#d4e3ff]/70 bg-[#f8fbff]">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/76 px-3 py-1.5 font-mono text-[0.56rem] font-extrabold uppercase tracking-[0.14em] text-[#2d5f9d] shadow-sm shadow-blue-900/10 backdrop-blur-xl">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-2 pt-4 md:p-4 md:pt-6">
                <div className="flex flex-1 flex-col">
                  <div className="mb-4 flex items-start justify-between gap-4 md:mb-5">
                    <span className="rounded-full border border-[#d4e3ff]/90 bg-[#eef4ff]/70 px-3 py-1 font-mono text-xs font-bold text-[#2d5f9d]">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <span className="font-mono text-xs font-bold tracking-[0.16em] text-slate-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#625595]/75">
                    {"// "}
                    {project.role}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950 md:mt-4 md:text-2xl">
                    {project.title}
                  </h3>
                  {project.recognitionFlag ? (
                    <ProjectRecognitionFlag text={project.recognitionFlag} />
                  ) : (
                    <div aria-hidden className="mt-3 h-[3.1rem]" />
                  )}
                  <p className="mt-3 text-sm leading-6 text-slate-600 md:mt-5 md:leading-7">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
                    {project.tags.map((tag) => (
                      <TechPill key={tag} tech={tag} />
                    ))}
                  </div>
                </div>

                <Link
                  href="/projects"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 group-hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-xl md:mt-8"
                >
                  View project{" "}
                  <ArrowRight
                    size={17}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-2 grid gap-1.5 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="h-1 flex-1 rounded-full bg-[#dbe7fb]">
            <div
              className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div
            className="flex items-center transition-opacity duration-300"
            style={{ opacity: progress < 5 ? 1 : 0, animation: progress < 5 ? "swipe-hint-bounce 800ms ease-in-out infinite" : "none" }}
            aria-hidden
          >
            <ChevronRight size={11} className="text-[#2d5f9d]/60" />
            <ChevronRight size={11} className="-ml-1.5 text-[#2d5f9d]/35" />
          </div>
        </div>
        <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-slate-400">
          Swipe {Math.round(progress)}% explored
        </p>
      </div>
    </section>
  );
}
