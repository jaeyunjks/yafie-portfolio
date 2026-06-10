import { BrainCircuit, Cloud, Code2, Layers3, Smartphone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const focusCards = [
  {
    title: "Product Engineering",
    description:
      "Connecting technical decisions with user needs, workflows, and practical outcomes.",
    Icon: Layers3,
  },
  {
    title: "Mobile Interfaces",
    description: "Exploring SwiftUI and modern mobile interaction patterns.",
    Icon: Smartphone,
  },
  {
    title: "AI-Assisted Tools",
    description:
      "Using AI to support learning, productivity, and better decision-making.",
    Icon: BrainCircuit,
  },
  {
    title: "Cloud-Ready Systems",
    description:
      "Learning how applications are deployed, connected, monitored, and scaled.",
    Icon: Cloud,
  },
];

export default function CurrentlyExploring() {
  return (
    <section className="scroll-mt-40 pt-12 pb-16 lg:pt-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            07 // currently.exploring
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Currently Exploring.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Areas I&apos;m actively learning, experimenting with, and building
            toward.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="open-panel">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start">
            <div className="max-w-xl">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[15px] border border-[#8dbbff]/24 bg-white/78 text-[#2d5f9d] shadow-[0_12px_30px_rgba(45,95,157,0.1)] backdrop-blur-xl">
                <Code2 size={22} strokeWidth={2.2} />
              </div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#2d5f9d]">
                current_focus
              </p>
              <h3 className="mt-4 max-w-lg text-2xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Building toward product-minded engineering.
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                I&apos;m currently focused on deepening my frontend, mobile,
                cloud, and AI-assisted development skills — not as separate
                tools, but as parts of a complete product-building workflow.
              </p>

              <div className="mt-6 grid gap-2 border-l border-[#8dbbff]/35 pl-4 font-mono text-[0.7rem] font-semibold leading-5 text-slate-700">
                <p>
                  <span className="text-[#2d5f9d]">current_mode:</span> build ·
                  test · refine
                </p>
                <p>
                  <span className="text-[#2d5f9d]">focus_stack:</span> React ·
                  SwiftUI · AWS
                </p>
                <p>
                  <span className="text-[#2d5f9d]">direction:</span>{" "}
                  product-minded engineering
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#d4e3ff]/62">
              {focusCards.map((card, index) => (
                <article
                  key={card.title}
                  tabIndex={0}
                  className="grid gap-4 py-5 outline-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d] sm:grid-cols-[auto_minmax(0,1fr)] lg:py-6"
                >
                  <div className="flex items-center gap-3 sm:block">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#8dbbff]/24 bg-[#eef5ff]/82 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.08)]">
                      <card.Icon size={20} strokeWidth={2.2} />
                    </span>
                    <span className="font-mono text-[0.66rem] font-bold text-[#2d5f9d]/70 sm:mt-3 sm:block">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold tracking-tight text-slate-950">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
