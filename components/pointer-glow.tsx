"use client"

import { useEffect } from "react"

export function PointerGlow() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    let frame = 0
    let nextX = 0
    let nextY = 0

    const flush = () => {
      frame = 0
      document.body.style.setProperty("--mx", `${nextX}px`)
      document.body.style.setProperty("--my", `${nextY}px`)
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

  return null
}
