# Monster Energy x GAMES.GG Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build `monsterenergy.games.gg` — a co-branded Monster Energy x GAMES.GG landing page featuring a Call of Duty campaign quest, prize reveal, news hub, and merch shelf.

**Architecture:** Next.js 16 App Router, identical stack to `enbd-games-gg-landing`. All components in `src/components/`, data in `src/lib/`, routes in `src/app/`. Static site (no server actions). Prototype — no real API calls, quest flow is UI only.

**Tech Stack:** Next.js 16, TypeScript strict, Tailwind CSS v4, Framer Motion, @phosphor-icons/react v2.1.10

**Reference project:** `/Users/og/Desktop/Claude/enbd-games-gg-landing` — copy patterns exactly, adapt content.

---

## File Map

| File | Purpose |
|------|---------|
| `package.json` | Dependencies |
| `next.config.ts` | Remote image patterns |
| `postcss.config.mjs` | Tailwind postcss |
| `tsconfig.json` | TS config |
| `src/app/globals.css` | Design system (OKLCH colors, utilities) |
| `src/app/layout.tsx` | Root layout, metadata, Navbar + Footer |
| `src/app/page.tsx` | Section order |
| `src/app/favicon.ico` | Favicon placeholder |
| `src/lib/quests.ts` | 5 quest data objects |
| `src/lib/news.ts` | 5 news article data objects with full body content |
| `src/components/Countdown.tsx` | Client countdown timer |
| `src/components/QuestBadge.tsx` | 4 Monster SVG badges |
| `src/components/Navbar.tsx` | GAMES.GG nav |
| `src/components/Footer.tsx` | Footer with Monster + GAMES.GG logos |
| `src/components/Hero.tsx` | Hero with can visual + "FUEL YOUR GAME." |
| `src/components/QuestBoard.tsx` | Horizontal scroll quest cards |
| `src/components/HowItWorks.tsx` | CONNECT / PROVE IT / WIN cards |
| `src/components/PrizeReveal.tsx` | Gaming PC prize + prize list |
| `src/components/NewsHub.tsx` | Featured + 4 stacked news cards |
| `src/components/MerchShelf.tsx` | 6-card merch/drinks grid |
| `src/components/FinalCTA.tsx` | "YOUR GRIND STARTS NOW." |
| `src/app/quests/[slug]/page.tsx` | Quest detail (SSG) |
| `src/app/news/[slug]/page.tsx` | News article (SSG) |

---

## Task 1: Scaffold project

- [ ] Run in `/Users/og/Desktop/Claude/monster-games-gg-landing/`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack --yes
```
- [ ] Install extra deps:
```bash
npm install framer-motion @phosphor-icons/react
npm install --save-dev @tailwindcss/postcss
```
- [ ] Commit: `git init && git add . && git commit -m "chore: scaffold Next.js project"`

---

## Task 2: Config files

- [ ] Replace `next.config.ts`:
```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};
export default nextConfig;
```
- [ ] Replace `postcss.config.mjs`:
```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```
- [ ] Commit: `git add . && git commit -m "chore: config files"`

---

## Task 3: Design system

- [ ] Replace `src/app/globals.css` (identical to ENBD):
```css
@import "tailwindcss";

:root {
  color-scheme: dark;
  --background:         oklch(0.158 0.024 255);
  --surface:            oklch(0.21  0.034 264);
  --surface-variant:    oklch(0.278 0.033 256);
  --surface-muted:      oklch(0.446 0.03  256);
  --on-surface:         oklch(0.985 0.002 247);
  --on-surface-variant: oklch(0.707 0.022 261);
  --on-surface-muted:   oklch(0.551 0.027 264);
  --primary:            oklch(0.847 0.238 150);
  --secondary:          oklch(0.847 0.238 150);
  --border:             oklch(0.278 0.033 256);
  --border-strong:      oklch(0.373 0.034 259);
}

@theme inline {
  --font-sans: var(--font-inter), "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-background:          var(--background);
  --color-surface:             var(--surface);
  --color-surface-variant:     var(--surface-variant);
  --color-surface-muted:       var(--surface-muted);
  --color-on-surface:          var(--on-surface);
  --color-on-surface-variant:  var(--on-surface-variant);
  --color-on-surface-muted:    var(--on-surface-muted);
  --color-primary:             var(--primary);
  --color-secondary:           var(--secondary);
}

body {
  background: var(--background);
  color: var(--on-surface);
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--primary); color: #000; }
html { scroll-behavior: smooth; }
.tight-tracking { letter-spacing: -0.05em; }
.text-glow { text-shadow: 0 0 24px rgba(51, 245, 122, 0.45); }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--background); }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 3px; }
```
- [ ] Commit: `git add . && git commit -m "feat: design system"`

---

## Task 4: Root layout + page skeleton

- [ ] Write `src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monster Energy x GAMES.GG | Fuel the Grind",
  description: "Play Call of Duty. Verify your hours. Win a Monster Gaming PC. Complete the quest on GAMES.GG.",
  keywords: ["Monster Energy gaming", "Call of Duty quest", "win gaming PC", "GAMES.GG"],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Monster Energy x GAMES.GG | Fuel the Grind",
    description: "Play Call of Duty. Verify your hours. Win a Monster Gaming PC.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```
- [ ] Write `src/app/page.tsx`:
```tsx
import Hero from "@/components/Hero";
import QuestBoard from "@/components/QuestBoard";
import HowItWorks from "@/components/HowItWorks";
import PrizeReveal from "@/components/PrizeReveal";
import NewsHub from "@/components/NewsHub";
import MerchShelf from "@/components/MerchShelf";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuestBoard />
      <HowItWorks />
      <PrizeReveal />
      <NewsHub />
      <MerchShelf />
      <FinalCTA />
    </main>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: root layout and page skeleton"`

---

## Task 5: Data — quests

