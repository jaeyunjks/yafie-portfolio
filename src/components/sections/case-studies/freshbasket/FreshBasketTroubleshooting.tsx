import Reveal from "@/components/ui/Reveal";
import { freshBasketTroubleshootingCards } from "@/data/caseStudies/freshbasket";
import { FreshBasketSectionLabel } from "./FreshBasketVisuals";

export default function FreshBasketTroubleshooting() {
  return (
    <section id="troubleshooting" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="07 // troubleshooting"
            title="Problems solved."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {freshBasketTroubleshootingCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04}>
              <article className="h-full rounded-[24px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  issue.0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-slate-950">
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
