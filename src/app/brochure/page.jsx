import Accommodation from "@/components/brochure/Accommodation";
import GalleryCarousel from "@/components/brochure/GalleryCarousel";
import StackingFeatures from "@/components/brochure/StackingFeatures";
import StartPage from "@/components/brochure/StartPage";
import TeamGrid2 from "@/components/brochure/TeamGrid2";
import YachtSpecs from "@/components/brochure/YachtSpecs";
import Planning from "@/components/home/Planning";
// import TeamGrid from "@/components/home/TeamGrid";
import React from "react";

const page = () => {
  return (
    <div>
      <StartPage />
      <GalleryCarousel />
      <YachtSpecs />
      <StackingFeatures />
      <Planning />
      <Accommodation />
      <TeamGrid2 />
    </div>
  );
};

export default page;
