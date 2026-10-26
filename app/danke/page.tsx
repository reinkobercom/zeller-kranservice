import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anfrage gesendet | Zeller Kranservice",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <section className="container-z py-20 md:py-28">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">Anfrage gesendet</h1>
        <p className="mt-6 text-xl leading-relaxed">
          Danke. Wir melden uns {SITE.rueckruf} bei Ihnen. Halten Sie gern Gewichte, Maße und Fotos der Baustelle bereit,
          dann geht die Planung schneller.
        </p>
        <p className="mt-6 text-schiefer">
          Eilt es? Rufen Sie uns an:{" "}
          <a href={SITE.telefonHref} className="link font-semibold">
            {SITE.telefon}
          </a>{" "}
          ({SITE.buerozeiten})
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/ratgeber/" className="btn btn-secondary">
            Zum Ratgeber
          </Link>
          <Link href="/" className="btn btn-secondary">
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
