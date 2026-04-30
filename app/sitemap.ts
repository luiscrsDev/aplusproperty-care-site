import type { MetadataRoute } from "next";
import { BRAND, PLANS, SERVICES } from "@/lib/constants";
import { AREA_CONTENT } from "@/lib/content/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BRAND.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BRAND.url}/maintenance-plans`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BRAND.url}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${BRAND.url}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const planPages: MetadataRoute.Sitemap = PLANS.map((p) => ({
    url: `${BRAND.url}/maintenance-plans/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BRAND.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.flagship ? 0.9 : 0.7,
  }));

  const areaPages: MetadataRoute.Sitemap = AREA_CONTENT.map((a) => ({
    url: `${BRAND.url}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...planPages, ...servicePages, ...areaPages];
}
