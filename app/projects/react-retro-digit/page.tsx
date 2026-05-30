import type { Metadata } from "next"
import Link from "next/link"
import { SectionLabel } from "@/components/section-label"
import { ThemeToggle } from "@/components/theme-toggle"
import { Pill } from "@/components/ui/pill"
import { Demo } from "./demo"
import { InstallCommand } from "./install-command"

export const metadata: Metadata = {
  title: "react-retro-digit",
  description:
    "SVG-basierte Seven-Segment-Display-Komponente für React mit flexibler Farb- und Grössensteuerung.",
  alternates: {
    canonical: "/projects/react-retro-digit",
  },
  openGraph: {
    title: "react-retro-digit · Marc Seiferle",
    description:
      "SVG-basierte Seven-Segment-Display-Komponente für React mit flexibler Farb- und Grössensteuerung.",
    url: "/projects/react-retro-digit",
  },
}

const tags = ["React", "TypeScript", "Vite"] as const

const features = [
  {
    no: "01",
    title: "Reines SVG",
    body: "Gestochen scharf in jeder Grösse — keine Bitmaps, kein Aliasing.",
  },
  {
    no: "02",
    title: "Voll steuerbar",
    body: "Farbe, Grösse und Deckkraft über klare, einfache Props.",
  },
  {
    no: "03",
    title: "Null Dependencies",
    body: "Keine Runtime-Abhängigkeiten, winziges Bundle, tree-shakeable.",
  },
  {
    no: "04",
    title: "TypeScript",
    body: "Vollständig typisiert — mit Autocomplete für jede Prop.",
  },
] as const

const api = [
  { prop: "number", type: "string | number", def: "0", desc: "Anzuzeigender Wert." },
  { prop: "size", type: "string | number", def: "24", desc: "Höhe des SVG in px." },
  { prop: "color", type: "string", def: "currentColor", desc: "Farbe aktiver Segmente." },
  { prop: "inactiveColor", type: "string", def: "–", desc: "Eigene Farbe inaktiver Segmente." },
  {
    prop: "alphaRatio",
    type: "string | number",
    def: "0.1",
    desc: "Deckkraft inaktiver Segmente.",
  },
  { prop: "className", type: "string", def: "–", desc: "CSS-Klassen für das SVG." },
] as const

