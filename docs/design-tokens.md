# Design Tokens

Single source of truth for colors, radii, fonts and motion. Defined in `app/globals.css` inside the Tailwind v4 `@theme` block, with `[data-theme="light"]` overriding the color subset.

Every token is exposed in two forms:

- **Tailwind utility** — e.g. `bg-surface`, `text-foreground-muted`, `border-accent`
- **CSS custom property** — e.g. `var(--color-surface)`, `var(--radius-md)`

Prefer the Tailwind utility in components. Use the raw CSS variable for inline styles, generated content, or third-party CSS.

## Theme switching

The active theme is set via the `data-theme` attribute on `<html>`. Switching themes only rewrites the variables; no component code reacts to a "mode" prop.

```tsx
document.documentElement.setAttribute("data-theme", "light")
```

A no-flash bootstrap script in `app/layout.tsx` resolves the theme from `localStorage` or `prefers-color-scheme` before first paint.

---

## Colors

### Surfaces — page background up to interactive controls

| Token                      | Tailwind              | Dark      | Light     | Used for                             |
| -------------------------- | --------------------- | --------- | --------- | ------------------------------------ |
| `--color-surface`          | `bg-surface`          | `#09090b` | `#f5f5f7` | Page background                      |
| `--color-surface-raised`   | `bg-surface-raised`   | `#111113` | `#ffffff` | Cards, topbar, popovers              |
| `--color-surface-elevated` | `bg-surface-elevated` | `#1a1a1f` | `#ebebef` | Buttons, inputs, segmented control   |
| `--color-surface-hover`    | `bg-surface-hover`    | `#222228` | `#e2e2e8` | Hover state on default surfaces      |
| `--color-surface-active`   | `bg-surface-active`   | `#2a2a32` | `#d8d8e0` | Pressed/active surface, slider track |

### Foreground — text & icons

| Token                       | Tailwind                 | Dark      | Light     | Used for                                        |
| --------------------------- | ------------------------ | --------- | --------- | ----------------------------------------------- |
| `--color-foreground`        | `text-foreground`        | `#ececf0` | `#111118` | Primary text, headings                          |
| `--color-foreground-muted`  | `text-foreground-muted`  | `#8e8e9a` | `#5a5a6a` | Body copy, secondary labels, default body color |
| `--color-foreground-subtle` | `text-foreground-subtle` | `#55555f` | `#9898a8` | Tertiary text, captions, dimmed states          |

### Borders

| Token                   | Tailwind               | Dark      | Light     | Used for               |
| ----------------------- | ---------------------- | --------- | --------- | ---------------------- |
| `--color-border`        | `border-border`        | `#222228` | `#dcdce4` | Default 1px borders    |
| `--color-border-strong` | `border-border-strong` | `#333340` | `#c8c8d4` | Hover/emphasis borders |

### Accent — brand & interaction

| Token                   | Tailwind                                      | Dark                    | Light                  | Used for                                          |
| ----------------------- | --------------------------------------------- | ----------------------- | ---------------------- | ------------------------------------------------- |
| `--color-accent`        | `bg-accent` / `border-accent` / `text-accent` | `#6366f1`               | `#4f52e0`              | Solid accent fill, focus ring, active borders     |
| `--color-accent-hover`  | `bg-accent-hover`                             | `#818cf8`               | `#6366f1`              | Hover on solid accent                             |
| `--color-accent-soft`   | `bg-accent-soft`                              | `rgba(99,102,241,0.15)` | `rgba(79,82,224,0.12)` | Tinted backgrounds (active item, pill, selection) |
| `--color-accent-strong` | `text-accent-strong`                          | `#a5b4fc`               | `#4f52e0`              | Text on `bg-accent-soft`, accent-tinted text      |

### Status

| Token             | Tailwind                      | Dark      | Light     | Used for                         |
| ----------------- | ----------------------------- | --------- | --------- | -------------------------------- |
| `--color-success` | `bg-success` / `text-success` | `#34d399` | `#16a34a` | Confirmations, visibility-on dot |
| `--color-danger`  | `bg-danger` / `text-danger`   | `#ef4444` | `#dc2626` | Errors, destructive actions      |

---

## Radii

| Token         | Tailwind     | Value  | Used for                         |
| ------------- | ------------ | ------ | -------------------------------- |
| `--radius-sm` | `rounded-sm` | `4px`  | Buttons, inputs, small controls  |
| `--radius-md` | `rounded-md` | `6px`  | Cards, segmented control wrapper |
| `--radius-lg` | `rounded-lg` | `10px` | Larger surfaces, modals          |

## Typography

| Token         | Tailwind    | Value                                                 |
| ------------- | ----------- | ----------------------------------------------------- |
| `--font-sans` | `font-sans` | Inter (via `next/font`) → system fallback             |
| `--font-mono` | `font-mono` | `ui-monospace, "SF Mono", "Cascadia Code", monospace` |

Body sets `font-feature-settings: "cv11", "ss01", "ss03"` — Inter's single-storey `a`, open digits, and curved-leg `R`.

## Motion

| Token             | Tailwind        | Value                            | Used for                       |
| ----------------- | --------------- | -------------------------------- | ------------------------------ |
| `--ease-out-quad` | `ease-out-quad` | `cubic-bezier(0.23, 1, 0.32, 1)` | Standard 120–200ms transitions |

A shorthand utility wraps the most common animated property set:

```css
@utility transition-control {
  transition-property: color, background-color, border-color;
  transition-duration: 120ms;
  transition-timing-function: var(--ease-out-quad);
}
```

Use `transition-control` on buttons, inputs, and other small interactive surfaces.

---

## Adding a new token

1. Add the CSS variable under `@theme` in `app/globals.css`. Use a `--color-*`, `--radius-*`, `--font-*`, or `--ease-*` namespace so Tailwind generates a utility automatically.
2. If it's a color, add the corresponding `[data-theme="light"]` override directly below. If light/dark share the value, skip the override.
3. Add a row to this document under the matching section.
