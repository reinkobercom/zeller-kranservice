import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { kategorien, kategorieByUrlSlug } from "@/data/kategorien";
import { staedte } from "@/data/staedte";
import { KategorieSeite } from "@/components/pages/KategorieSeite";
import { StadtSeite } from "@/components/pages/StadtSeite";

/**
 * Eine Route für zwei Seitentypen auf erster Ebene, damit die bestehenden
 * URLs erhalten bleiben:
 *   /autokran-mieten/      → Kategorie
 *   /kran-mieten-dortmund/ → Städteseite
 */

const STADT_PREFIX = "kran-mieten-";
const stadtFor = (slug: string) =>
  slug.startsWith(STADT_PREFIX) ? staedte.find((s) => s.slug === slug.slice(STADT_PREFIX.length)) : undefined;

export function generateStaticParams() {
  return [
    ...kategorien.map((k) => ({ slug: k.urlSlug })),
    ...staedte.map((s) => ({ slug: STADT_PREFIX + s.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const k = kategorieByUrlSlug(slug);
  if (k) {
    return {
      title: k.metaTitle,
      description: k.metaDescription,
      alternates: { canonical: `/${k.urlSlug}/` },
      openGraph: { title: k.metaTitle, description: k.metaDescription, images: [k.bild] },
    };
  }
  const s = stadtFor(slug);
  if (s) {
    const title = `Kran mieten in ${s.name} mit Kranführer | Zeller Kranservice`;
    const description = `Kran mieten in ${s.name}: Autokran, Anhängerkran, Minikran und Hubsteiger mit Kranführer, Planung und Genehmigung. Rückruf in 24 Stunden.`;
    return {
      title,
      description,
      alternates: { canonical: `/${STADT_PREFIX}${s.slug}/` },
      openGraph: { title, description },
    };
  }
  return {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const k = kategorieByUrlSlug(slug);
  if (k) return <KategorieSeite k={k} />;
  const s = stadtFor(slug);
  if (s) return <StadtSeite s={s} />;
  notFound();
}
