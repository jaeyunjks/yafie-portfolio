"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  MousePointerClick,
  Route,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { sdsSprints } from "@/data/caseStudies/sdsModernisation";

export default function SDSWorkflow() {
  const [activeSprint, setActiveSprint] = useState(0);
  const selectedSprint = sdsSprints[activeSprint];

  return (
    <section id="project-workflow" className="scroll-mt-32 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              04 // project.workflow
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              How the work progressed.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The architecture shows how the system fits together. This sprint
              view focuses on how the work progressed from requirements and
              planning into implementation, testing, refinement, and handover.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/72 bg-white/66 px-3.5 py-2 text-sm font-bold text-slate-600 shadow-sm backdrop-blur-md">
              <MousePointerClick
                size={16}
                strokeWidth={2.3}
                aria-hidden
                className="text-[#2d5f9d]"
              />
              Select each sprint to view delivery areas, testing focus, and
              project outcomes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-[28px] border border-white/75 bg-white/52 p-4 shadow-[0_26px_86px_rgba(45,95,157,0.12)] backdrop-blur-2xl lg:p-5">
            <div className="hidden items-stretch gap-3 lg:grid lg:grid-cols-5">
              {sdsSprints.map((sprint, index) => {
                const isActive = index === activeSprint;

                return (
                  <div key={sprint.sprint} className="relative">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveSprint(index)}
                      className={`h-full w-full cursor-pointer rounded-[20px] border p-4 text-left transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                        isActive
                          ? "border-[#8dbbff]/80 bg-white shadow-[0_16px_44px_rgba(45,95,157,0.13)] ring-1 ring-[#8dbbff]/34"
                          : "border-white/75 bg-white/58 hover:-translate-y-1 hover:bg-white/82"
                      }`}
                    >
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                        {sprint.sprint}
                      </p>
                      <h3 className="mt-2 text-base font-extrabold text-slate-950">
                        {sprint.title}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-slate-600">
                        {sprint.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/72">
                        {isActive ? "Viewing details" : "View sprint details"}
                        <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
                      </span>
                    </button>
                    {index < sdsSprints.length - 1 ? (
                      <ArrowRight
                        className="pointer-events-none absolute -right-5 top-1/2 z-10 text-[#8dbbff]"
                        size={24}
                        strokeWidth={2.4}
                        aria-hidden
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 lg:hidden">
              {sdsSprints.map((sprint, index) => {
                const isActive = index === activeSprint;

                return (
                  <div key={sprint.sprint}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveSprint(index)}
                      className={`w-full cursor-pointer rounded-[18px] border p-4 text-left transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                        isActive
                          ? "border-[#8dbbff]/80 bg-white shadow-[0_14px_34px_rgba(45,95,157,0.11)] ring-1 ring-[#8dbbff]/34"
                          : "border-white/75 bg-white/58 hover:bg-white/82"
                      }`}
                    >
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                        {sprint.sprint}
                      </p>
                      <h3 className="mt-2 text-base font-extrabold text-slate-950">
                        {sprint.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {sprint.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/72">
                        {isActive ? "Viewing details" : "View sprint details"}
                        <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
                      </span>
                    </button>
                    {index < sdsSprints.length - 1 ? (
                      <div className="flex justify-center py-1.5 text-[#8dbbff]">
                        <ArrowDown size={20} strokeWidth={2.4} aria-hidden />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-[20px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-5 transition-[background-color] duration-300">
              <div className="flex min-w-0 gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-white/78 text-[#2d5f9d]">
                  <Route size={19} strokeWidth={2.3} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                    active.sprint
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                    {selectedSprint.sprint}: {selectedSprint.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
                    {selectedSprint.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-2">
                <div className="rounded-[18px] border border-white/78 bg-white/74 p-4">
                  <div className="flex gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                      <ShieldCheck size={16} strokeWidth={2.3} aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                        testing.quality
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                        {selectedSprint.testingFocus}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[18px] border border-white/78 bg-white/74 p-4">
                  <div className="flex gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                      <BriefcaseBusiness
                        size={16}
                        strokeWidth={2.3}
                        aria-hidden
                      />
                    </span>
                    <div>
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                        employer.value
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                        {selectedSprint.employerValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[18px] border border-white/78 bg-white/74 p-4">
                <div className="flex gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <ClipboardList size={16} strokeWidth={2.3} aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      deliverables
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedSprint.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#d4e3ff]/68 bg-white/72 px-2.5 py-1 text-xs font-bold leading-5 text-slate-600"
                        >
                          <CheckCircle2
                            size={13}
                            strokeWidth={2.4}
                            aria-hidden
                            className="shrink-0 text-[#2d5f9d]"
                          />
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[20px] border border-white/75 bg-white/62 p-5 transition-[background-color] duration-300">
              <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                delivery.areas // {selectedSprint.sprint.toLowerCase()}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedSprint.deliveryAreas.map((area, index) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/72 bg-white/72 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#eef5ff] text-[0.5rem] text-[#2d5f9d]">
                      {index + 1}
                    </span>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
