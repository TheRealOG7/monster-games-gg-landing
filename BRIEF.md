# Monster Energy x GAMES.GG Landing Page — Project Brief

**URL target:** monsterenergy.games.gg  
**Purpose:** Proof-of-concept co-branded landing page for Monster Energy on GAMES.GG. First campaign is tied to Call of Duty: Black Ops 7. The page will serve as Monster Energy's permanent gaming hub on GAMES.GG, with campaigns rotating in as new titles drop.

---

## What this is modeled on

This project is a direct sibling to the ENBD x GAMES.GG landing page built at `enbd.games.gg`. That project lives at `/Users/og/Desktop/Claude/enbd-games-gg-landing`. The design system, component patterns, tech stack, and file structure from that project are the starting point. Read it if you want to understand the quality bar and the patterns to follow.

---

## Tech Stack

Identical to the ENBD project:

- **Framework:** Next.js (App Router, Turbopack), TypeScript strict mode
- **Styling:** Tailwind CSS v4 with `@import "tailwindcss"` and `@theme inline` in globals.css — custom properties in OKLCH
- **Animation:** Framer Motion (`motion`, `useAnimation`, `whileInView`, stagger variants)
- **Icons:** `@phosphor-icons/react` v2.1.10 (SSR variant for server components)
- **Images:** Next.js `Image` component with `remotePatterns` in `next.config.ts`

---

## Design System

Carry over the full ENBD design system with these Monster-specific adaptations:

### Colors
- **Primary accent:** Monster Energy green. Use `oklch(0.847 0.238 150)` as the base (same as ENBD). Monster's brand green is close enough — do not introduce a second green. One accent color only.
- **Background:** Very dark near-black (same as ENBD)
- **No blue anywhere.** No secondary accent colors.

### Typography
- Uppercase headings, `font-black`, tight tracking
- No em dashes anywhere in copy. Not one. Use commas, colons, or reword.
- No italic text
- Second person throughout ("Your stats", "Your kills", "Your hours")
- Lead with the reward benefit, not the mechanic

### Components
- `rounded-none` (sharp corners) on all buttons, inputs, and CTAs — no `rounded-full`
- Framer Motion `whileInView` with `once: true` for scroll animations, stagger on lists
- Phosphor icons only
- No "Coming Soon" placeholders anywhere. Every module, article, and quest must have real content.
- All quest accent colors: green/primary only. No yellow, gold, orange.

### Navbar
Matches games.gg's actual navbar. Left: GAMES.GG logo. Center nav links. Right: Globe, Search, Sign In, Get Started (green CTA). No Monster logo in navbar — it lives in the page content.

---

## Brand Partners

- **Monster Energy** — primary brand partner. Their claw mark logo and brand assets appear throughout.
- **Activision / Call of Duty: Black Ops 7** — campaign title. COD BO7 logo, game imagery.
- **GAMES.GG** — platform host. Logo in navbar and footer.

---

## Campaign Concept

**Monster Energy x Call of Duty: Black Ops 7**

Monster Energy has a long-running real-world partnership with Call of Duty. In past campaigns, buying Monster cans gave you codes for in-game items. This campaign is a digital-first version for the GAMES.GG audience:

1. Users connect their gaming profile (Activision/Battle.net)
2. They verify their hours played in COD: Black Ops 7
3. Completing the quest enters them into a prize draw
4. Main prize: a Monster Energy-branded gaming PC build
5. Secondary prizes: Monster merch, peripherals, drinks bundles

The "skin" angle: completing the quest unlocks a Monster Energy operator skin for COD BO7 (a real Monster Energy skin has existed in prior COD seasons — this campaign revives that concept digitally).

---

## Quest Structure

### Main Quest: "FUEL THE GRIND"
**Description:** Connect your Activision account, verify your Black Ops 7 hours, and enter to win a Monster Gaming PC.

**Missions (in order):**
1. Connect your Activision / Battle.net profile to GAMES.GG
2. Verify 10+ hours played in Call of Duty: Black Ops 7
3. Follow Monster Energy on GAMES.GG
4. Share your quest progress (social share)
5. Complete your GAMES.GG profile (avatar, bio, platform tags)

**Reward:** Entry into the Monster Gaming PC raffle. Unlocks the Monster Energy COD operator skin (in-game item).

**XP:** 500 XP + Monster Energy badge on GAMES.GG profile

**Badge:** "FUEL THE GRIND" — design it in the same SVG style as the ENBD badges. Monster green claw mark motif. Hexagonal shape with glow filter.