export default function ReactRetroDigitPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-12 md:py-14">
      <nav className="flex items-center justify-between">
        <Link
          href="/#projects"
          className="text-foreground-muted hover:text-accent-strong ease-out-quad group inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
        >
          <span
            aria-hidden="true"
            className="ease-out-quad inline-block transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Projekte
        </Link>
        <ThemeToggle />
      </nav>

      <header className="mt-12" data-reveal>
        <p className="text-accent flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase">
          <span className="bg-accent inline-block h-1.5 w-1.5 rounded-[2px]" aria-hidden="true" />
          NPM-Paket · Open Source
        </p>
        <h1 className="text-foreground mt-4 font-mono text-[clamp(28px,6vw,44px)] leading-[1.05] font-semibold tracking-[-0.02em]">
          react-retro-digit
        </h1>
        <p className="text-foreground-muted mt-4 max-w-[34em] text-[16px] leading-[1.6] text-pretty">
          Eine SVG-basierte Seven-Segment-Display-Komponente für React. Flexibel in Farbe und
          Grösse, ohne Runtime-Dependencies — als wiederverwendbare Library mit Vite gebaut und auf
          npm veröffentlicht.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologien">
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <InstallCommand command="pnpm add react-retro-digit" />
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/ms007/react-retro-digit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-strong hover:underline"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.npmjs.com/package/react-retro-digit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-strong hover:underline"
            >
              npm ↗
            </a>
          </div>
        </div>
      </header>

      <section
        className="mt-16"
        aria-label="Live-Demo"
        data-reveal
        style={{ animationDelay: "80ms" }}
      >
        <SectionLabel>Live-Demo</SectionLabel>
        <Demo />
        <p className="text-foreground-subtle mt-3 text-[13px] leading-[1.55]">
          Eine laufende Uhr, gerendert aus echten <code className="font-mono">RetroDigit</code>
          -Komponenten. Die Regler steuern dieselben Props, die das Paket bereitstellt.
        </p>
      </section>

      <section
        className="mt-16"
        aria-label="Eigenschaften"
        data-reveal
        style={{ animationDelay: "160ms" }}
      >
        <SectionLabel>Eigenschaften</SectionLabel>
        <ul className="border-border bg-border grid grid-cols-1 gap-px overflow-hidden rounded-md border sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.no} className="bg-surface-raised p-5">
              <span className="text-accent-strong font-mono text-[11px] tracking-[0.14em]">
                {f.no}
              </span>
              <h3 className="text-foreground mt-2 text-[15px] font-semibold tracking-[-0.005em]">
                {f.title}
              </h3>
              <p className="text-foreground-muted mt-1.5 text-[14px] leading-[1.55] text-pretty">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mt-16"
        aria-label="Verwendung"
        data-reveal
        style={{ animationDelay: "240ms" }}
      >
        <SectionLabel>Verwendung</SectionLabel>
        <div className="border-border overflow-hidden rounded-md border">
          <div className="border-border bg-surface-elevated flex items-center gap-2 border-b px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="bg-foreground-subtle/40 h-2.5 w-2.5 rounded-full" />
              <span className="bg-foreground-subtle/40 h-2.5 w-2.5 rounded-full" />
              <span className="bg-foreground-subtle/40 h-2.5 w-2.5 rounded-full" />
            </span>
            <span className="text-foreground-subtle ml-1 font-mono text-[11px]">Counter.tsx</span>
          </div>
          <pre className="bg-surface-raised overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[1.7]">
            <code className="text-foreground-muted">
              <span className="text-accent-strong">import</span>
              {" { RetroDigit } "}
              <span className="text-accent-strong">from</span>{" "}
              <span className="text-success">&quot;react-retro-digit&quot;</span>
              {"\n\n"}
              <span className="text-foreground-subtle italic">
                {"// One component renders one digit — map a value to compose numbers."}
              </span>
              {"\n"}
              <span className="text-accent-strong">function</span>
              <span className="text-[#e6b450]"> Counter</span>
              {"({ value }) {\n"}
              {"  "}
              <span className="text-accent-strong">return</span>
              {" [...String(value)].map((digit, i) => (\n"}
              {"    "}
              <span className="text-[#e6b450]">{"<RetroDigit"}</span>
              {" key={i} number={digit} size={96} color="}
              <span className="text-success">&quot;#50c750&quot;</span>
              {" />\n"}
              {"  ))\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      <section className="mt-16" aria-label="API" data-reveal style={{ animationDelay: "320ms" }}>
        <SectionLabel>Props</SectionLabel>
        <div className="border-border overflow-x-auto rounded-md border">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="text-foreground-subtle bg-surface-elevated font-mono text-[10px] tracking-[0.12em] uppercase">
                <th className="px-4 py-2.5 font-medium">Prop</th>
                <th className="px-4 py-2.5 font-medium">Typ</th>
                <th className="px-4 py-2.5 font-medium">Default</th>
                <th className="hidden px-4 py-2.5 font-medium sm:table-cell">Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              {api.map((row, i) => (
                <tr key={row.prop} className={i > 0 ? "border-border border-t" : undefined}>
                  <td className="text-accent-strong px-4 py-3 font-mono whitespace-nowrap">
                    {row.prop}
                  </td>
                  <td className="text-foreground-muted px-4 py-3 font-mono whitespace-nowrap">
                    {row.type}
                  </td>
                  <td className="text-foreground px-4 py-3 font-mono whitespace-nowrap">
                    {row.def}
                  </td>
                  <td className="text-foreground-muted hidden px-4 py-3 sm:table-cell">
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="border-border text-foreground-subtle mt-16 border-t pt-8 text-sm">
        <Link
          href="/#projects"
          className="hover:text-accent-strong ease-out-quad transition-colors duration-200"
        >
          ← Zurück zu allen Projekten
        </Link>
      </footer>
    </div>
  )
}
