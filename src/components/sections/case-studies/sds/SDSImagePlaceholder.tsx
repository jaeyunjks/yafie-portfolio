"use client";

import { useState } from "react";
import type { SDSImageVariant } from "@/data/caseStudies/sdsModernisation";

type SDSImagePlaceholderProps = {
  title: string;
  imageSrc?: string;
  variant?: SDSImageVariant;
  featured?: boolean;
  imageFit?: "cover" | "contain";
};

function WindowChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/65 bg-white/62 px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff8f8f]/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/75" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#78d6a2]/75" />
      <span className="ml-auto h-2 w-28 rounded-full bg-white/80" />
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[0.78fr_1.22fr]">
      <div className="rounded-[15px] border border-white/65 bg-white/58 p-3">
        <span className="block h-3 w-24 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2].map((item) => (
            <span key={item} className="h-9 rounded-[11px] bg-white/78" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["pending", "review", "ready"].map((lane) => (
          <div key={lane} className="rounded-[15px] border border-white/65 bg-white/52 p-2">
            <span className="mb-2 block h-2.5 w-14 rounded-full bg-[#8dbbff]/58" />
            <div className="grid gap-2">
              {[0, 1, 2].map((card) => (
                <span
                  key={card}
                  className="h-10 rounded-[10px] bg-white/82 shadow-[0_8px_18px_rgba(45,95,157,0.06)]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[15px] border border-white/65 bg-white/60 p-3">
        <span className="block h-3 w-24 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2, 3].map((field) => (
            <span key={field} className="h-9 rounded-[10px] bg-white/82" />
          ))}
        </div>
      </div>
      <div className="rounded-[15px] border border-white/65 bg-[#f7f3ff]/58 p-3">
        <span className="block h-3 w-20 rounded-full bg-[#67549e]/26" />
        <span className="mt-4 block h-20 rounded-[13px] bg-white/78" />
        <span className="mt-3 block h-9 rounded-[10px] bg-[#8dbbff]/28" />
      </div>
    </div>
  );
}

function StatusMockup() {
  return (
    <div className="h-full p-4">
      <div className="rounded-[15px] border border-white/65 bg-white/60 p-3">
        <span className="block h-3 w-28 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="grid grid-cols-[1fr_0.52fr_0.4fr] gap-2 rounded-[11px] bg-white/82 p-2.5">
              <span className="h-2.5 rounded-full bg-slate-300/70" />
              <span className="h-2.5 rounded-full bg-[#8dbbff]/44" />
              <span className="h-2.5 rounded-full bg-[#c6b7ff]/48" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScheduleMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-[15px] border border-white/65 bg-white/60 p-3">
        <span className="block h-3 w-20 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="h-12 rounded-[11px] bg-white/82" />
          ))}
        </div>
      </div>
      <div className="rounded-[15px] border border-white/65 bg-white/54 p-3">
        <span className="block h-3 w-24 rounded-full bg-[#8dbbff]/48" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2, 3].map((event) => (
            <div key={event} className="flex gap-2 rounded-[11px] bg-white/80 p-2">
              <span className="h-8 w-8 rounded-full bg-[#c6b7ff]/42" />
              <span className="mt-2 h-2.5 flex-1 rounded-full bg-slate-300/65" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailMockup() {
  return (
    <div className="grid h-full gap-3 p-4 md:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[15px] border border-white/65 bg-white/60 p-4">
        <span className="block h-5 w-40 rounded-full bg-[#2d5f9d]/28" />
        <span className="mt-4 block h-16 rounded-[14px] bg-[#eef5ff]/90" />
        <div className="mt-4 grid gap-2">
          <span className="h-8 rounded-[10px] bg-white/82" />
          <span className="h-8 rounded-[10px] bg-white/82" />
        </div>
      </div>
      <div className="rounded-[15px] border border-white/65 bg-[#f7f3ff]/58 p-3">
        <span className="block h-3 w-20 rounded-full bg-[#67549e]/26" />
        <span className="mt-4 block h-14 rounded-[12px] bg-white/78" />
        <span className="mt-3 block h-10 rounded-full bg-[#8dbbff]/30" />
      </div>
    </div>
  );
}

function RequestMockup() {
  return (
    <div className="grid h-full place-items-center p-4">
      <div className="w-full max-w-sm rounded-[18px] border border-white/70 bg-white/64 p-4 shadow-[0_18px_44px_rgba(45,95,157,0.12)]">
        <span className="block h-4 w-32 rounded-full bg-[#2d5f9d]/28" />
        <div className="mt-4 grid gap-2">
          {[0, 1, 2].map((field) => (
            <span key={field} className="h-10 rounded-[11px] bg-white/84" />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-[11px] bg-[#eef5ff]/90 p-2">
          <span className="h-5 w-5 rounded-full bg-[#8dbbff]/55" />
          <span className="h-2.5 flex-1 rounded-full bg-[#2d5f9d]/24" />
        </div>
      </div>
    </div>
  );
}

function PlaceholderContent({ variant }: { variant: SDSImageVariant }) {
  if (variant === "form") return <FormMockup />;
  if (variant === "status") return <StatusMockup />;
  if (variant === "schedule") return <ScheduleMockup />;
  if (variant === "detail") return <DetailMockup />;
  if (variant === "request") return <RequestMockup />;
  return <DashboardMockup />;
}

export default function SDSImagePlaceholder({
  title,
  imageSrc,
  variant = "dashboard",
  featured = false,
  imageFit = "cover",
}: SDSImagePlaceholderProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(imageSrc && !imageFailed);

  return (
    <div
      className={`group relative aspect-video overflow-hidden rounded-[22px] border border-white/75 bg-gradient-to-br from-[#8dbbff]/34 via-[#f8fbff]/84 to-[#c6b7ff]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_22px_70px_rgba(45,95,157,0.13)] ${
        featured ? "min-h-[18rem] lg:min-h-[24rem]" : "min-h-[14rem]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.72),transparent_30%),radial-gradient(circle_at_8%_92%,rgba(141,187,255,0.18),transparent_34%)]" />
      {showImage ? (
        <img
          src={imageSrc}
          alt={`${title} preview`}
          className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.015] ${
            imageFit === "contain"
              ? "object-contain p-6 sm:p-8"
              : "object-cover"
          }`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="relative z-10 h-full">
          <WindowChrome />
          <PlaceholderContent variant={variant} />
        </div>
      )}
      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between gap-3 rounded-[14px] border border-white/72 bg-white/74 px-3 py-2 backdrop-blur-md">
        <span className="truncate text-sm font-extrabold text-slate-900">
          {title}
        </span>
        <span className="rounded-full bg-[#eef5ff]/92 px-2.5 py-1 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
          SDS
        </span>
      </div>
    </div>
  );
}
