"use client";

import {
  Blocks,
  BadgeCheck,
  BriefcaseBusiness,
  Bug,
  Cloud,
  Handshake,
  LaptopMinimal,
  Layers3,
  Network,
  ServerCog,
} from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import {
  contactOpenToCards,
  contactOpenToFeatured,
  contactOpenToSignalCards,
} from "@/data/contact";

const availabilityIcons = [
  LaptopMinimal,
  Network,
  BadgeCheck,
  Cloud,
  ServerCog,
  Layers3,
  Handshake,
] as const;

const supportingCards = [...contactOpenToCards, ...contactOpenToSignalCards];

export default function ContactAvailability() {
  const { ref: mobileCardsRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="availability-signal">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            02 // availability.signal
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            What I&apos;m open to.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            The kinds of conversations and opportunities I&apos;m currently most
            interested in.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:gap-5">
        <Reveal>
          <article className="group relative overflow-hidden rounded-[26px] border border-white/80 bg-white/78 p-6 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/58 hover:shadow-[0_28px_84px_rgba(45,95,157,0.14)] md:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_14%,rgba(198,183,255,0.24),transparent_34%),radial-gradient(circle_at_14%_86%,rgba(141,187,255,0.2),transparent_38%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-[18px] border border-[#8dbbff]/24 bg-white/82 text-[#2d5f9d] shadow-[0_14px_30px_rgba(45,95,157,0.1)]">
                  <BriefcaseBusiness size={22} strokeWidth={2.2} aria-hidden />
                </span>
                <span className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/78 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/72">
                  Main focus
                </span>
              </div>

              <div className="mt-6 max-w-xl">
                <h3 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-950 md:text-[2rem]">
                  {contactOpenToFeatured.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {contactOpenToFeatured.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {contactOpenToFeatured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d4e3ff]/72 bg-white/80 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </article>
        </Reveal>

        <div
          ref={mobileCardsRef}
          className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden"
        >
          {supportingCards.map((card, index) => {
            const Icon =
              card.title === "Role Fit"
                ? BadgeCheck
                : card.title === "Working Style"
                  ? Bug
                  : availabilityIcons[index];

            return (
              <Reveal
                key={card.title}
                delay={index * 0.05}
                className="flex w-[88vw] shrink-0 snap-center"
              >
                <article className="group relative h-full overflow-hidden rounded-[22px] border border-white/75 bg-white/72 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(255,255,255,0.24),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                      <Icon size={19} strokeWidth={2.2} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold tracking-tight text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {card.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#2d5f9d]">
                      <Blocks size={14} strokeWidth={2.2} aria-hidden />
                      <span className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/72">
                        Open to discuss
                      </span>
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
        </div>

        <div className="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
          {supportingCards.map((card, index) => {
            const Icon =
              card.title === "Role Fit"
                ? BadgeCheck
                : card.title === "Working Style"
                  ? Bug
                  : availabilityIcons[index];

            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-[22px] border border-white/75 bg-white/72 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(255,255,255,0.24),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                      <Icon size={19} strokeWidth={2.2} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold tracking-tight text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {card.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#2d5f9d]">
                      <Blocks size={14} strokeWidth={2.2} aria-hidden />
                      <span className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/72">
                        Open to discuss
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
