"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const scrollEndTimer = useRef<number | null>(null);
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const isHomePage = normalizedPath === "/";

  const setVisibleState = useCallback((nextVisible: boolean) => {
    if (isVisibleRef.current === nextVisible) {
      return;
    }

    isVisibleRef.current = nextVisible;
    setIsVisible(nextVisible);
  }, []);

  useEffect(() => {
    if (isHomePage) {
      return;
    }

    const updateVisibility = () => {
      const scrollTop = window.scrollY;
      const viewportBottom = scrollTop + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAwayFromTop = scrollTop > 420;
      const isNearBottom = viewportBottom >= documentHeight - 8;

      setVisibleState(isAwayFromTop && !isNearBottom);
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
  }, [isHomePage, setVisibleState]);

  if (isHomePage) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top ${isVisible ? "back-to-top--visible" : "back-to-top--hidden"}`}
    >
      <ArrowUp size={16} aria-hidden />
      <span className="hidden sm:inline">Top</span>
    </button>
  );
}
