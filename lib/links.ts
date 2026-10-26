import { kategorieBySlug } from "@/data/kategorien";
import type { Geraet, KategorieSlug } from "@/lib/types";

export const kategorieUrl = (slug: KategorieSlug) => `/${kategorieBySlug(slug).urlSlug}/`;
export const geraetUrl = (g: Pick<Geraet, "slug" | "kategorie">) =>
  `/${kategorieBySlug(g.kategorie).urlSlug}/${g.slug}/`;
export const stadtUrl = (slug: string) => `/kran-mieten-${slug}/`;
export const bereichUrl = (slug: string) => `/einsatzbereiche/${slug}/`;
export const projektUrl = (slug: string) => `/projekte/${slug}/`;
export const artikelUrl = (slug: string) => `/ratgeber/${slug}/`;

/** Link ins Anfrageformular mit Vorauswahl. */
export function anfrageUrl(opts: { kranart?: KategorieSlug; geraet?: string; quelle?: string } = {}) {
  const p = new URLSearchParams();
  if (opts.kranart) p.set("kranart", opts.kranart);
  if (opts.geraet) p.set("geraet", opts.geraet);
  if (opts.quelle) p.set("quelle", opts.quelle);
  const q = p.toString();
  return `/kontakt/${q ? `?${q}` : ""}#anfrage`;
}

export const monatJahr = (yyyyMm: string) => {
  const [y, m] = yyyyMm.split("-").map(Number);
  const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  return `${monate[m - 1]} ${y}`;
};

export const datumDe = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${Number(d)}.${Number(m)}.${y}`;
};
