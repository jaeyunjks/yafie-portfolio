import Reveal from "@/components/ui/Reveal";
import { lumoraChallenges } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraChallenge() {
  return (
    <section id="greatest-challenge" className="scroll-mt-32 px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="06 // greatest.challenge"
            title="Greatest challenge."
            subtitle="The main challenge was making AI summaries reliable enough to feel useful and trustworthy."
          />
        </Reveal>

        <Reveal delay={0.04}>
          <p className="mt-6 rounded-[22px] border border-[#8dbbff]/55 bg-[#f8fbff]/82 p-5 text-base font-extrabold leading-7 text-slate-800 shadow-[0_18px_56px_rgba(45,95,157,0.09)]">
            The hardest part was not adding AI; it was preventing empty, unreliable, or misleading summaries when source material was weak.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {lumoraChallenges.map((challenge, index) => (
            <Reveal key={challenge.title} delay={index * 0.04}>
              <article className="h-full rounded-[28px] border border-[#8dbbff]/35 bg-white/72 p-5 shadow-[0_20px_64px_rgba(45,95,157,0.11)] backdrop-blur-xl">
                <div className="flex items-start gap-4 border-b border-[#d4e3ff]/58 pb-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2d5f9d] font-mono text-[0.58rem] font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950">
                      {challenge.title}
                    </h3>
                    <p className="mt-2 font-mono text-[0.54rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">Problem</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {challenge.problem}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-[18px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-4">
                    <p className="font-mono text-[0.54rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                      approach
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {challenge.approach}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[#c6b7ff]/50 bg-[#f7f3ff]/62 p-4">
                    <p className="font-mono text-[0.54rem] font-bold uppercase tracking-[0.13em] text-[#67549e]">
                      result
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                      {challenge.result}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
