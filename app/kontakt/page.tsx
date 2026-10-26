import type { Metadata } from "next";
import { Suspense } from "react";
import { AnfrageForm, type KranartOption } from "@/components/AnfrageForm";
import { Breadcrumbs } from "@/components/ui";
import { kategorien } from "@/data/kategorien";
import { geraete } from "@/data/geraete";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kran anfragen und Kontakt | Zeller Kranservice Werl",
  description:
    "Kran anfragen in zwei Schritten: Gerät wählen, Ort und Termin nennen. Rückruf innerhalb von 24 Stunden. Zeller Kranservice, Runtestraße 34, 59457 Werl, 02922 91 09 225.",
  alternates: { canonical: "/kontakt/" },
};

const KRANARTEN: KranartOption[] = [
  ...kategorien.map((k) => ({ slug: k.slug, name: k.name, kennzahl: k.kennzahl })),
  { slug: "beratung", name: "Weiß ich noch nicht", kennzahl: "Bitte beraten Sie mich" },
];

const GERAETE = geraete.map((g) => ({ slug: g.slug, name: g.name, kategorie: g.kategorie }));

function FormFallback() {
  return (
    <div aria-hidden className="space-y-4">
      <div className="h-6 w-40 bg-stein" />
      <div className="h-10 w-2/3 bg-stein" />
      <div className="grid gap-2 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[4.5rem] bg-stein" />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt/" }]} />
      <section className="container-z grid gap-12 py-10 md:py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h1 className="text-4xl font-bold leading-[1.05] md:text-5xl">Kran anfragen</h1>
          <p className="mt-5 text-lg leading-relaxed text-schiefer">
            Zwei kurze Schritte, keine Pflicht zu Details. Wir rufen Sie {SITE.rueckruf} zurück und klären den Rest am
            Telefon.
          </p>

          <div className="mt-10 space-y-6 border-t border-linie pt-8">
            <div>
              <p className="text-sm text-schiefer">Lieber direkt anrufen?</p>
              <a href={SITE.telefonHref} className="text-2xl font-bold hover:text-magenta-ink">
                {SITE.telefon}
              </a>
              <p className="text-sm text-schiefer">{SITE.buerozeiten}</p>
            </div>
            <div>
              <p className="text-sm text-schiefer">E-Mail</p>
              <a href={`mailto:${SITE.email}`} className="font-semibold hover:text-magenta-ink">
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-schiefer">Adresse</p>
              <address className="not-italic font-semibold">
                Zeller Kranservice
                <br />
                {SITE.strasse}
                <br />
                {SITE.plz} {SITE.ort}
              </address>
            </div>
            <p className="text-sm text-schiefer">{SITE.stornoHinweis}</p>
          </div>
        </div>

        <div id="anfrage" className="scroll-mt-28 border border-linie p-6 md:p-10 lg:col-span-8">
          <Suspense fallback={<FormFallback />}>
            <AnfrageForm kranarten={KRANARTEN} geraete={GERAETE} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
