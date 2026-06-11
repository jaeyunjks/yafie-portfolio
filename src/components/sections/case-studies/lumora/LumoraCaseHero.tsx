import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TypewriterHeading from "@/components/ui/TypewriterHeading";
import Reveal from "@/components/ui/Reveal";
import { lumoraMetadata } from "@/data/caseStudies/lumora";
import { LumoraImage } from "./LumoraMockups";

export default function LumoraCaseHero() {
  return (
    <section className="relative isolate -mt-10 overflow-hidden px-6 pb-14 pt-4 sm:-mt-12 sm:pt-6 lg:-mt-14 lg:pt-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.68fr)] xl:gap-12">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              case.study // lumora
            </p>
            <TypewriterHeading
              className="mt-4 text-6xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl"
              lines={["Lumora"]}
            />
            <p className="mt-4 text-2xl font-extrabold leading-tight text-[#2d5f9d] sm:text-3xl">
              Smart Study Companion
            </p>
            <p className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
              Turning scattered study materials into clear understanding.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Lumora is a mobile-first study companion designed for university
              students who collect notes, PDFs, slides, screenshots, and images
              across different tools but still struggle to turn them into
              structured understanding. The app brings study materials, notes,
              file imports, and AI-assisted summaries into one organised iOS
              workspace.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {lumoraMetadata.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d4e3ff]/75 bg-white/68 px-3.5 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600 shadow-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
                >
                  <ArrowLeft size={17} strokeWidth={2.4} aria-hidden />
                  Back to Projects
                </Link>
                <Link
                  href="#app-flow"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl sm:w-auto"
                >
                  View App Flow
                  <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
                </Link>
              </div>
              <a
                href="https://github.com/jaeyunjks/SmartStudyCompanion"
                target="_blank"
                rel="noreferrer"
                aria-label="Lumora GitHub repository"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:ml-auto"
              >
                <SiGithub size={18} aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-[radial-gradient(circle_at_60%_18%,rgba(141,187,255,0.26),transparent_36%),radial-gradient(circle_at_12%_88%,rgba(198,183,255,0.2),transparent_36%)] blur-2xl" />
            <div className="relative rounded-[32px] border border-white/78 bg-white/56 p-5 shadow-[0_30px_96px_rgba(45,95,157,0.18)] backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
                    app.preview
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-700">
                    Mobile-first study workspace
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-[#f8fbff]/82 text-[#2d5f9d]">
                  <Smartphone size={18} strokeWidth={2.3} aria-hidden />
                </span>
              </div>
              <LumoraImage
                src="/images/projects/Lumora/lumora.png"
                alt="Lumora Smart Study Companion preview"
                label="Lumora app preview"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
