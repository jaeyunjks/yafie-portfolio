import {
  ClipboardCheck,
  ClipboardList,
  MessageSquareText,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const traits = [
  {
    title: "Communication",
    description:
      "Share progress, blockers, and decisions clearly so teammates stay aligned.",
    Icon: MessageSquareText,
  },
  {
    title: "Accountability",
    description:
      "Take ownership of assigned work and follow through when people depend on the outcome.",
    Icon: ShieldCheck,
  },
  {
    title: "Documentation awareness",
    description:
      "Keep decisions, issues, and handover context understandable for the next person.",
    Icon: ClipboardList,
  },
  {
    title: "Calm problem-solving",
    description:
      "Stay composed under pressure and turn messy situations into clear next steps.",
    Icon: Waves,
  },
  {
    title: "Team coordination",
    description:
      "Support shared momentum by clarifying priorities, timing, and responsibilities.",
    Icon: Users,
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
          <div className="relative z-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {traits.map((trait, index) => (
              <article
                key={trait.title}
                className="group relative rounded-[15px] border border-[#d4e3ff]/66 bg-white/64 p-4 shadow-[0_12px_34px_rgba(45,95,157,0.06)] transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_18px_48px_rgba(45,95,157,0.1)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <trait.Icon size={18} strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="font-mono text-[0.62rem] font-bold text-[#2d5f9d]/62">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold tracking-tight text-slate-950">
                  {trait.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {trait.description}
                </p>
              </article>
            ))}
          </div>
          <div className="relative z-10 mt-4 flex items-center gap-2 border-t border-[#d4e3ff]/54 pt-4 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-slate-400">
            <ClipboardCheck size={13} strokeWidth={2.2} aria-hidden />
            Collaboration is treated as a delivery skill, not just a soft skill.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
