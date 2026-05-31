import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CurrentlyExploring from "@/components/sections/home/CurrentlyExploring";
import EngineeringFocus from "@/components/sections/home/EngineeringFocus";
import FeaturedProject from "@/components/sections/home/FeaturedProject";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeCTA from "@/components/sections/home/HomeCTA";
import ProfessionalSignals from "@/components/sections/home/ProfessionalSignals";
import ProfileStatus from "@/components/sections/home/ProfileStatus";
import SocialProof from "@/components/sections/home/SocialProof";

export default function HomePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <HomeHero />
      <ProfileStatus />
      <EngineeringFocus />
      <FeaturedProject />
      <ProfessionalSignals />
      <SocialProof />
      <CurrentlyExploring />
      <HomeCTA />
    </div>
  );
}
