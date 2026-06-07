import Link from "next/link";
import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lumoraReflections } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraOutcomeReflection() {
  return (
    <>
      <section id="outcome-reflection" className="scroll-mt-32 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <LumoraSectionLabel
              label="07 // outcome.reflection"
              title="What I learned."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {lumoraReflections.map((reflection, index) => (
              <Reveal key={reflection.title} delay={index * 0.04}>
                <article className="h-full rounded-[24px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl">
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
            <p className="mt-6 rounded-[26px] border border-[#d4e3ff]/70 bg-[#f8fbff]/68 p-6 text-base leading-8 text-slate-700 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
              Lumora helped me connect user research, interface design, mobile
              development, and AI-assisted workflows into one product story.
              The project strengthened how I think about designing for real
              study behaviour, handling technical constraints, and building
              features that support understanding rather than just storing
              information.
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
              From scattered materials to clear understanding.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Lumora explores how organised workspaces, native iOS design, and
              AI-assisted summaries can help students study smarter.
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
                href="https://github.com/jaeyunjks/SmartStudyCompanion"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <GitBranch size={17} strokeWidth={2.4} aria-hidden />
                GitHub Repo
              </a>
              <Link
                href="/projects/sds-modernisation"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                View Next Case Study
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
