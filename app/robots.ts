import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const live = process.env.NEXT_PUBLIC_INDEXIERBAR === "1";
  return {
    rules: live ? [{ userAgent: "*", allow: "/", disallow: ["/api/", "/danke/"] }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
