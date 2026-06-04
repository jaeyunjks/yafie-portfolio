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

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {depthItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article
              className={`group relative h-full overflow-hidden rounded-[18px] border bg-white/64 p-5 shadow-[0_16px_50px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/45 hover:bg-white/88 hover:shadow-[0_22px_68px_rgba(45,95,157,0.12)] ${
                item.featured ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(238,245,255,0.3)_58%,rgba(231,222,255,0.12))]" />
              <div className="relative z-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/82 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)]">
                  <item.Icon size={20} strokeWidth={2.2} aria-hidden />
                </span>
                <p className="mt-5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                  depth.0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
