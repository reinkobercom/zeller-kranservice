import type { Stadt } from "@/lib/types";

export const staedte: Stadt[] = [
  // ---------------------------------------------------------------- NRW
  {
    slug: "werl",
    name: "Werl",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 31.000",
    luftlinieKm: 0,
    intro:
      "Kran mieten in Werl heißt bei uns: kürzeste Wege, denn hier ist unser Firmensitz in der Runtestraße 34. Von Werl aus stellen wir Autokrane, Minikrane und Arbeitsbühnen bereit, auf Wunsch mit erfahrenem Kranführer. Für Einsätze im Stadtgebiet sind wir besonders schnell vor Ort.",
    lage:
      "Werl hat eine kompakte Altstadt rund um die Wallfahrtsbasilika mit engen Gassen und dicht stehenden Häusern. In den Ortsteilen überwiegen Einfamilienhäuser mit Gärten, oft nur über schmale Zufahrten erreichbar. Dazu kommen Gewerbeflächen in der Nähe von A44 und A445 mit Hallen und Lagerbauten.",
    stadtteile: ["Büderich", "Westönnen", "Hilbeck", "Holtum", "Sönnern", "Budberg", "Mawicke"],
    typischeEinsaetze: ["pool-einheben", "wintergarten", "dachdecker", "hallenbau"],
    empfohleneGeraete: ["k950", "klaas-k21-30-rs", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Steht der Kran in Werl auf einer öffentlichen Straße oder einem Gehweg, braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Zuständig sind die Stellen der Stadt Werl (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag für Sie; rechnen Sie mit einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Soest", "Unna", "Wickede (Ruhr)", "Ense", "Welver"],
    faq: [
      {
        frage: "Wo genau sitzt Zeller Kranservice in Werl?",
        antwort:
          "Unser Firmensitz ist in der Runtestraße 34, 59457 Werl. Von hier starten unsere Krane zu Einsätzen in Werl und ganz Deutschland. Nach Ihrer Anfrage rufen wir Sie innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran passt in einen Werler Garten hinter dem Haus?",
        antwort:
          "Ist die Zufahrt schmal, ist oft der Minikran Jekko SPX532 die Lösung, denn er ist nur 77 cm breit. Reicht die Zufahrt für ein Fahrzeug, hebt ein kompakter Autokran wie der Klaas K950 über das Haus hinweg. Welche Variante passt, klären wir bei der Besichtigung.",
      },
      {
        frage: "Kann ich in Werl einen Anhängerkran ohne Kranführer mieten?",
        antwort:
          "Ja, den Anhängerkran Klaas K21-30 RS können Sie auch ohne Bedienpersonal mieten. Mit 3,5 t Gesamtgewicht und Rangierantrieb lässt er sich gut auf dem Grundstück positionieren. Autokrane stellen wir immer mit erfahrenem Kranführer.",
      },
    ],
  },
  {
    slug: "soest",
    name: "Soest",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 48.000",
    luftlinieKm: 15,
    intro:
      "Kran mieten in Soest ist für uns ein Nachbarschaftseinsatz: Von Werl sind es nur rund 15 km Luftlinie. Wir liefern Autokrane, Minikrane und Hubsteiger, Autokrane immer mit Kranführer. Auch die Genehmigung für die Soester Altstadt übernehmen wir.",
    lage:
      "Die Soester Altstadt liegt innerhalb der alten Wallanlage und hat viele Fachwerk- und Grünsandsteinhäuser. Die Gassen sind schmal, Stellflächen für einen Kran sind knapp. Außerhalb des Walls prägen Wohngebiete mit Einfamilienhäusern und Gewerbeflächen das Bild.",
    stadtteile: ["Ampen", "Deiringsen", "Hiddingsen", "Meckingsen", "Ostönnen", "Müllingsen", "Paradiese"],
    typischeEinsaetze: ["dachdecker", "zimmerei", "fenstereinbau", "glasmontage"],
    empfohleneGeraete: ["mkg-582", "jekko-spx532", "ruthmann-tbr-260", "jekko-mpk06"],
    genehmigung:
      "Für einen Kran auf öffentlicher Fläche in Soest sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Diese erteilen die zuständigen Stellen der Stadt Soest (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir kümmern uns um den Antrag; die Bearbeitung dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Werl", "Bad Sassendorf", "Welver", "Möhnesee", "Lippetal"],
    faq: [
      {
        frage: "Kommt ein Kran in die engen Gassen der Soester Altstadt?",
        antwort:
          "Oft ja, aber das hängt von Durchfahrtsbreite und Stellfläche ab. Ein kompakter Langarmkran wie der MKG 582 braucht wenig Platz und überbrückt mit 36,5 m Hakenhöhe größere Distanzen. Wir prüfen die Situation vorab bei einer Besichtigung.",
      },
      {
        frage: "Welches Gerät eignet sich für Dacharbeiten an einem Soester Fachwerkhaus?",
        antwort:
          "Für Material aufs Dach eignet sich ein kompakter Autokran oder bei wenig Platz der Minikran Jekko SPX532. Für Arbeiten an Fassade und Traufe ist der Hubsteiger Ruthmann TBR 260 mit 26 m Arbeitshöhe eine Option. Wir beraten Sie, was zu Ihrem Gebäude passt.",
      },
      {
        frage: "Wer beantragt in Soest die Genehmigung für den Kran?",
        antwort:
          "Das übernehmen wir für Sie. Wir stimmen uns mit den zuständigen Stellen der Stadt Soest ab und reichen die Unterlagen ein. Planen Sie dafür einige Werktage bis wenige Wochen ein.",
      },
    ],
  },
  {
    slug: "hamm",
    name: "Hamm",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 180.000",
    luftlinieKm: 15,
    intro:
      "Kran mieten in Hamm ist mit Zeller Kranservice unkompliziert, denn Werl liegt nur rund 15 km entfernt. Wir stellen Autokrane bis rund 52 m Hakenhöhe mit Kranführer sowie Minikrane und Arbeitsbühnen. Besichtigung, Planung und Genehmigung übernehmen wir.",
    lage:
      "Hamm ist eine weitläufige Stadt an Lippe und Datteln-Hamm-Kanal mit Bergbaugeschichte. In Ortsteilen wie Rhynern und Uentrop stehen viele Einfamilienhäuser mit Gärten. Daneben gibt es Gewerbe- und Industrieflächen mit Hallen, die regelmäßig erweitert oder saniert werden.",
    stadtteile: ["Hamm-Mitte", "Bockum-Hövel", "Heessen", "Herringen", "Pelkum", "Rhynern", "Uentrop"],
    typischeEinsaetze: ["hallenbau", "pool-einheben", "galabau", "dachdecker"],
    empfohleneGeraete: ["mkg-1302", "k1003", "k950", "klaas-k21-30-rs"],
    genehmigung:
      "Wird der Kran in Hamm auf einer öffentlichen Straße aufgestellt, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Ansprechpartner sind die zuständigen Stellen der Stadt Hamm (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Den Antrag stellen wir; einplanen sollten Sie einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Werne", "Bönen", "Ahlen", "Drensteinfurt", "Welver"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice in alle Stadtbezirke von Hamm?",
        antwort:
          "Ja, wir sind in allen Stadtbezirken von Hamm im Einsatz, von Bockum-Hövel bis Uentrop. Die Anfahrt aus Werl ist kurz. Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Hallenbau in Hamm?",
        antwort:
          "Für Binder, Dachelemente und Trapezbleche eignen sich unsere großen Autokrane wie der MKG HMK 1302 mit ca. 51 m Hakenhöhe oder der Klaas K1003. Welcher Kran passt, hängt von Gewichten und Ausladung ab. Das klären wir in der Planung mit Ihnen.",
      },
      {
        frage: "Kann ein Pool in einen Garten in Hamm-Rhynern gehoben werden?",
        antwort:
          "In der Regel ja, wenn der Kran vor dem Haus stehen kann. Ein Autokran hebt das Becken über das Haus in den Garten. Ob dafür eine Genehmigung für die Straße nötig ist, prüfen wir bei der Besichtigung.",
      },
    ],
  },
  {
    slug: "unna",
    name: "Unna",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 59.000",
    luftlinieKm: 15,
    intro:
      "Kran mieten in Unna: Zeller Kranservice kommt aus dem rund 15 km entfernten Werl und ist schnell vor Ort. Wir liefern Autokrane mit Kranführer, Anhängerkrane auch ohne Bedienung sowie Hubsteiger. Die Planung und nötige Genehmigungen übernehmen wir.",
    lage:
      "Unna hat eine Altstadt mit Fachwerkhäusern und engen Straßen rund um den Markt. Königsborn erinnert an die frühere Saline, heute dominieren dort Wohngebiete. Durch die Lage an mehreren Autobahnen gibt es viele Logistik- und Gewerbeflächen.",
    stadtteile: ["Königsborn", "Massen", "Lünern", "Hemmerde", "Billmerich", "Mühlhausen", "Uelzen"],
    typischeEinsaetze: ["hallenbau", "wintergarten", "fenstereinbau", "zimmerei"],
    empfohleneGeraete: ["k1003", "mkg-1251", "klaas-k21-30-rs", "jekko-mpk06"],
    genehmigung:
      "Braucht der Kran in Unna öffentliche Verkehrsfläche, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung Pflicht. Diese gibt es bei den zuständigen Stellen der Stadt Unna (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen beides für Sie; die Frist liegt bei einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Kamen", "Holzwickede", "Fröndenberg", "Bönen", "Dortmund"],
    faq: [
      {
        frage: "Wie schnell ist Zeller Kranservice in Unna?",
        antwort:
          "Unser Firmensitz in Werl liegt nur rund 15 km von Unna entfernt. Den konkreten Termin stimmen wir nach Besichtigung und Planung mit Ihnen ab. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welches Gerät hilft beim Einbau großer Glasscheiben in Unna?",
        antwort:
          "Für Glasscheiben gibt es das Glashebegerät Jekko MPK06 mit bis zu 600 kg Tragkraft. Es setzt Scheiben kontrolliert in die Öffnung. Bei höheren Stockwerken kombinieren wir es mit einem Kran.",
      },
      {
        frage: "Brauche ich in der Unnaer Innenstadt eine Genehmigung für den Kran?",
        antwort:
          "Sobald der Kran auf Straße, Gehweg oder Parkplatz steht, ja. Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Unna. Planen Sie dafür einige Werktage bis wenige Wochen ein.",
      },
    ],
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 590.000",
    luftlinieKm: 30,
    intro:
      "Kran mieten in Dortmund: Zeller Kranservice ist von Werl aus über die A44 schnell im Dortmunder Stadtgebiet. Wir stellen Autokrane bis rund 52 m Hakenhöhe mit Kranführer, Minikrane für Innenhöfe und Arbeitsbühnen. Genehmigungen für Straßen in Dortmund beantragen wir für Sie.",
    lage:
      "Im Kreuzviertel und in der Innenstadt stehen viele Gründerzeit-Altbauten mit Hinterhöfen und wenig Stellfläche. Rund um den Phoenix-See in Hörde ist auf früherem Stahlwerksgelände ein Neubauquartier entstanden. In den Außenbezirken überwiegen Einfamilienhäuser, im Hafen- und Logistikbereich große Hallen.",
    stadtteile: ["Innenstadt", "Hörde", "Aplerbeck", "Brackel", "Hombruch", "Huckarde", "Eving", "Mengede"],
    typischeEinsaetze: ["hallenbau", "dachdecker", "glasmontage", "geruestbau"],
    empfohleneGeraete: ["mkg-1302", "k1003", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Ein Kran auf öffentlicher Straße in Dortmund braucht eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Diese erteilen die zuständigen Stellen der Stadt Dortmund (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag; je nach Lage dauert es einige Werktage bis wenige Wochen.",
    nachbarorte: ["Lünen", "Castrop-Rauxel", "Witten", "Schwerte", "Holzwickede"],
    faq: [
      {
        frage: "Welcher Kran eignet sich für enge Innenhöfe im Dortmunder Kreuzviertel?",
        antwort:
          "Ist der Hof nur durch eine Tür oder Durchfahrt erreichbar, setzen wir den Minikran Jekko SPX532 ein. Er ist 77 cm breit und hat 17,3 m Hakenhöhe. Alternativ hebt ein Autokran mit großer Ausladung von der Straße über das Vorderhaus.",
      },
      {
        frage: "Fährt Zeller Kranservice in alle Dortmunder Stadtbezirke?",
        antwort:
          "Ja, wir arbeiten im gesamten Stadtgebiet, von Mengede bis Aplerbeck. Die Anfahrt aus Werl ist kurz. Wir planen den Einsatz nach einer Besichtigung vor Ort.",
      },
      {
        frage: "Wer kümmert sich in Dortmund um die Straßensperrung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Dortmund. Die Auflagen aus der Genehmigung setzen wir am Einsatztag um. Planen Sie einige Werktage bis wenige Wochen Vorlauf ein.",
      },
    ],
  },
  {
    slug: "arnsberg",
    name: "Arnsberg",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 73.000",
    luftlinieKm: 20,
    intro:
      "Kran mieten in Arnsberg: Von Werl aus erreichen wir das Ruhrtal in kurzer Zeit. Wir liefern Autokrane mit Kranführer, Minikrane und Hubsteiger auch für Hanglagen. Besichtigung, Planung und Genehmigung gehören zu unserem Service.",
    lage:
      "Arnsberg liegt im Ruhrtal am Rand des Sauerlands, viele Grundstücke liegen am Hang. Die Altstadt mit dem Glockenturm sitzt auf einem Bergrücken mit steilen, engen Straßen. In Neheim und Hüsten gibt es Industrie- und Gewerbeflächen sowie dichte Wohnbebauung.",
    stadtteile: ["Neheim", "Hüsten", "Alt-Arnsberg", "Oeventrop", "Herdringen", "Voßwinkel", "Müschede"],
    typischeEinsaetze: ["dachdecker", "zimmerei", "wintergarten", "pool-einheben"],
    empfohleneGeraete: ["mkg-1251", "k950", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Steht der Kran in Arnsberg auf öffentlichem Grund, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Arnsberg (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir übernehmen den Antrag; rechnen Sie mit einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Sundern", "Meschede", "Ense", "Wickede (Ruhr)", "Balve"],
    faq: [
      {
        frage: "Kann ein Autokran in Arnsberg am Hang aufgestellt werden?",
        antwort:
          "Das hängt von Neigung und Untergrund der Stellfläche ab. Autokrane gleichen Neigungen über ihre Abstützung bis zu einem gewissen Maß aus. Wir prüfen die Stellfläche vorab bei einer Besichtigung.",
      },
      {
        frage: "Welcher Kran passt für ein Dach in der Arnsberger Altstadt?",
        antwort:
          "Bei engen Straßen eignet sich ein kompakter Kran wie der Klaas K950 mit über 43 m Hakenhöhe. Kommt kein Fahrzeug heran, ist der Minikran Jekko SPX532 eine Option. Wir wählen das Gerät nach der Besichtigung aus.",
      },
      {
        frage: "Wer holt in Arnsberg die Genehmigung für den Kran ein?",
        antwort:
          "Das machen wir. Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Arnsberg. Die Bearbeitung dauert einige Werktage bis wenige Wochen.",
      },
    ],
  },
  {
    slug: "lippstadt",
    name: "Lippstadt",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 68.000",
    luftlinieKm: 35,
    intro:
      "Kran mieten in Lippstadt: Zeller Kranservice kommt aus Werl, rund 35 km Luftlinie entfernt. Wir stellen Autokrane mit Kranführer, Anhängerkrane und Arbeitsbühnen. Planung und Genehmigungen übernehmen wir für Sie.",
    lage:
      "Lippstadt liegt flach an der Lippe, mehrere Wasserläufe ziehen sich durch die Innenstadt. Die Altstadt ist dicht bebaut, Zufahrten über Brücken und schmale Straßen schränken Kranstandorte ein. Am Stadtrand gibt es große Industrieflächen und neue Wohngebiete mit Einfamilienhäusern.",
    stadtteile: ["Bad Waldliesborn", "Cappel", "Lipperode", "Bökenförde", "Eickelborn", "Overhagen", "Hellinghausen"],
    typischeEinsaetze: ["hallenbau", "pool-einheben", "galabau", "wintergarten"],
    empfohleneGeraete: ["k1003", "mkg-1251", "klaas-k21-30-rs", "scherenbuehne"],
    genehmigung:
      "Für einen Kran auf einer öffentlichen Straße in Lippstadt sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese vergeben die zuständigen Stellen der Stadt Lippstadt (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir reichen den Antrag ein; das dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Erwitte", "Geseke", "Lippetal", "Wadersloh", "Rietberg"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Lippstadt?",
        antwort:
          "Ja, Lippstadt liegt in unserem direkten Einsatzgebiet rund um Werl. Wir sind dort regelmäßig mit Autokranen und Arbeitsbühnen im Einsatz. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für ein Neubaugebiet in Lippstadt?",
        antwort:
          "Für Pool, Fertigteile oder Dachmaterial reicht oft ein mittlerer Autokran wie der MKG 1251. Auf freien Grundstücken kann auch der Anhängerkran Klaas K21-30 RS genügen. Wir entscheiden das nach Gewicht und Ausladung.",
      },
      {
        frage: "Wer beantragt in Lippstadt die Genehmigung?",
        antwort:
          "Wir kümmern uns um Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Lippstadt. Sie müssen sich darum nicht selbst kümmern. Planen Sie einige Werktage bis wenige Wochen Vorlauf ein.",
      },
    ],
  },
  {
    slug: "menden",
    name: "Menden",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 52.000",
    luftlinieKm: 15,
    intro:
      "Kran mieten in Menden (Sauerland) ist für uns ein kurzer Weg: Werl liegt nur rund 15 km entfernt. Wir liefern Autokrane mit Kranführer, Minikrane und Hubsteiger. Besichtigung und Genehmigung übernehmen wir.",
    lage:
      "Menden liegt an der Hönne am Übergang vom Ruhrtal ins Sauerland. Die Altstadt ist kleinteilig mit engen Straßen, am Stadtrand steigen viele Wohngebiete den Hang hinauf. Entlang der Hönne gibt es Industrie- und Gewerbebetriebe mit Hallen.",
    stadtteile: ["Lendringsen", "Bösperde", "Halingen", "Oesbern", "Platte Heide", "Schwitten"],
    typischeEinsaetze: ["dachdecker", "pool-einheben", "zimmerei", "fenstereinbau"],
    empfohleneGeraete: ["k950", "mkg-582", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Wenn der Kran in Menden auf einer öffentlichen Straße steht, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Menden (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen das für Sie; die Dauer liegt bei einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Fröndenberg", "Balve", "Hemer", "Iserlohn", "Wickede (Ruhr)"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Menden-Lendringsen?",
        antwort:
          "Ja, wir sind in allen Mendener Ortsteilen im Einsatz. Von Werl aus ist die Anfahrt kurz. Den Termin stimmen wir nach der Besichtigung mit Ihnen ab.",
      },
      {
        frage: "Welcher Kran eignet sich für ein Haus am Hang in Menden?",
        antwort:
          "Ein kompakter Langarmkran wie der MKG 582 braucht wenig Stellfläche und erreicht 36,5 m Hakenhöhe. So kann er oft von der Straße aus über das Haus heben. Ob die Stellfläche passt, prüfen wir vorab.",
      },
      {
        frage: "Brauche ich für den Kran in Menden eine Genehmigung?",
        antwort:
          "Ja, wenn der Kran öffentliche Verkehrsfläche nutzt. Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Menden. Steht der Kran auf Ihrem Grundstück, entfällt das in der Regel.",
      },
    ],
  },
  {
    slug: "iserlohn",
    name: "Iserlohn",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 92.000",
    luftlinieKm: 25,
    intro:
      "Kran mieten in Iserlohn: Zeller Kranservice kommt aus dem rund 25 km entfernten Werl. Wir stellen Autokrane mit Kranführer, Minikrane und Hubsteiger, passend für die Hanglagen der Stadt. Planung und Genehmigungen übernehmen wir.",
    lage:
      "Iserlohn liegt am Nordrand des Sauerlands, viele Straßen sind steil und kurvig. Die Altstadt ist am Hang gebaut und eng bebaut. In Letmathe an der Lenne und in Sümmern gibt es Gewerbeflächen und Wohngebiete mit Einfamilienhäusern.",
    stadtteile: ["Letmathe", "Hennen", "Sümmern", "Kesbern", "Drüpplingsen", "Iserlohnerheide", "Oestrich"],
    typischeEinsaetze: ["dachdecker", "geruestbau", "pool-einheben", "glasmontage"],
    empfohleneGeraete: ["mkg-1251", "mkg-582", "jekko-spx532", "raupenbuehne"],
    genehmigung:
      "Für einen Kran auf öffentlichem Straßenraum in Iserlohn braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Diese stellen die zuständigen Stellen der Stadt Iserlohn (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt) aus. Wir übernehmen den Antrag; einplanen sollten Sie einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Hemer", "Menden", "Schwerte", "Hagen", "Altena"],
    faq: [
      {
        frage: "Kommt ein Kran auch in steile Straßen in Iserlohn?",
        antwort:
          "In vielen Fällen ja. Entscheidend sind Zufahrt, Kurvenradien und eine ausreichend ebene Stellfläche. Wir sehen uns die Lage vorab an und wählen danach das Gerät.",
      },
      {
        frage: "Welches Gerät eignet sich für Arbeiten auf unebenem Gelände in Iserlohn?",
        antwort:
          "Auf Hängen und weichem Boden ist die Raupenbühne Almac B1890 eine gute Wahl, weil sie auf Ketten fährt. Sie erreicht 18 m Arbeitshöhe und passt durch Türen. Für Lasten in schwer erreichbaren Gärten gibt es den Minikran Jekko SPX532. Wir beraten Sie, was zu Ihrem Grundstück passt.",
      },
      {
        frage: "Wer kümmert sich in Iserlohn um die Genehmigung?",
        antwort:
          "Das übernehmen wir. Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Iserlohn. Die Bearbeitung dauert einige Werktage bis wenige Wochen.",
      },
    ],
  },
  {
    slug: "kamen",
    name: "Kamen",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 43.000",
    luftlinieKm: 20,
    intro:
      "Kran mieten in Kamen: Von Werl aus sind wir über die A2-Anbindung schnell am Kamener Kreuz. Wir liefern Autokrane mit Kranführer für Hallen und Wohnbau sowie Arbeitsbühnen. Besichtigung, Planung und Genehmigung übernehmen wir.",
    lage:
      "Kamen liegt am Autobahnkreuz von A1 und A2, rundherum sind große Logistik- und Gewerbeflächen entstanden. Die Innenstadt ist kompakt mit dichter Bebauung. In Methler und Heeren-Werve überwiegen Wohngebiete, teils mit alten Zechensiedlungen.",
    stadtteile: ["Kamen-Mitte", "Methler", "Heeren-Werve", "Südkamen", "Westick", "Wasserkurl", "Rottum"],
    typischeEinsaetze: ["hallenbau", "dachdecker", "pool-einheben", "bauschutt"],
    empfohleneGeraete: ["mkg-1302", "k1003", "k950", "scherenbuehne"],
    genehmigung:
      "Steht der Kran in Kamen auf einer öffentlichen Fläche, braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Erteilt werden sie von den zuständigen Stellen der Stadt Kamen (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag für Sie; das dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Unna", "Bergkamen", "Bönen", "Lünen", "Dortmund"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Kamen?",
        antwort:
          "Ja, Kamen liegt nur rund 20 km von unserem Firmensitz in Werl entfernt. Wir sind dort für Gewerbe und Privatkunden im Einsatz. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für eine Logistikhalle in Kamen?",
        antwort:
          "Für Hallenbau setzen wir große Autokrane wie den MKG HMK 1302 oder den Klaas K1003 ein. Sie erreichen über 50 m Hakenhöhe. Für Arbeiten unter dem Hallendach eignet sich die Scherenbühne Almac BIBI 1090 mit 10 m Arbeitshöhe.",
      },
      {
        frage: "Kann der Kran in Kamen beim Abtransport von Bauschutt helfen?",
        antwort:
          "Ja, ein Kran hebt Container oder Big Bags vom Dach oder aus dem Hinterhof direkt zum Fahrzeug. Das spart Wege und Zeit. Wir planen den Einsatz nach Gewicht und Standort.",
      },
    ],
  },
  {
    slug: "ahlen",
    name: "Ahlen",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 53.000",
    luftlinieKm: 25,
    intro:
      "Kran mieten in Ahlen: Zeller Kranservice kommt aus Werl, rund 25 km südlich. Wir stellen Autokrane mit Kranführer, Anhängerkrane auch ohne Bedienung und Arbeitsbühnen. Planung und Genehmigung übernehmen wir.",
    lage:
      "Ahlen liegt im flachen südlichen Münsterland an der Werse. Auf dem Gelände der früheren Zeche Westfalen ist ein neues Quartier gewachsen. Wohngebiete mit Einfamilienhäusern und großen Gärten prägen Ortsteile wie Vorhelm und Dolberg.",
    stadtteile: ["Innenstadt", "Dolberg", "Vorhelm", "Tönnishäuschen", "Ahlen-Ost"],
    typischeEinsaetze: ["pool-einheben", "galabau", "wintergarten", "hallenbau"],
    empfohleneGeraete: ["k950", "mkg-1251", "klaas-k21-30-rs", "jekko-mpk06"],
    genehmigung:
      "Benötigt der Kran in Ahlen öffentlichen Straßenraum, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Ahlen (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen beides; je nach Lage dauert es einige Werktage bis wenige Wochen.",
    nachbarorte: ["Hamm", "Beckum", "Sendenhorst", "Drensteinfurt", "Ennigerloh"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch ins Münsterland nach Ahlen?",
        antwort:
          "Ja, Ahlen erreichen wir von Werl aus in kurzer Zeit. Wir sind dort für private Bauherren und Betriebe im Einsatz. Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden.",
      },
      {
        frage: "Welcher Kran eignet sich für ein Gartenprojekt in Ahlen?",
        antwort:
          "Für Natursteine, Pflanzen oder Gartenhäuser reicht oft ein kompakter Autokran wie der Klaas K950. Bei guter Zufahrt kann auch der Anhängerkran Klaas K21-30 RS genügen. Diesen können Sie auch ohne Kranführer mieten.",
      },
      {
        frage: "Wer beantragt in Ahlen die Genehmigung für den Kran?",
        antwort:
          "Wir übernehmen den Antrag bei der Stadt Ahlen. Dazu gehören Sondernutzungserlaubnis und verkehrsrechtliche Anordnung. Planen Sie einige Werktage bis wenige Wochen Vorlauf ein.",
      },
    ],
  },
  {
    slug: "hagen",
    name: "Hagen",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 190.000",
    luftlinieKm: 35,
    intro:
      "Kran mieten in Hagen: Zeller Kranservice ist von Werl aus über A1 bzw. A46 gut an Hagen angebunden. Wir stellen Autokrane mit Kranführer, Minikrane und Hubsteiger für die Tallagen der Stadt. Genehmigungen und Planung übernehmen wir.",
    lage:
      "Hagen liegt in den Tälern von Volme, Ennepe und Lenne, viele Wohngebiete ziehen sich steil die Hänge hinauf. In Wehringhausen und Altenhagen stehen dichte Gründerzeit-Altbauten mit schmalen Straßen. Entlang der Täler gibt es alte Industriestandorte und Gewerbehallen.",
    stadtteile: ["Hohenlimburg", "Haspe", "Eilpe", "Boele", "Vorhalle", "Wehringhausen", "Altenhagen", "Emst"],
    typischeEinsaetze: ["dachdecker", "geruestbau", "fenstereinbau", "hallenbau"],
    empfohleneGeraete: ["mkg-1302", "mkg-582", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Wird in Hagen ein Kran auf öffentlicher Straße aufgestellt, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese erteilen die zuständigen Stellen der Stadt Hagen (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Den Antrag stellen wir; rechnen Sie mit einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Herdecke", "Wetter (Ruhr)", "Schwerte", "Iserlohn", "Gevelsberg"],
    faq: [
      {
        frage: "Welcher Kran eignet sich für Altbauten in Hagen-Wehringhausen?",
        antwort:
          "In engen Straßen eignet sich ein kompakter Langarmkran wie der MKG 582 mit 36,5 m Hakenhöhe. Liegt die Baustelle im Hinterhof, kommt der Minikran Jekko SPX532 durch die Toreinfahrt. Wir prüfen das vorab vor Ort.",
      },
      {
        frage: "Fährt Zeller Kranservice auch nach Hohenlimburg?",
        antwort:
          "Ja, wir sind in allen Hagener Stadtbezirken im Einsatz. Die Anfahrt aus Werl ist gut planbar. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Wer kümmert sich in Hagen um die Genehmigung?",
        antwort:
          "Das übernehmen wir. Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Hagen. Planen Sie dafür einige Werktage bis wenige Wochen ein.",
      },
    ],
  },
  {
    slug: "bochum",
    name: "Bochum",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 365.000",
    luftlinieKm: 50,
    intro:
      "Kran mieten in Bochum: Zeller Kranservice fährt von Werl aus über die A44 und A40 ins Bochumer Stadtgebiet. Wir stellen Autokrane bis rund 52 m Hakenhöhe mit Kranführer, Minikrane und Arbeitsbühnen. Besichtigung, Planung und Genehmigung übernehmen wir.",
    lage:
      "In Ehrenfeld und rund um die Innenstadt stehen viele Altbauten mit Hinterhöfen und knappen Parkflächen. Typisch für Bochum sind auch Zechensiedlungen mit niedrigen Häusern und Gärten. Auf früheren Industrieflächen entstehen neue Gewerbe- und Wohnquartiere.",
    stadtteile: ["Wattenscheid", "Langendreer", "Ehrenfeld", "Weitmar", "Stiepel", "Querenburg", "Riemke", "Gerthe"],
    typischeEinsaetze: ["dachdecker", "glasmontage", "geruestbau", "wintergarten"],
    empfohleneGeraete: ["k1003", "mkg-1251", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Für einen Kran auf einer öffentlichen Straße in Bochum braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Ansprechpartner sind die zuständigen Stellen der Stadt Bochum (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir reichen den Antrag ein; die Frist beträgt einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Herne", "Witten", "Hattingen", "Gelsenkirchen", "Dortmund"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Bochum?",
        antwort:
          "Ja, Bochum liegt rund 50 km von unserem Firmensitz in Werl entfernt. Wir sind dort in allen Stadtbezirken im Einsatz. Den Termin legen wir nach Besichtigung und Planung fest.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Garten in einer Bochumer Zechensiedlung?",
        antwort:
          "Die Häuser sind meist niedrig, daher reicht oft ein mittlerer Autokran wie der MKG 1251. Er hebt von der Straße über das Haus in den Garten. Ist die Straße zu eng, setzen wir den Minikran Jekko SPX532 ein.",
      },
      {
        frage: "Wer kümmert sich in Bochum um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Bochum. Auch Absperrungen nach Auflage planen wir mit ein. Rechnen Sie mit einigen Werktagen bis wenigen Wochen Vorlauf.",
      },
    ],
  },
  {
    slug: "essen",
    name: "Essen",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 580.000",
    luftlinieKm: 65,
    intro:
      "Kran mieten in Essen: Zeller Kranservice kommt aus dem rund 65 km entfernten Werl und plant die Anfahrt mit ein. Wir stellen Autokrane mit Kranführer, Minikrane, Hubsteiger und Glashebegeräte. Genehmigungen für Essener Straßen beantragen wir für Sie.",
    lage:
      "Im Essener Norden prägen Bergbau und Industrie das Stadtbild, die Zeche Zollverein ist das bekannteste Beispiel. Rüttenscheid und Holsterhausen sind dicht mit Altbauten bebaut. Im Süden, rund um Baldeneysee, Werden und Kettwig, stehen viele Häuser in Hanglage.",
    stadtteile: ["Rüttenscheid", "Werden", "Kettwig", "Steele", "Borbeck", "Altenessen", "Kray", "Frohnhausen"],
    typischeEinsaetze: ["glasmontage", "dachdecker", "pool-einheben", "fenstereinbau"],
    empfohleneGeraete: ["mkg-1302", "mkg-582", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Steht der Kran in Essen auf öffentlicher Verkehrsfläche, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese erteilen die zuständigen Stellen der Stadt Essen (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir übernehmen den Antrag; einplanen sollten Sie einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Mülheim an der Ruhr", "Gelsenkirchen", "Bottrop", "Velbert", "Oberhausen"],
    faq: [
      {
        frage: "Welcher Kran eignet sich für enge Straßen in Essen-Rüttenscheid?",
        antwort:
          "In dicht bebauten Straßen setzen wir gern den MKG 582 ein, einen kompakten Langarmkran mit 36,5 m Hakenhöhe. Für Innenhöfe ohne Zufahrt gibt es den Minikran Jekko SPX532. Die Wahl treffen wir nach einer Besichtigung.",
      },
      {
        frage: "Kann ein Pool in einen Garten in Essen-Werden gehoben werden?",
        antwort:
          "Ja, auch in Hanglage ist das oft möglich. Entscheidend sind Stellfläche, Ausladung und Gewicht des Beckens. Wir planen den Hub vorab und wählen den passenden Autokran.",
      },
      {
        frage: "Wer beantragt in Essen die Genehmigung für den Kran?",
        antwort:
          "Das machen wir für Sie. Wir stellen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Essen. Planen Sie einige Werktage bis wenige Wochen Vorlauf ein.",
      },
    ],
  },
  {
    slug: "bielefeld",
    name: "Bielefeld",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 335.000",
    luftlinieKm: 65,
    intro:
      "Kran mieten in Bielefeld: Zeller Kranservice fährt von Werl aus nach Ostwestfalen und plant die Anreise in den Auftrag ein. Wir stellen Autokrane mit Kranführer, Minikrane und Hubsteiger. Besichtigung, Planung und Genehmigung übernehmen wir.",
    lage:
      "Der Teutoburger Wald teilt Bielefeld, viele Grundstücke liegen deshalb am Hang. Rund um die Altstadt unterhalb der Sparrenburg ist die Bebauung dicht. Sennestadt wurde nach dem Krieg als geplante Stadt angelegt, dazu kommen große Gewerbegebiete.",
    stadtteile: ["Mitte", "Brackwede", "Sennestadt", "Schildesche", "Heepen", "Jöllenbeck", "Gadderbaum", "Sieker"],
    typischeEinsaetze: ["dachdecker", "zimmerei", "hallenbau", "wintergarten"],
    empfohleneGeraete: ["k1003", "k950", "jekko-spx532", "raupenbuehne"],
    genehmigung:
      "Braucht der Kran in Bielefeld öffentliche Straßenfläche, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung Pflicht. Zuständig sind die Stellen der Stadt Bielefeld (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag für Sie; das dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Gütersloh", "Herford", "Bad Salzuflen", "Oerlinghausen", "Halle (Westf.)"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Bielefeld?",
        antwort:
          "Ja, Bielefeld liegt rund 65 km Luftlinie von Werl entfernt. Die Anreise planen wir als Teil des Auftrags. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für eine Hanglage am Teutoburger Wald?",
        antwort:
          "Ein wendiger Kran wie der Klaas K950 kommt auch durch kurvige Wohnstraßen. Für steiles Gelände ohne Zufahrt eignen sich Minikran oder Raupenbühne. Wir sehen uns die Stellfläche vorher an.",
      },
      {
        frage: "Wer kümmert sich in Bielefeld um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Bielefeld. Sie liefern uns nur Adresse und Termin. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },

  // --------------------------------------------------------- Deutschland
  {
    slug: "berlin",
    name: "Berlin",
    bundesland: "Berlin",
    region: "deutschland",
    einwohner: "ca. 3,7 Mio.",
    luftlinieKm: 390,
    intro:
      "Kran mieten in Berlin ist mit Zeller Kranservice möglich, auch wenn unser Firmensitz in Werl (NRW) liegt. Die Anreise planen wir als Teil des Auftrags, daher eignen wir uns vor allem für geplante Projekte. Wir bringen Autokrane mit Kranführer, Minikrane und Glashebegeräte mit.",
    lage:
      "Typisch für Berlin sind Gründerzeit-Mietshäuser mit Vorderhaus, Seitenflügel und mehreren Hinterhöfen. Diese Höfe sind oft nur durch eine Durchfahrt erreichbar. Dachgeschossausbauten sind häufig, in Außenbezirken wie Spandau oder Köpenick stehen viele Einfamilienhäuser.",
    stadtteile: ["Mitte", "Prenzlauer Berg", "Kreuzberg", "Friedrichshain", "Charlottenburg", "Neukölln", "Spandau", "Köpenick"],
    typischeEinsaetze: ["dachdecker", "glasmontage", "fenstereinbau", "zimmerei"],
    empfohleneGeraete: ["mkg-1302", "jekko-spx532", "jekko-mpk06", "ruthmann-tbr-260"],
    genehmigung:
      "Für einen Kran auf öffentlicher Straße in Berlin sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Berlin (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt), meist auf Bezirksebene. Wir übernehmen den Antrag; planen Sie einige Werktage bis wenige Wochen ein, je nach Lage.",
    nachbarorte: ["Potsdam", "Falkensee", "Teltow", "Bernau bei Berlin", "Oranienburg"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice wirklich bis nach Berlin?",
        antwort:
          "Ja, wir arbeiten deutschlandweit. Da wir aus Werl anreisen, planen wir Berliner Einsätze mit Vorlauf. Das passt gut für Projekte mit festem Termin.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Berliner Hinterhof?",
        antwort:
          "Ist der Hof nur durch eine Durchfahrt erreichbar, kommt der Minikran Jekko SPX532 hinein. Er ist 77 cm breit und passt sogar durch Türen. Alternativ hebt ein großer Autokran wie der MKG HMK 1302 mit ca. 51 m Hakenhöhe über das Vorderhaus.",
      },
      {
        frage: "Wer kümmert sich in Berlin um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei den zuständigen Berliner Stellen. Weil wir anreisen, starten wir damit früh. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    bundesland: "Hamburg",
    region: "deutschland",
    einwohner: "ca. 1,9 Mio.",
    luftlinieKm: 265,
    intro:
      "Kran mieten in Hamburg: Zeller Kranservice kommt aus Werl und plant die Anreise in den Norden als Teil des Auftrags. Das eignet sich vor allem für geplante Projekte mit festem Termin. Wir bringen Autokrane mit Kranführer, Minikrane und Arbeitsbühnen mit.",
    lage:
      "Hamburg ist von Wasser geprägt: Alster, Elbe, Kanäle und Fleete begrenzen oft die Stellflächen. In Eimsbüttel, Winterhude und Altona stehen viele Altbauten mit engen Straßen. Am Elbhang in Blankenese liegen Häuser steil am Hang, teils nur über Treppen erreichbar.",
    stadtteile: ["Altona", "Eimsbüttel", "Winterhude", "Wandsbek", "Harburg", "Bergedorf", "HafenCity", "Blankenese"],
    typischeEinsaetze: ["glasmontage", "dachdecker", "wintergarten", "fenstereinbau"],
    empfohleneGeraete: ["k1003", "mkg-582", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Wenn der Kran in Hamburg auf öffentlichem Grund steht, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese vergeben die zuständigen Stellen der Stadt Hamburg (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen das für Sie; je nach Lage dauert es einige Werktage bis wenige Wochen.",
    nachbarorte: ["Norderstedt", "Pinneberg", "Ahrensburg", "Reinbek", "Buxtehude"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Hamburg?",
        antwort:
          "Ja, wir sind deutschlandweit im Einsatz. Von Werl aus planen wir die Anreise nach Hamburg fest ein. Am besten eignen sich Projekte, die einige Wochen im Voraus feststehen.",
      },
      {
        frage: "Welches Gerät hilft bei großen Glasflächen in Hamburg?",
        antwort:
          "Für Scheiben bis 600 kg gibt es das Glashebegerät Jekko MPK06. In höheren Etagen kombinieren wir es mit einem Autokran. So lassen sich auch große Fensterfronten sicher einsetzen.",
      },
      {
        frage: "Wer beantragt in Hamburg die Genehmigung für den Kran?",
        antwort:
          "Wir kümmern uns um Sondernutzungserlaubnis und verkehrsrechtliche Anordnung in Hamburg. Durch die Anreise planen wir mit ausreichend Vorlauf. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "muenchen",
    name: "München",
    bundesland: "Bayern",
    region: "deutschland",
    einwohner: "ca. 1,5 Mio.",
    luftlinieKm: 460,
    intro:
      "Kran mieten in München ist mit Zeller Kranservice für geplante Projekte möglich. Wir kommen aus Werl in NRW und planen die Anreise als Teil des Auftrags. Mit dabei sind Autokrane mit Kranführer, Minikrane und Glashebegeräte.",
    lage:
      "In Maxvorstadt, Schwabing und Haidhausen stehen dichte Altbauten mit Innenhöfen und kaum freien Parkflächen. In Bogenhausen und Pasing gibt es Villen und Einfamilienhäuser mit Gärten. Viele Projekte sind Sanierungen und Dachausbauten im Bestand.",
    stadtteile: ["Schwabing", "Maxvorstadt", "Haidhausen", "Bogenhausen", "Neuhausen", "Sendling", "Giesing", "Pasing"],
    typischeEinsaetze: ["dachdecker", "glasmontage", "pool-einheben", "fenstereinbau"],
    empfohleneGeraete: ["mkg-1302", "k950", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Steht der Kran in München auf einer öffentlichen Straße, braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Erteilt werden sie von den zuständigen Stellen der Stadt München (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag; einplanen sollten Sie einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Garching bei München", "Unterschleißheim", "Haar", "Unterhaching", "Germering"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice aus Werl wirklich bis München?",
        antwort:
          "Ja, wir arbeiten deutschlandweit. Für München planen wir die Anreise fest in den Auftrag ein. Deshalb eignen wir uns dort vor allem für Projekte mit Vorlauf.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Münchner Innenhof?",
        antwort:
          "Ist der Innenhof nur durch eine Tür erreichbar, setzen wir den Minikran Jekko SPX532 ein. Er ist 77 cm breit und hebt bis 3,2 t. Ist der Hub von der Straße möglich, nutzen wir einen Autokran mit großer Ausladung.",
      },
      {
        frage: "Wer kümmert sich in München um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei den zuständigen Münchner Stellen. Damit beginnen wir früh in der Planung. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 1,1 Mio.",
    luftlinieKm: 95,
    intro:
      "Kran mieten in Köln: Zeller Kranservice kommt aus Werl und plant die Anfahrt ins Rheinland als Teil des Auftrags. Wir stellen Autokrane mit Kranführer, Minikrane, Hubsteiger und Glashebegeräte. Die Genehmigung für Kölner Straßen beantragen wir für Sie.",
    lage:
      "In Veedeln wie Ehrenfeld, Sülz und Nippes stehen dichte Altbauzeilen mit schmalen Straßen. Parkplätze sind knapp, Kranstellflächen müssen oft auf der Fahrbahn eingerichtet werden. Rechtsrheinisch und in Porz oder Rodenkirchen gibt es mehr Einfamilienhäuser und Gewerbe.",
    stadtteile: ["Ehrenfeld", "Nippes", "Sülz", "Lindenthal", "Deutz", "Mülheim", "Porz", "Rodenkirchen"],
    typischeEinsaetze: ["dachdecker", "fenstereinbau", "glasmontage", "geruestbau"],
    empfohleneGeraete: ["k1003", "mkg-582", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Für einen Kran auf öffentlicher Verkehrsfläche in Köln sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese erteilen die zuständigen Stellen der Stadt Köln (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir übernehmen den Antrag; die Bearbeitung dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Leverkusen", "Bergisch Gladbach", "Hürth", "Frechen", "Pulheim"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Köln?",
        antwort:
          "Ja, Köln liegt rund 95 km Luftlinie von unserem Firmensitz in Werl entfernt. Wir planen die Anfahrt als Teil des Einsatzes. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für eine enge Straße in Köln-Ehrenfeld?",
        antwort:
          "In engen Altbaustraßen setzen wir gern den kompakten Langarmkran MKG 582 ein. Er braucht wenig Stellfläche und erreicht 36,5 m Hakenhöhe. Für Fassadenarbeiten eignet sich der Hubsteiger Ruthmann TBR 260.",
      },
      {
        frage: "Wer kümmert sich in Köln um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Köln. Auflagen wie Absperrungen setzen wir am Einsatztag um. Planen Sie einige Werktage bis wenige Wochen Vorlauf ein.",
      },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt am Main",
    bundesland: "Hessen",
    region: "deutschland",
    einwohner: "ca. 770.000",
    luftlinieKm: 170,
    intro:
      "Kran mieten in Frankfurt am Main: Zeller Kranservice reist aus Werl an und plant die Anfahrt als Teil des Auftrags. Das passt besonders für geplante Projekte mit festem Termin. Wir bringen Autokrane mit Kranführer, Minikrane und Glashebegeräte.",
    lage:
      "Neben der Hochhaus-Skyline prägen Altbauviertel wie Nordend, Bornheim und Sachsenhausen die Stadt. Dort sind Straßen eng und Stellflächen knapp. Im Westend stehen Gründerzeitvillen, in Neubaugebieten wie dem Riedberg moderne Wohnhäuser mit großen Glasflächen.",
    stadtteile: ["Sachsenhausen", "Nordend", "Bornheim", "Bockenheim", "Westend", "Ostend", "Höchst", "Riedberg"],
    typischeEinsaetze: ["glasmontage", "dachdecker", "fenstereinbau", "pool-einheben"],
    empfohleneGeraete: ["k1003", "k950", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Benötigt der Kran in Frankfurt am Main öffentlichen Straßenraum, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Frankfurt am Main (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen beides; rechnen Sie mit einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Offenbach am Main", "Bad Homburg vor der Höhe", "Eschborn", "Neu-Isenburg", "Bad Vilbel"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Frankfurt am Main?",
        antwort:
          "Ja, wir sind deutschlandweit tätig. Von Werl aus planen wir die Anreise nach Frankfurt fest mit ein. Am besten passt das für Projekte mit etwas Vorlauf.",
      },
      {
        frage: "Welcher Kran eignet sich für Altbauten im Frankfurter Nordend?",
        antwort:
          "In engen Straßen ist der wendige Klaas K950 eine gute Wahl, er erreicht über 43 m Hakenhöhe. Für Hinterhöfe ohne Zufahrt nutzen wir den Minikran Jekko SPX532. Die Wahl treffen wir nach der Besichtigung.",
      },
      {
        frage: "Wer beantragt in Frankfurt die Genehmigung für den Kran?",
        antwort:
          "Das übernehmen wir. Wir stellen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei den zuständigen Frankfurter Stellen. Planen Sie einige Werktage bis wenige Wochen ein.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 630.000",
    luftlinieKm: 85,
    intro:
      "Kran mieten in Düsseldorf: Zeller Kranservice kommt aus dem rund 85 km entfernten Werl und plant die Anfahrt mit ein. Wir stellen Autokrane mit Kranführer, Minikrane, Hubsteiger und Glashebegeräte. Genehmigungen in Düsseldorf beantragen wir für Sie.",
    lage:
      "Die Altstadt am Rhein ist eng bebaut, Zufahrten sind zeitlich und räumlich begrenzt. In Pempelfort, Flingern, Bilk und Oberkassel stehen viele Altbauten mit Hinterhöfen. Im Medienhafen und in Gewerbegebieten dominieren moderne Bauten mit großen Glasfassaden.",
    stadtteile: ["Altstadt", "Oberkassel", "Pempelfort", "Bilk", "Flingern", "Gerresheim", "Benrath", "Kaiserswerth"],
    typischeEinsaetze: ["glasmontage", "fenstereinbau", "dachdecker", "wintergarten"],
    empfohleneGeraete: ["mkg-1251", "mkg-582", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Wird der Kran in Düsseldorf auf einer öffentlichen Straße aufgestellt, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung Pflicht. Diese stellen die zuständigen Stellen der Stadt Düsseldorf (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt) aus. Wir kümmern uns um den Antrag; das dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Neuss", "Ratingen", "Meerbusch", "Hilden", "Erkrath"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Düsseldorf?",
        antwort:
          "Ja, Düsseldorf gehört zu unserem regelmäßigen Einsatzgebiet in NRW. Die Anfahrt aus Werl planen wir fest ein. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Hinterhof in Düsseldorf-Bilk?",
        antwort:
          "Für Höfe, die nur durch Tür oder Toreinfahrt erreichbar sind, nutzen wir den Minikran Jekko SPX532. Er ist 77 cm breit und hebt bis 3,2 t. Ist die Straße breit genug, kann auch ein Autokran über das Haus heben.",
      },
      {
        frage: "Wer kümmert sich in Düsseldorf um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Düsseldorf. Sie müssen dafür keine Formulare ausfüllen. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    bundesland: "Baden-Württemberg",
    region: "deutschland",
    einwohner: "ca. 630.000",
    luftlinieKm: 320,
    intro:
      "Kran mieten in Stuttgart ist mit Zeller Kranservice für geplante Projekte möglich. Wir kommen aus Werl in NRW und planen die Anreise als Teil des Auftrags. Mit dabei sind Autokrane mit Kranführer, Minikrane und Raupenbühnen für Hanglagen.",
    lage:
      "Stuttgart liegt in einem Talkessel, viele Wohngebiete ziehen sich steil die Hänge hinauf. Straßen sind dort oft schmal und kurvig, manche Häuser nur über Treppen, die Stäffele, erreichbar. Im Tal und in Bad Cannstatt ist die Bebauung dicht.",
    stadtteile: ["Stuttgart-Mitte", "Stuttgart-West", "Bad Cannstatt", "Degerloch", "Vaihingen", "Feuerbach", "Zuffenhausen", "Möhringen"],
    typischeEinsaetze: ["dachdecker", "pool-einheben", "glasmontage", "zimmerei"],
    empfohleneGeraete: ["k950", "mkg-582", "jekko-spx532", "raupenbuehne"],
    genehmigung:
      "Steht der Kran in Stuttgart auf öffentlichem Grund, braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Diese vergeben die zuständigen Stellen der Stadt Stuttgart (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir übernehmen den Antrag; planen Sie einige Werktage bis wenige Wochen ein, je nach Lage.",
    nachbarorte: ["Esslingen am Neckar", "Ludwigsburg", "Fellbach", "Leinfelden-Echterdingen", "Böblingen"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Stuttgart?",
        antwort:
          "Ja, wir arbeiten deutschlandweit. Die Anreise aus Werl planen wir als Teil des Auftrags ein. Deshalb eignen wir uns in Stuttgart vor allem für Projekte mit Vorlauf.",
      },
      {
        frage: "Welcher Kran eignet sich für eine Stuttgarter Halbhöhenlage?",
        antwort:
          "Auf schmalen, steilen Straßen ist ein wendiger Kran wie der Klaas K950 oder der kompakte MKG 582 sinnvoll. Ist das Grundstück nur zu Fuß erreichbar, kommen Minikran oder die Raupenbühne Almac B1890 zum Einsatz, die durch Türen passt. Wir prüfen die Stellfläche vorab.",
      },
      {
        frage: "Wer kümmert sich in Stuttgart um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei den zuständigen Stuttgarter Stellen. Weil wir anreisen, starten wir früh damit. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    bundesland: "Sachsen",
    region: "deutschland",
    einwohner: "ca. 620.000",
    luftlinieKm: 310,
    intro:
      "Kran mieten in Leipzig: Zeller Kranservice kommt aus Werl und plant die Anreise nach Sachsen als Teil des Auftrags. Das eignet sich besonders für geplante Sanierungs- und Bauprojekte. Wir bringen Autokrane mit Kranführer, Minikrane und Arbeitsbühnen mit.",
    lage:
      "Leipzig hat einen großen Bestand an Gründerzeit-Altbauten, etwa in Gohlis, Connewitz und Schleußig. Viele Häuser werden saniert, Dachgeschosse ausgebaut und Fenster getauscht. In Plagwitz und Lindenau entstehen in früheren Fabrikgebäuden Lofts und Wohnungen.",
    stadtteile: ["Zentrum", "Gohlis", "Connewitz", "Schleußig", "Plagwitz", "Lindenau", "Reudnitz", "Grünau"],
    typischeEinsaetze: ["dachdecker", "fenstereinbau", "zimmerei", "geruestbau"],
    empfohleneGeraete: ["k1003", "mkg-1251", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Für einen Kran auf öffentlicher Straße in Leipzig sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese erteilen die zuständigen Stellen der Stadt Leipzig (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag für Sie; je nach Lage dauert das einige Werktage bis wenige Wochen.",
    nachbarorte: ["Markkleeberg", "Taucha", "Schkeuditz", "Markranstädt", "Borsdorf"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Leipzig?",
        antwort:
          "Ja, wir sind deutschlandweit unterwegs. Für Leipzig planen wir die Anreise aus Werl fest in den Auftrag ein. Gut geeignet sind Projekte, deren Termin einige Wochen vorher feststeht.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Dachausbau in einem Leipziger Altbau?",
        antwort:
          "Für Balken, Dachfenster und Material eignet sich ein Autokran wie der Klaas K1003 mit rund 52 m Hakenhöhe. Liegt die Baustelle im Hof, setzen wir den Minikran Jekko SPX532 ein. Wir planen den Hub nach Gewicht und Ausladung.",
      },
      {
        frage: "Wer kümmert sich in Leipzig um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Leipzig. Damit beginnen wir direkt nach der Planung. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    bundesland: "Bremen",
    region: "deutschland",
    einwohner: "ca. 570.000",
    luftlinieKm: 180,
    intro:
      "Kran mieten in Bremen: Zeller Kranservice reist aus Werl an und plant die Anfahrt als Teil des Auftrags. Das passt gut für Projekte mit festem Termin. Wir stellen Autokrane mit Kranführer, Minikrane und Glashebegeräte.",
    lage:
      "Typisch für Bremen sind die Altbremer Häuser, schmale Reihenhäuser mit kleinen Gärten dahinter. Diese Gärten sind oft nur durch das Haus erreichbar. In der Überseestadt entstehen auf früheren Hafenflächen Neubauten, im Schnoor sind die Gassen besonders eng.",
    stadtteile: ["Mitte", "Schwachhausen", "Findorff", "Neustadt", "Horn-Lehe", "Vegesack", "Hemelingen", "Überseestadt"],
    typischeEinsaetze: ["wintergarten", "glasmontage", "dachdecker", "galabau"],
    empfohleneGeraete: ["k1003", "mkg-582", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Benötigt der Kran in Bremen öffentliche Verkehrsfläche, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Bremen (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen das für Sie; einplanen sollten Sie einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Delmenhorst", "Achim", "Stuhr", "Weyhe", "Lilienthal"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Bremen?",
        antwort:
          "Ja, wir arbeiten deutschlandweit. Die Anreise aus Werl nach Bremen planen wir als Teil des Einsatzes. Am besten eignen sich Projekte mit etwas Vorlauf.",
      },
      {
        frage: "Wie kommt Material in den Garten eines Altbremer Hauses?",
        antwort:
          "Meist hebt ein Autokran von der Straße über das Haus in den Garten. Ist das nicht möglich, kommt der Minikran Jekko SPX532 durch die Haustür, denn er ist nur 77 cm breit. Wir prüfen die Lage vorab.",
      },
      {
        frage: "Wer beantragt in Bremen die Genehmigung für den Kran?",
        antwort:
          "Das übernehmen wir. Wir stellen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei den zuständigen Bremer Stellen. Planen Sie dafür einige Werktage bis wenige Wochen ein.",
      },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    bundesland: "Sachsen",
    region: "deutschland",
    einwohner: "ca. 565.000",
    luftlinieKm: 410,
    intro:
      "Kran mieten in Dresden ist mit Zeller Kranservice für geplante Projekte möglich. Wir kommen aus Werl in NRW und planen die Anreise als Teil des Auftrags. Mit dabei sind Autokrane mit Kranführer, Minikrane und Hubsteiger.",
    lage:
      "In der Äußeren Neustadt und in Striesen stehen viele Gründerzeit-Altbauten und Stadtvillen. An den Elbhängen in Loschwitz und Blasewitz liegen Villen am Hang mit steilen Zufahrten. Die Altstadt ist dicht bebaut, Kranstandorte müssen dort sorgfältig geplant werden.",
    stadtteile: ["Altstadt", "Neustadt", "Striesen", "Blasewitz", "Loschwitz", "Pieschen", "Plauen", "Klotzsche"],
    typischeEinsaetze: ["dachdecker", "zimmerei", "fenstereinbau", "wintergarten"],
    empfohleneGeraete: ["mkg-1302", "k950", "jekko-spx532", "ruthmann-tbr-260"],
    genehmigung:
      "Wenn der Kran in Dresden auf einer öffentlichen Straße steht, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese vergeben die zuständigen Stellen der Stadt Dresden (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir übernehmen den Antrag; rechnen Sie mit einigen Werktagen bis wenigen Wochen, je nach Lage.",
    nachbarorte: ["Radebeul", "Freital", "Heidenau", "Pirna", "Radeberg"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Dresden?",
        antwort:
          "Ja, wir sind deutschlandweit im Einsatz. Die Anreise aus Werl planen wir fest in den Auftrag ein. Deshalb eignen wir uns in Dresden vor allem für Projekte mit Vorlauf.",
      },
      {
        frage: "Welcher Kran eignet sich für eine Villa an den Dresdner Elbhängen?",
        antwort:
          "Auf schmalen, steilen Zufahrten ist der wendige Klaas K950 eine Option. Muss weit über das Gebäude gehoben werden, nutzen wir den MKG HMK 1302 mit ca. 51 m Hakenhöhe. Die Stellfläche prüfen wir vorab.",
      },
      {
        frage: "Wer kümmert sich in Dresden um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Dresden. Da wir anreisen, beginnen wir damit früh. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "hannover",
    name: "Hannover",
    bundesland: "Niedersachsen",
    region: "deutschland",
    einwohner: "ca. 545.000",
    luftlinieKm: 155,
    intro:
      "Kran mieten in Hannover: Zeller Kranservice kommt aus Werl und plant die Anreise als Teil des Auftrags. Das eignet sich vor allem für Projekte mit festem Termin. Wir bringen Autokrane mit Kranführer, Minikrane und Arbeitsbühnen mit.",
    lage:
      "In der List, in der Südstadt und in Linden stehen viele Altbauten mit Hinterhöfen und knappen Parkflächen. Linden hat zudem frühere Industriebauten, die heute anders genutzt werden. Am Stadtrand, etwa in Bothfeld, überwiegen Einfamilienhäuser mit Gärten.",
    stadtteile: ["Mitte", "List", "Linden", "Südstadt", "Kleefeld", "Döhren", "Bothfeld", "Herrenhausen"],
    typischeEinsaetze: ["dachdecker", "pool-einheben", "hallenbau", "glasmontage"],
    empfohleneGeraete: ["mkg-1302", "mkg-1251", "jekko-spx532", "scherenbuehne"],
    genehmigung:
      "Steht der Kran in Hannover auf öffentlichem Straßenraum, braucht es eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung. Erteilt werden sie von den zuständigen Stellen der Stadt Hannover (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir stellen den Antrag; je nach Lage dauert es einige Werktage bis wenige Wochen.",
    nachbarorte: ["Langenhagen", "Garbsen", "Laatzen", "Hemmingen", "Seelze"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Hannover?",
        antwort:
          "Ja, wir arbeiten deutschlandweit. Hannover liegt rund 155 km Luftlinie von Werl entfernt, die Anreise planen wir mit ein. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für einen Altbau in Hannover-Linden?",
        antwort:
          "Von der Straße aus hebt ein Autokran wie der MKG 1251 mit knapp 45 m Hakenhöhe über das Vorderhaus. Für Hinterhöfe ohne Zufahrt nutzen wir den Minikran Jekko SPX532. Wir entscheiden nach der Besichtigung.",
      },
      {
        frage: "Wer beantragt in Hannover die Genehmigung?",
        antwort:
          "Wir kümmern uns um Sondernutzungserlaubnis und verkehrsrechtliche Anordnung in Hannover. Sie müssen dafür selbst nichts beantragen. Planen Sie einige Werktage bis wenige Wochen Vorlauf ein.",
      },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    bundesland: "Bayern",
    region: "deutschland",
    einwohner: "ca. 530.000",
    luftlinieKm: 325,
    intro:
      "Kran mieten in Nürnberg ist mit Zeller Kranservice für geplante Projekte möglich. Wir kommen aus Werl in NRW und planen die Anreise als Teil des Auftrags. Mit dabei sind Autokrane mit Kranführer, Minikrane und Glashebegeräte.",
    lage:
      "Die Nürnberger Altstadt liegt innerhalb der Stadtmauer unterhalb der Kaiserburg, viele Häuser sind aus Sandstein. Die Gassen sind schmal und teils steil, Stellflächen sind knapp. In Gostenhof und St. Johannis ist die Bebauung dicht, in Langwasser stehen größere Wohnanlagen.",
    stadtteile: ["Altstadt", "St. Johannis", "Gostenhof", "Wöhrd", "Mögeldorf", "Langwasser", "Eibach", "Ziegelstein"],
    typischeEinsaetze: ["dachdecker", "fenstereinbau", "glasmontage", "zimmerei"],
    empfohleneGeraete: ["k1003", "mkg-582", "jekko-spx532", "jekko-mpk06"],
    genehmigung:
      "Für einen Kran auf öffentlicher Verkehrsfläche in Nürnberg sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nötig. Zuständig sind die Stellen der Stadt Nürnberg (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt). Wir beantragen beides; das dauert einige Werktage bis wenige Wochen, je nach Lage.",
    nachbarorte: ["Fürth", "Erlangen", "Schwabach", "Stein", "Feucht"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Nürnberg?",
        antwort:
          "Ja, wir sind deutschlandweit tätig. Die Anreise aus Werl planen wir als Teil des Auftrags ein. Am besten passt das für Projekte, die einige Wochen vorher feststehen.",
      },
      {
        frage: "Kommt ein Kran in die Gassen der Nürnberger Altstadt?",
        antwort:
          "Oft ja, mit einem kompakten Gerät wie dem Langarmkran MKG 582. Für Höfe hinter dem Haus eignet sich der Minikran Jekko SPX532. Ob und wo der Kran stehen kann, klären wir bei der Planung.",
      },
      {
        frage: "Wer kümmert sich in Nürnberg um die Genehmigung?",
        antwort:
          "Das übernehmen wir. Wir stellen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei den zuständigen Nürnberger Stellen. Rechnen Sie mit einigen Werktagen bis wenigen Wochen.",
      },
    ],
  },
  {
    slug: "duisburg",
    name: "Duisburg",
    bundesland: "Nordrhein-Westfalen",
    region: "nrw",
    einwohner: "ca. 500.000",
    luftlinieKm: 80,
    intro:
      "Kran mieten in Duisburg: Zeller Kranservice kommt aus dem rund 80 km entfernten Werl und plant die Anfahrt mit ein. Wir stellen Autokrane bis rund 52 m Hakenhöhe mit Kranführer, Minikrane und Arbeitsbühnen. Genehmigungen in Duisburg beantragen wir für Sie.",
    lage:
      "Duisburg liegt an Rhein und Ruhr, rund um Ruhrort prägen Hafen und Logistik die Stadt. Im Norden gibt es große Industrie- und Stahlstandorte mit Hallen. Dazu kommen Zechensiedlungen und dichte Altbauviertel, etwa in Neudorf und Duissern.",
    stadtteile: ["Ruhrort", "Homberg", "Rheinhausen", "Hamborn", "Marxloh", "Neudorf", "Duissern", "Walsum"],
    typischeEinsaetze: ["hallenbau", "dachdecker", "geruestbau", "bauschutt"],
    empfohleneGeraete: ["mkg-1302", "k1003", "jekko-spx532", "scherenbuehne"],
    genehmigung:
      "Braucht der Kran in Duisburg öffentlichen Straßenraum, sind eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung erforderlich. Diese stellen die zuständigen Stellen der Stadt Duisburg (in der Regel Straßenverkehrsbehörde bzw. Tiefbauamt) aus. Wir übernehmen den Antrag; planen Sie einige Werktage bis wenige Wochen ein, je nach Lage.",
    nachbarorte: ["Oberhausen", "Mülheim an der Ruhr", "Moers", "Krefeld", "Dinslaken"],
    faq: [
      {
        frage: "Fährt Zeller Kranservice auch nach Duisburg?",
        antwort:
          "Ja, Duisburg liegt in NRW und gehört zu unserem regelmäßigen Einsatzgebiet. Die Anfahrt aus Werl planen wir mit ein. Nach Ihrer Anfrage rufen wir innerhalb von 24 Stunden zurück.",
      },
      {
        frage: "Welcher Kran eignet sich für Hallenarbeiten in Duisburg?",
        antwort:
          "Für Dachelemente und Stahlteile setzen wir große Autokrane wie den MKG HMK 1302 oder den Klaas K1003 ein. Für Arbeiten unter dem Hallendach eignet sich die Scherenbühne Almac BIBI 1090 mit 10 m Arbeitshöhe. Die Auswahl treffen wir nach Gewicht und Ausladung.",
      },
      {
        frage: "Wer kümmert sich in Duisburg um die Genehmigung?",
        antwort:
          "Wir beantragen Sondernutzungserlaubnis und verkehrsrechtliche Anordnung bei der Stadt Duisburg. Auch Auflagen zur Absperrung setzen wir um. Rechnen Sie mit einigen Werktagen bis wenigen Wochen Vorlauf.",
      },
    ],
  },
];
