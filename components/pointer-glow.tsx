"use client"

import { useEffect, useRef } from "react"

export function PointerGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    let frame = 0
    let nextX = 0
    let nextY = 0

    const flush = () => {
      frame = 0
      const el = glowRef.current
      if (!el) return
      el.style.setProperty("--mx", `${nextX}px`)
      el.style.setProperty("--my", `${nextY}px`)
    }

    const onMove = (e: PointerEvent) => {
      nextX = e.clientX
      nextY = e.clientY
      if (frame === 0) frame = requestAnimationFrame(flush)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (frame !== 0) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden lg:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), var(--color-glow), transparent 70%)",
      }}
    />
  )
}
