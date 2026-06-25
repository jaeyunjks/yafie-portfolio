"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import useHorizontalScrollProgress from "@/components/sections/home/useHorizontalScrollProgress";
import Reveal from "@/components/ui/Reveal";
import { volunteerGalleryItems } from "@/data/workExperience";

const aspectRatioClasses = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
} as const;

export default function VolunteerExperienceGallery() {
  const { ref: mobileGalleryRef, progress } =
    useHorizontalScrollProgress<HTMLDivElement>();

  return (
    <div className="mt-8 lg:mt-10">
      <Reveal>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#2d5f9d]/70">
              project.gallery
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 md:text-[2rem]">
              UTS Tech Fest showcase photos
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              Four moments from the SDS Project Management Site booth, ordered
              from the client-facing setup through team and showcase views.
            </p>
          </div>
          <p className="hidden rounded-full border border-[#d4e3ff]/72 bg-white/72 px-3 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72 md:inline-flex">
            4 images
          </p>
        </div>
      </Reveal>

      <div>
        <div
          ref={mobileGalleryRef}
          role="region"
          aria-label="Volunteer experience photo gallery"
          tabIndex={0}
          className="mobile-snap-scroll mt-6 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/70 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:focus-visible:ring-0 xl:grid-cols-4"
        >
          {volunteerGalleryItems.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 0.03}
              className="w-[84vw] shrink-0 snap-center md:w-auto md:snap-none"
            >
              <article className="group flex h-full flex-col rounded-[22px] border border-white/75 bg-white/66 p-3.5 shadow-[0_18px_56px_rgba(45,95,157,0.09)] backdrop-blur-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_72px_rgba(45,95,157,0.12)]">
                <div
                  className={`relative overflow-hidden rounded-[18px] border border-[#d4e3ff]/62 bg-[#eef5ff]/70 ${aspectRatioClasses[item.aspectRatio]}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 84vw, (max-width: 1279px) 44vw, 260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-1.5 pt-3">
                  <h4 className="text-base font-extrabold tracking-tight text-slate-950">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3 md:hidden">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
            Swipe {Math.round(progress)}%
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dbe7fb]">
            <div
              className="h-full rounded-full bg-[#2d5f9d]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ChevronRight size={15} aria-hidden className="text-[#2d5f9d]/55" />
        </div>
      </div>
    </div>
  );
}
