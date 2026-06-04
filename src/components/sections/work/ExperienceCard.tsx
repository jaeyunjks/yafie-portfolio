"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { WorkExperienceItem } from "@/data/workExperience";

type ExperienceCardProps = {
  item: WorkExperienceItem;
  index: number;
};

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(item.featured);
  const panelId = `experience-details-${item.id}`;
  const isFeatured = item.featured;

  return (
    <article
      className={`group relative overflow-hidden rounded-[18px] border bg-white/72 p-5 backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:bg-white/90 ${
        isFeatured
          ? "border-[#8dbbff]/60 shadow-[0_28px_92px_rgba(45,95,157,0.18)] hover:border-[#2d5f9d]/35 hover:shadow-[0_34px_104px_rgba(45,95,157,0.22)] md:p-7"
          : "border-white/75 shadow-[0_16px_48px_rgba(45,95,157,0.08)] hover:border-[#8dbbff]/45 hover:shadow-[0_22px_60px_rgba(45,95,157,0.12)] md:p-5"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isFeatured
            ? "bg-[radial-gradient(circle_at_92%_10%,rgba(141,187,255,0.2),transparent_34%),radial-gradient(circle_at_8%_90%,rgba(198,183,255,0.16),transparent_36%)]"
            : "bg-[radial-gradient(circle_at_92%_10%,rgba(198,183,255,0.1),transparent_32%),radial-gradient(circle_at_8%_90%,rgba(141,187,255,0.08),transparent_34%)]"
        }`}
      />
      <div className="relative z-10">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
              experience.0{index + 1}
            </p>
            <h3
              className={`mt-2 font-extrabold tracking-tight text-slate-950 ${
                isFeatured ? "text-3xl" : "text-xl"
              }`}
            >
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-bold text-slate-700">
              {item.organisation}
              {item.location ? ` - ${item.location}` : ""}
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-2 md:justify-end">
            {isFeatured ? (
              <>
                <span className="rounded-full border border-[#8dbbff]/55 bg-[#eef5ff]/84 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]">
                  Current Role
                </span>
                <span className="rounded-full border border-[#8dbbff]/55 bg-white/78 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]">
                  Software Development
                </span>
              </>
            ) : null}
            <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/72">
              {item.duration}
            </span>
            <span className="rounded-full border border-[#c6b7ff]/50 bg-[#f7f3ff]/72 px-3 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#67549e]">
              {item.category}
            </span>
          </div>
        </div>

        <div
          className={`grid gap-4 ${
            isFeatured
              ? "lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]"
              : ""
          }`}
        >
          <div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400">
              Overview
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {item.summary}
            </p>
          </div>
          <div className="rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-4">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
              Software engineering relevance
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.relevance}
            </p>
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
                isFeatured
                  ? "lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]"
                  : ""
              }`}
            >
              <div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Key contributions
                </p>
                <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-slate-600">
                  {item.keyContributions.map((contribution) => (
                    <li key={contribution} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff]" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#d4e3ff]/72 bg-white/68 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500"
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
    </article>
  );
}
