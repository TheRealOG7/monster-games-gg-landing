"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Monster Energy Original",
    category: "DRINK",
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=600&q=90",
    inPrizePool: true,
  },
  {
    name: "Monster Energy Ultra White",
    category: "DRINK",
    image: "/monster-ultra-white.png",
    inPrizePool: true,
  },
  {
    name: "Monster Energy Ultra Watermelon",
    category: "DRINK",
    image: "/monster-watermelon.png",
    inPrizePool: true,
  },
  {
    name: "Monster Energy Snapback Cap",
    category: "MERCH",
    image: "/monster-cap.png",
    inPrizePool: true,
  },
  {
    name: "Monster Energy Hoodie",
    category: "MERCH",
    image: "/monster-hoodie.png",
    inPrizePool: true,
  },
  {
    name: "Monster Energy Backpack",
    category: "MERCH",
    image: "/monster-backpack.png",
    inPrizePool: true,
  },
];

export default function MerchShelf() {
  return (
    <section id="merch" className="py-14 md:py-20 bg-background px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">
            Prizes + Merch
          </p>
          <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase">
            In the Prize Pool.
          </h2>
          <p className="text-on-surface-variant text-sm mt-3 leading-relaxed max-w-lg">
            Every item below is included in quest prize draws. Complete quests to win drinks,
            merch, and the full gaming PC bundle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-white/8 hover:border-primary/25 transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-90"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {product.inPrizePool && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-black text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5">
                      PRIZE
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                <p className="text-white font-black text-xs uppercase leading-tight">{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
