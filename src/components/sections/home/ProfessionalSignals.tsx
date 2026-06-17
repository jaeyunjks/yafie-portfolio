import {
  ArrowDown,
  ArrowRight,
  Braces,
  Code2,
  Layers3,
  RefreshCw,
  Route,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const frameworkFlow = ["Clarify", "Structure", "Build", "Refine"];
const frameworkChips = ["Clarity", "Usability", "Maintainability"];

const supportingPrinciples = [
  {
    icon: Route,
    label: "USER.WORKFLOW",
    title: "Start from the workflow",
    content:
      "I begin with the task, friction points, and expected outcome so features support a real user need.",
  },
  {
    icon: Layers3,
    label: "MAINTAINABLE.SYSTEMS",
    title: "Structure for maintainability",
    content:
      "I organise components, states, and data so projects stay readable and easier to extend.",
  },
  {
    icon: RefreshCw,
    label: "TEST.REVIEW",
    title: "Test, review, iterate",
    content:
      "I use feedback, edge cases, and QA thinking to improve reliability before and after release.",
  },
];

export default function ProfessionalSignals() {
  return (
    <section className="pb-16 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            05 // engineering.principles
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            How I think and build.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A practical engineering lens I use to turn requirements into clear,
            usable, and maintainable software.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(330px,0.88fr)] lg:items-stretch">
        <Reveal>
          <article className="group relative min-h-0 overflow-hidden rounded-[18px] border border-[#d4e3ff]/72 bg-white/72 p-4 shadow-[0_18px_52px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:shadow-[0_30px_90px_rgba(45,95,157,0.17)] md:min-h-[33rem] md:p-7 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(241,247,255,0.58)_46%,rgba(245,241,255,0.5)),radial-gradient(circle_at_88%_8%,rgba(198,183,255,0.2),transparent_27%),radial-gradient(circle_at_12%_88%,rgba(141,187,255,0.18),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="pointer-events-none absolute left-0 top-10 h-56 w-px bg-gradient-to-b from-transparent via-[#8dbbff]/55 to-transparent" />

            <div className="relative z-10 flex min-h-0 flex-col justify-between gap-7 md:min-h-[29rem] md:gap-9">
              <div>
                <div className="mb-5 flex items-start justify-between gap-4 md:mb-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8dbbff]/28 bg-[#eef5ff]/82 text-[#2d5f9d] shadow-[0_14px_34px_rgba(45,95,157,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Code2 size={23} strokeWidth={2.2} aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
                        DECISION.FRAMEWORK
                      </p>
                      <p className="mt-1 flex items-center gap-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8dbbff] shadow-[0_0_0_4px_rgba(141,187,255,0.16)]" />
                        active principle
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-xs font-bold text-[#2d5f9d]/72">
                    [01]
                  </p>
                </div>

                <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[#625595]/75">
                  Engineering Decision Framework
                </p>
                <h3 className="mt-4 max-w-lg text-2xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                  Clarity drives implementation
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:mt-5 md:text-base md:leading-8">
                  I aim for interfaces and systems that are easy to understand,
                  straightforward to maintain, and practical to extend as
                  requirements evolve.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[15px] border border-[#d4e3ff]/72 bg-white/66 p-3 shadow-inner shadow-white/70 backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#d4e3ff]/62 pb-2">
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
                      framework.flow
                    </p>
                    <Braces
                      size={16}
                      strokeWidth={2.2}
                      aria-hidden
                      className="text-[#2d5f9d]/62"
                    />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-4">
                    {frameworkFlow.map((step, index) => (
                      <div key={step} className="contents">
                        <div className="group/flow relative flex items-center justify-between gap-2 rounded-[12px] border border-[#d4e3ff]/76 bg-[#f8fbff]/82 px-3 py-2.5 shadow-[0_10px_24px_rgba(45,95,157,0.06)] transition-[border-color,box-shadow,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/60 hover:bg-white">
                          {index < frameworkFlow.length - 1 && (
                            <span className="pointer-events-none absolute left-[calc(100%+0.05rem)] top-1/2 hidden h-px w-2 bg-gradient-to-r from-[#8dbbff]/55 to-[#c6b7ff]/35 sm:block" />
                          )}
                          <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.12em] text-slate-700">
                            {step}
                          </span>
                          <ArrowRight
                            size={14}
                            strokeWidth={2.2}
                            aria-hidden
                            className="hidden text-[#2d5f9d]/55 transition-transform duration-300 group-hover/flow:translate-x-0.5 sm:block"
                          />
                        </div>
                        {index < frameworkFlow.length - 1 ? (
                          <ArrowDown
                            size={15}
                            strokeWidth={2.2}
                            aria-hidden
                            className="mx-auto text-[#2d5f9d]/50 sm:hidden"
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-end">
                  <div className="flex flex-wrap gap-2">
                    {frameworkChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-[11px] border border-[#d4e3ff]/76 bg-white/70 px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.13em] text-slate-600 shadow-[0_10px_24px_rgba(45,95,157,0.06)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-[14px] border border-white/78 bg-[#f5f7fb]/78 p-3 shadow-[0_16px_42px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                    <div className="mb-3 flex items-center gap-2 border-b border-[#d4e3ff]/60 pb-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff8e8e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffd37a]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#79d29c]" />
                      <span className="ml-auto font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                        decision.ts
                      </span>
                    </div>
                    <div className="grid gap-2">
                      <span className="h-2 w-7/12 rounded-full bg-[#8dbbff]/60" />
                      <span className="h-2 w-11/12 rounded-full bg-slate-300/55" />
                      <span className="h-2 w-9/12 rounded-full bg-[#c6b7ff]/58" />
                      <span className="h-2 w-5/12 rounded-full bg-slate-300/45" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-0 divide-y divide-[#d4e3ff]/62 md:gap-4 md:divide-y-0 md:grid-cols-3 lg:grid-cols-1">
          {supportingPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06}>
              <article className="group relative h-full py-5 outline-none transition-[border-color,box-shadow,background-color,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5f9d] md:overflow-hidden md:rounded-[16px] md:border md:border-white/75 md:bg-white/70 md:p-5 md:shadow-[0_18px_55px_rgba(45,95,157,0.09)] md:backdrop-blur-xl md:hover:-translate-y-1 md:hover:border-[#8dbbff]/55 md:hover:bg-white/88 md:hover:shadow-[0_24px_70px_rgba(45,95,157,0.14)]">
                <div className="pointer-events-none absolute inset-x-5 top-0 hidden h-px bg-gradient-to-r from-transparent via-white to-transparent md:block" />
                <div className="pointer-events-none absolute bottom-0 right-0 hidden h-20 w-24 bg-[radial-gradient(circle,rgba(141,187,255,0.13),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block" />

                <div className="relative mb-4 flex items-start justify-between gap-4 md:mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <principle.icon size={20} strokeWidth={2.2} aria-hidden />
                  </div>
                  <p className="font-mono text-xs font-bold text-[#2d5f9d]/70">
                    [{String(index + 2).padStart(2, "0")}]
                  </p>
                </div>

                <p className="relative font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/70">
                  {principle.label}
                </p>
                <h3 className="relative mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                  {principle.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {principle.content}
                </p>

                <div className="relative mt-4 hidden items-center gap-2 md:flex">
                  <span className="h-px flex-1 bg-gradient-to-r from-[#8dbbff]/42 to-transparent transition-colors duration-300 group-hover:from-[#8dbbff]/80" />
                  <ArrowRight
                    size={15}
                    strokeWidth={2.2}
                    aria-hidden
                    className="text-[#2d5f9d]/55 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2d5f9d]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
