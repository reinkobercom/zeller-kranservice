# Zeller Kranservice – Website

Neubau von zeller-kranservice.de mit Fokus auf SEO und GEO (Sichtbarkeit in KI-Antworten).
Next.js 16 (App Router, Cache Components), Tailwind CSS 4, statisch generiert, gehostet auf Vercel.

## Inhalte pflegen

Alle Inhalte liegen als typisierte Daten in `data/`. Seiten, Verlinkungen, Sitemap,
`llms.txt` und strukturierte Daten entstehen automatisch daraus.

| Datei | Inhalt |
| --- | --- |
| `data/geraete.ts` | Kran-Inserate (technische Daten, Bilder, Einsatzbereiche) |
| `data/kategorien.ts` | 6 Gerätekategorien, z. B. `/autokran-mieten/` |
| `data/projekte.ts` | Projekte für Slider, Projektseiten, Kran- und Städteseiten |
| `data/einsatzbereiche.ts` | 10 Einsatzbereiche, `/einsatzbereiche/{slug}/` |
| `data/staedte.ts` | 28 Städteseiten, `/kran-mieten-{slug}/` |
| `data/ratgeber.ts` | Ratgeber-Artikel, `/ratgeber/{slug}/` |
| `lib/site.ts` | Firmendaten (Telefon, Adresse, Gründung, Rückrufzeit) |
| `lib/images.ts` | alle Bild-URLs an einer Stelle |

**Neues Projekt:** Eintrag in `data/projekte.ts` mit `muster: false`, Kunde nur mit Freigabe.
Sobald das erste echte Projekt drin ist, wird `/projekte/` automatisch indexierbar.
Musterprojekte (`muster: true`) sind mit „Beispiel“ markiert und auf `noindex`.

## Anfrageformular

`/kontakt/` – zwei Schritte. Vorauswahl über URL: `/kontakt/?kranart=autokran&geraet=k1003&quelle=stadt-hamm`.
Versand per Resend über `app/api/anfrage/route.ts`.

Umgebungsvariablen (Vercel → Settings → Environment Variables):

| Variable | Zweck |
| --- | --- |
| `RESEND_API_KEY` | API-Key von resend.com |
| `ANFRAGE_ABSENDER` | z. B. `Website Zeller <anfrage@zeller-kranservice.de>` (Domain in Resend verifizieren) |
| `ANFRAGE_EMPFAENGER` | optional, Standard `info@zeller-kranservice.de` |
| `NEXT_PUBLIC_SITE_URL` | `https://zeller-kranservice.de` |
| `NEXT_PUBLIC_INDEXIERBAR` | erst beim Domain-Umzug auf `1` setzen, vorher ist alles `noindex` |

## Vor dem Domain-Umzug (Checkliste)

- [ ] Bilder von der alten WordPress-Seite nach `public/bilder/` kopieren und `BASE` in `lib/images.ts` umstellen
- [ ] PDFs unter `/wp-content/uploads/…` übernehmen oder per Redirect auf die Inserate leiten (das K1000-RSX-Lastdiagramm rankt auf Platz 1)
- [ ] Alle alten URLs crawlen und gegen die Redirects in `next.config.ts` prüfen
- [ ] Datenschutzerklärung rechtlich prüfen lassen
- [ ] Resend-Domain verifizieren, Testanfrage senden
- [ ] `NEXT_PUBLIC_INDEXIERBAR=1`, Domain in Vercel verbinden, Sitemap in der Search Console einreichen

## Entwicklung

```bash
npm install
npm run dev
npm run build
```
