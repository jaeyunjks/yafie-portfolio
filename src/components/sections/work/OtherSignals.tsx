import { FileClock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { otherSignals } from "@/data/workExperience";

export default function OtherSignals() {
  return (
    <section id="others" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            05 // others
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Other Professional Signals.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Additional recognition and project-related milestones that reflect
            contribution, communication, and growth.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-2">
        {otherSignals.map((item) => (
          <Reveal key={item.id}>
            <article className="relative overflow-hidden rounded-[18px] border border-dashed border-[#8dbbff]/48 bg-white/58 p-5 shadow-[0_18px_58px_rgba(45,95,157,0.08)] backdrop-blur-xl md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(238,245,255,0.34)_54%,rgba(231,222,255,0.14))]" />
              <div className="relative z-10">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.08)]">
                    <FileClock size={20} strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                    evidence pending
                  </span>
                </div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                  {item.category}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <div className="mt-4 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-4">
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    To be updated
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.keyContributions[0]}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
