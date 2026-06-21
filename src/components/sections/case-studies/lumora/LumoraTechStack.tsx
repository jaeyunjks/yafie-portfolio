"use client";

import { useState } from "react";
import { ChevronDown, Code2, Database, GitBranch, ServerCog } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lumoraTechStack } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

const icons = [Code2, Database, ServerCog, GitBranch];

export default function LumoraTechStack() {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([
    lumoraTechStack[0].title,
  ]);

  function toggleGroup(title: string) {
    setExpandedGroups((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }

  return (
    <section id="tech-stack" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="05 // tech.stack"
            title="Technical implementation."
            subtitle="The technical focus was a reliable iOS study flow with SwiftUI and MVVM, while preparing backend support for authentication, study data, and AI-assisted summaries."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lumoraTechStack.map((group, index) => {
            const Icon = icons[index];
            const isExpanded = expandedGroups.includes(group.title);
            const panelId = `lumora-tech-${index}`;

            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <article className="h-full rounded-[26px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                  <button type="button" aria-expanded={isExpanded} aria-controls={panelId} onClick={() => toggleGroup(group.title)} className="flex min-h-11 w-full items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 md:hidden">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]"><Icon size={18} strokeWidth={2.3} aria-hidden /></span>
                    <span className="min-w-0 flex-1"><span className="block text-lg font-extrabold text-slate-950">{group.title}</span><span className="mt-1 block text-xs font-bold text-[#2d5f9d]">{group.status}</span></span>
                    <ChevronDown size={18} strokeWidth={2.3} aria-hidden className={`shrink-0 text-[#2d5f9d] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  <div className="hidden md:block">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]"><Icon size={18} strokeWidth={2.3} aria-hidden /></span>
                    <h3 className="mt-4 text-lg font-extrabold text-slate-950">{group.title}</h3>
                    <p className="mt-2 text-xs font-bold text-[#2d5f9d]">{group.status}</p>
                  </div>
                  <div id={panelId} role="region" aria-label={`${group.title} technical details`} className={`${isExpanded ? "grid" : "hidden"} mt-4 gap-3 md:grid`}>
                    {group.items.map(([tech, description]) => (
                      <div
                        key={tech}
                        className="rounded-[16px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-3"
                      >
                        <p className="text-sm font-extrabold text-slate-900">
                          {tech}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
