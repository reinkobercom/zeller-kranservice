"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { kategorien } from "@/data/kategorien";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { anfrageUrl } from "@/lib/links";

const NAV = [
  { href: "/einsatzbereiche/", label: "Einsatzbereiche" },
  { href: "/einsatzgebiet/", label: "Einsatzgebiet" },
  { href: "/projekte/", label: "Projekte" },
  { href: "/ratgeber/", label: "Ratgeber" },
  { href: "/ueber-uns/", label: "Über uns" },
];

export function Header() {
  const pathname = usePathname();
  // Menü gilt nur für die Seite, auf der es geöffnet wurde: Navigation schließt es.
  const [offenAuf, setOffenAuf] = useState<string | null>(null);
  const open = offenAuf !== null && offenAuf === pathname;
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-linie bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-z flex h-[4.5rem] items-center gap-6">
        <Link href="/" className="shrink-0" aria-label="Zeller Kranservice, zur Startseite">
          <Image
            src={IMG.logo}
            alt="Zeller Kranservice"
            width={2093}
            height={750}
            priority
            className="h-11 w-auto rounded-[3px]"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium">
            <li className="group relative">
              <Link
                href="/mietpark/"
                className={`flex items-center gap-1 rounded px-3 py-2 hover:text-magenta-ink ${isActive("/mietpark") ? "text-magenta-ink" : ""}`}
              >
                Mietpark
                <svg aria-hidden width="10" height="10" viewBox="0 0 10 10" className="mt-0.5">
                  <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <div className="invisible absolute left-0 top-full w-[40rem] translate-y-1 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-linie bg-linie shadow-[0_12px_32px_-12px_rgb(33_36_40/0.25)]">
                  {kategorien.map((k) => (
                    <Link
                      key={k.slug}
                      href={`/${k.urlSlug}/`}
                      className="flex items-center gap-3 bg-white p-3 hover:bg-stein"
                    >
                      <Image
                        src={k.bild}
                        alt=""
                        width={96}
                        height={72}
                        className="h-12 w-16 rounded-[2px] object-cover"
                      />
                      <span>
                        <span className="block font-semibold">{k.name}</span>
                        <span className="block text-sm text-schiefer">{k.kennzahl}</span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/mietpark/"
                    className="col-span-2 bg-white px-4 py-3 text-sm font-semibold text-magenta-ink hover:bg-stein"
                  >
                    Alle Geräte im Mietpark vergleichen
                  </Link>
                </div>
              </div>
            </li>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`rounded px-3 py-2 hover:text-magenta-ink ${isActive(n.href) ? "text-magenta-ink" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a href={SITE.telefonHref} className="hidden font-semibold xl:block">
            {SITE.telefon}
          </a>
          <Link href={anfrageUrl({ quelle: "header" })} className="btn btn-primary hidden sm:inline-flex">
            Kran anfragen
          </Link>
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOffenAuf(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
            <svg aria-hidden width="24" height="24" viewBox="0 0 24 24">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile Navigation" className="container-z py-6">
            <p className="mb-2 text-sm text-schiefer">Mietpark</p>
            <ul className="mb-6 grid grid-cols-2 gap-2">
              {kategorien.map((k) => (
                <li key={k.slug}>
                  <Link href={`/${k.urlSlug}/`} className="block rounded-[3px] border border-linie p-3">
                    <span className="block font-semibold">{k.name}</span>
                    <span className="block text-sm text-schiefer">{k.kennzahl}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="divide-y divide-linie border-y border-linie text-lg font-medium">
              <li>
                <Link href="/mietpark/" className="block py-3">
                  Alle Geräte
                </Link>
              </li>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block py-3">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kontakt/" className="block py-3">
                  Kontakt
                </Link>
              </li>
            </ul>
            <div className="mt-6 grid gap-3">
              <Link href={anfrageUrl({ quelle: "menue" })} className="btn btn-primary w-full">
                Kran anfragen
              </Link>
              <a href={SITE.telefonHref} className="btn btn-secondary w-full">
                {SITE.telefon} anrufen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
