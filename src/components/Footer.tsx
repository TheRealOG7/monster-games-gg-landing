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
          <Image
            src="/monster-logo.png"
            alt="Monster Energy"
            width={100}
            height={32}
            className="h-8 w-auto object-contain opacity-80"
          />
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
