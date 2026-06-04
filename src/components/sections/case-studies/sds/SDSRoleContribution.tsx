import { Code2, FileCheck2, GitBranch, TestTube2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  sdsContributions,
  sdsSkills,
} from "@/data/caseStudies/sdsModernisation";

const icons = [Code2, TestTube2, GitBranch, FileCheck2];

export default function SDSRoleContribution() {
  return (
    <section id="role-contribution" className="scroll-mt-32 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              03 // role.contribution
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              My role and contribution.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              I contributed as a Frontend Developer & Tester, focusing on
              interface quality, workflow behaviour, and user-flow validation.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {sdsContributions.map((contribution, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={contribution.title} delay={index * 0.04}>
                <article
                  className={`group h-full rounded-[22px] border bg-white/66 p-6 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/86 ${
                    contribution.featured
                      ? "border-[#8dbbff]/58 lg:col-span-2"
                      : "border-white/75"
                  }`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                    <Icon size={20} strokeWidth={2.25} aria-hidden />
                  </span>
                  <p className="mt-5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
                    contribution.0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                    {contribution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {contribution.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-5 rounded-[22px] border border-white/75 bg-white/58 p-5 shadow-[0_18px_56px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/70">
              tech.skills
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sdsSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#d4e3ff]/72 bg-white/72 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
