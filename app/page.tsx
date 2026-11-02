import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { kategorien, kategorieBySlug } from "@/data/kategorien";
import { geraete } from "@/data/geraete";
import { fmt } from "@/components/pages/KategorieSeite";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { projekteSortiert } from "@/data/projekte";
import { staedte } from "@/data/staedte";
import { ProjektSlider } from "@/components/ProjektSlider";
import { Trustindex } from "@/components/Trustindex";
import { ProjektCard } from "@/components/cards";
import { CtaBand, FaqList, SectionHead } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { anfrageUrl, bereichUrl, geraetUrl, stadtUrl } from "@/lib/links";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = {
  title: "Kran mieten mit Kranführer, deutschlandweit | Zeller Kranservice",
  description:
    "Kran mieten bei Zeller Kranservice aus Werl: Autokrane bis 53 m, Anhängerkrane, Minikran, Hubsteiger, Arbeitsbühnen. Mit Kranführer, Planung und Genehmigung. Rückruf in 24 h.",
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
  const flotte = geraete.filter((g) => g.verfuegbar);
  const nrw = staedte.filter((s) => s.region === "nrw");
  const de = staedte.filter((s) => s.region === "deutschland");

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-graphit text-white">
        {/* Ab Desktop ist das Bild etwas breiter als der Bildschirm, damit der
            Minikran rechts steht und nicht hinter dem Text. */}
        <div aria-hidden className="absolute inset-y-0 left-0 -z-10 w-full lg:w-[122%]">
          <Image
            src={IMG.heroSonne}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 122vw, 100vw"
            className="object-cover object-[60%_55%] lg:object-[50%_58%]"
          />
        </div>
        {/* Abdunklung: mobil flächig, ab Desktop nur links hinter dem Text */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-graphit/60 lg:hidden" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgb(42_35_38/0.88)_0%,rgb(42_35_38/0.7)_45%,rgb(42_35_38/0.25)_70%,rgb(42_35_38/0.05)_90%)] lg:block"
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-graphit/50 to-transparent" />

        <div className="container-z grid gap-12 pb-36 pt-14 md:pb-36 md:pt-16 lg:grid-cols-12 lg:pt-14">
          <div className="self-center lg:col-span-9 xl:col-span-8">
            <p className="text-white/85">Familienbetrieb aus Werl, deutschlandweit im Einsatz</p>
            <h1 className="mt-4 max-w-[17ch] text-[2.4rem] font-bold leading-[1.04] sm:text-5xl lg:max-w-none lg:text-[3.3rem] xl:text-[3.6rem]">
              Kran mieten. Mit Kranführer, <br className="hidden lg:block" />
              Planung und Genehmigung.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Sie sagen uns, was gehoben werden muss, wir kümmern uns um den Rest. Vom Minikran, der durch Türen
              passt, bis zum Autokran mit 53 m Hakenhöhe, seit {SITE.gegruendet} mit eigenen Kranführern.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={anfrageUrl({ quelle: "startseite-hero" })} className="btn btn-primary">
                Kran anfragen
              </Link>
              <a href={SITE.telefonHref} className="btn btn-outline-light">
                {SITE.telefon}
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={IMG.teamDirk}
                  alt=""
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-full border-2 border-white/80 object-cover"
                />
                <p className="text-sm leading-snug text-white/85">
                  <span className="font-semibold text-white">Dirk Zeller</span> und Team melden sich
                  <br />
                  {SITE.rueckruf} bei Ihnen, unverbindlich.
                </p>
              </div>
              <Trustindex art="button" className="w-64 shrink-0" minHoehe="3rem" />
            </div>
          </div>

        </div>
      </section>

      {/* GERÄTEWAHL: überlappt den Hero */}
      <section aria-labelledby="geraet-titel" className="relative z-10 -mt-24 pb-16 md:pb-20">
        <div className="container-z">
          <div className="overflow-hidden rounded-2xl border border-linie bg-white shadow-[0_28px_56px_-32px_rgb(42_35_38/0.45)]">
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

      {/* BEWERTUNGEN */}
      <section className="border-b border-linie py-20 md:py-24" aria-labelledby="bewertungen-titel">
        <div className="container-z">
          <SectionHead
            id="bewertungen-titel"
            title="Was unsere Kunden sagen"
            intro="Echte Bewertungen von Bauherren, Handwerksbetrieben und Firmen auf Google."
          />
          <Trustindex art="slider" className="mt-10" minHoehe="16rem" />
        </div>
      </section>

      {/* FLOTTE */}
      <section className="py-20 md:py-28" aria-labelledby="flotte-titel">
        <div className="container-z">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              id="flotte-titel"
              title="Unsere Flotte"
              intro={`${flotte.length} Gerätetypen im eigenen Bestand, gewartet in Werl. Jedes Gerät mit Datenblatt, Lastdiagramm und Projekten.`}
            />
            <Link href="/mietpark/" className="btn btn-secondary self-start md:self-auto">
              Alle Geräte vergleichen
            </Link>
          </div>

          <div className="hidden grid-cols-[7rem_1.6fr_1fr_1fr_1fr_1.5rem] gap-6 pb-3 text-sm text-schiefer md:grid">
            <span />
            <span>Gerät</span>
            <span>Höhe</span>
            <span>Max. Last</span>
            <span>Bedienung</span>
            <span />
          </div>
          <ul className="border-t border-graphit">
            {flotte.map((g) => {
              const korb = g.specs.find((x) => /Korb/.test(x.label))?.wert;
              return (
                <li key={g.slug} className="border-b border-linie">
                  <Link
                    href={geraetUrl(g)}
                    className="group grid grid-cols-[5rem_1fr_1.5rem] items-center gap-x-5 gap-y-1 py-3 transition-colors hover:bg-stein md:grid-cols-[7rem_1.6fr_1fr_1fr_1fr_1.5rem] md:gap-x-6"
                  >
                    <span className="relative row-span-2 block aspect-[3/2] overflow-hidden bg-stein md:row-span-1">
                      <Image src={g.bilder[0]} alt="" fill sizes="112px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-semibold group-hover:text-magenta-ink">{g.name}</span>
                      <span className="block text-sm text-schiefer">{kategorieBySlug(g.kategorie).name}</span>
                    </span>
                    <span className="hidden md:block">
                      {g.hakenhoeheM ? `${fmt(g.hakenhoeheM)} m` : g.arbeitshoeheM ? `${fmt(g.arbeitshoeheM)} m Arbeitshöhe` : "–"}
                    </span>
                    <span className="hidden md:block">{g.lastText ?? (g.tragkraftT ? `${fmt(g.tragkraftT)} t` : korb ? `${korb} im Korb` : "–")}</span>
                    <span className="hidden text-schiefer md:block">
                      {g.mitFahrer === "immer" ? "mit Kranführer" : "mit oder ohne"}
                    </span>
                    <svg
                      aria-hidden
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="row-span-2 justify-self-end text-magenta-ink transition-transform group-hover:translate-x-1 md:row-span-1"
                    >
                      <path d="M3 8h9M8 3.5 12.5 8 8 12.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
                    </svg>
                    <span className="text-sm text-schiefer md:hidden">
                      {g.hakenhoeheM ? `${fmt(g.hakenhoeheM)} m` : `${fmt(g.arbeitshoeheM ?? 0)} m`}
                      {g.tragkraftT ? `, ${fmt(g.tragkraftT)} t` : ""}
                    </span>
                  </Link>
                </li>
              );
            })}
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
      <section className="bg-rose py-20 md:py-28" aria-labelledby="ablauf-titel">
        <div className="container-z">
          <SectionHead
            id="ablauf-titel"
            title="So läuft Ihr Kraneinsatz"
            intro="Sie sagen uns, was gehoben werden muss. Um Planung, Technik und Behörden kümmern wir uns."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {ABLAUF.map((s, i) => (
              <li key={s.titel} className="rounded-2xl bg-white p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-magenta-ink font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.titel}</h3>
                <p className="mt-3 leading-relaxed text-schiefer">{s.text}</p>
              </li>
            ))}
          </ol>
          <Link href={anfrageUrl({ quelle: "startseite-ablauf" })} className="btn btn-primary mt-12">
            Kran anfragen
          </Link>
        </div>
      </section>

      {/* PERSÖNLICH: Dirk Zeller und Team */}
      <section className="py-20 md:py-28" aria-labelledby="team-titel">
        <div className="container-z grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stein lg:col-span-5">
            <Image
              src={IMG.teamDirk}
              alt="Dirk Zeller, Geschäftsführer und Kranführer"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 id="team-titel" className="text-3xl font-bold leading-[1.1] md:text-[2.6rem]">
              Ein Familienbetrieb, bei dem der Chef selbst im Kran sitzt
            </h2>
            <blockquote className="mt-8 border-l-4 border-magenta pl-6">
              <p className="text-xl leading-relaxed md:text-2xl">
                „Jedes Projekt beginnt bei uns mit einem Gespräch und, wenn nötig, mit einem Blick auf die Baustelle. Rufen
                Sie mich einfach an.“
              </p>
              <footer className="mt-4 text-schiefer">
                <span className="font-semibold text-graphit">Dirk Zeller</span>, Gründer {SITE.gegruendet}, Geschäftsführer
                und Kranführer
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.telefonHref} className="btn btn-primary">
                {SITE.telefon} anrufen
              </a>
              <Link href="/ueber-uns/" className="btn btn-secondary">
                Mehr über uns
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-6 border-t border-linie pt-8 sm:grid-cols-4">
              {TEAM.filter((t) => t.name !== "Dirk Zeller").map((t) => (
                <li key={t.name} className="flex items-center gap-3">
                  <Image src={t.bild} alt="" width={112} height={112} className="h-14 w-14 shrink-0 rounded-full object-cover" />
                  <span className="leading-tight">
                    <span className="block font-semibold">{t.name.split(" ")[0]}</span>
                    <span className="block text-sm text-schiefer">{t.rolle}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-schiefer">
              {SITE.einsaetzeProJahr} Einsätze im Jahr, 6 Autokrane, 12 Anhängerkrane und Spezialgeräte im eigenen Bestand.{" "}
              <a href={SITE.provenExpert} target="_blank" rel="noopener" className="link">
                Kundenbewertungen lesen
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* EINSATZGEBIET */}
      <section className="bg-stein py-20 md:py-28" aria-labelledby="gebiet-titel">
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
