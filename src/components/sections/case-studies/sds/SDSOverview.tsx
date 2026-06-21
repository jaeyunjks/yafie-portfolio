"use client";

import { ChevronRight, Compass, Layers3, Target, UserCheck } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { sdsOverviewCards } from "@/data/caseStudies/sdsModernisation";

const icons = [Compass, Target, Layers3, UserCheck];

export default function SDSOverview() {
  const { ref: mobileCardsRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section id="project-overview" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              01 // project.overview
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Project overview.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              SDS Project Management Site is a workflow system for the Software
              Development Studio subject at UTS. The project focuses on
              improving how project briefs, submissions, reviews, student
              allocations, and coordinator workflows are managed. It affects
              multiple user groups: coordinators need clearer visibility and
              control, students need easier access to project information and
              allocation timing, and clients need a more reliable way to submit
              and clarify project details.
            </p>
          </div>
        </Reveal>

        <div
          ref={mobileCardsRef}
          className="mobile-snap-scroll mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0"
        >
          {sdsOverviewCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={card.title}
                delay={index * 0.04}
                className="w-[84vw] shrink-0 snap-center md:w-auto md:snap-none"
              >
                <article className="group h-full rounded-[22px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/84 hover:shadow-[0_24px_72px_rgba(45,95,157,0.13)] md:p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/80 text-[#2d5f9d] md:h-12 md:w-12">
                      <Icon size={20} strokeWidth={2.25} aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                        overview.0{index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950 md:text-xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-2 flex items-center gap-3 md:hidden">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
            Swipe {Math.round(progress)}%
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]">
            <div
              className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div
            className="flex items-center transition-opacity duration-300"
            style={{
              opacity: progress < 5 ? 1 : 0,
              animation:
                progress < 5 ? "swipe-hint-bounce 800ms ease-in-out infinite" : "none",
            }}
            aria-hidden
          >
            <ChevronRight size={11} className="text-[#2d5f9d]/60" />
            <ChevronRight size={11} className="-ml-1.5 text-[#2d5f9d]/35" />
          </div>
        </div>

      </div>
    </section>
  );
}
