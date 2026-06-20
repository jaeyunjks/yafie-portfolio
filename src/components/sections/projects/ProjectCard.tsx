"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  LockKeyhole,
  PanelsTopLeft,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { sdsLinkGalleryLinks } from "@/data/caseStudies/sdsLinkGallery";
import { personalPortfolioLinkGalleryLinks } from "@/data/projectsLinkGallery";
import type { PortfolioProject } from "@/data/projects";
import ProjectRecognitionFlag from "./ProjectRecognitionFlag";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import TechPill from "./TechPill";

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  detailsPanelId?: string;
};

export default function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
  detailsPanelId,
}: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const panelId = detailsPanelId ?? `project-details-${project.id}`;
  const galleryPanelId = `project-gallery-${project.id}`;
  const isPrimary = index === 0;
  const isSdsProject = project.id === "sds-modernisation";
  const isPortfolioProject = project.id === "personal-portfolio";
  const isFocusPopProject = project.id === "focuspop";
  const galleryLinks = isSdsProject
    ? sdsLinkGalleryLinks
    : isPortfolioProject
      ? personalPortfolioLinkGalleryLinks
      : null;
  const galleryButtonLabel = isSdsProject
    ? "Open SDS Link Gallery"
    : isPortfolioProject
      ? "Open Link Gallery"
      : "";
  const projectIndex = `project.${String(index + 1).padStart(2, "0")}`;
  const projectType = project.projectDisplayType ?? project.category.split("/")[0].trim();
  const projectDate = project.projectDate ?? project.caseStudyStatus;
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

  return (
    <article
      className={`group relative flex h-full w-full flex-col rounded-[22px] border bg-white/70 p-4 backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:bg-white/90 ${
        isPrimary
          ? "border-[#8dbbff]/60 shadow-[0_30px_96px_rgba(45,95,157,0.18)] md:p-5"
          : "border-white/75 shadow-[0_18px_56px_rgba(45,95,157,0.09)]"
      } ${isSdsProject ? "overflow-hidden sm:overflow-visible" : "overflow-hidden"}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[22px] ${
          isPrimary
            ? "bg-[radial-gradient(circle_at_92%_10%,rgba(141,187,255,0.2),transparent_34%),radial-gradient(circle_at_8%_90%,rgba(198,183,255,0.16),transparent_36%)]"
            : "bg-[radial-gradient(circle_at_92%_10%,rgba(198,183,255,0.1),transparent_32%),radial-gradient(circle_at_8%_90%,rgba(141,187,255,0.08),transparent_34%)]"
        }`}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className={`grid flex-1 ${isPrimary ? "gap-4 sm:gap-5" : "gap-1 sm:gap-5"}`}>
          <ProjectImagePlaceholder
            projectType={project.projectType}
            title={project.title}
            status={project.status}
            imageSrc={project.imageSrc}
            featured={isPrimary}
          />

          <div className="flex min-w-0 flex-col">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                {projectIndex}
              </p>
              <div className="flex flex-wrap gap-2 sm:max-w-[16rem] sm:justify-end">
                <span className="rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/76 px-2.5 py-1.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/74">
                  {projectType}
                </span>
                <span className="rounded-full border border-[#c6b7ff]/48 bg-[#f7f3ff]/70 px-2.5 py-1.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#67549e]">
                  {projectDate}
                </span>
              </div>
            </div>

            <h3
              className={`mt-4 font-extrabold tracking-tight text-slate-950 ${
                isPrimary ? "text-3xl md:text-4xl" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-semibold tracking-[0.01em] text-slate-700">
              {project.role}
            </p>
            {project.recognitionFlag ? (
              <ProjectRecognitionFlag text={project.recognitionFlag} />
            ) : null}
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.summary}
            </p>

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

            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-3">
                {isSdsProject ? (
                  <div className="relative w-full sm:w-auto">
                    <div
                      id={galleryPanelId}
                      aria-hidden={!isGalleryOpen}
                      className={`absolute bottom-[calc(100%+12px)] left-0 z-30 w-full transition-opacity duration-300 sm:w-[25rem] sm:max-w-[calc(100vw-6rem)] ${
                        isGalleryOpen
                          ? "pointer-events-auto opacity-100"
                          : "pointer-events-none opacity-0"
                      }`}
                    >
                      <div
                        className={`rounded-[24px] border border-[#d7e5fb]/78 bg-white/84 p-3 shadow-[0_24px_72px_rgba(45,95,157,0.12)] backdrop-blur-xl transition-[opacity,transform] duration-300 ${
                          isGalleryOpen
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-2 scale-[0.98] opacity-0"
                        }`}
                      >
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {sdsLinkGalleryLinks.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex min-h-[3.5rem] items-center justify-between gap-3 rounded-[20px] border border-[#d4e3ff]/75 bg-white/82 px-4 py-3 text-left text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/68 hover:shadow-md"
                            >
                              <span className="min-w-0">
                                <span className="block truncate">{link.label}</span>
                                {link.tag ? (
                                  <span className="mt-1 inline-flex rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/88 px-2 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/78">
                                    {link.tag}
                                  </span>
                                ) : null}
                              </span>
                              <ExternalLink
                                size={16}
                                strokeWidth={2.3}
                                aria-hidden
                                className="shrink-0 text-[#2d5f9d] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      aria-expanded={isGalleryOpen}
                      aria-controls={galleryPanelId}
                      onClick={() => setIsGalleryOpen((current) => !current)}
                      className={`group inline-flex w-full cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-extrabold shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 active:translate-y-0 sm:w-auto ${
                        isGalleryOpen
                          ? "border-[#b8d2f7] bg-[#f4f9ff] text-[#2d5f9d] shadow-md"
                          : "border-[#d4e3ff]/75 bg-white/74 text-[#2d5f9d] hover:-translate-y-0.5 hover:border-[#bdd5f7] hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <PanelsTopLeft
                        size={15}
                        strokeWidth={2.2}
                        aria-hidden
                        className={`transition-transform duration-300 ${
                          isGalleryOpen
                            ? "-translate-y-0.5"
                            : "group-hover:-translate-y-0.5"
                        }`}
                      />
                      <span>Open SDS Link Gallery</span>
                      <ChevronDown
                        size={16}
                        strokeWidth={2.3}
                        aria-hidden
                        className={`transition-transform duration-300 ${
                          isGalleryOpen
                            ? "rotate-180"
                            : "group-hover:-translate-y-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ) : null}

                {project.actions.slice(0, 2).map((action) => {
                  const isExternal = action.href.startsWith("http");
                  const isGithubAction =
                    action.label === "GitHub Repo" ||
                    action.href.includes("github.com");

                  if (isPortfolioProject && action.label === "Link Gallery") {
                    return (
                      <div key={action.label} className="relative w-full sm:w-auto">
                        <div
                          id={galleryPanelId}
                          aria-hidden={!isGalleryOpen}
                          className={`absolute bottom-[calc(100%+12px)] left-0 z-30 w-full transition-opacity duration-300 sm:w-[25rem] sm:max-w-[calc(100vw-6rem)] ${
                            isGalleryOpen
                              ? "pointer-events-auto opacity-100"
                              : "pointer-events-none opacity-0"
                          }`}
                        >
                          <div
                            className={`rounded-[24px] border border-[#d7e5fb]/78 bg-white/84 p-3 shadow-[0_24px_72px_rgba(45,95,157,0.12)] backdrop-blur-xl transition-[opacity,transform] duration-300 ${
                              isGalleryOpen
                                ? "translate-y-0 scale-100 opacity-100"
                                : "translate-y-2 scale-[0.98] opacity-0"
                            }`}
                          >
                            <div className="grid gap-2.5 sm:grid-cols-2">
                              {galleryLinks?.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group inline-flex min-h-[3.5rem] items-center justify-between gap-3 rounded-[20px] border border-[#d4e3ff]/75 bg-white/82 px-4 py-3 text-left text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/68 hover:shadow-md"
                                >
                                  <span className="min-w-0">
                                    <span className="block truncate">{link.label}</span>
                                    {link.tag ? (
                                      <span className="mt-1 inline-flex rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/88 px-2 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/78">
                                        {link.tag}
                                      </span>
                                    ) : null}
                                  </span>
                                  <ExternalLink
                                    size={16}
                                    strokeWidth={2.3}
                                    aria-hidden
                                    className="shrink-0 text-[#2d5f9d] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          aria-expanded={isGalleryOpen}
                          aria-controls={galleryPanelId}
                          onClick={() => setIsGalleryOpen((current) => !current)}
                          className={`group inline-flex w-full cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-extrabold shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 active:translate-y-0 sm:w-auto ${
                            isGalleryOpen
                              ? "border-[#b8d2f7] bg-[#f4f9ff] text-[#2d5f9d] shadow-md"
                              : "border-[#d4e3ff]/75 bg-white/74 text-[#2d5f9d] hover:-translate-y-0.5 hover:border-[#bdd5f7] hover:bg-white hover:shadow-md"
                          }`}
                        >
                          <PanelsTopLeft
                            size={15}
                            strokeWidth={2.2}
                            aria-hidden
                            className={`transition-transform duration-300 ${
                              isGalleryOpen
                                ? "-translate-y-0.5"
                                : "group-hover:-translate-y-0.5"
                            }`}
                          />
                          <span>{galleryButtonLabel}</span>
                          <ChevronDown
                            size={16}
                            strokeWidth={2.3}
                            aria-hidden
                            className={`transition-transform duration-300 ${
                              isGalleryOpen
                                ? "rotate-180"
                                : "group-hover:-translate-y-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    );
                  }

                  return action.disabled ? (
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
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold transition-[background-color,box-shadow,transform,border-color,color] duration-300 ${
                        isGithubAction
                          ? "border border-slate-200/80 bg-white/70 text-slate-800 shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                          : "bg-[#2d5f9d] text-white shadow-lg shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-xl"
                      }`}
                    >
                      {isGithubAction ? (
                        <SiGithub size={16} aria-hidden />
                      ) : null}
                      {action.label}
                      {isGithubAction ? null : (
                        <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-[#d4e3ff]/52 pt-4">
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={onToggle}
              className="inline-flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-[#d4e3ff]/75 bg-white/74 px-4 py-2.5 text-sm font-extrabold text-slate-700 shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#bdd5f7] hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 active:translate-y-0"
            >
              {isExpanded ? "Hide details" : "View details"}
              <ChevronDown
                size={16}
                strokeWidth={2.3}
                aria-hidden
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
