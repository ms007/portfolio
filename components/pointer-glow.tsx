"use client"

import { usePointerGlow } from "@/hooks/use-pointer-glow"

export function PointerGlow() {
  const canvasRef = usePointerGlow()
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden lg:block"
    />
  )
}
