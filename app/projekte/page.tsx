import type { Metadata } from "next";
import { projekteSortiert } from "@/data/projekte";
import { ProjektCard } from "@/components/cards";
import { Breadcrumbs, CtaBand, SectionHead } from "@/components/ui";
import { SITE } from "@/lib/site";

const alleMuster = projekteSortiert().every((p) => p.muster);

export const metadata: Metadata = {
  title: "Projekte: Kraneinsätze von Zeller Kranservice",
  description:
    "Ausgewählte Kraneinsätze von Zeller Kranservice: Hallenbau, Glasmontage, Pool, Dach und mehr. Mit Ort, Gerät und Leistung.",
  alternates: { canonical: "/projekte/" },
  // solange nur Musterprojekte vorhanden sind, nicht indexieren
  ...(alleMuster ? { robots: { index: false, follow: true } } : {}),
};

export default function Page() {
  const projekte = projekteSortiert();
  return (
    <>
      <Breadcrumbs items={[{ name: "Projekte", href: "/projekte/" }]} />
      <section className="container-z py-10 md:py-14">
        <SectionHead
          as="h1"
          title="Projekte"
          intro={`Wir sind ${SITE.einsaetzeProJahr} Mal im Jahr im Einsatz. Hier zeigen wir eine Auswahl, mit Ort, Gerät und dem, was wir gehoben haben.`}
        />
        <ul className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projekte.map((p) => (
            <li key={p.slug}>
              <ProjektCard p={p} />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand quelle="projekte" title="Ihr Projekt als nächstes? Sagen Sie uns, was gehoben werden muss." />
    </>
  );
}
