"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

type TypewriterHeadingProps = {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
  speed?: number;
  lineDelay?: number;
  startDelay?: number;
  holdDelay?: number;
  restartDelay?: number;
  loop?: boolean;
  highlights?: {
    lineIndex: number;
    text: string;
    className: string;
  }[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Subscribe to the OS "reduce motion" setting (React's API for external state). */
function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerReducedMotion = () => false;

export default function TypewriterHeading({
  lines,
  as: Tag = "h1",
  className = "",
  speed = 40,
  lineDelay = 260,
  startDelay = 280,
  holdDelay = 1400,
  restartDelay = 240,
  loop = false,
  highlights = [],
}: TypewriterHeadingProps) {
  const fullLabel = useMemo(() => lines.join(" "), [lines]);
  const [displayedLines, setDisplayedLines] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  // With reduced motion, show the finished heading: derived, not set in an effect.
  const shownLines = reducedMotion ? lines : displayedLines;
  const shownActiveLine = reducedMotion ? lines.length - 1 : activeLine;
  const shownComplete = reducedMotion || isComplete;

  const renderHighlightedLine = (line: string, lineIndex: number) => {
    const lineHighlights = highlights.filter((highlight) => highlight.lineIndex === lineIndex);

    if (lineHighlights.length === 0) {
      return line;
    }

    const parts: ReactNode[] = [];
    let cursor = 0;

    while (cursor < line.length) {
      const nextMatch = lineHighlights
        .map((highlight) => ({
          highlight,
          start: line.indexOf(highlight.text, cursor),
        }))
        .filter((candidate) => candidate.start !== -1)
        .sort((a, b) => a.start - b.start)[0];

      if (!nextMatch) {
        parts.push(line.slice(cursor));
        break;
      }

      if (nextMatch.start > cursor) {
        parts.push(line.slice(cursor, nextMatch.start));
      }

      const matchEnd = nextMatch.start + nextMatch.highlight.text.length;
      parts.push(
        <span key={`${lineIndex}-${nextMatch.start}`} className={nextMatch.highlight.className}>
          {line.slice(nextMatch.start, matchEnd)}
        </span>,
      );
      cursor = matchEnd;
    }

    return parts;
  };

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let timeouts: number[] = [];
    let cancelled = false;

    const clearCurrentTimeOuts = () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      timeouts = [];
    };

    // Resetting the whole cycle before retyping avoids leaving partial words
    // on screen when the heading loops.
    const scheduleCycle = () => {
      if (cancelled) {
        return;
      }

      clearCurrentTimeOuts();
      setDisplayedLines(lines.map(() => ""));
      setActiveLine(0);
      setIsComplete(false);

      let elapsed = startDelay;

      lines.forEach((line, lineIndex) => {
        Array.from(line).forEach((_, charIndex) => {
          timeouts.push(
            window.setTimeout(() => {
              if (cancelled) {
                return;
              }

              setActiveLine(lineIndex);
              setDisplayedLines((current) =>
                current.map((value, index) =>
                  index === lineIndex ? line.slice(0, charIndex + 1) : value,
                ),
              );
            }, elapsed),
          );
          elapsed += speed;
        });

        if (lineIndex < lines.length - 1) {
          elapsed += lineDelay;
        }
      });

      const finishAt = elapsed + 80;

      timeouts.push(
        window.setTimeout(() => {
          if (cancelled) {
            return;
          }

          setDisplayedLines(lines);
          setActiveLine(lines.length - 1);
          setIsComplete(true);
        }, finishAt),
      );

      if (loop) {
        timeouts.push(
          window.setTimeout(() => {
            if (cancelled) {
              return;
            }

            scheduleCycle();
          }, finishAt + holdDelay + restartDelay),
        );
      }
    };

    scheduleCycle();
    return () => {
      cancelled = true;
      clearCurrentTimeOuts();
    };
  }, [holdDelay, lineDelay, lines, loop, reducedMotion, restartDelay, speed, startDelay]);

  return (
    <Tag
      aria-label={fullLabel}
      className={`typewriter-heading ${className}`}
    >
      {lines.map((line, index) => (
        <span key={line} className="typewriter-heading__line" aria-hidden="true">
          <span className="typewriter-heading__typed">
            {renderHighlightedLine(shownLines[index], index)}
            {shownActiveLine === index ? (
              <span
                className={`typewriter-heading__cursor ${
                  shownComplete ? "typewriter-heading__cursor--complete" : ""
                }`}
              />
            ) : null}
          </span>
        </span>
      ))}
    </Tag>
  );
}
