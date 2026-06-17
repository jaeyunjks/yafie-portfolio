import CaseStudyBackLink from "@/components/sections/case-studies/CaseStudyBackLink";
import NonSdsCaseStudyHeroActions from "@/components/sections/case-studies/NonSdsCaseStudyHeroActions";
import ScrollCue from "@/components/ui/ScrollCue";
import TypewriterHeading from "@/components/ui/TypewriterHeading";
import Reveal from "@/components/ui/Reveal";
import { focusPopLinks, focusPopMetadata } from "@/data/caseStudies/focuspop";
import { FocusPopImage } from "./FocusPopVisuals";

export default function FocusPopCaseHero() {
  return (
    <section className="relative isolate -mt-10 overflow-hidden px-6 pb-14 pt-4 sm:-mt-12 sm:pt-6 lg:-mt-14 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 sm:mb-4 lg:mb-6">
            <CaseStudyBackLink />
          </div>
        </Reveal>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] xl:gap-12">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
                case.study // focuspop
              </p>
              <TypewriterHeading
                className="mt-4 text-6xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl"
                lines={["FocusPop"]}
              />
              <p className="mt-4 text-2xl font-extrabold leading-tight text-[#2d5f9d] sm:text-3xl">
                Pop distractions, grow your focus.
              </p>
              <p className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
                A SwiftUI bubble-popping game built for short focus sessions.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                FocusPop is a mobile game project designed around quick,
                lightweight focus sessions. Players enter their name, choose a
                gameplay mode, pop bubbles before the timer ends, and review
                their final score, accuracy, duration, and leaderboard result.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {focusPopMetadata.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d4e3ff]/75 bg-white/68 px-3.5 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600 shadow-sm backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <NonSdsCaseStudyHeroActions
                githubHref={focusPopLinks.github}
                projectGalleryHref="#gameplay-flow"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[36px] bg-[radial-gradient(circle_at_60%_18%,rgba(141,187,255,0.26),transparent_36%),radial-gradient(circle_at_12%_88%,rgba(198,183,255,0.2),transparent_36%)] blur-2xl" />
              <div className="relative rounded-[32px] border border-white/78 bg-white/58 p-5 shadow-[0_30px_96px_rgba(45,95,157,0.18)] backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
                      game.preview
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-700">
                      SwiftUI focus session game
                    </p>
                  </div>
                  <span className="inline-flex rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]">
                    iOS
                  </span>
                </div>
                <FocusPopImage
                  src={focusPopLinks.previewImage}
                  alt="FocusPop game preview"
                  label="FocusPop preview"
                  variant="hero"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <ScrollCue label="Scroll to explore my work" />
    </section>
  );
}
