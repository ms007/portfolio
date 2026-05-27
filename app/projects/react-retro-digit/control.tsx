"use client"
import { type ReactNode } from "react"

type ControlProps = {
  label: string
  children: ReactNode
}

export function Control({ label, children }: ControlProps) {
  return (
    <div className="min-w-0">
      <span className="text-foreground-subtle font-mono text-[10px] tracking-[0.16em] uppercase">
        {label}
      </span>
      <div className="mt-2.5 flex items-center gap-2.5">{children}</div>
    </div>
  )
}