- [ ] Create `src/lib/quests.ts`:
```ts
export type Mission = {
  id: string;
  title: string;
  tag?: string;
  xp: number;
  locked?: boolean;
};

export type QuestData = {
  slug: string;
  title: string;
  description: string;
  xpTotal: number;
  badge: string;
  badgeImage: string;
  status: "active" | "locked";
  isBoss?: boolean;
  deadline: string;
  raffleDate: string;
  raffleWinners: number;
  missions: Mission[];
  enrolled: string | null;
};

export const quests: QuestData[] = [
  {
    slug: "fuel-the-grind",
    title: "Fuel the Grind",
    description:
      "Connect your Steam account, verify your Call of Duty hours, and prove your grind is real. Complete all five missions to enter the Monster Gaming PC raffle and unlock an exclusive operator skin.",
    xpTotal: 500,
    badge: "Fuel the Grind Badge",
    badgeImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=90",
    status: "active",
    deadline: "Ends Aug 31, 2026",
    raffleDate: "2026-08-31T20:00:00+04:00",
    raffleWinners: 1,
    missions: [
      { id: "m1", title: "Connect your Steam profile to GAMES.GG", xp: 50 },
      { id: "m2", title: "Verify 10+ hours in Call of Duty on Steam", xp: 100 },
      { id: "m3", title: "Follow Monster Energy on GAMES.GG", xp: 50 },
      { id: "m4", title: "Share your quest progress", xp: 100 },
      { id: "m5", title: "Complete your GAMES.GG profile (avatar, bio, platforms)", xp: 200 },
    ],
    enrolled: "3,841",
  },
  {
    slug: "unleash-ranked",
    title: "Unleash Ranked",
    description:
      "Reach Top 250 in Call of Duty Ranked Play. This quest is for the players who do not just show up, they climb. Verified via Steam stats.",
    xpTotal: 750,
    badge: "Unleash Ranked Badge",
    badgeImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1600&q=90",
    status: "locked",
    deadline: "Unlocks Sep 1, 2026",
    raffleDate: "2026-11-30T20:00:00+04:00",
    raffleWinners: 3,
    missions: [
      { id: "m1", title: "Reach Top 500 in Ranked Play", xp: 250, locked: true },
      { id: "m2", title: "Reach Top 250 in Ranked Play", xp: 500, locked: true },
    ],
    enrolled: null,
  },
  {
    slug: "monster-marathon",
    title: "Monster Marathon",
    description:
      "Log 50 hours across any titles on Steam this month. Endurance is a skill. Show GAMES.GG your playtime and earn the Marathon badge plus a Monster drinks bundle.",
    xpTotal: 400,
    badge: "Monster Marathon Badge",
    badgeImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&q=90",
    status: "locked",
    deadline: "Unlocks Oct 1, 2026",
    raffleDate: "2026-12-31T20:00:00+04:00",
    raffleWinners: 10,
    missions: [
      { id: "m1", title: "Log 20 hours on Steam this month", xp: 100, locked: true },
      { id: "m2", title: "Log 35 hours on Steam this month", xp: 100, locked: true },
      { id: "m3", title: "Log 50 hours on Steam this month", xp: 200, locked: true },
    ],
    enrolled: null,
  },
  {
    slug: "squad-fueled",
    title: "Squad Fueled",
    description:
      "Add three GAMES.GG friends, tag your squad, and complete a match in Call of Duty together. The grind hits different with a crew.",
    xpTotal: 350,
    badge: "Squad Fueled Badge",
    badgeImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1600&q=90",
    status: "locked",
    deadline: "Unlocks Nov 1, 2026",
    raffleDate: "2027-01-31T20:00:00+04:00",
    raffleWinners: 5,
    missions: [
      { id: "m1", title: "Add 3 friends on GAMES.GG", xp: 50, locked: true },
      { id: "m2", title: "Tag your squad in your profile", xp: 100, locked: true },
      { id: "m3", title: "Complete a COD match with your squad", xp: 200, locked: true },
    ],
    enrolled: null,
  },
  {
    slug: "next-campaign",
    title: "Next Campaign",
    description:
      "Monster Energy is coming to more titles. Stay tuned. The next quest drops with our next game partnership. Follow Monster Energy on GAMES.GG to get notified first.",
    xpTotal: 0,
    badge: "Next Campaign Badge",
    badgeImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600&q=90",
    status: "locked",
    isBoss: true,
    deadline: "Coming Soon",
    raffleDate: "2027-06-30T20:00:00+04:00",
    raffleWinners: 1,
    missions: [
      { id: "m1", title: "Stay tuned", xp: 0, locked: true },
    ],
    enrolled: null,
  },
];

export function getQuest(slug: string): QuestData | undefined {
  return quests.find((q) => q.slug === slug);
}
```
- [ ] Commit: `git add . && git commit -m "feat: quest data"`

---

## Task 6: Data — news articles

- [ ] Create `src/lib/news.ts`:
```ts
export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  body: string; // HTML string rendered via dangerouslySetInnerHTML
};

export const articles: NewsArticle[] = [
  {
    slug: "monster-x-black-ops-7",
    title: "Monster Energy x Call of Duty: Black Ops 7 — The Campaign Is Live",
    category: "Campaign",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=90",
    excerpt:
      "Monster Energy has partnered with Activision to bring the Fuel the Grind campaign to GAMES.GG. Play Black Ops 7, verify your hours, and win a custom Monster Gaming PC.",
    body: `<p>Monster Energy and Call of Duty have run campaigns together for years. Cans with codes, in-game drops, limited edition colorways. This time, the campaign lives on GAMES.GG — and the prize is bigger than anything that has come before it.</p>
<p>The Fuel the Grind quest is now live. Connect your Steam account, verify your Call of Duty hours, and complete all five missions to enter the Monster Gaming PC raffle. One winner takes home a custom-built rig: RTX 4080, 32GB RAM, 2TB NVMe SSD, 240Hz monitor, mechanical keyboard and mouse — all wrapped in Monster Energy's signature black and green.</p>
<h2>How the Quest Works</h2>
<p>Head to your GAMES.GG profile and connect your Steam account. The platform reads your public playtime directly from Steam's API — no screenshots, no manual entry. Once 10 hours in Call of Duty are verified, your quest missions unlock.</p>
<p>Complete all five missions before August 31, 2026 to enter the raffle. Every completed mission earns XP and counts toward your GAMES.GG profile. The top grinders also unlock an exclusive Monster Energy operator skin for Black Ops 7.</p>
<h2>More Campaigns Coming</h2>
<p>This is just the first campaign in an ongoing partnership between Monster Energy and GAMES.GG. More titles, more quests, more prizes. Follow Monster Energy on GAMES.GG to get notified when the next campaign drops.</p>`,
  },
  {
    slug: "monster-operator-skin",
    title: "The Monster Energy Operator Skin for Black Ops 7 — What It Looks Like",
    category: "In-Game",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1600&q=90",
    excerpt:
      "Complete the Fuel the Grind quest and unlock the Monster Energy operator skin for Call of Duty: Black Ops 7. Here is what the skin includes and how to claim it.",
    body: `<p>Monster Energy operator skins in Call of Duty are not new. Past campaigns have featured branded bundles, weapon blueprints, and loading screens tied to physical can purchases. The Black Ops 7 skin takes a different approach: you earn it by playing, not buying.</p>
