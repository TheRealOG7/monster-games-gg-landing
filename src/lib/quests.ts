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
      { id: "m1", title: "Stay tuned for the next campaign", xp: 0, locked: true },
    ],
    enrolled: null,
  },
];

export function getQuest(slug: string): QuestData | undefined {
  return quests.find((q) => q.slug === slug);
}
