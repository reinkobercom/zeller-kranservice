"use client";

import { useEffect, useRef } from "react";

/** Widget-IDs aus Trustindex (Google-Bewertungen). */
export const TRUSTINDEX = {
  button: "411f40484c44854071967100921",
  slider: "7f3f94484031855e9b26e9257f0",
} as const;

/**
 * Bindet ein Trustindex-Widget ein. Das Skript wird erst geladen, wenn der
 * Platzhalter in die Nähe des sichtbaren Bereichs kommt: Das spart Ladezeit
 * und vermeidet Verbindungen zu Trustindex, solange niemand hinscrollt.
 */
export function Trustindex({
  art,
  ausrichtung = "links",
  className = "",
  minHoehe,
}: {
  art: keyof typeof TRUSTINDEX;
  ausrichtung?: "links" | "mitte";
  className?: string;
  /** Platz reservieren, damit die Seite beim Laden nicht springt */
  minHoehe?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Trustindex entfernt sein <script> nach dem Rendern. Beim Zurück-Navigieren
    // läuft der Effekt erneut; deshalb merken wir uns am Element selbst, dass
    // es schon geladen wurde, und laden nie in einen gefüllten Container.
    if (el.dataset.tiGeladen === "1" || el.childElementCount > 0) return;
    const laden = () => {
      if (el.dataset.tiGeladen === "1" || el.childElementCount > 0) return;
      el.dataset.tiGeladen = "1";
      const s = document.createElement("script");
      s.src = `https://cdn.trustindex.io/loader.js?${TRUSTINDEX[art]}`;
      s.defer = true;
      s.async = true;
      el.appendChild(s);
    };
    if (!("IntersectionObserver" in window)) return laden();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          laden();
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [art]);

  return (
    <div
      ref={ref}
      className={`trustindex-${ausrichtung} ${className}`}
      style={minHoehe ? { minHeight: minHoehe } : undefined}
      aria-label="Google-Bewertungen von Zeller Kranservice"
    />
  );
}
