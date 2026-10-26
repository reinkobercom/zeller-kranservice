import { NextResponse, type NextRequest } from "next/server";
import { kategorien } from "@/data/kategorien";
import { geraete } from "@/data/geraete";
import { staedte } from "@/data/staedte";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { projekte } from "@/data/projekte";
import { artikel } from "@/data/ratgeber";

/**
 * Unbekannte URLs unter dynamischen Routen sollen ein echtes 404 liefern
 * (kein "soft 404" mit Status 200). Wir prüfen gegen die bekannten Inhalte
 * und schreiben unbekannte Pfade auf eine Route um, die es nicht gibt.
 */
const katUrl = new Map(kategorien.map((k) => [k.slug, k.urlSlug]));
const GUELTIG = new Set<string>([
  ...kategorien.map((k) => `/${k.urlSlug}/`),
  ...staedte.map((s) => `/kran-mieten-${s.slug}/`),
  ...geraete.map((g) => `/${katUrl.get(g.kategorie)}/${g.slug}/`),
  ...einsatzbereiche.map((b) => `/einsatzbereiche/${b.slug}/`),
  ...projekte.map((p) => `/projekte/${p.slug}/`),
  ...artikel.map((a) => `/ratgeber/${a.slug}/`),
]);

// Statische Seiten erster Ebene, die nicht über [slug] laufen
const STATISCH = new Set([
  "mietpark",
  "einsatzbereiche",
  "einsatzgebiet",
  "projekte",
  "ratgeber",
  "ueber-uns",
  "kontakt",
  "danke",
  "impressum",
  "datenschutz",
  "agb",
]);

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.endsWith("/") ? req.nextUrl.pathname : `${req.nextUrl.pathname}/`;
  const teile = path.split("/").filter(Boolean);
  if (teile.length === 0) return NextResponse.next();
  if (teile.length === 1 && STATISCH.has(teile[0])) return NextResponse.next();
  if (GUELTIG.has(path)) return NextResponse.next();
  // Pfad mit drei Ebenen trifft keine Route → Next liefert not-found mit Status 404
  return NextResponse.rewrite(new URL("/_404/nicht/gefunden/", req.url));
}

export const config = {
  // nur Seiten prüfen, keine Dateien, APIs oder internen Pfade
  matcher: ["/((?!api|_next|llms\\.txt|sitemap\\.xml|robots\\.txt|favicon\\.ico|.*\\.[a-z0-9]+$).*)"],
};
