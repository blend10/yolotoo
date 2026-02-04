import CurvedSlider from "@/components/home/CurvedSlider";
import FeatureSection from "@/components/home/FeatureSection";
import GallerySlider from "@/components/home/GallerySlider";
import HeroPage from "@/components/home/HeroPage";
import Onboard from "@/components/home/Onboard";
import Planning from "@/components/home/Planning";
import Relax from "@/components/home/Relax";
import TeamGrid from "@/components/home/TeamGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Relax />
      <GallerySlider />
      <Onboard />
      <Planning />
      <FeatureSection />
      <CurvedSlider />
      <TeamGrid />
    </div>
  );
}
