"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, LockKeyhole } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import TechPill from "./TechPill";

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `project-details-${project.id}`;
  const isPrimary = index === 0;
  const isSdsProject = project.id === "sds-modernisation";
  const isFocusPopProject = project.id === "focuspop";
  const visibleTech = project.featuredTechStack
    ? project.featuredTechStack
    : isSdsProject || isFocusPopProject
      ? project.techStack.slice(0, 6)
      : isPrimary
        ? project.techStack.slice(0, 5)
        : project.techStack.slice(0, 4);
  const visibleSkills = project.featuredSkills
    ? project.featuredSkills
    : isSdsProject || isFocusPopProject
      ? project.skills.slice(0, 6)
      : isPrimary
        ? project.skills.slice(0, 4)
        : project.skills.slice(0, 3);
  const deliveryFlow = project.deliveryFlow ?? [];
  const categoryBadges = project.badges ?? [project.category];

  return (
    <article
      className={`group relative overflow-hidden rounded-[22px] border bg-white/70 p-4 backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:bg-white/90 ${
        isPrimary
          ? "border-[#8dbbff]/60 shadow-[0_30px_96px_rgba(45,95,157,0.18)] md:p-5 lg:col-span-2"
          : "border-white/75 shadow-[0_18px_56px_rgba(45,95,157,0.09)]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isPrimary
            ? "bg-[radial-gradient(circle_at_92%_10%,rgba(141,187,255,0.2),transparent_34%),radial-gradient(circle_at_8%_90%,rgba(198,183,255,0.16),transparent_36%)]"
            : "bg-[radial-gradient(circle_at_92%_10%,rgba(198,183,255,0.1),transparent_32%),radial-gradient(circle_at_8%_90%,rgba(141,187,255,0.08),transparent_34%)]"
        }`}
      />

      <div className="relative z-10">
        <div
          className={`grid gap-5 ${
            isPrimary
              ? "lg:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] lg:items-stretch"
              : ""
          }`}
        >
          <ProjectImagePlaceholder
            projectType={project.projectType}
            title={project.title}
            status={project.status}
            imageSrc={project.imageSrc}
            featured={isPrimary}
          />

          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap gap-2">
              {project.badges?.length ? (
                categoryBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#c6b7ff]/50 bg-[#f7f3ff]/72 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#67549e]"
                  >
                    {badge}
                  </span>
                ))
              ) : (
                <span className="rounded-full border border-[#c6b7ff]/50 bg-[#f7f3ff]/72 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#67549e]">
                  {categoryBadges[0]}
                </span>
              )}
            </div>

            <p className="mt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
              project.0{index + 1}
            </p>
            <h3
              className={`mt-2 font-extrabold tracking-tight text-slate-950 ${
                isPrimary ? "text-3xl md:text-4xl" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-bold text-slate-700">
              {project.role}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.summary}
            </p>

            {deliveryFlow.length ? (
              <div className="mt-4 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-3">
                <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                  Delivery flow
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {deliveryFlow.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-[#d4e3ff]/70 bg-white/70 px-2.5 py-1.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.09em] text-slate-500"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-4">
              <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                Tech
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {visibleTech.map((tech) => (
                  <TechPill key={tech} tech={tech} />
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                Skills
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {visibleSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#c6b7ff]/50 bg-[#f7f3ff]/72 px-3 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.09em] text-[#67549e]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.actions.slice(0, isPrimary ? 2 : 2).map((action) =>
                action.disabled ? (
                  <span
                    key={action.label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/75 bg-white/58 px-4 py-2 text-sm font-extrabold text-slate-500"
                    aria-disabled="true"
                  >
                    <LockKeyhole size={15} strokeWidth={2.2} aria-hidden />
                    {action.label}
                    {action.note ? (
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.1em] text-slate-400">
                        {action.note}
                      </span>
                    ) : null}
                  </span>
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-4 py-2 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-xl"
                  >
                    {action.label}
                    <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded((value) => !value)}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/75 bg-white/72 px-4 py-2 text-sm font-extrabold text-slate-700 shadow-sm transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70"
        >
          {isExpanded ? "Hide details" : "View details"}
          <ChevronDown
            size={16}
            strokeWidth={2.3}
            aria-hidden
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
            isExpanded
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`grid gap-4 border-t border-[#d4e3ff]/58 pt-5 ${
                isPrimary
                  ? "lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]"
                  : ""
              }`}
            >
              <div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Problem
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  What I worked on
                </p>
                <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-slate-600">
                  {project.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff]" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {isSdsProject && project.architecture?.length ? (
                <div className="lg:col-span-2">
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    MVC Architecture Overview
                  </p>
                  <div className="mt-3 grid gap-3 md:grid-cols-3">
                    {project.architecture.map((item) => (
                      <article
                        key={item.layer}
                        className="rounded-[18px] border border-[#d4e3ff]/58 bg-white/74 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.06)]"
                      >
                        <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                          {item.layer}
                        </p>
                        <p className="mt-2 text-sm font-extrabold leading-6 text-slate-900">
                          {item.technology}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.responsibility}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="grid gap-4 lg:col-span-2">
                <div>
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    Full tech stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechPill key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    Skills demonstrated
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#c6b7ff]/50 bg-[#f7f3ff]/72 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#67549e]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
