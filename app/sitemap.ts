import type { MetadataRoute } from "next"

// Required so the route is emitted as a static file during `output: export`.
export const dynamic = "force-static"

const siteUrl = "https://marcseiferle.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects/react-retro-digit`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ]
}
