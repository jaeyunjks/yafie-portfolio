"use client";

import { ChevronRight } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { lumoraLowFiScreens } from "@/data/caseStudies/lumora";
import { LumoraImage, LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraDesignProcess() {
  const { ref: mobileFlowRef, progress } = useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section id="design-process" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="03 // design.process"
            title="From low-fidelity structure to study flow."
            subtitle="Before building the interface, I mapped the core journey from opening the dashboard to creating a workspace, adding materials, writing notes, generating summaries, and reviewing study content."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <Reveal>
            <LumoraImage
              src="/images/projects/Lumora/low%20fidality%20design.png"
              alt="Lumora low-fidelity iOS study app screen sketches"
              label="Low-fidelity design reference"
              objectFit="contain"
              caption="Low-fidelity screen map showing the study journey before visual polish and SwiftUI implementation."
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div ref={mobileFlowRef} role="region" aria-label="Low-fidelity screen flow" tabIndex={0} className="mobile-snap-scroll -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 md:focus-visible:ring-0">
              {lumoraLowFiScreens.map((screen, index) => (
                <article key={screen.name} className="w-[78vw] shrink-0 snap-center rounded-[22px] border border-white/75 bg-white/66 p-4 shadow-[0_14px_42px_rgba(45,95,157,0.08)] backdrop-blur-xl md:w-auto md:snap-none">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 font-mono text-[0.62rem] font-black text-[#2d5f9d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-slate-950">
                    {screen.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {screen.purpose}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-3 md:hidden">
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">Swipe {Math.round(progress)}%</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]"><div className="h-full rounded-full bg-[#2d5f9d]" style={{ width: `${progress}%` }} /></div>
              <ChevronRight size={15} aria-hidden className="text-[#2d5f9d]/55" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
