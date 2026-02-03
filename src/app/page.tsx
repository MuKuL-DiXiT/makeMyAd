import HeroSection from "./HeroSection";
import WhySection from "./WhySection";
import GrowthSection from "./GrowthSection";
import TalentSection from "./TalentSection";
import JoinSection from "./JoinSection";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <WhySection />
      <GrowthSection />
      <TalentSection />
      <JoinSection />
    </main>
  );
}
