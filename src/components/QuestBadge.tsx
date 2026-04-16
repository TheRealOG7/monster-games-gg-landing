import Image from "next/image";

const badgeImages: Record<string, string> = {
  "fuel-the-grind": "/badge-fuel-the-grind.png",
  "unleash-ranked": "/badge-unleash-ranked.png",
};

export default function QuestBadge({ slug }: { slug: string }) {
  const src = badgeImages[slug];
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={slug}
      width={160}
      height={160}
      className="w-full h-full object-contain"
    />
  );
}
