"use client";

import { useState } from "react";
import {
  BookOpen,
  FileText,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LumoraImageProps = {
  src?: string;
  alt: string;
  label: string;
  variant?: "phone" | "panel";
};

export function LumoraImage({
  src,
  alt,
  label,
  variant = "panel",
}: LumoraImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src && !failed);

  if (variant === "phone") {
    return (
      <div className="mx-auto w-full max-w-[17rem] rounded-[2.1rem] border border-slate-200/80 bg-slate-950 p-2 shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
        <div className="relative min-h-[31rem] overflow-hidden rounded-[1.65rem] bg-[#f8fbff]">
          <span className="absolute left-1/2 top-2 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-900/72" />
          {showImage ? (
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setFailed(true)}
            />
          ) : (
            <LumoraPhonePlaceholder label={label} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-[24px] border border-white/78 bg-white/62 shadow-[0_20px_64px_rgba(45,95,157,0.1)] backdrop-blur-xl">
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-full min-h-[18rem] w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex min-h-[18rem] flex-col justify-between bg-[radial-gradient(circle_at_80%_12%,rgba(141,187,255,0.2),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fbff_54%,#f7f3ff_100%)] p-5">
          <span className="inline-flex w-fit rounded-full border border-[#d4e3ff]/80 bg-white/74 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]">
            placeholder
          </span>
          <div>
            <p className="text-2xl font-black tracking-tight text-slate-950">
              {label}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
              Replace this with the final Lumora visual asset when available.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function LumoraPhonePlaceholder({ label }: { label: string }) {
  const previewRows: [LucideIcon, string][] = [
    [BookOpen, "Workspace notes"],
    [FileText, "Imported PDFs"],
    [MessageCircle, "AI study chat"],
  ];

  return (
    <div className="flex h-full min-h-[31rem] flex-col bg-[linear-gradient(180deg,#f8fbff_0%,#f7f3ff_54%,#ffffff_100%)] p-5 pt-9">
      <div className="flex items-center justify-between">
        <span className="text-sm font-black text-slate-950">Lumora</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#2d5f9d]">
          <Sparkles size={15} strokeWidth={2.4} aria-hidden />
        </span>
      </div>
      <div className="mt-7 rounded-[24px] border border-[#d4e3ff]/70 bg-white p-4 shadow-[0_14px_36px_rgba(45,95,157,0.08)]">
        <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#2d5f9d]">
          study.workspace
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
          {label}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Notes, files, images, summaries, and study chat in one calm mobile
          workspace.
        </p>
      </div>
      <div className="mt-4 grid gap-3">
        {previewRows.map(([Icon, text]) => (
          <div
            key={text}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/82 p-3"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#2d5f9d]">
              <Icon size={16} strokeWidth={2.3} aria-hidden />
            </span>
            <span className="text-sm font-bold text-slate-700">
              {text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-[22px] border border-[#d4e3ff]/70 bg-[#f8fbff] p-4">
        <p className="text-sm font-extrabold text-slate-900">
          AI summary ready
        </p>
        <div className="mt-3 grid gap-2">
          <span className="h-2.5 rounded-full bg-[#8dbbff]/55" />
          <span className="h-2.5 w-4/5 rounded-full bg-[#d4e3ff]" />
          <span className="h-2.5 w-2/3 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export function LumoraSectionLabel({
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
      <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
