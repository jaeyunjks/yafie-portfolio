import Reveal from "@/components/ui/Reveal";
import { volunteerExperience } from "@/data/workExperience";
import ExperienceCard from "./ExperienceCard";
import VolunteerExperienceGallery from "./VolunteerExperienceGallery";

export default function VolunteerExperience() {
  return (
    <section id="volunteer-experience" className="scroll-mt-32 pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            04 // volunteer.experience
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Volunteer Experience.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Community and university involvement that supports communication,
            presentation, and professional engagement.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(16rem,0.28fr)]">
        {volunteerExperience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <ExperienceCard item={item} index={index + 1} />
          </Reveal>
        ))}

        <Reveal delay={0.08}>
          <aside className="relative h-full overflow-hidden rounded-[18px] border border-white/75 bg-white/60 p-5 shadow-[0_16px_50px_rgba(45,95,157,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(238,245,255,0.34)_54%,rgba(231,222,255,0.14))]" />
            <div className="relative z-10">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                showcase.signal
              </p>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950">
                Project gallery added
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tech Fest sits between software work and professional
                communication, so the gallery below captures both the
                client-facing setup and the team presentation side of the
                showcase.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>

      <VolunteerExperienceGallery />
    </section>
  );
}
