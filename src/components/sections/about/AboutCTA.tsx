import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const employerSignals = [
  {
    title: "Practical Engineering Mindset",
    description:
      "I care about building software that works, makes sense, and can be improved over time.",
    Icon: ShieldCheck,
  },
  {
    title: "Real-World Reliability",
    description:
      "My work background shaped habits around accountability, communication, and delivering under pressure.",
    Icon: MessageCircle,
  },
  {
    title: "Product & User Awareness",
    description:
      "I think about how software feels to people, not only how the code works.",
    Icon: ArrowRight,
  },
];

export default function AboutCTA() {
  return (
    <>
      <section className="pb-20 lg:pb-24">
        <Reveal>
          <div className="mb-8 border-l border-[#8dbbff]/45 pl-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/75">
              07 // employer.signal
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              What I bring to a team.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              A grounded mix of technical learning, real-world work habits, and
              product-focused thinking.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {employerSignals.map((signal, index) => (
            <Reveal key={signal.title} delay={index * 0.06}>
              <article className="group flex flex-col gap-4 overflow-hidden rounded-[16px] border border-white/75 bg-white/70 p-5 shadow-[0_18px_55px_rgba(45,95,157,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8dbbff]/55 hover:bg-white/90 hover:shadow-[0_24px_70px_rgba(45,95,157,0.13)] md:flex-row md:items-center md:p-6">
                <div className="flex items-center gap-4 md:w-80">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-[#8dbbff]/24 bg-[#eef5ff]/78 text-[#2d5f9d] shadow-[0_12px_28px_rgba(45,95,157,0.1)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <signal.Icon size={20} strokeWidth={2.2} aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-[0.64rem] font-bold text-[#2d5f9d]/70">
                      [{String(index + 1).padStart(2, "0")}]
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold tracking-tight text-slate-950">
                      {signal.title}
                    </h3>
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-slate-600">
                  {signal.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-white/75 bg-white/66 p-8 shadow-[0_24px_80px_rgba(45,95,157,0.12)] backdrop-blur-xl md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c6b7ff]/24 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#8dbbff]/20 blur-3xl" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                Let&apos;s build something thoughtful.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                I&apos;m open to graduate opportunities, internships, and
                software engineering conversations where I can contribute,
                learn, and grow with a strong team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
                >
                  Contact Me <MessageCircle size={17} aria-hidden />
                </Link>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  View Projects
                  <ArrowRight
                    size={17}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
