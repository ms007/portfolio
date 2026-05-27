// The package ships types at dist/main.d.ts but doesn't expose a "types"
// condition in its package.json "exports", so `moduleResolution: bundler`
// can't find them. This shim mirrors the shipped declaration.
declare module "react-retro-digit" {
  import type { JSX } from "react"

  export interface RetroDigitProps {
    number: string | number
    size?: string | number
    color?: string
    inactiveColor?: string
    alphaRatio?: string | number
    className?: string
  }

  export function RetroDigit(props: RetroDigitProps): JSX.Element
}
