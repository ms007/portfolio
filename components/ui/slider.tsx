import { type ComponentPropsWithoutRef, type CSSProperties, forwardRef } from "react"
import { cn } from "@/lib/cn"

type SliderProps = Omit<ComponentPropsWithoutRef<"input">, "type">

const toNum = (v: unknown, fallback: number) => {
  const n = typeof v === "number" ? v : parseFloat(String(v ?? ""))
  return Number.isFinite(n) ? n : fallback
}

// Visual styling lives in globals.css under `.slider`; the vendor thumb
// pseudo-elements can't be expressed as Tailwind arbitrary variants. The
// `--slider-fill` custom property drives the accent fill left of the thumb,
// since WebKit has no native progress pseudo-element.
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, style, value, min = 0, max = 100, ...props }, ref) => {
    const lo = toNum(min, 0)
    const hi = toNum(max, 100)
    const pct = hi > lo ? ((toNum(value, lo) - lo) / (hi - lo)) * 100 : 0
    const fill = Math.max(0, Math.min(100, pct))

    return (
      <input
        ref={ref}
        type="range"
        value={value}
        min={min}
        max={max}
        className={cn("slider flex-1", className)}
        style={{ "--slider-fill": `${fill}%`, ...style } as CSSProperties}
        {...props}
      />
    )
  },
)

Slider.displayName = "Slider"
