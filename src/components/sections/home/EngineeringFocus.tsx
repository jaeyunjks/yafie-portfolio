"use client";

import {
  Compass,
  Handshake,
  Lightbulb,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";

const personalitySignal =
  "I'm a curious and reflective builder who likes improving things step by step. I tend to think deeply about why a problem exists, not just how to implement the first solution. I care about clarity, reliability, and whether the final product actually helps people. I can be detail-oriented, but I'm also learning to balance polish with momentum so projects keep moving.";

const personalitySupport =
  "That mindset shows up in how I ask questions, test assumptions, refine interfaces, and communicate with a team.";

const engineeringValue =
  "Curiosity helps me clarify the real problem before building. Practicality helps me keep solutions usable and maintainable. Attention to detail helps me refine interfaces, edge cases, and handover quality. Reliability helps me communicate clearly and keep work moving with a team.";

const engineeringValueChips = [
  "Clarify requirements",
  "Build practically",
  "Test edge cases",
  "Refine with feedback",
];

const focusItems = [
  {
    index: "01",
    label: "curious.builder",
    title: "Curious builder",
    description:
      "I like understanding why a system exists before deciding how to build it. I ask questions, explore alternatives, and connect technical choices with real user needs.",
    Icon: Lightbulb,
  },
  {
    index: "02",
    label: "practical.solver",
    title: "Practical problem-solver",
    description:
      "I prefer solutions that are clear, usable, and realistic to maintain. I care about making progress without overcomplicating the product.",
    Icon: Wrench,
  },
  {
    index: "03",
    label: "reliable.teammate",
    title: "Reliable teammate",
    description:
      "My hospitality leadership background trained me to communicate clearly, stay calm under pressure, and take ownership when people depend on the outcome.",
    Icon: Handshake,
  },
  {
    index: "04",
    label: "growth.mindset",
    title: "Growth-minded learner",
    description:
      "I am still growing as a software engineer, but I actively use projects, feedback, testing, and iteration to improve both the product and the way I work.",
    Icon: Sparkles,
  },
  {
    index: "05",
    label: "product.engineering",
    title: "Product-minded engineer",
    description:
      "I care about the user experience, not just the code. I like building software that makes tasks easier, reduces confusion, and creates visible value.",
    Icon: Compass,
  },
];

export default function EngineeringFocus() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  useEffect(() => {
    if (!isNoteOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNoteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNoteOpen]);

  return (
    <section className="pb-16 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            03 // beyond.code
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Beyond code.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            The way I work is shaped by curiosity, responsibility, and a
            practical focus on building things that are useful, clear, and
            maintainable.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex rounded-full border border-[#d4e3ff]/80 bg-white/72 px-4 py-2.5 text-sm font-extrabold text-[#2d5f9d] shadow-sm shadow-blue-900/5 backdrop-blur-xl transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d] md:hidden"
            onClick={() => setIsNoteOpen(true)}
          >
            Read personality note
          </button>
        </div>
      </Reveal>

      <div className="open-panel">
        <div className="grid gap-0 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:items-start md:gap-10">
          <Reveal>
            <div className="hidden max-w-md self-start border-l border-[#8dbbff]/35 pl-5 md:block">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
                PERSONALITY.SIGNAL
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                {personalitySignal}
              </p>
              <p className="mt-5 border-t border-[#d4e3ff]/60 pt-4 text-sm leading-7 text-slate-500">
                {personalitySupport}
              </p>
              <div className="mt-5 border-t border-[#d4e3ff]/60 pt-5">
                <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[#2d5f9d]/75">
                  ENGINEERING.VALUE
                </p>
                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-950">
                  How this shows up in my work
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {engineeringValue}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {engineeringValueChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[#d4e3ff]/70 bg-white/62 px-3 py-1.5 text-[0.72rem] font-bold text-[#2d5f9d] shadow-sm shadow-blue-900/5"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="hidden pb-2 md:block">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
                  working.style
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  A few habits that guide how I work through uncertainty, design
                  decisions, and implementation details.
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-[#d4e3ff]/62">
              {focusItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.07}>
                  <article className="grid gap-4 py-5 md:grid-cols-[auto_minmax(0,1fr)] md:py-6">
                    <div className="flex items-center gap-3 md:block">
                      <span className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#8dbbff]/24 bg-white/76 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                        <item.Icon size={18} strokeWidth={2.2} aria-hidden />
                      </span>
                      <span className="font-mono text-[0.64rem] font-bold text-[#2d5f9d]/70 md:mt-3 md:block">
                        [{item.index}]
                      </span>
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/70">
                        {"// "}
                        {item.label}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isNoteOpen ? (
        <div
          role="presentation"
          className="fixed inset-0 z-[70] flex items-end bg-slate-950/20 px-3 pb-3 backdrop-blur-sm md:hidden"
          onClick={() => setIsNoteOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="personality-note-title"
            className="w-full rounded-[24px] border border-white/75 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#2d5f9d]/75">
                  PERSONALITY.SIGNAL
                </p>
                <h3
                  id="personality-note-title"
                  className="mt-2 text-xl font-extrabold tracking-tight text-slate-950"
                >
                  How I tend to work.
                </h3>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4e3ff]/75 bg-white text-[#2d5f9d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d]"
                aria-label="Close personality note"
                onClick={() => setIsNoteOpen(false)}
              >
                <X size={17} aria-hidden />
              </button>
            </div>
            <p className="text-sm leading-7 text-slate-700">{personalitySignal}</p>
            <p className="mt-4 border-t border-[#d4e3ff]/60 pt-4 text-sm leading-7 text-slate-500">
              {personalitySupport}
            </p>
            <div className="mt-4 border-t border-[#d4e3ff]/60 pt-4">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#2d5f9d]/75">
                ENGINEERING.VALUE
              </p>
              <h4 className="mt-2 text-base font-extrabold tracking-tight text-slate-950">
                How this shows up in my work
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {engineeringValue}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {engineeringValueChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#d4e3ff]/70 bg-white/68 px-2.5 py-1 text-[0.68rem] font-bold text-[#2d5f9d]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
