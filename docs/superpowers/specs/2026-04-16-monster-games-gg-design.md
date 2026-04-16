# Monster Energy x GAMES.GG — Design Spec

**Date:** 2026-04-16  
**Status:** Approved — building

---

## Overview

`monsterenergy.games.gg` — co-branded landing page for Monster Energy on GAMES.GG. First campaign: Monster Energy x Call of Duty (Black Ops 7 / BO6 on Steam). Permanent gaming hub for Monster Energy campaigns across titles over time.

---

## Tech Stack

Identical to `enbd-games-gg-landing`:
- Next.js 16 (App Router, Turbopack), TypeScript strict mode
- Tailwind CSS v4 with `@import "tailwindcss"` + `@theme inline` in globals.css
- Framer Motion, `@phosphor-icons/react` v2.1.10
- Next.js Image with remotePatterns

---

## Design System

Copied from ENBD with no changes:
- Primary accent: `oklch(0.847 0.238 150)` (#33f57a) — single accent color
- Background: `oklch(0.158 0.024 255)` near-black
- `rounded-none` on all CTAs and inputs
- Uppercase headings, `font-black`, `tight-tracking`
- No em dashes, no italic, no blue
- Phosphor icons only

---

## API Decision

**Steam Web API** for account connection and playtime verification (not Activision — no public API).
- Quest flow: connect Steam profile, verify 10+ hours in COD via `IPlayerService/GetOwnedGames`
- COD: Black Ops 6 Steam App ID: 2933620
- This is UI-only in the prototype; real integration is backend work post-POC

---

## Page Sections (render order)

1. **Navbar** — standard games.gg navbar, "Get Started" → `#quest`
2. **Hero** — "FUEL YOUR GAME." headline, Monster can hero visual (tilted -8deg, hover-to-straighten), Monster logo badge above headline, email CTA
3. **QuestBoard** — horizontal scroll, 5 cards (1 active, 4 locked), all green accent
4. **HowItWorks** — 3 full-bleed cards: CONNECT / PROVE IT / WIN
5. **PrizeReveal** — hero prize (Monster Gaming PC) + prize list, same layout as ENBD CardReveal
6. **NewsHub** — featured + 4 stacked (Podcast component pattern), links to `/news/[slug]`
7. **MerchShelf** — 6-card grid (3 drinks, 3 merch), "In Prize Pool" badge on eligible items
8. **FinalCTA** — "YOUR GRIND STARTS NOW." + CTA
9. **Footer** — GAMES.GG logo + Monster logo, two nav columns

---

## Routes

### `/quests/[slug]` (5 pages)
| slug | title | status |
|------|-------|--------|
| `fuel-the-grind` | Fuel the Grind | active |
| `unleash-ranked` | Unleash Ranked | locked |
| `monster-marathon` | Monster Marathon | locked |
| `squad-fueled` | Squad Fueled | locked |
| `next-campaign` | Next Campaign | locked (teaser) |

### `/news/[slug]` (5 pages, fully written)
| slug | title |
|------|-------|
| `monster-x-black-ops-7` | Monster Energy x Call of Duty: Black Ops 7 |
| `monster-operator-skin` | The Monster Energy Operator Skin |
| `cod-champs-series` | Monster at the COD Championship Series |
| `ultra-watermelon-drop` | New Drop: Monster Energy Ultra Watermelon |
| `connect-steam-guide` | How to Connect Your Steam Account to GAMES.GG |

---

## Quest: Fuel the Grind (active)

Missions:
1. Connect your Steam profile to GAMES.GG (+50 XP)
2. Verify 10+ hours in Call of Duty on Steam (+100 XP)
3. Follow Monster Energy on GAMES.GG (+50 XP)
4. Share your quest progress (+100 XP)
5. Complete your GAMES.GG profile (+200 XP)

Total: 500 XP. Reward: Monster Energy "Fuel the Grind" badge + COD operator skin entry.

---

## Prize Pool

**Hero (raffle):** Monster-branded gaming PC — RTX 4080, 32GB RAM, 2TB NVMe, 240Hz monitor (est. $3,500)

**Secondary:**
- Monster Energy x COD operator skin (in-game)
- 24-can Monster Energy variety pack
- Monster merch bundle (cap + hoodie + backpack)
- Gaming keyboard + mouse (Monster-branded)
- Xbox/PlayStation gift card ($100)
- GAMES+ 3-month subscription

---

## SVG Badges (4)

Same style as ENBD: glow filters, radial gradients, tick-mark bezels, tier pip diamonds, viewBox 200x232.

1. **Fuel the Grind** — claw mark motif
2. **Unleash Ranked** — lightning bolt / ranking arrow
3. **Monster Marathon** — endurance clock motif
4. **Squad Fueled** — trio motif

---

## Copy Rules

- No em dashes anywhere
- No italic text
- Second person throughout
- Lead with reward benefit
- `rounded-none` on all CTAs
- One accent color (green)
- No "Coming Soon" — all content written before component ships
- Grep for `—` (U+2014) before every commit
