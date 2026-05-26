import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static HTML export so the site can be served from GitHub Pages.
  output: "export",
  // GitHub Pages can't run Next.js' image optimization server.
  images: {
    unoptimized: true,
  },
}

export default nextConfig
