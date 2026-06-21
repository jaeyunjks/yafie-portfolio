"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, Eye, EyeOff, List, X } from "lucide-react";
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
    { id: "scaling-operations", label: "Operations" },
    { id: "evidence-gallery", label: "Evidence" },
    { id: "troubleshooting", label: "Problems" },
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
    { id: "greatest-challenge", label: "Challenge" },
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

const MOBILE_SECTION_NAV_QUERY = "(max-width: 960px)";
const MOBILE_SECTION_NAV_HINT_KEY = "floating-section-nav-mobile-hint-seen";
const SHOULD_BYPASS_HINT_STORAGE = process.env.NODE_ENV !== "production";
const HOME_MOBILE_ANCHOR_ID = "home-jump-sections-anchor";

export default function FloatingSectionNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileDrawer, setIsMobileDrawer] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [homeAnchor, setHomeAnchor] = useState<HTMLElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const isHomePage = normalizedPath === "/";
  const links = useMemo(
    () => sectionLinksByPath[normalizedPath] ?? [],
    [normalizedPath],
  );

  useEffect(() => {
    setIsOpen(false);
    setIsHidden(false);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_SECTION_NAV_QUERY);
    const updateIsMobileDrawer = () => {
      setIsMobileDrawer(mediaQuery.matches);
    };

    updateIsMobileDrawer();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateIsMobileDrawer);
      return () => {
        mediaQuery.removeEventListener("change", updateIsMobileDrawer);
      };
    }

    mediaQuery.addListener(updateIsMobileDrawer);

    return () => {
      mediaQuery.removeListener(updateIsMobileDrawer);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsHintVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isHomePage || !isMobileDrawer) {
      setHomeAnchor(null);
      return;
    }

    const resolveAnchor = () => {
      setHomeAnchor(document.getElementById(HOME_MOBILE_ANCHOR_ID));
    };

    resolveAnchor();
    const animationFrame = window.requestAnimationFrame(resolveAnchor);
    const fallbackTimeout = window.setTimeout(resolveAnchor, 120);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallbackTimeout);
    };
  }, [isHomePage, isMobileDrawer, pathname]);

  useEffect(() => {
    if (!isMobileDrawer || !isHomePage) {
      setIsHintVisible(false);
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      reducedMotionQuery.matches ||
      (!SHOULD_BYPASS_HINT_STORAGE &&
        sessionStorage.getItem(MOBILE_SECTION_NAV_HINT_KEY) === "1")
    ) {
      return;
    }

    if (!SHOULD_BYPASS_HINT_STORAGE) {
      sessionStorage.setItem(MOBILE_SECTION_NAV_HINT_KEY, "1");
    }

    const showHintTimeout = window.setTimeout(() => {
      setIsHintVisible(true);
    }, 800);

    const hideHintTimeout = window.setTimeout(() => {
      setIsHintVisible(false);
    }, 800 + 3000);

    return () => {
      window.clearTimeout(showHintTimeout);
      window.clearTimeout(hideHintTimeout);
    };
  }, [isHomePage, isMobileDrawer]);

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

  const isHomeMobileAnchored = isHomePage && isMobileDrawer && homeAnchor !== null;
  const isMobileDrawerVisible = isMobileDrawer && (isOpen || isHintVisible);

  const jumpToSection = (id: string) => {
    setIsOpen(false);
    setIsHintVisible(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const homeMobileNavStateClass =
    isHintVisible && !isOpen ? "floating-section-nav--mobile-hint" : "";
  const floatingNavStateClass = `${isHintVisible && !isOpen ? "floating-section-nav--mobile-hint" : ""} ${
    isMobileDrawerVisible ? "floating-section-nav--mobile-visible" : ""
  } ${
    isMobileDrawer && !isOpen && !isHintVisible
      ? "floating-section-nav--mobile-closed"
      : ""
  }`;

  const navUi = (
    <div
      ref={navRef}
      className={`floating-section-nav ${
        isHomeMobileAnchored
          ? `home-mobile-sections-trigger ${homeMobileNavStateClass} ${isOpen ? "floating-section-nav--home-anchor-open" : ""}`
          : `${isMobileDrawer ? "floating-section-nav--mobile" : ""} ${floatingNavStateClass}`
      } ${isHomeMobileAnchored ? "floating-section-nav--home-anchor" : ""}`}
    >
      {!isMobileDrawer && isHidden ? (
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
            {!isMobileDrawer ? (
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
            ) : null}
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
            <span className="floating-section-nav__trigger-icon" aria-hidden>
              {isOpen ? <X size={18} aria-hidden /> : <List size={18} aria-hidden />}
            </span>
            <span className="floating-section-nav__trigger-label">
              00 // jump.sections
            </span>
            <span className="floating-section-nav__trigger-mobile-label">
              Sections
            </span>
            <span className="floating-section-nav__trigger-tab" aria-hidden>
              <ChevronLeft size={14} />
            </span>
          </button>
        </>
      )}
    </div>
  );

  if (isHomePage && isMobileDrawer && !homeAnchor) {
    return null;
  }

  if (isHomeMobileAnchored && homeAnchor) {
    return createPortal(navUi, homeAnchor);
  }

  return navUi;
}
