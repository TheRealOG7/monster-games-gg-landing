"use client";

import { useState } from "react";
import { List, X, Globe, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Play" },
  { label: "Explore" },
  { label: "Collect" },
  { label: "GAM3 Awards" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0d0f14] border-b border-white/5">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-8 h-14">
        <Link href="/" className="flex-shrink-0 mr-8">
          <Image
            src="/gamesgg-logo.png"
            alt="GAMES.GG"
            width={80}
            height={16}
            className="object-contain h-[15px] w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex flex-1">
          {navLinks.map((link) => (
            <span
              key={link.label}
              className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-white/70 cursor-default select-none hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50 mt-px">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          ))}
          <span className="px-3 py-1.5 text-[13px] font-semibold text-primary cursor-default select-none hover:text-primary/80 transition-colors">
            GAMES+
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/5" aria-label="Language">
            <Globe size={17} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/5" aria-label="Search">
            <MagnifyingGlass size={17} />
          </button>
          <div className="w-px h-5 bg-white/10 mx-1" />
          <span className="text-[13px] font-medium text-white/70 cursor-default px-2 hover:text-white transition-colors">
            Sign In
          </span>
          <a
            href="#quest"
            className="bg-primary text-black px-4 py-1.5 font-bold text-[13px] rounded-full hover:bg-white transition-all active:scale-95 whitespace-nowrap ml-1"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#0d0f14] px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <span key={link.label} className="block py-3 text-[13px] font-medium text-white/70">
              {link.label}
            </span>
          ))}
          <span className="block py-3 text-[13px] font-semibold text-primary">GAMES+</span>
          <a
            href="#quest"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block bg-primary text-black px-5 py-3 font-bold text-[13px] rounded-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
