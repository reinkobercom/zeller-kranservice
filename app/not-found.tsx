import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-z py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-schiefer">Fehler 404</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Diese Seite gibt es nicht mehr.</h1>
        <p className="mt-6 text-lg text-schiefer">
          Vielleicht wurde sie beim Umbau unserer Website verschoben. Von hier aus finden Sie alles Wichtige, oder Sie rufen
          uns an: <a href={SITE.telefonHref} className="link font-semibold">{SITE.telefon}</a>.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Zur Startseite
          </Link>
          <Link href="/mietpark/" className="btn btn-secondary">
            Zum Mietpark
          </Link>
          <Link href="/kontakt/" className="btn btn-secondary">
            Kran anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
