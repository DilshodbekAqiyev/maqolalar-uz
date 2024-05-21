import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://maqolalar-uz.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://maqolalar-uz.vercel.app/documents",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.5,
    },
  ];
}
