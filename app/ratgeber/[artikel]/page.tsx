import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artikel } from "@/data/ratgeber";
import { kategorieBySlug } from "@/data/kategorien";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { Breadcrumbs, CtaBand, FaqList, JsonLd } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { artikelUrl, bereichUrl, datumDe } from "@/lib/links";


export function generateStaticParams() {
  return artikel.map((a) => ({ artikel: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/ratgeber/[artikel]">): Promise<Metadata> {
  const { artikel: slug } = await params;
  const a = artikel.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: artikelUrl(a.slug) },
    openGraph: {
      type: "article",
      title: a.metaTitle,
      description: a.metaDescription,
      images: [a.bild],
      publishedTime: a.veroeffentlicht,
      modifiedTime: a.aktualisiert,
    },
  };
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function Page({ params }: PageProps<"/ratgeber/[artikel]">) {
  const { artikel: slug } = await params;
  const a = artikel.find((x) => x.slug === slug);
  if (!a) notFound();
  const bereiche = einsatzbereiche.filter((b) => a.einsatzbereiche.includes(b.slug));
  const weitere = artikel.filter((x) => x.slug !== a.slug);
  const kranart = a.kategorien.length === 1 ? a.kategorien[0] : undefined;

  return (
    <>
      <Breadcrumbs items={[{ name: "Ratgeber", href: "/ratgeber/" }, { name: a.titel, href: artikelUrl(a.slug) }]} />
      <article className="container-z py-10 md:py-14">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.08] md:text-[3.2rem]">{a.titel}</h1>
          <p className="mt-6 border-l-2 border-magenta pl-5 text-xl leading-relaxed">{a.antwort}</p>
          <div className="mt-8 flex items-center gap-4">
            <Image src={IMG.teamDirk} alt="Dirk Zeller" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <p className="text-sm leading-snug">
              <span className="block font-semibold">Dirk Zeller</span>
              <span className="text-schiefer">
                Geschäftsführer und Kranführer. Aktualisiert am {datumDe(a.aktualisiert)}, {a.lesezeitMin} Minuten Lesezeit
              </span>
            </p>
          </div>
        </header>

        <div className="relative mt-10 aspect-[21/9] overflow-hidden bg-stein">
          <Image src={a.bild} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Inhalt" className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-schiefer">Inhalt</p>
              <ol className="mt-3 space-y-2 text-sm">
                {a.abschnitte.map((s) => (
                  <li key={s.h2}>
                    <a href={`#${slugify(s.h2)}`} className="hover:text-magenta-ink hover:underline">
                      {s.h2}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#fragen" className="hover:text-magenta-ink hover:underline">
                    Häufige Fragen
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          <div className="prose-z lg:col-span-9">
            {a.abschnitte.map((s) => (
              <section key={s.h2} aria-labelledby={slugify(s.h2)}>
                <h2 id={slugify(s.h2)} className="scroll-mt-28">
                  {s.h2}
                </h2>
                {s.absaetze.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.liste && (
                  <ul>
                    {s.liste.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
                {s.tabelle && (
                  <div className="my-6 overflow-x-auto">
                    <table className="table-z min-w-[32rem]">
                      <thead>
                        <tr>
                          {s.tabelle.kopf.map((k) => (
                            <th key={k} scope="col">
                              {k}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.tabelle.zeilen.map((z, i) => (
                          <tr key={i}>
                            {z.map((c, j) =>
                              j === 0 ? (
                                <th key={j} scope="row">
                                  {c}
                                </th>
                              ) : (
                                <td key={j}>{c}</td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <h2 id="fragen" className="scroll-mt-28">
              Häufige Fragen
            </h2>
            <div className="not-prose">
              <FaqList items={a.faq} />
            </div>

            <div className="mt-12 border-t border-linie pt-8">
              <p className="font-semibold">Passende Seiten</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {a.kategorien.map((k) => {
                  const kat = kategorieBySlug(k);
                  return (
                    <li key={k} className="!m-0 !p-0 before:!hidden">
                      <Link href={`/${kat.urlSlug}/`} className="inline-block rounded-[3px] border border-linie px-3 py-1.5 text-sm font-medium !no-underline hover:border-magenta-ink">
                        {kat.name} mieten
                      </Link>
                    </li>
                  );
                })}
                {bereiche.map((b) => (
                  <li key={b.slug} className="!m-0 !p-0 before:!hidden">
                    <Link href={bereichUrl(b.slug)} className="inline-block rounded-[3px] border border-linie px-3 py-1.5 text-sm font-medium !no-underline hover:border-magenta-ink">
                      {b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-stein py-16">
        <div className="container-z">
          <h2 className="text-2xl font-bold">Weitere Artikel</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {weitere.map((w) => (
              <li key={w.slug}>
                <Link href={artikelUrl(w.slug)} className="block h-full bg-white p-6 font-bold leading-snug hover:text-magenta-ink">
                  {w.titel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand kranart={kranart} quelle={`ratgeber-${a.slug}`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.titel,
          description: a.metaDescription,
          image: a.bild,
          datePublished: a.veroeffentlicht,
          dateModified: a.aktualisiert,
          inLanguage: "de-DE",
          author: {
            "@type": "Person",
            name: "Dirk Zeller",
            jobTitle: "Geschäftsführer und Kranführer",
            worksFor: { "@id": `${SITE.url}/#organisation` },
          },
          publisher: { "@id": `${SITE.url}/#organisation` },
          mainEntityOfPage: SITE.url + artikelUrl(a.slug),
        }}
      />
    </>
  );
}
