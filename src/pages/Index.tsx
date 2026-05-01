import { StickyNav } from "@/components/site/StickyNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { BalanceSection } from "@/components/sections/BalanceSection";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { RoiSection } from "@/components/sections/RoiSection";
import { RevenueSection } from "@/components/sections/RevenueSection";
import { MixSection } from "@/components/sections/MixSection";
import { PriceSection } from "@/components/sections/PriceSection";
import { DominanceSection } from "@/components/sections/DominanceSection";
import { EconomySection } from "@/components/sections/EconomySection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { SummarySection } from "@/components/sections/SummarySection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Global Energy Market Analysis 2020–2025 | Executive Briefing";
    const desc = "Cinematic executive analysis of the global energy market 2020–2025: balance, growth, ROI, revenue, mix, prices, dominance, and investment.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <StickyNav />
      <HeroSection />
      <BalanceSection />
      <GrowthSection />
      <RoiSection />
      <RevenueSection />
      <MixSection />
      <PriceSection />
      <DominanceSection />
      <EconomySection />
      <InvestmentSection />
      <SummarySection />
    </main>
  );
};

export default Index;