---

### Secondary Quests (locked at launch, to be unlocked as campaigns run):

1. **"UNLEASH RANKED"** — Reach Top 250 in COD BO7 Ranked Play. Prize: Monster x GAMES.GG limited jersey.
2. **"MONSTER MARATHON"** — Log 50 hours across any titles this month. Prize: Monster Energy variety pack (24 cans) + merch bundle.
3. **"SQUAD FUELED"** — Form a squad of 3 GAMES.GG friends and complete a match together. Prize: Gaming headset (Monster-branded or partner peripheral).
4. **"FUTURE TITLES"** — Placeholder slot for next campaign (Warzone, FIFA, Apex, etc.). Shows as locked with teaser.

---

## Prize Pool (research-backed)

Monster Energy's typical real-world competition prizes across campaigns:

**Hero Prize (Main Raffle):**
- Monster Energy-branded custom gaming PC build
  - Specs: RTX 4080 or equivalent, 32GB RAM, 2TB NVMe, 240Hz monitor
  - Wrapped/branded with Monster claw mark aesthetics
  - Estimated value: $3,000 to $4,000

**Secondary Prizes (weekly / quest-based):**
- Monster Energy x COD operator skin (in-game)
- Monster Energy gaming merch bundle:
  - Snapback cap (black/green claw)
  - Hoodie (black with claw logo)
  - Backpack
  - Lanyard and keychain
- Monster Energy drinks bundle: 24-can variety pack (Ultra White, Pipeline Punch, Mango Loco, Original)
- Gaming peripherals:
  - Mechanical gaming keyboard (Monster-branded or HyperX partnership)
  - Gaming mouse
  - RGB gaming headset
- Xbox or PlayStation gift cards ($100 value)
- GAMES+ subscription (3 months)

---

## Page Sections (in render order)

### 1. Navbar
Standard games.gg navbar. Get Started CTA links to the quest section.

### 2. Hero
**Headline:** FUEL YOUR GAME.  
**Subheadline:** Play Black Ops 7. Verify your hours. Win a Monster Gaming PC.  
**Description:** Monster Energy has landed on GAMES.GG. Complete the quest, prove your grind, and earn your shot at the ultimate gaming setup — plus an exclusive operator skin.  
**CTA:** Start the Quest (scrolls to quest board)  
**Visual:** Monster Energy can (green original) prominently placed — tilted, similar treatment to the ENBD card mockup. Monster claw mark as a background element.  
**Monster Energy logo badge** above the headline (same position as ENBD logo in the ENBD hero).

### 3. Quest Board
Horizontal scroll cards. Main quest (FUEL THE GRIND) is active. 3 secondary quests are locked. Same card format as ENBD quest cards. All green accent.

### 4. How It Works
3 full-bleed image cards:
1. **CONNECT** — Link your Activision account to GAMES.GG
2. **PROVE IT** — Verify your Black Ops 7 hours played
3. **WIN** — Enter the draw for a Monster Gaming PC

### 5. The Prize
Hero prize reveal section. Similar to ENBD's CardReveal section but for the gaming PC.  
Show the prize with a list of what's included:
- Custom Monster-branded gaming PC (RTX 4080, 32GB RAM, 2TB)
- 240Hz gaming monitor
- Monster Energy mechanical keyboard
- Monster Energy gaming mouse
- 24-can Monster Energy variety pack
- Monster Energy merch bundle (cap + hoodie + backpack)
- Exclusive COD BO7 Monster operator skin

### 6. Monster Gaming Hub (News + Updates)
This is the "evergreen" section that makes this page a permanent destination beyond just this campaign. Template it with real content for launch.

**Section title:** WHAT'S HAPPENING  
**Layout:** Featured large card + 4 stacked smaller cards (same pattern as the Podcast section in ENBD)

**Content categories to populate:**
- Campaign announcements (Monster x new game titles)
- Gaming news Monster has a stake in (COD tournaments, esports)
- Product drops (new Monster Energy can variants, limited editions)
- Community highlights (top players, GAMES.GG leaderboard callouts)

**Seed content for launch (write real copy for these):**
1. (Featured) Monster Energy x Call of Duty: Black Ops 7 — the full campaign announcement
2. Introducing the Monster Energy Operator Skin for BO7
3. Monster Energy at the COD Championship Series — what to watch
4. New Drop: Monster Energy Ultra Watermelon is here
5. How to connect your Activision account to GAMES.GG

