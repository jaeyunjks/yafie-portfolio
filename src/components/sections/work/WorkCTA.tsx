import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function WorkCTA() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/66 p-8 shadow-[0_24px_80px_rgba(45,95,157,0.12)] backdrop-blur-xl md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c6b7ff]/24 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#8dbbff]/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              I&apos;m open to graduate opportunities, internships, and software
              engineering conversations where I can contribute through
              development, testing, documentation, product thinking, and a
              strong willingness to learn.
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
  );
}
