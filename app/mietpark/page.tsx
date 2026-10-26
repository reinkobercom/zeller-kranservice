import type { Metadata } from "next";
import Link from "next/link";
import { geraete } from "@/data/geraete";
import { kategorien, kategorieBySlug } from "@/data/kategorien";
import { GeraetCard } from "@/components/cards";
import { MietparkFilter } from "@/components/MietparkFilter";
import { fmt } from "@/components/pages/KategorieSeite";
import { Breadcrumbs, CtaBand, JsonLd, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";
import { anfrageUrl, geraetUrl } from "@/lib/links";

export const metadata: Metadata = {
  title: "Mietpark: alle Krane und Bühnen im Vergleich | Zeller Kranservice",
  description:
    "Alle Mietgeräte von Zeller Kranservice im Überblick: 5 Autokrane bis 52 m, 12 Anhängerkrane, Minikran, Hubsteiger, Raupen- und Scherenbühne, Glashebegerät. Mit Filter und Vergleich.",
  alternates: { canonical: "/mietpark/" },
};

const ENTSCHEIDUNG = [
  { frage: "Wenig Platz oder Arbeiten im Gebäude?", antwort: "Minikran oder Glashebegerät", kat: "minikran" as const },
  { frage: "Material aufs Dach, mehrere Tage?", antwort: "Anhängerkran, auch ohne Fahrer", kat: "anhaengerkran" as const },
  { frage: "Schwere Lasten, große Höhe oder über ein Haus?", antwort: "Autokran", kat: "autokran" as const },
  { frage: "Menschen in die Höhe bringen, kein Gerüst?", antwort: "Hubsteiger oder Arbeitsbühne", kat: "hubsteiger" as const },
];

export default function MietparkPage() {
  const sortiert = [...geraete].sort(
    (a, b) =>
      kategorien.findIndex((k) => k.slug === a.kategorie) - kategorien.findIndex((k) => k.slug === b.kategorie) ||
      Number(b.verfuegbar) - Number(a.verfuegbar) ||
      (b.hakenhoeheM ?? b.arbeitshoeheM ?? 0) - (a.hakenhoeheM ?? a.arbeitshoeheM ?? 0),
  );
  const cards = Object.fromEntries(sortiert.map((g) => [g.slug, <GeraetCard key={g.slug} g={g} quelle="mietpark" />]));
  const verfuegbar = sortiert.filter((g) => g.verfuegbar);

  return (
    <>
      <Breadcrumbs items={[{ name: "Mietpark", href: "/mietpark/" }]} />
      <section className="container-z py-10 md:py-14">
        <SectionHead
          as="h1"
          title="Unser Mietpark"
          intro="Alle Geräte gehören uns, werden in Werl gewartet und kommen mit erfahrenem Kranführer. Filtern Sie nach Geräteart, Höhe und Platz, oder fragen Sie direkt an: Wir empfehlen Ihnen das passende Gerät."
        />
        <div className="mt-10">
          <MietparkFilter
            geraete={sortiert}
            kategorien={kategorien.map((k) => ({ slug: k.slug, name: k.name }))}
            cards={cards}
          />
        </div>
      </section>

      <section className="bg-stein py-16 md:py-24">
        <div className="container-z">
          <SectionHead title="Welches Gerät passt?" intro="Die Kurzfassung. Ausführlich erklären wir es im Ratgeber." />
          <ul className="mt-10 grid gap-px bg-linie md:grid-cols-2 lg:grid-cols-4">
            {ENTSCHEIDUNG.map((e) => (
              <li key={e.frage} className="flex flex-col bg-white p-6">
                <p className="text-schiefer">{e.frage}</p>
                <p className="mt-2 text-xl font-bold">{e.antwort}</p>
                <Link href={`/${kategorieBySlug(e.kat).urlSlug}/`} className="link mt-auto pt-4 text-sm font-semibold">
                  Zu den Geräten
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/ratgeber/welcher-kran/" className="btn btn-secondary mt-8">
            Zur Entscheidungshilfe
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-z">
          <SectionHead title="Alle Geräte im Vergleich" />
          <div className="mt-8 overflow-x-auto">
            <table className="table-z min-w-[48rem]">
              <thead>
                <tr>
                  <th scope="col">Gerät</th>
                  <th scope="col">Art</th>
                  <th scope="col">Höhe</th>
                  <th scope="col">Max. Last</th>
                  <th scope="col">Bedienung</th>
                  <th scope="col">
                    <span className="sr-only">Anfrage</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {verfuegbar.map((g) => (
                  <tr key={g.slug}>
                    <th scope="row">
                      <Link href={geraetUrl(g)} className="font-semibold text-graphit hover:text-magenta-ink">
                        {g.name}
                      </Link>
                    </th>
                    <td>{kategorieBySlug(g.kategorie).name}</td>
                    <td>
                      {g.hakenhoeheM
                        ? `${fmt(g.hakenhoeheM)} m Haken`
                        : g.arbeitshoeheM
                          ? `${fmt(g.arbeitshoeheM)} m Arbeit`
                          : "–"}
                    </td>
                    <td>
                      {g.tragkraftT
                        ? `${fmt(g.tragkraftT)} t`
                        : g.specs.find((s) => /Korb/.test(s.label))?.wert ?? "–"}
                    </td>
                    <td>{g.mitFahrer === "immer" ? "mit Kranführer" : "mit oder ohne"}</td>
                    <td>
                      <Link href={anfrageUrl({ kranart: g.kategorie, geraet: g.slug, quelle: "mietpark-tabelle" })} className="link text-sm font-semibold">
                        Anfragen
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand quelle="mietpark" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Mietpark Zeller Kranservice",
          itemListElement: verfuegbar.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: SITE.url + geraetUrl(g),
            name: g.name,
          })),
        }}
      />
    </>
  );
}
