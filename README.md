# Swida Innovative — Homepage Prototype

A design prototype for the redesigned **Swida Innovative** homepage. Positions Swida
as a **tech-first European freight forwarder** with **Instacarrier** (instant online
freight pricing) as the wedge.

## View it

```bash
open homepage/index.html
```

Or serve over a local HTTP server (recommended so that browser caching and
relative asset paths behave the same as in production):

```bash
cd homepage && python3 -m http.server 8000
# → http://localhost:8000
```

## What's in here

```
homepage/
├─ index.html            # Single self-contained entry — all CSS/JS inlined for preview portability
├─ DESIGN.md             # Design system, critique, UX-copy rationale
├─ assets/
│  ├─ swida-logo.svg     # Official logo (white wordmark + pink mark)
│  ├─ europe-pixels.svg       # Dotted Europe map, light theme   (~465 KB, deduplicated)
│  └─ europe-pixels-dark.svg  # Dark-theme variant
├─ scripts/main.js       # Modular copy of the inline JS (for the Vue/Nuxt port)
└─ styles/
   ├─ tokens.css         # Design tokens (CSS custom properties)
   └─ main.css           # Layout + component styles
```

## Key features

- **Dark / light theme** with a sun-moon toggle in the nav. Dark is the default;
  preference is stored in `localStorage` and applied before paint so there is
  no flash on reload.
- **Instacarrier hero** with vehicle-class tabs (VAN / Lorry / Big Lorry / LKW),
  pickup/delivery fields connected by a dashed route line, and a primary
  CTA driven by the same brand pink (`#D81B5D`) as the official logo.
- **Live-routes map** — animated European freight lanes:
  - 100 hand-curated city pairs across 40 cities.
  - 4 concurrent animation slots; when one route finishes, a different unused
    route spawns in its place (anti-repeat invariant keeps the next ~94 picks
    distinct from anything currently animating or recently played).
  - Two floating "live shipment" cards rotate through the pool on independent
    cadences (~5 s each).
- **5-phase tech pipeline** showing the operating model (AI parsing → Exchange
  API → automation → real-time tracking → auto-invoicing).
- **Four touchpoint cards** with structured monospace viz blocks (JSON, log
  lines, event handlers, dashboard stats) that make the "tech-first" claim
  visible, not just stated.

## Tech direction

The prototype is intentionally **framework-agnostic** (single HTML file + a
modular CSS/JS source tree). The production target is **Nuxt (Vue 3) + Strapi**;
the mapping is documented in [`homepage/DESIGN.md`](homepage/DESIGN.md).

## What's *not* in the repo

The `Input Data/` and `Assets/` folders (private strategy memo, original 3.4 MB
source SVGs) are git-ignored. Their contents are still available locally; only
the cleaned-up homepage tree is published.

---

© 2026 Swida Innovative s.r.o. — Private repository, all rights reserved.
