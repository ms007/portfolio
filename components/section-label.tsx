import type { ReactNode } from "react"

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-foreground-subtle mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
      <span className="bg-border h-px w-6" aria-hidden="true" />
      {children}
    </h2>
  )
}
