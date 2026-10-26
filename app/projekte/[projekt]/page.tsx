import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projekte, projekteSortiert } from "@/data/projekte";
import { geraetBySlug } from "@/data/geraete";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { kategorieBySlug } from "@/data/kategorien";
import { staedte } from "@/data/staedte";
import { ProjektCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, JsonLd, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";
import { bereichUrl, geraetUrl, monatJahr, projektUrl, stadtUrl } from "@/lib/links";


export function generateStaticParams() {
  return projekte.map((p) => ({ projekt: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projekte/[projekt]">): Promise<Metadata> {
  const { projekt } = await params;
  const p = projekte.find((x) => x.slug === projekt);
  if (!p) return {};
  const g = geraetBySlug(p.geraet);
  const title = `${p.leistung} in ${p.ort} | Zeller Kranservice`;
  return {
    title,
    description: `${p.text.slice(0, 120)} Gerät: ${g?.name}.`,
    alternates: { canonical: projektUrl(p.slug) },
    openGraph: { title, images: [p.bilder[0]] },
    ...(p.muster ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Page({ params }: PageProps<"/projekte/[projekt]">) {
  const { projekt } = await params;
  const p = projekte.find((x) => x.slug === projekt);
  if (!p) notFound();
  const g = geraetBySlug(p.geraet);
  const b = einsatzbereiche.find((x) => x.slug === p.einsatzbereich);
  const s = staedte.find((x) => x.slug === p.stadt);
  const weitere = projekteSortiert()
    .filter((x) => x.slug !== p.slug)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ name: "Projekte", href: "/projekte/" }, { name: p.ort, href: projektUrl(p.slug) }]} />
      <article>
        <header className="container-z grid gap-10 py-10 md:py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {p.muster && (
              <p className="mb-4 inline-block rounded-[2px] bg-stein px-3 py-1 text-sm font-semibold text-bordeaux">
                Beispielprojekt: echte Fotos und Daten folgen
              </p>
            )}
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{p.leistung}</h1>
            <dl className="mt-8 divide-y divide-linie border-y border-linie">
              {[
                ["Kunde", p.kunde],
                ["Ort", s ? <Link key="o" href={stadtUrl(s.slug)} className="link">{p.ort}</Link> : p.ort],
                ["Zeitraum", monatJahr(p.datum)],
                ["Gerät", g ? <Link key="g" href={geraetUrl(g)} className="link">{g.name}</Link> : p.geraet],
                ["Einsatz", b ? <Link key="b" href={bereichUrl(b.slug)} className="link">{b.name}</Link> : p.einsatzbereich],
              ].map(([k, v]) => (
                <div key={String(k)} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
                  <dt className="text-schiefer">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-lg leading-relaxed">{p.text}</p>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {p.bilder.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-stein">
                <Image
                  src={src}
                  alt={`${g?.name ?? "Kran"} beim Einsatz in ${p.ort}, Bild ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </header>
      </article>

      <section className="border-t border-linie py-16 md:py-24">
        <div className="container-z">
          <SectionHead title="Weitere Projekte" />
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {weitere.map((x) => (
              <li key={x.slug}>
                <ProjektCard p={x} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand kranart={g ? kategorieBySlug(g.kategorie).slug : undefined} geraet={g?.slug} quelle={`projekt-${p.slug}`} />

      {!p.muster && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.leistung,
            about: b?.name,
            dateCreated: p.datum,
            locationCreated: { "@type": "Place", name: p.ort },
            image: p.bilder,
            creator: { "@id": `${SITE.url}/#organisation` },
          }}
        />
      )}
    </>
  );
}
