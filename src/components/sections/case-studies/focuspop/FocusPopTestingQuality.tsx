import Reveal from "@/components/ui/Reveal";
import { focusPopTestingCards } from "@/data/caseStudies/focuspop";
import { FocusPopSectionLabel } from "./FocusPopVisuals";

export default function FocusPopTestingQuality() {
  return (
    <section id="testing-quality" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FocusPopSectionLabel
            label="04 // testing.quality"
            title="Testing and reliability."
            subtitle="The project was structured so gameplay logic could be tested separately from the UI."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {focusPopTestingCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <article className="h-full rounded-[26px] border border-white/75 bg-white/66 p-6 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  test.0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                  {card.focus}
                </p>
                <ul className="mt-5 grid gap-2.5 text-sm leading-6 text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-5 rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/66 p-4 text-sm font-semibold leading-7 text-slate-700">
            Keeping gameplay logic out of the views made the project easier to
            test, debug, and iterate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
