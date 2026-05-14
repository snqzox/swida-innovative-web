# Swida Homepage — Client Feedback Checklist

Working document. Tick items as they ship. New feedback rounds get appended as new sections at the bottom.

- 🟢 Live preview: <https://snqzox.github.io/swida-innovative-web/>
- 🎨 Figma (v2): <https://www.figma.com/design/QqEp77tv7RAIojH7yg9D5X/Swida---Web?node-id=103-700>
- 📄 Original Klára Figma (v0): <https://www.figma.com/design/H23Hukc2xjOBPzKrPlKZQZ/Webicek---SWIDA?node-id=0-1>
- 💬 Client feedback doc: [Google Doc](https://docs.google.com/document/d/1McIOQD_7Y8ebHKU703_O8JkZY3fJb9-2aV65n_LJnrI/)

Legend: `[ ]` pending · `[~]` in progress · `[x]` done · `[?]` blocked / needs decision

---

## Round 2 — feedback 14.05.2026

### 🔴 Removals (low risk, do first)

- [ ] **Clients trust strip** — remove the *"Moving freight for 600+ European brands"* row with Volkswagen Group / Schaeffler / Continental / Faurecia / ZF / Magna / Mahle. Client wants it gone.
- [ ] **EY Entrepreneur Of The Year** award card — remove from Recognition section. Forbes stays. Layout becomes either one centered award card, or Forbes + Google review badge in a tidier composition.
- [ ] **AVG quote response `< 30 min`** info-card stat — remove. Contradicts the instant Instacarrier pricing claim.

### 🟡 Small edits (numbers, labels, copy)

- [ ] Info card: `82 k Shipments completed` → `40 k+ transports per year`
- [ ] Info card: `12 yrs Moving European freight` → `10 yrs`
- [ ] Services tab content (Express Transports panel): change stat `1 minute · Price quote` → `24/7 · Pricing` *(client wants to see how it looks; can revisit)*
- [ ] InstaCarrier hero form: add **email input** under "Delivery location" — mirroring the original Klára design ([Figma reference](https://www.figma.com/design/H23Hukc2xjOBPzKrPlKZQZ/Webicek---SWIDA?node-id=1-2718))
- [ ] InstaCarrier hero form: add **"Connect via API"** affordance on/under the form (was visible on the original Klára design)
- [ ] Truck banner ("One network. Every European border.") — either reframe with a clearer message, or remove. *Client comment: "Vizuál bez jasného posolstva len zaberá scroll."*

### 🔵 Restructure — Touchpoints section (biggest content change)

Keep the **current grid styling**, replace contents: 4 cards → 6 cards that follow the `How we work` pipeline 1:1.

- [ ] Card 1 — **Request** — "Book a truck like on eshop via Instacarrier, or send us a request which we automatically parse to speed up processing."
- [ ] Card 2 — **Pricing** — 1:1 from pipeline (AI / data-driven pricing). Copy to lift from current `How we operate` phase 2 + adapt.
- [ ] Card 3 — **Carrier sourcing** — 1:1 from pipeline (exchange APIs / capacity sourcing). Copy from current phase 3.
- [ ] Card 4 — **Monitoring** — "We pull GPS from the carrier's telematics provider on a schedule and push fresh location data into your TMS — or send a structured status email if you prefer ops by inbox."
- [ ] Card 5 — **Invoicing** — "The moment delivery is confirmed, your invoice is generated and dispatched — by email, structured PDF, or full EDI integration."
- [ ] Card 6 — **Reporting / Your freight, in a dashboard** — "See every shipment, every cost line, every on-time stat. Loyalty points you can spend on merch and perks. Lane analytics that let you plan smarter contracts next quarter."
- [ ] Headline review — current *"Four touchpoints where Swida does not feel like a forwarder."* needs updating because it'll now be six.

### 🟢 New section to add

- [ ] **People section** — was in the original Klára design, content stays, but **graficky urobiť krajšie**. Doesn't need to be tied to info cards. Decide placement (likely between Touchpoints and final CTA).

### ❓ Strategic decisions (need a quick call before touching)

- [?] **`Why Swida` technology features grid** — client suggests removing ("too much tech"), open to discussion. *Risk: weakens tech-first positioning.*
- [?] **`How we operate` 5-phase dark pipeline** — client suggests removing, since same content lands in the expanded Touchpoints. *Probably safe to remove once Touchpoints round is finished.*
- [?] **Overall tech-positioning trade-off** — with both removed, only Instacarrier widget + Touchpoints carry the "we're a tech forwarder" claim. Decide: drop both / drop one / keep both compressed into one tighter tech-proof section.

### ✅ Approved as-is — don't touch

- Footer / "Stay connected" block — *"pecka"*
- Final CTA *"Price your next shipment before this page loads."*
- `Free transport price quote` pink CTA bar above tabs — perfect, stays
- Touchpoints **visual style** (only content swaps in Round 2)

### 📝 Process notes

- Texts are placeholder — client will write finals internally; some current claims are *"dost adresne"* and they'll soften them.
- For the People section, no new Figma reference yet — use the original Klára Figma as visual base.

---

## Suggested execution order

1. **Removals + label edits** (everything in 🔴 and 🟡 except the Truck banner decision) — ~30 min, single commit, ships immediately. Low risk, no design call needed.
2. **InstaCarrier form additions** (email input + API affordance) — small layout work, one commit.
3. **Strategic call** on `Why Swida` / `How we operate` / Truck banner *before* touching the bigger sections.
4. **Touchpoints expansion** (4 → 6 cards).
5. **People section** — new component, will need iteration.
6. Final pass + commit + share new preview URL.

---

## Round history

- **Round 0** (original Klára v0) — base design
- **Round 1** (after feedback 24.04.2026) — current `main`, what's live now
- **Round 2** (this checklist, feedback 14.05.2026) — pending
