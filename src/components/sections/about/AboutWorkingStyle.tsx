import {
  ArrowDown,
  ArrowRight,
  ClipboardCheck,
  Code2,
  MessageSquareText,
  RefreshCw,
  Search,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Understand",
    phase: "discovery",
    description:
      "Start with the user, goal, and workflow before jumping into implementation.",
    Icon: Search,
  },
  {
    title: "Build",
    phase: "implementation",
    description:
      "Create clean, practical solutions that match the problem and constraints.",
    Icon: Code2,
  },
  {
    title: "Test",
    phase: "validation",
    description:
      "Check important flows, edge cases, and usability before calling work complete.",
    Icon: ClipboardCheck,
  },
  {
    title: "Communicate",
    phase: "alignment",
    description:
      "Explain decisions clearly through demos, documentation, and team updates.",
    Icon: MessageSquareText,
  },
  {
    title: "Improve",
    phase: "iteration",
    description:
      "Use feedback to refine the product, code, and process.",
    Icon: RefreshCw,
  },
];

export default function AboutWorkingStyle() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            05 // working.style
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            The way I approach work.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A simple framework that guides how I contribute to projects and
            teams.
          </p>
          <p className="mt-4 inline-flex rounded-full border border-[#d4e3ff]/72 bg-white/62 px-3.5 py-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70 shadow-[0_12px_32px_rgba(45,95,157,0.06)]">
            Iterative, feedback-driven, and product-aware.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="open-panel">
          <div className="relative z-10 grid gap-4 md:grid-cols-5 md:gap-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <span className="pointer-events-none absolute left-[calc(100%+0.05rem)] top-12 z-20 hidden items-center gap-0 md:flex">
                    <span className="h-px w-4 bg-gradient-to-r from-[#8dbbff]/70 to-[#c6b7ff]/45" />
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/78 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.08)]">
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden />
                    </span>
                  </span>
                )}
                <article className="group relative h-full rounded-[15px] border border-[#d4e3ff]/66 bg-white/64 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.06)] transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_18px_48px_rgba(45,95,157,0.1)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)] transition-transform duration-300 group-hover:-translate-y-0.5">
                      <step.Icon size={18} strokeWidth={2.2} aria-hidden />
                    </span>
                    <span className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.55rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                      {step.phase}
                    </span>
                  </div>
                  <p className="mt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
                {index < steps.length - 1 && (
                  <div className="relative mx-auto -my-1 flex h-8 w-8 items-center justify-center md:hidden">
                    <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#8dbbff]/35 via-[#8dbbff]/55 to-[#c6b7ff]/35" />
                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/90 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.08)]">
                      <ArrowDown size={14} strokeWidth={2.4} aria-hidden />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="relative z-10 mt-4 hidden items-center justify-end gap-2 border-t border-[#d4e3ff]/54 pt-4 text-right font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-400 md:flex">
            <RefreshCw size={13} strokeWidth={2.2} aria-hidden />
            Improve loops back into understanding the next version.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
