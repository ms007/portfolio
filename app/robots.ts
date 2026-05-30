import type { MetadataRoute } from "next"

// Required so the route is emitted as a static file during `output: export`.
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/resume.pdf",
    },
    sitemap: "https://marcseiferle.com/sitemap.xml",
    host: "https://marcseiferle.com",
  }
}
