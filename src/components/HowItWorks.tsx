"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Connect",
    description:
      "Link your Steam account to GAMES.GG. Your public playtime syncs automatically. No screenshots. No manual entry.",
    detail: "Steam OpenID. Takes 60 seconds.",
    href: "#quest",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1600&q=90",
  },
  {
    step: "02",
    title: "Prove It",
    description:
      "Verify 10 or more hours in Call of Duty on Steam. The platform reads your stats live. Your grind speaks for itself.",
    detail: "Verified via Steam API.",
    href: "#quest",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=90",
  },
  {
    step: "03",
    title: "Win",
    description:
      "Complete all five quest missions and enter the Monster Gaming PC raffle. One winner. RTX 4080. Monster-branded. Yours.",
    detail: "Raffle closes Aug 31, 2026.",
    href: "#prize",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1600&q=90",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-background px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">
              How It Works
            </p>
            <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase leading-tight">
              Play. Prove it. Win.
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map(({ step, title, description, detail, href, image }) => (
            <motion.a
              key={step}
              href={href}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/8 hover:border-white/15 transition-all cursor-pointer"
              style={{ minHeight: "380px" }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="absolute top-5 right-6 font-black text-[5rem] leading-none select-none pointer-events-none text-primary opacity-[0.07]">
                {step}
              </div>

              <div className="absolute inset-0 p-7 flex flex-col justify-end gap-3">
                <div className="h-0.5 w-10 bg-primary mb-1" />
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-on-surface-variant">
                  Step {step}
                </p>
                <h3 className="font-black text-4xl text-white uppercase tight-tracking leading-none">
                  {title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60">
                    {detail}
                  </p>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
