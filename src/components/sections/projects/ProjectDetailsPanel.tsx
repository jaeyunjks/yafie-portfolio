"use client";

import type { PortfolioProject } from "@/data/projects";
import TechPill from "./TechPill";

type ProjectDetailsPanelProps = {
  id: string;
  project: PortfolioProject;
};

export default function ProjectDetailsPanel({
  id,
  project,
}: ProjectDetailsPanelProps) {
  const showArchitecture =
    project.id === "sds-modernisation" && project.architecture?.length;

  return (
    <div
      id={id}
      className="rounded-[22px] border border-[#d4e3ff]/62 bg-white/66 p-5 shadow-[0_18px_58px_rgba(45,95,157,0.08)] backdrop-blur-xl"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]">
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

        {showArchitecture ? (
          <div className="lg:col-span-2">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
              MVC Architecture Overview
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {project.architecture?.map((item) => (
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

        <div className="lg:col-span-2">
          <div className="grid gap-5 lg:grid-cols-2">
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
  );
}
