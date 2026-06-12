"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Eye, EyeOff, List, X } from "lucide-react";
import { usePathname } from "next/navigation";

type SectionLink = {
  id: string;
  label: string;
};

const sectionLinksByPath: Record<string, SectionLink[]> = {
  "/": [
    { id: "top", label: "Top" },
    { id: "home-profile", label: "Profile" },
    { id: "home-focus", label: "Focus" },
    { id: "home-selected-work", label: "Selected Work" },
    { id: "home-proof", label: "Proof" },
    { id: "home-next", label: "Next Step" },
  ],
  "/about": [
    { id: "top", label: "Top" },
    { id: "about-story", label: "Profile" },
    { id: "about-tech-stack", label: "Technical Stack" },
    { id: "about-capability-map", label: "Capability Map" },
    { id: "about-working-style", label: "Working Style" },
    { id: "about-beyond-code", label: "Beyond Code" },
  ],
  "/work": [
    { id: "top", label: "Top" },
    { id: "experience-map", label: "Experience Map" },
    { id: "software-experience", label: "Software" },
    { id: "testing-quality", label: "Testing" },
    { id: "volunteer-experience", label: "Volunteer" },
    { id: "supporting-experience", label: "Supporting Work" },
    { id: "collaboration-signal", label: "Collaboration" },
  ],
  "/projects": [
    { id: "top", label: "Top" },
    { id: "project-map", label: "Project Map" },
    { id: "featured-projects", label: "Featured" },
    { id: "engineering-depth", label: "Engineering Depth" },
    { id: "projects-next", label: "Next Step" },
  ],
  "/contact": [
    { id: "top", label: "Top" },
    { id: "contact-methods", label: "Methods" },
    { id: "contact-form", label: "Form" },
    { id: "availability-signal", label: "Availability" },
    { id: "contact-next", label: "Next Step" },
  ],
  "/projects/sds-modernisation": [
    { id: "top", label: "Top" },
    { id: "project-origin", label: "Origin" },
    { id: "project-overview", label: "Overview" },
    { id: "problem-space", label: "Problem" },
    { id: "role-contribution", label: "Role" },
    { id: "project-workflow", label: "Workflow" },
    { id: "feature-showcase", label: "Gallery" },
    { id: "testing-quality", label: "Testing" },
    { id: "outcome-reflection", label: "Outcome" },
  ],
  "/projects/freshbasket-aws": [
    { id: "top", label: "Top" },
    { id: "project-context", label: "Context" },
    { id: "architecture", label: "Architecture" },
    { id: "deployment-flow", label: "Deployment" },
    { id: "database-integration", label: "Database" },
    { id: "security-networking", label: "Security" },
    { id: "evidence-gallery", label: "Evidence" },
    { id: "reflection", label: "Reflection" },
  ],
  "/projects/lumora": [
    { id: "top", label: "Top" },
    { id: "project-summary", label: "Summary" },
    { id: "problem-audience", label: "Problem" },
    { id: "user-persona", label: "Persona" },
    { id: "design-process", label: "Design" },
    { id: "app-flow", label: "App Flow" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "outcome-reflection", label: "Outcome" },
  ],
  "/projects/focuspop": [
    { id: "top", label: "Top" },
    { id: "project-overview", label: "Overview" },
    { id: "gameplay-flow", label: "Gameplay" },
    { id: "game-modes", label: "Modes" },
    { id: "technical-build", label: "Build" },
    { id: "testing-quality", label: "Testing" },
    { id: "feedback-signal", label: "Feedback" },
    { id: "reflection", label: "Reflection" },
  ],
};

export default function FloatingSectionNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const links = useMemo(
    () => sectionLinksByPath[normalizedPath] ?? [],
    [normalizedPath],
  );

  useEffect(() => {
    setIsOpen(false);
    setIsHidden(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (links.length === 0) {
    return null;
  }

  const jumpToSection = (id: string) => {
    setIsOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={navRef} className="floating-section-nav">
      {isHidden ? (
        <button
          type="button"
          className="floating-section-nav__restore"
          aria-label="Show section navigation"
          onClick={() => setIsHidden(false)}
        >
          <Eye size={16} aria-hidden />
          <span>show.toc</span>
        </button>
      ) : (
        <>
          <div
            className={`floating-section-nav__menu ${
              isOpen ? "floating-section-nav__menu--open" : ""
            }`}
          >
            {links.map((link, index) => (
              <button
                key={link.id}
                type="button"
                className="floating-section-nav__item"
                style={{ "--item-index": index } as CSSProperties}
                onClick={() => jumpToSection(link.id)}
              >
                {String(index + 1).padStart(2, "0")} // {link.label}
              </button>
            ))}
          <button
            type="button"
            className="floating-section-nav__item floating-section-nav__item--muted"
            style={{ "--item-index": links.length } as CSSProperties}
            onClick={() => {
              setIsOpen(false);
              setIsHidden(true);
            }}
          >
            <EyeOff size={13} aria-hidden />
            hide.toc
          </button>
          </div>

          <button
            type="button"
            className={`floating-section-nav__trigger ${
              isOpen ? "floating-section-nav__trigger--open" : ""
            }`}
            aria-label={isOpen ? "Close section navigation" : "Open section navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={18} aria-hidden /> : <List size={18} aria-hidden />}
            <span>00 // jump.sections</span>
          </button>
        </>
      )}
    </div>
  );
}
