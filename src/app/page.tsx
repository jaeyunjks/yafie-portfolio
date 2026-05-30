import AnimatedBackground from "@/components/ui/AnimatedBackground";
import FeaturedProject from "@/components/sections/home/FeaturedProject";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeOverview from "@/components/sections/home/HomeOverview";

export default function HomePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <HomeHero />
      <HomeOverview />
      <FeaturedProject />
    </div>
  );
}
