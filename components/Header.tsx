"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { kategorien } from "@/data/kategorien";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { anfrageUrl, bereichUrl } from "@/lib/links";
import { TelefonIcon } from "@/components/icons";

type MegaId = "mietpark" | "bereiche";

const LINKS = [
  { href: "/einsatzgebiet/", label: "Einsatzgebiet" },
  { href: "/projekte/", label: "Projekte" },
  { href: "/ueber-uns/", label: "Über uns" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg aria-hidden width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${open ? "rotate-180" : ""}`}>
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Pfeil() {
  return (
    <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" className="shrink-0 text-magenta-ink transition-transform group-hover:translate-x-1">
      <path d="M3 8h9M8 3.5 12.5 8 8 12.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

/** Ein Hauptmenüpunkt mit Mega-Menü: Link zur Übersicht, Pfeil-Button öffnet das Panel. */
function MegaItem({
  id,
  href,
  label,
  active,
  open,
  onOpen,
  onClose,
  children,
}: {
  id: MegaId;
  href: string;
  label: string;
  active: boolean;
  open: boolean;
  onOpen: (id: MegaId) => void;
  onClose: (sofort?: boolean) => void;
  children: ReactNode;
}) {
  return (
    <li
      className="flex h-full items-stretch"
      onMouseEnter={() => onOpen(id)}
      onMouseLeave={() => onClose()}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose(true);
      }}
    >
      <div className={`flex items-center border-b-2 ${open || active ? "border-magenta" : "border-transparent"}`}>
        <Link href={href} className={`py-2 pl-3 pr-1 hover:text-magenta-ink ${active ? "text-magenta-ink" : ""}`}>
          {label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`mega-${id}`}
          onClick={() => (open ? onClose(true) : onOpen(id))}
          className="grid h-8 w-7 place-items-center rounded hover:text-magenta-ink"
        >
          <span className="sr-only">{open ? `${label} schließen` : `${label} öffnen`}</span>
          <Chevron open={open} />
        </button>
      </div>
      <div
        id={`mega-${id}`}
        hidden={!open}
        className="absolute inset-x-0 top-full border-y border-linie bg-white shadow-[0_24px_48px_-28px_rgb(33_36_40/0.35)]"
      >
        {children}
      </div>
    </li>
  );
}

export function Header() {
  const pathname = usePathname();

  // Beide Zustände gelten nur auf der Seite, auf der sie geöffnet wurden:
  // eine Navigation schließt Mobilmenü und Mega-Menü automatisch.
  const [mobilAuf, setMobilAuf] = useState<string | null>(null);
  const mobilOffen = mobilAuf !== null && mobilAuf === pathname;
  const [mega, setMega] = useState<{ id: MegaId; pfad: string } | null>(null);
  const offenesMega = mega && mega.pfad === pathname ? mega.id : null;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const megaAuf = (id: MegaId) => {
    if (timer.current) clearTimeout(timer.current);
    setMega({ id, pfad: pathname });
  };
  const megaZu = (sofort = false) => {
    if (timer.current) clearTimeout(timer.current);
    if (sofort) setMega(null);
    else timer.current = setTimeout(() => setMega(null), 120);
  };

  useEffect(() => {
    document.body.style.overflow = mobilOffen ? "hidden" : "";
  }, [mobilOffen]);

  useEffect(() => {
    if (!offenesMega) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [offenesMega]);

  const isActive = (href: string) => pathname?.startsWith(href) ?? false;
  const mietparkAktiv = isActive("/mietpark") || kategorien.some((k) => isActive(`/${k.urlSlug}/`));

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-linie bg-white">
        <div className="container-z flex h-[4.5rem] items-stretch gap-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Zeller Kranservice, zur Startseite">
            <Image
              src={IMG.logo}
              alt="Zeller Kranservice"
              width={2093}
              height={750}
              priority
              className="h-11 w-auto rounded-xl"
            />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden flex-1 lg:block">
            <ul className="flex h-full items-stretch gap-1 text-[0.95rem] font-medium">
              <MegaItem
                id="mietpark"
                href="/mietpark/"
                label="Mietpark"
                active={mietparkAktiv}
                open={offenesMega === "mietpark"}
                onOpen={megaAuf}
                onClose={megaZu}
              >
                <div className="container-z grid gap-10 py-9 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-2xl font-bold">Mietpark</p>
                    <p className="mt-3 text-schiefer">
                      Sechs Gerätearten im eigenen Bestand, gewartet in Werl. Autokrane fahren immer mit unserem Kranführer.
                    </p>
                    <div className="mt-6 flex flex-col items-start gap-3">
                      <Link href="/mietpark/" className="btn btn-secondary">
                        Alle Geräte vergleichen
                      </Link>
                      <Link href={anfrageUrl({ quelle: "megamenue-mietpark" })} className="link text-sm font-semibold">
                        Gerät empfehlen lassen
                      </Link>
                    </div>
                  </div>
                  <ul className="grid grid-cols-3 gap-x-6 gap-y-8 lg:col-span-9">
                    {kategorien.map((k) => (
                      <li key={k.slug}>
                        <Link href={`/${k.urlSlug}/`} className="group block">
                          <span className="relative block aspect-[2/1] overflow-hidden rounded-2xl bg-stein">
                            <Image
                              src={k.bild}
                              alt=""
                              fill
                              sizes="20vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </span>
                          <span className="mt-3 flex items-center justify-between gap-2 font-semibold group-hover:text-magenta-ink">
                            {k.name} mieten
                            <Pfeil />
                          </span>
                          <span className="block text-sm font-normal text-schiefer">{k.kennzahl}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </MegaItem>

              <MegaItem
                id="bereiche"
                href="/einsatzbereiche/"
                label="Einsatzbereiche"
                active={isActive("/einsatzbereiche")}
                open={offenesMega === "bereiche"}
                onOpen={megaAuf}
                onClose={megaZu}
              >
                <div className="container-z grid gap-10 py-9 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-2xl font-bold">Einsatzbereiche</p>
                    <p className="mt-3 text-schiefer">
                      Für jedes Gewerk das passende Gerät, mit Ablauf und Tipps zur Vorbereitung.
                    </p>
                    <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-stein">
                      <Image src={IMG.minikranGlas1} alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <ul className="grid grid-cols-2 gap-x-10 border-t border-linie">
                      {einsatzbereiche.map((b) => (
                        <li key={b.slug} className="border-b border-linie">
                          <Link href={bereichUrl(b.slug)} className="group flex items-start justify-between gap-4 py-4">
                            <span>
                              <span className="block font-semibold group-hover:text-magenta-ink">{b.name}</span>
                              <span className="mt-0.5 block text-sm font-normal text-schiefer">{b.kurz}</span>
                            </span>
                            <span className="mt-1">
                              <Pfeil />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/einsatzbereiche/" className="link mt-6 inline-block text-sm font-semibold">
                      Alle Einsatzbereiche im Überblick
                    </Link>
                  </div>
                </div>
              </MegaItem>

              {LINKS.map((n) => (
                <li key={n.href} className="flex items-stretch">
                  <Link
                    href={n.href}
                    className={`flex items-center border-b-2 px-3 hover:text-magenta-ink ${
                      isActive(n.href) ? "border-magenta text-magenta-ink" : "border-transparent"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-5">
            <a href={SITE.telefonHref} className="hidden font-semibold hover:text-magenta-ink xl:inline-flex items-center gap-2">
              <TelefonIcon />
              {SITE.telefon}
            </a>
            <Link href={anfrageUrl({ quelle: "header" })} className="btn btn-primary hidden sm:inline-flex">
              Kran anfragen
            </Link>
            <button
              type="button"
              className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={mobilOffen}
              aria-controls="mobile-menu"
              onClick={() => setMobilAuf(mobilOffen ? null : pathname)}
            >
              <span className="sr-only">{mobilOffen ? "Menü schließen" : "Menü öffnen"}</span>
              <svg aria-hidden width="24" height="24" viewBox="0 0 24 24">
                {mobilOffen ? (
                  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" />
                ) : (
                  <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobilOffen && (
          <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-white lg:hidden">
            <nav aria-label="Mobile Navigation" className="container-z pb-10 pt-6">
              <p className="mb-3 font-semibold">Mietpark</p>
              <ul className="grid grid-cols-2 gap-2">
                {kategorien.map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.urlSlug}/`} className="block h-full rounded-xl border border-linie p-3">
                      <span className="block font-semibold">{k.name}</span>
                      <span className="block text-sm text-schiefer">{k.kennzahl}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/mietpark/" className="link mt-3 inline-block text-sm font-semibold">
                Alle Geräte vergleichen
              </Link>

              <details className="group mt-8 border-y border-linie">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  Einsatzbereiche
                  <span className="group-open:rotate-180">
                    <Chevron open={false} />
                  </span>
                </summary>
                <ul className="pb-3">
                  {einsatzbereiche.map((b) => (
                    <li key={b.slug}>
                      <Link href={bereichUrl(b.slug)} className="block py-2 text-schiefer">
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
              <ul className="divide-y divide-linie border-b border-linie text-lg font-medium">
                {LINKS.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="block py-4">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/kontakt/" className="block py-4">
                    Kontakt
                  </Link>
                </li>
              </ul>
              <div className="mt-8 grid gap-3">
                <Link href={anfrageUrl({ quelle: "menue" })} className="btn btn-primary w-full">
                  Kran anfragen
                </Link>
                <a href={SITE.telefonHref} className="btn btn-secondary w-full">
                  <TelefonIcon />
                  {SITE.telefon} anrufen
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Abdunklung unter offenem Mega-Menü; Klick schließt */}
      {offenesMega && (
        <div aria-hidden onClick={() => setMega(null)} className="fixed inset-0 top-[4.5rem] z-30 hidden bg-graphit/25 lg:block" />
      )}
    </>
  );
}
