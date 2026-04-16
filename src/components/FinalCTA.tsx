"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 md:py-32 bg-surface border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">Ready?</p>
            <h2 className="font-black text-5xl md:text-7xl tight-tracking text-white uppercase leading-[0.9]">
              Your grind
              <br />
              <span className="text-primary text-glow">starts now.</span>
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Create your GAMES.GG profile, connect Steam, and start the quest.
              The Monster Gaming PC raffle closes August 31.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border border-white/8 rounded-none px-5 py-3.5 md:px-7 md:py-4 text-white placeholder:text-on-surface-variant/50 outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <a
              href="#quest"
              className="bg-primary text-black font-black px-8 py-3.5 md:py-4 uppercase tracking-widest text-[10px] rounded-none hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all active:scale-95 whitespace-nowrap text-center"
            >
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