<h2>What the Skin Includes</h2>
<p>The Monster Energy operator bundle for Black Ops 7 includes a full operator skin in Monster's signature matte black and neon green, a matching weapon blueprint for the default assault rifle, a calling card, and a Monster Energy emblem for your profile. The design is built around the claw mark — three diagonal slashes across the operator's chest piece, glowing green under UV light effects.</p>
<h2>How to Claim It</h2>
<p>Complete the Fuel the Grind quest on GAMES.GG. Once all five missions are verified, a claim code is sent to your registered email. Redeem the code in the Call of Duty store under the Redeem section. The bundle appears in your locker within 24 hours.</p>
<p>The skin is exclusive to this campaign. It will not be available in the regular store rotation.</p>
<h2>Design Notes</h2>
<p>The operator is built on the Spectre base model with custom texture work. The claw marks are rendered as physical damage on the armor, not a decal. Night vision goggles are pushed up with a Monster Energy can holstered on the hip. It is subtle enough to not look like a walking billboard and bold enough to be recognizable in killcam footage.</p>`,
  },
  {
    slug: "cod-champs-series",
    title: "Monster Energy at the COD Championship Series — What to Watch",
    category: "Esports",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&q=90",
    excerpt:
      "Monster Energy is an official partner of the Call of Duty Championship Series. Here is the schedule, the teams to watch, and how GAMES.GG fits in.",
    body: `<p>Monster Energy has been an official partner of competitive Call of Duty for several seasons. The branding is everywhere at CDL events: rink-side banners, player stations, the energy coolers visible in player cams during breaks. This season they go further.</p>
<h2>The Schedule</h2>
<p>The CDL Major III kicks off in May in Dallas. Eight teams compete across three days for a combined prize pool of $500,000. Monster Energy-branded content runs across the official broadcast, including player segments and a halftime challenge segment where pros go head-to-head in a custom Monster-themed map variant.</p>
<h2>Teams to Watch</h2>
<p>OpTic Texas comes in as the defending champion after their dominant run at Major II. Atlanta FaZe have rebuilt their roster around a younger core that has looked sharp in scrims. LA Thieves are the outside bet — they finished fourth in the regular season but have historically over-performed at LAN events.</p>
<h2>GAMES.GG Coverage</h2>
<p>GAMES.GG is covering the event live. Follow the Monster Energy page on GAMES.GG for real-time updates, match recaps, and player interviews. Players who complete the Fuel the Grind quest before the event get early access to the broadcast recap content.</p>`,
  },
  {
    slug: "ultra-watermelon-drop",
    title: "New Drop: Monster Energy Ultra Watermelon Is Here",
    category: "Product",
    date: "April 5, 2026",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=1600&q=90",
    excerpt:
      "Monster Energy Ultra Watermelon joins the lineup. Zero sugar, 150mg caffeine, and a taste profile built for the summer grind session.",
    body: `<p>The Ultra lineup just got louder. Monster Energy Ultra Watermelon is now available — zero sugar, 150mg of caffeine, and a clean watermelon finish that does not taste like candy. It is closer to actual watermelon juice than any energy drink equivalent has managed before.</p>
<h2>The Lineup So Far</h2>
<p>Ultra White was first — citrus and light, the one that converted people who said they did not like energy drinks. Ultra Sunrise added orange. Ultra Paradise went tropical. Ultra Gold chased mango. Watermelon fills the gap between sweet and refreshing that the lineup was missing.</p>
<h2>What Is in the Can</h2>
<p>Standard Monster Energy formula: 160mg caffeine per 16oz can, B-vitamins (B2, B3, B6, B12), taurine, and ginseng. Ultra Watermelon comes in at 10 calories per can. The carbonation level is slightly lower than the original green, which makes it easier to drink quickly without the aggressive fizz.</p>
<h2>In the Prize Pool</h2>
<p>Ultra Watermelon is included in the Fuel the Grind prize pool. Quest completers who do not win the gaming PC are still entered into weekly draws for 24-can variety packs that include Watermelon alongside Original, Ultra White, and Pipeline Punch. The variety pack is also available as a secondary prize in the Monster Marathon quest.</p>`,
  },
  {
    slug: "connect-steam-guide",
    title: "How to Connect Your Steam Account to GAMES.GG",
    category: "Guide",
    date: "April 16, 2026",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1600&q=90",
    excerpt:
      "Connecting your Steam profile unlocks hour verification for the Monster Energy quests. Here is how to do it in under two minutes.",
    body: `<p>Completing the Fuel the Grind quest requires connecting your Steam profile to GAMES.GG. This lets the platform verify your Call of Duty playtime directly from Steam's public API. Here is how to do it.</p>
<h2>Step 1: Make Your Steam Profile Public</h2>
<p>Go to your Steam profile page. Click Edit Profile, then Privacy Settings. Set Game Details to Public. This is required for any third-party platform to read your playtime. You can set it back to private after the quest verification completes if you prefer.</p>
<h2>Step 2: Connect in GAMES.GG Settings</h2>
<p>Log into your GAMES.GG account. Go to Settings, then Connected Accounts. Click Connect Steam. You will be redirected to Steam's OpenID login — enter your Steam credentials there and approve the connection. GAMES.GG only reads your public profile data: username, playtime, and owned games. It does not have access to your wallet, friends list, or account security settings.</p>
<h2>Step 3: Verify Your Hours</h2>
<p>After connecting, head back to the Fuel the Grind quest page. Click Verify Hours. The platform checks your public Call of Duty playtime in real time. If you have 10 or more hours logged, the mission completes immediately and 100 XP is added to your profile.</p>
<h2>Troubleshooting</h2>
<p>If verification fails, check that your Game Details are set to Public and that you have reloaded the quest page after connecting. Steam's API can take up to 15 minutes to reflect privacy setting changes. If the problem persists, disconnect and reconnect your Steam account from Settings.</p>`,
  },
];

