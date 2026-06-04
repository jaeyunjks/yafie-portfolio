import Link from "next/link";
import { ArrowLeft, ArrowRight, FolderKanban } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { sdsMetadata } from "@/data/caseStudies/sdsModernisation";
import SDSImagePlaceholder from "./SDSImagePlaceholder";

export default function SDSCaseHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              case.study // sds.modernisation
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              SDS Modernisation
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
              Modernising project coordination for Software Development Studio.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A high-level case study of a workflow system designed to help UTS
              Software Development Studio coordinators manage project
              submissions, reviews, student allocations, and project visibility
              more clearly.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {sdsMetadata.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d4e3ff]/75 bg-white/68 px-3.5 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600 shadow-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#feature-showcase"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
              >
                View Project Gallery
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <ArrowLeft size={17} strokeWidth={2.4} aria-hidden />
                Back to Projects
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[34px] bg-[radial-gradient(circle_at_70%_10%,rgba(141,187,255,0.22),transparent_36%),radial-gradient(circle_at_10%_90%,rgba(198,183,255,0.18),transparent_34%)] blur-2xl" />
            <div className="relative rounded-[30px] border border-white/75 bg-white/52 p-4 shadow-[0_34px_110px_rgba(45,95,157,0.18)] backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between gap-3 px-1">
                <div>
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
                    project.preview
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-700">
                    Coordinator workflow interface
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4e3ff]/70 bg-white/70 text-[#2d5f9d]">
                  <FolderKanban size={18} strokeWidth={2.3} aria-hidden />
                </span>
              </div>
              <SDSImagePlaceholder
                title="SDS Modernisation"
                imageSrc="/images/projects/sds-modernisation-preview.png"
                variant="hero"
                featured
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
