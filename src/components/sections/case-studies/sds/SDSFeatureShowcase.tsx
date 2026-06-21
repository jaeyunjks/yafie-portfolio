"use client";

import { ChevronRight } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { sdsFeatures } from "@/data/caseStudies/sdsModernisation";
import SDSBrowserMockup from "./SDSBrowserMockup";

type WorkflowFeature = (typeof sdsFeatures)[number];

function WorkflowFeatureCard({
  feature,
  featured = false,
}: {
  feature: WorkflowFeature;
  featured?: boolean;
}) {
  const Icon = feature.icon;

  return (
    <article
      className={`group h-full overflow-hidden rounded-[24px] border border-white/75 bg-white/64 p-4 shadow-[0_18px_58px_rgba(45,95,157,0.1)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/84 hover:shadow-[0_26px_78px_rgba(45,95,157,0.14)] ${
        featured ? "lg:grid lg:grid-cols-[minmax(0,1.16fr)_minmax(320px,0.84fr)] lg:gap-5" : ""
      }`}
    >
      <SDSBrowserMockup
        title={feature.title}
        imageSrc={feature.imageSrc}
        alt={`${feature.title} interface preview`}
        badge={feature.status}
        variant={feature.variant}
        imageScale={featured ? "scale-[1.03]" : "scale-[1.04]"}
        showFooter={false}
      />
      <div
        className={`mt-5 p-1 ${
          featured ? "lg:mt-0 lg:flex lg:flex-col lg:justify-center" : ""
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/72 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
            <Icon size={14} strokeWidth={2.3} aria-hidden />
            {feature.status}
          </span>
          <span className="rounded-full border border-white/75 bg-white/70 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500">
            workflow area
          </span>
        </div>
        <h3
          className={`mt-4 font-extrabold tracking-tight text-slate-950 ${
            featured ? "text-3xl" : "text-2xl"
          }`}
        >
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {feature.body}
        </p>
        <div className="mt-4 rounded-[16px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4">
          <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
            workflow.value
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {feature.value}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function SDSFeatureShowcase() {
  const { ref: mobileFeaturesRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section id="feature-showcase" className="scroll-mt-32 px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              05 // feature.showcase
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Key workflow areas.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A visual overview of the main interface areas represented in the
              system.
            </p>
          </div>
        </Reveal>

        <div
          ref={mobileFeaturesRef}
          className="mobile-snap-scroll mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {sdsFeatures.map((feature, index) => {
            const featured = index === 0;

            return (
              <Reveal
                key={feature.title}
                delay={index * 0.035}
                className={`w-[88vw] shrink-0 snap-center md:w-auto md:snap-none ${featured ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <WorkflowFeatureCard feature={feature} featured={featured} />
              </Reveal>
            );
          })}
        </div>

        <div className="mt-2 flex items-center gap-3 md:hidden">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
            Swipe {Math.round(progress)}%
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]">
            <div className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex items-center" style={{ opacity: progress < 5 ? 1 : 0 }} aria-hidden>
            <ChevronRight size={11} className="text-[#2d5f9d]/60" />
            <ChevronRight size={11} className="-ml-1.5 text-[#2d5f9d]/35" />
          </div>
        </div>
      </div>
    </section>
  );
}
