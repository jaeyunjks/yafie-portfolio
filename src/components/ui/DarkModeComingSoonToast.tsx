"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sparkles } from "lucide-react";

export default function DarkModeComingSoonToast() {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const showToast = () => {
      setIsVisible(true);

      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }

      hideTimer.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 2200);
    };

    window.addEventListener("yafie:darkmode-coming-soon", showToast);

    return () => {
      window.removeEventListener("yafie:darkmode-coming-soon", showToast);

      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      aria-modal="false"
      className="fixed inset-0 z-[80] flex items-center justify-center px-5"
    >
      <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px]" />
      <div className="relative w-full max-w-sm overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.88))] p-5 text-white shadow-[0_28px_90px_rgba(15,23,42,0.42)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(141,187,255,0.22),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(198,183,255,0.18),transparent_28%),radial-gradient(circle_at_50%_118%,rgba(255,255,255,0.08),transparent_34%)]" />
        <div className="relative flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/12 bg-white/8 text-[#cfe0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
            <Moon size={20} aria-hidden />
          </span>

          <div className="min-w-0 flex-1">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-2.5 py-1 font-mono text-[0.55rem] font-bold uppercase tracking-[0.18em] text-[#cfe0ff]/85">
              <Sparkles size={10} aria-hidden />
              Dark mode
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-white">
              Coming soon
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              The moon toggle is in place for now. I&apos;ll wire up the full dark
              mode experience next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
