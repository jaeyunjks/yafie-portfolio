import Reveal from "@/components/ui/Reveal";
import { lumoraAppFlow } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraAppFlow() {
  return (
    <section id="app-flow" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="04 // app.flow"
            title="How the app works."
            subtitle="A simple end-to-end study loop from scattered materials to structured understanding."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="open-panel mt-8">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {lumoraAppFlow.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[22px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2d5f9d] font-mono text-[0.58rem] font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
