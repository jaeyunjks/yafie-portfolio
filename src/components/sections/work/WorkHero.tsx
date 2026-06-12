import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Code2,
  Layers3,
  MessageCircle,
  Route,
  Workflow,
} from "lucide-react";
import ScrollCue from "@/components/ui/ScrollCue";
import TypewriterHeading from "@/components/ui/TypewriterHeading";
import Reveal from "@/components/ui/Reveal";

const dashboardBlocks = [
  {
    label: "Current Role",
    value: "Frontend Developer & Tester",
    detail: "SDS Modernisation · Feb 2026 - Present",
    Icon: Code2,
  },
  {
    label: "Core Work",
    value: "Frontend UI · Testing · Workflow Systems",
    detail: "Implementation, validation, and interface refinement",
    Icon: ClipboardCheck,
  },
  {
    label: "Delivery Focus",
    value: "Coordinator workflows · project visibility · usability",
    detail: "Making academic project coordination clearer",
    Icon: Workflow,
  },
  {
    label: "Direction",
    value: "IT & software development roles",
    detail: "Growing across delivery, quality, and product thinking",
    Icon: Layers3,
  },
];

const snapshotFlow = [
  "Software Projects",
  "Testing",
  "Workflow Systems",
  "Team Delivery",
];

export default function WorkHero() {
  return (
    <section className="relative grid min-h-[calc(100svh-7rem)] items-center gap-8 pb-20 pt-2 lg:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)] lg:gap-12 lg:pb-24">
      <Reveal>
        <div className="border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            01 // work.init
          </p>
          <TypewriterHeading
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl"
            lines={["Work Experience."]}
          />
          <h2 className="mt-5 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Building practical software experience across development, testing,
            and collaborative delivery.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            I&apos;ve worked across frontend development, testing, workflow systems, and documentation.

            Most recently, I contributed as a Frontend Developer and QA Engineer working on a UTS project management system that improves project submission, review, coordination, and tracking for SDS subject.

            My work focuses on building practical, user-focused software that supports clearer workflows and maintainable delivery.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            I&apos;m continuing to grow toward broader IT and software
            development roles where I can contribute across implementation,
            quality, documentation, and product-focused problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
            >
              View Projects
              <ArrowRight
                size={17}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              Contact Me <MessageCircle size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <article className="relative overflow-hidden rounded-[22px] border border-white/75 bg-white/64 p-4 shadow-[0_24px_80px_rgba(45,95,157,0.13)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(198,183,255,0.18),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(141,187,255,0.16),transparent_34%)]" />
          <div className="relative z-10 overflow-hidden rounded-[18px] border border-[#d4e3ff]/58 bg-white/52">
            <div className="flex items-center justify-between border-b border-[#d4e3ff]/58 px-4 py-3">
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                experience.snapshot
              </span>
              <span className="rounded-full border border-[#d4e3ff]/70 bg-white/68 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                career dashboard
              </span>
            </div>

            <div className="p-5 md:p-6">
              <div className="mb-5">
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Work Dashboard
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                  Current software-focused experience
                </h3>
              </div>

              <div className="grid gap-3">
                {dashboardBlocks.map((block) => (
                  <div
                    key={block.label}
                    className="flex gap-3 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/72 p-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/22 bg-white/76 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.07)]">
                      <block.Icon size={18} strokeWidth={2.2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                        {block.label}
                      </p>
                      <p className="mt-1 text-sm font-extrabold leading-5 text-slate-900">
                        {block.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {block.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 rounded-[14px] border border-[#d4e3ff]/62 bg-white/58 p-3">
                {snapshotFlow.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.54rem] font-bold uppercase tracking-[0.1em] text-slate-500">
                      {item}
                    </span>
                    {index < snapshotFlow.length - 1 ? (
                      <Route
                        size={13}
                        strokeWidth={2.2}
                        aria-hidden
                        className="hidden text-[#2d5f9d]/42 sm:block"
                      />
                    ) : null}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </article>
      </Reveal>
      <ScrollCue label="Scroll to explore my work" />
    </section>
  );
}
