import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "@/components/ui/Reveal";
import { otherProjects } from "@/data/projects";

/** Compact list for smaller or older projects (tier: "other"). */
export default function OtherProjects() {
  if (otherProjects.length === 0) return null;

  return (
    <section id="other-projects" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/90">
            04 // other.projects
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            Other projects.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04} className="flex">
            <article className="flex w-full flex-col rounded-[18px] border border-white/75 bg-white/68 p-5 shadow-[0_22px_70px_rgba(45,95,157,0.08)] backdrop-blur-xl">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/90">
                {project.projectDisplayType} · {project.projectDate}
              </p>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
                {project.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[#d4e3ff]/75 bg-white/70 px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.08em] text-slate-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.actions.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.actions.map((action) => {
                    const isExternal = action.href.startsWith("http");
                    const isGithub = action.href.includes("github.com");
                    return (
                      <Link
                        key={action.label}
                        href={action.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#2d5f9d] transition-colors hover:text-[#1d4677]"
                      >
                        {isGithub ? <SiGithub size={14} aria-hidden /> : null}
                        {action.label}
                        {isGithub ? null : <ArrowRight size={14} aria-hidden />}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
