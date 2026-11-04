import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Übergangsweise: Bilder liegen noch auf der alten WordPress-Seite.
    remotePatterns: [new URL("https://zeller-kranservice.de/wp-content/uploads/**")],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/mietgeraete", destination: "/mietpark/", permanent: true },
      { source: "/kontakt-neu", destination: "/kontakt/", permanent: true },
      { source: "/einsatzzweck", destination: "/einsatzbereiche/", permanent: true },
      { source: "/datenblaetter", destination: "/mietpark/", permanent: true },
      // Raupen- und Scherenbühne nicht mehr im Mietpark (Nov. 2026)
      { source: "/raupenbuehne-mieten", destination: "/hubsteiger-mieten/", permanent: true },
      { source: "/scherenbuehne-mieten", destination: "/hubsteiger-mieten/", permanent: true },
      { source: "/arbeitsbuehne-mieten", destination: "/hubsteiger-mieten/", permanent: true },
      { source: "/arbeitsbuehne-mieten/:path*", destination: "/hubsteiger-mieten/", permanent: true },
      { source: "/projekte/soest-raupenbuehne-kirche", destination: "/projekte/", permanent: true },
      { source: "/projekte/essen-hallendecke-scherenbuehne", destination: "/projekte/", permanent: true },
      // WordPress-Reste
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
