import type { Metadata } from "next";
import { agb } from "@/data/agb";
import { Breadcrumbs } from "@/components/ui";

export const metadata: Metadata = {
  title: "AGB | Zeller Kranservice",
  alternates: { canonical: "/agb/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "AGB", href: "/agb/" }]} />
      <article className="container-z py-10 md:py-14">
        <div className="prose-z">
          <h1 className="text-4xl font-bold">Allgemeine Geschäftsbedingungen</h1>
          {agb.map((t) => (
            <section key={t.titel}>
              <h2>{t.titel}</h2>
              {t.unter && <h3>{t.unter}</h3>}
              {t.absaetze.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
