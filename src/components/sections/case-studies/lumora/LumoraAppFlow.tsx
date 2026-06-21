"use client";

import { ChevronRight } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { lumoraAppFlow } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraAppFlow() {
  const { ref: mobileFlowRef, progress } = useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section id="app-flow" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="04 // app.flow"
            title="How the app works."
            subtitle="The app follows a simple loop: organise materials, capture notes, generate summaries, and review understanding."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="open-panel mt-8">
            <div ref={mobileFlowRef} role="region" aria-label="Lumora app workflow" tabIndex={0} className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 md:focus-visible:ring-0 xl:grid-cols-5">
              {lumoraAppFlow.map((step, index) => (
                <article
                  key={step.title}
                  className="w-[78vw] shrink-0 snap-center rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4 md:w-auto md:snap-none"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2d5f9d] font-mono text-[0.58rem] font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-3 md:hidden">
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">Swipe {Math.round(progress)}%</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]"><div className="h-full rounded-full bg-[#2d5f9d]" style={{ width: `${progress}%` }} /></div>
              <ChevronRight size={15} aria-hidden className="text-[#2d5f9d]/55" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
