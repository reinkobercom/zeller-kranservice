import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { geraetBySlug } from "@/data/geraete";
import { projekteImBereich } from "@/data/projekte";
import { artikel } from "@/data/ratgeber";
import { GeraetCard, ProjektCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, FaqList, JsonLd, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";
import { anfrageUrl, artikelUrl, bereichUrl } from "@/lib/links";


export function generateStaticParams() {
  return einsatzbereiche.map((b) => ({ bereich: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/einsatzbereiche/[bereich]">): Promise<Metadata> {
  const { bereich } = await params;
  const b = einsatzbereiche.find((x) => x.slug === bereich);
  if (!b) return {};
  return {
    title: b.metaTitle,
    description: b.metaDescription,
    alternates: { canonical: bereichUrl(b.slug) },
    openGraph: { title: b.metaTitle, description: b.metaDescription, images: [b.bild] },
  };
}

export default async function Page({ params }: PageProps<"/einsatzbereiche/[bereich]">) {
  const { bereich } = await params;
  const b = einsatzbereiche.find((x) => x.slug === bereich);
  if (!b) notFound();
  const geraete = b.geraete.map(geraetBySlug).filter((g) => g !== undefined);
  const hauptgeraet = geraete[0];
  const projekte = projekteImBereich(b.slug).slice(0, 3);
  const ratgeber = artikel.filter((a) => a.einsatzbereiche.includes(b.slug));
  const quelle = `bereich-${b.slug}`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Einsatzbereiche", href: "/einsatzbereiche/" }, { name: b.name, href: bereichUrl(b.slug) }]} />

      <section className="border-b border-linie">
        <div className="container-z grid gap-10 py-10 md:py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold leading-[1.05] md:text-[3.4rem]">{b.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-schiefer">{b.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={anfrageUrl({ kranart: hauptgeraet?.kategorie, quelle })}
                className="btn btn-primary"
              >
                Kran für {b.name} anfragen
              </Link>
              <a href={SITE.telefonHref} className="btn btn-secondary">
                {SITE.telefon}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-stein lg:col-span-6">
            <Image src={b.bild} alt={`${b.name} mit Kran von Zeller Kranservice`} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-z">
          <SectionHead title="So läuft der Einsatz" />
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {b.ablauf.map((s, i) => (
              <li key={s.titel} className="border-t-2 border-graphit pt-6">
                <span className="text-sm font-semibold text-magenta-ink">Schritt {i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{s.titel}</h3>
                <p className="mt-3 leading-relaxed text-schiefer">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-stein py-16 md:py-24">
        <div className="container-z">
          <SectionHead title="Diese Geräte setzen wir ein" intro="Das erste Gerät ist unsere übliche Wahl. Welches am Ende passt, klären wir bei der Besichtigung." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {geraete.map((g) => (
              <li key={g.slug}>
                <GeraetCard g={g} quelle={quelle} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold leading-tight">Was Sie vorbereiten können</h2>
            <ul className="mt-8 space-y-4">
              {b.tipps.map((t) => (
                <li key={t} className="flex gap-4">
                  <span aria-hidden className="mt-3 h-0.5 w-5 shrink-0 bg-magenta" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            {ratgeber.length > 0 && (
              <div className="mt-10">
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
          <div className="lg:col-span-7">
            <h2 className="mb-6 text-3xl font-bold leading-tight">Häufige Fragen</h2>
            <FaqList items={b.faq} />
          </div>
        </div>
      </section>

      {projekte.length > 0 && (
        <section className="border-t border-linie py-16 md:py-24">
          <div className="container-z">
            <SectionHead title={`Projekte: ${b.name}`} />
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

      <CtaBand kranart={hauptgeraet?.kategorie} quelle={quelle} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: b.h1,
          description: b.intro,
          provider: { "@id": `${SITE.url}/#organisation` },
          areaServed: { "@type": "Country", name: "Deutschland" },
        }}
      />
    </>
  );
}
