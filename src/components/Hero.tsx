"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

function MonsterLogo() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          className="w-[260px] sm:w-[340px] rounded-2xl object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen bg-background flex items-center pt-20 overflow-hidden">
      {/* Subtle green scanline */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,245,122,0.6) 2px, rgba(51,245,122,0.6) 3px)",
          backgroundSize: "100% 4px",
        }}
      />
      {/* Radial glow from bottom left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="md:col-span-7 space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeUp}>
              <MonsterLogo />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-black text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] tight-tracking leading-[0.9] text-white uppercase"
            >
              Fuel your
              <br />
              <span className="text-primary text-glow">game.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-on-surface-variant text-base md:text-lg max-w-lg leading-relaxed"
            >
              Play Call of Duty. Verify your Steam hours. Win a Monster Gaming PC worth $3,500.
              The quest is live now.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 max-w-xl"
              id="cta"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-surface border border-white/8 rounded-none px-5 py-3.5 md:px-7 md:py-4 text-white placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <a
                href="#quest"
                className="bg-primary text-black font-black px-6 py-3.5 md:px-8 md:py-4 uppercase tracking-widest text-[10px] rounded-none hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all active:scale-95 whitespace-nowrap text-center"
              >
                Start the Quest
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="text-on-surface-variant text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-primary inline-block" />
              3,841 players on the quest
            </motion.p>
          </motion.div>

          {/* Right — hidden on mobile */}
          <div className="hidden md:col-span-5 md:flex justify-center">
            <HeroCan />
          </div>
        </div>
      </div>
    </section>
  );
}
