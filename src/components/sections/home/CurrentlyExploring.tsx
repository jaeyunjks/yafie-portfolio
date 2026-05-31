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
    <section className="scroll-mt-40 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <Reveal>
        <div className="mb-10 border-l border-[#8dbbff]/45 pl-4">
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
        <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/64 p-6 shadow-[0_24px_80px_rgba(45,95,157,0.11)] backdrop-blur-xl md:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_22%_18%,rgba(141,187,255,0.2),transparent_32%),radial-gradient(circle_at_82%_26%,rgba(198,183,255,0.16),transparent_30%),radial-gradient(circle_at_64%_86%,rgba(141,187,255,0.1),transparent_34%)]" />
          <div className="pointer-events-none absolute right-10 top-12 z-0 hidden h-72 w-72 rounded-full bg-[#8dbbff]/14 blur-3xl lg:block" />
          <div className="pointer-events-none absolute bottom-10 left-10 z-0 hidden h-64 w-64 rounded-full bg-[#c6b7ff]/12 blur-3xl lg:block" />
          <div className="pointer-events-none absolute right-[12%] top-[28%] z-0 hidden h-px w-[34%] bg-gradient-to-r from-transparent via-[#8dbbff]/20 to-transparent lg:block" />
          <div className="pointer-events-none absolute right-[30%] top-[18%] z-0 hidden h-[64%] w-px bg-gradient-to-b from-transparent via-[#c6b7ff]/18 to-transparent lg:block" />
          <span className="constellation-dot right-[15%] top-[22%] hidden lg:block" />
          <span className="constellation-dot constellation-dot-lavender right-[38%] top-[52%] hidden lg:block [animation-delay:1.1s]" />
          <span className="constellation-dot bottom-[18%] right-[18%] hidden lg:block [animation-delay:2.2s]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center">
            <div className="max-w-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8dbbff]/24 bg-white/78 text-[#2d5f9d] shadow-[0_14px_36px_rgba(45,95,157,0.12)] backdrop-blur-xl">
                <Code2 size={22} strokeWidth={2.2} />
              </div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#2d5f9d]">
                current_focus
              </p>
              <h3 className="mt-4 max-w-lg text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Building toward product-minded engineering.
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                I&apos;m currently focused on deepening my frontend, mobile,
                cloud, and AI-assisted development skills — not as separate
                tools, but as parts of a complete product-building workflow.
              </p>

              <div className="mt-7 grid gap-2 rounded-3xl border border-white/80 bg-white/72 p-5 font-mono text-[0.72rem] font-semibold leading-5 text-slate-700 shadow-inner shadow-white/60 backdrop-blur-xl">
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

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {focusCards.map((card, index) => (
                <article
                  key={card.title}
                  tabIndex={0}
                  className="group relative min-h-[15rem] overflow-hidden rounded-3xl border border-white/75 bg-white/86 p-6 shadow-[0_18px_55px_rgba(45,95,157,0.11)] backdrop-blur-xl outline-none transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/95 hover:shadow-[0_26px_76px_rgba(45,95,157,0.16)] focus-visible:-translate-y-1 focus-visible:border-[#8dbbff]/70 focus-visible:bg-white/95 focus-visible:shadow-[0_26px_76px_rgba(45,95,157,0.16)]"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#8dbbff]/24 bg-[#eef5ff]/82 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.1)]">
                      <card.Icon size={20} strokeWidth={2.2} />
                    </span>
                    <span className="font-mono text-[0.7rem] font-bold text-[#2d5f9d]/70">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                  </div>
                  <h4 className="mt-6 text-lg font-extrabold tracking-tight text-slate-950">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