export function getArticle(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
```
- [ ] Commit: `git add . && git commit -m "feat: news article data"`

---

## Task 7: Countdown + QuestBadge components

- [ ] Copy `Countdown.tsx` from ENBD verbatim (it is generic — no brand-specific content):
  Source: `/Users/og/Desktop/Claude/enbd-games-gg-landing/src/components/Countdown.tsx`

- [ ] Create `src/components/QuestBadge.tsx` with 4 Monster badges:

```tsx
type BadgeSlug = "fuel-the-grind" | "unleash-ranked" | "monster-marathon" | "squad-fueled" | "next-campaign";

function SharedDefs({ id }: { id: string }) {
  return (
    <defs>
      <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blurred" />
        <feComposite in="SourceGraphic" in2="blurred" operator="over" />
      </filter>
      <radialGradient id={`bg-${id}`} cx="50%" cy="38%" r="62%">
        <stop offset="0%" stopColor="#0d1a0f" />
        <stop offset="100%" stopColor="#060d08" />
      </radialGradient>
    </defs>
  );
}

function MedalRing({ id, cx = 100, cy = 100, r = 83 }: { id: string; cx?: number; cy?: number; r?: number }) {
  const ticks = Array.from({ length: 48 }, (_, i) => {
    const angle = (i * 7.5 - 90) * (Math.PI / 180);
    const isMajor = i % 6 === 0;
    const r1 = r - (isMajor ? 8 : 4);
    return { x1: cx + r1 * Math.cos(angle), y1: cy + r1 * Math.sin(angle), x2: cx + r * Math.cos(angle), y2: cy + r * Math.sin(angle), major: isMajor };
  });
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 5} fill="none" stroke="#33f57a" strokeWidth="10" opacity="0.07" filter={`url(#glow-${id})`} />
      <circle cx={cx} cy={cy} r={r} fill={`url(#bg-${id})`} stroke="#33f57a" strokeWidth="1.8" />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#33f57a" strokeWidth={t.major ? "2" : "0.7"} opacity={t.major ? "0.65" : "0.18"} />
      ))}
      <circle cx={cx} cy={cy} r={r - 16} fill="none" stroke="#33f57a" strokeWidth="1" strokeDasharray="3 7" opacity="0.22" />
    </g>
  );
}

function TierPips({ y = 218 }: { y?: number }) {
  return (
    <g>
      {[-16, 0, 16].map((dx, i) => (
        <polygon key={i} points={`${100 + dx},${y} ${104 + dx},${y + 5} ${100 + dx},${y + 10} ${96 + dx},${y + 5}`} fill="#33f57a" opacity={i < 2 ? "0.3" : "1"} />
      ))}
    </g>
  );
}

// Badge 1: Fuel the Grind — Monster claw mark
function FuelTheGrindBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="ftg" />
      <MedalRing id="ftg" />
      {/* Three claw slashes — the Monster M */}
      <path d="M 72 62 L 62 105 L 70 102 L 60 138" stroke="#33f57a" strokeWidth="8" strokeLinecap="round" filter="url(#glow-ftg)" opacity="0.9" />
      <path d="M 88 58 L 78 105 L 86 101 L 76 140" stroke="#33f57a" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
      <path d="M 104 55 L 94 105 L 102 100 L 92 142" stroke="#33f57a" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
      {/* Glow halo behind claws */}
      <path d="M 72 62 L 62 105 L 70 102 L 60 138" stroke="#33f57a" strokeWidth="18" strokeLinecap="round" opacity="0.06" />
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">FUEL THE GRIND</text>
      <TierPips />
    </svg>
  );
}

// Badge 2: Unleash Ranked — lightning bolt + rank arrow
function UnleashRankedBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="ur" />
      <MedalRing id="ur" />
      {/* Upward arrow */}
      <line x1="100" y1="130" x2="100" y2="65" stroke="#33f57a" strokeWidth="3" strokeLinecap="round" />
      <polyline points="84,82 100,65 116,82" fill="none" stroke="#33f57a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-ur)" />
      {/* Lightning bolt */}
      <path d="M 112 68 L 100 96 L 110 96 L 96 132 L 120 92 L 108 92 Z" fill="#33f57a" opacity="0.85" filter="url(#glow-ur)" />
      {/* TOP 250 label */}
      <rect x="70" y="133" width="60" height="16" rx="3" fill="#33f57a" opacity="0.1" stroke="#33f57a" strokeWidth="0.8" />
      <text x="100" y="144" textAnchor="middle" fill="#33f57a" fontSize="8" fontFamily="monospace" fontWeight="900" letterSpacing="1">TOP 250</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">UNLEASH RANKED</text>
      <TierPips />
    </svg>
  );
}

// Badge 3: Monster Marathon — endurance clock
function MonsterMarathonBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="mm" />
      <MedalRing id="mm" />
      {/* Clock face */}
      <circle cx="100" cy="98" r="38" fill="none" stroke="#33f57a" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="98" r="30" fill="none" stroke="#33f57a" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.2" />
      {/* Hour markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const isMaj = i % 3 === 0;
        return <line key={i} x1={100 + (isMaj ? 28 : 32) * Math.cos(rad)} y1={98 + (isMaj ? 28 : 32) * Math.sin(rad)} x2={100 + 38 * Math.cos(rad)} y2={98 + 38 * Math.sin(rad)} stroke="#33f57a" strokeWidth={isMaj ? "1.5" : "0.7"} opacity={isMaj ? "0.6" : "0.2"} />;
      })}
      {/* Hands — pointing to 10:10 (classic watch pose) */}
      <line x1="100" y1="98" x2="84" y2="80" stroke="#33f57a" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow-mm)" />
      <line x1="100" y1="98" x2="116" y2="80" stroke="#33f57a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="100" y1="98" x2="100" y2="112" stroke="#33f57a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="100" cy="98" r="3.5" fill="#33f57a" opacity="0.9" />
      {/* 50H label */}
      <text x="100" y="142" textAnchor="middle" fill="#33f57a" fontSize="14" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="-0.5" filter="url(#glow-mm)">50H</text>
      <text x="100" y="153" textAnchor="middle" fill="#33f57a" fontSize="6" fontFamily="monospace" opacity="0.45">MONTHLY TARGET</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">MONSTER MARATHON</text>
      <TierPips />
    </svg>
  );
}

// Badge 4: Squad Fueled — trio
function SquadFueledBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="sf" />
      <MedalRing id="sf" />
      {/* Three player silhouettes */}
      {/* Center (tallest) */}
      <circle cx="100" cy="72" r="11" fill="#33f57a" opacity="0.9" filter="url(#glow-sf)" />
      <path d="M 82 110 Q 82 92 100 92 Q 118 92 118 110" fill="#33f57a" opacity="0.9" filter="url(#glow-sf)" />
      {/* Left */}
      <circle cx="72" cy="78" r="9" fill="#33f57a" opacity="0.55" />
      <path d="M 57 113 Q 57 97 72 97 Q 87 97 87 113" fill="#33f57a" opacity="0.45" />
      {/* Right */}
      <circle cx="128" cy="78" r="9" fill="#33f57a" opacity="0.55" />
      <path d="M 113 113 Q 113 97 128 97 Q 143 97 143 113" fill="#33f57a" opacity="0.45" />
      {/* Squad line connecting them */}
      <line x1="72" y1="113" x2="128" y2="113" stroke="#33f57a" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
      {/* x3 label */}
      <rect x="78" y="122" width="44" height="16" rx="3" fill="#33f57a" opacity="0.1" stroke="#33f57a" strokeWidth="0.8" />
      <text x="100" y="133" textAnchor="middle" fill="#33f57a" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="1">SQUAD x3</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">SQUAD FUELED</text>
      <TierPips />
    </svg>
  );
}

