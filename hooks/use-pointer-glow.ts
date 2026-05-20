"use client"

import { useEffect, useRef } from "react"
import { FRAGMENT_SHADER, VERTEX_SHADER } from "./use-pointer-glow.shaders"

const GLOW_RADIUS_CSS_PX = 1000
const GLOW_ALPHA_SCALE = 0.8
const DESKTOP_QUERY = "(min-width: 1024px)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"
// Pointer position used when the cursor hasn't moved yet or has left the viewport.
// Far enough outside any plausible canvas to fall fully outside the falloff radius.
const OFFSCREEN_SENTINEL = -1e6

type GlowColor = { r: number; g: number; b: number; a: number }

function parseGlowColor(value: string): GlowColor | null {
  // Hex — Tailwind v4 reserializes @property <color> custom properties to #rrggbb[aa].
  const hex = value.match(/^#([0-9a-f]{3,8})$/i)
  if (hex) {
    let h = hex[1]
    if (h.length === 3 || h.length === 4) {
      h = h
        .split("")
        .map((c) => c + c)
        .join("")
    }
    if (h.length !== 6 && h.length !== 8) return null
    return {
      r: parseInt(h.slice(0, 2), 16) / 255,
      g: parseInt(h.slice(2, 4), 16) / 255,
      b: parseInt(h.slice(4, 6), 16) / 255,
      a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
    }
  }
  // rgb()/rgba() — both legacy "r, g, b, a" and modern "r g b / a".
  const rgb = value.match(/rgba?\(([^)]+)\)/)
  if (rgb) {
    const parts = rgb[1]
      .replace(/[,/]/g, " ")
      .trim()
      .split(/\s+/)
      .map((p) => parseFloat(p))
    if (parts.length < 3 || parts.slice(0, 3).some((n) => Number.isNaN(n))) return null
    return {
      r: parts[0] / 255,
      g: parts[1] / 255,
      b: parts[2] / 255,
      a: Number.isNaN(parts[3]) ? 1 : (parts[3] ?? 1),
    }
  }
  return null
}

function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("PointerGlow shader compile error:", gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function setupGlow(canvas: HTMLCanvasElement, motionMql: MediaQueryList): () => void {
  const gl = canvas.getContext("webgl2", {
    premultipliedAlpha: true,
    alpha: true,
    antialias: false,
  })
  if (!gl) return () => {}

  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
  const program = vs && fs ? gl.createProgram() : null
  // WebGL delete* APIs silently no-op on null, so a single bail handles every failure path.
  const bail = () => {
    gl.deleteShader(vs)
    gl.deleteShader(fs)
    gl.deleteProgram(program)
    return () => {}
  }
  if (!vs || !fs || !program) return bail()

  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("PointerGlow link error:", gl.getProgramInfoLog(program))
    return bail()
  }
  gl.useProgram(program)

  const uResolution = gl.getUniformLocation(program, "u_resolution")
  const uPointer = gl.getUniformLocation(program, "u_pointer")
  const uColor = gl.getUniformLocation(program, "u_color")
  const uAlpha = gl.getUniformLocation(program, "u_alpha")
  const uRadius = gl.getUniformLocation(program, "u_radius")

  let dpr = window.devicePixelRatio || 1
  let pointerX = OFFSCREEN_SENTINEL
  let pointerY = OFFSCREEN_SENTINEL
  let frame = 0

  const draw = () => {
    frame = 0
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.uniform2f(uPointer, pointerX * dpr, pointerY * dpr)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  const schedule = () => {
    if (frame === 0) frame = requestAnimationFrame(draw)
  }

  const resize = () => {
    dpr = window.devicePixelRatio || 1
    const w = window.innerWidth
    const h = window.innerHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uResolution, canvas.width, canvas.height)
    gl.uniform1f(uRadius, GLOW_RADIUS_CSS_PX * dpr)
    schedule()
  }

  const updateColor = () => {
    const cssVal = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-glow")
      .trim()
    const parsed = parseGlowColor(cssVal)
    if (!parsed) return
    gl.uniform3f(uColor, parsed.r, parsed.g, parsed.b)
    gl.uniform1f(uAlpha, Math.min(parsed.a * GLOW_ALPHA_SCALE, 1))
    schedule()
  }

  const moveOffscreen = () => {
    pointerX = OFFSCREEN_SENTINEL
    pointerY = OFFSCREEN_SENTINEL
    schedule()
  }

  const onPointerMove = (e: PointerEvent) => {
    if (motionMql.matches) return
    pointerX = e.clientX
    pointerY = e.clientY
    schedule()
  }

  const themeObserver = new MutationObserver(updateColor)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  })

  window.addEventListener("resize", resize)
  window.addEventListener("pointermove", onPointerMove, { passive: true })
  // mouseleave on <html> fires when the cursor exits the viewport — pointerleave doesn't bubble.
  document.documentElement.addEventListener("mouseleave", moveOffscreen)
  // If the user enables reduced-motion mid-session, freeze the glow off-screen.
  motionMql.addEventListener("change", moveOffscreen)

  resize()
  updateColor()

  return () => {
    window.removeEventListener("pointermove", onPointerMove)
    window.removeEventListener("resize", resize)
    document.documentElement.removeEventListener("mouseleave", moveOffscreen)
    motionMql.removeEventListener("change", moveOffscreen)
    themeObserver.disconnect()
    if (frame !== 0) cancelAnimationFrame(frame)
    gl.deleteProgram(program)
    gl.deleteShader(vs)
    gl.deleteShader(fs)
    // Force-release the context so hot-reload doesn't exhaust the per-page WebGL context budget.
    gl.getExtension("WEBGL_lose_context")?.loseContext()
  }
}

/**
 * Drives a full-viewport WebGL2 canvas that paints a pointer-following glow.
 * Reads `--color-glow` from the document root and reacts to `data-theme`
 * mutations, viewport resizes, and reduced-motion preference changes. The
 * WebGL context is only created above the `lg` breakpoint, so the hook is a
 * no-op on touch/mobile layouts.
 *
 * Attach the returned ref to a `<canvas>`; the hook owns its full lifecycle.
 */
export function usePointerGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const desktopMql = window.matchMedia(DESKTOP_QUERY)
    const motionMql = window.matchMedia(REDUCED_MOTION_QUERY)

    let dispose: (() => void) | null = null

    const sync = () => {
      dispose?.()
      dispose = desktopMql.matches ? setupGlow(canvas, motionMql) : null
    }

    sync()
    desktopMql.addEventListener("change", sync)

    return () => {
      desktopMql.removeEventListener("change", sync)
      dispose?.()
    }
  }, [])

  return canvasRef
}
