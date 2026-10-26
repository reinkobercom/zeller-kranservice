import Link from "next/link";
import { kategorien } from "@/data/kategorien";
import { staedte } from "@/data/staedte";
import { SITE } from "@/lib/site";
import { stadtUrl } from "@/lib/links";

export function Footer() {
  const nrw = staedte.filter((s) => s.region === "nrw");
  const de = staedte.filter((s) => s.region === "deutschland");
  return (
    <footer className="bg-graphit text-white/80">
      <div className="container-z grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="display text-2xl font-bold text-white">Zeller Kranservice</p>
          <address className="mt-4 not-italic leading-relaxed">
            {SITE.strasse}
            <br />
            {SITE.plz} {SITE.ort}
          </address>
          <p className="mt-4 leading-relaxed">
            <a href={SITE.telefonHref} className="font-semibold text-white hover:underline">
              {SITE.telefon}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:underline">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4 text-sm">Büro: {SITE.buerozeiten}</p>
          <p className="mt-6 max-w-xs text-sm text-white/60">{SITE.stornoHinweis}</p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Mietpark</p>
          <ul className="space-y-2">
            {kategorien.map((k) => (
              <li key={k.slug}>
                <Link href={`/${k.urlSlug}/`} className="hover:text-white hover:underline">
                  {k.name} mieten
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mietpark/" className="hover:text-white hover:underline">
                Alle Geräte
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Kran mieten in NRW</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {nrw.map((s) => (
              <li key={s.slug}>
                <Link href={stadtUrl(s.slug)} className="hover:text-white hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Deutschlandweit</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {de.map((s) => (
              <li key={s.slug}>
                <Link href={stadtUrl(s.slug)} className="hover:text-white hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
            <li className="col-span-2 mt-2">
              <Link href="/einsatzgebiet/" className="font-semibold text-white hover:underline">
                Gesamtes Einsatzgebiet
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-z flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© Zeller Kranservice, seit {SITE.gegruendet}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/ratgeber/" className="hover:text-white">
                Ratgeber
              </Link>
            </li>
            <li>
              <a href={SITE.provenExpert} className="hover:text-white" rel="noopener" target="_blank">
                Bewertungen
              </a>
            </li>
            <li>
              <a href={SITE.pvReinigung} className="hover:text-white" rel="noopener" target="_blank">
                PV-Anlagen-Reinigung
              </a>
            </li>
            <li>
              <Link href="/impressum/" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz/" className="hover:text-white">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/agb/" className="hover:text-white">
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
