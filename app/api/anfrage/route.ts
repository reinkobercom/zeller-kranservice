import { kategorien } from "@/data/kategorien";
import { geraetBySlug } from "@/data/geraete";
import { SITE } from "@/lib/site";

/**
 * Nimmt Anfragen aus dem Formular entgegen und verschickt sie über Resend.
 * Benötigte Umgebungsvariablen (Vercel):
 *   RESEND_API_KEY      – API-Key von resend.com
 *   ANFRAGE_ABSENDER    – z. B. "Website Zeller <anfrage@zeller-kranservice.de>" (Domain bei Resend verifiziert)
 *   ANFRAGE_EMPFAENGER  – optional, Standard: info@zeller-kranservice.de
 */

type Body = {
  kranart?: string | null;
  geraet?: string | null;
  quelle?: string;
  ort?: string;
  termin?: string;
  beschreibung?: string;
  name?: string;
  telefon?: string;
  email?: string;
  website?: string;
  dauerMs?: number;
  foto?: { name: string; type: string; data: string } | null;
};

const MAX_FOTO_BYTES = 3_500_000;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const kurz = (s: unknown, max = 2000) => (typeof s === "string" ? s.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return Response.json({ fehler: "Ungültige Anfrage." }, { status: 400 });
  }

  // Spam: Honeypot gefüllt oder in unter 3 Sekunden abgeschickt → still annehmen, nicht senden
  if (kurz(body.website) || (typeof body.dauerMs === "number" && body.dauerMs < 3000)) {
    return Response.json({ ok: true });
  }

  const name = kurz(body.name, 120);
  const telefon = kurz(body.telefon, 60);
  const ort = kurz(body.ort, 120);
  const email = kurz(body.email, 160);
  const termin = kurz(body.termin, 40);
  const beschreibung = kurz(body.beschreibung, 3000);
  const quelle = kurz(body.quelle, 80) || "direkt";

  if (!name || !telefon || !ort) {
    return Response.json({ fehler: "Bitte Name, Telefon und Einsatzort angeben." }, { status: 422 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ fehler: "Die E-Mail-Adresse sieht nicht gültig aus." }, { status: 422 });
  }

  const kat = kategorien.find((k) => k.slug === body.kranart);
  const kranartName = kat?.name ?? "Beratung gewünscht";
  const geraet = body.geraet ? geraetBySlug(body.geraet) : undefined;

  let attachments: { filename: string; content: string }[] | undefined;
  if (body.foto?.data) {
    const bytes = Math.floor((body.foto.data.length * 3) / 4);
    if (bytes > MAX_FOTO_BYTES) {
      return Response.json({ fehler: "Das Foto ist zu groß. Bitte ein kleineres Bild wählen." }, { status: 413 });
    }
    attachments = [{ filename: kurz(body.foto.name, 80) || "baustelle.jpg", content: body.foto.data }];
  }

  const zeilen: [string, string][] = [
    ["Gerät", kranartName + (geraet ? ` (Wunsch: ${geraet.name})` : "")],
    ["Einsatzort", ort],
    ["Wunschtermin", termin || "nicht angegeben"],
    ["Was soll gehoben werden", beschreibung || "nicht angegeben"],
    ["Name", name],
    ["Telefon", telefon],
    ["E-Mail", email || "nicht angegeben"],
    ["Quelle (Seite)", quelle],
  ];

  const datumKurz = termin && termin !== "flexibel" ? ` – ${termin.split("-").reverse().join(".")}` : "";
  const subject = `Anfrage ${kranartName} – ${ort}${datumKurz}`;
  const text = zeilen.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nRückruf zugesagt: ${SITE.rueckruf}.`;
  const html = `<h2 style="font-family:sans-serif">Neue Anfrage über die Website</h2>
<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
${zeilen.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#5b5f66;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join("\n")}
</table>
<p style="font-family:sans-serif;color:#5b5f66">Dem Kunden wurde ein Rückruf ${SITE.rueckruf} zugesagt.</p>`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[anfrage] RESEND_API_KEY fehlt, Anfrage nicht versendet:", text);
    return Response.json(
      { fehler: "Das Formular ist noch nicht freigeschaltet." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ANFRAGE_ABSENDER ?? "Website Zeller Kranservice <onboarding@resend.dev>",
      to: [process.env.ANFRAGE_EMPFAENGER ?? SITE.email],
      reply_to: email || undefined,
      subject,
      text,
      html,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error("[anfrage] Resend-Fehler", res.status, await res.text().catch(() => ""));
    return Response.json({ fehler: "Die Anfrage konnte gerade nicht gesendet werden." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
