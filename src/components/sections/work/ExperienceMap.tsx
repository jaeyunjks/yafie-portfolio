import {
  ArrowRight,
  ClipboardCheck,
  Code2,
  Layers3,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    title: "Software Development",
    description:
      "Current frontend and testing work on the SDS Modernisation system.",
    label: "current focus",
    Icon: Code2,
    featured: true,
    href: "#software-experience",
  },
  {
    title: "Testing & Quality",
    description:
      "Validating user flows, identifying issues, and improving reliability across project features.",
    label: "quality signal",
    Icon: ClipboardCheck,
    featured: false,
    href: "#testing-quality",
  },
  {
    title: "Volunteer Experience",
    description:
      "University engagement, project showcase communication, and professional presentation practice.",
    label: "university",
    Icon: Users,
    featured: false,
    href: "#volunteer-experience",
  },
  {
    title: "Supporting Experience",
    description:
      "Hospitality team leadership experience that strengthens communication, accountability, and team coordination.",
    label: "supporting",
    Icon: ShieldCheck,
    featured: false,
    href: "#supporting-experience",
  },
  {
    title: "Others",
    description:
      "Project-related milestones and recognition placeholders that will be updated when evidence is confirmed.",
    label: "pending",
    Icon: Layers3,
    featured: false,
    href: "#others",
  },
];

export default function ExperienceMap() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            02 // experience.map
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Experience at a glance.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A focused overview of my software development work, technical
            collaboration, university engagement, and supporting leadership
            experience.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="open-panel">
          <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {categories.map((category, index) => {
              const spanClass = index > 2 ? "xl:col-span-3" : "xl:col-span-2";

              return (
                <a
                  key={category.title}
                  href={category.href}
                  className={`group relative min-h-[13rem] overflow-hidden rounded-[18px] border p-5 backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:bg-white/92 ${spanClass} ${
                    category.featured
                      ? "border-[#8dbbff]/55 bg-white/78 shadow-[0_18px_52px_rgba(45,95,157,0.12)] hover:border-[#2d5f9d]/35 hover:shadow-[0_24px_68px_rgba(45,95,157,0.16)]"
                      : "border-white/72 bg-white/58 shadow-[0_12px_36px_rgba(45,95,157,0.06)] hover:border-[#8dbbff]/55 hover:shadow-[0_18px_50px_rgba(45,95,157,0.1)]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(248,251,255,0.4)_58%,rgba(231,222,255,0.12))]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/82 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <category.Icon
                          size={20}
                          strokeWidth={2.2}
                          aria-hidden
                        />
                      </span>
                      <span className="rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
                        {category.label}
                      </span>
                    </div>
                    <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/62">
                      navigation.0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/72">
                      Jump to section
                      <ArrowRight
                        size={13}
                        strokeWidth={2.4}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
