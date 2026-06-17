"use client";

import {
  Cloud,
  Code2,
  GitBranch,
  Layers3,
  ServerCog,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";

const workflowSteps = [
  { label: "Understand", Icon: Layers3 },
  { label: "Build", Icon: Code2 },
  { label: "Test", Icon: ShieldCheck },
  { label: "Deploy", Icon: Cloud },
  { label: "Improve", Icon: GitBranch },
];

const capabilityModules = [
  {
    title: "Frontend Engineering",
    label: "FRONTEND.SYSTEMS",
    description:
      "Building responsive, polished interfaces with React, TypeScript, and reusable components that stay consistent across screens.",
    tag: "interface craft",
    Icon: Code2,
    className: "lg:col-span-4",
  },
  {
    title: "Backend Logic",
    label: "BACKEND.LOGIC",
    description:
      "Implementing application logic and data flows that support admin, vendor, and stakeholder workflows.",
    tag: "workflow support",
    Icon: ServerCog,
    className: "lg:col-span-4",
  },
  {
    title: "Testing & Quality",
    label: "QUALITY.SYSTEMS",
    description:
      "Checking user flows, edge cases, regressions, and quality risks through manual QA and targeted test coverage.",
    tag: "confidence building",
    Icon: ShieldCheck,
    className: "lg:col-span-4",
  },
  {
    title: "Cloud & Deployment",
    label: "CLOUD.DELIVERY",
    description:
      "Working with deployment workflows, environment configuration, and production-ready setup for live applications.",
    tag: "release practice",
    Icon: Cloud,
    className: "lg:col-span-3",
  },
  {
    title: "Product Thinking",
    label: "PRODUCT.FLOW",
    description:
      "Turning messy requirements into usable workflows by clarifying goals, constraints, and user needs before building.",
    tag: "user outcomes",
    Icon: Layers3,
    className: "lg:col-span-5",
  },
  {
    title: "Team Collaboration",
    label: "TEAM.DELIVERY",
    description:
      "Communicating progress, documenting decisions, and aligning implementation with shared project goals.",
    tag: "shared progress",
    Icon: Users,
    className: "lg:col-span-4",
  },
];

const metadata = [
  ["current_focus", "product-minded_software_engineering"],
  ["workflow", "understand · build · test · deploy · improve"],
  ["environment", "web · mobile · cloud · ai-assisted"],
];

const proofPoints = [
  "5+ projects delivered",
  "web, mobile, and cloud scope",
  "manual QA and testing focus",
  "deployment and environment practice",
  "documentation and team collaboration",
];

const mobileSnapshotCards = [
  {
    title: "Engineering Breadth",
    label: "ENGINEERING.OS",
    tag: "overview",
    description:
      "Web, mobile, cloud, testing, and product delivery experience built through practical project work.",
    Icon: GitBranch,
  },
  ...capabilityModules,
];

export default function ProfileStatus() {
  const { ref: mobileCarouselRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <section className="pb-16 lg:pb-24">
      <Reveal>
        <div className="grid gap-5 border-l border-[#8dbbff]/45 pl-4 lg:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)] lg:items-end">
          <div>
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.26em] text-[#2d5f9d]/75">
              02 // proof.snapshot
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Software Engineering Snapshot.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 md:leading-8">
              A practical view of the engineering areas, delivery habits, and
              product instincts I&apos;m building through real project work.
            </p>
          </div>

          <div className="rounded-[14px] border border-[#d4e3ff]/75 bg-white/68 p-3 font-mono text-[0.64rem] leading-5 text-slate-600 shadow-[0_16px_42px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            {metadata.map(([key, value]) => (
              <p key={key} className="flex gap-2">
                <span className="shrink-0 font-bold text-[#2d5f9d]">
                  {key}:
                </span>
                <span>{value}</span>
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-5 md:hidden">
          <div
            ref={mobileCarouselRef}
            className="mobile-snap-scroll -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3"
          >
            {mobileSnapshotCards.map((card, index) => (
              <article
                key={card.title}
                className="min-w-[86vw] snap-center rounded-[18px] border border-white/75 bg-white/72 p-3.5 shadow-[0_14px_38px_rgba(45,95,157,0.08)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#8dbbff]/24 bg-[#eef5ff]/82 text-[#2d5f9d]">
                    <card.Icon size={18} strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="rounded-full border border-[#d4e3ff]/80 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
                    {card.tag}
                  </span>
                </div>
                <p className="mt-4 font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                  {card.label}
                </p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
                {index === 0 ? (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {["Understand", "Build", "Test", "Improve"].map((item) => (
                      <span
                        key={item}
                        className="rounded-[10px] border border-[#d4e3ff]/72 bg-white/70 px-2.5 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-2 grid gap-1.5">
            <div className="h-1 rounded-full bg-[#dbe7fb]">
              <div
                className="h-full rounded-full bg-[#2d5f9d] transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.18em] text-slate-400">
              Swipe {Math.round(progress)}% explored
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative mt-7 hidden overflow-hidden rounded-[18px] border border-white/70 bg-white/52 p-4 shadow-[0_24px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl md:block lg:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(245,249,255,0.48)_42%,rgba(245,241,255,0.46)),radial-gradient(circle_at_14%_8%,rgba(141,187,255,0.2),transparent_28%),radial-gradient(circle_at_90%_2%,rgba(198,183,255,0.18),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="relative z-10 grid gap-3">
            <article className="group relative overflow-hidden rounded-[16px] border border-[#d4e3ff]/72 bg-white/82 p-5 shadow-[0_18px_54px_rgba(45,95,157,0.1)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/55 hover:shadow-[0_24px_70px_rgba(45,95,157,0.14)]">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(115deg,transparent,rgba(141,187,255,0.1),rgba(198,183,255,0.12))]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#8dbbff]/0 via-[#8dbbff]/55 to-[#8dbbff]/0" />

              <div className="relative grid gap-5 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/28 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_30px_rgba(45,95,157,0.12)]">
                      <GitBranch size={21} strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
                        ENGINEERING.OS
                      </p>
                      <p className="mt-1 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#8dbbff] to-[#c6b7ff]" />
                    </div>
                  </div>

                  <h3 className="mt-5 max-w-xl text-2xl font-extrabold tracking-tight text-slate-950 md:text-[2.35rem] md:leading-[1.08]">
                    Software Engineering Breadth
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-[0.98rem] md:leading-7">
                    Growing across interface design, application logic, testing,
                    deployment, and project delivery with a user-focused
                    mindset.
                  </p>
                </div>

                <div className="relative rounded-[15px] border border-[#d4e3ff]/70 bg-[#f8fbff]/76 p-3 shadow-inner shadow-white/70">
                  <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#d4e3ff]/65 pb-2">
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/72">
                      delivery.pipeline
                    </p>
                    <span className="rounded-full border border-[#8dbbff]/35 bg-white/78 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
                      active loop
                    </span>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-5">
                    {workflowSteps.map(({ label, Icon }, index) => (
                      <div
                        key={label}
                        className="group/step relative flex items-center gap-2 rounded-[12px] border border-[#d4e3ff]/80 bg-white/84 p-2.5 text-left shadow-[0_10px_24px_rgba(45,95,157,0.07)] transition-[border-color,box-shadow,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/65 hover:bg-white hover:shadow-[0_16px_34px_rgba(45,95,157,0.12)] sm:flex-col sm:items-start"
                      >
                        {index < workflowSteps.length - 1 && (
                          <span className="pointer-events-none absolute left-[calc(100%+0.05rem)] top-1/2 hidden h-px w-2 bg-gradient-to-r from-[#8dbbff]/55 to-[#c6b7ff]/35 sm:block" />
                        )}
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#8dbbff]/24 bg-[#eef5ff]/84 text-[#2d5f9d]">
                          <Icon size={16} strokeWidth={2.2} />
                        </span>
                        <span className="flex min-w-0 items-center gap-2 font-mono text-[0.64rem] font-bold uppercase tracking-[0.13em] text-slate-700">
                          {label}
                          {index === 0 && (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff] shadow-[0_0_0_4px_rgba(141,187,255,0.18)] animate-pulse" />
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-12">
              {capabilityModules.map((module) => (
                <article
                  key={module.title}
                  tabIndex={0}
                  className={`group relative min-h-[205px] overflow-hidden rounded-[14px] border border-white/75 bg-white/76 p-4 shadow-[0_16px_48px_rgba(45,95,157,0.08)] outline-none backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/52 hover:bg-white/92 hover:shadow-[0_24px_64px_rgba(45,95,157,0.14)] focus-visible:-translate-y-1 focus-visible:border-[#8dbbff]/65 focus-visible:bg-white/92 focus-visible:shadow-[0_24px_64px_rgba(45,95,157,0.14)] ${module.className}`}
                >
                  <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-[radial-gradient(circle,rgba(141,187,255,0.13),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/22 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.08)]">
                      <module.Icon size={18} strokeWidth={2.2} />
                    </span>
                    <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      {module.tag}
                    </span>
                  </div>

                  <p className="relative mt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
                    {module.label}
                  </p>
                  <h4 className="relative mt-2 text-[1.08rem] font-extrabold tracking-tight text-slate-950">
                    {module.title}
                  </h4>
                  <p className="relative mt-3 max-w-md text-sm leading-6 text-slate-600">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[13px] border border-[#d4e3ff]/70 bg-[#f8fbff]/76 px-3 py-2.5 shadow-[0_10px_30px_rgba(45,95,157,0.07)] backdrop-blur-xl">
              {proofPoints.map((point, index) => (
                <span
                  key={point}
                  className="flex items-center gap-3 font-mono text-[0.65rem] font-semibold leading-5 text-slate-600"
                >
                  {index > 0 && (
                    <span className="hidden h-1 w-1 rounded-full bg-[#8dbbff]/80 sm:block" />
                  )}
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
