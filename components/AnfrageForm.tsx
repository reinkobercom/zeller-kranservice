"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { KategorieSlug } from "@/lib/types";

export type KranartOption = {
  slug: KategorieSlug | "beratung";
  name: string;
  kennzahl: string;
  bild: string;
};
type GeraetOption = { slug: string; name: string; kategorie: KategorieSlug };
type Props = { kranarten: KranartOption[]; geraete: GeraetOption[] };

const TERMINE = [
  { id: "asap", label: "So schnell wie möglich" },
  { id: "2wochen", label: "In den nächsten 2 Wochen" },
  { id: "datum", label: "An einem bestimmten Tag" },
  { id: "flexibel", label: "Bin flexibel" },
] as const;
type TerminId = (typeof TERMINE)[number]["id"];

const SCHRITTE = ["Gerät", "Einsatz", "Kontakt"] as const;
const MAX_FOTO_KANTE = 1600;

async function verkleinern(file: File): Promise<{ name: string; type: string; data: string }> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_FOTO_KANTE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
  return { name: file.name.replace(/\.[^.]+$/, "") + ".jpg", type: "image/jpeg", data: dataUrl.split(",")[1] };
}

/** Neu aufbauen, wenn sich die Vorauswahl in der URL ändert. */
export function AnfrageForm(props: Props) {
  const params = useSearchParams();
  return <Formular key={params.toString()} {...props} />;
}

