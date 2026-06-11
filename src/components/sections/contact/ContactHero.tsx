import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  MessageSquareMore,
  Sparkles,
} from "lucide-react";
import TypewriterHeading from "@/components/ui/TypewriterHeading";
import Reveal from "@/components/ui/Reveal";
import { contactMeta } from "@/data/contact";

const signalRows = [
  {
    label: "Status",
    value: contactMeta.status,
    Icon: CheckCircle2,
  },
  {
    label: "Location",
    value: contactMeta.location,
    Icon: MapPin,
  },
  {
    label: "Focus",
    value: contactMeta.focus,
    Icon: BriefcaseBusiness,
  },
  {
    label: "Response style",
    value: contactMeta.responseStyle,
    Icon: MessageSquareMore,
  },
] as const;

export default function ContactHero() {
  return (
    <section className="grid min-h-[calc(100svh-8rem)] items-center gap-8 pb-20 pt-2 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.78fr)] lg:gap-12 lg:pb-24">
      <Reveal>
        <div className="border-l border-[#8dbbff]/45 pl-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
            01 // contact.init
          </p>
          <TypewriterHeading
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl"
            lines={["Contact."]}
          />
          <h2 className="mt-5 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Let&apos;s connect about software engineering, internships,
            graduate roles, or project opportunities.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            I&apos;m open to conversations around software engineering roles,
            internships, graduate opportunities, portfolio projects, and
            collaborative technology work. If my experience or projects seem
            relevant, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
            >
              Send a Message
              <ArrowRight
                size={17}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              View Projects
              <Sparkles size={17} aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <article className="relative overflow-hidden rounded-[24px] border border-white/75 bg-white/66 p-4 shadow-[0_24px_80px_rgba(45,95,157,0.13)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(198,183,255,0.2),transparent_32%),radial-gradient(circle_at_16%_90%,rgba(141,187,255,0.16),transparent_36%)]" />
          <div className="relative z-10 overflow-hidden rounded-[20px] border border-[#d4e3ff]/62 bg-white/60">
            <div className="flex items-center justify-between border-b border-[#d4e3ff]/58 px-4 py-3">
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
                contact.signal
              </span>
              <span className="rounded-full border border-[#d4e3ff]/70 bg-white/68 px-2.5 py-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                outreach dashboard
              </span>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid gap-3">
                {signalRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex gap-3 rounded-[16px] border border-[#d4e3ff]/62 bg-[#f8fbff]/74 p-3.5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#8dbbff]/24 bg-white/80 text-[#2d5f9d] shadow-[0_10px_24px_rgba(45,95,157,0.07)]">
                      <row.Icon size={18} strokeWidth={2.2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.13em] text-[#2d5f9d]/70">
                        {row.label}
                      </p>
                      <p className="mt-1 text-sm font-extrabold leading-6 text-slate-900">
                        {row.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
