import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "@/components/ui/Reveal";
import {
  focusPopLinks,
  focusPopReflections,
} from "@/data/caseStudies/focuspop";
import { FocusPopSectionLabel } from "./FocusPopVisuals";

export default function FocusPopReflection() {
  return (
    <>
      <section id="reflection" className="scroll-mt-32 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <FocusPopSectionLabel
              label="06 // reflection"
              title="What I learned."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusPopReflections.map((reflection, index) => (
              <Reveal key={reflection.title} delay={index * 0.04}>
                <article className="h-full rounded-[24px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {reflection.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reflection.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 rounded-[26px] border border-[#d4e3ff]/58 bg-[#f8fbff]/66 p-6 text-base leading-8 text-slate-700 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
              FocusPop helped me practise building a polished iOS experience
              where product feel, state management, gameplay rules,
              persistence, and testing all work together. The project
              strengthened how I think about small interactive systems and how
              to make playful interfaces reliable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 pt-10">
        <Reveal>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-white/75 bg-white/62 p-8 text-center shadow-[0_28px_90px_rgba(45,95,157,0.13)] backdrop-blur-2xl md:p-10">
            <div className="mx-auto inline-flex rounded-full border border-[#d4e3ff]/80 bg-[#f8fbff]/82 px-4 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
              final.thought
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              A small game with clear engineering decisions.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              FocusPop shows how simple gameplay can still involve thoughtful
              state management, testable logic, persistence, and UI polish.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
              >
                <ArrowLeft size={17} strokeWidth={2.4} aria-hidden />
                Back to Projects
              </Link>
              <a
                href={focusPopLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <SiGithub size={17} aria-hidden />
                View GitHub Repo
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
