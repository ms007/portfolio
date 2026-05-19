import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
}

const themeBootstrap = `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: light)').matches;document.documentElement.setAttribute('data-theme',s||(p?'light':'dark'));}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#content"
          className="bg-accent sr-only rounded-sm px-3 py-2 text-xs text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Zum Inhalt springen
        </a>
        <PointerGlow />
        {children}
      </body>
    </html>
  )
}
