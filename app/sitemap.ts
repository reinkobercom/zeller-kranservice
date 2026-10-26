import type { MetadataRoute } from "next";
import { kategorien } from "@/data/kategorien";
import { geraete } from "@/data/geraete";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { staedte } from "@/data/staedte";
import { projekte } from "@/data/projekte";
import { artikel } from "@/data/ratgeber";
import { SITE } from "@/lib/site";
import { artikelUrl, bereichUrl, geraetUrl, projektUrl, stadtUrl } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string, priority: number, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: SITE.url + path,
    priority,
    ...(lastModified ? { lastModified } : {}),
  });
  const echteProjekte = projekte.filter((p) => !p.muster);
  return [
    u("/", 1),
    u("/mietpark/", 0.9),
    ...kategorien.map((k) => u(`/${k.urlSlug}/`, 0.9)),
    ...geraete.filter((g) => g.verfuegbar).map((g) => u(geraetUrl(g), 0.7)),
    u("/einsatzbereiche/", 0.7),
    ...einsatzbereiche.map((b) => u(bereichUrl(b.slug), 0.7)),
    u("/einsatzgebiet/", 0.7),
    ...staedte.map((s) => u(stadtUrl(s.slug), 0.7)),
    ...(echteProjekte.length ? [u("/projekte/", 0.6)] : []),
    ...echteProjekte.map((p) => u(projektUrl(p.slug), 0.5)),
    u("/ratgeber/", 0.6),
    ...artikel.map((a) => u(artikelUrl(a.slug), 0.6, a.aktualisiert)),
    u("/ueber-uns/", 0.5),
    u("/kontakt/", 0.6),
  ];
}
