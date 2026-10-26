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
      { source: "/raupenbuehne-mieten", destination: "/arbeitsbuehne-mieten/raupenbuehne/", permanent: true },
      { source: "/scherenbuehne-mieten", destination: "/arbeitsbuehne-mieten/scherenbuehne/", permanent: true },
      // WordPress-Reste
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
