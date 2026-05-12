# Swida Homepage — Design Notes

Output of the `/design-system`, `/design-critique`, `/frontend-design`,
and `/ux-copy` skills, plus the dark/light theming + interactive map work.

The deliverable lives at [`index.html`](index.html) — open it in a browser
(or via any static server) to view the live design.

---

## 1. Strategic Brief

Source: `Input Data/Web - Description.md` (private, git-ignored).

- **Wedge** — Instacarrier: instant online freight pricing and booking, no
  sales call. The current `swida.sk` site buries it under `/express-transport`;
  the new homepage leads with it.
- **Positioning** — *the* tech-first European forwarder. Visual buzzwords from
  the brief: **data, AI, 0 & 1, tech, system, structure, digital**.
- **Proof points to surface**: GPS updates every 2–4 h, instant binding prices,
  fast structured RFQ replies, automated invoicing (incl. EDI), client zone
  with stats + loyalty, open API integrations.
- **5-phase operating model** to make visible: acquisition → request processing
  → capacity sourcing → monitoring → invoicing.

---

## 2. Critique of the Current Site (`swida.sk`)

| # | Issue | Fix in the redesign |
|---|-------|---------------------|
| 1 | Hero says *"Positioning within 30 minutes"* (tracking, not the wedge) | Hero leads with **"A freight quote in 60 seconds. Booked in two clicks."** plus the Instacarrier form and an interactive map of live routes. |
| 2 | Instacarrier hidden under "Express transport" | The hero **is** Instacarrier — vehicle tabs, pickup/delivery fields, primary CTA. |
| 3 | Carousel hero | Static, focused hero. The motion is now in the map (always present, never blocks scanning). |
| 4 | Stock-photo / clock imagery | Code/data/grid aesthetic — dotted Europe with animated freight lanes, monospace JSON / log blocks in the touchpoint cards. |
| 5 | Tech claims with no proof | 5-phase pipeline + 4 touchpoint cards, each with a real structured artifact (JSON, log lines, event handler, dashboard snapshot). |
| 6 | "Check availability" rail bolted to right edge | CTA folded into the hero; Instacarrier widget IS the hero. |
| 7 | Doodle mascot on About | Removed from homepage; reserved for careers/team pages. |

---

## 3. Design System

### 3.1 Theme architecture

Two themes share one token surface. Theme-independent tokens (brand pink,
type scale, spacing, radii, motion) sit at `:root`. Surfaces, foreground, and
line tokens are re-bucketed into `:root[data-theme="dark"]` and
`:root[data-theme="light"]` blocks.

```css
:root { /* brand, type, space, radii, motion */ }
:root[data-theme="dark"]  { --c-bg:#07070C; --c-fg:#F4F4F7; … }
:root[data-theme="light"] { --c-bg:#FFFFFF; --c-fg:#0A0A12; … }
```

- **Dark is the default.** An inline early-`<script>` in `<head>` reads
  `localStorage["swida-theme"]`, falls back to
  `prefers-color-scheme: light`, then defaults to `dark`. It sets
  `data-theme` *before paint* — no FOUC.
- The **sun/moon toggle** lives in the nav between `.nav__lang` and
  `.nav__sign`. Click flips `data-theme` and persists to `localStorage`.

