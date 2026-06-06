import Link from "next/link";
import { ArrowLeft, ArrowRight, FolderKanban } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { sdsMetadata } from "@/data/caseStudies/sdsModernisation";
import SDSBrowserMockup from "./SDSBrowserMockup";

function SDSHeroPreview() {
  return (
    <div className="relative lg:pl-2">
      <div className="absolute -inset-3 rounded-[34px] bg-[radial-gradient(circle_at_70%_12%,rgba(141,187,255,0.26),transparent_36%),radial-gradient(circle_at_12%_88%,rgba(198,183,255,0.2),transparent_34%)] blur-2xl" />
      <div className="relative rounded-[30px] border border-white/78 bg-white/56 p-3 shadow-[0_30px_96px_rgba(45,95,157,0.18)] backdrop-blur-2xl sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-3 px-1">
          <div className="min-w-0">
            <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/72">
              project.preview
            </p>
            <p className="mt-1 truncate text-sm font-bold text-slate-700">
              Coordinator workflow interface
            </p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#d4e3ff]/70 bg-white/70 text-[#2d5f9d]">
            <FolderKanban size={18} strokeWidth={2.3} aria-hidden />
          </span>
        </div>

        <SDSBrowserMockup
          title="SDS Project Management Site"
          imageSrc="/images/projects/SDS/logo.png"
          alt="SDS Project Management Site interface preview"
          imageScale="scale-[1.08]"
          featured
        />
      </div>
    </div>
  );
}

export default function SDSCaseHero() {
  return (
    <section className="relative isolate -mt-10 overflow-hidden px-6 pb-14 pt-4 sm:-mt-12 sm:pt-6 lg:-mt-14 lg:pt-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
              case.study // sds.modernisation
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              SDS Project Management Site
            </h1>
            <p className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
              Modernising project coordination for Software Development Studio.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A high-level case study of a workflow system designed to support
              UTS Software Development Studio across project submission,
              coordinator review, project visibility, student allocation, join
              requests, documentation, and communication touchpoints.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {sdsMetadata.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d4e3ff]/75 bg-white/68 px-3.5 py-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-slate-600 shadow-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur-md transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:w-auto"
              >
                <ArrowLeft size={17} strokeWidth={2.4} aria-hidden />
                Back to Projects
              </Link>
              <Link
                href="#feature-showcase"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d5f9d] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl sm:w-auto"
              >
                View Project Gallery
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SDSHeroPreview />
        </Reveal>
      </div>
    </section>
  );
}
