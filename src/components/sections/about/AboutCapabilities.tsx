"use client";

import {
  Brain,
  Lightbulb,
  MessageSquareText,
  Plus,
  RefreshCw,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";

const capabilities = [
  {
    title: "Adaptability",
    description:
      "Adjusting quickly to changing requirements, tools, and project constraints.",
    applied:
      "I clarify shifting requirements, turn ambiguity into structured tasks, and keep implementations flexible enough to absorb change without losing delivery momentum.",
    Icon: Route,
  },
  {
    title: "Growth Mindset",
    description:
      "Continuously improving through feedback, iteration, and hands-on learning.",
    applied:
      "I seek feedback early, learn tools when the project requires them, and turn knowledge gaps into small action plans that improve both code quality and collaboration.",
    Icon: RefreshCw,
  },
  {
    title: "Creative Problem Solving",
    description:
      "Turning unclear problems into practical steps and workable solutions.",
    applied:
      "Used when translating rough ideas into product flows, system logic, or implementation plans.",
    Icon: Lightbulb,
  },
  {
    title: "Communication",
    description: "Explaining ideas clearly and keeping collaboration aligned.",
    applied:
      "Applied through demos, documentation, group work, and stakeholder-style discussions.",
    Icon: MessageSquareText,
  },
  {
    title: "Team Collaboration",
    description:
      "Working respectfully with different roles, perspectives, and working styles.",
    applied:
      "Built through shared repositories, group assignments, project planning, and feedback cycles.",
    Icon: Users,
  },
  {
    title: "Leadership & Influence",
    description:
      "Supporting momentum by taking ownership and helping others move forward.",
    applied:
      "I lead by example, create clarity when teams are uncertain, help peers unblock problems, and keep momentum through communication and accountability.",
    Icon: ShieldCheck,
  },
  {
    title: "Emotional Intelligence",
    description:
      "Understanding people, pressure, and communication dynamics.",
    applied:
      "I read team dynamics, adjust communication for different people, handle pressure calmly, and keep collaboration constructive when opinions differ.",
    Icon: Users,
  },
  {
    title: "Critical Thinking",
    description: "Evaluating trade-offs and making reasoned decisions.",
    applied:
      "I check assumptions before jumping into solutions, compare trade-offs, and choose maintainable approaches that balance user needs, constraints, and delivery practicality.",
    Icon: Brain,
  },
];

export default function AboutCapabilities() {
  const { ref: capabilityScrollRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();
  const activeCard = Math.round((progress / 100) * (capabilities.length - 1)) + 1;
  const explored = Math.round((activeCard / capabilities.length) * 100);

  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            04 // capability.map
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            How I work with people and problems.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Soft skills are strongest when they are connected to real behaviour.
            These are the habits I&apos;m continuing to build through work,
            study, and team projects.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/72 bg-white/62 px-3.5 py-2 text-sm font-bold text-slate-600 shadow-[0_12px_32px_rgba(45,95,157,0.07)] backdrop-blur-xl">
            <Plus
              size={15}
              strokeWidth={2.2}
              aria-hidden
              className="text-[#2d5f9d]"
            />
            <span>Hover / tap each card to see how I apply it.</span>
          </div>
        </div>
      </Reveal>

      <div className="sm:hidden">
        <div
          ref={capabilityScrollRef}
          className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4"
        >
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              tabIndex={0}
              className="group relative min-h-[16rem] w-[86vw] shrink-0 snap-center overflow-hidden rounded-[16px] border border-white/75 bg-white/70 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] outline-none backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)]">
                  <item.Icon size={18} strokeWidth={2.2} aria-hidden />
                </span>
                <span className="font-mono text-[0.66rem] font-bold text-[#2d5f9d]/62">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <div className="mt-4 rounded-[12px] border border-[#d4e3ff]/70 bg-[#f8fbff]/78 p-3">
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Applied in practice
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {item.applied}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
            Swipe {explored}%
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]">
            <div
              className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
              style={{ width: `${explored}%` }}
            />
          </div>
        </div>
      </div>

      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.035}>
            <article
              tabIndex={0}
              className="group relative h-full min-h-[17rem] overflow-hidden rounded-[16px] border border-white/75 bg-white/70 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] outline-none backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/90 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)] focus-visible:-translate-y-1 focus-visible:border-[#8dbbff]/65 focus-visible:bg-white/90"
            >
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <item.Icon size={18} strokeWidth={2.2} aria-hidden />
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.66rem] font-bold text-[#2d5f9d]/62">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/70 text-[#2d5f9d] transition-[background-color,transform] duration-300 group-hover:rotate-45 group-hover:bg-[#eef5ff] group-focus-visible:rotate-45 group-focus-visible:bg-[#eef5ff]">
                    <Plus size={13} strokeWidth={2.3} aria-hidden />
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/62 transition-colors duration-300 group-hover:text-[#2d5f9d] group-focus-visible:text-[#2d5f9d]">
                view application
                <Plus size={12} strokeWidth={2.4} aria-hidden />
              </p>
              <div className="mt-3 rounded-[12px] border border-[#d4e3ff]/70 bg-[#f8fbff]/78 p-3 opacity-100 transition-[opacity,transform,border-color] duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">
                <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Applied in practice
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {item.applied}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