Tokens that stay constant across themes:
- `--c-brand-*` ramp (anchored on the official logo's `#D81B5D`).
- `--c-accent` (electric blue), `--c-success`.
- Type, spacing, radii, motion.

Tokens that swap per theme: page surfaces (`--c-bg`, `--c-bg-soft`,
`--c-bg-tint`, `--c-bg-section`), lines (`--c-line`, `--c-line-soft`,
`--c-line-strong`), foreground (`--c-fg`, `--c-fg-mute`, `--c-fg-dim`,
`--c-fg-faint`), shadows, plus a small set of helper tokens for the vehicle
tabs, lane fields, feature-card gradients, code-block backgrounds, and the
trust strip.

### 3.2 Typography

- **Display** — Space Grotesk 500/600/700.
- **Body** — Inter 400/500/600.
- **Mono** — JetBrains Mono (eyebrows, micro-labels, code visualizations).

Scale is fluid via `clamp()`; H1 ranges 2.5rem → 4.5rem.

### 3.3 Components (one row per primitive)

| Component | Class | Notes |
|---|---|---|
| Button | `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--lg/xl/block` | Pill shape, brand-pink glow on primary. |
| Eyebrow | `.eyebrow`, `.eyebrow--mute` | Mono caps + dot. Pink by default. |
| Nav | `.nav` (always dark on both themes) | Sticky, blurred, dark surface anchors brand. |
| Theme toggle | `.nav__icon-btn` with `.theme-icon--sun` / `--moon` | Visibility controlled by `[data-theme]`. |
| Vehicle tabs | `.vehicle-tabs` / `.vehicle-tab` | Pill-grouped, active state turns pink. |
| Lane fields | `.lane` / `.lane__field` (square + circle dots + dashed line) | Mirrors the route visual in the form. |
| Map | `.map` + `.map__svg` + `.map__overlay` | Dotted Europe + JS-controlled SVG overlay. |
| Route card | `.route-card` | Floating live-shipment summary over the map. |
| Feature card | `.feature` + `.feature__viz--brand/blue/dark` | Tinted illustration header above text. |
| Pipeline phase | `.phase` | Number + body + status tag. |
| Touch card | `.touch__card` + `.touch__viz` | Body + dark monospace artifact block. |
| Stats | `.stats` / `.stat__value` (gradient text) | Four pink-accented numbers. |
| Final CTA | `.cta` | Pink panel with dotted backdrop. |
| Footer | `.footer` (always dark) | Anchors the page. |

### 3.4 Motion

- `--t-fast: 140ms`, `--t-base: 240ms`, `--t-slow: 520ms`. `--ease-out`
  everywhere.
- `.reveal` → IntersectionObserver fade-up.
- All animations honor `prefers-reduced-motion` — the route controller
  switches to static-draw mode under reduced motion.

### 3.5 Accessibility

- Skip link, semantic landmarks (`header`/`nav`/`main`/`footer`), keyboard
  focus ring (brand pink, 2 px, 2 px offset).
- Vehicle tabs are `role="tablist"`/`role="tab"` with `aria-selected`.
- Theme toggle has `aria-pressed` and a per-theme `aria-label`.
- Decorative SVGs `aria-hidden`; the map container has a descriptive
  `aria-label`.
- Body text contrast ≥ 4.5:1 against page surface in both themes.

---

## 4. Interactive Europe Map

### 4.1 The base map

Original asset: `Assets/pixels.svg`, 3.4 MB, 13,172 `<path>` elements.
The Launch preview sandbox refused to load it; it also bloated the page weight.

**Optimization** (built-time, via Node one-liner): each path was a tiny filled
circle of radius 2.01 with the same shape, only the centre point differed.
We replaced all 13,171 paths with `<use href="#d">` references to a single
`<defs><circle id="d" r="2.01"/></defs>`. Two output files:

| File | Theme | Fill | Size |
|---|---|---|---|
| `homepage/assets/europe-pixels.svg`      | light | `#D6D8E1` | 465 KB |
| `homepage/assets/europe-pixels-dark.svg` | dark  | `rgba(255,255,255,0.10)` | 465 KB |

Both are referenced as sibling `<img>` elements; CSS shows one based on
`[data-theme]`. The container also paints a CSS dot-grid fallback so the
area still reads as a map if neither asset loads.

### 4.2 Route animation controller (100 routes, no repeat)

- **Pool**: 40 European cities with approximate `(x, y)` in the 1215 × 967
  viewBox + 100 hand-curated city pairs.
- Route record shape:
  ```js
  { id, from: {city, cc, x, y}, to: {city, cc, x, y},
    km, kind, price, status }
  ```
- **4 concurrent slots** on the map. Each slot's lifecycle:
  1. Pick a route from the pool **not currently animating** in any slot
     **and not in the recent-N history** (history size ≈ pool − slots − 2 = 94).
  2. Mount an SVG `<g>` (curved path, origin + destination circles, truck
     dot with `<animateMotion>`, pulse ring).
  3. Dash-draw the path in 1.2 s (CSS `stroke-dashoffset` transition).
  4. Truck traces the path over 4.4 s. Hold 0.8 s. Fade out 0.6 s.
  5. Remove the group, free the route id, schedule next.
- **Two floating route cards** independently cycle through the same pool with
  their own ~`recent` history queues, on ~5 s cadence, staggered by 2.5 s.
- **Bezier path generator**: a 10-line pure function lifts two control points
  perpendicular to the chord by `min(220, len × 0.35)` to give each route a
  pleasant arc.

### 4.3 Reduced-motion mode

If `prefers-reduced-motion: reduce`, the controller draws 3 routes once
(no truck animation), and the floating cards fill in once and stop cycling.

---

## 5. UX Copy — Decisions per Section

Voice: confident, plain, specific. Second person. Numbers where they exist.

| Section | Headline / lead copy |
|---|---|
| **Hero** | *A freight quote in **60 seconds**. Booked in **two clicks**.* Primary CTA: *Get your quote.* Trust line: *Quote in 60 seconds · No signup · Book online.* Email fallback for enterprise volume. |
| **Trust strip** | *Moving freight for 600+ European brands.* |
| **Technology** | *A forwarder built like a tech company.* Six tiles: instant prices · 2–4 h tracking · API & EDI · AI quoting · auto-invoicing · client zone. |
| **Pipeline** | *The boring parts of freight, handled by software.* Five phases with neutral verbs ("Request comes in", "Capacity is sourced", etc.) — the *tag* on the right does the differentiation. |
| **Touchpoints** | *Four touchpoints where Swida does not feel like a forwarder.* Each card has a JSON / log / event-handler / dashboard artifact. |
| **Stats** | 12 yrs · 82 k shipments · 98.4 % OTD · &lt; 30 min response. |
| **CTA** | *Price your next shipment before this page loads.* |

---

## 6. Content TODOs Before Production

- [ ] Replace stand-in trust-bar logo names with cleared client logos.
- [ ] Sanity-check headline numbers (12 yrs, 82 k, 98.4 %) with ops analytics.
- [ ] Replace placeholder phone number `+421 00 000 0000`.
- [ ] EN copy translation pass for SK / DE / IT / FR / CZ.
- [ ] Wire the Instacarrier form to the real quote API.
- [ ] Tune route-pool prices/distances against actual freight-rate data.

---

## 7. Implementation Path to Production Stack

The production target is **Nuxt 3 (Vue 3) + Strapi**. The current self-
contained `index.html` ports cleanly:

| Concept here | Maps to in Nuxt + Strapi |
|---|---|
| `styles/tokens.css` | Imported once in `app.vue` (CSS custom properties survive SSR). |
| `styles/main.css` | Split per component into `<style scoped>` blocks. |
| `index.html` sections | Each `<section>` → a Vue component (`Nav`, `Hero`, `MapWidget`, `TrustStrip`, `TechnologyGrid`, `Pipeline`, `Touchpoints`, `Stats`, `FinalCta`, `SiteFooter`). |
| Hard-coded copy | Move to Strapi single-types per section so marketing can edit without a deploy. |
| Theme toggle script | A small composable `useTheme()` reading/writing `localStorage` + reactive `data-theme`. |
| Route pool + controller | `composables/useRouteMap.ts` returning the SVG nodes / mounting them on the overlay. |
| Instacarrier widget mock | Wire to `POST /instacarrier/quotes` once live; the controller is otherwise the same. |

---

## 8. File Map

```
homepage/
├─ index.html             # Entry — open in a browser (all CSS/JS inlined for portability)
├─ DESIGN.md              # This document
├─ assets/
│  ├─ swida-logo.svg      # Official logo
│  ├─ europe-pixels.svg       # Dotted Europe (light)
│  └─ europe-pixels-dark.svg  # Dotted Europe (dark)
├─ scripts/
│  └─ main.js             # Modular copy of the inline JS (for the Vue/Nuxt port)
└─ styles/
   ├─ tokens.css          # Theme tokens (CSS custom properties)
   └─ main.css            # Layout + component styles
```
