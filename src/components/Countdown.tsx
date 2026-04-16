"use client";
import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ target }: { target: string }) {
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setDiff(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const units = [
    { label: "DAYS", value: pad(days) },
    { label: "HOURS", value: pad(hours) },
    { label: "MIN", value: pad(minutes) },
    { label: "SEC", value: pad(seconds) },
  ];

  return (
    <div className="flex gap-2">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center gap-1 flex-1">
          <div className="bg-primary/15 border border-primary/30 rounded px-2 py-2 w-full text-center">
            <span className="font-black text-xl text-primary tight-tracking">{value}</span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
