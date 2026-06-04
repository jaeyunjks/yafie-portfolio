import { ArrowRight, ClipboardCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { softwareExperience } from "@/data/workExperience";
import ExperienceCard from "./ExperienceCard";

const sprintRoadmap = [
  {
    sprint: "Sprint 0",
    title: "Discovery & requirements",
    description:
      "Clarified coordinator workflow needs, project allocation pain points, and system expectations.",
  },
  {
    sprint: "Sprint 1",
    title: "Frontend foundations",
    description:
      "Built core interface structure, navigation patterns, and early workflow screens.",
  },
  {
    sprint: "Sprint 2",
    title: "Feature implementation",
    description:
      "Developed project-management interfaces and refined user flows for coordinator tasks.",
  },
  {
    sprint: "Sprint 3",
    title: "Testing & refinement",
    description:
      "Tested important flows, identified usability issues, and improved consistency across features.",
  },
  {
    sprint: "Sprint 4",
    title: "Workflow visibility & documentation",
    description:
      "Improved project visibility, documented decisions, and prepared the system for clearer handover.",
  },
];

const workflowChips = [
  "requirements",
  "frontend UI",
  "testing",
  "workflow visibility",
  "documentation",
];

const testingPractices = [
  "user flow testing",
  "UI and functionality checks",
  "debugging",
  "usability issue review",
  "regression awareness",
  "issue documentation",
];

export default function SoftwareExperience() {
  if (!softwareExperience) {
    return null;
  }

  return (
    <section id="software-experience" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            03 // software.experience
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Current Software Experience.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Frontend development, testing, and workflow-system contribution
            through SDS Modernisation.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5">
        <Reveal>
          <ExperienceCard item={softwareExperience} index={0} />
        </Reveal>

        <Reveal delay={0.06}>
          <article className="relative overflow-hidden rounded-[22px] border border-white/75 bg-white/62 p-5 shadow-[0_22px_72px_rgba(45,95,157,0.1)] backdrop-blur-xl md:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(141,187,255,0.16),transparent_32%),radial-gradient(circle_at_88%_84%,rgba(198,183,255,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.82),rgba(238,245,255,0.34))]" />
            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                    project.workflow
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
                    How the work progressed
                  </h3>
                </div>
                <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
                  Sprint 0 to Sprint 4
                </span>
              </div>

              <div className="grid gap-3 lg:grid-cols-5">
                {sprintRoadmap.map((item, index) => (
                  <div key={item.sprint} className="relative">
                    {index < sprintRoadmap.length - 1 ? (
                      <span className="pointer-events-none absolute left-[calc(100%-0.35rem)] top-10 z-20 hidden items-center lg:flex">
                        <span className="h-px w-5 bg-gradient-to-r from-[#8dbbff]/70 to-[#c6b7ff]/45" />
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/82 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.08)]">
                          <ArrowRight size={14} strokeWidth={2.4} aria-hidden />
                        </span>
                      </span>
                    ) : null}
                    <div className="h-full rounded-[16px] border border-[#d4e3ff]/66 bg-white/72 p-4 shadow-[0_14px_38px_rgba(45,95,157,0.07)]">
                      <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                        {item.sprint}
                      </p>
                      <h4 className="mt-2 text-base font-extrabold leading-6 text-slate-950">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[16px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-4">
                <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  Delivery areas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {workflowChips.map((chip, index) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full border border-[#d4e3ff]/70 bg-white/74 px-3 py-2 text-sm font-bold capitalize leading-5 text-slate-600"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef5ff] font-mono text-[0.58rem] font-bold text-[#2d5f9d]">
                        {index + 1}
                      </span>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article
            id="testing-quality"
            className="scroll-mt-32 rounded-[20px] border border-white/75 bg-white/60 p-5 shadow-[0_18px_58px_rgba(45,95,157,0.08)] backdrop-blur-xl md:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                  testing.quality
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
                  Testing & Quality Practice.
                </h3>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/82 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                <ClipboardCheck size={20} strokeWidth={2.2} aria-hidden />
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Testing is part of how I validate user flows, improve
              reliability, and reduce avoidable issues while continuing to grow
              practical software delivery habits.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {testingPractices.map((practice) => (
                <span
                  key={practice}
                  className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/78 px-3 py-2 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                >
                  {practice}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
