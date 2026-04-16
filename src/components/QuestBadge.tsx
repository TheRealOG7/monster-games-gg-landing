import React from "react";

type BadgeSlug =
  | "fuel-the-grind"
  | "unleash-ranked"
  | "monster-marathon"
  | "squad-fueled"
  | "next-campaign";

function SharedDefs({ id }: { id: string }) {
  return (
    <defs>
      <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blurred" />
        <feComposite in="SourceGraphic" in2="blurred" operator="over" />
      </filter>
      <radialGradient id={`bg-${id}`} cx="50%" cy="38%" r="62%">
        <stop offset="0%" stopColor="#0d1a0f" />
        <stop offset="100%" stopColor="#060d08" />
      </radialGradient>
    </defs>
  );
}

function MedalRing({
  id,
  cx = 100,
  cy = 100,
  r = 83,
}: {
  id: string;
  cx?: number;
  cy?: number;
  r?: number;
}) {
  const ticks = Array.from({ length: 48 }, (_, i) => {
    const angle = (i * 7.5 - 90) * (Math.PI / 180);
    const isMajor = i % 6 === 0;
    const r1 = r - (isMajor ? 8 : 4);
    return {
      x1: cx + r1 * Math.cos(angle),
      y1: cy + r1 * Math.sin(angle),
      x2: cx + r * Math.cos(angle),
      y2: cy + r * Math.sin(angle),
      major: isMajor,
    };
  });
  return (
    <g>
      <circle
        cx={cx} cy={cy} r={r + 5}
        fill="none" stroke="#33f57a" strokeWidth="10" opacity="0.07"
        filter={`url(#glow-${id})`}
      />
      <circle cx={cx} cy={cy} r={r} fill={`url(#bg-${id})`} stroke="#33f57a" strokeWidth="1.8" />
      {ticks.map((t, i) => (
        <line
          key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke="#33f57a"
          strokeWidth={t.major ? "2" : "0.7"}
          opacity={t.major ? "0.65" : "0.18"}
        />
      ))}
      <circle cx={cx} cy={cy} r={r - 16} fill="none" stroke="#33f57a" strokeWidth="1" strokeDasharray="3 7" opacity="0.22" />
    </g>
  );
}

function TierPips({ y = 218 }: { y?: number }) {
  return (
    <g>
      {[-16, 0, 16].map((dx, i) => (
        <polygon
          key={i}
          points={`${100 + dx},${y} ${104 + dx},${y + 5} ${100 + dx},${y + 10} ${96 + dx},${y + 5}`}
          fill="#33f57a"
          opacity={i < 2 ? "0.3" : "1"}
        />
      ))}
    </g>
  );
}

// Badge 1: Fuel the Grind — Monster claw mark (three slashes)
function FuelTheGrindBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="ftg" />
      <MedalRing id="ftg" />
      {/* Glow halo behind slashes */}
      <path d="M 72 58 L 60 105 L 69 101 L 57 140" stroke="#33f57a" strokeWidth="18" strokeLinecap="round" opacity="0.06" />
      <path d="M 88 54 L 76 105 L 85 101 L 73 142" stroke="#33f57a" strokeWidth="14" strokeLinecap="round" opacity="0.05" />
      <path d="M 104 52 L 92 105 L 101 100 L 89 143" stroke="#33f57a" strokeWidth="12" strokeLinecap="round" opacity="0.04" />
      {/* Three claw slashes */}
      <path d="M 72 58 L 60 105 L 69 101 L 57 140" stroke="#33f57a" strokeWidth="7.5" strokeLinecap="round" filter="url(#glow-ftg)" opacity="0.95" />
      <path d="M 88 54 L 76 105 L 85 101 L 73 142" stroke="#33f57a" strokeWidth="7.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 104 52 L 92 105 L 101 100 L 89 143" stroke="#33f57a" strokeWidth="7.5" strokeLinecap="round" opacity="0.35" />
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">FUEL THE GRIND</text>
      <TierPips />
    </svg>
  );
}

// Badge 2: Unleash Ranked — upward arrow + lightning bolt
function UnleashRankedBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="ur" />
      <MedalRing id="ur" />
      {/* Lightning bolt */}
      <path d="M 112 60 L 96 96 L 108 96 L 90 140 L 124 88 L 110 88 Z" fill="#33f57a" opacity="0.9" filter="url(#glow-ur)" />
      {/* Upward chevron */}
      <polyline points="78,110 100,88 122,110" fill="none" stroke="#33f57a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <polyline points="78,124 100,102 122,124" fill="none" stroke="#33f57a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
      {/* TOP 250 label */}
      <rect x="68" y="142" width="64" height="16" rx="3" fill="#33f57a" opacity="0.1" stroke="#33f57a" strokeWidth="0.8" />
      <text x="100" y="153" textAnchor="middle" fill="#33f57a" fontSize="8" fontFamily="monospace" fontWeight="900" letterSpacing="1">TOP 250</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">UNLEASH RANKED</text>
      <TierPips />
    </svg>
  );
}

