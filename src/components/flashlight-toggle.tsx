"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme-provider";

type Direction = "tolight" | "todark";

export function FlashlightToggle() {
  const { theme, toggle } = useTheme();
  const [playing, setPlaying] = useState<Direction | null>(null);
  const [run, setRun] = useState(0);

  const toggleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toggleTimer.current) clearTimeout(toggleTimer.current);
      if (clearTimer.current) clearTimeout(clearTimer.current);
    };
  }, []);

  const handleClick = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      toggle();
      return;
    }

    const dir: Direction = theme === "dark" ? "tolight" : "todark";

    if (toggleTimer.current) clearTimeout(toggleTimer.current);
    if (clearTimer.current) clearTimeout(clearTimer.current);

    setRun((r) => r + 1);
    setPlaying(dir);

    // Flip the theme mid-animation, as the beam switches on / off.
    toggleTimer.current = setTimeout(() => toggle(), 320);

    const total = dir === "tolight" ? 1200 : 750;
    clearTimer.current = setTimeout(() => setPlaying(null), total);
  };

  const beamOn = theme === "light";

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="rounded-md p-1.5 text-text-muted transition-colors hover:text-text"
      >
        {/* Static flashlight — hidden while the pop-out animation plays so
            there aren't two flashlights on screen at once. */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={playing ? "opacity-0" : ""}
        >
          <g transform="translate(11 13) rotate(135)">
            <rect x="-13" y="-3" width="9" height="6" rx="1.5" />
            <path d="M-4 -3 L0 -4.5 L0 4.5 L-4 3 Z" />
            {beamOn && (
              <g className="text-accent">
                <path d="M1.5 -2.5 L5 -4.5" />
                <path d="M1.5 0 L6 0" />
                <path d="M1.5 2.5 L5 4.5" />
              </g>
            )}
          </g>
        </svg>
      </button>

      {playing && (
        <div
          aria-hidden="true"
          data-dir={playing}
          className="flashlight-panel pointer-events-none absolute right-0 top-full z-10 mt-1"
        >
          <svg
            key={run}
            width="84"
            height="84"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            {/* Whole flashlight tilted so the beam faces down-left, onto the page */}
            <g transform="translate(56 42) rotate(135)">
              {/* Beam of light — switches on by itself, fanning out from the lens */}
              <path
                className="beam-glow"
                d="M0 -13 L40 -30 L40 30 L0 13 Z"
                fill="var(--accent)"
              />
              <g
                className="beam-rays text-accent"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M2 -9 L36 -24" />
                <path d="M2 0 L38 0" />
                <path d="M2 9 L36 24" />
              </g>

              {/* Flashlight body — barrel + flared head, lens at the origin */}
              <g
                className="flashlight-body text-text"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="-42" y="-8" width="34" height="16" rx="3" />
                <path d="M-32 -8 V8" />
                <path d="M-8 -8 L0 -13 L0 13 L-8 8 Z" />
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
