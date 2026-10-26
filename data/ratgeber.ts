import type { Artikel } from "@/lib/types";
import { IMG } from "@/lib/images";

export const artikel: Artikel[] = [
  {
    slug: "kran-mieten-kosten",
    titel: "Kran mieten: Wovon die Kosten abhängen",
    metaTitle: "Kran mieten: Wovon die Kosten abhängen | Zeller Kranservice",
    metaDescription:
      "Was kostet es, einen Kran zu mieten? Die wichtigsten Kostenfaktoren: Gerätegröße, Einsatzdauer, Anfahrt, Genehmigungen, Zubehör und Vorbereitung.",
    antwort:
      "Die Kosten für einen Mietkran hängen vor allem von Gerätegröße, Einsatzdauer, Anfahrt, Genehmigungen, Zubehör und Vorbereitung ab. Weil jede Baustelle anders ist, erstellt Zeller Kranservice für jeden Einsatz ein individuelles Angebot. Mit wenigen Angaben zu Last, Höhe und Ort erhalten Sie es schneller.",
    veroeffentlicht: "2026-10-26",
    aktualisiert: "2026-10-26",
    lesezeitMin: 5,
    abschnitte: [
      {
        h2: "Warum gibt es keinen Pauschalpreis für einen Kran?",
        absaetze: [
          "Kein Kraneinsatz gleicht dem anderen. Ein Pool im Garten stellt andere Anforderungen als ein Hallendach oder eine Glasscheibe im Altbau.",
          "Wie schwer ist die Last? Wie weit muss sie gehoben werden? Wo kann der Kran stehen? Diese Fragen bestimmen, welches Gerät nötig ist und wie lange es dauert.",
          "Ein Pauschalpreis müsste diese Unterschiede ignorieren. Entweder zahlen Sie dann für Leistung, die Sie nicht brauchen, oder der Preis passt am Ende nicht. Deshalb kalkulieren wir jeden Einsatz einzeln.",
          "Hinzu kommt der Ort. Ein Kran auf einem großen Firmengelände braucht keine Genehmigung. Steht er in einer engen Innenstadtstraße, sind Sperrung und Beschilderung nötig. Auch das verändert den Aufwand deutlich.",
          "Ein individuelles Angebot hat für Sie einen klaren Vorteil. Sie sehen genau, welche Leistungen enthalten sind. Und Sie können gezielt dort ansetzen, wo sich Aufwand sparen lässt.",
        ],
      },
      {
        h2: "Welche Faktoren bestimmen die Kosten?",
        absaetze: [
          "Sechs Faktoren haben den größten Einfluss. Die Tabelle zeigt, worum es jeweils geht und wie Sie selbst darauf einwirken können.",
          "Die Faktoren hängen zusammen. Ein größerer Kran kann etwa die Einsatzdauer verkürzen, weil er von einem Standort aus alles erreicht. Ein kleinerer Kran müsste dagegen umgesetzt werden.",
          "Bei der Anfahrt zählt nicht nur die Strecke. Enge Zufahrten, niedrige Durchfahrten oder Gewichtsgrenzen auf Brücken können einen Umweg erfordern. Auch das prüfen wir vorab.",
          "Zubehör richtet sich nach der Last. Für Glas brauchen Sie Vakuumheber, für Dachziegel Ziegelzange oder Ziegelmax. Wer das Zubehör vorab nennt, vermeidet Verzögerungen am Einsatztag.",
        ],
        tabelle: {
          kopf: ["Kostenfaktor", "Worum es geht", "Was Sie beeinflussen können"],
          zeilen: [
            [
              "Gerätegröße",
              "Größere Krane für schwere Lasten und große Reichweiten sind aufwendiger im Betrieb.",
              "Genaue Gewichte und Abstände nennen, damit wir nicht zu groß planen.",
            ],
            [
              "Einsatzdauer",
              "Abgerechnet wird nach gebuchten Kranstunden.",
              "Material und Personal vorbereiten, damit der Kran nicht wartet.",
            ],
            [
              "Anfahrt",
              "Die Entfernung von Werl zur Baustelle und der Weg zum Stellplatz.",
              "Zufahrt freihalten und den Stellplatz genau beschreiben.",
            ],
            [
              "Genehmigungen",
              "Sondernutzung, Straßensperrung und Halteverbot auf öffentlichem Grund.",
              "Prüfen, ob der Kran auf Privatgrund stehen kann.",
            ],
            [
              "Zubehör",
              "Vakuumheber, Ziegelzangen, Arbeitsbühne oder Lastverteilplatten.",
              "Vorab sagen, was Sie heben, damit das richtige Zubehör mitkommt.",
            ],
            [
              "Vorbereitung",
              "Besichtigung, Planung und Abstimmung mit anderen Gewerken.",
              "Pläne, Fotos und Ansprechpartner früh bereitstellen.",
            ],
          ],
        },
      },
      {
        h2: "Wie wirken sich Gerät und Einsatzdauer aus?",
        absaetze: [
          "Das Gerät richtet sich nach Last, Höhe und Platz. Ein Anhängerkran wie der Klaas K21-30 RS genügt oft für Dachdecker und Gerüstbauer. Für den Hallenbau ist dagegen meist ein Montagekran wie der MKG HMK 1302 nötig.",
          "Wichtig ist das Verhältnis von Gewicht und Ausladung. Je weiter eine Last vom Kran entfernt ist, desto weniger kann er heben. Ein leichtes Bauteil in großer Entfernung kann deshalb einen größeren Kran erfordern als ein schweres direkt neben dem Fahrzeug.",
          "Ein zu großer Kran kostet unnötig. Ein zu kleiner Kran kann die Last am Ende nicht heben. Deshalb prüfen wir anhand von Traglasttabellen, welches Gerät Ihre Hübe sicher schafft.",
          "Die Einsatzdauer hängt stark von Ihrer Vorbereitung ab. Wenn Bauteile in der richtigen Reihenfolge bereitliegen, arbeitet der Kran zügig. Wartezeiten auf Material oder Personal verlängern dagegen die gebuchten Stunden.",
          "Zur Einsatzdauer zählen auch Aufbau und Abbau vor Ort. Der Kran muss abgestützt, ausgerichtet und nach dem Einsatz wieder verfahrbereit gemacht werden. Ein gut erreichbarer, ebener Stellplatz verkürzt diese Zeit.",
          "Auch der Untergrund spielt eine Rolle. Ist der Boden weich, braucht der Kran zusätzliche Lastverteilplatten. Ist die Fläche uneben, dauert das Ausrichten länger.",
        ],
        liste: [
          "Bauteile vor Ankunft des Krans bereitlegen",
          "Anschlagpunkte und Anschlagmittel klären",
          "Genug Personal für die Übernahme der Lasten einplanen",
          "Anlieferungen auf den Krantermin abstimmen",
        ],
      },
      {
        h2: "Welche Angaben beschleunigen Ihr Angebot?",
        absaetze: [
          "Je genauer Ihre Anfrage, desto schneller und genauer unser Angebot. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
          "Fotos von Zufahrt und Stellplatz helfen sehr. Oft können wir so schon vorab einschätzen, welches Gerät passt. Bei schwierigen Lagen kommen wir zur Baustellenbesichtigung.",
          "Fehlen wichtige Angaben, müssen wir nachfragen. Das kostet Zeit und kann den Termin verschieben. Gerade das Gewicht der Last wird oft unterschätzt. Fragen Sie im Zweifel beim Hersteller oder Lieferanten nach.",
        ],
        liste: [
          "Adresse der Baustelle und gewünschter Termin",
          "Gewicht und Maße der schwersten Last",
          "Einbauhöhe und Entfernung vom möglichen Kranstellplatz",
          "Beschreibung von Zufahrt, Untergrund und Hindernissen",
          "Hinweis, ob der Kran auf öffentlicher Straße stehen muss",
          "Benötigtes Zubehör, etwa Vakuumheber oder Ziegelzange",
        ],
      },
      {
        h2: "Was bedeutet die 24-Stunden-Stornoregel?",
        absaetze: [
          "Für einen Termin planen wir Gerät, Kranführer und Anfahrt fest ein. Diese Kapazität steht dann anderen Kunden nicht mehr zur Verfügung.",
          "Deshalb gilt: Eine Stornierung muss mindestens 24 Stunden vor dem Termin bei uns eingehen. Andernfalls berechnen wir die gebuchten Kranstunden.",
          "Die Regel betrifft vor allem kurzfristige Ausfälle. Typische Gründe sind verspätete Lieferungen, fehlendes Personal oder eine nicht vorbereitete Baustelle. Diese Risiken lassen sich mit etwas Planung gut vermeiden.",
          "Unser Rat: Prüfen Sie am Vortag, ob Material, Personal und Baustelle bereit sind. Bei Unsicherheiten rufen Sie uns frühzeitig an. Gemeinsam finden wir dann meist einen neuen Termin.",
          "Anders ist es bei Wetter, das einen sicheren Hub unmöglich macht. Bei starkem Wind entscheidet der Kranführer, ob gehoben werden kann. Wie in diesem Fall verfahren wird, klären wir im Angebot mit Ihnen.",
        ],
      },
      {
        h2: "Was ist im Angebot von Zeller enthalten?",
        absaetze: [
          "Bei Autokranen, Minikran und Hubsteiger stellen wir einen erfahrenen Kranführer. Anhängerkrane können Sie auch ohne Bediener mieten.",
          "Auf Wunsch übernehmen wir Beratung, Baustellenbesichtigung und Einsatzplanung. Auch Genehmigungen und Straßensperrungen beantragen wir für Sie. Was davon nötig ist, steht transparent in Ihrem individuellen Angebot.",
          "Der Kranführer kennt sein Gerät genau. Er stimmt sich vor Ort mit Ihrem Team ab und entscheidet über die sichere Ausführung jedes Hubs. Das spart Abstimmungszeit und senkt das Risiko von Schäden.",
          "Seit 2014 führen wir Kraneinsätze in ganz Deutschland durch, heute mehr als 1.000 pro Jahr. Diese Erfahrung fließt in jede Kalkulation ein.",
          "Haben Sie Fragen zu einzelnen Positionen? Sprechen Sie uns an. Wir erklären Ihnen gern, wie sich das Angebot zusammensetzt und wo Sie selbst Aufwand reduzieren können.",
        ],
      },
    ],
    faq: [
      {
        frage: "Warum nennt Zeller keine Preise auf der Website?",
        antwort:
          "Die Kosten hängen von Gerät, Dauer, Anfahrt, Genehmigungen und Zubehör ab. Ein pauschaler Preis wäre deshalb selten zutreffend. Sie erhalten stattdessen ein individuelles Angebot.",
      },
      {
        frage: "Wie schnell bekomme ich ein Angebot?",
        antwort:
          "Wir rufen Sie innerhalb von 24 Stunden zurück. Mit Angaben zu Last, Höhe, Ort und Termin geht es am schnellsten.",
      },
      {
        frage: "Was passiert, wenn ich kurzfristig absage?",
        antwort:
          "Stornierungen müssen mindestens 24 Stunden vor dem Termin eingehen. Sonst berechnen wir die gebuchten Kranstunden.",
      },
      {
        frage: "Sind Genehmigungen im Angebot enthalten?",
        antwort:
          "Wenn der Kran auf öffentlichem Grund steht, beantragen wir die nötigen Genehmigungen für Sie. Der Aufwand dafür ist im Angebot ausgewiesen.",
      },
    ],
    kategorien: [
      "autokran",
      "anhaengerkran",
      "minikran",
      "hubsteiger",
      "arbeitsbuehne",
      "glashebegeraet",
    ],
    einsatzbereiche: ["pool-einheben", "hallenbau", "dachdecker"],
    bild: IMG.mkgHalle,
  },
  {
    slug: "welcher-kran",
    titel: "Welcher Kran für welches Projekt? Die Entscheidungshilfe",
    metaTitle: "Welcher Kran für welches Projekt? | Zeller Kranservice",
    metaDescription:
      "Autokran, Anhängerkran, Minikran, Hubsteiger, Arbeitsbühne oder Glashebegerät? Unser Vergleich hilft Ihnen, das passende Gerät zu finden.",
    antwort:
      "Welcher Kran passt, entscheiden vor allem Gewicht der Last, benötigte Höhe und verfügbarer Platz. Für schwere Lasten und große Höhen ist ein Autokran richtig, für enge Gebäude ein Minikran. Für Arbeiten in der Höhe ohne Last eignen sich Hubsteiger und Arbeitsbühnen.",
    veroeffentlicht: "2026-10-26",
    aktualisiert: "2026-10-26",
    lesezeitMin: 5,
    abschnitte: [
      {
        h2: "Welche Fragen sollten Sie zuerst klären?",
        absaetze: [
          "Bevor Sie ein Gerät wählen, sollten Sie vier Fragen beantworten. Sie bestimmen fast immer die Wahl.",
          "Die erste Frage betrifft das Gewicht. Nennen Sie immer die schwerste Einzellast, nicht das Gesamtgewicht aller Teile. Rechnen Sie Paletten, Verpackung und Anschlagmittel mit ein.",
          "Die zweite Frage betrifft Höhe und Entfernung. Entscheidend ist nicht nur, wie hoch die Last muss. Genauso wichtig ist, wie weit der Einbauort vom Kranstellplatz entfernt liegt.",
          "Die dritte Frage betrifft den Platz. Ein Autokran braucht eine befestigte Fläche zum Abstützen. In Innenhöfen, Gärten oder Gebäuden sind kleinere Geräte gefragt.",
          "Wenn Sie diese Angaben haben, können wir das passende Gerät meist schnell benennen. Bei unklaren Lagen kommen wir zur Baustellenbesichtigung.",
        ],
        liste: [
          "Wie schwer ist die schwerste Last?",
          "Wie hoch und wie weit muss sie gehoben werden?",
          "Wie viel Platz gibt es für Zufahrt und Aufstellung?",
          "Muss eine Last bewegt werden oder müssen Personen in die Höhe?",
        ],
      },
      {
        h2: "Wie unterscheiden sich die Gerätetypen?",
        absaetze: [
          "Die Tabelle zeigt unsere Gerätetypen im Überblick. Die Werte beziehen sich auf die Geräte unserer Flotte. Tragkraft und Reichweite hängen immer voneinander ab.",
          "Lesen Sie die Werte als Obergrenzen. Die maximale Tragkraft gilt nur nahe am Kran. Bei voller Ausladung hebt jedes Gerät deutlich weniger.",
        ],
        tabelle: {
          kopf: ["Gerät", "Hakenhöhe / Arbeitshöhe", "Tragkraft", "Platzbedarf", "Typische Einsätze"],
          zeilen: [
            [
              "Autokran",
              "bis rund 52 m Hakenhöhe",
              "bis 10 t",
              "Lkw-Stellplatz mit Abstützfläche",
              "Hallenbau, Pool, Dachstuhl, Innenhof",
            ],
            [
              "Anhängerkran",
              "29,8 m Hakenhöhe",
              "bis 1,5 t",
              "Pkw-Anhänger, kleine Abstützfläche",
              "Dachdecker, Gerüstbau, Fenster",
            ],
            [
              "Minikran",
              "17,3 m Höhe mit Jib",
              "bis 3,2 t",
              "770 mm breit, passt durch Türen",
              "Glas, Wintergarten, Garten, Innenräume",
            ],
            [
              "Hubsteiger",
              "26 m Arbeitshöhe",
              "250 kg Korblast",
              "3,5-t-Lkw, Straßenrand",
              "Fassade, Dachrinne, Baumpflege, Wartung",
            ],
            [
              "Raupenbühne",
              "18 m Arbeitshöhe",
              "250 kg Korblast",
              "fährt durch Türen, ab 2,9 t",
              "Innenräume, Hallen, Kirchen, unebenes Gelände",
            ],
            [
              "Scherenbühne",
              "10 m Arbeitshöhe",
              "300 kg / 2 Personen",
              "kompakt, ebener Boden",
              "Decken, Installation, Hallenarbeiten",
            ],
            [
              "Glashebegerät",
              "ca. 4 m Hakenhöhe",
              "bis 600 kg",
              "762 mm breit, für innen",
              "Fenster, Hebeschiebetüren, Glasscheiben",
            ],
          ],
        },
      },
      {
        h2: "Wann ist ein Autokran die richtige Wahl?",
        absaetze: [
          "Ein Autokran ist richtig, wenn Lasten schwer sind oder weit gehoben werden müssen. Er steht auf der Straße oder einer befestigten Fläche und hebt über Gebäude hinweg.",
          "Der MKG HMK 1302 ist unser Montagekran für Hallenbau und Dächer. Er erreicht ca. 51 m Hakenhöhe und arbeitet mit variabler Knickkante über Störkanten. Der Klaas K1003 kommt auf 52,2 m Hakenhöhe und hebt bis 6,0 t.",
          "Für schwere Lasten eignet sich der MKG 1251 mit bis zu 10 t und knapp 45 m Hakenhöhe. Seine hydraulische Reichweite liegt bei 31,8 m.",
          "Wo es eng wird, hilft der kompakte MKG 582. Er erreicht bis 36,5 m Hakenhöhe und hebt im Nahbereich bis 9,65 t. Der Klaas K950 kommt auf 43,5 m und arbeitet mit Hybridantrieb, also elektrisch oder mit Diesel.",
          "Typische Einsätze für Autokrane sind Hallenbau, Pool, Dachstuhl und Material für Innenhöfe. Alle Autokrane kommen mit einem erfahrenen Kranführer. Steht der Kran auf der Straße, beantragen wir die nötigen Genehmigungen.",
        ],
      },
      {
        h2: "Wann reicht ein Anhängerkran?",
        absaetze: [
          "Ein Anhängerkran reicht, wenn die Lasten leicht sind und die Höhe moderat bleibt. Typisch sind Dachziegel, Gerüstteile oder Fenster im Obergeschoss.",
          "Der Klaas K21-30 RS hebt bis 1,5 t und erreicht 29,8 m Hakenhöhe. Mit 3,5 t Gesamtgewicht zieht ihn ein geeigneter Pkw oder Transporter. Ein Rangierantrieb hilft auf engen Grundstücken.",
          "Seitlich trägt er 250 kg bis 21 m Ausladung. Das reicht für viele Arbeiten an Dach und Fassade von Einfamilienhäusern.",
          "Anhängerkrane können Sie auch ohne Kranführer mieten. Wir haben 12 Anhängerkrane im Bestand, darunter auch Elektro-Modelle. Für schwere Lasten oder große Höhen ist dagegen ein Autokran die bessere Wahl.",
        ],
      },
      {
        h2: "Wann brauchen Sie einen Minikran oder ein Glashebegerät?",
        absaetze: [
          "Ein Minikran ist richtig, wenn ein großer Kran nicht an die Einsatzstelle kommt. Der Jekko SPX532 ist nur 770 mm breit und passt durch viele Türen. Er hebt bis 3,2 t und dreht 360°.",
          "Der Minikran braucht wenig Stellfläche und stützt sich mit eigenen Auslegern ab. Er wird per Fernsteuerung bedient. So hat der Bediener die Last immer gut im Blick.",
          "Typische Fälle sind Glasdächer im Innenhof, Wintergärten hinter dem Haus oder Technik in Hallen. Auch in Gärten mit schmalem Zugang ist der Minikran oft die einzige Lösung.",
          "Mit Jib erreicht der Minikran 17,3 m Höhe und 14,8 m Reichweite. Er wiegt 2,35 t und fährt auf Raupen. Damit eignet er sich für Gärten, Innenhöfe und Hallen mit begrenzter Bodenlast.",
          "Das Glashebegerät Jekko MPK06 ist auf Glas und Fenster spezialisiert. Es hebt bis 600 kg, arbeitet elektrisch und eignet sich für Innenräume. Für Höhen über 4 m nehmen Sie besser den Minikran.",
          "Beide Geräte arbeiten mit Vakuumhebern. Damit lassen sich Scheiben sicher ansaugen und millimetergenau einsetzen.",
        ],
      },
      {
        h2: "Hubsteiger oder Arbeitsbühne – was ist der Unterschied?",
        absaetze: [
          "Hubsteiger und Arbeitsbühnen heben Personen, keine Lasten. Sie eignen sich für Arbeiten an Fassaden, Decken, Dachrinnen oder Bäumen.",
          "Der Unterschied liegt vor allem im Einsatzort. Ein Hubsteiger fährt auf der Straße und arbeitet meist außen. Arbeitsbühnen sind kompakter und für Hallen, Innenräume oder unebenes Gelände gedacht.",
          "Der Ruthmann TBR 260 erreicht 26 m Arbeitshöhe und bis 17 m seitliche Reichweite. Er sitzt auf einem 3,5-t-Lkw und ist schnell einsatzbereit. Der Korb trägt 250 kg.",
          "Die seitliche Reichweite ist oft wichtiger als die Höhe. Sie bestimmt, ob der Korb über Vorgärten, Carports oder Bäume hinweg an die Fassade kommt.",
          "Für Innenräume eignen sich Raupen- und Scherenbühne. Die Raupenbühne Almac B1890 erreicht 18 m und fährt durch Türen. Sie war bereits in einer Kirche im Einsatz. Die Scherenbühne Almac BIBI 1090 bietet 10 m Arbeitshöhe für zwei Personen.",
          "Müssen Sie neben Personen auch schwere Teile in die Höhe bringen? Dann kombinieren Sie besser Kran und Bühne. Den MKG HMK 1302 können Sie zum Beispiel mit Arbeitsbühne mieten.",
        ],
      },
    ],
    faq: [
      {
        frage: "Welcher Kran hebt am meisten?",
        antwort:
          "In unserer Flotte hebt der MKG 1251 mit bis zu 10 t am meisten. Bei großer Ausladung sinkt die Tragkraft jedes Krans deutlich.",
      },
      {
        frage: "Welcher Kran kommt am höchsten?",
        antwort:
          "Der Klaas K1003 erreicht 52,2 m Hakenhöhe. Der MKG HMK 1302 kommt auf ca. 51 m und arbeitet zusätzlich mit Knickausleger.",
      },
      {
        frage: "Welches Gerät passt durch eine Tür?",
        antwort:
          "Der Minikran Jekko SPX532, das Glashebegerät Jekko MPK06 und die Raupenbühne Almac B1890 passen durch viele Türen. Wir prüfen die Maße vorab.",
      },
      {
        frage: "Ich bin unsicher. Wie finde ich das richtige Gerät?",
        antwort:
          "Nennen Sie uns Last, Höhe und Ort. Wir empfehlen dann das passende Gerät und kommen bei Bedarf zur Besichtigung.",
      },
    ],
    kategorien: [
      "autokran",
      "anhaengerkran",
      "minikran",
      "hubsteiger",
      "arbeitsbuehne",
      "glashebegeraet",
    ],
    einsatzbereiche: ["hallenbau", "glasmontage", "dachdecker", "galabau", "fenstereinbau"],
    bild: IMG.flotteSeite,
  },
  {
    slug: "kran-genehmigung-strasse",
    titel: "Kran auf öffentlicher Straße: Welche Genehmigungen Sie brauchen",
    metaTitle: "Kran auf der Straße: Genehmigungen | Zeller Kranservice",
    metaDescription:
      "Kran auf öffentlicher Straße: Sondernutzungserlaubnis, Anordnung nach § 45 StVO und Halteverbot. Was Sie brauchen und was Zeller für Sie übernimmt.",
    antwort:
      "Steht ein Kran auf öffentlichem Grund, brauchen Sie in der Regel eine Sondernutzungserlaubnis und eine verkehrsrechtliche Anordnung nach § 45 StVO. Oft kommt ein Halteverbot hinzu. Die Regeln unterscheiden sich je nach Stadt, Zeller beantragt die Genehmigungen für Sie.",
    veroeffentlicht: "2026-10-26",
    aktualisiert: "2026-10-26",
    lesezeitMin: 5,
    abschnitte: [
      {
        h2: "Wann brauchen Sie überhaupt eine Genehmigung?",
        absaetze: [
          "Eine Genehmigung ist nötig, sobald der Kran öffentlichen Verkehrsraum nutzt. Dazu zählen Fahrbahn, Gehweg, Radweg und Parkstreifen.",
          "Das gilt nicht nur für große Autokrane. Auch ein Hubsteiger oder ein Anhängerkran am Straßenrand kann eine Genehmigung erfordern. Maßgeblich ist, ob der Verkehr beeinträchtigt wird.",
          "Steht der Kran vollständig auf Ihrem Grundstück, entfällt das meist. Ragt aber der Ausleger über öffentliche Flächen, kann trotzdem eine Absperrung nötig sein.",
          "Auch Gehwege werden oft unterschätzt. Stehen Stützen auf dem Gehweg, müssen Fußgänger sicher umgeleitet werden. Das gehört ebenfalls zur Planung.",
          "Wichtig: Die Zuständigkeiten und Abläufe unterscheiden sich je nach Kommune. Dieser Artikel gibt einen allgemeinen Überblick und ersetzt keine Auskunft der Behörde.",
        ],
      },
      {
        h2: "Welche Genehmigungen gibt es?",
        absaetze: [
          "In der Praxis geht es meist um drei Bausteine. Sie werden oft gemeinsam beantragt, sind rechtlich aber getrennte Vorgänge.",
          "Welche Stelle zuständig ist, regelt jede Stadt selbst. In manchen Kommunen gibt es eine gemeinsame Anlaufstelle für alle Anträge. In anderen sind mehrere Ämter beteiligt. Bei Bundes- oder Landesstraßen können weitere Stellen hinzukommen.",
        ],
        tabelle: {
          kopf: ["Genehmigung", "Wofür", "Typisch zuständig"],
          zeilen: [
            [
              "Sondernutzungserlaubnis",
              "Nutzung öffentlicher Flächen über den normalen Verkehr hinaus",
              "Straßenbaulastträger, meist Tiefbau- oder Ordnungsamt der Stadt",
            ],
            [
              "Verkehrsrechtliche Anordnung (§ 45 StVO)",
              "Absperrung, Umleitung und Beschilderung für den Verkehr",
              "Straßenverkehrsbehörde",
            ],
            [
              "Halteverbot",
              "Freier Stellplatz für den Kran am Einsatztag",
              "Teil der verkehrsrechtlichen Anordnung",
            ],
          ],
        },
      },
      {
        h2: "Was ist eine Sondernutzungserlaubnis?",
        absaetze: [
          "Öffentliche Straßen dienen dem Verkehr. Wer sie für etwas anderes nutzt, braucht eine Sondernutzungserlaubnis. Ein abgestützter Kran gehört dazu. Rechtsgrundlage sind die Straßengesetze und die Satzungen der jeweiligen Kommune.",
          "Die Erlaubnis regelt, wo und wie lange die Fläche genutzt werden darf. Häufig fallen dafür Gebühren der Kommune an. Deren Höhe legt jede Stadt selbst fest.",
          "Viele Städte bieten den Antrag inzwischen online an. Andere erwarten ein Formular per Post oder E-Mail. Welche Unterlagen genau verlangt werden, steht meist auf der Website der Stadt.",
          "Für den Antrag braucht die Behörde in der Regel Ort, Zeitraum und Größe der Fläche. Oft verlangt sie einen Lageplan.",
          "Die Größe der Fläche ergibt sich aus dem Kran. Entscheidend ist die Abstützbreite, nicht nur die Fahrzeuglänge. Hinzu kommen Sicherheitsabstände und der Schwenkbereich des Auslegers.",
          "Die Erlaubnis kann mit Auflagen verbunden sein. Beispiele sind feste Arbeitszeiten, Schutz von Bäumen oder die Freihaltung von Feuerwehrzufahrten. Diese Auflagen müssen am Einsatztag eingehalten werden.",
        ],
      },
      {
        h2: "Was regelt die Anordnung nach § 45 StVO?",
        absaetze: [
          "Die verkehrsrechtliche Anordnung regelt, wie der Verkehr an der Baustelle geführt wird. Grundlage ist § 45 der Straßenverkehrs-Ordnung.",
          "Die Behörde legt fest, welche Schilder und Absperrungen nötig sind. Je nach Lage gehören Halteverbote, Fahrbahnverengungen oder Umleitungen dazu. Bei starkem Verkehr kann sie auch bestimmte Uhrzeiten vorgeben.",
          "Auch Busse, Straßenbahnen und Rettungswege spielen eine Rolle. Führt eine Buslinie durch die Straße, kann die Abstimmung mit dem Verkehrsbetrieb nötig sein. Das verlängert unter Umständen den Vorlauf.",
          "Der Antragsteller muss die Beschilderung umsetzen. Dazu gehört oft ein Verkehrszeichenplan. Halteverbotsschilder müssen in vielen Städten einige Tage vorher stehen.",
          "Die Vorlaufzeit für Halteverbote hat einen Grund. Anwohner sollen ihr Fahrzeug rechtzeitig umparken können. Steht dennoch ein Auto im Weg, kann es je nach örtlicher Praxis abgeschleppt werden. Das klären Sie oder wir mit Ordnungsamt oder Polizei.",
        ],
        liste: [
          "Halteverbot für den Kranstellplatz",
          "Absperrung von Gehweg oder Fahrstreifen",
          "Umleitung für Fußgänger und Radfahrer",
          "Teilweise oder vollständige Straßensperrung",
        ],
      },
      {
        h2: "Wie viel Vorlauf sollten Sie einplanen?",
        absaetze: [
          "Die Bearbeitungszeit hängt stark von der Stadt ab. Rechnen Sie mit einigen Werktagen bis wenigen Wochen je nach Stadt.",
          "Größere Städte haben oft längere Fristen und mehr Auflagen. Bei Vollsperrungen oder Hauptverkehrsstraßen dauert es meist länger. Auch Ferienzeiten und Feiertage verlängern den Vorlauf.",
          "Unser Rat: Melden Sie Ihren Einsatz so früh wie möglich bei uns an. So bleibt Zeit für Rückfragen der Behörde und das Aufstellen der Schilder.",
          "Planen Sie außerdem einen Puffer ein. Fällt ein Termin wegen Wind aus, muss die Genehmigung oft auf ein neues Datum angepasst werden. Auch das braucht etwas Zeit.",
          "Manche Behörden genehmigen nur einen bestimmten Zeitraum. Verschiebt sich der Einsatz darüber hinaus, ist ein neuer Antrag nötig. Deshalb ist ein realistischer Termin von Anfang an wichtig.",
          "Bei sehr kurzfristigen Einsätzen hilft oft nur ein Stellplatz auf Privatgrund. Sprechen Sie uns in diesem Fall direkt an. Wir prüfen, welche Lösung am Ort möglich ist.",
        ],
        liste: [
          "Einsatz früh anfragen, am besten mit Wunschtermin und Ausweichtermin",
          "Adresse und Stellplatz genau beschreiben",
          "Fotos von Straße, Gehweg und Einfahrt mitschicken",
          "Andere Baustellen oder Veranstaltungen in der Nähe nennen",
        ],
      },
      {
        h2: "Was übernimmt Zeller Kranservice für Sie?",
        absaetze: [
          "Wir kennen die Abläufe vieler Behörden und übernehmen die Genehmigungen für Sie. Das umfasst Antrag, Abstimmung mit den Ämtern und die Planung der Straßensperrung.",
          "Bei Bedarf besichtigen wir den Stellplatz vorab. So wissen wir, welche Fläche der abgestützte Kran braucht und wie der Verkehr geführt werden kann.",
          "Manchmal lässt sich eine Sperrung ganz vermeiden. Ein Kran mit größerer Reichweite kann zum Beispiel auf einem Privatgrundstück stehen. Auch das prüfen wir bei der Planung.",
          "Von Ihnen brauchen wir Adresse, Termin und eine kurze Beschreibung der Lage. Fotos der Straße helfen. Den Rest stimmen wir mit Ihnen und der Behörde ab.",
          "Wichtig ist eine frühe Abstimmung mit allen Beteiligten. Dazu gehören Lieferanten, andere Gewerke und bei Bedarf die Nachbarn. Ein gesperrter Straßenabschnitt sollte am Einsatztag frei und ohne Wartezeit nutzbar sein.",
          "Nach dem Einsatz wird die Fläche wieder freigegeben. Schilder und Absperrungen werden entfernt. Hat der Kran Schäden verursacht, müssen sie gemeldet werden. Bei sorgfältiger Planung und Lastverteilplatten kommt das selten vor.",
          "Hinweis: Dieser Artikel ist keine Rechtsberatung. Verbindlich sind immer die Vorgaben der zuständigen Behörde vor Ort. Im Zweifel fragen Sie dort direkt nach.",
        ],
      },
    ],
    faq: [
      {
        frage: "Brauche ich eine Genehmigung, wenn der Kran nur kurz steht?",
        antwort:
          "In der Regel ja. Auch ein kurzer Einsatz auf öffentlichem Grund ist eine Sondernutzung. Die genauen Regeln legt die jeweilige Stadt fest.",
      },
      {
        frage: "Wie lange dauert die Genehmigung?",
        antwort:
          "Das reicht von einigen Werktagen bis zu wenigen Wochen, je nach Stadt. Bei Vollsperrungen oder Hauptstraßen kann es länger dauern.",
      },
      {
        frage: "Wer stellt die Halteverbotsschilder auf?",
        antwort:
          "Die Beschilderung muss der Antragsteller umsetzen, oft über einen Dienstleister. Bei Zeller klären wir das im Rahmen der Genehmigung mit Ihnen.",
      },
      {
        frage: "Kann ich die Genehmigung selbst beantragen?",
        antwort:
          "Ja, das ist möglich. Viele Kunden überlassen es aber uns, weil wir die Angaben zu Kran und Stellfläche direkt liefern können.",
      },
    ],
    kategorien: ["autokran", "hubsteiger", "anhaengerkran"],
    einsatzbereiche: ["pool-einheben", "bauschutt", "hallenbau", "dachdecker"],
    bild: IMG.mkg1251,
  },
  {
    slug: "hubsteiger-oder-geruest",
    titel: "Hubsteiger oder Gerüst? Der Vergleich für kurze Arbeiten in der Höhe",
    metaTitle: "Hubsteiger oder Gerüst? Der Vergleich | Zeller Kranservice",
    metaDescription:
      "Hubsteiger oder Gerüst? Vergleich von Aufbauzeit, Flexibilität, Dauer und Platzbedarf. So finden Sie die passende Lösung für Arbeiten in der Höhe.",
    antwort:
      "Für kurze, punktuelle Arbeiten in der Höhe ist ein Hubsteiger meist die bessere Wahl. Er ist schnell einsatzbereit und braucht keinen Aufbau. Ein Gerüst lohnt sich bei langen Arbeiten, die eine ganze Fassade über Wochen betreffen.",
    veroeffentlicht: "2026-10-26",
    aktualisiert: "2026-10-26",
    lesezeitMin: 5,
    abschnitte: [
      {
        h2: "Worin liegt der grundlegende Unterschied?",
        absaetze: [
          "Ein Hubsteiger ist ein Fahrzeug mit Arbeitskorb. Er fährt vor, stützt sich ab und bringt Personen in die Höhe. Nach der Arbeit fährt er wieder weg.",
          "Ein Gerüst ist eine feste Konstruktion an der Fassade. Es wird aufgebaut, bleibt für die Dauer der Arbeiten stehen und wird danach abgebaut.",
          "Beide Lösungen haben ihren Platz. Entscheidend sind Dauer, Umfang und Lage der Arbeiten.",
          "Viele Bauherren denken bei Arbeiten in der Höhe zuerst an ein Gerüst. Für eine einzelne Reparatur ist das oft mehr Aufwand als nötig. Umgekehrt stößt ein Hubsteiger bei großen Sanierungen an Grenzen.",
        ],
      },
      {
        h2: "Wie schneiden Hubsteiger und Gerüst im Vergleich ab?",
        absaetze: [
          "Die Tabelle zeigt die wichtigsten Unterschiede. Sie bezieht sich auf typische Arbeiten an Wohn- und Geschäftsgebäuden.",
          "Besonders wichtig ist der Platzbedarf. Ein Gerüst belegt Gehweg oder Hof oft über Wochen. Ein Hubsteiger steht nur während der eigentlichen Arbeit dort. Das entlastet Anwohner, Kunden und Verkehr.",
        ],
        tabelle: {
          kopf: ["Kriterium", "Hubsteiger", "Gerüst"],
          zeilen: [
            [
              "Aufbauzeit",
              "Einsatzbereit nach kurzer Abstützung vor Ort",
              "Auf- und Abbau dauern je nach Fläche Stunden bis Tage",
            ],
            [
              "Flexibilität",
              "Erreicht verschiedene Stellen nacheinander, auch über Hindernisse",
              "Fest an einer Fassade, Änderungen erfordern Umbau",
            ],
            [
              "Dauer der Arbeiten",
              "Ideal für Stunden bis wenige Tage",
              "Sinnvoll für Wochen bis Monate",
            ],
            [
              "Platzbedarf",
              "Stellfläche für ein Fahrzeug, nur während des Einsatzes",
              "Fläche entlang der ganzen Fassade, für die gesamte Standzeit",
            ],
            [
              "Arbeitsfläche",
              "Korb für 1–2 Personen und Werkzeug",
              "Große Fläche für mehrere Personen und Material",
            ],
            [
              "Witterung",
              "Bei starkem Wind nicht einsetzbar",
              "Bleibt stehen, Arbeit je nach Wetter möglich",
            ],
          ],
        },
      },
      {
        h2: "Wann ist ein Hubsteiger die bessere Wahl?",
        absaetze: [
          "Ein Hubsteiger spielt seine Stärken bei kurzen, punktuellen Arbeiten aus. Sie fahren vor, arbeiten und sind wieder weg. Kein Aufbau, keine lange Belegung von Gehweg oder Hof.",
          "Auch bei schwer zugänglichen Stellen hilft er. Ein Gerüst über einem Wintergarten oder Glasdach ist aufwendig. Der Korb des Hubsteigers erreicht solche Bereiche von außen, ohne sie zu belasten.",
          "Unser Ruthmann TBR 260 erreicht 26 m Arbeitshöhe und bis 17 m seitliche Reichweite. Der Korb trägt 250 kg. Damit erreichen Sie auch Stellen hinter Vordächern, Bäumen oder Anbauten.",
          "Weil er auf einem 3,5-t-Lkw sitzt, kommt er auch in Wohnstraßen gut zurecht.",
          "Ein weiterer Vorteil ist die Flexibilität während der Arbeit. Der Korb lässt sich schnell an eine neue Stelle bewegen. So erreichen Sie mehrere Punkte an verschiedenen Fassadenseiten an einem Tag.",
          "Achten Sie auf den Wind. Bei starkem Wind darf der Hubsteiger nicht ausgefahren werden. Planen Sie deshalb einen Ausweichtermin ein.",
        ],
        liste: [
          "Dachrinnen reinigen oder reparieren",
          "Einzelne Fenster, Leuchten oder Schilder montieren",
          "Fassadenschäden prüfen oder ausbessern",
          "Baumschnitt und Pflege in der Höhe",
          "Wartung an Lüftung, Kameras oder Antennen",
        ],
      },
      {
        h2: "Wann ist ein Gerüst sinnvoller?",
        absaetze: [
          "Ein Gerüst ist sinnvoll, wenn eine ganze Fassade über längere Zeit bearbeitet wird. Beispiele sind Fassadendämmung, Komplettanstrich oder Neueindeckung des Daches.",
          "Hier arbeiten oft mehrere Gewerke gleichzeitig. Ein Gerüst bietet ihnen dauerhaften Zugang und Platz für Material. Auch Absturzsicherung am Dachrand lässt sich damit lösen.",
          "Bei Arbeiten mit viel Material spielt das Gerüst ebenfalls seine Stärken aus. Dämmplatten, Putz oder Farbe lassen sich auf den Lagen zwischenlagern. Im Korb eines Hubsteigers ist dafür nur begrenzt Platz.",
          "Ein Gerüst ist zudem unabhängig von einem Fahrzeug. Ihre Handwerker können jeden Tag arbeiten, ohne einen Einsatz zu buchen. Bei Arbeiten über viele Wochen ist das ein klarer Vorteil.",
          "Beachten Sie aber den Aufwand vorher und nachher. Ein Gerüst muss geplant, aufgebaut, abgenommen und wieder abgebaut werden. Auf öffentlichem Grund braucht es ebenfalls eine Genehmigung.",
          "Gerüste und Kran schließen sich übrigens nicht aus. Gerüstbauern heben wir Material per Kran auf Dächer oder in Innenhöfe.",
        ],
      },
      {
        h2: "Was ist mit Arbeiten in Innenräumen?",
        absaetze: [
          "Für Hallen, Foyers oder Kirchen eignen sich Arbeitsbühnen. Sie sind kompakt und belasten den Boden weniger als ein Innengerüst.",
          "Die Raupenbühne Almac B1890 erreicht 18 m Arbeitshöhe bei 250 kg Korblast. Sie fährt durch Türen und war bereits in einer Kirche im Einsatz. Die Scherenbühne Almac BIBI 1090 bietet 10 m Arbeitshöhe für 300 kg oder zwei Personen. Sie arbeitet mit Hybridantrieb.",
          "Gerade bei Deckenarbeiten in großen Räumen sparen Sie so den Auf- und Abbau eines Raumgerüsts. Der Raum bleibt zudem länger nutzbar, weil die Bühne nach der Arbeit sofort wieder hinausfährt.",
          "Prüfen Sie vorab Türbreiten, Bodenbelastung und Hindernisse im Raum. Wir klären mit Ihnen, welche Bühne passt und ob der Boden geschützt werden muss.",
        ],
      },
      {
        h2: "Wie entscheiden Sie im Einzelfall?",
        absaetze: [
          "Stellen Sie sich drei Fragen: Wie lange dauern die Arbeiten? Wie groß ist die Fläche? Wie viele Personen arbeiten gleichzeitig?",
          "Kurze Dauer, kleine Fläche und wenige Personen sprechen für den Hubsteiger. Lange Dauer, große Fläche und viele Gewerke sprechen für das Gerüst.",
          "Manchmal ist eine Kombination sinnvoll. Ein Gerüst steht an der Hauptfassade, der Hubsteiger erledigt einzelne Stellen am Giebel oder Anbau. So vermeiden Sie ein Gerüst rund um das ganze Gebäude.",
          "Auch die Sicherheit spielt eine Rolle. Im Korb sind Sie mit Auffanggurt gesichert und arbeiten von einer festen Plattform. Leitern sind für längere Arbeiten in großer Höhe keine gute Alternative.",
          "Denken Sie auch an die Folgearbeiten. Wenn nach der Reparatur noch ein Anstrich oder eine Abnahme ansteht, lohnt sich ein zweiter kurzer Hubsteiger-Termin oft mehr als ein langes Gerüst.",
          "Bei Grenzfällen beraten wir Sie gern. Der Hubsteiger kommt mit erfahrenem Bediener. Wir prüfen Stellplatz und Reichweite und übernehmen bei Bedarf die Genehmigung für die Straße.",
          "Für eine schnelle Einschätzung brauchen wir nur wenige Angaben. Nennen Sie uns Adresse, Arbeitshöhe, Art der Arbeit und den Abstand von der Straße zur Fassade. Fotos helfen zusätzlich. Wir melden uns innerhalb von 24 Stunden zurück.",
          "Planen Sie die Arbeiten im Korb gut vor. Werkzeug und Material sollten bereitliegen, bevor der Hubsteiger ausfährt. So nutzen Sie die Einsatzzeit voll für die eigentliche Arbeit.",
        ],
      },
    ],
    faq: [
      {
        frage: "Wie hoch kommt der Hubsteiger von Zeller?",
        antwort:
          "Der Ruthmann TBR 260 erreicht 26 m Arbeitshöhe. Seitlich reicht er bis 17 m und trägt 250 kg im Korb.",
      },
      {
        frage: "Brauche ich für den Hubsteiger eine Genehmigung?",
        antwort:
          "Steht er auf öffentlichem Grund, meist ja. Wir beantragen die Genehmigung und gegebenenfalls ein Halteverbot für Sie.",
      },
      {
        frage: "Kann ich den Hubsteiger auch in Innenräumen nutzen?",
        antwort:
          "Der Hubsteiger ist für außen gedacht. Für innen eignen sich Raupenbühne und Scherenbühne, die durch Türen passen.",
      },
      {
        frage: "Ist ein Hubsteiger für eine ganze Fassadensanierung geeignet?",
        antwort:
          "Bei großen Flächen und langer Dauer ist ein Gerüst meist praktischer. Der Hubsteiger lohnt sich für punktuelle Arbeiten.",
      },
    ],
    kategorien: ["hubsteiger", "arbeitsbuehne"],
    einsatzbereiche: ["geruestbau", "fenstereinbau"],
    bild: IMG.hubsteiger,
  },
];
