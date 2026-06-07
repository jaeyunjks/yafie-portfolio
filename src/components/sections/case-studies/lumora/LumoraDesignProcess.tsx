import Reveal from "@/components/ui/Reveal";
import { lumoraLowFiScreens } from "@/data/caseStudies/lumora";
import { LumoraImage, LumoraSectionLabel } from "./LumoraMockups";

export default function LumoraDesignProcess() {
  return (
    <section id="design-process" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="03 // design.process"
            title="From low-fidelity structure to study flow."
            subtitle="The low-fidelity design mapped the core study journey before visual styling: opening the dashboard, creating a workspace, viewing workspace contents, writing notes, generating AI summaries, and accessing the library."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <Reveal>
            <LumoraImage
              src="/images/projects/Lumora/low%20fidality%20design.png"
              alt="Lumora low-fidelity iOS study app screen sketches"
              label="Low-fidelity design reference"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-3 sm:grid-cols-2">
              {lumoraLowFiScreens.map((screen, index) => (
                <article
                  key={screen.name}
                  className="rounded-[22px] border border-white/75 bg-white/66 p-4 shadow-[0_14px_42px_rgba(45,95,157,0.08)] backdrop-blur-xl"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 font-mono text-[0.62rem] font-black text-[#2d5f9d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-slate-950">
                    {screen.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {screen.purpose}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