### 7. Merch + Drinks Shelf
Visual product showcase — similar to a product grid. 6 items:
1. Monster Energy Original Can (the classic)
2. Monster Energy Ultra White
3. Monster x COD Limited Edition Can
4. Monster Energy Snapback Cap
5. Monster Energy Hoodie
6. Monster Energy Gaming Backpack

Each card: product image (Unsplash or placeholder), name, category tag ("DRINK" / "MERCH"), "In Prize Pool" badge where applicable.

### 8. Final CTA
**Headline:** YOUR GRIND STARTS NOW.  
**Subheadline:** Create your GAMES.GG profile and fuel the quest.  
**CTA:** Get Started (links to GAMES.GG signup)

### 9. Footer
GAMES.GG logo + tagline + Monster Energy logo. Two nav columns: Platform, Campaign. No legal column.

---

## Quest Detail Pages (/quests/[slug])

Same structure as ENBD quest pages:
- Mission list with checkboxes and XP per mission
- Progress bar
- SVG badge in rewards card (FUEL THE GRIND badge)
- Countdown to raffle date
- Prize raffle section showing the Monster Gaming PC
- Real avatar photos (Pravatar)
- Green/primary only, no other accent colors

---

## News/Updates Pages (/news/[slug])

New section type not in ENBD. Seed 5 articles at launch. Each article page follows the same layout as the ENBD /learn/* pages: full-width hero image, article body, 2 inline section images, consistent design system.

Articles to write:
1. `/news/monster-x-black-ops-7` — Campaign announcement
2. `/news/monster-operator-skin` — About the operator skin, how to claim
3. `/news/cod-champs-series` — Monster at the COD Championship Series
4. `/news/ultra-watermelon-drop` — New Monster Energy product spotlight
5. `/news/connect-activision-guide` — How-to guide for connecting your account

---

## Badges (QuestBadge.tsx equivalent)

Design 4 custom SVG badges in the same style as the ENBD badges:
- Gaming-style glow filters, radial gradients, tick-mark bezels, tier pip diamonds
- ViewBox 200x230

1. **FUEL THE GRIND** — Main campaign badge. Monster green claw mark over hexagonal plate.
2. **UNLEASH RANKED** — Lightning bolt / ranking arrow motif.
3. **MONSTER MARATHON** — Endurance / clock motif.
4. **SQUAD FUELED** — 3-person team / squad motif.

---

## Copy Rules (carry over from ENBD — non-negotiable)

- NO em dashes. Not one. Not anywhere.
- No italic text.
- Second person throughout.
- Lead with the reward benefit.
- Sharp corners on all CTAs (`rounded-none`).
- One accent color (Monster green).
- No "Coming Soon" — write the content before the component.
- Unsplash images must be topic-relevant. Do not use random tech/office photos.
- Check every string before committing: grep for `—` (U+2014).

---

## File Structure (mirror ENBD)

```
src/
  app/
    layout.tsx           — Navbar + Footer
    page.tsx             — Section order (Hero, QuestBoard, HowItWorks, PrizeReveal, NewsHub, MerchShelf, FinalCTA)
    quests/
      [slug]/page.tsx    — Quest detail pages (SSG)
    news/
      [slug]/page.tsx    — News article pages (SSG)
  lib/
    quests.ts            — Quest data
    news.ts              — News article data
  components/
    QuestBadge.tsx       — SVG badge components
    Countdown.tsx        — Raffle countdown timer
public/
  gamesgg-logo.png
  monster-logo.png       — Monster Energy logo (user to supply or use placeholder)
  monster-can.png        — Hero visual (user to supply or use placeholder)
```

---

## Deployment

- Host on Railway (same as ENBD)
- GitHub repo: new repo, e.g. `TheRealOG7/monster-games-gg-landing`
- Branch: `master`
- Auto-deploy from master

---

## Session Kickoff Instructions

When you open a new Claude Code session in this folder:

1. Read this BRIEF.md first.
2. Reference the ENBD project at `/Users/og/Desktop/Claude/enbd-games-gg-landing` to understand the quality bar, component patterns, and design system implementation.
3. Init a new Next.js project in this folder.
4. Start with the design system (globals.css, tailwind config) — it should be identical to ENBD's.
5. Build sections in order: Navbar, Hero, QuestBoard, HowItWorks, PrizeReveal, NewsHub, MerchShelf, FinalCTA, Footer.
6. Write all quest pages and news article pages before launching.
7. No placeholder content. Every section ships with real copy.