// Badge 3: Monster Marathon — clock face
function MonsterMarathonBadge() {
  const hourMarkers = Array.from({ length: 12 }, (_, i) => {
    const deg = (i * 30 - 90) * (Math.PI / 180);
    const isMaj = i % 3 === 0;
    return {
      x1: 100 + (isMaj ? 26 : 30) * Math.cos(deg),
      y1: 98 + (isMaj ? 26 : 30) * Math.sin(deg),
      x2: 100 + 36 * Math.cos(deg),
      y2: 98 + 36 * Math.sin(deg),
      major: isMaj,
    };
  });
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="mm" />
      <MedalRing id="mm" />
      <circle cx="100" cy="98" r="36" fill="none" stroke="#33f57a" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="98" r="28" fill="none" stroke="#33f57a" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.18" />
      {hourMarkers.map((m, i) => (
        <line key={i} x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2} stroke="#33f57a" strokeWidth={m.major ? "1.5" : "0.7"} opacity={m.major ? "0.6" : "0.2"} />
      ))}
      {/* Minute hand pointing to 10 */}
      <line x1="100" y1="98" x2="84" y2="79" stroke="#33f57a" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow-mm)" />
      {/* Hour hand pointing to 2 */}
      <line x1="100" y1="98" x2="116" y2="80" stroke="#33f57a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      {/* Seconds hand */}
      <line x1="100" y1="98" x2="100" y2="115" stroke="#33f57a" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="100" cy="98" r="3.5" fill="#33f57a" opacity="0.9" />
      <text x="100" y="144" textAnchor="middle" fill="#33f57a" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="-0.5" filter="url(#glow-mm)">50H</text>
      <text x="100" y="155" textAnchor="middle" fill="#33f57a" fontSize="6" fontFamily="monospace" opacity="0.45">MONTHLY TARGET</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">MONSTER MARATHON</text>
      <TierPips />
    </svg>
  );
}

// Badge 4: Squad Fueled — three player silhouettes
function SquadFueledBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="sf" />
      <MedalRing id="sf" />
      {/* Left player */}
      <circle cx="70" cy="76" r="9" fill="#33f57a" opacity="0.5" />
      <path d="M 54 115 Q 54 98 70 98 Q 86 98 86 115" fill="#33f57a" opacity="0.4" />
      {/* Center player (hero) */}
      <circle cx="100" cy="70" r="12" fill="#33f57a" opacity="0.95" filter="url(#glow-sf)" />
      <path d="M 81 112 Q 81 91 100 91 Q 119 91 119 112" fill="#33f57a" opacity="0.9" filter="url(#glow-sf)" />
      {/* Right player */}
      <circle cx="130" cy="76" r="9" fill="#33f57a" opacity="0.5" />
      <path d="M 114 115 Q 114 98 130 98 Q 146 98 146 115" fill="#33f57a" opacity="0.4" />
      {/* Connection line */}
      <line x1="70" y1="115" x2="130" y2="115" stroke="#33f57a" strokeWidth="1" strokeDasharray="3 4" opacity="0.25" />
      {/* Squad label */}
      <rect x="74" y="122" width="52" height="16" rx="3" fill="#33f57a" opacity="0.1" stroke="#33f57a" strokeWidth="0.8" />
      <text x="100" y="133" textAnchor="middle" fill="#33f57a" fontSize="8.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="1">x3 SQUAD</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">SQUAD FUELED</text>
      <TierPips />
    </svg>
  );
}

// Badge 5: Next Campaign — question mark / teaser
function NextCampaignBadge() {
  return (
    <svg viewBox="0 0 200 232" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="nc" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="#33f57a" strokeWidth="0.8" opacity="0.1" strokeDasharray="2 8" />
      <MedalRing id="nc" r={86} />
      <text x="100" y="122" textAnchor="middle" fill="#33f57a" fontSize="56" fontFamily="Inter,sans-serif" fontWeight="900" opacity="0.7" filter="url(#glow-nc)">?</text>
      <text x="100" y="200" textAnchor="middle" fill="#33f57a" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="2">NEXT CAMPAIGN</text>
      <TierPips />
    </svg>
  );
}

const badges: Record<BadgeSlug, React.FC> = {
  "fuel-the-grind": FuelTheGrindBadge,
  "unleash-ranked": UnleashRankedBadge,
  "monster-marathon": MonsterMarathonBadge,
  "squad-fueled": SquadFueledBadge,
  "next-campaign": NextCampaignBadge,
};

export default function QuestBadge({ slug }: { slug: string }) {
  const Badge = badges[slug as BadgeSlug];
  if (!Badge) return null;
  return <Badge />;
}
