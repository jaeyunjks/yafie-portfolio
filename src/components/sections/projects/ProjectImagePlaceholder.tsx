"use client";

import { useState } from "react";
import type { ProjectType } from "@/data/projects";

type ProjectImagePlaceholderProps = {
  projectType: ProjectType;
  title: string;
  status: string;
  imageSrc?: string;
  featured?: boolean;
};

const accentByType: Record<ProjectType, string> = {
  workflow: "from-[#8dbbff]/36 via-[#eef5ff]/78 to-[#c6b7ff]/28",
  cloud: "from-[#8dbbff]/34 via-[#eef5ff]/80 to-[#c6b7ff]/24",
  "mobile-ai": "from-[#c6b7ff]/40 via-[#f8fbff]/82 to-[#8dbbff]/28",
  "ios-game": "from-[#8dbbff]/32 via-[#f8fbff]/84 to-[#c6b7ff]/26",
  "web-mvc": "from-[#8dbbff]/30 via-white/82 to-slate-200/42",
  portfolio: "from-[#c6b7ff]/32 via-[#f8fbff]/82 to-[#8dbbff]/30",
  "fullstack-workflow": "from-[#8dbbff]/30 via-white/82 to-[#c6b7ff]/28",
};

const statusToneByLabel = [
  {
    test: (status: string) => status.toLowerCase().includes("active"),
    className:
      "border-[#8dbbff]/42 bg-[#eef5ff]/82 text-[#24548f] shadow-[0_12px_30px_rgba(45,95,157,0.14)]",
  },
  {
    test: (status: string) => status.toLowerCase().includes("completed"),
    className:
      "border-emerald-300/42 bg-emerald-50/82 text-emerald-700 shadow-[0_12px_30px_rgba(16,185,129,0.12)]",
  },
  {
    test: (status: string) =>
      status.toLowerCase().includes("concept") ||
      status.toLowerCase().includes("progress"),
    className:
      "border-[#c6b7ff]/52 bg-[#f7f3ff]/84 text-[#67549e] shadow-[0_12px_30px_rgba(103,84,158,0.12)]",
  },
  {
    test: (status: string) => status.toLowerCase().includes("submitted"),
    className:
      "border-amber-300/48 bg-amber-50/84 text-amber-700 shadow-[0_12px_30px_rgba(245,158,11,0.12)]",
  },
];

function getStatusTone(status: string) {
  return (
    statusToneByLabel.find((tone) => tone.test(status))?.className ??
    "border-slate-200/70 bg-white/82 text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.1)]"
  );
}

function WindowChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/60 bg-white/58 px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff8f8f]/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/75" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#78d6a2]/75" />
      <span className="ml-auto h-2 w-24 rounded-full bg-white/70" />
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[0.75fr_1.25fr]">
      <div className="rounded-[14px] border border-white/60 bg-white/58 p-3">
        <span className="block h-3 w-20 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2].map((item) => (
            <span key={item} className="h-8 rounded-[10px] bg-white/76" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((lane) => (
          <div key={lane} className="rounded-[14px] border border-white/60 bg-white/50 p-2">
            <span className="mb-2 block h-2.5 w-12 rounded-full bg-[#8dbbff]/55" />
            <div className="grid gap-2">
              {[0, 1, 2].map((card) => (
                <span
                  key={card}
                  className="h-10 rounded-[10px] bg-white/80 shadow-[0_8px_18px_rgba(45,95,157,0.06)]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[1.05fr_0.95fr]">
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="rounded-[14px] border border-white/60 bg-white/64 p-3">
            <span className="block h-16 rounded-[12px] bg-[#eef5ff]/90" />
            <span className="mt-3 block h-2.5 w-16 rounded-full bg-[#2d5f9d]/22" />
          </div>
        ))}
      </div>
      <div className="rounded-[14px] border border-white/60 bg-white/58 p-3">
        <span className="block h-3 w-24 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="flex items-center gap-2 rounded-[10px] bg-white/76 p-2">
              <span className="h-6 w-6 rounded-full bg-[#8dbbff]/46" />
              <span className="h-2.5 flex-1 rounded-full bg-slate-200/80" />
              <span className="h-5 w-14 rounded-full bg-[#8dbbff]/34" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAiMockup() {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-4">
      <div className="h-full max-h-60 w-32 rounded-[24px] border border-white/70 bg-white/70 p-3 shadow-[0_18px_44px_rgba(45,95,157,0.13)]">
        <span className="mx-auto block h-1.5 w-10 rounded-full bg-slate-300/80" />
        <div className="mt-4 rounded-[16px] bg-[#f7f3ff]/90 p-3">
          <span className="block h-2.5 w-16 rounded-full bg-[#67549e]/24" />
          <span className="mt-5 block h-16 rounded-[14px] bg-white/84" />
        </div>
        <div className="mt-3 grid gap-2">
          <span className="h-7 rounded-[10px] bg-[#eef5ff]" />
          <span className="h-7 rounded-[10px] bg-white/78" />
        </div>
      </div>
      <div className="hidden w-40 rounded-[18px] border border-white/60 bg-white/56 p-3 sm:block">
        <span className="block h-3 w-20 rounded-full bg-[#8dbbff]/38" />
        <div className="mt-4 flex h-20 items-end gap-2">
          {[28, 48, 36, 68, 54].map((height) => (
            <span
              key={height}
              className="w-5 rounded-full bg-[#c6b7ff]/70"
              style={{ height }}
            />
          ))}
        </div>
        <span className="mt-4 inline-flex rounded-full bg-white/78 px-3 py-1 font-mono text-[0.5rem] font-bold uppercase tracking-[0.1em] text-[#67549e]">
          AI assistant
        </span>
      </div>
    </div>
  );
}

function WebMvcMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-[14px] border border-white/60 bg-white/62 p-3">
        <div className="grid gap-2">
          {[0, 1, 2, 3, 4].map((row) => (
            <div key={row} className="grid grid-cols-[1fr_0.8fr_0.55fr] gap-2 rounded-[10px] bg-white/76 p-2">
              <span className="h-2.5 rounded-full bg-slate-300/70" />
              <span className="h-2.5 rounded-full bg-[#8dbbff]/38" />
              <span className="h-2.5 rounded-full bg-[#c6b7ff]/42" />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[14px] border border-white/60 bg-white/58 p-3">
        <span className="block h-3 w-16 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          <span className="h-8 rounded-[10px] bg-white/78" />
          <span className="h-8 rounded-[10px] bg-white/78" />
          <span className="h-10 rounded-[10px] bg-[#eef5ff]" />
        </div>
        <span className="mt-3 inline-flex rounded-full bg-white/78 px-3 py-1 font-mono text-[0.5rem] font-bold uppercase tracking-[0.1em] text-slate-500">
          database
        </span>
      </div>
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[16px] border border-white/60 bg-white/62 p-4">
        <span className="block h-5 w-32 rounded-full bg-[#2d5f9d]/28" />
        <span className="mt-4 block h-14 rounded-[16px] bg-[#eef5ff]/90" />
        <div className="mt-4 flex gap-2">
          <span className="h-8 w-24 rounded-full bg-[#2d5f9d]/28" />
          <span className="h-8 w-20 rounded-full bg-white/80" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((block) => (
          <span key={block} className="rounded-[14px] border border-white/60 bg-white/62" />
        ))}
      </div>
    </div>
  );
}

function PlaceholderContent({ projectType }: { projectType: ProjectType }) {
  if (projectType === "cloud") return <CloudMockup />;
  if (projectType === "mobile-ai") return <MobileAiMockup />;
  if (projectType === "ios-game") return <MobileAiMockup />;
  if (projectType === "web-mvc") return <WebMvcMockup />;
  if (projectType === "portfolio") return <PortfolioMockup />;
  if (projectType === "fullstack-workflow") return <WebMvcMockup />;
  return <WorkflowMockup />;
}

export default function ProjectImagePlaceholder({
  projectType,
  title,
  status,
  imageSrc,
  featured = false,
}: ProjectImagePlaceholderProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(imageSrc && !imageFailed);

  return (
    <div
      className={`relative aspect-[1668/576] overflow-hidden rounded-[18px] border border-white/75 bg-gradient-to-br ${accentByType[projectType]} shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ${featured ? "min-h-[18rem]" : "min-h-[10.5rem]"}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.74),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(141,187,255,0.18),transparent_34%)]" />
      <div className={`absolute right-3 top-3 z-20 max-w-[calc(100%-1.5rem)] rounded-full border px-3 py-1.5 text-right font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] backdrop-blur-md sm:right-4 sm:top-4 sm:px-3.5 sm:py-2 sm:text-[0.56rem] ${getStatusTone(status)}`}>
        {status}
      </div>
      {showImage ? (
        <img
          src={imageSrc}
          alt={`${title} project preview`}
          className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${projectType === "ios-game"
              ? "bg-white object-contain"
              : "object-cover"
            }`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="relative z-10 h-full">
          <WindowChrome />
          <PlaceholderContent projectType={projectType} />
        </div>
      )}
    </div>
  );
}
