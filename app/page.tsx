"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/lib/use-theme"

export default function ShowcasePage() {
  const [theme, setTheme] = useTheme()
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-8 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-foreground-subtle font-mono text-[11px] tracking-[0.14em] uppercase">
            Portfolio · UI Kit
          </p>
          <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight">
            Komponenten-Showcase
          </h1>
        </div>
        <Button onClick={toggleTheme} size="sm">
          Theme: {theme}
        </Button>
      </header>

      <Section title="Buttons">
        <Button>Default</Button>
        <Button variant="accent">Accent</Button>
        <Button isActive>Active</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Small</Button>
        <Button size="xs">Extra-small</Button>
        <Button size="sm" variant="accent">
          sm + accent
        </Button>
        <Button icon aria-label="Add">
          +
        </Button>
        <Button icon size="sm" aria-label="Add">
          +
        </Button>
      </Section>

      <Section title="Input">
        <Input placeholder="default" defaultValue="120px" />
        <Input size="sm" defaultValue="48" />
        <Input size="xs" defaultValue="50" />
      </Section>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-foreground border-border border-b pb-2 text-base font-semibold tracking-tight">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  )
}
