import { kategorien } from "@/data/kategorien";
import { geraete } from "@/data/geraete";
import { einsatzbereiche } from "@/data/einsatzbereiche";
import { staedte } from "@/data/staedte";
import { artikel } from "@/data/ratgeber";
import { SITE } from "@/lib/site";
import { artikelUrl, bereichUrl, geraetUrl, stadtUrl } from "@/lib/links";


/** llms.txt: kompaktes Firmenprofil für KI-Systeme (https://llmstxt.org). */
export function GET() {
  const L = (path: string) => SITE.url + path;
  const text = `# ${SITE.name}

> Kranvermietung mit Kranführer aus Werl (NRW), deutschlandweit im Einsatz. Gegründet ${SITE.gegruendet} von ${SITE.inhaber}, ${SITE.einsaetzeProJahr} Kraneinsätze pro Jahr. Eigene Flotte: Autokrane bis rund 52 m Hakenhöhe und bis 10 t, 12 Anhängerkrane (auch ohne Fahrer mietbar), Minikran (77 cm breit), Hubsteiger (26 m), Raupen- und Scherenbühne, Glashebegerät (600 kg). Beratung, Baustellenbesichtigung, Planung und Genehmigungen inklusive. Rückruf ${SITE.rueckruf}.

Kontakt: ${SITE.strasse}, ${SITE.plz} ${SITE.ort}, Telefon ${SITE.telefon}, ${SITE.email}. Büro: ${SITE.buerozeiten}.
Preise: individuelles Angebot, keine Pauschalpreise veröffentlicht.

## Mietgeräte
${kategorien.map((k) => `- [${k.name} mieten](${L(`/${k.urlSlug}/`)}): ${k.kennzahl}. ${k.kurz}`).join("\n")}

## Geräte im Detail
${geraete
  .filter((g) => g.verfuegbar)
  .map((g) => `- [${g.name}](${L(geraetUrl(g))}): ${g.kennzahlen.map((s) => `${s.label} ${s.wert}`).join(", ")}`)
  .join("\n")}

## Einsatzbereiche
${einsatzbereiche.map((b) => `- [${b.name}](${L(bereichUrl(b.slug))}): ${b.kurz}`).join("\n")}

## Einsatzgebiet
Deutschlandweit, Schwerpunkt NRW. [Übersicht](${L("/einsatzgebiet/")})
${staedte.map((s) => `- [Kran mieten ${s.name}](${L(stadtUrl(s.slug))})`).join("\n")}

## Ratgeber
${artikel.map((a) => `- [${a.titel}](${L(artikelUrl(a.slug))}): ${a.antwort}`).join("\n")}

## Optional
- [Über uns](${L("/ueber-uns/")})
- [Kontakt und Anfrage](${L("/kontakt/")})
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
