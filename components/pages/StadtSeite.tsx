import Image from "next/image";
import Link from "next/link";
import type { Stadt } from "@/lib/types";
import { geraetBySlug } from "@/data/geraete";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { kategorien } from "@/data/kategorien";
import { projekteInStadt, projekteSortiert } from "@/data/projekte";
import { staedte } from "@/data/staedte";
import { GeraetCard, ProjektCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, FaqList, JsonLd, SectionHead } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { anfrageUrl, bereichUrl, stadtUrl } from "@/lib/links";

export function StadtSeite({ s }: { s: Stadt }) {
  const quelle = `stadt-${s.slug}`;
  const geraete = s.empfohleneGeraete.map(geraetBySlug).filter((g) => g !== undefined);
  const bereiche = s.typischeEinsaetze
    .map((slug) => einsatzbereiche.find((b) => b.slug === slug))
    .filter((b) => b !== undefined);
  const lokal = projekteInStadt(s.slug);
  const projekte = (lokal.length ? lokal : projekteSortiert()).slice(0, 3);
  const nachbarn = staedte.filter((x) => x.slug !== s.slug && x.region === s.region).slice(0, 8);
  const bild = bereiche[0]?.bild ?? IMG.mkgHalle;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Einsatzgebiet", href: "/einsatzgebiet/" },
          { name: `Kran mieten ${s.name}`, href: stadtUrl(s.slug) },
        ]}
      />

      <section className="border-b border-linie">
        <div className="container-z grid gap-10 py-10 md:py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-bold leading-[1.05] md:text-6xl">Kran mieten in {s.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-schiefer">{s.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={anfrageUrl({ quelle })} className="btn btn-primary">
                Kran in {s.name} anfragen
              </Link>
              <a href={SITE.telefonHref} className="btn btn-secondary">
                {SITE.telefon}
              </a>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-linie pt-6">
              <div>
                <dt className="text-sm text-schiefer">Ab Werl</dt>
                <dd className="text-xl font-bold">
                  {s.luftlinieKm === 0 ? "Firmensitz" : `ca. ${s.luftlinieKm} km`}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-schiefer">Genehmigung</dt>
                <dd className="text-xl font-bold">übernehmen wir</dd>
              </div>
              <div>
                <dt className="text-sm text-schiefer">Rückruf</dt>
                <dd className="text-xl font-bold">in 24 h</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-stein lg:col-span-5">
            <Image src={bild} alt={`Kraneinsatz von Zeller Kranservice, Beispiel für ${s.name}`} fill priority sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Baustellen in {s.name}</h2>
            <p className="mt-6 text-lg leading-relaxed">{s.lage}</p>
            {bereiche.length > 0 && (
              <>
                <h3 className="mt-10 text-xl font-bold">Häufige Einsätze in {s.name}</h3>
                <ul className="mt-4 grid gap-px bg-linie sm:grid-cols-2">
                  {bereiche.map((b) => (
                    <li key={b.slug} className="bg-white">
                      <Link href={bereichUrl(b.slug)} className="group block border border-linie p-4 hover:border-magenta-ink">
                        <span className="font-semibold group-hover:text-magenta-ink">{b.name}</span>
                        <span className="mt-1 block text-sm text-schiefer">{b.kurz}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <aside className="space-y-10 lg:col-span-5">
            <div className="border-l-2 border-graphit pl-6">
              <h3 className="text-xl font-bold">Genehmigung in {s.name}</h3>
              <p className="mt-3 leading-relaxed text-schiefer">{s.genehmigung}</p>
              <Link href="/ratgeber/kran-genehmigung-strasse/" className="link mt-3 inline-block text-sm font-semibold">
                Mehr zu Genehmigungen
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold">Stadtteile und Umgebung</h3>
              <p className="mt-3 leading-relaxed text-schiefer">
                Wir sind in allen Stadtteilen im Einsatz, etwa in {liste(s.stadtteile)}. Genauso fahren wir in die
                Nachbarorte, zum Beispiel nach {liste(s.nachbarorte)}.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-stein py-16 md:py-24">
        <div className="container-z">
          <SectionHead
            title={`Passende Geräte für ${s.name}`}
            intro="Unsere Empfehlung für die typischen Baustellen vor Ort. Den Rest unserer Flotte finden Sie im Mietpark."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {geraete.map((g) => (
              <li key={g.slug}>
                <GeraetCard g={g} quelle={quelle} />
              </li>
            ))}
          </ul>
          <ul className="mt-10 flex flex-wrap gap-2">
            {kategorien.map((k) => (
              <li key={k.slug}>
                <Link
                  href={anfrageUrl({ kranart: k.slug, quelle })}
                  className="inline-block rounded-[3px] border border-linie bg-white px-3 py-1.5 text-sm font-medium hover:border-magenta-ink"
                >
                  {k.name} in {s.name} anfragen
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-z">
          <SectionHead
            title={lokal.length ? `Projekte in ${s.name}` : "Aktuelle Projekte"}
            intro={lokal.length ? undefined : `Eine Auswahl unserer letzten Einsätze. Projekte aus ${s.name} folgen.`}
          />
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {projekte.map((p) => (
              <li key={p.slug}>
                <ProjektCard p={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-linie py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title={`Fragen zum Kran in ${s.name}`} />
            <p className="mt-8 text-sm font-semibold text-schiefer">Weitere Städte</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {nachbarn.map((n) => (
                <li key={n.slug}>
                  <Link href={stadtUrl(n.slug)} className="link">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={s.faq} />
          </div>
        </div>
      </section>

      <CtaBand title={`Kran in ${s.name} gesucht? Sagen Sie uns, was gehoben werden muss.`} quelle={quelle} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Kran mieten in ${s.name}`,
          serviceType: "Kranvermietung",
          description: s.intro,
          provider: { "@id": `${SITE.url}/#organisation` },
          areaServed: {
            "@type": "City",
            name: s.name,
            containedInPlace: { "@type": "State", name: s.bundesland },
          },
        }}
      />
    </>
  );
}

function liste(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} und ${items[items.length - 1]}`;
}
