import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { kategorien } from "@/data/kategorien";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { projekteSortiert } from "@/data/projekte";
import { staedte } from "@/data/staedte";
import { HeightRuler } from "@/components/HeightRuler";
import { ProjektSlider } from "@/components/ProjektSlider";
import { ProjektCard } from "@/components/cards";
import { CtaBand, FaqList, SectionHead } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { anfrageUrl, bereichUrl, stadtUrl } from "@/lib/links";
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
      <section className="relative isolate overflow-hidden bg-graphit text-white">
        <Image
          src={IMG.heroKran}
          alt="Autokran von Zeller Kranservice bei der Montage einer Stahlhalle"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[50%_35%]"
        />
        {/* Abdunklung: mobil flächig, ab Desktop von links (Text) und rechts (Skala) */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-graphit/65 lg:hidden" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgb(24_26_29/0.9)_0%,rgb(24_26_29/0.7)_34%,rgb(24_26_29/0.15)_60%,rgb(24_26_29/0.2)_76%,rgb(24_26_29/0.55)_100%)] lg:block"
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-graphit/60 to-transparent" />

        <div className="container-z grid min-h-[min(86svh,50rem)] gap-12 pb-36 pt-16 md:pb-40 md:pt-24 lg:grid-cols-12">
          <div className="self-center lg:col-span-7">
            <p className="text-white/80">Kranvermietung aus Werl, deutschlandweit im Einsatz</p>
            <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.02] sm:text-6xl xl:text-[4.6rem]">
              Kran mieten. Mit Kranführer, Planung und Genehmigung.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Vom Minikran, der durch Türen passt, bis zum Autokran mit 52 m Hakenhöhe. Seit {SITE.gegruendet} mit
              eigener Flotte und eigenen Kranführern, {SITE.einsaetzeProJahr} Einsätze im Jahr.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={anfrageUrl({ quelle: "startseite-hero" })} className="btn btn-primary">
                Kran anfragen
              </Link>
              <a href={SITE.telefonHref} className="btn btn-outline-light">
                {SITE.telefon}
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">Unverbindlich. Wir rufen Sie {SITE.rueckruf} zurück.</p>
          </div>

          <div className="relative hidden lg:col-span-3 lg:col-start-10 lg:block lg:pt-14">
            <HeightRuler />
          </div>
        </div>
      </section>

      {/* GERÄTEWAHL: überlappt den Hero */}
      <section aria-labelledby="geraet-titel" className="relative z-10 -mt-24 pb-20 md:pb-28">
        <div className="container-z">
          <div className="border border-linie bg-white shadow-[0_28px_56px_-32px_rgb(33_36_40/0.45)]">
            <div className="flex flex-col gap-2 border-b border-linie px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <h2 id="geraet-titel" className="font-semibold">
                Welches Gerät brauchen Sie?
              </h2>
              <Link
                href={anfrageUrl({ quelle: "startseite-geraetewahl-beratung" })}
                className="text-sm font-semibold text-magenta-ink underline-offset-4 hover:underline"
              >
                Weiß ich noch nicht, bitte beraten
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-linie sm:grid-cols-3 lg:grid-cols-6">
              {kategorien.map((k) => (
                <li key={k.slug} className="bg-white">
                  <Link
                    href={anfrageUrl({ kranart: k.slug, quelle: "startseite-geraetewahl" })}
                    className="group relative flex h-full flex-col justify-between gap-6 px-5 py-5 transition-colors hover:bg-stein md:px-6"
                  >
                    <span className="text-sm text-schiefer">{k.kennzahl}</span>
                    <span className="flex items-center justify-between gap-2 text-lg font-semibold">
                      {k.name}
                      <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" className="shrink-0 text-magenta-ink transition-transform group-hover:translate-x-1">
                        <path d="M3 8h9M8 3.5 12.5 8 8 12.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
                      </svg>
                    </span>
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] scale-x-0 bg-magenta transition-transform group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
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
          <ul className="grid border-t border-graphit sm:grid-cols-2 sm:gap-x-10 lg:col-span-8">
            {einsatzbereiche.map((b) => (
              <li key={b.slug} className="border-b border-graphit/15">
                <Link href={bereichUrl(b.slug)} className="group flex items-center justify-between gap-6 py-5">
                  <span>
                    <span className="block text-lg font-semibold group-hover:text-magenta-ink">{b.name}</span>
                    <span className="mt-0.5 block text-sm text-schiefer">{b.kurz}</span>
                  </span>
                  <svg aria-hidden width="18" height="18" viewBox="0 0 16 16" className="shrink-0 text-magenta-ink transition-transform group-hover:translate-x-1">
                    <path d="M3 8h9M8 3.5 12.5 8 8 12.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
                  </svg>
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
      <section className="bg-stein py-20 md:py-28" aria-labelledby="team-titel">
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
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <Link href="/ueber-uns/" className="link">
                Mehr über uns
              </Link>
              <a href={SITE.provenExpert} target="_blank" rel="noopener" className="link">
                Kundenbewertungen auf ProvenExpert
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:col-span-7">
            {TEAM.map((t) => (
              <li key={t.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-linie">
                  <Image src={t.bild} alt={t.name} fill sizes="(min-width: 1024px) 18vw, 45vw" className="object-cover" />
                </div>
                <p className="mt-3 font-semibold">{t.name}</p>
                <p className="text-sm text-schiefer">{t.rolle}</p>
              </li>
            ))}
          </ul>
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

      {/* FAQ */}
      <section className="border-t border-linie py-20 md:py-28" aria-labelledby="faq-titel">
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
