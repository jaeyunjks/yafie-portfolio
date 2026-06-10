import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function WorkCTA() {
  return (
    <section className="pb-20 lg:pb-24">
      <Reveal>
        <div className="open-editorial-cta">
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              I&apos;m open to graduate opportunities, internships, and software
              engineering conversations where I can contribute through
              development, testing, documentation, product thinking, and a
              strong willingness to learn.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
