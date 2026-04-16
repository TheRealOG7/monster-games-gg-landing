"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { articles } from "@/lib/news";

export default function NewsHub() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section id="news" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 font-black">
              What&apos;s Happening
            </p>
            <h2 className="font-black text-4xl md:text-5xl tight-tracking text-white uppercase">
              Monster Gaming Hub.
            </h2>
            <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">
              Campaign updates, esports coverage, product drops, and guides. All in one place.
            </p>
          </div>
          <Link
            href={`/news/${featured.slug}`}
            className="flex-shrink-0 inline-flex items-center gap-2 text-[10px] text-primary font-black uppercase tracking-widest hover:text-white transition-colors"
          >
            All News <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4">
          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/news/${featured.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-background border border-white/8 hover:border-white/15 transition-all cursor-pointer block"
              style={{ minHeight: "480px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-primary text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">
                  {featured.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">
                  {featured.date}
                </span>
                <h3 className="font-black text-white uppercase text-2xl leading-tight">
                  {featured.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-1 text-[9px] text-primary font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Read More <span>→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Stacked cards */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-background border border-white/8 hover:border-white/15 transition-all cursor-pointer block"
                  style={{ minHeight: "100px" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

                  <div className="relative p-4 flex items-center gap-4 h-full">
                    <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden rounded">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">
                          {article.category}
                        </span>
                        <span className="text-[9px] font-black text-on-surface-variant/50 uppercase tracking-widest">
                          {article.date}
                        </span>
                      </div>
                      <h4 className="font-black text-white uppercase text-sm leading-tight line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
