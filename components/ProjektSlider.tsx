"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontaler Slider mit Scroll-Snap. Langsames Auto-Play (5 s),
 * pausiert bei Hover, Fokus, Berührung und bei reduzierter Bewegung.
 */
export function ProjektSlider({ children, label }: { children: ReactNode[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const count = children.length;

  const scrollTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const item = el.children[i] as HTMLElement | undefined;
    if (item) el.scrollTo({ left: item.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      const el = track.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      const next = dir === 1 && atEnd ? 0 : Math.max(0, Math.min(count - 1, index + dir));
      scrollTo(next);
    },
    [count, index, scrollTo],
  );

  // aktuellen Index aus der Scrollposition ableiten
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return;
      const w = first.getBoundingClientRect().width + 24;
      setIndex(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = setInterval(() => step(1), 5000);
    return () => clearInterval(t);
  }, [paused, step]);

  return (
    <div
      role="region"
      aria-roledescription="Karussell"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={track}
        className="snap-row -mx-5 flex gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0"
      >
        {children.map((c, i) => (
          <div
            key={i}
            className="w-[82%] shrink-0 sm:w-[46%] lg:w-[calc((100%-3rem)/3)]"
            role="group"
            aria-roledescription="Projekt"
            aria-label={`${i + 1} von ${count}`}
          >
            {c}
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-1.5" aria-hidden>
          {children.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-3 bg-white/35"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            className="grid h-11 w-11 place-items-center rounded-[3px] border border-white/40 text-white hover:bg-white/10"
          >
            <span className="sr-only">Vorheriges Projekt</span>
            <svg aria-hidden width="16" height="16" viewBox="0 0 16 16">
              <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="grid h-11 w-11 place-items-center rounded-[3px] border border-white/40 text-white hover:bg-white/10"
          >
            <span className="sr-only">Nächstes Projekt</span>
            <svg aria-hidden width="16" height="16" viewBox="0 0 16 16">
              <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
