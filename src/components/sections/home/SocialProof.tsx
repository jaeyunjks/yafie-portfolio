"use client";

import { ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";

const achievements = [
  {
    title: "SDS Tech Festival",
    label: "Project showcase",
    content:
      "Showcase evidence for the SDS workflow system in a university software engineering setting.",
    image: "/images/achievements/SDS-techfest.png",
    alt: "SDS Tech Festival achievement screenshot",
  },
  {
    title: "Software Testing Recognition",
    label: "Testing achievement",
    content:
      "Achievement evidence tied to software testing coursework and quality-focused engineering practice.",
    image: "/images/achievements/STQM.png",
    alt: "Software testing achievement screenshot",
  },
  {
    title: "Project Nomination",
    label: "Project nomination",
    content:
      "Nomination evidence connected to project presentation quality and software engineering communication.",
    image: "/images/achievements/Screenshot 2026-06-10 at 1.56.11 pm.png",
    alt: "Project nomination achievement screenshot",
  },
];

export default function SocialProof() {
  const { ref: mobileCarouselRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section className="pb-16 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            06 // social.proof
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Recognition and evidence.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Screenshots and records that support the project, testing, and
            presentation work shown across this portfolio.
          </p>
        </div>
      </Reveal>

      <div
        ref={mobileCarouselRef}
        className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
      >
        {achievements.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="min-w-[86vw] snap-center md:min-w-0"
          >
            <article className="group flex h-full flex-col rounded-[20px] border border-white/75 bg-white/64 p-3 shadow-[0_14px_40px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/55 hover:shadow-[0_22px_64px_rgba(45,95,157,0.12)] md:rounded-[22px]">
              <div className="overflow-hidden rounded-[16px] border border-[#d4e3ff]/72 bg-[#f8fbff]/86 p-2 shadow-inner shadow-white/70 md:rounded-[17px]">
                <div className="flex items-center justify-between border-b border-[#d4e3ff]/65 px-2 pb-2">
                  <div className="flex items-center gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff8f8f]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8dbbff]/80" />
                  </div>
                  <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                    proof.{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="aspect-[3/2] p-1.5 md:aspect-[4/3] md:p-2">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <p className="mt-4 font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/75 md:mt-5">
                {item.label}
              </p>
              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.content}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-2 grid gap-1.5 md:hidden">
        <div className="flex items-center gap-2">
          <div className="h-1 flex-1 rounded-full bg-[#dbe7fb]">
            <div
              className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div
            className="flex items-center transition-opacity duration-300"
            style={{ opacity: progress < 5 ? 1 : 0, animation: progress < 5 ? "swipe-hint-bounce 800ms ease-in-out infinite" : "none" }}
            aria-hidden
          >
            <ChevronRight size={11} className="text-[#2d5f9d]/60" />
            <ChevronRight size={11} className="-ml-1.5 text-[#2d5f9d]/35" />
          </div>
        </div>
        <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-slate-400">
          Swipe {Math.round(progress)}% explored
        </p>
      </div>
    </section>
  );
}
