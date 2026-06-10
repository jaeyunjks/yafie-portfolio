import {
  ArrowDown,
  ArrowRight,
  ClipboardList,
  Code2,
  MessageSquareText,
  RefreshCw,
  Search,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Understand",
    description:
      "Clarify requirements, users, workflow, and constraints before implementation.",
    Icon: ClipboardList,
  },
  {
    title: "Build",
    description:
      "Develop practical features with readable code and consistent UI patterns.",
    Icon: Code2,
  },
  {
    title: "Test",
    description:
      "Check important flows, edge cases, and usability to improve reliability.",
    Icon: Search,
  },
  {
    title: "Communicate",
    description:
      "Share progress, blockers, and decisions clearly with teammates.",
    Icon: MessageSquareText,
  },
  {
    title: "Improve",
    description:
      "Use feedback to refine the product, implementation, and process.",
    Icon: RefreshCw,
  },
];

export default function CollaborationSignal() {
  return (
    <section id="collaboration-signal" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            07 // collaboration.signal
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            How I contribute to software teams.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            I care about clear communication, shared ownership, and building
            momentum without creating confusion.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="open-panel">
          <div className="relative z-10 grid gap-4 md:grid-cols-5 md:gap-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <span className="pointer-events-none absolute left-[calc(100%+0.05rem)] top-12 z-20 hidden items-center md:flex">
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
                    <span className="font-mono text-[0.62rem] font-bold text-[#2d5f9d]/62">
                      0{index + 1}
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
                  <span className="mx-auto my-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/78 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.08)] md:hidden">
                    <ArrowDown size={14} strokeWidth={2.4} aria-hidden />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
