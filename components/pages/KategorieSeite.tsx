import Image from "next/image";
import Link from "next/link";
import type { Kategorie } from "@/lib/types";
import { geraeteDerKategorie } from "@/data/geraete";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { projekteSortiert } from "@/data/projekte";
import { artikel } from "@/data/ratgeber";
import { GeraetCard, ProjektCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, FaqList, JsonLd, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";
import { anfrageUrl, artikelUrl, bereichUrl, geraetUrl } from "@/lib/links";

export function KategorieSeite({ k }: { k: Kategorie }) {
  const geraete = geraeteDerKategorie(k.slug);
  const verfuegbar = geraete.filter((g) => g.verfuegbar);
  const slugs = new Set(geraete.map((g) => g.slug));
  const projekte = projekteSortiert().filter((p) => slugs.has(p.geraet)).slice(0, 3);
  const bereiche = einsatzbereiche.filter((b) => b.geraete.some((s) => slugs.has(s)));
  const ratgeber = artikel.filter((a) => a.kategorien.includes(k.slug));
  const quelle = `kategorie-${k.slug}`;

  const vergleich = verfuegbar.length > 1;

  return (
    <>
      <Breadcrumbs items={[{ name: "Mietpark", href: "/mietpark/" }, { name: k.h1, href: `/${k.urlSlug}/` }]} />

      <section className="border-b border-linie">
        <div className="container-z grid gap-10 py-10 md:py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold leading-[1.05] md:text-6xl">{k.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-schiefer">{k.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={anfrageUrl({ kranart: k.slug, quelle })} className="btn btn-primary">
                {k.name} anfragen
              </Link>
              <a href={SITE.telefonHref} className="btn btn-secondary">
                {SITE.telefon}
              </a>
            </div>
            <p className="mt-4 text-sm text-schiefer">Unverbindlich. Wir rufen {SITE.rueckruf} zurück.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-stein lg:col-span-6">
            <Image src={k.bild} alt={`${k.name} von Zeller Kranservice im Einsatz`} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="geraete-titel">
        <div className="container-z">
          <SectionHead
            id="geraete-titel"
            title={geraete.length > 1 ? `Unsere ${k.plural}` : `Unser ${k.name}`}
            intro={geraete.length > 1 ? "Alle Geräte stehen in unserem eigenen Bestand." : undefined}
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {geraete.map((g) => (
              <li key={g.slug}>
                <GeraetCard g={g} quelle={quelle} />
              </li>
            ))}
          </ul>

          {vergleich && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold">{k.plural} im Vergleich</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="table-z min-w-[40rem]">
                  <thead>
                    <tr>
                      <th scope="col">Modell</th>
                      <th scope="col">Höhe</th>
                      <th scope="col">Max. Last</th>
                      <th scope="col">Reichweite</th>
                      <th scope="col">Besonderheit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verfuegbar.map((g) => (
                      <tr key={g.slug}>
                        <th scope="row">
                          <Link href={geraetUrl(g)} className="font-semibold text-graphit hover:text-magenta-ink">
                            {g.name}
                          </Link>
                        </th>
                        <td>{g.hakenhoeheM ? `${fmt(g.hakenhoeheM)} m` : g.arbeitshoeheM ? `${fmt(g.arbeitshoeheM)} m Arbeitshöhe` : "–"}</td>
                        <td>{g.tragkraftT ? `${fmt(g.tragkraftT)} t` : "–"}</td>
                        <td>{g.reichweiteM ? `${fmt(g.reichweiteM)} m` : "–"}</td>
                        <td>{g.fakten[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-stein py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Wann {k.plural} die richtige Wahl sind</h2>
            <ul className="mt-8 space-y-4">
              {k.wannSinnvoll.map((w) => (
                <li key={w} className="flex gap-4">
                  <span aria-hidden className="mt-3 h-0.5 w-5 shrink-0 bg-magenta" />
                  <span className="text-lg">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start border-l-2 border-graphit pl-8">
            <h3 className="text-xl font-bold">Mit oder ohne Kranführer?</h3>
            <p className="mt-3 leading-relaxed text-schiefer">{k.mitFahrer}</p>
            {bereiche.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-bold">Typische Einsätze</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {bereiche.map((b) => (
                    <li key={b.slug}>
                      <Link href={bereichUrl(b.slug)} className="inline-block rounded-[3px] border border-linie bg-white px-3 py-1.5 text-sm font-medium hover:border-magenta-ink">
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {projekte.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-z">
            <SectionHead title={`${k.name} im Einsatz`} />
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {projekte.map((p) => (
                <li key={p.slug}>
                  <ProjektCard p={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-linie py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title={`Häufige Fragen: ${k.name}`} />
            {ratgeber.length > 0 && (
              <div className="mt-8">
                <p className="text-sm font-semibold text-schiefer">Aus dem Ratgeber</p>
                <ul className="mt-3 space-y-2">
                  {ratgeber.map((a) => (
                    <li key={a.slug}>
                      <Link href={artikelUrl(a.slug)} className="link">
                        {a.titel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-8">
            <FaqList items={k.faq} />
          </div>
        </div>
      </section>

      <CtaBand kranart={k.slug} quelle={quelle} title={`${k.name} mieten: Sagen Sie uns, was gehoben werden muss.`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${k.name} mieten`,
          serviceType: `${k.name}vermietung`,
          description: k.intro,
          provider: { "@id": `${SITE.url}/#organisation` },
          areaServed: { "@type": "Country", name: "Deutschland" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: k.plural,
            itemListElement: geraete.map((g) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Product", name: g.name, url: SITE.url + geraetUrl(g) },
            })),
          },
        }}
      />
    </>
  );
}

export const fmt = (n: number) => n.toLocaleString("de-DE", { maximumFractionDigits: 2 });
