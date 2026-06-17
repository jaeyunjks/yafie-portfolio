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
    <div className="relative isolate">
      <AnimatedBackground />
      <HomeHero />
      <div id="home-profile" className="scroll-mt-32">
        <ProfileStatus />
      </div>
      <div id="home-focus" className="scroll-mt-32">
        <EngineeringFocus />
      </div>
      <div id="home-selected-work" className="scroll-mt-32">
        <FeaturedProject />
      </div>
      <ProfessionalSignals />
      <div id="home-proof" className="scroll-mt-32">
        <SocialProof />
      </div>
      <CurrentlyExploring />
      <div id="home-next" className="scroll-mt-32">
        <HomeCTA />
      </div>
    </div>
  );
}
