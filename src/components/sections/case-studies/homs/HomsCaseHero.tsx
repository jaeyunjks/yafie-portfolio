import { SiGithub } from "react-icons/si";
import CaseStudyBackLink from "@/components/sections/case-studies/CaseStudyBackLink";
import StatRow from "@/components/sections/case-studies/shared/StatRow";
import Reveal from "@/components/ui/Reveal";
import { homsFacts, homsLinks, homsStats } from "@/data/caseStudies/homs";

export default function HomsCaseHero() {
  const meta = [homsFacts.role, homsFacts.team, homsFacts.timeline];

  return (
    <section className="px-6 pb-6 pt-4 md:pt-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <CaseStudyBackLink />
          <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/90">
            case.study // {homsFacts.shortTitle.toLowerCase()}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {homsFacts.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            A five-service hospital platform built by a team of five. I owned
            the Staff &amp; Shift Management module end to end, deployed it to
            Azure, and built the team&apos;s shared multi-agent server, where AI
            suggests and a person decides.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project details">
            {meta.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[#d4e3ff]/75 bg-white/70 px-3 py-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-slate-600"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={homsLinks.github}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/75"
          >
            <SiGithub size={17} aria-hidden />
            GitHub Repo
          </a>
        </Reveal>
        <div className="mt-10">
          <StatRow stats={homsStats} />
        </div>
      </div>
    </section>
  );
}
