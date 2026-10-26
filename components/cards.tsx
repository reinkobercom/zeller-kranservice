import Image from "next/image";
import Link from "next/link";
import type { Geraet, Projekt } from "@/lib/types";
import { geraetBySlug } from "@/data/geraete";
import { kategorieBySlug } from "@/data/kategorien";
import { anfrageUrl, geraetUrl, monatJahr, projektUrl } from "@/lib/links";

export function GeraetCard({ g, quelle }: { g: Geraet; quelle?: string }) {
  const k = kategorieBySlug(g.kategorie);
  return (
    <article className="flex flex-col border border-linie bg-white">
      <Link href={geraetUrl(g)} className="relative block aspect-[4/3] overflow-hidden bg-stein">
        <Image
          src={g.bilder[0]}
          alt={`${g.name} von Zeller Kranservice`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
        {!g.verfuegbar && (
          <span className="absolute left-3 top-3 rounded-[2px] bg-white px-2 py-1 text-xs font-semibold">
            Bald verfügbar
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-schiefer">{k.name}</p>
        <h3 className="mt-1 text-xl font-bold">
          <Link href={geraetUrl(g)} className="hover:text-magenta-ink">
            {g.name}
          </Link>
        </h3>
        {g.kennzahlen.length > 1 && (
          <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-linie pt-4 text-sm">
            {g.kennzahlen.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="text-schiefer">{s.label}</dt>
                <dd className="font-semibold">{s.wert}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
          <Link href={geraetUrl(g)} className="link">
            Details
          </Link>
          <Link href={anfrageUrl({ kranart: g.kategorie, geraet: g.slug, quelle })} className="link">
            {g.verfuegbar ? "Diesen Kran anfragen" : "Vormerken"}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProjektCard({ p, dark = false }: { p: Projekt; dark?: boolean }) {
  const g = geraetBySlug(p.geraet);
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-stein">
        <Image
          src={p.bilder[0]}
          alt={`${g?.name ?? "Kran"}: ${p.leistung} (${p.ort})`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {p.muster && (
          <span className="absolute left-3 top-3 rounded-[2px] bg-white/90 px-2 py-0.5 text-xs font-semibold text-bordeaux">
            Beispiel
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col pt-4 ${dark ? "text-white" : ""}`}>
        <p className={`text-sm ${dark ? "text-white/70" : "text-schiefer"}`}>
          {p.ort}, {monatJahr(p.datum)}
        </p>
        <h3 className="mt-1 text-lg font-bold leading-snug">
          <Link href={projektUrl(p.slug)} className="after:absolute after:inset-0">
            {p.leistung}
          </Link>
        </h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/80" : "text-schiefer"}`}>
          {p.kunde}
          {g && <> mit {g.name}</>}
        </p>
      </div>
    </article>
  );
}
