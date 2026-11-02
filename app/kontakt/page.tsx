import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { AnfrageForm, type KranartOption } from "@/components/AnfrageForm";
import { Trustindex } from "@/components/Trustindex";
import { Breadcrumbs } from "@/components/ui";
import { kategorien } from "@/data/kategorien";
import { geraete } from "@/data/geraete";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kran anfragen und Kontakt | Zeller Kranservice Werl",
  description:
    "Kran anfragen in drei kurzen Schritten: Gerät wählen, Ort und Termin nennen, Kontaktdaten eintragen. Rückruf innerhalb von 24 Stunden. Zeller Kranservice, Werl, 02922 91 09 225.",
  alternates: { canonical: "/kontakt/" },
};

const KRANARTEN: KranartOption[] = [
  ...kategorien.map((k) => ({ slug: k.slug, name: k.name, kennzahl: k.kennzahl, bild: k.bild })),
  { slug: "beratung", name: "Weiß ich noch nicht", kennzahl: "Dirk Zeller berät Sie", bild: IMG.teamDirk },
];

const GERAETE = geraete.map((g) => ({ slug: g.slug, name: g.name, kategorie: g.kategorie }));

function FormFallback() {
  return (
    <div aria-hidden className="space-y-6">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-1.5 rounded-full bg-linie" />
        ))}
      </div>
      <div className="h-9 w-2/3 rounded-lg bg-stein" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-2xl bg-stein" />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt/" }]} />
      <div className="container-z pt-8 md:pt-12">
        <h1 className="text-4xl font-bold leading-[1.05] md:text-5xl">Kran anfragen</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-schiefer">
          Drei kurze Schritte, keine Details nötig. Den Rest klären wir am Telefon.
        </p>
      </div>
      <section className="container-z grid gap-10 pb-16 pt-8 md:pb-24 lg:grid-cols-12 lg:gap-12">
        <aside className="order-last lg:order-first lg:col-span-4">
          {/* Ansprechpartner */}
          <div className="rounded-2xl bg-rose p-6">
            <div className="flex items-center gap-4">
              <Image
                src={IMG.teamDirk}
                alt="Dirk Zeller"
                width={160}
                height={160}
                className="h-20 w-20 shrink-0 rounded-full object-cover"
              />
              <p className="leading-snug">
                <span className="block text-sm text-schiefer">Ihr Ansprechpartner</span>
                <span className="block text-lg font-bold">Dirk Zeller</span>
                <span className="block text-sm text-schiefer">Geschäftsführer und Kranführer</span>
              </p>
            </div>
            <p className="mt-5 leading-relaxed">
              Wir melden uns {SITE.rueckruf} bei Ihnen. Eilt es? Dann rufen Sie einfach direkt an.
            </p>
            <a href={SITE.telefonHref} className="btn btn-primary mt-5 w-full">
              {SITE.telefon}
            </a>
            <p className="mt-3 text-center text-sm text-schiefer">{SITE.buerozeiten}</p>
          </div>

          <Trustindex art="button" className="mt-6" minHoehe="3rem" />

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-schiefer">E-Mail</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="font-semibold hover:text-magenta-ink">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-schiefer">Adresse</dt>
              <dd className="font-semibold">
                Zeller Kranservice, {SITE.strasse}, {SITE.plz} {SITE.ort}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-schiefer">{SITE.stornoHinweis}</p>
        </aside>

        <div
          id="anfrage"
          className="scroll-mt-28 rounded-2xl border border-linie bg-white p-5 shadow-[0_24px_48px_-32px_rgb(42_35_38/0.35)] md:p-9 lg:col-span-8"
        >
          <Suspense fallback={<FormFallback />}>
            <AnfrageForm kranarten={KRANARTEN} geraete={GERAETE} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
