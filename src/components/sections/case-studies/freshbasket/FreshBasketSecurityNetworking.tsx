import Reveal from "@/components/ui/Reveal";
import { freshBasketNetworkingCards } from "@/data/caseStudies/freshbasket";
import {
  FreshBasketImageFrame,
  FreshBasketSectionLabel,
} from "./FreshBasketVisuals";

export default function FreshBasketSecurityNetworking() {
  return (
    <section id="security-networking" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FreshBasketSectionLabel
            label="04 // security.networking"
            title="Security and networking."
            subtitle="Public application access was separated from database access."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            The web app allowed HTTP access, while RDS MySQL was restricted to
            the application security group on port 3306.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {freshBasketNetworkingCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04}>
              <article className="h-full rounded-[26px] border border-white/75 bg-white/66 p-4 shadow-[0_20px_64px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                <FreshBasketImageFrame
                  src={card.image}
                  alt={`${card.title} AWS evidence screenshot`}
                  label={card.title}
                  caption={card.caption}
                  aspectRatio="console"
                  objectFit="contain"
                />
                <div className="p-2 pt-4">
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
