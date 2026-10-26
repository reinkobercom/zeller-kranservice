import type { Einsatzbereich } from "@/lib/types";
import { IMG } from "@/lib/images";

export const einsatzbereiche: Einsatzbereich[] = [
  {
    slug: "hallenbau",
    name: "Hallen- und Stahlbau",
    kurz: "Binder, Träger und Dachelemente sicher montieren – mit Montagekran.",
    metaTitle: "Kran für Hallen- und Stahlbau | Zeller Kranservice",
    metaDescription:
      "Autokran für Hallen- und Stahlbau mieten: Montagekran mit Knickausleger, bis ca. 51 m Hakenhöhe, inklusive Kranführer. Deutschlandweit ab Werl.",
    h1: "Kran für Hallen- und Stahlbau mieten",
    intro:
      "Für Hallen- und Stahlbau setzen wir vor allem den Montagekran MKG HMK 1302 ein. Er erreicht ca. 51 m Hakenhöhe und arbeitet mit variabler Knickkante über Störkanten hinweg. Wir planen den Einsatz mit Ihnen und stellen einen erfahrenen Kranführer.",
    ablauf: [
      {
        titel: "Planung und Besichtigung",
        text: "Wir klären Lasten, Montagereihenfolge und Aufstellfläche. Bei Bedarf besichtigen wir die Baustelle vorab und wählen den passenden Kran.",
      },
      {
        titel: "Aufbau und Abstützung",
        text: "Der Kranführer stellt den Kran auf tragfähigem Untergrund auf und stützt ihn ab. Danach prüft er Reichweiten und Lastbereiche für die geplanten Hübe.",
      },
      {
        titel: "Montage im Takt",
        text: "Binder, Pfetten, Stützen und Dachelemente werden nacheinander eingehoben. Ihre Monteure übernehmen die Teile direkt am Einbauort.",
      },
    ],
    geraete: ["mkg-1302", "k1003", "mkg-1251", "mkg-582"],
    tipps: [
      "Legen Sie Gewichte und Abmessungen der schwersten Bauteile vorab fest.",
      "Sorgen Sie für eine befestigte, ebene Aufstellfläche nahe der Halle.",
      "Lagern Sie Bauteile in Montagereihenfolge, damit der Kran nicht wartet.",
      "Halten Sie Anschlagmittel und Montagepersonal zum Termin bereit.",
    ],
    faq: [
      {
        frage: "Welcher Kran eignet sich für den Hallenbau?",
        antwort:
          "Meist der MKG HMK 1302. Er erreicht ca. 51 m Hakenhöhe und hebt 1.200 kg bei rund 33,85 m Ausladung. Mit der variablen Knickkante arbeitet er gut über Dachkanten hinweg.",
      },
      {
        frage: "Kann der Kran auch eine Arbeitsbühne tragen?",
        antwort:
          "Ja. Den MKG HMK 1302 können Sie mit Arbeitsbühne mieten. So lassen sich Verschraubungen in großer Höhe direkt vom Korb aus erledigen.",
      },
      {
        frage: "Wird der Kran mit Kranführer geliefert?",
        antwort:
          "Ja. Unsere Autokrane kommen immer mit einem erfahrenen Kranführer. Er stimmt sich vor Ort mit Ihrem Montageleiter ab.",
      },
    ],
    bild: IMG.mkgHalle,
  },
  {
    slug: "pool-einheben",
    name: "Pool einheben",
    kurz: "Fertigbecken über Haus und Garten hinweg sicher an seinen Platz heben.",
    metaTitle: "Pool einheben mit Kran | Zeller Kranservice",
    metaDescription:
      "Pool mit dem Kran einheben lassen: Wir heben Fertigbecken über Haus und Hecke in die Baugrube. Mit Kranführer, Planung und Genehmigung. Rückruf in 24 h.",
    h1: "Pool mit dem Kran einheben",
    intro:
      "Ein Fertigpool wird mit dem Autokran über Haus, Garage oder Hecke direkt in die vorbereitete Grube gehoben. Häufig nutzen wir dafür den Klaas K1003 oder einen MKG-Kran, je nach Gewicht und Entfernung. Wir übernehmen Planung, Kranführer und bei Bedarf die Straßengenehmigung.",
    ablauf: [
      {
        titel: "Daten und Stellplatz klären",
        text: "Sie nennen uns Gewicht und Maße des Beckens. Wir prüfen den Abstand von der Straße bis zur Grube und den Stellplatz des Krans.",
      },
      {
        titel: "Anlieferung abstimmen",
        text: "Pool-Lieferung und Kran planen wir auf denselben Termin. So kann das Becken direkt vom Lkw gehoben werden.",
      },
      {
        titel: "Einheben und Absetzen",
        text: "Der Kranführer hebt das Becken über Hindernisse hinweg. Ihr Poolbauer richtet es beim Absetzen in der Grube aus.",
      },
    ],
    geraete: ["k1003", "mkg-1251", "mkg-582", "mkg-1302"],
    tipps: [
      "Fragen Sie beim Poolhersteller nach dem genauen Gewicht inklusive Zubehör.",
      "Messen Sie die Entfernung vom möglichen Kranstellplatz bis zur Grubenmitte.",
      "Die Grube sollte fertig vorbereitet sein, bevor der Kran kommt.",
      "Informieren Sie Nachbarn, wenn der Kran vor deren Einfahrt steht.",
    ],
    faq: [
      {
        frage: "Wie weit kann der Kran einen Pool heben?",
        antwort:
          "Das hängt vom Gewicht des Beckens und vom Kran ab. Je schwerer der Pool, desto kürzer die mögliche Ausladung. Wir prüfen das vorab anhand Ihrer Angaben.",
      },
      {
        frage: "Brauche ich eine Genehmigung für den Kran?",
        antwort:
          "Steht der Kran auf öffentlicher Straße, ist meist eine Genehmigung nötig. Diese beantragen wir für Sie bei der zuständigen Behörde.",
      },
      {
        frage: "Was passiert bei Regen oder Wind?",
        antwort:
          "Leichter Regen ist meist kein Problem. Bei starkem Wind entscheidet der Kranführer aus Sicherheitsgründen, ob gehoben wird. Wir stimmen dann einen neuen Termin ab.",
      },
    ],
    bild: IMG.k1003Seite,
  },
  {
    slug: "glasmontage",
    name: "Glasmontage & Glasfassaden",
    kurz: "Glasscheiben und Fassadenelemente mit Minikran und Vakuumheber setzen.",
    metaTitle: "Kran für Glasmontage mieten | Zeller Kranservice",
    metaDescription:
      "Glasmontage mit Minikran, Glashebegerät oder Autokran: Wir setzen Scheiben und Fassadenelemente mit Vakuumheber. Mit Kranführer, deutschlandweit.",
    h1: "Kran für Glasmontage und Glasfassaden",
    intro:
      "Für große Glasscheiben nutzen wir meist den Minikran Jekko SPX532 mit Vakuumheber. In Innenräumen und bodennah hilft das Glashebegerät Jekko MPK06. Für Fassaden in größerer Höhe kommt ein kompakter Autokran wie der MKG 582 zum Einsatz.",
    ablauf: [
      {
        titel: "Scheiben und Wege prüfen",
        text: "Wir klären Gewicht, Format und Einbauhöhe der Elemente. Dazu prüfen wir Zufahrt, Türbreiten und Bodenbelastung.",
      },
      {
        titel: "Gerät und Sauger wählen",
        text: "Passend zum Glas wählen wir Kran und Vakuumheber. Bei Bedarf setzen wir mehrere Geräte nacheinander ein.",
      },
      {
        titel: "Millimetergenau setzen",
        text: "Die Scheibe wird angesaugt, angehoben und langsam eingeschwenkt. Ihre Monteure führen sie in den Rahmen und sichern sie.",
      },
    ],
    geraete: ["jekko-spx532", "jekko-mpk06", "mkg-582", "k950"],
    tipps: [
      "Geben Sie uns Gewicht und Format der größten Scheibe vorab durch.",
      "Prüfen Sie Türbreiten und Bodenbelag auf dem Weg zum Einbauort.",
      "Halten Sie die Glasoberflächen sauber, damit der Sauger sicher hält.",
      "Bereiten Sie die Rahmen vor, damit jede Scheibe direkt eingesetzt wird.",
    ],
    faq: [
      {
        frage: "Passt der Minikran durch eine normale Tür?",
        antwort:
          "Der Jekko SPX532 ist nur 770 mm breit. Damit passt er durch viele Türen und Durchgänge. Wir prüfen die Maße vorab mit Ihnen.",
      },
      {
        frage: "Welches Zubehör brauche ich für Glas?",
        antwort:
          "Für Glas setzen wir Vakuumheber, auch Glassauger genannt, ein. Die passende Ausführung wählen wir nach Gewicht und Format der Scheiben.",
      },
      {
        frage: "Kann im Gebäude gearbeitet werden?",
        antwort:
          "Ja. Das Glashebegerät Jekko MPK06 arbeitet mit Elektromotor und ist damit für Innenräume geeignet. Es hebt bis 600 kg.",
      },
    ],
    bild: IMG.minikranGlas1,
  },
  {
    slug: "wintergarten",
    name: "Wintergarten-Montage",
    kurz: "Glasdach und Seitenelemente für Ihren Wintergarten präzise einheben.",
    metaTitle: "Kran für Wintergarten-Montage | Zeller Kranservice",
    metaDescription:
      "Wintergarten montieren mit Minikran und Glashebegerät: Wir heben Glasdach und Seitenelemente sicher an Ort und Stelle. Mit Planung und Kranführer.",
    h1: "Kran für die Wintergarten-Montage",
    intro:
      "Für Wintergärten setzen wir meist den Minikran Jekko SPX532 ein. Er ist schmal genug für Gartenzugänge und hebt Glasdach und Profile präzise. Bodennahe Seitenscheiben setzt das Glashebegerät Jekko MPK06.",
    ablauf: [
      {
        titel: "Zugang klären",
        text: "Wir prüfen, wie der Minikran in den Garten kommt. Wichtig sind Breite des Zugangs, Untergrund und Gefälle.",
      },
      {
        titel: "Tragwerk und Dach heben",
        text: "Zuerst werden Profile und Träger gesetzt. Danach hebt der Kran die Dachscheiben mit Vakuumheber auf die Unterkonstruktion.",
      },
      {
        titel: "Seitenelemente einsetzen",
        text: "Zum Schluss folgen die Seitenscheiben. Ihre Monteure richten jedes Element aus und verschrauben es.",
      },
    ],
    geraete: ["jekko-spx532", "jekko-mpk06", "klaas-k21-30-rs"],
    tipps: [
      "Messen Sie die engste Stelle auf dem Weg in den Garten.",
      "Schützen Sie Rasen und Pflaster bei Bedarf mit Bohlen oder Platten.",
      "Das Fundament des Wintergartens sollte fertig und ausgehärtet sein.",
    ],
    faq: [
      {
        frage: "Kommt der Minikran in meinen Garten?",
        antwort:
          "Oft ja. Der Jekko SPX532 ist 770 mm breit und 1.960 mm hoch. Damit passt er durch viele Gartentore und Durchgänge.",
      },
      {
        frage: "Wie schwer dürfen die Dachscheiben sein?",
        antwort:
          "Der Jekko SPX532 hebt bis 3,2 t, mit wachsender Reichweite weniger. Für übliche Wintergartenscheiben reicht das in aller Regel. Wir prüfen Ihre Werte vorab.",
      },
      {
        frage: "Beschädigt der Kran meinen Rasen?",
        antwort:
          "Der Minikran fährt auf Raupen und verteilt sein Gewicht gut. Auf weichem Boden legen wir zusätzlich Platten oder Bohlen aus.",
      },
    ],
    bild: IMG.minikranGlas2,
  },
  {
    slug: "dachdecker",
    name: "Dachdecker",
    kurz: "Ziegel, Paletten und Material schnell aufs Dach – auch ohne Kranführer.",
    metaTitle: "Kran für Dachdecker mieten | Zeller Kranservice",
    metaDescription:
      "Kran für Dachdecker: Anhängerkran auch ohne Fahrer oder Autokran mit Kranführer. Mit Ziegelzange und Ziegelmax. Deutschlandweit ab Werl.",
    h1: "Kran für Dachdecker mieten",
    intro:
      "Für Dacharbeiten empfehlen wir meist einen Anhängerkran wie den Klaas K21-30 RS. Sie können ihn auch ohne Kranführer mieten. Für höhere Dächer oder schwere Lasten kommt ein Autokran mit Kranführer.",
    ablauf: [
      {
        titel: "Gerät und Zubehör wählen",
        text: "Wir wählen Kran und Zubehör passend zu Dachhöhe und Material. Für Ziegel stellen wir Ziegelzangen oder Ziegelmaxe bereit.",
      },
      {
        titel: "Kran aufstellen",
        text: "Der Kran wird nahe am Gebäude aufgestellt und abgestützt. Beim Anhängerkran weisen wir Sie bei Bedarf in die Bedienung ein.",
      },
      {
        titel: "Material aufs Dach",
        text: "Paletten, Ziegel, Latten und Dämmung gehen direkt an die Einbaustelle. Altmaterial kann auf demselben Weg wieder herunter.",
      },
    ],
    geraete: ["klaas-k21-30-rs", "k950", "mkg-582", "mkg-1302"],
    tipps: [
      "Stimmen Sie Kran- und Materiallieferung auf denselben Tag ab.",
      "Planen Sie einen festen Abladeplatz auf dem Dach oder Gerüst.",
      "Fragen Sie rechtzeitig nach Ziegelzange oder Ziegelmax.",
      "Klären Sie, ob der Kran auf öffentlichem Grund stehen muss.",
    ],
    faq: [
      {
        frage: "Kann ich den Anhängerkran selbst bedienen?",
        antwort:
          "Ja. Anhängerkrane vermieten wir auch ohne Kranführer. Sie brauchen ein passendes Zugfahrzeug für 3,5 t Gesamtgewicht und eine Einweisung.",
      },
      {
        frage: "Welches Zubehör gibt es für Dachdecker?",
        antwort:
          "Wir bieten Ziegelzangen und Ziegelmaxe an. Damit heben Sie Dachziegel sicher und ohne Umpacken auf das Dach.",
      },
      {
        frage: "Wie hoch reicht ein Anhängerkran?",
        antwort:
          "Der Klaas K21-30 RS erreicht 29,8 m Hakenhöhe und hebt bis 1,5 t. Seitlich trägt er 250 kg bis 21 m Ausladung.",
      },
    ],
    bild: IMG.anhaengerkran,
  },
  {
    slug: "galabau",
    name: "Garten- und Landschaftsbau",
    kurz: "Steine, Bäume und Material über Haus und Mauer in den Garten heben.",
    metaTitle: "Kran für Garten- und Landschaftsbau | Zeller Kranservice",
    metaDescription:
      "Kran für GaLaBau mieten: Minikran für enge Gärten, Anhänger- und Autokran für weite Hübe. Steine, Bäume und Material sicher einheben.",
    h1: "Kran für Garten- und Landschaftsbau",
    intro:
      "In engen Gärten arbeitet der Minikran Jekko SPX532 direkt vor Ort. Muss Material über das Haus, nutzen wir einen Anhängerkran oder einen Autokran wie den MKG 582. So kommen Natursteine, Bäume und Big Bags ohne Schubkarre an ihren Platz.",
    ablauf: [
      {
        titel: "Lasten und Wege erfassen",
        text: "Wir klären, welche Lasten wohin müssen. Dazu prüfen wir Zufahrt, Gartenzugang und Untergrund.",
      },
      {
        titel: "Kran positionieren",
        text: "Je nach Lage steht der Kran vor dem Haus oder direkt im Garten. Der Minikran fährt auf Raupen durch schmale Durchgänge.",
      },
      {
        titel: "Material verteilen",
        text: "Steine, Pflanzen und Schüttgut werden direkt an die Einbaustelle gesetzt. Das spart Ihrem Team viele Wege.",
      },
    ],
    geraete: ["jekko-spx532", "klaas-k21-30-rs", "mkg-582"],
    tipps: [
      "Notieren Sie Gewichte von Findlingen, Stufen und Großbäumen.",
      "Schützen Sie empfindliche Flächen vorab mit Platten.",
      "Achten Sie auf Leitungen und Schächte im Garten.",
      "Lassen Sie das Material möglichst nah am Kranstellplatz abladen.",
    ],
    faq: [
      {
        frage: "Kann ein Kran einen Baum pflanzen?",
        antwort:
          "Ja. Mit passenden Gurten heben wir Großbäume samt Ballen in die Pflanzgrube. Wichtig ist das Gewicht des Ballens.",
      },
      {
        frage: "Was tun, wenn der Garten nur über das Haus erreichbar ist?",
        antwort:
          "Dann heben wir mit einem Anhänger- oder Autokran über das Gebäude. Die Reichweite hängt vom Gewicht der Last ab.",
      },
      {
        frage: "Ist der Minikran im Garten schonend?",
        antwort:
          "Der Jekko SPX532 fährt auf Raupen und ist kompakt. Auf weichem Boden legen wir zusätzlich Lastverteilplatten aus.",
      },
    ],
    bild: IMG.minikranGarten,
  },
  {
    slug: "zimmerei",
    name: "Zimmerei & Holzbau",
    kurz: "Dachstühle, Holzrahmenelemente und Brettsperrholz zügig aufrichten.",
    metaTitle: "Kran für Zimmerei & Holzbau | Zeller Kranservice",
    metaDescription:
      "Kran für Zimmerei und Holzbau: Dachstuhl richten, Wandelemente und Brettsperrholz montieren. Autokran mit Kranführer, deutschlandweit ab Werl.",
    h1: "Kran für Zimmerei und Holzbau",
    intro:
      "Für Dachstühle und Holzelemente setzen wir meist den MKG HMK 1302 oder den MKG 582 ein. Beide arbeiten mit Knickausleger und kommen gut über Wände und Dachkanten. Ein erfahrener Kranführer hebt im Takt Ihrer Zimmerer.",
    ablauf: [
      {
        titel: "Richtplan abstimmen",
        text: "Wir besprechen Bauteile, Gewichte und Reihenfolge. Daraus ergeben sich Kranwahl und Stellplatz.",
      },
      {
        titel: "Abbund anliefern und heben",
        text: "Hölzer und Elemente werden vom Lkw oder Lagerplatz direkt gehoben. Das vermeidet doppeltes Umlagern.",
      },
      {
        titel: "Richten und sichern",
        text: "Der Kran hält jedes Bauteil, bis Ihre Zimmerer es verbunden und gesichert haben. Dann folgt das nächste.",
      },
    ],
    geraete: ["mkg-1302", "mkg-582", "k1003", "klaas-k21-30-rs"],
    tipps: [
      "Nummerieren Sie Bauteile in Montagereihenfolge.",
      "Planen Sie Anschlagpunkte an großen Elementen schon im Werk.",
      "Halten Sie genug Zimmerer für zügiges Verbinden bereit.",
      "Prüfen Sie die Wettervorhersage, vor allem den Wind.",
    ],
    faq: [
      {
        frage: "Welcher Kran eignet sich für einen Dachstuhl?",
        antwort:
          "Für Einfamilienhäuser oft der MKG 582 oder ein Anhängerkran. Für große Holzbauten mit weiten Wegen empfehlen wir den MKG HMK 1302.",
      },
      {
        frage: "Wie lange dauert das Richten eines Dachstuhls?",
        antwort:
          "Das hängt von Größe, Vorbereitung und Teamstärke ab. Gut vorbereitete Bauteile verkürzen die Kranzeit deutlich.",
      },
      {
        frage: "Kann der Kran Holzelemente vom Lkw heben?",
        antwort:
          "Ja. Wenn Lkw und Kran gut stehen, heben wir die Elemente direkt von der Ladefläche an den Einbauort.",
      },
    ],
    bild: IMG.mkgMontage,
  },
  {
    slug: "geruestbau",
    name: "Gerüstbau",
    kurz: "Gerüstmaterial in Höhe bringen, wo Aufzug und Seilwinde nicht reichen.",
    metaTitle: "Kran für Gerüstbau mieten | Zeller Kranservice",
    metaDescription:
      "Kran für Gerüstbauer: Gerüstmaterial auf Dächer, Innenhöfe und Hochhausteile heben. Anhängerkran oder Autokran mit Kranführer. Rückruf in 24 h.",
    h1: "Kran für den Gerüstbau",
    intro:
      "Für Gerüstbauer heben wir Material auf Dächer, Vordächer und in Innenhöfe. Oft reicht ein Anhängerkran wie der Klaas K21-30 RS. Für größere Höhen oder schwere Pakete kommt ein Autokran wie der MKG 582 mit Kranführer.",
    ablauf: [
      {
        titel: "Einsatzort klären",
        text: "Wir klären, wo das Material hin muss und wie schwer die Pakete sind. Danach wählen wir den Kran.",
      },
      {
        titel: "Material bündeln",
        text: "Gerüstteile werden in Gitterboxen oder sicher gebündelt bereitgestellt. So kann der Kran zügig heben.",
      },
      {
        titel: "Heben und abbauen",
        text: "Der Kran setzt die Pakete an der Aufbaustelle ab. Beim Abbau holen wir das Material auf demselben Weg zurück.",
      },
    ],
    geraete: ["klaas-k21-30-rs", "mkg-582", "k950"],
    tipps: [
      "Verpacken Sie Kleinteile in geschlossenen Gitterboxen.",
      "Planen Sie eine tragfähige Ablagefläche am Ziel ein.",
      "Halten Sie Aufbau- und Abbautermine mit uns früh fest.",
    ],
    faq: [
      {
        frage: "Wann lohnt sich ein Kran im Gerüstbau?",
        antwort:
          "Wenn Material auf Dächer, in Innenhöfe oder über Gebäude muss. Dort sparen Sie viel Tragen und Weiterreichen.",
      },
      {
        frage: "Kann ich den Anhängerkran ohne Fahrer mieten?",
        antwort:
          "Ja. Anhängerkrane vermieten wir auch ohne Kranführer. Autokrane kommen immer mit unserem Kranführer.",
      },
      {
        frage: "Was ist beim Abbau wichtig?",
        antwort:
          "Buchen Sie den Kran für den Abbau früh. Das Material sollte gebündelt bereitliegen, bevor der Kran kommt.",
      },
    ],
    bild: IMG.mkgHalleSeite,
  },
  {
    slug: "fenstereinbau",
    name: "Fenstereinbau",
    kurz: "Schwere Fenster und Hebeschiebetüren sicher transportieren und einsetzen.",
    metaTitle: "Kran für Fenstereinbau mieten | Zeller Kranservice",
    metaDescription:
      "Fenstereinbau mit Glashebegerät oder Minikran: Wir heben schwere Fenster und Hebeschiebetüren sicher in die Öffnung. Innen und außen einsetzbar.",
    h1: "Kran und Hebegerät für den Fenstereinbau",
    intro:
      "Für schwere Fenster und Hebeschiebetüren empfehlen wir das Glashebegerät Jekko MPK06. Es hebt bis 600 kg und arbeitet elektrisch, auch im Gebäude. Für obere Etagen nutzen wir den Minikran Jekko SPX532 oder einen Anhängerkran.",
    ablauf: [
      {
        titel: "Elemente und Etage klären",
        text: "Sie nennen uns Gewicht, Maße und Einbauhöhe der Elemente. Danach wählen wir Hebegerät und Vakuumheber.",
      },
      {
        titel: "Transport zum Einbauort",
        text: "Das Element wird angesaugt und zur Öffnung gefahren oder gehoben. Enge Wege prüfen wir vorab.",
      },
      {
        titel: "Einsetzen und ausrichten",
        text: "Das Gerät hält das Element in Position. Ihre Monteure richten es aus und befestigen es.",
      },
    ],
    geraete: ["jekko-mpk06", "jekko-spx532", "klaas-k21-30-rs"],
    tipps: [
      "Bereiten Sie die Laibungen vor, bevor das Hebegerät kommt.",
      "Prüfen Sie Türbreiten und Bodenbelastung auf dem Transportweg.",
      "Halten Sie Glasflächen sauber, damit der Sauger sicher hält.",
      "Legen Sie die Reihenfolge der Elemente vorab fest.",
    ],
    faq: [
      {
        frage: "Wie schwer darf ein Fenster für das Glashebegerät sein?",
        antwort:
          "Der Jekko MPK06 hebt bis 600 kg. Er erreicht ca. 4 m Hakenhöhe und eignet sich damit für Erdgeschoss und bodennahe Einbauten.",
      },
      {
        frage: "Passt das Glashebegerät durch Türen?",
        antwort:
          "Der Jekko MPK06 ist 762 mm breit. Damit kommt er durch viele Türöffnungen. Wir klären die Maße vorab mit Ihnen.",
      },
      {
        frage: "Was nutze ich für Fenster im Obergeschoss?",
        antwort:
          "Dafür eignen sich Minikran oder Anhängerkran mit Vakuumheber. Bei großen Höhen setzen wir einen Autokran ein.",
      },
    ],
    bild: IMG.glasworkerInnen,
  },
  {
    slug: "bauschutt",
    name: "Bauschutt & Material aus Gebäuden heben",
    kurz: "Schutt, Altmaterial und Technik aus Innenhöfen und Dachgeschossen heben.",
    metaTitle: "Bauschutt mit dem Kran heben | Zeller Kranservice",
    metaDescription:
      "Bauschutt und Altmaterial per Kran aus Gebäuden, Innenhöfen und Dachgeschossen heben. Autokran oder Minikran mit Kranführer. Deutschlandweit.",
    h1: "Bauschutt und Material aus Gebäuden heben",
    intro:
      "Bei Sanierungen heben wir Bauschutt, Altmaterial und alte Technik per Kran aus dem Gebäude. Für Innenhöfe und Dachgeschosse nutzen wir oft den MKG 1251 oder den MKG 582. In Gebäuden selbst hilft der schmale Minikran Jekko SPX532.",
    ablauf: [
      {
        titel: "Mengen und Wege klären",
        text: "Wir klären, welches Material wo anfällt und wohin es soll. Dazu gehören Gewichte, Behälter und der Containerstellplatz.",
      },
      {
        titel: "Behälter bereitstellen",
        text: "Schutt wird in Big Bags, Kübeln oder Mulden gesammelt. Der Kran hebt nur geprüfte und geeignete Behälter.",
      },
      {
        titel: "Ausheben und abladen",
        text: "Der Kranführer hebt die Behälter über Dach oder Hof direkt in den Container. Das spart Treppenwege und Rutschen.",
      },
    ],
    geraete: ["mkg-1251", "mkg-582", "k950", "jekko-spx532"],
    tipps: [
      "Füllen Sie Big Bags nur bis zur zulässigen Last.",
      "Stellen Sie den Container in Reichweite des Krans auf.",
      "Sammeln Sie das Material vorab an einer Übergabestelle.",
      "Klären Sie früh, ob Kran oder Container auf der Straße stehen.",
    ],
    faq: [
      {
        frage: "Wie kommt Bauschutt aus einem Innenhof?",
        antwort:
          "Ein Autokran steht auf der Straße und hebt über das Gebäude in den Hof. Die Behälter setzt er direkt im Container ab.",
      },
      {
        frage: "Welche Behälter können gehoben werden?",
        antwort:
          "Geeignet sind zugelassene Big Bags, Kranmulden und Kübel. Entscheidend ist, dass der Behälter für die Last ausgelegt ist.",
      },
      {
        frage: "Übernehmen Sie die Genehmigung für die Straße?",
        antwort:
          "Ja. Wir beantragen Straßensperrung und Genehmigungen für den Kran. Den Containerstellplatz klären wir mit Ihnen gemeinsam.",
      },
    ],
    bild: IMG.mkg1251,
  },
];
