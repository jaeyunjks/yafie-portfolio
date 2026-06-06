import { CheckCircle2, Lightbulb, MessageSquareText } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  sdsNextImprovements,
  sdsReflections,
} from "@/data/caseStudies/sdsModernisation";

const icons = [Lightbulb, CheckCircle2, MessageSquareText];

export default function SDSOutcomeReflection() {
  return (
    <section id="outcome-reflection" className="scroll-mt-32 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              07 // outcome.reflection
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              What I learned.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This project helped me connect software engineering concepts with
              real workflow needs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 rounded-[26px] border border-[#d4e3ff]/64 bg-[#f8fbff]/76 p-6 shadow-[0_22px_72px_rgba(45,95,157,0.1)] backdrop-blur-xl">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
              development.lesson
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
              Why this mattered to my development
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
              This project helped me understand that software engineering is
              not only implementation. It also involves validating
              requirements, understanding users, managing ambiguity, testing
              behaviour, and communicating decisions clearly enough for others
              to continue the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {sdsReflections.map((reflection, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={reflection.title} delay={index * 0.04}>
                <article className="h-full rounded-[22px] border border-white/75 bg-white/66 p-6 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/86">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <Icon size={20} strokeWidth={2.25} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-950">
                    {reflection.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reflection.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 rounded-[24px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-6 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
              next.improvements
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sdsNextImprovements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d4e3ff]/72 bg-white/72 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
