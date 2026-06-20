"use client";

import { ChevronRight, Compass, Gem, Leaf, Zap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";

const personalityCards = [
  {
    title: "Curious Builder",
    description:
      "I enjoy learning by building, testing ideas, and turning abstract concepts into usable products.",
    Icon: Compass,
  },
  {
    title: "Calm Under Pressure",
    description:
      "Hospitality experience taught me to stay composed, prioritise clearly, and keep moving during busy situations.",
    Icon: Leaf,
  },
  {
    title: "Detail-Oriented",
    description:
      "I care about small details in interface quality, communication, documentation, and final polish.",
    Icon: Gem,
  },
  {
    title: "Long-Term Growth",
    description:
      "I'm focused on becoming a software engineer who can contribute meaningfully, keep learning, and grow with a strong team.",
    Icon: Zap,
  },
];

export default function AboutPersonality() {
  const { ref: personalityScrollRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();
  const activeCard =
    Math.round((progress / 100) * (personalityCards.length - 1)) + 1;
  const explored = Math.round((activeCard / personalityCards.length) * 100);

  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-5 border-l border-[#8dbbff]/45 pl-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              06 // beyond.code
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Beyond the code.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              A few things that make my work style more personal and grounded.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="md:hidden">
        <div
          ref={personalityScrollRef}
          className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4"
        >
          {personalityCards.map((card, index) => (
            <article
              key={card.title}
              className="group w-[86vw] shrink-0 snap-center rounded-[16px] border border-white/75 bg-white/70 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)]">
                <card.Icon size={18} strokeWidth={2.2} aria-hidden />
              </span>
              <p className="mt-5 font-mono text-[0.64rem] font-bold text-[#2d5f9d]/70">
                [{String(index + 1).padStart(2, "0")}]
              </p>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
            Swipe {explored}%
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]">
            <div
              className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
              style={{ width: `${explored}%` }}
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
      </div>

      <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {personalityCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.06}>
            <article className="group h-full rounded-[16px] border border-white/75 bg-white/70 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/90 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <card.Icon size={18} strokeWidth={2.2} aria-hidden />
              </span>
              <p className="mt-5 font-mono text-[0.64rem] font-bold text-[#2d5f9d]/70">
                [{String(index + 1).padStart(2, "0")}]
              </p>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
