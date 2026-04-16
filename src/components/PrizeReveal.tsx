"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Monitor,
  Cpu,
  HardDrive,
  Keyboard,
  Mouse,
  Package,
  GameController,
} from "@phosphor-icons/react";

const prizes = [
  {
    Icon: Monitor,
    label: "240Hz Gaming Monitor",
    description: "27-inch QHD, 1ms response time. Every frame counts.",
  },
  {
    Icon: Cpu,
    label: "RTX 4080 + 32GB RAM",
    description: "Top-spec GPU. 32GB DDR5. Runs anything at max settings.",
  },
  {
    Icon: HardDrive,
    label: "2TB NVMe SSD",
    description: "Fast storage. No load screens worth complaining about.",
  },
  {
    Icon: Keyboard,
    label: "Monster Energy Mechanical Keyboard",
    description: "Custom Monster-branded. RGB. Full-size. Tactile switches.",
  },
  {
    Icon: Mouse,
    label: "Monster Energy Gaming Mouse",
    description: "25,600 DPI optical sensor. Lightweight. Claw mark finish.",
  },
  {
    Icon: Package,
    label: "Monster Energy Merch Bundle",
    description: "Snapback cap, hoodie, backpack. Black and green.",
  },
  {
    Icon: GameController,
    label: "Exclusive COD Operator Skin",
    description: "Monster Energy skin for Black Ops 7. Claim on quest completion.",
  },
];

export default function PrizeReveal() {
  return (
    <section id="prize" className="py-14 md:py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
        {/* PC visual — Monster logo above, then image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          {/* Monster logo above the image */}
          <Image
            src="/monster-logo.png"
            alt="Monster Energy"
            width={200}
            height={62}
            className="h-32 w-auto object-contain"
          />

          {/* PC image with brackets */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-primary pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-10 h-10 border-r-2 border-t-2 border-primary pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 border-l-2 border-b-2 border-primary pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-primary pointer-events-none" />

              <Image
                src="/monster-pc-custom.png"
                alt="Monster Gaming PC"
                width={600}
                height={480}
                className="w-full rounded-xl object-cover"
              />

              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-primary/15 pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1.5">
                  $3,500 VALUE
                </span>
              </div>

              <div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,245,122,1) 2px, rgba(51,245,122,1) 3px)",
                  backgroundSize: "100% 4px",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Prize list */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tight-tracking text-white leading-[0.9] uppercase">
              Gaming PC.
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Custom-built. Monster-branded. Complete the Fuel the Grind quest before August 31 to enter the raffle.
              One winner takes everything below.
            </p>
          </div>

          {/* Desktop: vertical list */}
          <ul className="hidden md:block space-y-5">
            {prizes.map(({ Icon, label, description }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center border border-primary/15 flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-black text-white text-sm uppercase">{label}</h5>
                  <p className="text-on-surface-variant text-xs mt-0.5 leading-relaxed">{description}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Mobile: horizontal scroll cards */}
          <div
            className="md:hidden flex gap-3 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {prizes.map(({ Icon, label, description }) => (
              <div
                key={label}
                className="flex-shrink-0 w-[200px] bg-surface border border-white/8 rounded-xl p-4 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center border border-primary/15 flex-shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-black text-white text-xs uppercase leading-tight">{label}</h5>
                  <p className="text-on-surface-variant text-[11px] mt-1 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.a
            href="#quest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-primary text-black font-black px-10 py-4 uppercase tracking-widest text-[10px] hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all active:scale-95"
          >
            Start the Quest
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
