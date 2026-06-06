import {
  BadgeCheck,
  BriefcaseBusiness,
  Bug,
  Handshake,
  Rocket,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { availabilityCards } from "@/data/contact";

const availabilityIcons = [
  BriefcaseBusiness,
  Rocket,
  BadgeCheck,
  Bug,
  Handshake,
] as const;

const availabilityClasses = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
] as const;

export default function ContactAvailability() {
  return (
    <section className="scroll-mt-32 pb-20 lg:pb-24" id="availability-signal">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            04 // availability.signal
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            What I&apos;m open to.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            The kinds of conversations and opportunities I&apos;m currently most
            interested in.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {availabilityCards.map((card, index) => {
          const Icon = availabilityIcons[index];
          return (
            <Reveal key={card.title} delay={index * 0.05}>
              <article
                className={`group h-full overflow-hidden rounded-[22px] border border-white/75 bg-white/72 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/88 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)] ${availabilityClasses[index]}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                  <Icon size={19} strokeWidth={2.2} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
