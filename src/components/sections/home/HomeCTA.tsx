import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function HomeCTA() {
  return (
    <section className="-mb-20 pt-2">
      <Reveal>
        <div className="open-editorial-cta [padding-block:clamp(3rem,6vw,5rem)_clamp(2rem,4vw,3rem)]">
          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-2 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Let&apos;s build something thoughtful.
            </h2>
            <p className="mt-4 max-w-[680px] text-base leading-8 text-slate-600">
              I&apos;m open to graduate opportunities, internships, and software
              engineering conversations where I can contribute, learn, and grow
              with a strong team.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl sm:w-auto"
              >
                Contact Me <MessageCircle size={17} aria-hidden />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/72 px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
              >
                View Projects{" "}
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
