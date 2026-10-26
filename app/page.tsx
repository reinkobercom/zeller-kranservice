import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { kategorien } from "@/data/kategorien";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { projekteSortiert } from "@/data/projekte";
import { staedte } from "@/data/staedte";
import { artikel } from "@/data/ratgeber";
import { HeightRuler } from "@/components/HeightRuler";
import { ProjektSlider } from "@/components/ProjektSlider";
import { ProjektCard } from "@/components/cards";
import { CtaBand, FaqList, SectionHead } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { anfrageUrl, artikelUrl, bereichUrl, stadtUrl } from "@/lib/links";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = {
  title: "Kran mieten mit Kranführer, deutschlandweit | Zeller Kranservice",
  description:
    "Kran mieten bei Zeller Kranservice aus Werl: Autokrane bis 52 m, Anhängerkrane, Minikran, Hubsteiger, Arbeitsbühnen. Mit Kranführer, Planung und Genehmigung. Rückruf in 24 h.",
  alternates: { canonical: "/" },
};

const TEAM = [
  { name: "Dirk Zeller", rolle: "Geschäftsführer und Kranführer", bild: IMG.teamDirk },
  { name: "Barbara Zeller-Jolmes", rolle: "Büromanagement", bild: IMG.teamBarbara },
  { name: "Nico", rolle: "Kranführer", bild: IMG.teamNico },
  { name: "Matthias", rolle: "Kranführer", bild: IMG.teamMatthias },
  { name: "Jens", rolle: "Kranführer", bild: IMG.teamJens },
];

const ABLAUF = [
  {
    titel: "Anfrage und Beratung",
    text: "Sie schildern kurz, was gehoben werden muss. Wir rufen innerhalb von 24 Stunden zurück und besichtigen bei Bedarf die Baustelle.",
  },
  {
    titel: "Planung und Genehmigung",
    text: "Wir wählen das passende Gerät, prüfen Stellfläche und Untergrund und beantragen Straßensperrung und Sondernutzung.",
  },
  {
    titel: "Einsatz mit Kranführer",
    text: "Unser Kranführer kommt pünktlich, baut auf und hebt sicher. Anhängerkrane können Sie auch selbst bedienen.",
  },
];

const FAQ: Faq[] = [
  {
    frage: "Was kostet es, einen Kran zu mieten?",
    antwort:
      "Der Preis hängt vom Gerät, der Einsatzdauer, der Anfahrt und von Genehmigungen ab. Wir erstellen Ihnen ein individuelles Angebot. Je genauer Ihre Angaben zu Last, Höhe und Einsatzort sind, desto schneller geht es.",
  },
  {
    frage: "Mieten Sie Krane mit Kranführer?",
    antwort:
      "Ja. Autokrane, Minikran und Hubsteiger kommen mit eigenem Kranführer bzw. Bediener. Anhängerkrane können Sie auch ohne Fahrer mieten.",
  },
  {
    frage: "In welchem Gebiet ist Zeller Kranservice im Einsatz?",
    antwort:
      "Deutschlandweit. Unser Firmensitz ist in Werl, die meisten Einsätze fahren wir in NRW. Für geplante Projekte kommen wir auch nach Berlin, Hamburg, München und in jede andere Region.",
  },
  {
    frage: "Kümmern Sie sich um die Genehmigungen?",
    antwort:
      "Ja. Steht der Kran auf öffentlichem Grund, beantragen wir Sondernutzungserlaubnis und Verkehrsanordnung bei der Stadt. Planen Sie dafür je nach Kommune einige Werktage bis wenige Wochen Vorlauf ein.",
  },
  {
    frage: "Wie schnell bekomme ich eine Rückmeldung?",
    antwort: `Wir rufen ${SITE.rueckruf} zurück. Für dringende Fragen erreichen Sie unser Büro ${SITE.buerozeiten} unter ${SITE.telefon}.`,
  },
  {
    frage: "Was passiert, wenn ich einen Termin absagen muss?",
    antwort: SITE.stornoHinweis,
  },
];

