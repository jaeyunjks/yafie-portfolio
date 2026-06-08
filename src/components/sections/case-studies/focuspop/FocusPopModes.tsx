import Reveal from "@/components/ui/Reveal";
import { focusPopModes } from "@/data/caseStudies/focuspop";
import { FocusPopSectionLabel } from "./FocusPopVisuals";

export default function FocusPopModes() {
  return (
    <section id="game-modes" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FocusPopSectionLabel
            label="02 // game.modes"
            title="Two modes of gameplay."
            subtitle="Normal Mode keeps the experience calm, while Moving Mode adds more challenge."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {focusPopModes.map((mode, index) => (
            <Reveal key={mode.title} delay={index * 0.05}>
              <article className="relative h-full overflow-hidden rounded-[26px] border border-white/75 bg-white/66 p-6 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                <div className="pointer-events-none absolute right-6 top-6 flex gap-2 opacity-70">
                  <span className="h-10 w-10 rounded-full bg-[#8dbbff]/34" />
                  <span className="mt-5 h-7 w-7 rounded-full bg-[#ffd166]/50" />
                  <span className="mt-1 h-5 w-5 rounded-full bg-[#7dd3fc]/50" />
                </div>
                <div className="relative z-10 max-w-xl">
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    mode.0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {mode.title}
                  </h3>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
                    {mode.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8dbbff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-5 rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/66 p-4 text-sm font-semibold leading-7 text-slate-700">
            The two modes help the game feel flexible without adding
            unnecessary complexity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
