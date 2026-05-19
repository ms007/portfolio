import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { PointerGlow } from "@/components/pointer-glow"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio · 2026",
  manifest: "/manifest.json",
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
      <body className="flex min-h-dvh flex-col">
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
        </ThemeProvider>
      </body>
    </html>
  )
}
