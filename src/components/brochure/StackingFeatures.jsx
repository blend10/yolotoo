import React from "react";

const StackingFeatures = () => {
  const features = [
    {
      id: "1",
      title: "Panoramic Living Spaces",
      text: "Impressive volume and floor-to-ceiling windows create a bright, open atmosphere with uninterrupted sea views throughout the yacht.",
      subPoints: [
        "Expansive salon layout",
        "Full height panoramic windows",
        "Natural light from every angle",
      ],
    },
    {
      id: "2",
      title: "Dining with a View",
      text: "Multiple dining areas offer exceptional flexibility, each designed to showcase breathtaking surroundings.",
      subPoints: [
        "Indoor and outdoor dining options",
        "Sea facing layouts",
        "Ideal for relaxed meals or formal dining",
      ],
    },
    {
      id: "3",
      title: "Zero Speed Comfort",
      text: "Advanced zero-speed stabilizers ensure exceptional comfort, even while anchored.",
      subPoints: [
        "Reduced motion at anchor",
        "Enhanced onboard stability",
        "Smooth experience day and night",
      ],
    },
    {
      id: "4",
      title: "Luxury Guest Accommodation",
      text: "Five elegant staterooms accommodate up to 10 guests, each designed as a private retreat.",
      subPoints: [
        "Spa-like en-suite bathrooms",
        "Refined materials and finishes",
        "Quiet, comfortable sleeping spaces",
      ],
    },
    {
      id: "5",
      title: "Spacious Foredeck Lounge",
      text: "A generous foredeck provides the perfect setting for relaxation, sunbathing and social moments.",
      subPoints: [
        "Multiple seating and lounging areas",
        "Optional shading",
        "Panoramic forward views",
      ],
    },
    {
      id: "6",
      title: "Entertainment-Ready Flybridge",
      text: "The flybridge is designed for socializing and relaxation, combining comfort with open-air elegance.",
      subPoints: [
        "Bar And Dining Area",
        "Plush Sun Pads",
        "Ideal For Sunset Gatherings",
      ],
      icon: "/images/tik.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT COLUMN: Sticky Header Content */}
        {/* This stays fixed while you scroll through the cards on the right */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start h-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-[#002b45] mb-8 leading-tight">
            Nothing compares to <br /> moments at sea.
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-md">
            Discover life onboard YOLO TOO through refined design, effortless
            comfort and spaces created for pure enjoyment.
          </p>
        </div>

        {/* RIGHT COLUMN: Stacking Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 relative">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="w-full bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 sticky transition-all duration-300"
              style={{
                // The magic: each card sticks 20px lower than the previous one
                top: `${100 + index * 20}px`,
                // Optional: slight scale effect to enhance depth
                zIndex: index + 1,
              }}
            >
              {/* Card Number */}
              <span className="text-6xl font-medium text-[#01747C] mb-6 block">
                {feature.id}
              </span>

              {/* Title & Icon */}
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-semibold text-[#0F1724]">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.text}
              </p>

              {/* Special List for Item 6 (Flybridge) */}
              {feature.subPoints && (
                <ul className="space-y-3 mt-6">
                  {feature.subPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center  text-gray-700 font-medium"
                    >
                      <img src="/images/tik.svg" alt="" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Spacer to allow scrolling past the last card comfortably */}
          <div className="h-24"></div>
        </div>
      </div>
    </section>
  );
};

export default StackingFeatures;
