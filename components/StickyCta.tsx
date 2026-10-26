"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { anfrageUrl } from "@/lib/links";

/** Mobile Leiste "Anrufen | Anfragen", erscheint ab 30 % Scrolltiefe. */
export function StickyCta() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const hidden = pathname?.startsWith("/kontakt");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(max > 0 && window.scrollY / max > 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-px border-t border-linie bg-linie transition-transform duration-200 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <a href={SITE.telefonHref} className="flex h-14 items-center justify-center bg-white font-semibold" tabIndex={show ? 0 : -1}>
        Anrufen
      </a>
      <Link
        href={anfrageUrl({ quelle: "sticky-mobil" })}
        className="flex h-14 items-center justify-center bg-magenta-ink font-semibold text-white"
        tabIndex={show ? 0 : -1}
      >
        Kran anfragen
      </Link>
    </div>
  );
}
