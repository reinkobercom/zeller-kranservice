import type { Kategorie, KategorieSlug } from "@/lib/types";
import { IMG } from "@/lib/images";

export const kategorien: Kategorie[] = [
  {
    slug: "autokran",
    urlSlug: "autokran-mieten",
    name: "Autokran",
    plural: "Autokrane",
    kurz: "Große Hakenhöhen, schnell aufgebaut, mit Kranführer",
    kennzahl: "bis 52 m Hakenhöhe",
    metaTitle: "Autokran mieten mit Kranführer | Zeller Kranservice",
    metaDescription:
      "Autokran mieten bis 52 m Hakenhöhe und 10 t Last: fünf Modelle von MKG und Klaas, mit erfahrenem Kranführer, Planung und Genehmigung. Deutschlandweit.",
    h1: "Autokran mieten",
    intro:
      "Bei Zeller Kranservice mieten Sie Autokrane von MKG und Klaas mit bis zu 52 m Hakenhöhe und bis zu 10 t Tragkraft. Jeder Autokran kommt mit erfahrenem Kranführer. Wir besichtigen die Baustelle, planen den Einsatz und kümmern uns um die Genehmigungen.",
    wannSinnvoll: [
      "Lasten müssen hoch oder weit über Gebäude, Hallen oder Störkanten gehoben werden",
      "Der Kran soll in kurzer Zeit aufgebaut sein und danach direkt weiterfahren",
      "Montage von Stahl- und Holzbauteilen, Dachelementen, Pools oder Klimageräten",
      "Bauteile über ein Wohnhaus in den Garten oder Innenhof heben",
    ],
    mitFahrer:
      "Autokrane vermieten wir ausschließlich mit eigenem Kranführer. So bleibt die Verantwortung für den Hub bei uns.",
    faq: [
      {
        frage: "Wie hoch kann ein Autokran von Zeller heben?",
        antwort:
          "Unser Klaas K1003 erreicht 52,2 m Hakenhöhe, der MKG HMK 1302 rund 51 m. Für kleinere Einsätze haben wir Modelle mit 36,5 m bis 45 m Hakenhöhe.",
      },
      {
        frage: "Wie viel Platz braucht ein Autokran?",
        antwort:
          "Das hängt vom Modell ab. Kompakte Krane wie der Klaas K950 sind klein und wendig, der MKG 1302 braucht bis zu 7,28 m Stützbreite. Bei der Besichtigung prüfen wir Stellfläche, Untergrund und Zufahrt.",
      },
      {
        frage: "Kann ich einen Autokran ohne Kranführer mieten?",
        antwort:
          "Nein. Unsere Autokrane fahren immer mit eigenem Kranführer. Ohne Fahrer vermieten wir nur Anhängerkrane.",
      },
      {
        frage: "Wie schnell bekomme ich einen Autokran?",
        antwort:
          "Das hängt von Auslastung, Einsatzort und Genehmigungen ab. Schicken Sie uns Ihre Anfrage, wir rufen Sie innerhalb von 24 Stunden zurück und nennen einen Termin.",
      },
    ],
    bild: IMG.mkgHalle,
  },
  {
    slug: "anhaengerkran",
    urlSlug: "anhaengerkran-mieten",
    name: "Anhängerkran",
    plural: "Anhängerkrane",
    kurz: "Kompakt, mit oder ohne Kranführer, ideal für Dachdecker",
    kennzahl: "12 Geräte, knapp 30 m",
    metaTitle: "Anhängerkran mieten, auch ohne Fahrer | Zeller Kranservice",
    metaDescription:
      "Anhängerkran mieten: 12 Klaas-Anhängerkrane mit knapp 30 m Hakenhöhe und 1,5 t Last, auch elektrisch. Mit oder ohne Kranführer, ideal für Dach und Garten.",
    h1: "Anhängerkran mieten",
    intro:
      "Zeller Kranservice vermietet 12 Anhängerkrane von Klaas mit knapp 30 m Hakenhöhe und bis zu 1,5 t Hakenlast, darunter zwei elektrische Modelle. Anhängerkrane mieten Sie bei uns mit oder ohne Kranführer. Sie wiegen nur 3,5 t und passen auf enge Baustellen.",
    wannSinnvoll: [
      "Dachdeckerarbeiten, Dachsanierung und Material aufs Dach bringen",
      "Enge Baustellen und Einfahrten, auf denen ein Autokran keinen Platz hat",
      "Kleinere Bauprojekte, Garten- und Landschaftsbau",
      "Längere Einsätze über mehrere Tage, bei denen Sie selbst bedienen möchten",
    ],
    mitFahrer:
      "Anhängerkrane gibt es bei uns mit erfahrenem Kranführer oder zur Selbstbedienung, wenn Sie oder Ihr Team die nötige Qualifikation mitbringen.",
    faq: [
      {
        frage: "Kann ich einen Anhängerkran ohne Kranführer mieten?",
        antwort:
          "Ja. Anhängerkrane vermieten wir auch ohne Fahrer. Wer den Kran bedient, braucht die entsprechende Qualifikation. Fragen Sie uns gern, was Sie dafür nachweisen müssen.",
      },
      {
        frage: "Was kann ein Anhängerkran heben?",
        antwort:
          "Der Klaas K21-30 RS hebt bis 1,5 t und erreicht knapp 30 m Hakenhöhe. Seitlich schafft er noch 250 kg auf 21 m Ausladung.",
      },
      {
        frage: "Gibt es Zubehör für Dachdecker?",
        antwort:
          "Ja, zum Anhängerkran können Sie Ziegelzangen und Ziegelmaxe dazubuchen.",
      },
    ],
    bild: IMG.anhaengerkran,
  },
  {
    slug: "minikran",
    urlSlug: "minikran-mieten",
    name: "Minikran",
    plural: "Minikrane",
    kurz: "Passt durch Türen, hebt 3,2 t, auch in Gebäuden",
    kennzahl: "77 cm schmal, 3,2 t",
    metaTitle: "Minikran mieten: passt durch jede Tür | Zeller Kranservice",
    metaDescription:
      "Minikran mieten: Jekko SPX532 mit 3,2 t Tragkraft und 17,3 m Höhe, nur 77 cm breit. Für Glasmontage, Innenausbau und enge Gärten, mit Kranführer.",
    h1: "Minikran mieten",
    intro:
      "Unser Minikran Jekko SPX532 ist nur 77 cm breit und fährt durch normale Türen, hebt aber bis 3,2 t und erreicht 17,3 m Höhe. Er eignet sich für Glasmontage, Arbeiten in Gebäuden und enge Gärten. Wir liefern ihn mit erfahrenem Kranführer.",
    wannSinnvoll: [
      "Glasscheiben und Fassadenelemente montieren",
      "Arbeiten in Hallen, Treppenhäusern und Innenhöfen",
      "Gärten und Baustellen, die nur über schmale Durchgänge erreichbar sind",
      "Schwere Bauteile, die ein Hubgerät allein nicht schafft",
    ],
    mitFahrer:
      "Den Minikran setzen wir mit eigenem Kranführer ein, der ihn auf engem Raum sicher bewegt.",
    faq: [
      {
        frage: "Passt der Minikran durch eine Haustür?",
        antwort:
          "In vielen Fällen ja. Der Jekko SPX532 ist 77 cm breit und 1,96 m hoch. Bei der Besichtigung messen wir Durchgänge und prüfen die Bodenbelastung.",
      },
      {
        frage: "Wie viel hebt ein Minikran?",
        antwort:
          "Bis zu 3,2 t im Nahbereich. Mit Ausleger erreicht er 17,3 m Höhe und 14,8 m Reichweite, dabei sinkt die Last entsprechend dem Lastdiagramm.",
      },
      {
        frage: "Kann der Minikran Glasscheiben setzen?",
        antwort:
          "Ja, mit Vakuumheber setzt er Glasscheiben präzise. Für reine Glasarbeiten bis 600 kg haben wir zusätzlich das Glashebegerät Jekko MPK06.",
      },
    ],
    bild: IMG.minikran,
  },
  {
    slug: "hubsteiger",
    urlSlug: "hubsteiger-mieten",
    name: "Hubsteiger",
    plural: "Hubsteiger",
    kurz: "26 m Arbeitshöhe auf einem 3,5-t-Fahrzeug",
    kennzahl: "26 m Arbeitshöhe",
    metaTitle: "Hubsteiger mieten: 26 m Arbeitshöhe | Zeller Kranservice",
    metaDescription:
      "Hubsteiger mieten: Ruthmann TBR 260 mit 26 m Arbeitshöhe, 17 m seitlicher Reichweite und 250 kg Korblast auf 3,5-t-LKW. Schnell vor Ort, kein Gerüst nötig.",
    h1: "Hubsteiger mieten",
    intro:
      "Mit unserem Hubsteiger Ruthmann TBR 260 erreichen Sie 26 m Arbeitshöhe und bis zu 17 m seitliche Reichweite, ohne ein Gerüst zu stellen. Der Korb trägt 250 kg, das Fahrzeug wiegt nur 3,5 t. Damit ist er schnell aufgebaut und passt auch in enge Straßen.",
    wannSinnvoll: [
      "Fassaden-, Fenster- und Dachrinnenarbeiten",
      "Wartung und Montage an hohen Gebäuden und Hallen",
      "Baumpflege und Arbeiten über Hindernisse hinweg",
      "Kurze Arbeiten, für die sich ein Gerüst nicht lohnt",
    ],
    mitFahrer:
      "Den Hubsteiger stellen wir mit Bediener. Sprechen Sie uns an, wenn Sie andere Wünsche haben.",
    faq: [
      {
        frage: "Wie hoch kommt man mit dem Hubsteiger?",
        antwort:
          "Der Ruthmann TBR 260 erreicht 26 m Arbeitshöhe und bis zu 17 m seitliche Reichweite.",
      },
      {
        frage: "Wie viele Personen passen in den Korb?",
        antwort:
          "Die Korblast liegt bei 250 kg. Das reicht für zwei Personen mit leichtem Werkzeug. Für schweres Material nutzen Sie besser einen Kran.",
      },
      {
        frage: "Wann lohnt sich ein Hubsteiger statt eines Gerüsts?",
        antwort:
          "Bei kurzen Arbeiten von Stunden bis wenigen Tagen. Der Hubsteiger ist in Minuten einsatzbereit, ein Gerüst braucht Auf- und Abbau. Mehr dazu in unserem Ratgeber.",
      },
    ],
    bild: IMG.hubsteiger,
  },
  {
    slug: "arbeitsbuehne",
    urlSlug: "arbeitsbuehne-mieten",
    name: "Arbeitsbühne",
    plural: "Arbeitsbühnen",
    kurz: "Raupen- und Scherenbühnen für drinnen und draußen",
    kennzahl: "Raupe & Schere",
    metaTitle: "Arbeitsbühne mieten: Raupen- & Scherenbühne | Zeller",
    metaDescription:
      "Arbeitsbühne mieten bei Zeller Kranservice: Raupenbühne für unwegsames Gelände und Innenräume, Scherenbühne für Hallen. Mit Beratung und Lieferung.",
    h1: "Arbeitsbühne mieten",
    intro:
      "Neben Kranen vermieten wir Raupenbühnen und Scherenbühnen. Die Raupenbühne fährt durch Türen und über unebenen Boden, etwa in Kirchen oder Gärten. Die Scherenbühne bringt Sie in Hallen sicher unter die Decke.",
    wannSinnvoll: [
      "Arbeiten in Kirchen, Foyers und Hallen mit empfindlichem Boden",
      "Gelände ohne feste Zufahrt, Hanglagen und Gärten",
      "Montage an Hallendecken, Beleuchtung und Lüftung",
      "Wartung in Produktion und Lager",
    ],
    mitFahrer:
      "Wir beraten Sie, welche Bühne passt, und klären mit Ihnen, ob Sie selbst bedienen oder einen Bediener brauchen.",
    faq: [
      {
        frage: "Was ist der Unterschied zwischen Raupen- und Scherenbühne?",
        antwort:
          "Die Raupenbühne hat einen Gelenkarm und ein Raupenfahrwerk. Sie fährt durch Türen und über unebenen Boden. Die Scherenbühne hebt senkrecht und bietet eine große Plattform für Arbeiten an Decken.",
      },
      {
        frage: "Kann eine Arbeitsbühne in Gebäuden eingesetzt werden?",
        antwort:
          "Ja. Unsere Raupenbühne war zum Beispiel schon in einer Kirche im Einsatz. Wir prüfen vorab Türbreiten und Bodenbelastung.",
      },
    ],
    bild: IMG.raupenbuehneKirche,
  },
  {
    slug: "glashebegeraet",
    urlSlug: "glashebegeraet-mieten",
    name: "Glashebegerät",
    plural: "Glashebegeräte",
    kurz: "Glasscheiben bis 600 kg präzise setzen",
    kennzahl: "600 kg Hublast",
    metaTitle: "Glashebegerät mieten bis 600 kg | Zeller Kranservice",
    metaDescription:
      "Glashebegerät mieten: Jekko MPK06 mit 600 kg Hublast und Elektroantrieb, für Glasscheiben, Fenster und Schaufenster. Kompakt, leise, auch in Gebäuden.",
    h1: "Glashebegerät mieten",
    intro:
      "Mit dem Glashebegerät Jekko MPK06 setzen Sie Glasscheiben, Fenster und Paneele bis 600 kg präzise und ohne Kraftaufwand. Das Gerät fährt elektrisch, ist kompakt und arbeitet daher auch in Gebäuden. Den passenden Vakuumsauger bringen wir mit.",
    wannSinnvoll: [
      "Einbau großer Fensterscheiben und Schaufenster",
      "Glasfassaden und Glasgeländer im Erdgeschoss und Innenbereich",
      "Paneele und Platten, die sauber angesetzt werden müssen",
      "Arbeiten in Gebäuden, bei denen Abgase und Lärm stören",
    ],
    mitFahrer:
      "Wir liefern das Glashebegerät mit Vakuumsauger und klären mit Ihnen, ob unser Bediener mitkommt.",
    faq: [
      {
        frage: "Wie schwer darf eine Glasscheibe sein?",
        antwort:
          "Der Jekko MPK06 hebt bis 600 kg. Für schwerere Scheiben oder größere Höhen setzen wir den Minikran mit Vakuumheber ein.",
      },
      {
        frage: "Funktioniert das Glashebegerät auch in Innenräumen?",
        antwort:
          "Ja. Es fährt mit Elektromotor und ist 76 cm breit. Damit passt es durch viele Türen.",
      },
    ],
    bild: IMG.glasworker,
  },
];

export const kategorieBySlug = (slug: KategorieSlug) =>
  kategorien.find((k) => k.slug === slug)!;

export const kategorieByUrlSlug = (urlSlug: string) =>
  kategorien.find((k) => k.urlSlug === urlSlug);
