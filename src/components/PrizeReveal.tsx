"use client";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        {/* PC visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
          <motion.div
            initial={{ rotate: -12 }}
            whileInView={{ rotate: -12 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 cursor-pointer drop-shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=90"
              alt="Monster Gaming PC"
              width={600}
              height={480}
              className="w-full max-w-[340px] sm:max-w-[460px] rounded-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1">
              $3,500 VALUE
            </div>
          </motion.div>
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
            <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">The Prize</p>
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tight-tracking text-white leading-[0.9] uppercase">
              Monster Gaming PC.
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Custom-built. Monster-branded. Complete the Fuel the Grind quest before August 31 to enter the raffle.
              One winner takes everything below.
            </p>
          </div>

          <ul className="space-y-6">
            {prizes.map(({ Icon, label, description }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                className="flex items-start gap-5"
              >
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
