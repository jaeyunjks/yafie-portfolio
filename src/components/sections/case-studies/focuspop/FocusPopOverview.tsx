import Reveal from "@/components/ui/Reveal";
import { focusPopOverviewCards } from "@/data/caseStudies/focuspop";
import { FocusPopSectionLabel } from "./FocusPopVisuals";

export default function FocusPopOverview() {
  return (
    <section id="project-overview" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FocusPopSectionLabel
            label="00 // project.overview"
            title="What FocusPop is."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            FocusPop is a SwiftUI bubble-popping game where users play short
            timed sessions and pop bubbles to build a score. The game includes
            two modes, colour-weighted scoring, combo rewards, pause/resume
            behaviour, result summaries, and a local high-score leaderboard.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {focusPopOverviewCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04}>
              <article className="h-full rounded-[24px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                <h3 className="text-lg font-extrabold text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
