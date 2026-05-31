import { Code2, Layers3, RefreshCw, Route } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const supportingPrinciples = [
  {
    icon: Route,
    title: "Users before Features",
    content:
      "I think about the workflow and user outcome before adding more functionality.",
  },
  {
    icon: Layers3,
    title: "Systems that can Grow",
    content:
      "I structure components and data so projects can evolve without becoming messy.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    content:
      "I use feedback, testing, and iteration to make each version better.",
  },
];

export default function ProfessionalSignals() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            05 // engineering.principles
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            How I think and build.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Principles that help me turn ideas into clear, usable, and
            maintainable software.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.16fr_0.84fr]">
        <Reveal>
          <article className="group relative min-h-[29rem] overflow-hidden rounded-[2rem] border border-white/75 bg-gradient-to-br from-white/80 via-[#eef4ff]/68 to-[#e7deff]/45 p-7 shadow-[0_24px_80px_rgba(45,95,157,0.13)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(45,95,157,0.17)] md:p-9">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8dbbff]/20 blur-3xl" />
            <div className="absolute bottom-8 right-8 hidden w-48 rounded-3xl border border-white/70 bg-white/42 p-4 opacity-80 backdrop-blur-xl md:block">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff8e8e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd37a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#79d29c]" />
              </div>
              <div className="grid gap-2">
                <span className="h-2 w-24 rounded-full bg-[#8dbbff]/55" />
                <span className="h-2 w-36 rounded-full bg-slate-300/45" />
                <span className="h-2 w-28 rounded-full bg-[#c6b7ff]/55" />
                <span className="h-2 w-20 rounded-full bg-slate-300/35" />
              </div>
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div>
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-white/70 bg-white/62 text-[#2d5f9d] shadow-[0_16px_40px_rgba(45,95,157,0.12)] backdrop-blur-xl">
                  <Code2 size={26} aria-hidden />
                </div>
                <p className="font-mono text-xs font-bold text-[#2d5f9d]">[01]</p>
                <h3 className="mt-5 max-w-lg text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                  Clarity over Complexity
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  I prefer interfaces and systems that are easy to understand,
                  easy to maintain, and practical to extend.
                </p>
              </div>

              <div className="grid max-w-md grid-cols-3 gap-3">
                {["readable", "usable", "scalable"].map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-white/70 bg-white/48 px-3 py-3 text-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-5">
          {supportingPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.08}>
              <article className="group rounded-3xl border border-white/75 bg-white/66 p-6 shadow-[0_18px_55px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-white/60 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                    <principle.icon size={20} aria-hidden />
                  </div>
                  <p className="font-mono text-xs font-bold text-[#2d5f9d]">
                    [{String(index + 2).padStart(2, "0")}]
                  </p>
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.content}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
