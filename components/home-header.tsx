import { RailNav, type RailNavItem } from "@/components/rail-nav"
import { Socials } from "@/components/socials"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems: readonly RailNavItem[] = [
  { id: "about", label: "Über mich" },
  { id: "experience", label: "Erfahrung" },
  { id: "projects", label: "Projekte" },
]

export function HomeHeader() {
  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-[48%] lg:justify-between lg:py-24">
      <div>
        <div className="text-accent mb-6 flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="14" height="14" rx="3" fill="currentColor" opacity="0.2" />
            <rect x="4" y="4" width="8" height="8" rx="1.5" fill="currentColor" />
          </svg>
          <span className="text-foreground-subtle">Portfolio · 2026</span>
        </div>

        <h1 className="text-foreground text-[clamp(36px,6vw,52px)] leading-[1.05] font-bold tracking-[-0.02em]">
          [Marc Seiferle]
        </h1>
        <h2 className="text-foreground [&>span+span]:before:text-foreground-subtle mt-2 text-[19px] font-medium tracking-[-0.01em] [&>span+span]:before:content-['_·_']">
          <span>Senior Frontend Engineer</span>
          <span>Tech Lead</span>
        </h2>
        <p className="text-foreground-muted mt-4 max-w-[28em] text-base leading-[1.6] text-pretty">
          Pixel-perfekte UIs auf nachhaltiger Architektur.
          <br /> Ich baue die Brücke zwischen Design und Tech.
        </p>

        <RailNav items={navItems} aria-label="Inhaltsverzeichnis" className="mt-16" />
      </div>

      <div className="mt-12 flex items-center gap-4">
        <Socials />
        <span aria-hidden="true" className="bg-border mx-1 h-5 w-px" />
        <ThemeToggle />
      </div>
    </header>
  )
}
