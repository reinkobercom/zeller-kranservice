export type Faq = { frage: string; antwort: string };

export type KategorieSlug =
  | "autokran"
  | "anhaengerkran"
  | "minikran"
  | "hubsteiger"
  | "arbeitsbuehne"
  | "glashebegeraet";

/** Eine Gerätekategorie, z. B. Autokran. URL: /{urlSlug}/ */
export type Kategorie = {
  slug: KategorieSlug;
  urlSlug: string; // z. B. "autokran-mieten" (bestehende URL bleibt)
  name: string; // "Autokran"
  plural: string; // "Autokrane"
  kurz: string; // eine Zeile für Kacheln
  kennzahl: string; // z. B. "bis 53 m Hakenhöhe"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // Antwort zuerst, 2–3 Sätze
  wannSinnvoll: string[];
  mitFahrer: string; // Satz zu Bedienung (mit/ohne Kranfahrer)
  faq: Faq[];
  bild: string;
};

export type Spec = { label: string; wert: string };

/** Ein Inserat für ein konkretes Gerät. URL: /{kategorie.urlSlug}/{slug}/ */
export type Geraet = {
  slug: string;
  kategorie: KategorieSlug;
  hersteller: string;
  modell: string;
  name: string; // Anzeigename, z. B. "MKG HMK 1302"
  kurz: string; // 1 Satz
  beschreibung: string; // 2–4 Sätze, Antwort zuerst
  anzahl?: number; // Anzahl im Bestand
  hakenhoeheM?: number;
  arbeitshoeheM?: number;
  tragkraftT?: number; // max. Tragkraft in t
  reichweiteM?: number; // max. Ausladung / seitliche Reichweite
  kennzahlen: Spec[]; // 3–4 Kacheln oben
  specs: Spec[]; // vollständige technische Daten
  fakten: string[];
  zubehoer?: string[];
  datenblatt?: string;
  bilder: string[];
  einsatzbereiche: string[]; // Einsatzbereich-Slugs
  mitFahrer: "immer" | "optional" | "ohne";
  passtDurchTuer?: boolean;
  verfuegbar: boolean; // false = "bald verfügbar"
  faq?: Faq[];
};

/** URL: /einsatzbereiche/{slug}/ */
export type Einsatzbereich = {
  slug: string;
  name: string; // "Pool einheben"
  kurz: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  ablauf: { titel: string; text: string }[];
  geraete: string[]; // Geraet-Slugs, beste zuerst
  tipps: string[];
  faq: Faq[];
  bild: string;
};

/** URL: /kran-mieten-{slug}/ */
export type Stadt = {
  slug: string;
  name: string;
  bundesland: string;
  region: "nrw" | "deutschland";
  einwohner?: string; // grob, z. B. "ca. 590.000"
  luftlinieKm: number; // Luftlinie ab Werl, gerundet
  intro: string; // 2–3 Sätze, Antwort zuerst, stadtspezifisch
  lage: string; // 2–4 Sätze: typische Bausituationen in dieser Stadt
  stadtteile: string[];
  typischeEinsaetze: string[]; // Einsatzbereich-Slugs
  empfohleneGeraete: string[]; // Geraet-Slugs
  genehmigung: string; // 2–3 Sätze, stadtbezogen formuliert
  nachbarorte: string[];
  faq: Faq[];
};

export type Projekt = {
  slug: string;
  kunde: string;
  ort: string; // Anzeige
  stadt?: string; // Stadt-Slug für Verknüpfung
  datum: string; // YYYY-MM
  geraet: string; // Geraet-Slug
  einsatzbereich: string; // Einsatzbereich-Slug
  leistung: string; // max. 90 Zeichen
  text: string;
  bilder: string[];
  muster: boolean; // true = Musterprojekt, noindex
};

export type ArtikelAbschnitt = {
  h2: string;
  absaetze: string[];
  liste?: string[];
  tabelle?: { kopf: string[]; zeilen: string[][] };
};

/** URL: /ratgeber/{slug}/ */
export type Artikel = {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  antwort: string; // 2–3 Sätze unter der H1
  veroeffentlicht: string; // YYYY-MM-DD
  aktualisiert: string; // YYYY-MM-DD
  lesezeitMin: number;
  abschnitte: ArtikelAbschnitt[];
  faq: Faq[];
  kategorien: KategorieSlug[];
  einsatzbereiche: string[];
  bild: string;
};
