import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "images.igdb.com" },
      { protocol: "https", hostname: "www.kindpng.com" },
      { protocol: "https", hostname: "www.citypng.com" },
    ],
  },
};

export default nextConfig;
