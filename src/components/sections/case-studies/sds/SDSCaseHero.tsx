"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  FolderKanban,
  PanelsTopLeft,
} from "lucide-react";
import { useState } from "react";
import ScrollCue from "@/components/ui/ScrollCue";
import TypewriterHeading from "@/components/ui/TypewriterHeading";
import Reveal from "@/components/ui/Reveal";
import CaseStudyBackLink from "@/components/sections/case-studies/CaseStudyBackLink";
import { sdsLinkGalleryLinks } from "@/data/caseStudies/sdsLinkGallery";
import { sdsMetadata } from "@/data/caseStudies/sdsModernisation";
import SDSBrowserMockup from "./SDSBrowserMockup";

function SDSHeroPreview() {
  return (
    <div className="relative">
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryPanelId = "sds-case-hero-gallery";

  return (
    <section className="relative isolate -mt-10 overflow-hidden px-6 pb-14 pt-4 sm:-mt-12 sm:pt-6 lg:-mt-14 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 sm:mb-4 lg:mb-6">
            <CaseStudyBackLink />
          </div>
        </Reveal>

        <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-14 2xl:gap-16">
          <Reveal>
            <div className="max-w-3xl xl:max-w-[34rem]">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
                case.study // sds.modernisation
              </p>
              <TypewriterHeading
                className="mt-4 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-[4.5rem] 2xl:text-[4.75rem] [&_.typewriter-heading__line]:whitespace-nowrap"
                lines={["SDS Project", "Management Site"]}
              />
              <p className="mt-5 max-w-3xl text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl">
                Modernising project coordination for Software Development
                Studio.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A high-level case study of a workflow system designed to support
                UTS Software Development Studio across project submission,
                coordinator review, project visibility, student allocation,
                join requests, documentation, and communication touchpoints.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <div className="relative w-full sm:w-auto">
                  <div
                    id={galleryPanelId}
                    aria-hidden={!isGalleryOpen}
                    className={`absolute bottom-[calc(100%+12px)] left-0 z-30 w-[min(18.5rem,calc(100vw-3rem))] max-w-full transition-opacity duration-300 ${
                      isGalleryOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div
                      className={`rounded-[22px] border border-[#d7e5fb]/82 bg-white/92 p-2.5 shadow-[0_24px_72px_rgba(45,95,157,0.14)] backdrop-blur-xl transition-[opacity,transform] duration-300 ${
                        isGalleryOpen
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-2 scale-[0.98] opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1.5">
                        {sdsLinkGalleryLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex min-h-[3.2rem] items-center justify-between gap-3 rounded-[16px] border border-transparent bg-[#f8fbff]/92 px-3.5 py-3 text-left text-sm font-bold text-slate-800 transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#cfe0fa] hover:bg-white hover:shadow-[0_12px_28px_rgba(45,95,157,0.1)]"
                          >
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-extrabold">
                                {link.label}
                              </span>
                              {link.tag ? (
                                <span className="mt-1 inline-flex rounded-full border border-[#d4e3ff]/72 bg-white px-2 py-0.5 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/78">
                                  {link.tag}
                                </span>
                              ) : null}
                            </span>
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9e6fa] bg-white text-[#2d5f9d] transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#bdd5f7] group-hover:shadow-sm">
                              <ExternalLink
                                size={15}
                                strokeWidth={2.25}
                                aria-hidden
                                className="transition-transform duration-300 group-hover:translate-x-0.5"
                              />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-expanded={isGalleryOpen}
                    aria-controls={galleryPanelId}
                    onClick={() => setIsGalleryOpen((current) => !current)}
                    className={`group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#d4e3ff]/78 bg-white/74 px-5 py-3 text-sm font-extrabold text-[#2d5f9d] shadow-sm backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#bdd5f7] hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/75 active:translate-y-0 sm:w-auto ${
                      isGalleryOpen ? "border-[#b8d2f7] bg-[#f4f9ff] shadow-md" : ""
                    }`}
                  >
                    <PanelsTopLeft
                      size={16}
                      strokeWidth={2.2}
                      aria-hidden
                      className={`transition-transform duration-300 ${
                        isGalleryOpen
                          ? "-translate-y-0.5"
                          : "group-hover:-translate-y-0.5"
                      }`}
                    />
                    Open SDS Link Gallery
                    <ChevronDown
                      size={16}
                      strokeWidth={2.3}
                      aria-hidden
                      className={`transition-transform duration-300 ${
                        isGalleryOpen
                          ? "rotate-180"
                          : "group-hover:-translate-y-0.5"
                      }`}
                    />
                  </button>
                </div>

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
            <div className="mx-auto w-full max-w-4xl xl:max-w-none xl:pl-10 2xl:pl-14">
              <SDSHeroPreview />
            </div>
          </Reveal>
        </div>
      </div>
      <ScrollCue label="Scroll to explore my work" />
    </section>
  );
}
