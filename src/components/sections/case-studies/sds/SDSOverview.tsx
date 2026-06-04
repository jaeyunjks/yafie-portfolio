import { Compass, Layers3, Target, UserCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { sdsOverviewCards } from "@/data/caseStudies/sdsModernisation";

const icons = [Compass, Target, Layers3, UserCheck];

export default function SDSOverview() {
  return (
    <section id="project-overview" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              01 // project.overview
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Project overview.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sdsOverviewCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={card.title} delay={index * 0.04}>
                <article className="group h-full rounded-[22px] border border-white/75 bg-white/66 p-6 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/84 hover:shadow-[0_24px_72px_rgba(45,95,157,0.13)]">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/80 text-[#2d5f9d]">
                      <Icon size={20} strokeWidth={2.25} aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                        overview.0{index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
