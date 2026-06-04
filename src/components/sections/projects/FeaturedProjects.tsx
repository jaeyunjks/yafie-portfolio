import Reveal from "@/components/ui/Reveal";
import type { ProjectFilter } from "@/data/projects";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
  activeFilter?: ProjectFilter;
};

export default function FeaturedProjects({
  activeFilter = "all",
}: FeaturedProjectsProps) {
  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="featured-projects" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            03 // featured.projects
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Featured Projects.
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Selected projects that show my growth across software
              engineering, product thinking, testing, and deployment.
            </p>
            <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
              {visibleProjects.length} shown
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            id={project.areaAnchors[0] ?? undefined}
            className={`scroll-mt-32 ${index === 0 ? "lg:col-span-2" : ""}`}
          >
            {project.areaAnchors.slice(1).map((anchor) => (
              <span key={anchor} id={anchor} className="block scroll-mt-32" />
            ))}
            <Reveal delay={index * 0.04}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
