"use client";

import { useEffect, useRef, useState } from "react";

export default function useHorizontalScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const updateProgress = () => {
      const maxScroll = node.scrollWidth - node.clientWidth;

      if (maxScroll <= 0) {
        setProgress(100);
        return;
      }

      setProgress((node.scrollLeft / maxScroll) * 100);
    };

    updateProgress();
    node.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      node.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return { ref, progress };
}