// Badge 5: Next Campaign — question mark / teaser
function NextCampaignBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="nc" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="#33f57a" strokeWidth="0.8" opacity="0.1" strokeDasharray="2 8" />
      <MedalRing id="nc" r={86} />
      <text x="100" y="118" textAnchor="middle" fill="#33f57a" fontSize="52" fontFamily="Inter,sans-serif" fontWeight="900" opacity="0.7" filter="url(#glow-nc)">?</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">NEXT CAMPAIGN</text>
      <TierPips />
    </svg>
  );
}

const badges: Record<BadgeSlug, React.FC> = {
  "fuel-the-grind": FuelTheGrindBadge,
  "unleash-ranked": UnleashRankedBadge,
  "monster-marathon": MonsterMarathonBadge,
  "squad-fueled": SquadFueledBadge,
  "next-campaign": NextCampaignBadge,
};

export default function QuestBadge({ slug }: { slug: string }) {
  const Badge = badges[slug as BadgeSlug];
  if (!Badge) return null;
  return <Badge />;
}
```
- [ ] Commit: `git add . && git commit -m "feat: QuestBadge and Countdown components"`

---

## Task 8: Navbar + Footer

- [ ] Create `src/components/Navbar.tsx` (identical to ENBD — update "Get Started" href to `#quest`):
  Copy from `/Users/og/Desktop/Claude/enbd-games-gg-landing/src/components/Navbar.tsx`
  Change `href="#waitlist"` to `href="#quest"` on the Get Started button (both desktop and mobile).

- [ ] Create `src/components/Footer.tsx`:
```tsx
import Image from "next/image";

const columns = [
  {
    heading: "Campaign",
    links: [
      { label: "Quest Board", href: "#quest" },
      { label: "The Prize", href: "#prize" },
      { label: "Get Started", href: "#quest" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "News", href: "#news" },
      { label: "Merch", href: "#merch" },
      { label: "GAMES+", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-2 space-y-5">
          <Image src="/gamesgg-logo.png" alt="GAMES.GG" width={100} height={24} className="object-contain h-6 w-auto" />
          <p className="text-on-surface-variant text-xs leading-relaxed max-w-[280px]">
            Monster Energy x GAMES.GG. Play. Prove it. Win.
          </p>
          {/* Monster Energy inline SVG logo mark */}
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
              <path d="M 10 4 L 7 16 L 11 14.5 L 8 28" stroke="#33f57a" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 16 3 L 13 16 L 17 14.5 L 14 29" stroke="#33f57a" strokeWidth="3.5" strokeLinecap="round" opacity="0.65" />
              <path d="M 22 4 L 19 16 L 23 14.5 L 20 28" stroke="#33f57a" strokeWidth="3.5" strokeLinecap="round" opacity="0.4" />
            </svg>
            <span className="text-on-surface-variant text-xs font-black uppercase tracking-widest opacity-70">Monster Energy</span>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.heading} className="space-y-4">
            <h6 className="font-black text-white uppercase text-[9px] tracking-[0.3em]">{col.heading}</h6>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">2026 GAMES.GG x Monster Energy. All rights reserved.</p>
        <p className="text-[9px] text-on-surface-variant/50 font-bold uppercase tracking-[0.15em]">Monster Energy is a registered trademark of Monster Beverage Corporation.</p>
      </div>
    </footer>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: Navbar and Footer"`

---

## Task 9: Hero

- [ ] Create `src/components/Hero.tsx`:
```tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } } };

function MonsterLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 14 6 L 10 24 L 16 22 L 12 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" />
      <path d="M 24 4 L 20 24 L 26 22 L 22 44" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
      <path d="M 34 6 L 30 24 L 36 22 L 32 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

function HeroCan() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative flex justify-center w-full"
    >
      <div className="absolute inset-0 bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <motion.div
        initial={{ rotate: -8 }}
        animate={{ rotate: -8 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 cursor-pointer drop-shadow-2xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=800&q=90"
          alt="Monster Energy"
          width={480}
          height={640}
          className="w-[280px] sm:w-[360px] rounded-2xl object-cover"
          priority
        />
        {/* Green glow overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative min-h-screen bg-background flex items-center pt-20 overflow-hidden">
      {/* Subtle scanline texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,245,122,0.5) 2px, rgba(51,245,122,0.5) 3px)", backgroundSize: "100% 4px" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="md:col-span-7 space-y-6 md:space-y-8">
            <motion.div variants={fadeUp}>
              <MonsterLogo />
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-black text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] tight-tracking leading-[0.9] text-white uppercase">
              Fuel your<br />
              <span className="text-primary text-glow">game.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-on-surface-variant text-base md:text-lg max-w-lg leading-relaxed">
              Play Call of Duty. Verify your Steam hours. Win a Monster Gaming PC worth $3,500. The quest is live now.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-xl" id="cta">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-surface border border-white/8 rounded-none px-5 py-3.5 md:px-7 md:py-4 text-white placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <a href="#quest" className="bg-primary text-black font-black px-6 py-3.5 md:px-8 md:py-4 uppercase tracking-widest text-[10px] rounded-none hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all active:scale-95 whitespace-nowrap text-center">
                Start the Quest
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-on-surface-variant text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-primary inline-block" />
              3,841 players on the quest
            </motion.p>
          </motion.div>
          <div className="hidden md:col-span-5 md:flex justify-center">
            <HeroCan />
          </div>
        </div>
      </div>
    </section>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: Hero section"`

---

## Task 10: QuestBoard

- [ ] Create `src/components/QuestBoard.tsx` — adapt from ENBD QuestBoard.tsx with Monster quest data:
  - Import quests from `@/lib/quests`
  - Keep identical card layout, scroll behavior, arrow buttons
  - Section heading: "ACTIVE QUESTS." / eyebrow: "Play"
  - All accent colors: primary green only
  - Locked quests show `opacity-55`

