import Image from "next/image";

const columns = [
  {
    heading: "Campaign",
    links: [
      { label: "Quest Board", href: "#quest" },
      { label: "The Prize", href: "#prize" },
      { label: "Get Started", href: "#quest" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "News", href: "#news" },
      { label: "Merch", href: "#merch" },
      { label: "GAMES+", href: "#" },
    ],
  },
];

function MonsterMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
      <path d="M 14 6 L 10 24 L 16 22 L 12 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" />
      <path d="M 24 4 L 20 24 L 26 22 L 22 44" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
      <path d="M 34 6 L 30 24 L 36 22 L 32 42" stroke="#33f57a" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-2 space-y-5">
          <Image
            src="/gamesgg-logo.png"
            alt="GAMES.GG"
            width={100}
            height={24}
            className="object-contain h-6 w-auto"
          />
          <p className="text-on-surface-variant text-xs leading-relaxed max-w-[280px]">
            Monster Energy x GAMES.GG. Play. Prove it. Win.
          </p>
          <div className="flex items-center gap-2">
            <MonsterMark />
            <span className="text-on-surface-variant text-xs font-black uppercase tracking-widest opacity-70">
              Monster Energy
            </span>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="space-y-4">
            <h6 className="font-black text-white uppercase text-[9px] tracking-[0.3em]">
              {col.heading}
            </h6>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">
          2026 GAMES.GG x Monster Energy. All rights reserved.
        </p>
        <p className="text-[9px] text-on-surface-variant/50 font-bold uppercase tracking-[0.15em]">
          Monster Energy is a registered trademark of Monster Beverage Corporation.
        </p>
      </div>
    </footer>
  );
}
