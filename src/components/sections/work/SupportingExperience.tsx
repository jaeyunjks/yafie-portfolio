import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { supportingExperience } from "@/data/workExperience";

const transferableSkills = [
  "stakeholder communication",
  "quality assurance mindset",
  "team coordination",
  "workflow thinking",
  "prioritisation",
  "accountability",
  "calm problem-solving",
  "documentation awareness",
];

export default function SupportingExperience() {
  return (
    <section id="supporting-experience" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            06 // supporting.experience
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Supporting Leadership Experience.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Hospitality leadership experience that strengthened communication,
            reliability, coordination, quality awareness, and
            project-management habits.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-5 rounded-[18px] border border-white/75 bg-white/58 p-5 shadow-[0_18px_58px_rgba(45,95,157,0.08)] backdrop-blur-xl">
          <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
            Transferable to software teams
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {transferableSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/78 px-3 py-2 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-slate-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
        {supportingExperience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <article
              className={`group relative h-full overflow-hidden rounded-[18px] border bg-white/62 p-5 backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/45 hover:bg-white/86 ${
                index === 0
                  ? "border-[#8dbbff]/48 shadow-[0_22px_70px_rgba(45,95,157,0.12)] md:p-6"
                  : "border-white/75 shadow-[0_16px_46px_rgba(45,95,157,0.07)]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(238,245,255,0.28)_54%,rgba(231,222,255,0.12))]" />
              <div className="relative z-10">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#8dbbff]/22 bg-[#eef5ff]/74 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.08)]">
                    <ShieldCheck size={18} strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.11em] text-slate-500">
                    {item.duration}
                  </span>
                </div>
                <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#2d5f9d]/66">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-bold text-slate-700">
                  {item.organisation}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                {item.keyContributions.length > 0 ? (
                  <div className="mt-4 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/70 p-4">
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      {index === 0 ? "Context" : "Key responsibilities"}
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                      {item.keyContributions.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {item.responsibilities?.length ? (
                  <div className="mt-4 rounded-[14px] border border-[#d4e3ff]/62 bg-white/58 p-4">
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                      Key responsibilities
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbbff]" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="mt-4 rounded-[14px] border border-[#d4e3ff]/62 bg-[#f8fbff]/70 p-4">
                  <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    Software / IT relevance
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.relevance}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#d4e3ff]/68 bg-white/64 px-2.5 py-1.5 font-mono text-[0.54rem] font-bold uppercase tracking-[0.1em] text-slate-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
