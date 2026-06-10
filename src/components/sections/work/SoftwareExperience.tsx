import {
  ArrowDown,
  ArrowRight,
  Bug,
  ClipboardCheck,
  MousePointerClick,
  Palette,
  RefreshCw,
} from "lucide-react";
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

const testingFocus = [
  {
    title: "User flow validation",
    description:
      "Checking whether key journeys make sense from setup through completion.",
    Icon: MousePointerClick,
  },
  {
    title: "UI consistency checks",
    description:
      "Reviewing spacing, labels, states, and visual behaviour across screens.",
    Icon: Palette,
  },
  {
    title: "Bug/issue identification",
    description:
      "Capturing defects clearly so the team can reproduce and resolve them.",
    Icon: Bug,
  },
  {
    title: "Regression awareness",
    description:
      "Rechecking important flows after changes to avoid breaking existing work.",
    Icon: RefreshCw,
  },
];

const testingTags = [
  "user flow testing",
  "UI checks",
  "debugging",
  "usability review",
  "regression awareness",
  "issue notes",
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

              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
                {sprintRoadmap.map((item, index) => (
                  <div key={item.sprint} className="contents">
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
                    {index < sprintRoadmap.length - 1 ? (
                      <div className="flex items-center justify-center py-1 lg:px-2 lg:py-0">
                        <span className="hidden h-px w-8 bg-gradient-to-r from-[#8dbbff]/70 to-[#c6b7ff]/45 lg:block" />
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4e3ff]/70 bg-white/86 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.08)]">
                          <ArrowDown
                            size={14}
                            strokeWidth={2.4}
                            aria-hidden
                            className="lg:hidden"
                          />
                          <ArrowRight
                            size={14}
                            strokeWidth={2.4}
                            aria-hidden
                            className="hidden lg:block"
                          />
                        </span>
                        <span className="hidden h-px w-8 bg-gradient-to-r from-[#8dbbff]/70 to-[#c6b7ff]/45 lg:block" />
                      </div>
                    ) : null}
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

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {testingFocus.map((focus) => (
                <div
                  key={focus.title}
                  className="rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-[#8dbbff]/22 bg-white/76 text-[#2d5f9d]">
                    <focus.Icon size={17} strokeWidth={2.2} aria-hidden />
                  </span>
                  <h4 className="mt-3 text-sm font-extrabold tracking-tight text-slate-950">
                    {focus.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {focus.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {testingTags.map((practice) => (
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
