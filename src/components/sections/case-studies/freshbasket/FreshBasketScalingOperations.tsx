"use client";

import { ChevronRight } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import {
  freshBasketOperationsCards,
  freshBasketOperationsImages,
} from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketScalingOperations() {
  const { ref: mobileEvidenceRef, progress } = useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section id="scaling-operations" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="05 // scaling.operations"
            title="Scaling and operations."
            subtitle="Elastic Beanstalk was configured as a load-balanced environment with Auto Scaling capacity."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="open-panel mt-8">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {freshBasketOperationsCards.map((item) => (
                <article key={item.label} className="rounded-[18px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4">
                  <h3 className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/70">{item.label}</h3>
                  <p className={`mt-1 font-extrabold leading-6 text-slate-800 ${item.label === "Auto Scaling" ? "text-lg" : "text-sm"}`}>{item.value}</p>
                </article>
              ))}
            </div>

            <div ref={mobileEvidenceRef} className="mobile-snap-scroll mt-5 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
                {freshBasketOperationsImages.map((item, index) => (
                  <div key={item.title} className={`w-[82vw] shrink-0 snap-center md:w-auto md:snap-none ${index === 0 ? "lg:row-span-2" : ""}`}>
                  <FreshBasketImageFrame
                    src={item.image}
                    alt={`${item.title} AWS configuration screenshot`}
                    label={item.title}
                    caption={item.caption}
                    aspectRatio={index === 0 ? "16/9" : "4/3"}
                    objectFit="contain"
                  />
                  </div>
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
