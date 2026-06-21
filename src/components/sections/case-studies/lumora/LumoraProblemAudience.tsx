import { GraduationCap, Layers3, SearchCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraProblemAudience() {
  return (
    <section id="problem-audience" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="01 // problem.audience"
            title="Problem & target audience."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[28px] border border-white/75 bg-white/64 p-6 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                <Layers3 size={20} strokeWidth={2.3} aria-hidden />
              </span>
              <p className="mt-5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                problem.statement
              </p>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Study materials often sit across notes, PDFs, screenshots,
                slides, images, and separate apps. Even when students have
                access to the material, understanding can still feel scattered
                because the content is not organised, summarised, or connected.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="h-full rounded-[28px] border border-white/75 bg-white/64 p-6 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                <GraduationCap size={20} strokeWidth={2.3} aria-hidden />
              </span>
              <p className="mt-5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                primary.audience
              </p>
              <p className="mt-3 text-base leading-8 text-slate-600">
                University students aged 18-25 who want one organised place to
                learn, review, and understand their study materials.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 rounded-[24px] border border-[#d4e3ff]/70 bg-[#f8fbff]/72 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2d5f9d]">
                <SearchCheck size={19} strokeWidth={2.3} aria-hidden />
              </span>
              <p className="text-sm font-bold leading-7 text-slate-700">
                The goal was not only storing materials, but helping students
                move from collecting information to understanding it.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
