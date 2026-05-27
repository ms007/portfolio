"use client"

import { useEffect, useState } from "react"
import { RetroDigit } from "react-retro-digit"
import { Slider } from "@/components/ui/slider"
import { Swatch } from "@/components/ui/swatch"
import { FitScale } from "./fit-scale"
import { Colon } from "./colon"
import { Control } from "./control"

const SWATCHES = [
  { name: "Amber", value: "#ffb000" },
  { name: "Indigo", value: "#818cf8" },
  { name: "Green", value: "#50c750" },
  { name: "Magenta", value: "#ff5d9e" },
  { name: "Ice", value: "#5ad1ff" },
] as const

function timeString(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

export function Demo() {
  const [time, setTime] = useState(() => timeString(new Date()))
  const [colonOn, setColonOn] = useState(true)
  const [color, setColor] = useState<string>("#50c750")
  const [size, setSize] = useState(60)
  const [alpha, setAlpha] = useState(0.12)

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(timeString(d))
      setColonOn(d.getMilliseconds() < 500)
    }
    tick()
    const id = setInterval(tick, 100)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <div className="relative flex min-h-[50] items-center justify-center overflow-hidden rounded-lg border border-[#1c1c24] bg-[#08080c] px-5 py-12 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),inset_0_0_90px_rgba(0,0,0,0.55)] md:px-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <span className="absolute top-3 left-4 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.22em] text-white/30 uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: color }} />
          live
        </span>

        <FitScale>
          {[...time].map((char, i) =>
            char === ":" ? (
              <Colon key={i} size={size} color={color} alpha={alpha} on={colonOn} />
            ) : (
              <span key={i} style={{ lineHeight: 0 }}>
                <RetroDigit number={char} size={size} color={color} alphaRatio={alpha} />
              </span>
            ),
          )}
        </FitScale>
      </div>

      <div className="border-border bg-surface-raised mt-3 grid grid-cols-1 gap-5 rounded-md border p-5 sm:grid-cols-[auto_1fr_1fr] sm:items-center sm:gap-x-8">
        <Control label="color">
          {SWATCHES.map((s) => (
            <Swatch
              key={s.value}
              color={s.value}
              isActive={color === s.value}
              onClick={() => setColor(s.value)}
              aria-label={s.name}
            />
          ))}
        </Control>

        <Control label={`size · ${size}px`}>
          <Slider
            min={40}
            max={132}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            aria-label="Grösse"
          />
        </Control>

        <Control label={`alphaRatio · ${alpha.toFixed(2)}`}>
          <Slider
            min={0}
            max={0.45}
            step={0.01}
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
            aria-label="Deckkraft inaktiver Segmente"
          />
        </Control>
      </div>
    </div>
  )
}
