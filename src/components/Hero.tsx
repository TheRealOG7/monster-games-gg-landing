"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const bgImages = [
  "/cod-bo7-squad.png",
  "/cod-soldier.png",
  "/cod-japan.png",
  "/cod-forest.png",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-background flex items-center pt-14 overflow-hidden">
      {/* Rotating COD backgrounds */}
      <AnimatePresence mode="sync">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={bgImages[bgIndex]}
            alt=""
            fill
            className="object-cover object-center opacity-30"
            priority={bgIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/70 pointer-events-none" />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,245,122,0.6) 2px, rgba(51,245,122,0.6) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Green glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-6 md:space-y-8"
          >
            {/* Monster Energy logo */}
            <motion.div variants={fadeUp}>
              <Image
                src="/monster-logo.png"
                alt="Monster Energy"
                width={540}
                height={168}
                className="h-20 sm:h-28 md:h-32 lg:h-36 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Headline — single line, ~half the previous size */}
            <motion.h1
              variants={fadeUp}
              className="font-black text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] xl:text-[4vw] tight-tracking leading-[0.9] text-white uppercase sm:whitespace-nowrap"
            >
              Fuel your <span className="text-primary text-glow">game.</span>
            </motion.h1>

            {/* Sub — COD BO7 specific */}
            <motion.p
              variants={fadeUp}
              className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-sm"
            >
              Play Call of Duty: Black Ops 7. Verify your hours. Win a Monster Gaming PC worth $3,500.
            </motion.p>

            {/* CTA — single button */}
            <motion.div variants={fadeUp}>
              <a
                href="#quest"
                className="inline-block bg-primary text-black font-black px-9 py-4 uppercase tracking-widest text-[10px] rounded-none hover:shadow-[0_0_32px_rgba(51,245,122,0.4)] transition-all active:scale-95"
              >
                Start the Quest
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p
              variants={fadeUp}
              className="text-on-surface-variant text-xs font-black uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-none bg-primary inline-block animate-pulse" />
              20,247 players completing the quest
            </motion.p>
          </motion.div>

          {/* Right — Quest card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-[380px]">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Card header image — same as quest board */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/cod-bo7-squad.png"
                    alt="Fuel the Grind"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-black text-[8px] font-black uppercase tracking-widest px-2.5 py-1">
                      Active Quest
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 text-primary text-[8px] font-black uppercase tracking-widest px-2.5 py-1 border border-primary/30">
                      500 XP
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Image
                        src="/monster-logo.png"
                        alt="Monster Energy"
                        width={60}
                        height={20}
                        className="h-4 w-auto object-contain opacity-80"
                      />
                    </div>
                    <h3 className="font-black text-white text-xl uppercase tight-tracking">Fuel the Grind</h3>
                    <p className="text-on-surface-variant text-xs mt-1 leading-relaxed">
                      Connect your account, verify your COD hours, and enter the raffle.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: "Connect your gaming account", done: true },
                      { label: "Verify 10+ hours in COD", done: false },
                      { label: "Follow @MonsterEnergy on X", done: false },
                    ].map(({ label, done }) => (
                      <div key={label} className="flex items-center gap-3 text-xs">
                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 ${done ? "bg-primary border-primary" : "border-white/20"}`}>
                          {done && (
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1 4l2 2 4-4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className={done ? "text-white line-through opacity-50" : "text-on-surface-variant"}>{label}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1.5">
                      <span>Progress</span>
                      <span>1 / 4 Missions</span>
                    </div>
                    <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "25%" }} />
                    </div>
                  </div>

                  <a
                    href="#quest"
                    className="block w-full text-center bg-primary text-black font-black py-3 text-[9px] uppercase tracking-widest hover:shadow-[0_0_20px_rgba(51,245,122,0.3)] transition-all"
                  >
                    Start Quest
                  </a>
                </div>
              </div>

              <div className="absolute -top-2 -left-2 w-6 h-6 border-l border-t border-primary/40 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r border-t border-primary/40 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l border-b border-primary/40 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r border-b border-primary/40 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
