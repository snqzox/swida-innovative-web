# Swida Homepage — Design Notes

Output of the `/design-system`, `/design-critique`, `/frontend-design`,
and `/ux-copy` skills, applied to the Swida homepage proposal.

The deliverable lives at [index.html](index.html) — open it in a browser
(or via any static server) to view the live design.

---

## 1. Strategic Brief (extracted from `Input Data/Web - Description.md`)

**Core wedge** — Instacarrier. The ability to price and book a European
freight shipment online, instantly, without a sales call. The current
swida.sk leads with "Positioning within 30 minutes" (a tracking feature,
not the wedge); the redesign must lead with Instacarrier.

**Positioning** — *the* tech-first European forwarder. Buzzwords from the
brief: **data, AI, 0 & 1, tech, system, structure, digital**. Memorable
because of *how* freight is moved, not just *that* it is moved.

**Proof points clients can actually feel today**
- Live GPS updates pushed every 2–4 h into TMS or as structured email.
- Instant binding prices via Instacarrier ("book a truck like an e-shop").
- Structured, fast responses to email RFQs.
- Auto-invoicing — incl. EDI for enterprise accounts.
- Client zone with stats + loyalty.
- Open to any API / data-flow integration the client needs.

**Internal 5-phase operating model** that should be made visible:
acquisition → request processing → capacity sourcing → monitoring →
invoicing (carrier invoices auto-processed at ~80% straight-through).

---

## 2. Critique of the Current Site (`swida.sk`)

| # | Issue | Why it hurts | Fix in the redesign |
|---|-------|--------------|---------------------|
| 1 | Hero says **"Positioning within 30 minutes"** | Tracking is a secondary benefit; the *wedge* is Instacarrier. | Hero leads with **"Freight, priced in 60 seconds"** + a live-feel widget. |
| 2 | Instacarrier hidden under "Express transport" | Buries the differentiator. | Instacarrier widget visible above the fold; product owns its own ID anchor. |
| 3 | Carousel hero | Cuts conversion (decision fatigue, a11y issues, hidden slides). | Static, single, focused hero. |
| 4 | Heavy stock-photo / clock-face imagery | Looks like every other forwarder. | Code/data/grid aesthetic — terminal blocks, structured JSON, mono fonts. |
| 5 | Tech claims with no tech proof | "We're modern" doesn't land without evidence. | Pipeline section + 4 touchpoint cards each show a real, structured artifact. |
| 6 | "Check availability" rail bolted onto right edge | Visual noise; reduces hero focus. | CTA folded into the hero + Book-this-truck button inside the widget. |
| 7 | Floppy doodle mascot on About | Off-brand for a tech forwarder. | Removed for the homepage. Save mascot for careers/team pages. |

---

## 3. Design System

### 3.1 Color tokens
Defined in [styles/tokens.css](styles/tokens.css).

- **Brand magenta** (carried from current swida.sk, ramped 50→900). Primary `#EC1067`.
  Saturation kept high to feel digital, not industrial.
- **Surface ramp** — near-black with a cool tint (`#07070C` → `#1B1B2D`)
  so brand magenta pops without competing with photography.
- **Accent electric blue** (`#5B8DEF`) for tech / data callouts —
  used sparingly (every other phase tag, telemetry card).
- **Semantic** — success / warning / danger, mostly used inside the
  widget pill and viz blocks.

### 3.2 Typography
- **Display** — Space Grotesk 500/600/700. Geometric, slightly mechanical.
- **Body** — Inter 400/500/600. Workhorse.
- **Mono** — JetBrains Mono. Used for eyebrows, micro-labels, code-style
  visualizations, and stat units. Mono is doing real semantic work here
  — it signals "this is data" without saying it.

Scale is fluid via `clamp()`; H1 ranges 2.5rem → 5rem.

### 3.3 Spacing
8pt base scale with half-steps (`--s-1` = 4px … `--s-14` = 160px).
Section padding fluid: `clamp(80px, 12vw, 160px)`.

### 3.4 Components
| Component | File / class | Notes |
|---|---|---|
| Button | `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--lg` | Pill shape, magenta glow on primary. |
| Eyebrow | `.eyebrow` | Mono caps + pulsing dot. |
| Quote widget | `.quote` | The hero-side prop. Gradient border via masked padding-trick. |
| Feature card | `.feature` | Icon tile + heading + body. Two color modes (brand / accent). |
| Phase row | `.phase` | Numeric prefix, body, status tag. Borders form the timeline. |
| Touch card | `.touch__card` | Heading + body + monospace viz block (synthetic data). |
| Stats bar | `.stats` | Four metric tiles, gradient text on the value. |
| Final CTA | `.cta` | Twin radial glows, centered headline. |

