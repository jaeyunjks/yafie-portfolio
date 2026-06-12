"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type ScrollCueProps = {
  label: string;
  className?: string;
};

export default function ScrollCue({ label, className = "" }: ScrollCueProps) {
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(true);
  const scrollEndTimer = useRef<number | null>(null);

  const setVisibleState = useCallback((nextVisible: boolean) => {
    if (isVisibleRef.current === nextVisible) {
      return;
    }

    isVisibleRef.current = nextVisible;
    setIsVisible(nextVisible);
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      const viewportBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = viewportBottom >= documentHeight - 8;

      setVisibleState(!isNearBottom);
    };

    const handleScroll = () => {
      setVisibleState(false);

      if (scrollEndTimer.current) {
        window.clearTimeout(scrollEndTimer.current);
      }

      scrollEndTimer.current = window.setTimeout(updateVisibility, 180);
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      if (scrollEndTimer.current) {
        window.clearTimeout(scrollEndTimer.current);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [setVisibleState]);

  return (
    <div aria-hidden="true" className={`scroll-cue-wrap ${className}`}>
      <div
        className={`scroll-cue ${isVisible ? "scroll-cue--visible" : "scroll-cue--hidden"}`}
      >
        <span>{label}</span>
        <ChevronDown size={16} className="scroll-cue__icon" />
      </div>
    </div>
  );
}
