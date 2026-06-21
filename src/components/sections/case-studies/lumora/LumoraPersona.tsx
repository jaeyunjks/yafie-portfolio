"use client";

import { useState } from "react";
import { Quote, UserRound } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lumoraPersona } from "@/data/caseStudies/lumora";
import { LumoraImage, LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraPersona() {
  const [active, setActive] = useState(lumoraPersona.groups[0].label);
  const selected =
    lumoraPersona.groups.find((group) => group.label === active) ??
    lumoraPersona.groups[0];

  return (
    <section id="user-persona" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="02 // user.persona"
            title="Understanding the student."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
          <Reveal>
            <div className="grid gap-5">
              <article className="rounded-[28px] border border-white/75 bg-white/66 p-6 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 p-3 text-[#2d5f9d]">
                    <UserRound size={22} strokeWidth={2.3} aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                      persona
                    </p>
                    <h3 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
                      {lumoraPersona.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {lumoraPersona.description}
                </p>
                <div className="mt-5 rounded-[22px] border border-[#d4e3ff]/70 bg-[#f8fbff]/72 p-4">
                  <Quote size={19} strokeWidth={2.3} className="text-[#2d5f9d]" />
                  <p className="mt-3 text-lg font-extrabold leading-7 text-slate-900">
                    &ldquo;{lumoraPersona.quote}&rdquo;
                  </p>
                </div>
              </article>

              <LumoraImage
                src="/images/projects/Lumora/user%20persona%201.png"
                alt="Lumora user persona research board for Alex Tan"
                label="User persona reference"
                objectFit="contain"
                caption="Persona research board documenting Alex Tan's study habits, frustrations, goals, and digital tools."
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-5">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {lumoraPersona.details.map(([label, value]) => (
                  <article
                    key={label}
                    className="rounded-[18px] border border-white/75 bg-white/66 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.07)] backdrop-blur-xl"
                  >
                    <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/68">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                      {value}
                    </p>
                  </article>
                ))}
              </div>

              <article className="rounded-[28px] border border-white/75 bg-white/66 p-5 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl">
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Alex Tan persona insights">
                  {lumoraPersona.groups.map((group) => (
                    <button
                      key={group.label}
                      type="button"
                      role="tab"
                      aria-selected={active === group.label}
                      aria-controls="lumora-persona-tabpanel"
                      onClick={() => setActive(group.label)}
                      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-extrabold transition-[background-color,border-color,color,box-shadow,transform] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 ${
                        active === group.label
                          ? "border-[#2d5f9d] bg-[#2d5f9d] text-white shadow-lg shadow-blue-900/12"
                          : "border-slate-200/80 bg-white/70 text-slate-700"
                      }`}
                    >
                      {group.label}
                    </button>
                  ))}
                </div>

                <div id="lumora-persona-tabpanel" role="tabpanel" aria-label={`${active} persona details`} className="mt-5 grid gap-3">
                  {selected.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-[#d4e3ff]/58 bg-[#f8fbff]/74 p-4 text-sm font-bold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[24px] border border-[#d4e3ff]/70 bg-[#f8fbff]/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                  technology.tools
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lumoraPersona.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#d4e3ff]/80 bg-white/78 px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.04em] text-slate-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
