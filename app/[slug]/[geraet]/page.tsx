import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { geraete, geraeteDerKategorie } from "@/data/geraete";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { kategorieBySlug, kategorieByUrlSlug } from "@/data/kategorien";
import { projekteMitGeraet } from "@/data/projekte";
import { GeraetCard, ProjektCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, FaqList, JsonLd, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";
import { anfrageUrl, bereichUrl, geraetUrl } from "@/lib/links";


export function generateStaticParams() {
  return geraete.map((g) => ({ slug: kategorieBySlug(g.kategorie).urlSlug, geraet: g.slug }));
}

function finde(slug: string, geraet: string) {
  const k = kategorieByUrlSlug(slug);
  const g = geraete.find((x) => x.slug === geraet && x.kategorie === k?.slug);
  return k && g ? { k, g } : null;
}

export async function generateMetadata({ params }: PageProps<"/[slug]/[geraet]">): Promise<Metadata> {
  const { slug, geraet } = await params;
  const f = finde(slug, geraet);
  if (!f) return {};
  const { k, g } = f;
  const hoehe = g.hakenhoeheM
    ? `bis ${g.hakenhoeheM.toLocaleString("de-DE")} m`
    : g.arbeitshoeheM
      ? `${g.arbeitshoeheM.toLocaleString("de-DE")} m Arbeitshöhe`
      : "";
  const title = `${g.name} mieten${hoehe ? ` | ${hoehe}` : ""} | Zeller`;
  const description = `${g.name} mieten bei Zeller Kranservice: ${g.kennzahlen
    .slice(0, 3)
    .map((s) => `${s.label} ${s.wert}`)
    .join(", ")}. ${k.name} ${g.mitFahrer === "immer" ? "mit Kranführer" : "mit oder ohne Bediener"}, deutschlandweit.`;
  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical: geraetUrl(g) },
    openGraph: { title, description, images: [g.bilder[0]] },
  };
}

export default async function Page({ params }: PageProps<"/[slug]/[geraet]">) {
  const { slug, geraet } = await params;
  const f = finde(slug, geraet);
  if (!f) notFound();
  const { k, g } = f;
  const quelle = `geraet-${g.slug}`;
  const projekte = projekteMitGeraet(g.slug).slice(0, 3);
  const bereiche = einsatzbereiche.filter((b) => g.einsatzbereiche.includes(b.slug));
  const aehnlich = geraeteDerKategorie(g.kategorie).filter((x) => x.slug !== g.slug).slice(0, 3);
  const mitFahrerText = {
    immer: "Nur mit unserem Kranführer",
    optional: "Mit oder ohne Bediener",
    ohne: "Zur Selbstbedienung",
  }[g.mitFahrer];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Mietpark", href: "/mietpark/" },
          { name: k.h1, href: `/${k.urlSlug}/` },
          { name: g.name, href: geraetUrl(g) },
        ]}
      />

      <section className="border-b border-linie">
        <div className="container-z grid gap-10 py-10 md:py-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-stein">
              <Image src={g.bilder[0]} alt={`${g.name} von Zeller Kranservice`} fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
            </div>
            {g.bilder.length > 1 && (
              <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {g.bilder.slice(1, 9).map((b, i) => (
                  <li key={b} className="relative aspect-[4/3] overflow-hidden bg-stein">
                    <Image src={b} alt={`${g.name} im Einsatz, Bild ${i + 2}`} fill sizes="(min-width:1024px) 14vw, 30vw" className="object-cover" />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:col-span-5">
            <p className="text-schiefer">
              {k.name} von {g.hersteller}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-[1.05] md:text-5xl">{g.name} mieten</h1>
            {!g.verfuegbar && (
              <p className="mt-4 inline-block rounded-[2px] bg-stein px-3 py-1 text-sm font-semibold">Bald verfügbar</p>
            )}
            <p className="mt-6 text-lg leading-relaxed text-schiefer">{g.beschreibung}</p>

            {g.verfuegbar && (
              <dl className="mt-8 grid grid-cols-2 gap-px border border-linie bg-linie">
                {g.kennzahlen.map((s) => (
                  <div key={s.label} className="bg-white p-4">
                    <dt className="text-sm text-schiefer">{s.label}</dt>
                    <dd className="mt-1 text-xl font-bold">{s.wert}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={anfrageUrl({ kranart: g.kategorie, geraet: g.slug, quelle })} className="btn btn-primary">
                {g.verfuegbar ? "Diesen Kran anfragen" : "Jetzt vormerken"}
              </Link>
              <a href={SITE.telefonHref} className="btn btn-secondary">
                {SITE.telefon}
              </a>
            </div>
            <ul className="mt-6 space-y-1 text-sm text-schiefer">
              <li>{mitFahrerText}</li>
              {g.anzahl && g.anzahl > 1 && <li>{g.anzahl} Geräte im Bestand</li>}
              {g.passtDurchTuer && <li>Passt durch Türen und Tore</li>}
              <li>Rückruf {SITE.rueckruf}</li>
            </ul>
          </div>
        </div>
      </section>

      {g.specs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-z grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold">Technische Daten</h2>
              <table className="table-z mt-6">
                <tbody>
                  {g.specs.map((s) => (
                    <tr key={s.label}>
                      <th scope="row" className="w-1/2">
                        {s.label}
                      </th>
                      <td className="font-semibold">{s.wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-schiefer">
                Herstellerangaben {g.hersteller}. Die tatsächliche Last hängt von Ausladung und Aufstellung ab; maßgeblich
                ist das Lastdiagramm.
              </p>
              {g.datenblatt && (
                <a href={g.datenblatt} target="_blank" rel="noopener" className="btn btn-secondary mt-6">
                  Lastdiagramm und Datenblatt öffnen
                </a>
              )}
            </div>
            <div className="space-y-10 lg:col-span-5">
              <div>
                <h3 className="text-xl font-bold">Auf einen Blick</h3>
                <ul className="mt-4 space-y-3">
                  {g.fakten.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden className="mt-3 h-0.5 w-4 shrink-0 bg-magenta" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {g.zubehoer && g.zubehoer.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold">Zubehör</h3>
                  <p className="mt-3 text-schiefer">{g.zubehoer.join(", ")}</p>
                </div>
              )}
              {bereiche.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold">Geeignet für</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {bereiche.map((b) => (
                      <li key={b.slug}>
                        <Link href={bereichUrl(b.slug)} className="inline-block rounded-[3px] border border-linie px-3 py-1.5 text-sm font-medium hover:border-magenta-ink">
                          {b.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {projekte.length > 0 && (
        <section className="bg-stein py-16 md:py-24">
          <div className="container-z">
            <SectionHead title={`Der ${g.name} im Einsatz`} />
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

      {g.faq && g.faq.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-z max-w-4xl">
            <SectionHead title="Häufige Fragen" />
            <div className="mt-8">
              <FaqList items={g.faq} />
            </div>
          </div>
        </section>
      )}

      {aehnlich.length > 0 && (
        <section className="border-t border-linie py-16 md:py-24">
          <div className="container-z">
            <SectionHead title={`Weitere ${k.plural}`} />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aehnlich.map((x) => (
                <li key={x.slug}>
                  <GeraetCard g={x} quelle={quelle} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand kranart={g.kategorie} geraet={g.slug} quelle={quelle} title={`${g.name} anfragen`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: g.name,
          description: g.beschreibung,
          brand: { "@type": "Brand", name: g.hersteller },
          model: g.modell,
          category: k.name,
          image: g.bilder,
          url: SITE.url + geraetUrl(g),
          additionalProperty: g.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.wert })),
        }}
      />
    </>
  );
}
