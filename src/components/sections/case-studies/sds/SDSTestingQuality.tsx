import { ArrowRight, Bug, FileSearch, RefreshCw, ScanLine } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  sdsTestingCards,
  sdsTestingLifecycle,
} from "@/data/caseStudies/sdsModernisation";

const icons = [ScanLine, FileSearch, Bug, RefreshCw];

export default function SDSTestingQuality() {
  return (
    <section id="testing-quality" className="scroll-mt-32 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              06 // testing.quality
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Testing and quality focus.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Testing helped validate whether the workflow behaved clearly,
              consistently, and reliably.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sdsTestingCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={card.title} delay={index * 0.04}>
                <article className="h-full rounded-[22px] border border-white/75 bg-white/66 p-6 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/86">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <Icon size={20} strokeWidth={2.25} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950">
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

        <Reveal delay={0.1}>
          <div className="mt-5 rounded-[24px] border border-white/75 bg-white/58 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
              testing.lifecycle
            </p>
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center">
              {sdsTestingLifecycle.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-[#d4e3ff]/72 bg-white/72 px-4 py-2 text-sm font-extrabold text-slate-700">
                    {step}
                  </span>
                  {index < sdsTestingLifecycle.length - 1 ? (
                    <ArrowRight
                      className="hidden text-[#8dbbff] md:block"
                      size={18}
                      strokeWidth={2.4}
                      aria-hidden
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
