"use client";

import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type ExpandableLinkGalleryItem = {
  label: string;
  href: string;
  tag?: string;
};

type ExpandableLinkGalleryProps = {
  buttonLabel: string;
  links: ExpandableLinkGalleryItem[];
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
  helperText?: string;
  expandDirection?: "down" | "up";
};

export default function ExpandableLinkGallery({
  buttonLabel,
  links,
  className,
  triggerClassName,
  panelClassName,
  helperText,
  expandDirection = "down",
}: ExpandableLinkGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const opensUpward = expandDirection === "up";

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col">
        {opensUpward ? (
          <div
            id={panelId}
            className={cn(
              "grid transition-[grid-template-rows,opacity,margin-bottom] duration-300 ease-out",
              isOpen
                ? "mb-3 grid-rows-[1fr] opacity-100"
                : "mb-0 grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "origin-bottom transition-[transform,opacity] duration-300",
                  isOpen
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-4 scale-[0.98] opacity-0",
                )}
              >
                <div
                  className={cn(
                    "grid gap-2.5 rounded-[24px] border border-[#d7e5fb]/78 bg-white/84 p-3 shadow-[0_24px_72px_rgba(45,95,157,0.12)] backdrop-blur-xl sm:grid-cols-2",
                    panelClassName,
                  )}
                >
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex min-h-[3.5rem] items-center justify-between gap-3 rounded-[20px] border border-[#d4e3ff]/75 bg-white/82 px-4 py-3 text-left text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/68 hover:shadow-md"
                    >
                      <span className="min-w-0">
                        <span className="block truncate">{link.label}</span>
                        {link.tag ? (
                          <span className="mt-1 inline-flex rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/88 px-2 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/78">
                            {link.tag}
                          </span>
                        ) : null}
                      </span>
                      <ExternalLink
                        size={16}
                        strokeWidth={2.3}
                        aria-hidden
                        className="shrink-0 text-[#2d5f9d] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((current) => !current)}
          className={cn(
            "group inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-[20px] border px-4 py-3 text-left shadow-[0_16px_40px_rgba(45,95,157,0.14)] transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8dbbff]/75",
            isOpen
              ? "border-[#8dbbff]/72 bg-[linear-gradient(135deg,rgba(244,249,255,0.98),rgba(229,240,255,0.95))] text-[#214b7f] shadow-[0_18px_44px_rgba(45,95,157,0.18)]"
              : "border-[#d4e3ff]/82 bg-[linear-gradient(135deg,rgba(45,95,157,0.96),rgba(68,127,201,0.94))] text-white hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(45,95,157,0.22)] active:translate-y-0",
            triggerClassName,
          )}
        >
          <span className="flex min-w-0 items-center gap-3">
            <span
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-[background-color,border-color,transform] duration-300",
                isOpen
                  ? "border-[#8dbbff]/65 bg-[#e9f3ff] text-[#2d5f9d]"
                  : "border-white/25 bg-white/12 text-white group-hover:-translate-y-0.5 group-hover:bg-white/16",
              )}
            >
              <ExternalLink size={17} strokeWidth={2.25} aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-extrabold">
                {buttonLabel}
              </span>
              <span
                className={cn(
                  "mt-0.5 block text-xs font-semibold",
                  isOpen ? "text-slate-500" : "text-blue-100/90",
                )}
              >
                {helperText ?? "Click to view links"}
              </span>
            </span>
          </span>
          <span
            className={cn(
              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300",
              isOpen
                ? "border-[#8dbbff]/65 bg-[#e9f3ff] text-[#2d5f9d]"
                : "border-white/22 bg-white/10 text-white group-hover:-translate-y-0.5 group-hover:bg-white/14",
            )}
          >
            <ChevronDown
              size={16}
              strokeWidth={2.35}
              aria-hidden
              className={cn(
                "transition-transform duration-300",
                isOpen ? "rotate-180" : "",
              )}
            />
          </span>
        </button>

        {!opensUpward ? (
          <div
            id={panelId}
            className={cn(
              "grid transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out",
              isOpen
                ? "mt-3 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "origin-top transition-[transform,opacity] duration-300",
                  isOpen
                    ? "translate-y-0 scale-100 opacity-100"
                    : "-translate-y-2 scale-[0.98] opacity-0",
                )}
              >
                <div
                  className={cn(
                    "grid gap-2.5 sm:grid-cols-2",
                    panelClassName,
                  )}
                >
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex min-h-[3.5rem] items-center justify-between gap-3 rounded-[20px] border border-[#d4e3ff]/75 bg-white/82 px-4 py-3 text-left text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#8dbbff]/68 hover:shadow-md"
                    >
                      <span className="min-w-0">
                        <span className="block truncate">{link.label}</span>
                        {link.tag ? (
                          <span className="mt-1 inline-flex rounded-full border border-[#d4e3ff]/70 bg-[#f8fbff]/88 px-2 py-0.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#2d5f9d]/78">
                            {link.tag}
                          </span>
                        ) : null}
                      </span>
                      <ExternalLink
                        size={16}
                        strokeWidth={2.3}
                        aria-hidden
                        className="shrink-0 text-[#2d5f9d] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
