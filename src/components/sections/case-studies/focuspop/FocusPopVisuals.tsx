"use client";

import { useState } from "react";

type FocusPopImageProps = {
  src?: string;
  alt: string;
  label: string;
  variant?: "hero" | "phone" | "panel" | "feedback";
};

export function FocusPopImage({
  src,
  alt,
  label,
  variant = "panel",
}: FocusPopImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src && !failed);

  if (variant === "phone") {
    return (
      <div className="mx-auto w-full max-w-[17rem] rounded-[2rem] border border-slate-200/80 bg-slate-950 p-2 shadow-[0_28px_80px_rgba(45,95,157,0.16)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.55rem] bg-[#f8fbff]">
          <span className="absolute left-1/2 top-2 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-900/72" />
          {showImage ? (
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 h-full w-full bg-white object-contain"
              onError={() => setFailed(true)}
            />
          ) : (
            <FocusPopPlaceholder label={label} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border border-white/78 bg-white/64 shadow-[0_22px_70px_rgba(45,95,157,0.1)] backdrop-blur-xl ${
        variant === "hero"
          ? "aspect-[16/10]"
          : variant === "feedback"
            ? "aspect-[2/1]"
            : "min-h-[18rem]"
      }`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={`bg-white object-contain ${
            variant === "hero" || variant === "feedback"
              ? "h-full w-full"
              : "h-full min-h-[18rem] w-full"
          }`}
          onError={() => setFailed(true)}
        />
      ) : (
        <FocusPopPlaceholder label={label} />
      )}
    </div>
  );
}

function FocusPopPlaceholder({ label }: { label: string }) {
  const bubbles = [
    "left-[16%] top-[22%] h-16 w-16 bg-[#8dbbff]/70",
    "right-[18%] top-[16%] h-12 w-12 bg-[#ffd166]/80",
    "left-[24%] bottom-[24%] h-10 w-10 bg-[#7dd3fc]/80",
    "right-[28%] bottom-[20%] h-20 w-20 bg-[#c6b7ff]/58",
  ];

  return (
    <div className="relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_52%,#eef5ff_100%)] p-5">
      {bubbles.map((bubble) => (
        <span
          key={bubble}
          className={`absolute rounded-full border border-white/70 shadow-[0_14px_34px_rgba(45,95,157,0.1)] ${bubble}`}
        />
      ))}
      <span className="relative z-10 inline-flex w-fit rounded-full border border-[#d4e3ff]/80 bg-white/74 px-3 py-1.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#2d5f9d]">
        placeholder
      </span>
      <div className="relative z-10">
        <p className="text-2xl font-black tracking-tight text-slate-950">
          {label}
        </p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
          Replace this with the FocusPop screenshot when the final asset is
          ready.
        </p>
      </div>
    </div>
  );
}

export function FocusPopSectionLabel({
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
