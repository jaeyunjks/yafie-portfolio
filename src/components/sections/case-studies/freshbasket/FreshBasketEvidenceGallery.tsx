"use client";

import { ChevronRight } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { freshBasketEvidenceItems } from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketEvidenceGallery() {
  const { ref: mobileGalleryRef, progress } = useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section id="evidence-gallery" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="06 // evidence.gallery"
            title="Deployment evidence."
            subtitle="Screenshots and diagrams document the AWS deployment after the Learner Lab environment expired."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/66 p-4 text-sm font-semibold leading-7 text-slate-700">
            Sensitive identifiers, endpoints, account details, emails, and credentials are cropped or blurred.
          </p>
        </Reveal>

        <div ref={mobileGalleryRef} className="mobile-snap-scroll mt-8 -mx-6 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3">
          {freshBasketEvidenceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03} className="w-[88vw] shrink-0 snap-center md:w-auto md:snap-none">
              <article className="flex h-full flex-col rounded-[26px] border border-white/75 bg-white/66 p-4 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_76px_rgba(45,95,157,0.12)]">
                <FreshBasketImageFrame
                  src={item.image}
                  alt={`${item.title}: ${item.caption}`}
                  label={item.title}
                  aspectRatio={item.aspectRatio}
                  objectFit={item.objectFit}
                  className="shadow-none"
                  showHeader={false}
                />
                <div className="flex flex-1 flex-col p-2 pt-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <span className="rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/72 px-2.5 py-1 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3 md:hidden">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">Swipe {Math.round(progress)}%</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]"><div className="h-full rounded-full bg-[#2d5f9d]" style={{ width: `${progress}%` }} /></div>
          <ChevronRight size={15} aria-hidden className="text-[#2d5f9d]/55" />
        </div>
      </div>
    </section>
  );
}
