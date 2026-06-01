import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const featuredProjects = [
  {
    title: "Lumora",
    year: "2026",
    role: "Product Design & Development",
    description:
      "AI-powered study workspace designed to support learning, productivity, and focus.",
    tags: ["SwiftUI", "AI Integration", "Firebase"],
  },
  {
    title: "FreshBasket Vendor Portal",
    year: "2025",
    role: "Full-Stack Developer",
    description:
      "Cloud-deployed produce marketplace demonstrating full-stack development and AWS deployment.",
    tags: ["Node.js", "Express", "AWS", "MySQL"],
  },
  {
    title: "SDS Project Management System",
    year: "2026",
    role: "Frontend & Product Development",
    description:
      "Student project allocation platform focused on workflow management and usability.",
    tags: ["React", "Full-Stack", "Workflow Systems"],
  },
];

export default function FeaturedProject() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 flex flex-col justify-between gap-5 border-l border-[#8dbbff]/45 pl-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              04 // selected.work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Selected Work.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-right">
            Projects that reflect my technical growth, product thinking, and
            approach to solving problems.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group flex min-h-[25rem] flex-col justify-between rounded-3xl border border-white/75 bg-white/68 p-6 shadow-[0_18px_55px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(45,95,157,0.14)]">
              <div>
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span className="rounded-full border border-[#d4e3ff]/90 bg-[#eef4ff]/70 px-3 py-1 font-mono text-xs font-bold text-[#2d5f9d]">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className="font-mono text-xs font-bold tracking-[0.16em] text-slate-400">
                    {project.year}
                  </span>
                </div>
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#625595]/75">
                  {"// "}
                  {project.role}
                </p>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200/75 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/projects"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 group-hover:-translate-y-0.5 hover:bg-[#265589] hover:shadow-xl"
              >
                View project{" "}
                <ArrowRight
                  size={17}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
