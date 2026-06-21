import { BrainCircuit, GraduationCap, Route, Smartphone, UserRound } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const snapshotItems = [
  { label: "Role", value: "iOS App Designer & Developer", icon: UserRound },
  { label: "Platform", value: "iOS / SwiftUI", icon: Smartphone },
  { label: "Audience", value: "University students", icon: GraduationCap },
  { label: "Product", value: "AI-assisted study workspace", icon: BrainCircuit },
];

export default function LumoraProductSnapshot() {
  return (
    <section id="product-snapshot" className="scroll-mt-28 px-6 py-8 md:hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[24px] border border-[#8dbbff]/45 bg-white/72 p-5 shadow-[0_20px_64px_rgba(45,95,157,0.11)] backdrop-blur-xl">
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">Product snapshot</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Lumora, at a glance.</h2>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {snapshotItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[16px] border border-white/80 bg-white/76 p-3.5">
                    <Icon size={18} strokeWidth={2.25} aria-hidden className="text-[#2d5f9d]" />
                    <dt className="mt-3 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/68">{item.label}</dt>
                    <dd className="mt-1 text-sm font-bold leading-5 text-slate-700">{item.value}</dd>
                  </div>
                );
              })}
            </dl>
            <div className="mt-3 rounded-[18px] border border-[#d4e3ff]/65 bg-[#f8fbff]/82 p-4">
              <div className="flex gap-3">
                <Route size={18} strokeWidth={2.25} aria-hidden className="mt-0.5 shrink-0 text-[#2d5f9d]" />
                <div>
                  <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/68">Core flow</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-700">Workspace → Materials → Notes → AI Summary → Review</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-extrabold">Technical focus:</span> SwiftUI, MVVM, file/PDF/image handling, reliable state flow, and summary guard checks.</p>
              <p className="mt-3 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]">Prototype / In Development</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
