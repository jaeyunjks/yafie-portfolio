"use client";

import {
  BrainCircuit,
  Braces,
  Cloud,
  Gamepad2,
  LayoutGrid,
  ListChecks,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { ProjectFilter } from "@/data/projects";

const projectFilters: Array<{
  id: ProjectFilter;
  label: string;
  Icon: LucideIcon;
}> = [
  {
    id: "all",
    label: "All",
    Icon: LayoutGrid,
  },
  {
    id: "web",
    label: "Web",
    Icon: Braces,
  },
  {
    id: "workflow",
    label: "Workflow",
    Icon: ListChecks,
  },
  {
    id: "cloud",
    label: "Cloud",
    Icon: Cloud,
  },
  {
    id: "mobile",
    label: "Mobile",
    Icon: Smartphone,
  },
  {
    id: "game",
    label: "Game",
    Icon: Gamepad2,
  },
  {
    id: "ai",
    label: "AI Tools",
    Icon: BrainCircuit,
  },
];

type ProjectMapProps = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

export default function ProjectMap({
  activeFilter,
  onFilterChange,
}: ProjectMapProps) {
  return (
    <section className="pb-10 lg:pb-12">
      <Reveal>
        <div className="mb-5 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            02 // project.map
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
            Project areas.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            A quick way to explore the types of software work represented in my
            portfolio.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="open-panel">
          <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter featured projects by area"
            >
              {projectFilters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => onFilterChange(filter.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-extrabold transition-[border-color,background-color,box-shadow,transform,color] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                      isActive
                        ? "border-[#8dbbff]/70 bg-[#2d5f9d] text-white shadow-lg shadow-blue-900/15"
                        : "border-[#d4e3ff]/72 bg-white/68 text-slate-700 hover:border-[#8dbbff]/55 hover:bg-white"
                    }`}
                  >
                    <filter.Icon size={15} strokeWidth={2.2} aria-hidden />
                    {filter.label}
                  </button>
                );
              })}
            </div>
            <p className="max-w-md font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-400 lg:text-right">
              Showing selected software projects across web, workflow systems,
              cloud, mobile, games, and AI-assisted tools.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
