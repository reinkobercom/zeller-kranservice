import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | Zeller Kranservice",
  alternates: { canonical: "/impressum/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Impressum", href: "/impressum/" }]} />
      <article className="container-z py-10 md:py-14">
        <div className="prose-z">
          <h1 className="text-4xl font-bold">Impressum</h1>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Zeller Kranservice
            <br />
            Inhaber {SITE.inhaber}
            <br />
            {SITE.strasse}
            <br />
            {SITE.plz} {SITE.ort}
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={SITE.telefonHref}>{SITE.telefon}</a>
            <br />
            E-Mail: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {SITE.ustId}</p>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            {SITE.inhaber}, Anschrift wie oben
          </p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </article>
    </>
  );
}
