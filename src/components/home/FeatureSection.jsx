import React from "react";

const FeatureSection = () => {
  const features = [
    {
      title: "Curated Journeys",
      text: "Every journey aboard YOLO TOO is carefully curated around your preferences. From tranquil cruising days to vibrant island exploration, each itinerary is designed to deliver a seamless balance of relaxation, discovery and refined luxury.",
    },
    {
      title: "Expert Crew",
      text: "A professional crew dedicated to discretion and excellence ensures every detail is flawlessly handled. From personalized service to world-class onboard dining, your comfort and enjoyment are always the priority.",
    },
    {
      title: "The Mediterranean",
      text: "Sail through some of the Mediterranean’s most sought-after destinations, including the Balearic Islands and hidden coastal coves. Crystal-clear waters, secluded anchorages and unforgettable views define every stop along the journey.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Header with Underline */}
            <div className="w-full mb-6 border-b border-[#002539] pb-4">
              <h3 className="text-xl md:text-2xl font-medium text-[#002b45] uppercase tracking-wide">
                {feature.title}
              </h3>
            </div>

            {/* Body Text */}
            <p className="text-[#002539] text-sm md:text-base text-justify">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
