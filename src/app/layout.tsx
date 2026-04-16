import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monster Energy x GAMES.GG | Fuel the Grind",
  description:
    "Play Call of Duty. Verify your Steam hours. Win a Monster Gaming PC worth $3,500. Complete the quest on GAMES.GG.",
  keywords: ["Monster Energy gaming", "Call of Duty quest", "win gaming PC", "GAMES.GG Monster"],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Monster Energy x GAMES.GG | Fuel the Grind",
    description:
      "Play Call of Duty. Verify your Steam hours. Win a Monster Gaming PC worth $3,500.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monster Energy x GAMES.GG | Fuel the Grind",
    description: "Play Call of Duty. Verify your Steam hours. Win a Monster Gaming PC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
