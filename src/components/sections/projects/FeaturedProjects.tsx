"use client";

import { Fragment, useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import type { ProjectFilter } from "@/data/projects";
import { projects } from "@/data/projects";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import ProjectCard from "./ProjectCard";
import ProjectDetailsPanel from "./ProjectDetailsPanel";

type FeaturedProjectsProps = {
  activeFilter?: ProjectFilter;
};

export default function FeaturedProjects({
  activeFilter = "all",
}: FeaturedProjectsProps) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const { ref: mobileProjectsRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();
  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));
  const expandedProject = visibleProjects.find(
    (project) => project.id === expandedProjectId,
  );
  const activeCard =
    visibleProjects.length > 1
      ? Math.round((progress / 100) * (visibleProjects.length - 1)) + 1
      : visibleProjects.length;
  const explored =
    visibleProjects.length > 0
      ? Math.round((activeCard / visibleProjects.length) * 100)
      : 0;

  useEffect(() => {
    mobileProjectsRef.current?.scrollTo({ left: 0 });
  }, [activeFilter, mobileProjectsRef]);

  function getRowProjectIds(index: number) {
    if (index === 0) {
      return [visibleProjects[0]?.id].filter((id): id is string => Boolean(id));
    }

    if (index === visibleProjects.length - 1 && index % 2 === 1) {
      return [visibleProjects[index]?.id].filter((id): id is string =>
        Boolean(id),
      );
    }

    const startIndex = index % 2 === 0 ? index - 1 : index;
    return [
      visibleProjects[startIndex]?.id,
      visibleProjects[startIndex + 1]?.id,
    ].filter((id): id is string => Boolean(id));
  }

  function isRowEnd(index: number) {
    return (
      index === 0 ||
      index === visibleProjects.length - 1 ||
      (index > 0 && index % 2 === 0)
    );
  }

  return (
    <section id="featured-projects" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 flex flex-col gap-5 border-l border-[#8dbbff]/45 pl-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              03 // featured.projects
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Featured Projects.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Selected projects that show my growth across software
              engineering, product thinking, testing, and deployment.
            </p>
          </div>
          <div className="md:pt-2">
            <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
              {visibleProjects.length} shown
            </span>
          </div>
        </div>
      </Reveal>

      <div
        ref={mobileProjectsRef}
        className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-2 lg:items-stretch lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {visibleProjects.map((project, index) => (
          <Fragment key={project.id}>
            <div
              id={project.areaAnchors[0] ?? undefined}
              className={`flex w-[88vw] shrink-0 snap-center scroll-mt-32 lg:w-auto lg:snap-none ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              {project.areaAnchors.slice(1).map((anchor) => (
                <span key={anchor} id={anchor} className="block scroll-mt-32" />
              ))}
              <Reveal delay={index * 0.04} className="flex w-full">
                <ProjectCard
                  project={project}
                  index={index}
                  isExpanded={expandedProjectId === project.id}
                  onToggle={() =>
                    setExpandedProjectId((current) =>
                      current === project.id ? null : project.id,
                    )
                  }
                />
              </Reveal>
            </div>
            {isRowEnd(index) &&
            expandedProject &&
            getRowProjectIds(index).includes(expandedProject.id) ? (
              <Reveal
                key={`${expandedProject.id}-details`}
                className="hidden lg:col-span-2 lg:block"
              >
                <ProjectDetailsPanel
                  id={`project-details-${expandedProject.id}`}
                  project={expandedProject}
                />
              </Reveal>
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-3 lg:hidden">
        <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
          Swipe {explored}%
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]">
          <div
            className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
            style={{ width: `${explored}%` }}
          />
        </div>
      </div>

      {expandedProject ? (
        <Reveal className="mt-5 lg:hidden">
          <ProjectDetailsPanel
            id={`project-details-mobile-${expandedProject.id}`}
            project={expandedProject}
          />
        </Reveal>
      ) : null}
    </section>
  );
}
