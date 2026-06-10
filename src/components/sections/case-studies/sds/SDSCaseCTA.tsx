import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function SDSCaseCTA() {
  return (
    <section className="px-6 pb-24 pt-14">
      <Reveal>
        <div className="open-editorial-cta mx-auto max-w-5xl">
          <div className="inline-flex rounded-full border border-[#d4e3ff]/75 bg-[#f8fbff]/82 px-4 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
            case.study.status
          </div>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Interested in the full project breakdown?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            This is a high-level case study. I'm continuing to document the
            implementation details, testing notes, screenshots, and handover
            evidence as the project evolves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
            >
              <ArrowLeft size={17} strokeWidth={2.4} aria-hidden />
              Back to Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              Contact Me
              <Mail size={17} strokeWidth={2.4} aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
