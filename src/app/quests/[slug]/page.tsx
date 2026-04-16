import { notFound } from "next/navigation";
import Image from "next/image";
import { Lock, ArrowLeft, Gift } from "@phosphor-icons/react/dist/ssr";
import { getQuest, quests } from "@/lib/quests";
import Countdown from "@/components/Countdown";
import QuestBadge from "@/components/QuestBadge";

export function generateStaticParams() {
  return quests.map((q) => ({ slug: q.slug }));
}

export default async function QuestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quest = getQuest(slug);
  if (!quest) notFound();

  const isLocked = quest.status === "locked";
  const totalXP = quest.missions.reduce((sum, m) => sum + m.xp, 0);

  const raffleDate = new Date(quest.raffleDate).toLocaleString("en-AE", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const prizeLabel =
    quest.slug === "fuel-the-grind"
      ? "Monster Gaming PC"
      : quest.slug === "unleash-ranked"
      ? "Monster x GAMES.GG Jersey"
      : quest.slug === "monster-marathon"
      ? "Monster Energy 24-Can Bundle"
      : quest.slug === "squad-fueled"
      ? "Monster Energy Gaming Headset"
      : "Monster Merch Bundle";

  return (
    <div className="min-h-screen bg-background">
      {/* Header banner */}
      <div className="relative h-64 pt-16 overflow-hidden">
        <Image
          src={quest.badgeImage}
          alt={quest.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 -mt-8 mb-8 relative z-10">
        <a
          href="/#quest"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
        >
          <ArrowLeft size={12} /> Back to Quests
        </a>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              {isLocked ? (
                <span className="text-[9px] font-black uppercase tracking-widest bg-white/8 border border-white/15 text-on-surface-variant px-3 py-1 rounded-full">
                  Locked
                </span>
              ) : (
                <span className="text-[9px] font-black uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-3 py-1 rounded-full">
                  Active
                </span>
              )}
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">
                {quest.deadline}
              </span>
            </div>

            <div>
              <h1 className="font-black text-4xl md:text-5xl tight-tracking uppercase leading-tight mb-5 text-white">
                {quest.title}
              </h1>

              {/* Sponsor mark */}
              <div className="flex items-center gap-3 mb-5">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <path d="M 14 6 L 10 24 L 16 22 L 12 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" />
                  <path d="M 24 4 L 20 24 L 26 22 L 22 44" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
                  <path d="M 34 6 L 30 24 L 36 22 L 32 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                </svg>
                <span className="text-sm font-black text-on-surface-variant uppercase tracking-widest">
                  Monster Energy
                </span>
              </div>

              <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">
                {quest.description}
              </p>
            </div>

            {quest.enrolled && (
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {[12, 27, 43].map((n) => (
                    <Image
                      key={n}
                      src={`https://i.pravatar.cc/28?img=${n}`}
                      alt="Player"
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <span className="text-sm text-on-surface-variant font-black">
                  +{quest.enrolled} completing
                </span>
              </div>
            )}

            {/* Missions */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-black text-white text-xl uppercase tight-tracking">Missions</h2>
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                  0 / {totalXP} XP
                </span>
              </div>
              <div className="h-1 bg-white/8 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
              </div>

              <div className="space-y-2">
                {quest.missions.map((mission) => (
                  <div
                    key={mission.id}
                    className={[
                      "flex items-center gap-4 px-4 py-4 border rounded-xl transition-all",
                      mission.locked
                        ? "bg-surface border-white/5 opacity-50"
                        : "bg-surface border-white/8 hover:border-primary/20",
                    ].join(" ")}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-[9px] font-black">XP</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={[
                          "font-black text-sm uppercase tracking-wide",
                          mission.locked ? "text-on-surface-variant" : "text-white",
                        ].join(" ")}
                      >
                        {mission.title}
                      </p>
                      {mission.tag && (
                        <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-0.5">
                          {mission.tag}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      {mission.locked ? (
                        <Lock size={16} className="text-on-surface-variant/50" />
                      ) : (
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                          +{mission.xp} XP
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {/* Rewards card */}
            <div className="bg-surface border border-white/8 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Gift size={16} className="text-primary" />
                  <h3 className="font-black text-white uppercase text-sm tracking-wide">Rewards</h3>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest bg-white/8 border border-white/10 px-2.5 py-1 text-on-surface-variant rounded-full">
                  0 / 1 CLAIMED
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-white uppercase tracking-wide">XP Points</span>
                  <span className="text-xl font-black tight-tracking text-primary">
                    +{quest.xpTotal}
                  </span>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center p-6 bg-background border border-primary/10">
                  <QuestBadge slug={quest.slug} />
                </div>
              </div>
            </div>

            {/* Prize raffle card */}
            <div className="bg-surface border border-white/8 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <h3 className="font-black text-white uppercase text-sm tracking-wide">Prize Raffle</h3>
                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">
                  {quest.raffleWinners} WINNER{quest.raffleWinners > 1 ? "S" : ""}
                </span>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1">
                    Raffle Date
                  </p>
                  <p className="text-xs font-black text-white">{raffleDate}</p>
                </div>

                <Countdown target={quest.raffleDate} />

                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-3">
                    Raffle Prize
                  </p>
                  <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-white/5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-surface border border-white/8 p-1">
                      <QuestBadge slug={quest.slug} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-xs text-white uppercase truncate">{prizeLabel}</p>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full flex-shrink-0 bg-primary/15 border border-primary/30 text-primary">
                      {quest.raffleWinners}W
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            {isLocked ? (
              <div className="bg-surface border border-white/8 rounded-2xl p-5 text-center space-y-2">
                <Lock size={20} className="text-on-surface-variant mx-auto" />
                <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">
                  {quest.deadline}
                </p>
              </div>
            ) : (
              <a
                href="/#quest"
                className="block w-full text-center bg-primary text-black font-black py-4 text-[10px] uppercase tracking-widest rounded-none hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all"
              >
                Start the Quest
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
