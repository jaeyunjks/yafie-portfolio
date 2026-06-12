"use client";

import { useEffect, useMemo, useState } from "react";

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
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

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
}: TypewriterHeadingProps) {
  const fullLabel = useMemo(() => lines.join(" "), [lines]);
  const [displayedLines, setDisplayedLines] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplayedLines(lines);
      setActiveLine(lines.length - 1);
      setIsComplete(true);
      return;
    }

    let timeouts: number[] = [];
    let cancelled = false;

    const clearCurrentTimeOuts = () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout as any));
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
  }, [holdDelay, lineDelay, lines, loop, restartDelay, speed, startDelay]);

  return (
    <Tag
      aria-label={fullLabel}
      className={`typewriter-heading ${className}`}
    >
      {lines.map((line, index) => (
        <span key={line} className="typewriter-heading__line" aria-hidden="true">
          <span className="typewriter-heading__typed">
            {displayedLines[index]}
            {activeLine === index ? (
              <span
                className={`typewriter-heading__cursor ${
                  isComplete ? "typewriter-heading__cursor--complete" : ""
                }`}
              />
            ) : null}
          </span>
        </span>
      ))}
    </Tag>
  );
}
