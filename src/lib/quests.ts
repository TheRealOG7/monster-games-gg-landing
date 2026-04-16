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
  comingSoon?: boolean;
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
      "Prove your grind is real. Connect your gaming account on Steam, PlayStation, or Xbox, verify your Call of Duty hours and complete all missions to enter the Monster Gaming PC raffle.",
    xpTotal: 400,
    badge: "Fuel the Grind Badge",
    badgeImage: "/cod-bo7-squad.png",
    status: "active",
    deadline: "Ends Aug 31, 2026",
    raffleDate: "2026-08-31T20:00:00+04:00",
    raffleWinners: 1,
    missions: [
      {
        id: "m1",
        title: "Connect your gaming account",
        tag: "Steam, PlayStation, and Xbox all supported",
        xp: 50,
      },
      {
        id: "m2",
        title: "Verify 10+ hours in Call of Duty",
        tag: "Auto-verified across PC, PS4/5, and Xbox",
        xp: 100,
      },
      {
        id: "m3",
        title: "Follow @MonsterEnergy on X",
        xp: 50,
      },
      {
        id: "m4",
        title: "Visit cod.monsterenergy.com",
        xp: 200,
      },
    ],
    enrolled: "20,247",
  },
  {
    slug: "unleash-ranked",
    title: "Unleash Ranked",
    description:
      "Put in 100 hours in Call of Duty Ranked Play. This quest is for the players who do not just show up, they grind. Verified via your linked platform account.",
    xpTotal: 750,
    badge: "Unleash Ranked Badge",
    badgeImage: "/cod-soldier.png",
    status: "locked",
    deadline: "Unlocks Sep 1, 2026",
    raffleDate: "2026-11-30T20:00:00+04:00",
    raffleWinners: 3,
    missions: [
      { id: "m1", title: "Connect your gaming account", xp: 50, locked: true },
      { id: "m2", title: "Verify 100+ hours in Call of Duty Ranked", tag: "Auto-verified across PC, PS4/5, and Xbox", xp: 500, locked: true },
      { id: "m3", title: "Follow @MonsterEnergy on X", xp: 50, locked: true },
      { id: "m4", title: "Visit cod.monsterenergy.com", xp: 150, locked: true },
    ],
    enrolled: null,
  },
  {
    slug: "squad-fueled",
    title: "Squad Fueled",
    description:
      "Coming soon. The next Monster Energy quest is loading. Stay tuned.",
    xpTotal: 1000,
    badge: "Squad Fueled Badge",
    badgeImage: "/cod-forest.png",
    status: "locked",
    comingSoon: true,
    deadline: "Coming Soon",
    raffleDate: "2027-01-01T20:00:00+04:00",
    raffleWinners: 5,
    missions: [],
    enrolled: null,
  },
];

export function getQuest(slug: string): QuestData | undefined {
  return quests.find((q) => q.slug === slug);
}
