import Link from "next/link";

const MAX = 55;

type Mark = { label: string; detail: string; von?: number; bis: number; href: string };

const MARKS: Mark[] = [
  { label: "Autokrane", detail: "36,5 bis 52 m", von: 36.5, bis: 52.2, href: "/autokran-mieten/" },
  { label: "Anhängerkran", detail: "29,8 m", bis: 29.8, href: "/anhaengerkran-mieten/" },
  { label: "Hubsteiger", detail: "26 m Arbeitshöhe", bis: 26, href: "/hubsteiger-mieten/" },
  { label: "Minikran", detail: "17,3 m", bis: 17.3, href: "/minikran-mieten/" },
  { label: "Glashebegerät", detail: "ca. 4 m", bis: 4, href: "/glashebegeraet-mieten/" },
];

const pos = (m: number) => `${(1 - m / MAX) * 100}%`;

/**
 * Höhenmaßstab im Hero: zeigt die echten Hakenhöhen der Flotte auf
 * einer Skala von 0 bis 55 m. Jede Marke führt zur Kategorie.
 */
export function HeightRuler() {
  return (
    <div className="flex h-full flex-col bg-white/95 px-5 pb-5 pt-5 backdrop-blur-sm">
      <p className="text-sm font-semibold">Wie hoch wir heben</p>
      <div className="relative mt-5 flex-1">
        {/* Skala */}
        <div className="absolute inset-y-0 left-6 w-px bg-graphit" aria-hidden />
        {[0, 10, 20, 30, 40, 50].map((m) => (
          <div
            key={m}
            className="absolute left-0 flex -translate-y-1/2 items-center"
            style={{ top: pos(m) }}
            aria-hidden
          >
            <span className="w-4 text-right text-[0.7rem] tabular-nums text-schiefer">{m}</span>
            <span className="ml-1.5 h-px w-2.5 bg-graphit" />
          </div>
        ))}
        {/* Marken */}
        <ul>
          {MARKS.map((mk) => (
            <li key={mk.label}>
              {mk.von !== undefined && (
                <span
                  aria-hidden
                  className="absolute left-[1.375rem] w-[3px] bg-magenta"
                  style={{ top: pos(mk.bis), bottom: `${(mk.von / MAX) * 100}%` }}
                />
              )}
              <Link
                href={mk.href}
                className="group absolute left-6 flex -translate-y-1/2 items-center gap-2 pl-0"
                style={{ top: pos(mk.bis) }}
              >
                <span className="h-px w-4 bg-magenta" aria-hidden />
                <span className="leading-tight">
                  <span className="block text-[0.95rem] font-semibold group-hover:text-magenta-ink">{mk.label}</span>
                  <span className="block text-xs text-schiefer">{mk.detail}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
