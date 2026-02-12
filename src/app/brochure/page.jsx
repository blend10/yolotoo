import Accommodation from "@/components/brochure/Accommodation";
import GalleryCarousel from "@/components/brochure/GalleryCarousel";
import StackingFeatures from "@/components/brochure/StackingFeatures";
import StartPage from "@/components/brochure/StartPage";
import TeamGrid from "@/components/home/TeamGrid";
import YachtSpecs from "@/components/brochure/YachtSpecs";
import YachtSpecs2 from "@/components/brochure/YachtSpecs2";
import Planning from "@/components/home/Planning";
// import TeamGrid from "@/components/home/TeamGrid";
import React from "react";

const page = () => {
  return (
    <div>
      <StartPage />
      <GalleryCarousel />
      <YachtSpecs />
      {/* <YachtSpecs2 /> */}
      <StackingFeatures />
      <Planning />
      <Accommodation />
      <TeamGrid />
    </div>
  );
};

export default page;