Full component (key changes from ENBD highlighted):
```tsx
"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, Trophy, ArrowRight } from "@phosphor-icons/react";
import { quests } from "@/lib/quests";

const avatarIds = [12, 27, 43];

export default function QuestBoard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [atStart, setAtStart] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 364 : -364, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 10);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  return (
    <section id="quest" className="py-14 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">Play</p>
            <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase">Active Quests.</h2>
            <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">Complete quests to earn XP, badges, and entry into the Monster Gaming PC raffle.</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll("left")} disabled={atStart} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-white/25 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed rotate-180" aria-label="Scroll left"><ArrowRight size={16} /></button>
            <button onClick={() => scroll("right")} disabled={atEnd} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-white/25 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Scroll right"><ArrowRight size={16} /></button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef} onScroll={onScroll}
        className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pl-6 lg:pl-[max(24px,calc((100vw-80rem)/2+24px))] pr-6 py-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", overscrollBehaviorX: "contain" } as React.CSSProperties}
      >
        {quests.map((quest, i) => {
          const isLocked = quest.status === "locked";
          const isBoss = quest.isBoss;
          return (
            <Link href={`/quests/${quest.slug}`} key={quest.slug}>
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={["relative rounded-2xl overflow-hidden bg-background border flex flex-col group cursor-pointer transition-all flex-shrink-0 w-[340px] h-[480px]", isBoss ? "border-primary/25" : "border-primary/15", isLocked ? "opacity-55" : "hover:border-white/20"].join(" ")}
              >
                <div className="flex justify-between items-center px-4 py-3 bg-white/3 border-b border-white/5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">{quest.deadline}</span>
                  <span className={["text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border", isLocked ? "bg-white/8 text-on-surface-variant border-white/10" : "bg-primary/15 text-primary border-primary/25"].join(" ")}>
                    {isBoss ? "COMING SOON" : isLocked ? "LOCKED" : "ACTIVE"}
                  </span>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={quest.badgeImage} alt={quest.title} fill className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-700" sizes="340px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                        {isBoss ? <Trophy size={22} className="text-primary" /> : <Lock size={20} className="text-on-surface-variant" />}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary">+{quest.xpTotal} XP</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    {quest.enrolled ? (
                      <>
                        <div className="flex -space-x-1.5">
                          {avatarIds.map((n) => (
                            <Image key={n} src={`https://i.pravatar.cc/20?img=${n}`} alt="Player" width={20} height={20} className="w-5 h-5 rounded-full border-2 border-background object-cover flex-shrink-0" />
                          ))}
                        </div>
                        <span className="text-[10px] text-on-surface-variant font-bold">+{quest.enrolled} on quest</span>
                      </>
                    ) : (
                      <span className="text-[10px] text-on-surface-variant/50 font-bold uppercase tracking-widest">Locked</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black uppercase leading-tight mb-1.5 text-white">{quest.title}</h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">{quest.description}</p>
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary">Reward: {quest.badge}</p>
                  <div className="pt-3 border-t border-white/5">
                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2">
                      <span className="text-on-surface-variant">Missions</span>
                      <span className="text-primary">0 / {quest.missions.length}</span>
                    </div>
                    <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
        <div className="flex-shrink-0 w-6" />
      </div>
    </section>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: QuestBoard"`

---

## Task 11: HowItWorks

- [ ] Create `src/components/HowItWorks.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "01", title: "Connect",
    description: "Link your Steam account to GAMES.GG. Your public playtime syncs automatically. No screenshots. No manual entry.",
    detail: "Steam OpenID. Takes 60 seconds.",
    href: "#quest",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1600&q=90",
  },
  {
    step: "02", title: "Prove It",
    description: "Verify 10 or more hours in Call of Duty on Steam. The platform reads your stats live. Your grind speaks for itself.",
    detail: "Verified via Steam API.",
    href: "#quest",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=90",
  },
  {
    step: "03", title: "Win",
    description: "Complete all five quest missions and enter the Monster Gaming PC raffle. One winner. RTX 4080. Monster-branded. Yours.",
    detail: "Raffle closes Aug 31, 2026.",
    href: "#prize",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1600&q=90",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-background px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">How It Works</p>
            <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase leading-tight">Play. Prove it. Win.</h2>
          </motion.div>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {steps.map(({ step, title, description, detail, href, image }) => (
            <motion.a key={step} href={href} variants={cardVariants} className="group relative overflow-hidden rounded-2xl border border-white/8 hover:border-white/15 transition-all cursor-pointer" style={{ minHeight: "380px" }}>
              <Image src={image} alt={title} fill className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute top-5 right-6 font-black text-[5rem] leading-none select-none pointer-events-none text-primary opacity-[0.07]">{step}</div>
              <div className="absolute inset-0 p-7 flex flex-col justify-end gap-3">
                <div className="h-0.5 w-10 bg-primary mb-1" />
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-on-surface-variant">Step {step}</p>
                <h3 className="font-black text-4xl text-white uppercase tight-tracking leading-none">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60">{detail}</p>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Explore →</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: HowItWorks section"`

---

## Task 12: PrizeReveal

- [ ] Create `src/components/PrizeReveal.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Cpu, HardDrive, Keyboard, Mouse, Package, GameController } from "@phosphor-icons/react";

const prizes = [
  { Icon: Monitor, label: "240Hz Gaming Monitor", description: "27-inch QHD, 1ms response time. Every frame counts." },
  { Icon: Cpu, label: "RTX 4080 + 32GB RAM", description: "Top-spec GPU. 32GB DDR5. Runs anything at max settings." },
  { Icon: HardDrive, label: "2TB NVMe SSD", description: "Fast storage. No load screens worth complaining about." },
  { Icon: Keyboard, label: "Monster Energy Mechanical Keyboard", description: "Custom Monster-branded. RGB. Full-size. Tactile switches." },
  { Icon: Mouse, label: "Monster Energy Gaming Mouse", description: "25,600 DPI optical sensor. Lightweight. Claw mark finish." },
  { Icon: Package, label: "Monster Energy Merch Bundle", description: "Snapback cap, hoodie, backpack. Black and green, no exceptions." },
  { Icon: GameController, label: "Exclusive COD Operator Skin", description: "Monster Energy skin for Black Ops 7. Claw mark armor. Claim on completion." },
];

export default function PrizeReveal() {
  return (
    <section id="prize" className="py-14 md:py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
          <motion.div initial={{ rotate: -12 }} whileInView={{ rotate: -12 }} whileHover={{ rotate: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10 cursor-pointer drop-shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=90"
              alt="Monster Gaming PC"
              width={600}
              height={480}
              className="w-full max-w-[340px] sm:max-w-[460px] rounded-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1">$3,500 VALUE</div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} className="space-y-10">
          <div className="space-y-4">
            <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">The Prize</p>
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tight-tracking text-white leading-[0.9] uppercase">Monster Gaming PC.</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">Custom-built. Monster-branded. Complete the Fuel the Grind quest to enter the raffle. One winner takes everything below.</p>
          </div>
          <ul className="space-y-6">
            {prizes.map(({ Icon, label, description }, i) => (
              <motion.li key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }} className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-full bg-primary/8 flex items-center justify-center border border-primary/15 flex-shrink-0 mt-0.5">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-black text-white text-base uppercase">{label}</h5>
                  <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">{description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.a href="#quest" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="inline-block bg-primary text-black font-black px-10 py-4 uppercase tracking-widest text-[10px] hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all active:scale-95">
            Start the Quest
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: PrizeReveal section"`

---

## Task 13: NewsHub

- [ ] Create `src/components/NewsHub.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { articles } from "@/lib/news";

export default function NewsHub() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="news" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div>
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">What's Happening</p>
            <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase">Monster Gaming Hub.</h2>
            <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">Campaign updates, esports coverage, product drops, and guides. All in one place.</p>
          </div>
          <Link href="/news/monster-x-black-ops-7" className="flex-shrink-0 inline-flex items-center gap-2 text-[10px] text-primary font-black uppercase tracking-widest hover:text-white transition-colors">
            All News <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Link href={`/news/${featured.slug}`} className="group relative overflow-hidden rounded-2xl bg-background border border-white/8 hover:border-white/15 transition-all cursor-pointer block" style={{ minHeight: "480px" }}>
              <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${featured.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">{featured.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">{featured.date}</span>
                <h3 className="font-black text-white uppercase text-2xl leading-tight">{featured.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-1 text-[9px] text-primary font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Read More <span>→</span></div>
              </div>
            </Link>
          </motion.div>

          {/* Stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <motion.div key={article.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}>
                <Link href={`/news/${article.slug}`} className="group relative overflow-hidden rounded-2xl bg-background border border-white/8 hover:border-white/15 transition-all cursor-pointer flex-1 block" style={{ minHeight: "100px" }}>
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${article.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                  <div className="relative p-4 flex items-center gap-4 h-full">
                    <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden rounded">
                      <Image src={article.image} alt={article.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">{article.category}</span>
                        <span className="text-[9px] font-black text-on-surface-variant/50 uppercase tracking-widest">{article.date}</span>
                      </div>
                      <h4 className="font-black text-white uppercase text-sm leading-tight line-clamp-2">{article.title}</h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: NewsHub section"`

---

## Task 14: MerchShelf + FinalCTA

- [ ] Create `src/components/MerchShelf.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { name: "Monster Energy Original", category: "DRINK", image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=600&q=90", inPrizePool: true },
  { name: "Monster Energy Ultra White", category: "DRINK", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=90", inPrizePool: true },
  { name: "Monster Energy Ultra Watermelon", category: "DRINK", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=90", inPrizePool: true },
  { name: "Monster Energy Snapback Cap", category: "MERCH", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=90", inPrizePool: true },
  { name: "Monster Energy Hoodie", category: "MERCH", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=90", inPrizePool: true },
  { name: "Monster Energy Backpack", category: "MERCH", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=90", inPrizePool: true },
];

export default function MerchShelf() {
  return (
    <section id="merch" className="py-14 md:py-20 bg-background px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">Prizes + Merch</p>
          <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase">In the Prize Pool.</h2>
          <p className="text-on-surface-variant text-sm mt-3 leading-relaxed max-w-lg">Every item below is included in quest prize draws. Complete quests to win drinks, merch, and the full gaming PC bundle.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, i) => (
            <motion.div key={product.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="group relative rounded-2xl overflow-hidden bg-surface border border-white/8 hover:border-primary/25 transition-all">
              <div className="relative aspect-square overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {product.inPrizePool && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-black text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5">PRIZE</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">{product.category}</p>
                <p className="text-white font-black text-xs uppercase leading-tight">{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] Create `src/components/FinalCTA.tsx`:
```tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div className="space-y-8" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="space-y-4">
            <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">Ready?</p>
            <h2 className="font-black text-5xl md:text-7xl tight-tracking text-white uppercase leading-[0.9]">
              Your grind<br /><span className="text-primary text-glow">starts now.</span>
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Create your GAMES.GG profile, connect Steam, and start the quest. The Monster Gaming PC raffle closes August 31.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-background border border-white/8 rounded-none px-5 py-3.5 md:px-7 md:py-4 text-white placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors text-sm" />
            <a href="#quest" className="bg-primary text-black font-black px-8 py-3.5 md:py-4 uppercase tracking-widest text-[10px] rounded-none hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all active:scale-95 whitespace-nowrap text-center">
              Get Started
            </a>
          </div>
          <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-none bg-primary inline-block" />
            3,841 players already on the quest
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: MerchShelf and FinalCTA sections"`

---

## Task 15: Quest detail page

- [ ] Create `src/app/quests/[slug]/page.tsx` — adapt from ENBD. Key changes:
  - Import `getQuest`, `quests` from `@/lib/quests`
  - Sponsor logo: inline SVG Monster claw mark (same as Footer) instead of ENBD logo PNG
  - Raffle prize label: "Monster Gaming PC" for `fuel-the-grind`, "Monster Merch Bundle" for others
  - CTA button text: "Start the Quest" linking to `/#quest`
  - All colors: primary green only (no yellow anywhere)

Full file:
```tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { Lock, ArrowLeft, Gift } from "@phosphor-icons/react/dist/ssr";
import { getQuest, quests } from "@/lib/quests";
import Countdown from "@/components/Countdown";
import QuestBadge from "@/components/QuestBadge";

export function generateStaticParams() {
  return quests.map((q) => ({ slug: q.slug }));
}

export default async function QuestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quest = getQuest(slug);
  if (!quest) notFound();

  const isLocked = quest.status === "locked";
  const totalXP = quest.missions.reduce((sum, m) => sum + m.xp, 0);

  const raffleDate = new Date(quest.raffleDate).toLocaleString("en-AE", {
    month: "2-digit", day: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  });

  const prizeLabel = quest.slug === "fuel-the-grind" ? "Monster Gaming PC" : "Monster Merch Bundle";

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 pt-16 overflow-hidden">
        <Image src={quest.badgeImage} alt={quest.title} fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 -mt-8 mb-8 relative z-10">
        <a href="/#quest" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
          <ArrowLeft size={12} /> Back to Quests
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              {isLocked ? (
                <span className="text-[9px] font-black uppercase tracking-widest bg-white/8 border border-white/15 text-on-surface-variant px-3 py-1 rounded-full">Locked</span>
              ) : (
                <span className="text-[9px] font-black uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-3 py-1 rounded-full">Active</span>
              )}
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">{quest.deadline}</span>
            </div>

            <div>
              <h1 className="font-black text-4xl md:text-5xl tight-tracking uppercase leading-tight mb-5 text-white">{quest.title}</h1>
              <div className="flex items-center gap-3 mb-5">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <path d="M 14 6 L 10 24 L 16 22 L 12 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 24 4 L 20 24 L 26 22 L 22 44" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
                  <path d="M 34 6 L 30 24 L 36 22 L 32 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                </svg>
                <span className="text-sm font-black text-on-surface-variant uppercase tracking-widest">Monster Energy</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">{quest.description}</p>
            </div>

            {quest.enrolled && (
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {[12, 27, 43].map((n) => (
                    <Image key={n} src={`https://i.pravatar.cc/28?img=${n}`} alt="Player" width={28} height={28} className="w-7 h-7 rounded-full border-2 border-background object-cover" />
                  ))}
                </div>
                <span className="text-sm text-on-surface-variant font-black">+{quest.enrolled} completing</span>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-black text-white text-xl uppercase tight-tracking">Missions</h2>
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">0 / {totalXP} XP</span>
              </div>
              <div className="h-1 bg-white/8 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
              </div>
              <div className="space-y-2">
                {quest.missions.map((mission) => (
                  <div key={mission.id} className={["flex items-center gap-4 px-4 py-4 border rounded-xl transition-all", mission.locked ? "bg-surface border-white/5 opacity-50" : "bg-surface border-white/8 hover:border-primary/20"].join(" ")}>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-[9px] font-black">XP</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={["font-black text-sm uppercase tracking-wide", mission.locked ? "text-on-surface-variant" : "text-white"].join(" ")}>{mission.title}</p>
                      {mission.tag && <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-0.5">{mission.tag}</p>}
                    </div>
                    <div className="flex-shrink-0">
                      {mission.locked ? <Lock size={16} className="text-on-surface-variant/50" /> : <span className="text-[10px] font-black text-primary uppercase tracking-widest">+{mission.xp} XP</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-surface border border-white/8 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Gift size={16} className="text-primary" />
                  <h3 className="font-black text-white uppercase text-sm tracking-wide">Rewards</h3>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest bg-white/8 border border-white/10 px-2.5 py-1 text-on-surface-variant rounded-full">0 / 1 CLAIMED</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-white uppercase tracking-wide">XP Points</span>
                  <span className="text-xl font-black tight-tracking text-primary">+{quest.xpTotal}</span>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center p-6 bg-background border border-primary/10">
                  <QuestBadge slug={quest.slug} />
                </div>
              </div>
            </div>

            <div className="bg-surface border border-white/8 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <h3 className="font-black text-white uppercase text-sm tracking-wide">Prize Raffle</h3>
                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">{quest.raffleWinners} WINNER{quest.raffleWinners > 1 ? "S" : ""}</span>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Raffle Date</p>
                  <p className="text-xs font-black text-white">{raffleDate}</p>
                </div>
                <Countdown target={quest.raffleDate} />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-3">Raffle Prize</p>
                  <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-white/5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-surface border border-white/8 p-1">
                      <QuestBadge slug={quest.slug} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-xs text-white uppercase truncate">{prizeLabel}</p>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full flex-shrink-0 bg-primary/15 border border-primary/30 text-primary">{quest.raffleWinners}W</span>
                  </div>
                </div>
              </div>
            </div>

            {isLocked ? (
              <div className="bg-surface border border-white/8 rounded-2xl p-5 text-center space-y-2">
                <Lock size={20} className="text-on-surface-variant mx-auto" />
                <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">{quest.deadline}</p>
              </div>
            ) : (
              <a href="/#quest" className="block w-full text-center bg-primary text-black font-black py-4 text-[10px] uppercase tracking-widest rounded-none hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all">
                Start the Quest
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: quest detail pages"`

---

## Task 16: News article page

- [ ] Create `src/app/news/[slug]/page.tsx`:
```tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { getArticle, articles } from "@/lib/news";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-72 pt-16 overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 -mt-12 relative z-10 pb-24">
        <Link href="/#news" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8 block">
          <ArrowLeft size={12} /> Back to News
        </Link>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-primary text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">{article.category}</span>
            <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">{article.date}</span>
          </div>

          <h1 className="font-black text-3xl md:text-5xl tight-tracking uppercase leading-tight text-white">{article.title}</h1>

          <p className="text-on-surface-variant text-base leading-relaxed border-l-2 border-primary pl-4">{article.excerpt}</p>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image src={article.image} alt={article.title} fill className="object-cover opacity-60" />
          </div>

          <div
            className="prose-monster text-on-surface-variant leading-relaxed space-y-4 [&_h2]:font-black [&_h2]:text-white [&_h2]:uppercase [&_h2]:text-xl [&_h2]:tight-tracking [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-on-surface-variant [&_p]:leading-relaxed [&_p]:text-sm"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-white/8">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-4">Continue Reading</p>
          <Link href="/#news" className="inline-flex items-center gap-2 bg-primary text-black font-black px-6 py-3 text-[10px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all">
            Back to Monster Gaming Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
```
- [ ] Commit: `git add . && git commit -m "feat: news article pages"`

---

## Task 17: Public assets + final wiring

- [ ] Copy `gamesgg-logo.png` from ENBD project:
```bash
cp /Users/og/Desktop/Claude/enbd-games-gg-landing/public/gamesgg-logo.png /Users/og/Desktop/Claude/monster-games-gg-landing/public/gamesgg-logo.png
```
- [ ] Copy favicon:
```bash
cp /Users/og/Desktop/Claude/enbd-games-gg-landing/public/favicon.png /Users/og/Desktop/Claude/monster-games-gg-landing/public/favicon.png 2>/dev/null || true
```
- [ ] Verify dev server runs:
```bash
cd /Users/og/Desktop/Claude/monster-games-gg-landing && npm run dev
```
- [ ] Fix any TypeScript errors
- [ ] Final commit: `git add . && git commit -m "feat: public assets and final wiring — Monster Energy x GAMES.GG v1"`
