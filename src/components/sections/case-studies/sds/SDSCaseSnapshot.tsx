import { BriefcaseBusiness, CalendarDays, Focus, UsersRound } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const snapshotItems = [
  { label: "Role", value: "Frontend Developer & Tester", icon: BriefcaseBusiness },
  { label: "Timeline", value: "Feb 2026 - Present", icon: CalendarDays },
  { label: "Main users", value: "Coordinators, students, clients, tutors", icon: UsersRound },
  { label: "Focus", value: "Briefs, reviews, allocation, join requests", icon: Focus },
];

export default function SDSCaseSnapshot() {
  return (
    <section id="case-study-snapshot" className="scroll-mt-28 px-6 py-8 md:hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[24px] border border-[#8dbbff]/45 bg-white/72 p-5 shadow-[0_20px_64px_rgba(45,95,157,0.11)] backdrop-blur-xl">
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
              Case study snapshot
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
              The project, at a glance.
            </h2>
            <dl className="mt-5 grid gap-3">
              {snapshotItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-3 rounded-[16px] border border-white/80 bg-white/72 p-3.5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/72 bg-[#f8fbff] text-[#2d5f9d]">
                      <Icon size={17} strokeWidth={2.25} aria-hidden />
                    </span>
                    <div>
                      <dt className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/68">{item.label}</dt>
                      <dd className="mt-1 text-sm font-bold leading-6 text-slate-700">{item.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
            <div className="mt-4 rounded-[18px] border border-[#d4e3ff]/65 bg-[#f8fbff]/82 p-4">
              <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/68">Key value</p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-700">Reduced manual coordination and improved workflow visibility.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
