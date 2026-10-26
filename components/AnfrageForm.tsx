"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import type { KategorieSlug } from "@/lib/types";

export type KranartOption = { slug: KategorieSlug | "beratung"; name: string; kennzahl: string };
type GeraetOption = { slug: string; name: string; kategorie: KategorieSlug };

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

type Props = { kranarten: KranartOption[]; geraete: GeraetOption[] };

/** Neu aufbauen, wenn sich die Vorauswahl in der URL ändert. */
export function AnfrageForm(props: Props) {
  const params = useSearchParams();
  return <Formular key={params.toString()} {...props} />;
}

function Formular({ kranarten, geraete }: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const vorauswahl = params.get("kranart");
  const geraetParam = params.get("geraet");
  const quelle = params.get("quelle") ?? "direkt";

  const gueltig = kranarten.some((k) => k.slug === vorauswahl);
  const [kranart, setKranart] = useState<KranartOption["slug"] | null>(gueltig ? (vorauswahl as KranartOption["slug"]) : null);
  const [schritt, setSchritt] = useState<1 | 2>(gueltig ? 2 : 1);
  const [flexibel, setFlexibel] = useState(false);
  const [foto, setFoto] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [fehler, setFehler] = useState("");
  const start = useRef(0);
  const ersteEingabe = useRef<HTMLInputElement>(null);

  useEffect(() => {
    start.current = Date.now();
  }, []);

  const geraet = geraete.find((g) => g.slug === geraetParam && g.kategorie === kranart);
  const gewaehlt = kranarten.find((k) => k.slug === kranart);

  function waehle(slug: KranartOption["slug"]) {
    setKranart(slug);
    setSchritt(2);
    requestAnimationFrame(() => ersteEingabe.current?.focus());
  }

  async function absenden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    setFehler("");
    try {
      const body = {
        kranart,
        geraet: geraet?.slug ?? null,
        quelle,
        ort: String(fd.get("ort") ?? ""),
        termin: flexibel ? "flexibel" : String(fd.get("termin") ?? ""),
        beschreibung: String(fd.get("beschreibung") ?? ""),
        name: String(fd.get("name") ?? ""),
        telefon: String(fd.get("telefon") ?? ""),
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
      setFehler(err instanceof Error ? err.message : "Die Anfrage konnte nicht gesendet werden.");
    }
  }

  if (schritt === 1) {
    return (
      <div>
        <p className="text-sm font-semibold text-magenta-ink">Schritt 1 von 2</p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Welches Gerät brauchen Sie?</h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {kranarten.map((k) => (
            <li key={k.slug}>
              <button
                type="button"
                onClick={() => waehle(k.slug)}
                className={`flex h-full w-full flex-col items-start rounded-[3px] border px-4 py-4 text-left transition-colors hover:border-magenta-ink hover:bg-stein ${
                  k.slug === "beratung" ? "border-dashed border-schiefer/50" : "border-linie"
                }`}
              >
                <span className="font-semibold">{k.name}</span>
                <span className="text-sm text-schiefer">{k.kennzahl}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const input = "mt-2 block h-12 w-full rounded-[3px] border border-linie bg-white px-4 text-base focus:border-graphit";

  return (
    <form onSubmit={absenden} noValidate={false}>
      <p className="text-sm font-semibold text-magenta-ink">Schritt 2 von 2</p>
      <h2 className="mt-2 text-2xl font-bold md:text-3xl">Wo und wann brauchen Sie es?</h2>

      <div className="mt-5 flex flex-wrap items-center gap-3 rounded-[3px] bg-stein px-4 py-3">
        <span className="text-sm text-schiefer">Gewählt:</span>
        <span className="font-semibold">
          {gewaehlt?.name}
          {geraet && <span className="font-normal text-schiefer"> (Wunsch: {geraet.name})</span>}
        </span>
        <button type="button" onClick={() => setSchritt(1)} className="link ml-auto text-sm font-semibold">
          Ändern
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="font-medium sm:col-span-2">
          Einsatzort <span className="text-magenta-ink">*</span>
          <input ref={ersteEingabe} name="ort" required autoComplete="postal-code" placeholder="PLZ oder Ort" className={input} />
        </label>

        <div className="sm:col-span-2">
          <label className="font-medium" htmlFor="termin">
            Wunschtermin
          </label>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <input id="termin" name="termin" type="date" disabled={flexibel} className={`${input} mt-0 max-w-[14rem] disabled:opacity-50`} />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={flexibel} onChange={(e) => setFlexibel(e.target.checked)} className="h-4 w-4 accent-magenta-ink" />
              Termin ist flexibel
            </label>
          </div>
        </div>

        <label className="font-medium sm:col-span-2">
          Was soll gehoben werden?
          <textarea
            name="beschreibung"
            rows={3}
            placeholder="z. B. Fertigpool, ca. 6 t, über das Wohnhaus in den Garten"
            className={`${input} h-auto py-3`}
          />
        </label>

        <label className="font-medium">
          Name <span className="text-magenta-ink">*</span>
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="font-medium">
          Telefon <span className="text-magenta-ink">*</span>
          <input name="telefon" type="tel" required autoComplete="tel" className={input} />
        </label>
        <label className="font-medium sm:col-span-2">
          E-Mail <span className="text-sm font-normal text-schiefer">(optional)</span>
          <input name="email" type="email" autoComplete="email" className={input} />
        </label>

        <div className="sm:col-span-2">
          <label className="font-medium" htmlFor="foto">
            Foto der Baustelle <span className="text-sm font-normal text-schiefer">(optional, spart oft die Besichtigung)</span>
          </label>
          <input
            id="foto"
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files?.[0] ?? null)}
            className="mt-2 block w-full text-sm file:mr-4 file:rounded-[3px] file:border file:border-graphit file:bg-white file:px-4 file:py-2 file:font-semibold"
          />
        </div>

        {/* Honeypot gegen Spam: für Menschen unsichtbar */}
        <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-[3px] border border-magenta-ink bg-white px-4 py-3 text-magenta-ink">
          {fehler} Rufen Sie uns gern direkt an.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-8 w-full sm:w-auto disabled:opacity-60">
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
      <p className="mt-4 text-sm text-schiefer">
        Unverbindlich. Wir rufen Sie innerhalb von 24 Stunden zurück. Ihre Angaben nutzen wir nur für Ihre Anfrage, siehe{" "}
        <Link href="/datenschutz/" className="link">
          Datenschutz
        </Link>
        .
      </p>
    </form>
  );
}
