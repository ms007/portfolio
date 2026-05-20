"use client"

import { useEffect, useRef } from "react"

const BLOB_SIZE_PX = 1000
const BLOB_BLUR_PX = 280

export function PointerGlow() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    let x = 0
    let y = 0

    const flush = () => {
      frame = 0
      const el = containerRef.current
      if (!el) return
      el.style.setProperty("--mx", `${x}px`)
      el.style.setProperty("--my", `${y}px`)
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
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
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden lg:block"
    >
      <div
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: BLOB_SIZE_PX,
          height: BLOB_SIZE_PX,
          background: "var(--color-glow-blob)",
          filter: `blur(${BLOB_BLUR_PX}px)`,
          transform: "translate3d(calc(var(--mx, 50vw) - 50%), calc(var(--my, 0px) - 50%), 0)",
          willChange: "transform",
        }}
      />
    </div>
  )
}
