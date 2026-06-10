import {
  ArrowRight,
  ClipboardCheck,
  Code2,
  ChevronDown,
  MapPinned,
  Layers3,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Current frontend and testing work on the SDS Modernisation system.",
    label: "current focus",
    Icon: Code2,
    featured: true,
    href: "#software-experience",
  },
  {
    number: "02",
    title: "Testing & Quality",
    description:
      "Validating user flows, identifying issues, and improving reliability across project features.",
    label: "quality signal",
    Icon: ClipboardCheck,
    featured: false,
    href: "#testing-quality",
  },
  {
    number: "03",
    title: "Volunteer Experience",
    description:
      "University engagement, project showcase communication, and professional presentation practice.",
    label: "university",
    Icon: Users,
    featured: false,
    href: "#volunteer-experience",
  },
  {
    number: "04",
    title: "Supporting Experience",
    description:
      "Hospitality team leadership experience that strengthens communication, accountability, and team coordination.",
    label: "supporting",
    Icon: ShieldCheck,
    featured: false,
    href: "#supporting-experience",
  },
  {
    number: "05",
    title: "Recognition / Project Milestone",
    description:
      "Evidence-backed project nomination and showcase milestone signals.",
    label: "recognition",
    Icon: Layers3,
    featured: false,
    href: "#others",
  },
  {
    number: "06",
    title: "Collaboration Signal",
    description:
      "How communication, accountability, and documentation habits show up in team work.",
    label: "teamwork",
    Icon: Users,
    featured: false,
    href: "#collaboration-signal",
  },
];

export default function ExperienceMap() {
  return (
    <section className="pb-16 lg:pb-20">
      <Reveal>
        <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            02 // experience.map
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Experience at a glance.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            A focused direction map for the Work page. Use it to jump between
            software development, testing, volunteering, recognition, and
            collaboration evidence.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="open-panel">
          <details className="group relative z-10 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-[14px] border border-[#8dbbff]/45 bg-white/72 px-4 py-3.5 shadow-[0_14px_38px_rgba(45,95,157,0.08)] backdrop-blur-xl marker:hidden">
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/22 bg-[#eef5ff]/74 text-[#2d5f9d]">
                  <MapPinned size={17} strokeWidth={2.2} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
                    work.page.index
                  </span>
                  <span className="block truncate text-sm font-extrabold text-slate-950">
                    Jump to a Work section
                  </span>
                </span>
              </span>
              <ChevronDown
                size={17}
                strokeWidth={2.4}
                aria-hidden
                className="shrink-0 text-[#2d5f9d] transition-transform duration-200 group-open:rotate-180"
              />
            </summary>

            <nav
              aria-label="Mobile work page sections"
              className="mt-2 overflow-hidden rounded-[14px] border border-[#d4e3ff]/62 bg-white/62 shadow-[0_14px_38px_rgba(45,95,157,0.075)] backdrop-blur-xl"
            >
              {categories.map((category) => (
                <a
                  key={category.title}
                  href={category.href}
                  className="group flex items-center gap-3 border-b border-[#d4e3ff]/50 px-4 py-3 last:border-b-0 hover:bg-[#f8fbff]/82"
                >
                  <span className="font-mono text-[0.64rem] font-bold text-[#2d5f9d]/70">
                    {category.number}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#8dbbff]/22 bg-[#eef5ff]/72 text-[#2d5f9d]">
                    <category.Icon size={15} strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-extrabold text-slate-800">
                    {category.title}
                  </span>
                  <ArrowRight
                    size={13}
                    strokeWidth={2.4}
                    aria-hidden
                    className="shrink-0 text-[#2d5f9d]/72 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </nav>
          </details>

          <div className="relative z-10 hidden gap-4 lg:grid lg:grid-cols-[0.32fr_0.68fr] lg:items-start lg:gap-8">
            <div className="hidden border-l border-[#8dbbff]/35 pl-5 lg:block">
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_10px_26px_rgba(45,95,157,0.09)]">
                <MapPinned size={20} strokeWidth={2.2} aria-hidden />
              </span>
              <p className="mt-5 font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#2d5f9d]/70">
                work.page.index
              </p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                A compact table of contents for scanning the page without
                turning the map into another large card section.
              </p>
            </div>

            <nav aria-label="Work page sections" className="grid gap-2.5">
              {categories.map((category) => (
                <a
                  key={category.title}
                  href={category.href}
                  className={`group grid gap-3 rounded-[14px] border px-4 py-3.5 backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center ${
                    category.featured
                      ? "border-[#8dbbff]/55 bg-white/78 shadow-[0_14px_38px_rgba(45,95,157,0.1)]"
                      : "border-white/72 bg-white/54 shadow-[0_10px_30px_rgba(45,95,157,0.055)] hover:border-[#8dbbff]/50 hover:bg-white/82"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.68rem] font-bold text-[#2d5f9d]/70">
                      {category.number}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[#8dbbff]/22 bg-[#eef5ff]/74 text-[#2d5f9d]">
                      <category.Icon size={17} strokeWidth={2.2} aria-hidden />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950">
                        {category.title}
                      </h3>
                      <span className="rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/78 px-2 py-0.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/70">
                        {category.label}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/72 sm:justify-self-end">
                    Jump
                    <ArrowRight
                      size={13}
                      strokeWidth={2.4}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
