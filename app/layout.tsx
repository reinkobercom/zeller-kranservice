import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";
import { IMG } from "@/lib/images";
import { staedte } from "@/data/staedte";

// Archivo (variabel: Gewicht + Breite), selbst gehostet
const archivo = localFont({
  src: [
    { path: "./fonts/archivo-latin-wdth-normal.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kran mieten mit Kranführer, deutschlandweit | Zeller Kranservice",
    template: "%s",
  },
  description:
    "Kran mieten bei Zeller Kranservice: Autokrane bis 52 m, Anhängerkrane, Minikran, Hubsteiger und Glashebegerät. Mit Kranführer, Planung und Genehmigung. Seit 2014, über 1.000 Einsätze pro Jahr.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE.name,
    images: [{ url: IMG.mkgHalle, width: 1200, height: 800 }],
  },
  twitter: { card: "summary_large_image" },
  // Vorschau-Deployments nicht indexieren, bis die Domain umzieht
  robots:
    process.env.NEXT_PUBLIC_INDEXIERBAR === "1"
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const organisation = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE.url}/#organisation`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: IMG.logo,
  image: IMG.mkgHalle,
  telephone: "+49 2922 9109225",
  email: SITE.email,
  foundingDate: String(SITE.gegruendet),
  founder: { "@type": "Person", name: SITE.inhaber },
  vatID: SITE.ustId,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.strasse,
    postalCode: SITE.plz,
    addressLocality: SITE.ort,
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "15:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    ...staedte.map((s) => ({ "@type": "City", name: s.name })),
  ],
  knowsAbout: ["Kranvermietung", "Autokran", "Anhängerkran", "Minikran", "Hubsteiger", "Glasmontage"],
  sameAs: [SITE.provenExpert],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <JsonLd data={organisation} />
      </body>
    </html>
  );
}
