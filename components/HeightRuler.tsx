import Link from "next/link";

/** Skala von 0 bis MAX Metern; 0 m liegt am Boden des Elements. */
const MAX = 55;

type Mark = { label: string; wert: string; bis: number; von?: number; href: string };

const MARKS: Mark[] = [
  { label: "Autokrane", wert: "bis 52 m", von: 36.5, bis: 52.2, href: "/autokran-mieten/" },
  { label: "Anhängerkran", wert: "30 m", bis: 29.8, href: "/anhaengerkran-mieten/" },
  { label: "Hubsteiger", wert: "26 m", bis: 26, href: "/hubsteiger-mieten/" },
  { label: "Minikran", wert: "17 m", bis: 17.3, href: "/minikran-mieten/" },
  { label: "Glashebegerät", wert: "4 m", bis: 4, href: "/glashebegeraet-mieten/" },
];

const oben = (m: number) => `${(1 - m / MAX) * 100}%`;

/**
 * Höhenskala für den Hero: steht auf dem Foto neben dem Kran und zeigt,
 * wie hoch die Geräte der Flotte reichen. Jede Marke führt zur Kategorie.
 */
export function HeightRuler() {
  return (
    <nav aria-label="Geräte nach Hakenhöhe" className="relative h-full text-white [text-shadow:0_1px_8px_rgb(0_0_0/0.45)]">
      {/* Messlatte */}
      <div aria-hidden className="absolute inset-y-0 left-8 w-px bg-white/70" />
      {[0, 10, 20, 30, 40, 50].map((m) => (
        <div key={m} aria-hidden className="absolute left-0 flex -translate-y-1/2 items-center" style={{ top: oben(m) }}>
          <span className="w-5 text-right text-[0.7rem] tabular-nums text-white/70">{m}</span>
          <span className="ml-1.5 h-px w-3 bg-white/70" />
        </div>
      ))}
      {[5, 15, 25, 35, 45].map((m) => (
        <span
          key={m}
          aria-hidden
          className="absolute left-[1.875rem] h-px w-1.5 bg-white/50"
          style={{ top: oben(m) }}
        />
      ))}
      <span aria-hidden className="absolute -top-6 left-0 text-[0.7rem] text-white/70">
        Meter
      </span>

      <ul>
        {MARKS.map((mk) => (
          <li key={mk.label}>
            {mk.von !== undefined && (
              <span
                aria-hidden
                className="absolute left-[1.9375rem] w-[3px] bg-magenta"
                style={{ top: oben(mk.bis), bottom: `${(mk.von / MAX) * 100}%` }}
              />
            )}
            <Link
              href={mk.href}
              className="group absolute left-8 flex -translate-y-1/2 items-center gap-3 rounded-[2px] py-1 pr-2"
              style={{ top: oben(mk.bis) }}
            >
              <span aria-hidden className="h-[2px] w-6 bg-magenta transition-all group-hover:w-9" />
              <span className="whitespace-nowrap text-[0.95rem] font-semibold">
                {mk.label} <span className="font-normal text-white/75">{mk.wert}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
