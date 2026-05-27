"use client"

import { useEffect, useRef, useState } from "react"

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${command} kopieren`}
      className="border-border bg-surface-raised hover:border-border-strong ease-out-quad group inline-flex items-center gap-3 rounded-md border px-3.5 py-2 font-mono text-[13px] transition-colors duration-200"
    >
      <span className="text-foreground-subtle select-none">$</span>
      <code className="text-foreground">{command}</code>
      <span
        className="text-foreground-subtle group-hover:text-accent-strong ease-out-quad ml-1 text-[10px] tracking-[0.14em] uppercase transition-colors duration-200"
        aria-live="polite"
      >
        {copied ? "kopiert" : "kopieren"}
      </span>
    </button>
  )
}
