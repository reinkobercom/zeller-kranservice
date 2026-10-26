/**
 * Bildquellen. Vorerst direkt von der Altseite geladen.
 * VOR DEM DOMAIN-UMZUG: alle Dateien nach /public/bilder/ kopieren und
 * BASE auf "/bilder/" umstellen (siehe README), sonst brechen die Bilder,
 * sobald WordPress abgeschaltet wird.
 */
const BASE = "https://zeller-kranservice.de/wp-content/uploads/";
const u = (p: string) => BASE + p;

export const IMG = {
  logo: u("2026/07/Zeller_Logo-2026.png"),

  // Autokrane
  mkg1251: u("2024/07/mkg-1251-zeller-2.jpg"),
  mkg1251Seite: u("2024/10/2024-07-20-Zeller-90.jpg"),
  mkg1302: u("2025/09/mkg-1302.jpg"),
  mkg582: u("2026/07/MKG_582_zeller.jpg"),
  k1003Seite: u("2024/10/2024-07-20-Zeller-63.jpg"),
  k950Seite: u("2024/10/2024-07-20-Zeller-64.jpg"),

  // MKG im Einsatz (Hallenbau)
  mkgHalle: u("2026/07/mkg-beast-zeller-13.jpg"),
  mkgHalle2: u("2026/07/mkg-beast-zeller-27.jpg"),
  mkgHalleSeite: u("2026/07/mkg-beast-zeller-30.jpg"),
  mkgHalleWeit: u("2026/07/mkg-beast-zeller-35.jpg"),
  mkgMontage: u("2026/07/mkg-beast-zeller-38.jpg"),
  mkgAusleger: u("2026/07/mkg-beast-zeller-12.jpg"),
  mkgAusleger2: u("2026/07/mkg-beast-zeller-23.jpg"),
  mkgBeast: u("2026/07/mkg-beast-zeller-29.jpg"),
  mkgHimmel: u("2026/07/mkg-beast-zeller-32.jpg"),
  mkgDach: u("2026/07/mkg-beast-zeller-20.jpg"),
  mkgDach2: u("2026/07/mkg-beast-zeller-24.jpg"),
  mkgSchraeg: u("2026/07/mkg-beast-zeller-33.jpg"),
  mkgHalle3: u("2026/07/mkg-beast-zeller-34.jpg"),
  mkgVorne: u("2026/07/mkg-beast-zeller-4.jpg"),
  mkgVorne2: u("2026/07/mkg-beast-zeller-6.jpg"),

  // Anhängerkran
  anhaengerkran: u("2022/09/anhaengerkran-zeller.jpg"),
  anhaengerkranSeite: u("2024/10/2024-07-20-Zeller-65.jpg"),

  // Minikran Jekko SPX532
  minikran: u("2026/08/b29767f4-03fa-46b0-afa3-fe76241f1566.jpg"),
  minikranStudio: u("2024/10/2024-07-20-Zeller-67.jpg"),
  minikranGlas1: u("2026/07/jekko-zeller-1.jpg"),
  minikranGlas2: u("2026/07/jekko-zeller-3.jpg"),
  minikranGlas3: u("2026/07/jekko-zeller-5.jpg"),
  minikranGlas4: u("2026/07/jekko-zeller-8.jpg"),
  minikranGarten: u("2026/07/jekko-zeller-9.jpg"),
  minikranGarten2: u("2026/07/jekko-zeller-10.jpg"),
  minikranFassade: u("2026/07/jekko-zeller-11.jpg"),
  minikranFassade2: u("2026/07/jekko-zeller-12.jpg"),
  minikranHof: u("2026/07/jekko-zeller-15.jpg"),
  minikranHof2: u("2026/07/jekko-zeller-16.jpg"),

  // Glashebegerät / Glasworker
  glasworker: u("2024/10/2024-07-20-Zeller-71.jpg"),
  glasworker2: u("2024/10/2024-07-20-Zeller-73.jpg"),
  glasworkerInnen: u("2023/03/glasworker-5.jpg"),
  glasworkerInnen2: u("2023/03/glasworker-12.jpg"),
  glasworkerFassade: u("2023/03/glasworker-1.jpg"),
  glasworkerFassade2: u("2023/03/glasworker-2.jpg"),
  glassauger: u("2024/10/2024-07-20-Zeller-77.jpg"),
  glassauger2: u("2024/10/2024-07-20-Zeller-75.jpg"),

  // Hubsteiger & Bühnen
  hubsteiger: u("2026/07/hubsteiger-zeller-kran-1.jpeg"),
  raupenbuehne: u("2024/10/2024-07-20-Zeller-69.jpg"),
  raupenbuehneKirche: u("2023/05/raupenbuehne-in-kirche.jpg"),
  raupenbuehneTuer: u("2023/05/raupenbuehne-durch-tuer.jpg"),
  scherenbuehne: u("2023/05/scherenbuehne-aktion.jpg"),

  // Flotte
  flotteSeite: u("2024/10/2024-07-20-Zeller-63.jpg"),

  // Team
  teamDirk: u("2022/09/teambild-dirk.jpg"),
  teamBarbara: u("2024/01/barbara_zeller-jolmes-3.jpg"),
  teamNico: u("2022/09/teambild-nico.jpg"),
  teamMatthias: u("2022/09/teambild-matthias.jpg"),
  teamJens: u("2022/09/teambild-jens.jpg"),
} as const;
