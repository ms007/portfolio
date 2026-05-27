type ColonProps = {
  size: number
  color: string
  alpha: number
  on: boolean
}

export function Colon({ size, color, alpha, on }: ColonProps) {
  const dot = size * 0.14
  return (
    <span
      aria-hidden="true"
      className="flex flex-col items-center justify-center"
      style={{ height: size, width: size * 0.4, gap: size * 0.18 }}
    >
      {[0, 1].map((i) => (
        <span
          key={i}
          style={{
            width: dot,
            height: dot,
            borderRadius: "50%",
            background: color,
            opacity: on ? 1 : alpha,
            transition: "opacity 120ms linear",
          }}
        />
      ))}
    </span>
  )
}
