import Reveal from "@/components/ui/Reveal";
import { focusPopTechnicalGroups } from "@/data/caseStudies/focuspop";
import { FocusPopSectionLabel } from "./FocusPopVisuals";

export default function FocusPopTechnicalBuild() {
  return (
    <section id="technical-build" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <FocusPopSectionLabel
            label="03 // technical.build"
            title="How it was built."
            subtitle="FocusPop uses a simple but testable SwiftUI architecture."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {focusPopTechnicalGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <article className="h-full rounded-[24px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
                <h3 className="text-lg font-extrabold text-slate-950">
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
