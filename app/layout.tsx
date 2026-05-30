import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { PointerGlow } from "@/components/pointer-glow"
import { SiteGrain } from "@/components/site-grain"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const siteUrl = "https://marcseiferle.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marc Seiferle – Senior Frontend Engineer & Tech Lead",
    template: "%s · Marc Seiferle",
  },
  description:
    "Marc Seiferle – Senior Frontend Engineer und Tech Lead. Moderne Frontend-Architektur, UI/UX und skalierbare Web-Anwendungen.",
  keywords: [
    "Marc Seiferle",
    "Frontend Engineer",
    "Tech Lead",
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "UI/UX",
  ],
  authors: [{ name: "Marc Seiferle", url: siteUrl }],
  creator: "Marc Seiferle",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "Marc Seiferle",
    title: "Marc Seiferle – Senior Frontend Engineer & Tech Lead",
    description:
      "Senior Frontend Engineer und Tech Lead. Moderne Frontend-Architektur, UI/UX und skalierbare Web-Anwendungen.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Marc Seiferle – Senior Frontend Engineer & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Seiferle – Senior Frontend Engineer & Tech Lead",
    description:
      "Senior Frontend Engineer und Tech Lead. Moderne Frontend-Architektur, UI/UX und skalierbare Web-Anwendungen.",
    images: ["/og.png"],
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marc Seiferle",
  url: siteUrl,
  jobTitle: "Senior Frontend Engineer & Tech Lead",
  email: "mailto:marc.seiferle@gmail.com",
  sameAs: ["https://github.com/ms007", "https://www.linkedin.com/in/marc-seiferle"],
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <body className="isolate flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <a
            href="#content"
            className="bg-accent sr-only rounded-sm px-3 py-2 text-xs text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
          >
            Zum Inhalt springen
          </a>
          <PointerGlow />
          {children}
          <SiteGrain />
        </ThemeProvider>
      </body>
    </html>
  )
}