### 3.5 Motion
- `--t-fast: 140ms` for hover state, `--t-base: 240ms` for soft transitions.
- `--ease-out` for everything; reserve `--ease-spring` for delightful
  micro-affordances (not currently used — kept available).
- `.reveal` → IntersectionObserver fade-up. Disabled when
  `prefers-reduced-motion` is set.

### 3.6 Accessibility decisions
- Skip-to-content link.
- All buttons / links keyboard-focusable with visible focus ring
  (magenta, 2px, 2px offset).
- Semantic landmarks (`header`, `nav`, `main`, `footer`, named sections).
- Decorative SVGs `aria-hidden`; meaningful icons paired with text.
- Live region on the widget pill (`aria-live="polite"`).
- The cycling Instacarrier demo pauses when `prefers-reduced-motion` is set.
- Color contrast — body text ≥ 4.5:1 on `--c-bg` (verified
  `--c-fg-mute` `#B4B4C2` on `#07070C` ≈ 11:1).

---

## 4. UX Copy — Decisions Per Section

Voice: **confident, plain, specific.** Second person. Numbers where they exist.
Avoid the word "innovative" (the company name already says it).

### Hero
- **Headline:** *"Freight, priced in 60 seconds."* — replaces the current
  "Positioning within 30 minutes." Same numerical drama, but pointed at
  the wedge (pricing) instead of a side feature (tracking).
- **Sub:** Names the three friction points it removes — calls, waiting on
  sales, the long quote loop — and ends with the concrete delivery
  promise ("within hours").
- **Primary CTA:** *"Get an instant price"* — verb-led, value-led.
- **Secondary CTA:** *"See how it works"* — for skeptics who need proof
  before they'll touch the form.
- **Meta strip:** three load-bearing numbers (volume, response, coverage).

### Trust bar
*"Moving freight for 600+ European brands"* — concrete number, no
"trusted by." Logo names are stand-ins; replace with cleared logos.

### Technology section
Headline reframes the entire category claim:
*"A forwarder built like a tech company."* — short, sharp, memorable,
and exactly the brand goal from the strategy doc.

### Pipeline section
*"The boring parts of freight, handled by software."* — directly
contrasts with the rest-of-market ("most forwarders run on email
threads and spreadsheets"). Phase titles are intentionally banal verbs
("Request comes in / Capacity is sourced / Truck is dispatched / …")
because the *tag* on the right is doing the differentiation work.

### Touchpoints section
*"Four touchpoints where Swida does not feel like a forwarder."* —
names the moment of magic. Each card has a JSON / log / event-handler
viz so the "tech-first" claim has a visual artifact behind it.

### Final CTA
*"Price your next shipment before this page loads."* — playful,
self-referential, and reinforces the speed claim.

---

## 5. Content TODOs Before Production

These are placeholders to be replaced with real assets:

- [ ] Logo wordmark — current `assets/logo.svg` is a stand-in mark + dot.
      Use the production wordmark when available.
- [ ] Trust-bar logos — replace text-stand-ins (`Volkswagen Group`, etc.)
      with cleared client logos in single-color form.
- [ ] Headline numbers (`82 k`, `98.4%`, `12 yrs`) — sanity-check with ops
      analytics before publishing.
- [ ] Phone number in footer — currently a placeholder `+421 00 000 0000`.
- [ ] EN copy translation pass for SK / DE / IT / FR / CZ.

---

## 6. Implementation Path to Production Stack

The strategy doc lists the production target as **Vue.js (Nuxt)** with a
**Strapi** headless CMS backend. The current deliverable is framework-
agnostic HTML + CSS + minimal vanilla JS so it ports cleanly:

| Concept here | Maps to in Nuxt + Strapi |
|---|---|
| `styles/tokens.css` | A `tokens.css` imported once in `nuxt.config` / `app.vue`. |
| `styles/main.css` | Split per component into `<style scoped>` blocks on Vue components. |
| `index.html` sections | Each `<section>` → a Vue component (Hero, QuoteWidget, FeatureGrid, Pipeline, Touchpoints, Stats, FinalCta). |
| Hard-coded copy | Move to Strapi single-types per section so marketing can edit without a deploy. |
| `scripts/main.js` reveal & demo cycle | Vue `IntersectionObserver` composable + `useInterval` for the demo widget. |
| Instacarrier widget mock | Wire to the real `POST /instacarrier/quotes` once live; until then, this static demo is the storyboard. |

---

## 7. File Map

```
homepage/
├─ index.html             # Entry — open in a browser
├─ DESIGN.md              # This document
├─ assets/
│  └─ logo.svg            # Stand-in mark
├─ scripts/
│  └─ main.js             # Reveal-on-scroll + cycling widget demo
└─ styles/
   ├─ tokens.css          # Design tokens (CSS custom properties)
   └─ main.css            # Layout + component styles
```
