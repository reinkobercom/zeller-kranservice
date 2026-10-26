import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs, CtaBand, JsonLd, SectionHead } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns: Familienbetrieb seit 2014 | Zeller Kranservice",
  description:
    "Zeller Kranservice aus Werl: gegründet 2014 von Dirk Zeller, über 1.000 Kraneinsätze pro Jahr, eigene Flotte und eigene Kranführer. Lernen Sie das Team kennen.",
  alternates: { canonical: "/ueber-uns/" },
};

const TEAM = [
  { name: "Dirk Zeller", rolle: "Geschäftsführer und Kranführer", bild: IMG.teamDirk },
  { name: "Barbara Zeller-Jolmes", rolle: "Büromanagement", bild: IMG.teamBarbara },
  { name: "Nico", rolle: "Kranführer", bild: IMG.teamNico },
  { name: "Matthias", rolle: "Kranführer", bild: IMG.teamMatthias },
  { name: "Jens", rolle: "Kranführer", bild: IMG.teamJens },
];

const FAKTEN = [
  ["Gegründet", `${SITE.gegruendet} von Dirk Zeller in Werl`],
  ["Einsätze", `${SITE.einsaetzeProJahr} pro Jahr`],
  ["Flotte", "5 Autokrane, 12 Anhängerkrane, Minikran, Hubsteiger, Raupen- und Scherenbühne, Glashebegerät"],
  ["Einsatzgebiet", "Deutschlandweit, Schwerpunkt NRW"],
  ["Leistungen", "Beratung, Baustellenbesichtigung, Einsatzplanung, Genehmigungen, Kraneinsatz mit Kranführer"],
  ["Rückruf", SITE.rueckruf],
  ["Adresse", `${SITE.strasse}, ${SITE.plz} ${SITE.ort}`],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Über uns", href: "/ueber-uns/" }]} />
      <section className="container-z grid gap-12 py-10 md:py-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHead
            as="h1"
            title="Ein Familienbetrieb, der selbst im Kran sitzt"
            intro={`Dirk Zeller hat Zeller Kranservice ${SITE.gegruendet} in Werl gegründet. Heute fahren wir ${SITE.einsaetzeProJahr} Einsätze im Jahr, in ganz Deutschland. Geändert hat sich daran eines nicht: Der Chef sitzt bis heute selbst im Kran.`}
          />
          <div className="mt-8 space-y-4 text-lg leading-relaxed">
            <p>
              Jeder Einsatz beginnt bei uns mit einem Gespräch und, wo nötig, mit einer Besichtigung der Baustelle. Wir
              schauen uns Zufahrt, Untergrund und Hindernisse an, bevor wir ein Gerät empfehlen. Die Bürokratie mit Behörden
              und Straßensperrungen übernehmen wir.
            </p>
            <p>
              Unsere Geräte gehören uns und werden von uns gewartet. Unsere Kranführer kennen sie genau. Das macht Einsätze
              planbar, auch wenn es eng wird.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-stein lg:col-span-6">
          <Image src={IMG.mkg1251} alt="Autokran von Zeller Kranservice" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-stein py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title="Zeller Kranservice in Zahlen und Fakten" />
          </div>
          <dl className="divide-y divide-linie border-y border-linie lg:col-span-8">
            {FAKTEN.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-schiefer">{k}</dt>
                <dd className="text-lg font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-z">
          <SectionHead title="Das Team" intro="Ihre Ansprechpartner im Büro und auf der Baustelle." />
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((t) => (
              <li key={t.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-stein">
                  <Image src={t.bild} alt={t.name} fill sizes="(min-width:1024px) 18vw, 45vw" className="object-cover" />
                </div>
                <p className="mt-3 font-semibold">{t.name}</p>
                <p className="text-sm text-schiefer">{t.rolle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-linie py-16 md:py-24">
        <div className="container-z grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Kranführer gesucht</h2>
            <p className="mt-3 leading-relaxed text-schiefer">
              Sie fahren gern Kran und wollen in einem kleinen Team mit moderner Flotte arbeiten? Rufen Sie Dirk Zeller an
              oder schreiben Sie uns.
            </p>
            <a href={`mailto:${SITE.email}?subject=Bewerbung%20Kranf%C3%BChrer`} className="link mt-4 inline-block font-semibold">
              Bewerbung per E-Mail
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Auch von Zeller: PV-Anlagen-Reinigung</h2>
            <p className="mt-3 leading-relaxed text-schiefer">
              Mit einem eigenen Reinigungssystem säubern wir Photovoltaikanlagen in kurzer Zeit.
            </p>
            <a href={SITE.pvReinigung} target="_blank" rel="noopener" className="link mt-4 inline-block font-semibold">
              Zur PV-Anlagen-Reinigung
            </a>
          </div>
        </div>
      </section>

      <CtaBand quelle="ueber-uns" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE.url}/ueber-uns/`,
          mainEntity: { "@id": `${SITE.url}/#organisation` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dirk Zeller",
          jobTitle: "Geschäftsführer und Kranführer",
          worksFor: { "@id": `${SITE.url}/#organisation` },
          image: IMG.teamDirk,
        }}
      />
    </>
  );
}
