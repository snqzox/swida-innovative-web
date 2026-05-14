# Swida Homepage — Client Feedback Checklist

Working document. Tick items as they ship. New feedback rounds get appended as new sections at the bottom.

- 🟢 Live preview: <https://snqzox.github.io/swida-innovative-web/>
- 🎨 Hero variants for review (V1–V8): <https://snqzox.github.io/swida-innovative-web/hero-variants.html>
- 🎨 Figma (v2): <https://www.figma.com/design/QqEp77tv7RAIojH7yg9D5X/Swida---Web?node-id=103-700>
- 📄 Original Klára Figma (v0): <https://www.figma.com/design/H23Hukc2xjOBPzKrPlKZQZ/Webicek---SWIDA?node-id=0-1>
- 💬 Client feedback doc: [Google Doc](https://docs.google.com/document/d/1McIOQD_7Y8ebHKU703_O8JkZY3fJb9-2aV65n_LJnrI/)

Legend: `[ ]` pending · `[~]` in progress · `[x]` done · `[?]` blocked / needs decision

---

## Round 2 — feedback 14.05.2026

### 🔴 Removals (low risk, do first)

- [x] **Clients trust strip** — done. Volkswagen / Schaeffler / Continental / Faurecia / ZF / Magna / Mahle row removed.
- [x] **EY Entrepreneur Of The Year** award card — done. Recognition section now shows only Forbes, centered via `.recognition__grid--solo` modifier (capped width 560 px).
- [x] **AVG quote response `< 30 min`** info-card stat — done. Stats grid switched from 4 → 3 columns.

### 🟡 Small edits (numbers, labels, copy)

- [x] Info card: `82 k Shipments completed` → `40 k+ Transports per year`
- [x] Info card: `12 yrs` → `10 yrs`
- [x] Services tab content (Express Transports panel): stat `1 minute · Price quote` → `24/7 · Pricing`
- [x] InstaCarrier hero form: **email input** added below "Delivery location" with an envelope icon. New CSS modifier `.lane__field--detached` keeps the dashed pickup→delivery connector from extending through the email row.
- [x] InstaCarrier hero form: **"Or connect Instacarrier via API — quotes, booking, status callbacks, EDI invoicing"** affordance added as a soft pink/blue gradient pill (`.hero__api`) below the form, above the trust line.
- [x] Truck banner reframed (option 🅱️): headline now *"24/7 dispatch. 35 countries. 25 000 trucks."* with 3 inline stat tiles below the copy. New CSS class `.truck-banner__stats`.

### 🔵 Restructure — Touchpoints section (biggest content change) — DONE

Kept the existing grid styling; **expanded 4 → 6 cards** that follow the `How we work` pipeline 1:1 and absorb the 4 best `Why Swida` tech-first angles (per user's compromise direction).

- [x] Card 1 — **Request** — AI parses email or Instacarrier form into a structured shipment.
- [x] Card 2 — **Pricing** — Market-aware binding quote in under a minute.
- [x] Card 3 — **Carrier sourcing** — One post to every major load exchange, locked in minutes.
- [x] Card 4 — **Monitoring** — GPS pulled on schedule, pushed to client's TMS or inbox.
- [x] Card 5 — **Invoicing** — Auto-issued on delivery, email/PDF/EDI; carrier invoices auto-matched at 80%.
- [x] Card 6 — **Reporting / Dashboard** — Lane analytics, on-time stats, loyalty.
- [x] Headline updated: "Four touchpoints …" → **"Six steps where Swida does not feel like a forwarder."** Lead paragraph added.

Each card carries a monospace `.touch__viz` artifact (JSON, log, event handler, dashboard snapshot) so the tech-first claim has a concrete visual.

### 🟢 New section to add — DONE

- [x] **People section** — added as `<section class="section section--soft" id="people">` between Truck banner and Stats. 4 leadership cards in a responsive grid (1col / 2col / 4col). Each card is portrait (gradient circle + initials, no real photos yet) + name + role + 1-line bio. Placeholder names:
  - **Andrej Novák** — CEO & Founder
  - **Lucia Horváthová** — Head of Operations
  - **Marek Tóth** — Head of Engineering
  - **Jana Kováčová** — Head of Growth

  Client will swap names + roles + bios with the real team when ready. Real portraits can be inlined as base64 the same way the EY / Forbes / Google / Express illustrations were inlined for preview compatibility.

### ❓ Strategic decisions — RESOLVED

User chose the **compromise**: one tighter section instead of three. Outcome:

- [x] **`Why Swida` technology features grid** — REMOVED. The 4 best positioning angles (instant pricing, API/EDI, AI in the pipeline, real-time visibility) are folded into the 6 Touchpoint cards.
- [x] **`How we operate` 5-phase dark pipeline** — REMOVED. Content moved 1:1 into Touchpoints.
- [x] **Overall tech-positioning** — Instacarrier widget + the new 6-card Touchpoints carry the tech-first claim. The dark pipeline section is gone; the page now flows: hero → Recognition → What we do → **Touchpoints** → Truck banner → Stats → Final CTA → Footer.

### ✅ Approved as-is — don't touch

- Footer / "Stay connected" block — *"pecka"*
- Final CTA *"Price your next shipment before this page loads."*
- `Free transport price quote` pink CTA bar above tabs — perfect, stays
- Touchpoints **visual style** (only content swaps in Round 2)

### 📝 Process notes

- Texts are placeholder — client will write finals internally; some current claims are *"dost adresne"* and they'll soften them.
- For the People section, no new Figma reference yet — use the original Klára Figma as visual base.

---

## Execution log

1. ✅ Removals + label edits (Round 2 commit `575edc9`).
2. ✅ InstaCarrier form additions (email input + `.hero__api` affordance) — same commit.
3. ✅ Strategic call resolved — drop Why Swida + How we operate, expand Touchpoints, reframe Truck banner.
4. ✅ Touchpoints expansion (4 → 6 cards) + Truck banner reframe — current commit.
5. ⏳ **People section** — next up. Use original Klára Figma as visual base.
6. ⏳ Final pass + commit + share new preview URL.

---

## Round history

- **Round 0** (original Klára v0) — base design
- **Round 1** (after feedback 24.04.2026) — current `main`, what's live now
- **Round 2** (this checklist, feedback 14.05.2026) — pending
