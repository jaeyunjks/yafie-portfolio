"use client";

import { useState } from "react";
import type { SDSImageVariant } from "@/data/caseStudies/sdsModernisation";

type SDSBrowserMockupProps = {
  title: string;
  imageSrc?: string;
  alt?: string;
  badge?: string;
  variant?: SDSImageVariant;
  imageFit?: "cover" | "contain";
  imageScale?: string;
  featured?: boolean;
  showFooter?: boolean;
};

function BrowserFallback({
  title,
  variant,
}: {
  title: string;
  variant: SDSImageVariant;
}) {
  const blocks =
    variant === "form"
      ? ["Project details", "Requirements", "Contact", "Attachments"]
      : variant === "schedule"
        ? ["Release date", "Allocation", "Activity", "Review"]
        : variant === "request"
          ? ["Team Lead", "Student ID", "Tutor check", "Submit"]
          : ["Submitted", "Review", "Status", "Action"];

  return (
    <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.76),transparent_30%),linear-gradient(135deg,rgba(248,251,255,0.96),rgba(226,238,255,0.76))] p-4">
      <div className="w-full max-w-md rounded-[18px] border border-white/72 bg-white/70 p-4 shadow-[0_18px_48px_rgba(45,95,157,0.1)]">
        <p className="font-mono text-[0.56rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]/70">
          {title}
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {blocks.map((block) => (
            <span
              key={block}
              className="rounded-[12px] border border-[#d4e3ff]/60 bg-[#f8fbff]/82 px-3 py-2 text-xs font-bold text-slate-500"
            >
              {block}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SDSBrowserMockup({
  title,
  imageSrc,
  alt,
  badge = "Workflow System",
  variant = "dashboard",
  imageFit = "contain",
  imageScale = "scale-[1.03]",
  featured = false,
  showFooter = true,
}: SDSBrowserMockupProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(imageSrc && !imageFailed);

  return (
    <div
      className={`group overflow-hidden rounded-[24px] border border-[#d4e3ff]/68 bg-[#eef5ff]/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_22px_70px_rgba(45,95,157,0.14)] ${
        featured ? "rounded-[26px]" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/72 bg-white/74 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff8f8f]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/75" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#78d6a2]/75" />
        <span className="ml-2 hidden h-5 w-32 rounded-full border border-[#d4e3ff]/62 bg-[#f8fbff]/82 sm:block" />
        <span className="ml-auto hidden h-2 w-24 rounded-full bg-[#d4e3ff]/72 sm:block" />
      </div>

      <div className="relative aspect-video overflow-hidden bg-[radial-gradient(circle_at_78%_14%,rgba(255,255,255,0.8),transparent_30%),linear-gradient(135deg,rgba(248,251,255,0.96),rgba(226,238,255,0.76))]">
        {showImage ? (
          <img
            src={imageSrc}
            alt={alt ?? `${title} preview`}
            className={`absolute inset-0 h-full w-full object-center drop-shadow-[0_18px_36px_rgba(45,95,157,0.2)] ${imageScale} ${
              imageFit === "cover" ? "object-cover" : "object-contain p-2 sm:p-3"
            }`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <BrowserFallback title={title} variant={variant} />
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/64" />
      </div>

      {showFooter ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/72 bg-white/76 px-4 py-3 backdrop-blur-md">
          <span className="truncate text-sm font-extrabold text-slate-900">
            {title}
          </span>
          <span className="rounded-full bg-[#eef5ff]/92 px-2.5 py-1 font-mono text-[0.52rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/72">
            {badge}
          </span>
        </div>
      ) : null}
    </div>
  );
}
