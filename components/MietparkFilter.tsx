"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { Geraet, KategorieSlug } from "@/lib/types";

type Props = {
  geraete: Geraet[];
  kategorien: { slug: KategorieSlug; name: string }[];
  cards: Record<string, ReactNode>;
};

const HOEHEN = [0, 10, 20, 30, 40, 50];

export function MietparkFilter({ geraete, kategorien, cards }: Props) {
  const [kat, setKat] = useState<KategorieSlug | "alle">("alle");
  const [hoehe, setHoehe] = useState(0);
  const [tuer, setTuer] = useState(false);
  const [selbst, setSelbst] = useState(false);

  const liste = useMemo(
    () =>
      geraete.filter((g) => {
        const h = g.hakenhoeheM ?? g.arbeitshoeheM ?? 0;
        if (kat !== "alle" && g.kategorie !== kat) return false;
        if (hoehe && h < hoehe) return false;
        if (tuer && !g.passtDurchTuer) return false;
        if (selbst && g.mitFahrer === "immer") return false;
        return true;
      }),
    [geraete, kat, hoehe, tuer, selbst],
  );

  const reset = () => {
    setKat("alle");
    setHoehe(0);
    setTuer(false);
    setSelbst(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-6 border-y border-linie py-6 lg:flex-row lg:items-end lg:justify-between">
        <fieldset>
          <legend className="mb-3 text-sm font-semibold">Geräteart</legend>
          <div className="flex flex-wrap gap-2">
            {[{ slug: "alle" as const, name: "Alle" }, ...kategorien].map((k) => (
              <button
                key={k.slug}
                type="button"
                aria-pressed={kat === k.slug}
                onClick={() => setKat(k.slug)}
                className={`rounded-[3px] border px-3 py-2 text-sm font-medium transition-colors ${
                  kat === k.slug ? "border-graphit bg-graphit text-white" : "border-linie hover:border-graphit"
                }`}
              >
                {k.name}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="flex flex-wrap items-end gap-6">
          <label className="text-sm font-semibold">
            Mindesthöhe
            <select
              value={hoehe}
              onChange={(e) => setHoehe(Number(e.target.value))}
              className="mt-2 block h-10 rounded-[3px] border border-linie bg-white px-3 font-normal"
            >
              {HOEHEN.map((h) => (
                <option key={h} value={h}>
                  {h === 0 ? "egal" : `ab ${h} m`}
                </option>
              ))}
            </select>
          </label>
          <label className="flex h-10 items-center gap-2 text-sm font-medium">
            <input type="checkbox" checked={tuer} onChange={(e) => setTuer(e.target.checked)} className="h-4 w-4 accent-magenta-ink" />
            Passt durch Türen
          </label>
          <label className="flex h-10 items-center gap-2 text-sm font-medium">
            <input type="checkbox" checked={selbst} onChange={(e) => setSelbst(e.target.checked)} className="h-4 w-4 accent-magenta-ink" />
            Ohne Fahrer mietbar
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-schiefer" aria-live="polite">
        {liste.length} {liste.length === 1 ? "Gerät" : "Geräte"}
      </p>

      {liste.length ? (
        <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liste.map((g) => (
            <li key={g.slug}>{cards[g.slug]}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 border border-linie p-8">
          <p className="font-semibold">Kein Gerät passt zu allen Filtern.</p>
          <p className="mt-1 text-schiefer">Lockern Sie einen Filter oder schildern Sie uns Ihren Einsatz, wir finden eine Lösung.</p>
          <button type="button" onClick={reset} className="link mt-4 font-semibold">
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
