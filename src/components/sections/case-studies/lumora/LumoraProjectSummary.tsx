import { Lightbulb, PanelsTopLeft, Target, Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lumoraSummaryCards } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

const icons = [Lightbulb, Target, PanelsTopLeft, Wrench];

export default function LumoraProjectSummary() {
  return (
    <section id="project-summary" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="00 // project.summary"
            title="What Lumora is."
            subtitle="A mobile-first study companion combining organised workspaces, notes, file/image/PDF handling, AI-assisted summaries, and review workflows."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lumoraSummaryCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={card.title} delay={index * 0.04}>
                <article className="h-full rounded-[24px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/84 hover:shadow-[0_24px_72px_rgba(45,95,157,0.13)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <Icon size={18} strokeWidth={2.3} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
