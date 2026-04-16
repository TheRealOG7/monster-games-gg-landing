"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gaming background image — more visible */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1800&q=90"
          alt=""
          fill
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60" />
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,245,122,0.6) 2px, rgba(51,245,122,0.6) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-xl lg:ml-auto">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <Image
              src="/monster-logo.png"
              alt="Monster Energy"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
            />

            <div>
              <h2 className="font-black text-5xl md:text-6xl tight-tracking uppercase leading-[0.88] text-white">
                Stay in{" "}
                <span className="text-primary text-glow">the game.</span>
              </h2>
              <p className="text-on-surface-variant text-sm mt-4 leading-relaxed max-w-sm">
                Get early access to quests, product drops, and Monster Energy gaming updates. No spam.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-primary"
              >
                <span className="w-2 h-2 bg-primary rounded-none animate-pulse" />
                <span className="font-black text-sm uppercase tracking-widest">
                  You're in. We'll be in touch.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-black/70 border border-primary/60 px-5 py-4 text-white placeholder:text-on-surface-variant/50 outline-none focus:border-primary text-sm font-medium transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-black px-5 flex items-center justify-center hover:bg-white transition-colors active:scale-95"
                  aria-label="Subscribe"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
