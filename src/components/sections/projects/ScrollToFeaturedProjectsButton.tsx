"use client";

import { ArrowRight } from "lucide-react";

type ScrollToFeaturedProjectsButtonProps = {
  targetId?: string;
  label?: string;
};

export default function ScrollToFeaturedProjectsButton({
  targetId = "featured-projects",
  label = "View Featured Projects",
}: ScrollToFeaturedProjectsButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        const target = document.getElementById(targetId);

        if (!target) {
          return;
        }

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      className="group inline-flex items-center gap-2 rounded-full bg-[#2d5f9d] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-[#265589] hover:shadow-xl"
    >
      {label}
      <ArrowRight
        size={17}
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}
