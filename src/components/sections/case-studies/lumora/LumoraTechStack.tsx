import { Code2, Database, GitBranch, ServerCog } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lumoraTechStack } from "@/data/caseStudies/lumora";
import { LumoraSectionLabel } from "./LumoraMockups";

const icons = [Code2, Database, ServerCog, GitBranch];

export default function LumoraTechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-32 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <LumoraSectionLabel
            label="05 // tech.stack"
            title="Technical implementation."
            subtitle="A mobile-first stack focused on iOS experience, local study data, file handling, and AI-assisted learning."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lumoraTechStack.map((group, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <article className="h-full rounded-[26px] border border-white/75 bg-white/66 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <Icon size={18} strokeWidth={2.3} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-950">
                    {group.title}
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {group.items.map(([tech, description]) => (
                      <div
                        key={tech}
                        className="rounded-[16px] border border-[#d4e3ff]/58 bg-[#f8fbff]/72 p-3"
                      >
                        <p className="text-sm font-extrabold text-slate-900">
                          {tech}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
