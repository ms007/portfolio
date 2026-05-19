"use client"

import { useEffect, useState } from "react"

export type UseScrollSpyOptions = {
  /**
   * `rootMargin` for the underlying IntersectionObserver. The default shrinks
   * the observation band to the middle of the viewport, which feels natural
   * for a table-of-contents style rail.
   */
  rootMargin?: string
  /** `threshold` for the underlying IntersectionObserver. */
  threshold?: number | number[]
  /** Custom scroll root. Defaults to the viewport. */
  root?: Element | Document | null
}

/**
 * Tracks which of the given element IDs is currently the "active" section
 * based on viewport intersection. Returns `null` until a section becomes
 * active (e.g. before the first scroll on a long page).
 *
 * @param ids HTML element IDs to observe, in document order.
 */
export function useScrollSpy(
  ids: readonly string[],
  options: UseScrollSpyOptions = {},
): string | null {
  const { rootMargin = "-30% 0px -55% 0px", threshold = 0, root = null } = options

  const [activeId, setActiveId] = useState<string | null>(null)
  const idsKey = ids.join("\x00")

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const elements = idsKey
      .split("\x00")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let bestId: string | null = null
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        if (bestId) setActiveId(bestId)
      },
      { rootMargin, threshold, root: root instanceof Document ? null : root },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey, rootMargin, threshold, root])

  return activeId
}
