import {
  Braces,
  Cloud,
  Database,
  FileCheck,
  LayoutDashboard,
  SearchCheck,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const depthItems = [
  {
    title: "Requirements Thinking",
    description:
      "Understanding the problem, users, workflow, and constraints before implementation.",
    Icon: SearchCheck,
    featured: true,
  },
  {
    title: "Frontend Engineering",
    description:
      "Building interfaces that are responsive, readable, consistent, and usable.",
    Icon: LayoutDashboard,
    featured: false,
  },
  {
    title: "Backend & Data Logic",
    description:
      "Working with application logic, database structures, CRUD flows, and server-side behaviour.",
    Icon: Database,
    featured: false,
  },
  {
    title: "Testing & Quality",
    description:
      "Checking user flows, debugging issues, and improving reliability through iteration.",
    Icon: FileCheck,
    featured: false,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Learning how applications are configured, connected, and deployed in live environments.",
    Icon: Cloud,
    featured: false,
  },
  {
    title: "Documentation & Handover",
    description:
      "Explaining decisions, setup, testing evidence, and project behaviour clearly.",
    Icon: Braces,
    featured: false,
  },
];

export default function EngineeringDepth() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            04 // engineering.depth
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            What these projects demonstrate.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Across these projects, I&apos;m building practical software
            engineering habits beyond just writing code.
          </p>
        </div>
      </Reveal>

      <div className="open-panel">
        <div className="relative z-10 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
          {depthItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group h-full border-t border-[#d4e3ff]/62 py-5 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white/34 md:px-3">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/20 bg-[#eef5ff]/66 text-[#2d5f9d] transition-[background-color,border-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#8dbbff]/38 group-hover:bg-white/78">
                    <item.Icon size={17} strokeWidth={2.2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/55">
                      depth.0{index + 1}
                    </p>
                    <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