export default function Home() {
  const projekte = projekteSortiert();
  const nrw = staedte.filter((s) => s.region === "nrw");
  const de = staedte.filter((s) => s.region === "deutschland");

  return (
    <>
      {/* HERO */}
      <section className="border-b border-linie">
        <div className="container-z grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-schiefer">Kranvermietung aus Werl, deutschlandweit im Einsatz</p>
            <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-[3.4rem] xl:text-[4.4rem]">
              Kran mieten. Mit Kranführer, Planung und Genehmigung.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-schiefer">
              Vom Minikran, der durch Türen passt, bis zum Autokran mit 52 m Hakenhöhe: Zeller Kranservice hebt seit{" "}
              {SITE.gegruendet} mit eigener Flotte und eigenen Kranführern. Wir rufen {SITE.rueckruf} zurück.
            </p>

            <div className="mt-10">
              <h2 className="text-lg font-semibold">Welches Gerät brauchen Sie?</h2>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {kategorien.map((k) => (
                  <li key={k.slug}>
                    <Link
                      href={anfrageUrl({ kranart: k.slug, quelle: "startseite-hero" })}
                      className="flex h-full min-h-[4.25rem] flex-col justify-center rounded-[3px] border border-linie px-4 py-3 transition-colors hover:border-magenta-ink hover:bg-stein"
                    >
                      <span className="font-semibold">{k.name}</span>
                      <span className="text-sm text-schiefer">{k.kennzahl}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={anfrageUrl({ quelle: "startseite-hero-beratung" })}
                className="mt-3 inline-block font-semibold text-magenta-ink underline underline-offset-4"
              >
                Weiß ich noch nicht, bitte beraten Sie mich
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-linie pt-6">
              <div>
                <dt className="text-sm text-schiefer">Im Einsatz seit</dt>
                <dd className="text-2xl font-bold">{SITE.gegruendet}</dd>
              </div>
              <div>
                <dt className="text-sm text-schiefer">Einsätze pro Jahr</dt>
                <dd className="text-2xl font-bold">1.000+</dd>
              </div>
              <div>
                <dt className="text-sm text-schiefer">Rückruf</dt>
                <dd className="text-2xl font-bold">in 24 h</dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden lg:col-span-6 lg:min-h-[44rem]">
            <Image
              src={IMG.mkgHalle}
              alt="MKG-Autokran von Zeller Kranservice montiert eine Stahlhalle"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 right-0 w-[11rem] sm:w-[13.5rem]">
              <HeightRuler />
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTE */}
      <section className="bg-bordeaux py-20 text-white md:py-28" aria-labelledby="projekte-titel">
        <div className="container-z">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              id="projekte-titel"
              light
              title="Zuletzt gehoben"
              intro={`Über 1.000 Einsätze pro Jahr, vom Hallenbau bis zur Glasscheibe im Wohnzimmer. Eine Auswahl unserer letzten Projekte.`}
            />
            <Link href="/projekte/" className="btn btn-outline-light self-start md:self-auto">
              Alle Projekte
            </Link>
          </div>
          <ProjektSlider label="Letzte Projekte von Zeller Kranservice">
            {projekte.map((p) => (
              <ProjektCard key={p.slug} p={p} dark />
            ))}
          </ProjektSlider>
        </div>
      </section>

      {/* MIETPARK */}
      <section className="py-20 md:py-28" aria-labelledby="mietpark-titel">
        <div className="container-z">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              id="mietpark-titel"
              title="Unser Mietpark"
              intro="Sechs Gerätearten, alle im eigenen Bestand und regelmäßig gewartet. Wählen Sie nach Höhe, Last und Platz auf Ihrer Baustelle."
            />
            <Link href="/mietpark/" className="btn btn-secondary self-start md:self-auto">
              Alle Geräte vergleichen
            </Link>
          </div>
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {kategorien.map((k) => (
              <li key={k.slug} className="group">
                <Link href={`/${k.urlSlug}/`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stein">
                    <Image
                      src={k.bild}
                      alt={`${k.name} mieten bei Zeller Kranservice`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-magenta-ink">{k.kennzahl}</p>
                  <h3 className="mt-1 text-xl font-bold group-hover:text-magenta-ink">{k.name} mieten</h3>
                  <p className="mt-1 text-schiefer">{k.kurz}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EINSATZBEREICHE */}
      <section className="bg-stein py-20 md:py-28" aria-labelledby="bereiche-titel">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead
              id="bereiche-titel"
              title="Wofür Sie uns buchen"
              intro="Für jedes Gewerk das passende Gerät. Wählen Sie Ihren Einsatz und sehen Sie, welcher Kran passt und wie der Ablauf ist."
            />
          </div>
          <ul className="grid gap-px bg-linie sm:grid-cols-2 lg:col-span-8">
            {einsatzbereiche.map((b) => (
              <li key={b.slug} className="bg-stein">
                <Link href={bereichUrl(b.slug)} className="group flex h-full flex-col bg-white p-6 hover:bg-white/60">
                  <h3 className="text-lg font-bold group-hover:text-magenta-ink">{b.name}</h3>
                  <p className="mt-1 text-sm text-schiefer">{b.kurz}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-20 md:py-28" aria-labelledby="ablauf-titel">
        <div className="container-z">
          <SectionHead
            id="ablauf-titel"
            title="So läuft Ihr Kraneinsatz"
            intro="Sie sagen uns, was gehoben werden muss. Um Planung, Technik und Behörden kümmern wir uns."
          />
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {ABLAUF.map((s, i) => (
              <li key={s.titel} className="border-t-2 border-graphit pt-6">
                <span className="text-sm font-semibold text-magenta-ink">Schritt {i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{s.titel}</h3>
                <p className="mt-3 leading-relaxed text-schiefer">{s.text}</p>
              </li>
            ))}
          </ol>
          <Link href={anfrageUrl({ quelle: "startseite-ablauf" })} className="btn btn-primary mt-12">
            Kran anfragen
          </Link>
        </div>
      </section>

      {/* TEAM & FAKTEN */}
      <section className="border-t border-linie py-20 md:py-28" aria-labelledby="team-titel">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              id="team-titel"
              title="Ein Familienbetrieb mit eigenen Kranführern"
              intro={`Dirk Zeller hat das Unternehmen ${SITE.gegruendet} gegründet und sitzt bis heute selbst im Kran. Unsere Kranführer kennen die Geräte, mit denen sie arbeiten, und jede Baustelle wird vorher geplant.`}
            />
            <dl className="mt-10 divide-y divide-linie border-y border-linie">
              {[
                ["Gegründet", `${SITE.gegruendet} in Werl`],
                ["Einsätze pro Jahr", SITE.einsaetzeProJahr],
                ["Geräte", "12 Anhängerkrane, 5 Autokrane, Minikran, Hubsteiger, Bühnen, Glashebegerät"],
                ["Einsatzgebiet", "Deutschlandweit, Schwerpunkt NRW"],
                ["Genehmigungen", "beantragen wir für Sie"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 py-3">
                  <dt className="text-schiefer">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/ueber-uns/" className="link mt-6 inline-block font-semibold">
              Mehr über uns
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:col-span-7">
            {TEAM.map((t) => (
              <li key={t.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-stein">
                  <Image src={t.bild} alt={t.name} fill sizes="(min-width: 1024px) 18vw, 45vw" className="object-cover" />
                </div>
                <p className="mt-3 font-semibold">{t.name}</p>
                <p className="text-sm text-schiefer">{t.rolle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section className="bg-graphit py-16 text-white" aria-labelledby="bewertung-titel">
        <div className="container-z flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 id="bewertung-titel" className="text-2xl font-bold md:text-3xl">
              Was unsere Kunden sagen
            </h2>
            <p className="mt-3 text-white/75">
              Unsere Kunden bewerten uns unabhängig auf ProvenExpert und Google. Lesen Sie die Erfahrungen von Bauherren,
              Dachdeckern und Glasbauern.
            </p>
          </div>
          <a href={SITE.provenExpert} target="_blank" rel="noopener" className="btn btn-outline-light self-start">
            Bewertungen lesen
          </a>
        </div>
      </section>

      {/* EINSATZGEBIET */}
      <section className="py-20 md:py-28" aria-labelledby="gebiet-titel">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              id="gebiet-titel"
              title="Von Werl aus in ganz Deutschland"
              intro="Unser Hof liegt zwischen Ruhrgebiet, Sauerland und Münsterland. In NRW sind wir oft am selben oder nächsten Tag vor Ort, bundesweit planen wir die Anreise mit Ihnen."
            />
            <Link href="/einsatzgebiet/" className="btn btn-secondary mt-8">
              Zum Einsatzgebiet
            </Link>
          </div>
          <div className="grid gap-10 lg:col-span-7">
            <div>
              <h3 className="mb-4 border-b-2 border-graphit pb-3 font-bold">Kran mieten in NRW</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                {nrw.map((s) => (
                  <li key={s.slug}>
                    <Link href={stadtUrl(s.slug)} className="hover:text-magenta-ink hover:underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 border-b-2 border-graphit pb-3 font-bold">Kran mieten deutschlandweit</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                {de.map((s) => (
                  <li key={s.slug}>
                    <Link href={stadtUrl(s.slug)} className="hover:text-magenta-ink hover:underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RATGEBER */}
      <section className="bg-stein py-20 md:py-28" aria-labelledby="ratgeber-titel">
        <div className="container-z">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead id="ratgeber-titel" title="Ratgeber" intro="Antworten auf die Fragen, die uns am häufigsten gestellt werden." />
            <Link href="/ratgeber/" className="btn btn-secondary self-start md:self-auto">
              Alle Artikel
            </Link>
          </div>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {artikel.map((a) => (
              <li key={a.slug} className="group relative bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={a.bild} alt="" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-snug group-hover:text-magenta-ink">
                    <Link href={artikelUrl(a.slug)} className="after:absolute after:inset-0">
                      {a.titel}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-schiefer">{a.lesezeitMin} Minuten Lesezeit</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" aria-labelledby="faq-titel">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead id="faq-titel" title="Häufige Fragen" />
            <p className="mt-4 text-schiefer">
              Ihre Frage ist nicht dabei? Rufen Sie uns an:{" "}
              <a href={SITE.telefonHref} className="link whitespace-nowrap font-semibold">
                {SITE.telefon}
              </a>
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>

      <CtaBand quelle="startseite-abschluss" />
    </>
  );
}
