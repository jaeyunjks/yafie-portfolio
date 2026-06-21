"use client";

import { useState } from "react";
import { Cloud } from "lucide-react";
import Image from "next/image";

type EvidenceAspectRatio = "16/9" | "4/3" | "3/2" | "wide" | "console";
type EvidenceObjectFit = "contain" | "cover";

type EvidenceImageFrameProps = {
  src?: string;
  alt: string;
  label: string;
  caption?: string;
  aspectRatio?: EvidenceAspectRatio;
  objectFit?: EvidenceObjectFit;
  objectPosition?: string;
  className?: string;
  showHeader?: boolean;
};

const aspectClass: Record<EvidenceAspectRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  wide: "aspect-[21/9]",
  console: "aspect-[4/3] min-h-[220px] sm:min-h-[300px] md:min-h-[340px]",
};

export function EvidenceImageFrame({
  src,
  alt,
  label,
  caption,
  aspectRatio = "16/9",
  objectFit = "contain",
  objectPosition = "center",
  className = "",
  showHeader = true,
}: EvidenceImageFrameProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src && !failed);
  const imageSrc = src ?? "";
  const filename = src?.split("/").pop() ?? "freshbasket-image.png";

  return (
    <figure
      className={`overflow-hidden rounded-[24px] border border-white/75 bg-white/66 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl ${className}`}
    >
      {showHeader ? (
        <div className="flex items-center gap-1.5 border-b border-[#d4e3ff]/58 bg-white/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#8dbbff]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#c6b7ff]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300/75" />
          <span className="ml-auto truncate font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-slate-400">
            {label}
          </span>
        </div>
      ) : null}
      <div className={`relative bg-[#f8fbff] ${aspectClass[aspectRatio]}`}>
        {showImage ? (
          <a href={imageSrc} target="_blank" rel="noreferrer" aria-label={`Open larger image: ${alt}`} className="absolute inset-0 block cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8dbbff]/80">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 88vw, (max-width: 1280px) 50vw, 720px"
              className={`bg-white ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
              style={{ objectPosition }}
              onError={() => setFailed(true)}
            />
          </a>
        ) : (
          <FreshBasketPlaceholder title={label} filename={filename} />
        )}
      </div>
      {caption ? (
        <figcaption className="border-t border-[#d4e3ff]/52 bg-white/72 px-4 py-3 text-sm leading-6 text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export const FreshBasketImageFrame = EvidenceImageFrame;

function FreshBasketPlaceholder({
  title,
  filename,
}: {
  title: string;
  filename: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_84%_16%,rgba(141,187,255,0.22),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fbff_58%,#f7f3ff_100%)] p-5">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4e3ff]/75 bg-white/75 text-[#2d5f9d] shadow-sm">
        <Cloud size={19} strokeWidth={2.3} aria-hidden />
      </span>
      <div>
        <p className="text-xl font-black tracking-tight text-slate-950">
          {title}
        </p>
        <p className="mt-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]/70">
          missing: {filename}
        </p>
      </div>
    </div>
  );
}

export function FreshBasketSectionLabel({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#2d5f9d]/72">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
