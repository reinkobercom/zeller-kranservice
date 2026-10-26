import type { Metadata } from "next";
import Link from "next/link";
import { staedte } from "@/data/staedte";
import { Breadcrumbs, CtaBand, FaqList, JsonLd, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";
import { stadtUrl } from "@/lib/links";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = {
  title: "Einsatzgebiet: Kran mieten deutschlandweit | Zeller Kranservice",
  description:
    "Zeller Kranservice aus Werl ist deutschlandweit im Einsatz, mit Schwerpunkt NRW. Städte, Entfernungen und wie wir Einsätze in ganz Deutschland planen.",
  alternates: { canonical: "/einsatzgebiet/" },
};

const ZONEN = [
  {
    titel: "Rund um Werl",
    bis: 40,
    text: "Kurze Anfahrt, oft kurzfristige Termine. Hier sind wir am häufigsten im Einsatz.",
  },
  {
    titel: "Nordrhein-Westfalen",
    bis: 150,
    text: "Ruhrgebiet, Sauerland, Münsterland, Rheinland und Ostwestfalen erreichen wir meist innerhalb weniger Stunden.",
  },
  {
    titel: "Ganz Deutschland",
    bis: 1000,
    text: "Für geplante Projekte kommen wir bundesweit. Anreise und Übernachtung des Kranführers planen wir mit ein.",
  },
];

const FAQ: Faq[] = [
  {
    frage: "Fährt Zeller Kranservice wirklich deutschlandweit?",
    antwort:
      "Ja. Unser Firmensitz ist in Werl, wir übernehmen aber Einsätze in ganz Deutschland. Je weiter der Einsatzort entfernt ist, desto früher sollten Sie anfragen.",
  },
  {
    frage: "Kostet ein Einsatz weiter weg mehr?",
    antwort:
      "Die Anfahrt ist Teil des Angebots. Bei längeren Projekten oder mehreren Einsätzen in einer Region lässt sich die Anreise oft bündeln. Wir besprechen das mit Ihnen.",
  },
  {
    frage: "Wie früh muss ich für einen Einsatz außerhalb von NRW anfragen?",
    antwort:
      "So früh wie möglich, ideal mit einigen Wochen Vorlauf. Dann können wir Gerät, Kranführer und Genehmigungen sicher planen.",
  },
];

export default function Page() {
  const sortiert = [...staedte].sort((a, b) => a.luftlinieKm - b.luftlinieKm);
  return (
    <>
      <Breadcrumbs items={[{ name: "Einsatzgebiet", href: "/einsatzgebiet/" }]} />
      <section className="container-z py-10 md:py-14">
        <SectionHead
          as="h1"
          title="Kran mieten in ganz Deutschland"
          intro={`Zeller Kranservice sitzt in Werl zwischen Ruhrgebiet, Sauerland und Münsterland. Von hier fahren wir mit eigener Flotte und eigenen Kranführern zu Einsätzen in ganz Deutschland, ${SITE.einsaetzeProJahr} im Jahr.`}
        />

        <ol className="mt-14 grid gap-px bg-linie md:grid-cols-3">
          {ZONEN.map((z, i) => {
            const vorher = i === 0 ? -1 : ZONEN[i - 1].bis;
            const liste = sortiert.filter((s) => s.luftlinieKm > vorher && s.luftlinieKm <= z.bis);
            return (
              <li key={z.titel} className="bg-white p-6 md:p-8">
                <p className="text-sm font-semibold text-magenta-ink">
                  {i === 0 ? `bis ${z.bis} km` : i === 1 ? `bis ${z.bis} km` : `über ${ZONEN[1].bis} km`}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{z.titel}</h2>
                <p className="mt-3 text-schiefer">{z.text}</p>
                <ul className="mt-6 divide-y divide-linie border-t border-linie">
                  {liste.map((s) => (
                    <li key={s.slug} className="flex items-baseline justify-between gap-4 py-2.5">
                      <Link href={stadtUrl(s.slug)} className="font-medium hover:text-magenta-ink hover:underline">
                        Kran mieten {s.name}
                      </Link>
                      <span className="shrink-0 text-sm tabular-nums text-schiefer">
                        {s.luftlinieKm === 0 ? "Sitz" : `${s.luftlinieKm} km`}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-sm text-schiefer">Entfernungen als Luftlinie ab Werl, gerundet.</p>
      </section>

      <section className="bg-stein py-16 md:py-24">
        <div className="container-z grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold leading-tight">Ihre Stadt fehlt?</h2>
            <p className="mt-4 text-lg leading-relaxed text-schiefer">
              Die Liste zeigt nur Städte, für die wir eigene Seiten haben. Wir fahren auch überall dazwischen hin. Nennen Sie
              uns einfach Ihren Einsatzort in der Anfrage.
            </p>
          </div>
          <div className="lg:col-span-7">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>

      <CtaBand quelle="einsatzgebiet" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kranvermietung deutschlandweit",
          provider: { "@id": `${SITE.url}/#organisation` },
          areaServed: [{ "@type": "Country", name: "Deutschland" }, ...staedte.map((s) => ({ "@type": "City", name: s.name }))],
        }}
      />
    </>
  );
}