function Fortschritt({ schritt, onGehe }: { schritt: 1 | 2 | 3; onGehe: (s: 1 | 2) => void }) {
  return (
    <ol className="grid grid-cols-3 gap-2" aria-label="Fortschritt">
      {SCHRITTE.map((name, i) => {
        const nr = (i + 1) as 1 | 2 | 3;
        const fertig = nr < schritt;
        const aktiv = nr === schritt;
        const inhalt = (
          <>
            <span className={`block h-1.5 rounded-full ${fertig || aktiv ? "bg-magenta-ink" : "bg-linie"}`} />
            <span className={`mt-2 block text-sm ${aktiv ? "font-semibold text-graphit" : "text-schiefer"}`}>
              {nr}. {name}
            </span>
          </>
        );
        return (
          <li key={name} aria-current={aktiv ? "step" : undefined}>
            {fertig && nr < 3 ? (
              <button type="button" onClick={() => onGehe(nr as 1 | 2)} className="block w-full text-left hover:opacity-80">
                {inhalt}
              </button>
            ) : (
              inhalt
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Feld({
  label,
  hinweis,
  pflicht,
  fehler,
  children,
}: {
  label: string;
  hinweis?: string;
  pflicht?: boolean;
  fehler?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-medium">
        {label}
        {pflicht && <span className="text-magenta-ink"> *</span>}
        {hinweis && <span className="ml-1 text-sm font-normal text-schiefer">{hinweis}</span>}
      </span>
      {children}
      {fehler && <span className="mt-1.5 block text-sm text-magenta-ink">{fehler}</span>}
    </label>
  );
}

const input =
  "mt-2 block h-[3.25rem] w-full rounded-xl border border-linie bg-white px-4 text-base transition-colors placeholder:text-schiefer/70 focus:border-magenta-ink focus:outline-none focus:ring-4 focus:ring-magenta/10";

function Formular({ kranarten, geraete }: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const vorauswahl = params.get("kranart");
  const geraetParam = params.get("geraet");
  const quelle = params.get("quelle") ?? "direkt";

  const gueltig = kranarten.some((k) => k.slug === vorauswahl);
  const [kranart, setKranart] = useState<KranartOption["slug"] | null>(
    gueltig ? (vorauswahl as KranartOption["slug"]) : null,
  );
  const [schritt, setSchritt] = useState<1 | 2 | 3>(gueltig ? 2 : 1);

  const [ort, setOrt] = useState("");
  const [termin, setTermin] = useState<TerminId | null>(null);
  const [datum, setDatum] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);
  const [ziehen, setZiehen] = useState(false);

  const [fehler, setFehler] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sendeFehler, setSendeFehler] = useState("");

  const start = useRef(0);
  const kopf = useRef<HTMLDivElement>(null);
  const fotoInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    start.current = Date.now();
  }, []);
  useEffect(
    () => () => {
      if (fotoUrl) URL.revokeObjectURL(fotoUrl);
    },
    [fotoUrl],
  );

  const gewaehlt = kranarten.find((k) => k.slug === kranart);
  const geraet = geraete.find((g) => g.slug === geraetParam && g.kategorie === kranart);

  function gehe(s: 1 | 2 | 3) {
    setSchritt(s);
    setFehler({});
    requestAnimationFrame(() => {
      const el = kopf.current;
      if (!el) return;
      if (el.getBoundingClientRect().top < 80) el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus({ preventScroll: true });
    });
  }

  function fotoSetzen(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) return;
    setFoto(file);
    setFotoUrl(URL.createObjectURL(file));
  }

  function weiterZuKontakt() {
    const f: Record<string, string> = {};
    if (!ort.trim()) f.ort = "Bitte nennen Sie uns den Einsatzort.";
    if (termin === "datum" && !datum) f.datum = "Bitte wählen Sie ein Datum oder eine andere Option.";
    setFehler(f);
    if (Object.keys(f).length === 0) gehe(3);
  }

  function terminText() {
    if (termin === "datum") return datum;
    return TERMINE.find((t) => t.id === termin)?.label ?? "";
  }

  async function absenden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const telefon = String(fd.get("telefon") ?? "").trim();
    const f: Record<string, string> = {};
    if (!name) f.name = "Wie dürfen wir Sie ansprechen?";
    if (!telefon) f.telefon = "Unter welcher Nummer erreichen wir Sie?";
    setFehler(f);
    if (Object.keys(f).length) return;

    setStatus("sending");
    setSendeFehler("");
    try {
      const body = {
        kranart: kranart === "beratung" ? null : kranart,
        geraet: geraet?.slug ?? null,
        quelle,
        ort,
        termin: terminText(),
        beschreibung,
        name,
        telefon,
        email: String(fd.get("email") ?? ""),
        website: String(fd.get("website") ?? ""),
        dauerMs: Date.now() - start.current,
        foto: foto ? await verkleinern(foto) : null,
      };
      const res = await fetch("/api/anfrage/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => ({}))) as { fehler?: string };
      if (!res.ok) throw new Error(json.fehler ?? "Die Anfrage konnte nicht gesendet werden.");
      router.push("/danke/");
    } catch (err) {
      setStatus("error");
      setSendeFehler(err instanceof Error ? err.message : "Die Anfrage konnte nicht gesendet werden.");
    }
  }

  return (
    <div>
      <Fortschritt schritt={schritt} onGehe={gehe} />

      <div ref={kopf} tabIndex={-1} className="scroll-mt-28 pt-8 outline-none">
        {/* ---------- Schritt 1: Gerät ---------- */}
        {schritt === 1 && (
          <>
            <h2 className="text-2xl font-bold md:text-3xl">Welches Gerät brauchen Sie?</h2>
            <p className="mt-2 text-schiefer">Wählen Sie die Geräteart. Das konkrete Modell stimmen wir mit Ihnen ab.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {kranarten.map((k) => {
                const an = k.slug === kranart;
                const beratung = k.slug === "beratung";
                return (
                  <li key={k.slug}>
                    <button
                      type="button"
                      aria-pressed={an}
                      onClick={() => {
                        setKranart(k.slug);
                        gehe(2);
                      }}
                      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 bg-white text-left transition-all hover:-translate-y-0.5 hover:border-magenta-ink hover:shadow-[0_12px_24px_-16px_rgb(42_35_38/0.4)] ${
                        an ? "border-magenta-ink" : "border-linie"
                      }`}
                    >
                      <span className="relative block aspect-[3/2] w-full overflow-hidden bg-stein">
                        <Image
                          src={k.bild}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 220px, 45vw"
                          className={`object-cover ${beratung ? "object-[50%_20%]" : ""}`}
                        />
                      </span>
                      <span className="flex flex-1 flex-col px-4 py-3">
                        <span className="font-semibold">{k.name}</span>
                        <span className="text-sm text-schiefer">{k.kennzahl}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {/* ---------- Schritt 2: Einsatz ---------- */}
        {schritt === 2 && (
          <>
            <div className="flex items-center gap-3 rounded-2xl bg-stein p-3 pr-4">
              {gewaehlt && (
                <Image src={gewaehlt.bild} alt="" width={96} height={64} className="h-12 w-16 rounded-lg object-cover" />
              )}
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block text-sm text-schiefer">Ihre Auswahl</span>
                <span className="block font-semibold">
                  {gewaehlt?.name}
                  {geraet && <span className="font-normal text-schiefer">, Wunsch: {geraet.name}</span>}
                </span>
              </span>
              <button type="button" onClick={() => gehe(1)} className="link shrink-0 text-sm font-semibold">
                Ändern
              </button>
            </div>

            <h2 className="mt-8 text-2xl font-bold md:text-3xl">Wo und wann soll gehoben werden?</h2>

            <div className="mt-6 space-y-7">
              <Feld label="Einsatzort" pflicht fehler={fehler.ort}>
                <input
                  value={ort}
                  onChange={(e) => setOrt(e.target.value)}
                  autoComplete="postal-code"
                  placeholder="PLZ oder Ort, z. B. 59457 Werl"
                  className={input}
                  aria-invalid={!!fehler.ort}
                />
              </Feld>

              <fieldset>
                <legend className="font-medium">Wann brauchen Sie den Kran?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TERMINE.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      aria-pressed={termin === t.id}
                      onClick={() => setTermin(termin === t.id ? null : t.id)}
                      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                        termin === t.id
                          ? "border-magenta-ink bg-magenta-ink text-white"
                          : "border-linie bg-white hover:border-magenta-ink"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                {termin === "datum" && (
                  <div className="mt-4 max-w-xs">
                    <Feld label="Datum" fehler={fehler.datum}>
                      <input
                        type="date"
                        lang="de"
                        value={datum}
                        onChange={(e) => setDatum(e.target.value)}
                        className={input}
                      />
                    </Feld>
                  </div>
                )}
              </fieldset>

              <Feld label="Was soll gehoben werden?" hinweis="optional">
                <textarea
                  value={beschreibung}
                  onChange={(e) => setBeschreibung(e.target.value)}
                  rows={3}
                  placeholder="z. B. Fertigpool, ca. 6 t, über das Wohnhaus in den Garten"
                  className={`${input} h-auto py-3`}
                />
              </Feld>

              <div>
                <p className="font-medium">
                  Foto der Baustelle{" "}
                  <span className="text-sm font-normal text-schiefer">optional, spart oft die Besichtigung</span>
                </p>
                {foto && fotoUrl ? (
                  <div className="mt-2 flex items-center gap-4 rounded-2xl border border-linie p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={fotoUrl} alt="Ihr Foto der Baustelle" className="h-16 w-24 rounded-lg object-cover" />
                    <span className="min-w-0 flex-1 truncate text-sm">{foto.name}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setFoto(null);
                        setFotoUrl(null);
                        if (fotoInput.current) fotoInput.current.value = "";
                      }}
                      className="link shrink-0 text-sm font-semibold"
                    >
                      Entfernen
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fotoInput.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setZiehen(true);
                    }}
                    onDragLeave={() => setZiehen(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setZiehen(false);
                      fotoSetzen(e.dataTransfer.files?.[0]);
                    }}
                    className={`mt-2 flex w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed px-4 py-7 text-center transition-colors ${
                      ziehen ? "border-magenta-ink bg-rose" : "border-linie hover:border-magenta-ink hover:bg-rose"
                    }`}
                  >
                    <svg aria-hidden width="28" height="28" viewBox="0 0 24 24" className="text-magenta-ink">
                      <path
                        d="M4 7h3l2-2.5h6L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-semibold">Foto auswählen oder hierher ziehen</span>
                    <span className="text-sm text-schiefer">Auf dem Handy direkt mit der Kamera</span>
                  </button>
                )}
                <input
                  ref={fotoInput}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden
                  onChange={(e) => fotoSetzen(e.target.files?.[0])}
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-linie pt-6">
              <button type="button" onClick={() => gehe(1)} className="font-semibold text-schiefer hover:text-graphit">
                Zurück
              </button>
              <button type="button" onClick={weiterZuKontakt} className="btn btn-primary">
                Weiter zu Ihren Kontaktdaten
              </button>
            </div>
          </>
        )}

        {/* ---------- Schritt 3: Kontakt ---------- */}
        {schritt === 3 && (
          <form onSubmit={absenden} noValidate>
            <h2 className="text-2xl font-bold md:text-3xl">Wie erreichen wir Sie?</h2>
            <p className="mt-2 text-schiefer">Wir rufen Sie innerhalb von 24 Stunden zurück und klären den Rest am Telefon.</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Feld label="Name" pflicht fehler={fehler.name}>
                <input name="name" autoComplete="name" className={input} aria-invalid={!!fehler.name} />
              </Feld>
              <Feld label="Telefon" pflicht fehler={fehler.telefon}>
                <input name="telefon" type="tel" autoComplete="tel" className={input} aria-invalid={!!fehler.telefon} />
              </Feld>
              <div className="sm:col-span-2">
                <Feld label="E-Mail" hinweis="optional">
                  <input name="email" type="email" autoComplete="email" className={input} />
                </Feld>
              </div>
            </div>

            {/* Honeypot gegen Spam: für Menschen unsichtbar */}
            <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <dl className="mt-8 grid gap-x-6 gap-y-2 rounded-2xl bg-stein p-5 text-sm sm:grid-cols-[8rem_1fr]">
              <dt className="text-schiefer">Gerät</dt>
              <dd className="font-medium">
                {gewaehlt?.name}
                {geraet && `, Wunsch: ${geraet.name}`}
              </dd>
              <dt className="text-schiefer">Einsatzort</dt>
              <dd className="font-medium">{ort}</dd>
              {termin && (
                <>
                  <dt className="text-schiefer">Termin</dt>
                  <dd className="font-medium">
                    {termin === "datum" ? datum.split("-").reverse().join(".") : terminText()}
                  </dd>
                </>
              )}
              {foto && (
                <>
                  <dt className="text-schiefer">Foto</dt>
                  <dd className="font-medium">1 Foto angehängt</dd>
                </>
              )}
            </dl>

            {status === "error" && (
              <p role="alert" className="mt-6 rounded-2xl border border-magenta-ink bg-rose px-4 py-3 text-magenta-ink">
                {sendeFehler} Rufen Sie uns gern direkt an.
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-linie pt-6">
              <button type="button" onClick={() => gehe(2)} className="font-semibold text-schiefer hover:text-graphit">
                Zurück
              </button>
              <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
                {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
              </button>
            </div>
            <p className="mt-4 text-sm text-schiefer">
              Unverbindlich und kostenlos. Ihre Angaben nutzen wir nur für Ihre Anfrage, siehe{" "}
              <Link href="/datenschutz/" className="link">
                Datenschutz
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
