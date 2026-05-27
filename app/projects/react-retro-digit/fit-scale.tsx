"use client"

import { type ReactNode, useLayoutEffect, useRef, useState, useEffect } from "react"

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export function FitScale({ children }: { children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useIsomorphicLayoutEffect(() => {
    const o = outer.current
    const n = inner.current
    if (!o || !n) return
    const measure = () => {
      const avail = o.clientWidth
      const natural = n.scrollWidth
      setScale(natural > avail ? avail / natural : 1)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(o)
    ro.observe(n)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={outer} className="flex w-full justify-center overflow-hidden">
      <div
        ref={inner}
        className="flex items-center"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      >
        {children}
      </div>
    </div>
  )
}
