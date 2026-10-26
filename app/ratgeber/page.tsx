import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artikel } from "@/data/ratgeber";
import { Breadcrumbs, CtaBand, SectionHead } from "@/components/ui";
import { artikelUrl, datumDe } from "@/lib/links";

export const metadata: Metadata = {
  title: "Ratgeber Kran mieten: Kosten, Genehmigung, Kranwahl | Zeller",
  description:
    "Der Ratgeber von Zeller Kranservice: Wovon die Kosten abhängen, welcher Kran passt, welche Genehmigungen Sie brauchen und wann ein Hubsteiger besser ist als ein Gerüst.",
  alternates: { canonical: "/ratgeber/" },
};

export default function Page() {
  const [erster, ...rest] = artikel;
  return (
    <>
      <Breadcrumbs items={[{ name: "Ratgeber", href: "/ratgeber/" }]} />
      <section className="container-z py-10 md:py-14">
        <SectionHead
          as="h1"
          title="Ratgeber"
          intro="Wir beantworten hier die Fragen, die uns Kunden am Telefon am häufigsten stellen. Geschrieben aus der Praxis von über 1.000 Einsätzen im Jahr."
        />

        <Link href={artikelUrl(erster.slug)} className="group mt-12 grid gap-8 border-t border-linie pt-10 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-stein">
            <Image src={erster.bild} alt="" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="self-center">
            <h2 className="text-3xl font-bold leading-tight group-hover:text-magenta-ink md:text-4xl">{erster.titel}</h2>
            <p className="mt-4 text-lg leading-relaxed text-schiefer">{erster.antwort}</p>
            <p className="mt-4 text-sm text-schiefer">
              {erster.lesezeitMin} Minuten, aktualisiert am {datumDe(erster.aktualisiert)}
            </p>
          </div>
        </Link>

        <ul className="mt-16 grid gap-x-6 gap-y-12 border-t border-linie pt-10 md:grid-cols-3">
          {rest.map((a) => (
            <li key={a.slug} className="group">
              <Link href={artikelUrl(a.slug)} className="block">
                <div className="relative aspect-[3/2] overflow-hidden bg-stein">
                  <Image src={a.bild} alt="" fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug group-hover:text-magenta-ink">{a.titel}</h2>
                <p className="mt-2 text-schiefer">{a.antwort}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand quelle="ratgeber" />
    </>
  );
}
