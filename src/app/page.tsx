import Hero from "@/components/Hero";
import QuestBoard from "@/components/QuestBoard";
import HowItWorks from "@/components/HowItWorks";
import PrizeReveal from "@/components/PrizeReveal";
import NewsHub from "@/components/NewsHub";
import MerchShelf from "@/components/MerchShelf";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuestBoard />
      <HowItWorks />
      <PrizeReveal />
      <NewsHub />
      <MerchShelf />
      <FinalCTA />
    </main>
  );
}
