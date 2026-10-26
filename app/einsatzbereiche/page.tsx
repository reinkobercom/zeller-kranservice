import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { Breadcrumbs, CtaBand, SectionHead } from "@/components/ui";
import { bereichUrl } from "@/lib/links";

export const metadata: Metadata = {
  title: "Einsatzbereiche: wofür Sie einen Kran mieten | Zeller Kranservice",
  description:
    "Kran für Hallenbau, Pool, Glasmontage, Wintergarten, Dachdecker, GaLaBau, Zimmerei, Gerüstbau, Fenstereinbau und Bauschutt. Das passende Gerät und der Ablauf je Einsatz.",
  alternates: { canonical: "/einsatzbereiche/" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Einsatzbereiche", href: "/einsatzbereiche/" }]} />
      <section className="container-z py-10 md:py-14">
        <SectionHead
          as="h1"
          title="Wofür Sie uns buchen"
          intro="Zehn typische Einsätze, für die Kunden uns rufen. Auf jeder Seite finden Sie das passende Gerät, den Ablauf und was Sie vorbereiten sollten."
        />
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {einsatzbereiche.map((b) => (
            <li key={b.slug} className="group">
              <Link href={bereichUrl(b.slug)} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-stein">
                  <Image src={b.bild} alt="" fill sizes="(min-width:1024px) 30vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <h2 className="mt-4 text-xl font-bold group-hover:text-magenta-ink">{b.name}</h2>
                <p className="mt-1 text-schiefer">{b.kurz}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand quelle="einsatzbereiche" title="Ihr Einsatz ist nicht dabei? Fragen Sie uns trotzdem." />
    </>
  );
}
