import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Zeller Kranservice",
  alternates: { canonical: "/datenschutz/" },
  robots: { index: false, follow: true },
};

/**
 * ENTWURF für die neue Website. Vor dem Go-live rechtlich prüfen lassen
 * (z. B. Datenschutzbeauftragter oder Generator wie eRecht24) und an
 * tatsächlich eingesetzte Dienste anpassen.
 */
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Datenschutz", href: "/datenschutz/" }]} />
      <article className="container-z py-10 md:py-14">
        <div className="prose-z">
          <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

          <h2>1. Verantwortlicher</h2>
          <p>
            Zeller Kranservice, Inhaber {SITE.inhaber}, {SITE.strasse}, {SITE.plz} {SITE.ort}. Telefon {SITE.telefon},
            E-Mail <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf
            verarbeitet Vercel technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und
            Browserinformationen, um die Website auszuliefern und abzusichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
            DSGVO. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert; zusätzlich besteht ein
            Auftragsverarbeitungsvertrag.
          </p>

          <h2>3. Anfrageformular und Kontakt</h2>
          <p>
            Wenn Sie uns über das Formular, per E-Mail oder Telefon anfragen, verarbeiten wir Ihre Angaben (Name,
            Telefonnummer, optional E-Mail, Einsatzort, Termin, Beschreibung und gegebenenfalls ein Foto), um Ihre Anfrage
            zu bearbeiten und ein Angebot zu erstellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Für den Versand der
            Formular-E-Mails nutzen wir den Dienst Resend (Resend, Inc., USA) als Auftragsverarbeiter. Wir löschen die
            Daten, wenn sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
            bestehen.
          </p>

          <h2>4. Cookies und Analyse</h2>
          <p>
            Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken und bindet keine Tracking-Dienste ein.
            Schriftarten werden von unserem eigenen Server geladen, nicht von Google.
          </p>

          <h2>5. Externe Links</h2>
          <p>
            Unsere Seiten verlinken auf Angebote Dritter, etwa ProvenExpert oder Datenblätter von Herstellern. Erst beim
            Klick auf einen solchen Link werden Daten an den jeweiligen Anbieter übertragen.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
            und Widerspruch. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei
            der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
          </p>
        </div>
      </article>
    </>
  );
}
