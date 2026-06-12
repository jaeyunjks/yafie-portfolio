import { Terminal } from "lucide-react";

const stats = [
  "5+ Projects",
  "Web / Mobile / Cloud",
  "Stakeholder-Aware Builds",
];

export default function AboutProfileConsole() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/75 bg-white/70 p-4 shadow-[0_24px_80px_rgba(45,95,157,0.14)] backdrop-blur-xl md:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(245,249,255,0.55)_45%,rgba(245,241,255,0.5)),radial-gradient(circle_at_88%_10%,rgba(198,183,255,0.2),transparent_28%),radial-gradient(circle_at_8%_90%,rgba(141,187,255,0.18),transparent_30%)]" />
      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#d4e3ff]/65 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff8e8e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd37a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#79d29c]" />
          </div>
          <span className="rounded-[9px] border border-[#d4e3ff]/75 bg-white/68 px-2.5 py-1 font-mono text-[0.62rem] font-bold text-slate-500">
            about_me.ts
          </span>
        </div>

        <div className="mb-5 flex items-center gap-4">
          <span className="flex h-13 w-13 items-center justify-center rounded-[15px] border border-[#8dbbff]/24 bg-[#eef5ff]/84 text-[#2d5f9d] shadow-[0_14px_34px_rgba(45,95,157,0.12)]">
            <Terminal size={24} strokeWidth={2.2} aria-hidden />
          </span>
          <div>
            <p className="text-xl font-extrabold tracking-tight text-slate-950">
              Yafie
            </p>
            <p className="text-sm font-semibold text-slate-500">
              Software Developer
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[15px] border border-[#d4e3ff]/70 bg-white/68 p-4 font-mono text-[0.74rem] leading-6 text-slate-700 shadow-inner shadow-white/70">
          <p>
            <span className="text-slate-400">1</span>{" "}
            <span className="text-[#625595]">const</span>{" "}
            <span className="text-[#2d5f9d]">profile</span> = {"{"}
          </p>
          <p className="pl-4">
            <span className="text-slate-400">2</span> role:{" "}
            <span className="text-[#2d5f9d]">
              &quot;Software Developer&quot;
            </span>
            ,
          </p>
          <p className="pl-4">
            <span className="text-slate-400">3</span> location:{" "}
            <span className="text-[#2d5f9d]">&quot;Sydney, Australia&quot;</span>
            ,
          </p>
          <p className="pl-4">
            <span className="text-slate-400">4</span> focus: [
            <span className="text-[#2d5f9d]">&quot;Frontend&quot;</span>,{" "}
            <span className="text-[#2d5f9d]">&quot;Full-stack&quot;</span>,
          </p>
          <p className="pl-16">
            <span className="text-[#2d5f9d]">&quot;Cloud&quot;</span>,{" "}
            <span className="text-[#2d5f9d]">&quot;QA&quot;</span>],
          </p>
          <p className="pl-4">
            <span className="text-slate-400">5</span> strengths: [
            <span className="text-[#2d5f9d]">
              &quot;Stakeholder Communication&quot;
            </span>
            ,
          </p>
          <p className="pl-16">
            <span className="text-[#2d5f9d]">&quot;Product-minded engineering&quot;</span>,{" "}
            <span className="text-[#2d5f9d]">&quot;End-to-end delivery&quot;</span>
            ],
          </p>
          <p className="pl-4">
            <span className="text-slate-400">6</span> recognition:{" "}
            <span className="text-[#2d5f9d]">
              &quot;UTS 2026 Tech Fest Nominee&quot;
            </span>
            ,
          </p>
          <p className="pl-4">
            <span className="text-slate-400">7</span> mode:{" "}
            <span className="text-[#2d5f9d]">&quot;build · test · refine&quot;</span>
            ,
          </p>
          <p>
            <span className="text-slate-400">8</span> {"}"}
          </p>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat}
              className="rounded-[13px] border border-[#d4e3ff]/72 bg-white/62 px-3 py-3 text-center shadow-[0_10px_28px_rgba(45,95,157,0.06)]"
            >
              <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                {stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
