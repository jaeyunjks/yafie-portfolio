import { FileClock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { caseStudyPreviews } from "@/data/projects";

export default function CaseStudyReady() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            05 // case.study.ready
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Case studies in progress.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            I&apos;m turning selected projects into clearer case studies with
            problem context, decisions, implementation notes, testing evidence,
            and outcomes.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-3">
        {caseStudyPreviews.map((preview, index) => (
          <Reveal key={preview.title} delay={index * 0.04}>
            <article className="relative h-full overflow-hidden rounded-[18px] border border-dashed border-[#8dbbff]/48 bg-white/58 p-5 shadow-[0_18px_58px_rgba(45,95,157,0.08)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(238,245,255,0.34)_54%,rgba(231,222,255,0.14))]" />
              <div className="relative z-10">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.08)]">
                    <FileClock size={20} strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                    {preview.status}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                  {preview.title}
                </h3>
                <p className="mt-4 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Includes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {preview.includes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d4e3ff]/68 bg-white/64 px-2.5 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
