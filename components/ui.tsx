import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq, KategorieSlug } from "@/lib/types";
import { SITE } from "@/lib/site";
import { anfrageUrl } from "@/lib/links";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Startseite", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brotkrumen" className="container-z pt-6 text-sm text-schiefer">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-graphit">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-graphit hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: SITE.url + c.href,
          })),
        }}
      />
    </>
  );
}

export function SectionHead({
  title,
  intro,
  id,
  as: As = "h2",
  className = "",
  light = false,
}: {
  title: string;
  intro?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <As id={id} className={`text-3xl font-bold leading-[1.1] md:text-[2.6rem] ${light ? "text-white" : ""}`}>
        {title}
      </As>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-schiefer"}`}>{intro}</p>
      )}
    </div>
  );
}

export function FaqList({ items, withSchema = true }: { items: Faq[]; withSchema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-linie border-y border-linie">
        {items.map((f) => (
          <details key={f.frage} className="group py-1">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              <span>{f.frage}</span>
              <span
                aria-hidden
                className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center text-magenta-ink transition-transform group-open:rotate-45"
              >
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </summary>
            <p className="max-w-3xl pb-5 leading-relaxed text-schiefer">{f.antwort}</p>
          </details>
        ))}
      </div>
      {withSchema && items.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.frage,
              acceptedAnswer: { "@type": "Answer", text: f.antwort },
            })),
          }}
        />
      )}
    </>
  );
}

/** Abschluss-CTA auf Bordeaux. */
export function CtaBand({
  title = "Sagen Sie uns, was gehoben werden muss.",
  text = `Wir melden uns ${SITE.rueckruf} mit einem Vorschlag für Gerät und Termin.`,
  kranart,
  geraet,
  quelle,
}: {
  title?: string;
  text?: string;
  kranart?: KategorieSlug;
  geraet?: string;
  quelle?: string;
}) {
  return (
    <section className="bg-bordeaux text-white">
      <div className="container-z flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight md:text-[2.6rem]">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={anfrageUrl({ kranart, geraet, quelle })} className="btn btn-light">
            Kran anfragen
          </Link>
          <a href={SITE.telefonHref} className="btn btn-outline-light">
            {SITE.telefon}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "muster" }) {
  return (
    <span
      className={`inline-flex items-center rounded-[2px] px-2 py-0.5 text-xs font-semibold ${
        tone === "muster" ? "bg-white/90 text-bordeaux" : "bg-stein text-graphit"
      }`}
    >
      {children}
    </span>
  );
}
