import Hero from "@/components/Hero";
import NewsHub from "@/components/NewsHub";
import QuestBoard from "@/components/QuestBoard";
import MerchShelf from "@/components/MerchShelf";
import PrizeReveal from "@/components/PrizeReveal";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsHub />
      <QuestBoard />
      <MerchShelf />
      <PrizeReveal />
      <NewsletterSignup />
    </main>
  );
}
