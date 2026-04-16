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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">Play</p>
            <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase">
              Active Quests.
            </h2>
            <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">
              Complete quests to earn XP, badges, and entry into the Monster Gaming PC raffle.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={atStart}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-white/25 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed rotate-180"
              aria-label="Scroll left"
            >
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={atEnd}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-white/25 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pl-6 lg:pl-[max(24px,calc((100vw-80rem)/2+24px))] pr-6 py-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", overscrollBehaviorX: "contain" } as React.CSSProperties}
      >
        {quests.map((quest, i) => {
          const isLocked = quest.status === "locked";
          const isBoss = quest.isBoss;

          return (
            <Link href={`/quests/${quest.slug}`} key={quest.slug}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={[
                  "relative rounded-2xl overflow-hidden bg-background border flex flex-col group cursor-pointer transition-all flex-shrink-0 w-[340px] h-[480px]",
                  isBoss ? "border-primary/25" : "border-primary/15",
                  isLocked ? "opacity-55" : "hover:border-white/20",
                ].join(" ")}
              >
                <div className="flex justify-between items-center px-4 py-3 bg-white/3 border-b border-white/5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant">
                    {quest.deadline}
                  </span>
                  <span
                    className={[
                      "text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border",
                      isLocked
                        ? "bg-white/8 text-on-surface-variant border-white/10"
                        : "bg-primary/15 text-primary border-primary/25",
                    ].join(" ")}
                  >
                    {isBoss ? "COMING SOON" : isLocked ? "LOCKED" : "ACTIVE"}
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={quest.badgeImage}
                    alt={quest.title}
                    fill
                    className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                        {isBoss ? (
                          <Trophy size={22} className="text-primary" />
                        ) : (
                          <Lock size={20} className="text-on-surface-variant" />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary">
                      +{quest.xpTotal} XP
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    {quest.enrolled ? (
                      <>
                        <div className="flex -space-x-1.5">
                          {avatarIds.map((n) => (
                            <Image
                              key={n}
                              src={`https://i.pravatar.cc/20?img=${n}`}
                              alt="Player"
                              width={20}
                              height={20}
                              className="w-5 h-5 rounded-full border-2 border-background object-cover flex-shrink-0"
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-on-surface-variant font-bold">
                          +{quest.enrolled} on quest
                        </span>
                      </>
                    ) : (
                      <span className="text-[10px] text-on-surface-variant/50 font-bold uppercase tracking-widest">
                        Locked
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black uppercase leading-tight mb-1.5 text-white">
                      {quest.title}
                    </h3>
                    <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                      {quest.description}
                    </p>
                  </div>

                  <p className="text-[9px] font-black uppercase tracking-widest text-primary">
                    Reward: {quest.badge}
                  </p>

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
