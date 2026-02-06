import React from "react";
import Image from "next/image";

const YachtSpecs = () => {
  return (
    <section className="w-[97%] md:w-full max-w-450 mx-auto min-h-[600px] flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden my-12">
      {/* LEFT PANEL: Specifications */}
      <div className="w-full lg:w-1/2 bg-[#01747C] p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center relative">
        {/* Subtle inner border/frame effect */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            Pier Pressure
          </h2>

          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Crafted for a luxury Balearic escape, YOLO TOO hosts up to 10 guests
            in four en-suite cabins with modern comfort and elegance.
          </p>

          {/* Key Stats Table (Length/Beam/Draft) */}
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center pb-2">
              <span className="font-medium text-white/90">Length</span>
              <div className="bg-[#AEB9BF] w-[60%] h-[1px]"></div>
              <span className="font-light text-right">
                26.77 Metres (87' 10")
              </span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="font-medium text-white/90">Beam</span>
              <div className="bg-[#AEB9BF] w-[60%] h-[1px]"></div>
              <span className="font-light text-right">
                6.58 metres (21' 7")
              </span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="font-medium text-white/90">Draft</span>
              <div className="bg-[#AEB9BF] w-[60%] h-[1px]"></div>
              <span className="font-light text-right">1.9 metres (6' 4")</span>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-6 border-b-white pb-4 border-b">
            Yacht Specifications
          </h3>

          {/* Detailed Specs Grid */}
          <div className="space-y-3 text-sm md:text-base">
            <div className="flex justify-between">
              <span className="font-medium text-white/80">
                Number Of Guests
              </span>
              <span className="font-light">10</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Number Of Crew</span>
              <span className="font-light">4</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Built</span>
              <span className="font-light">2020</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Refit</span>
              <span className="font-light">2024</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Builder</span>
              <span className="font-light">Azimut</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Hull Material</span>
              <span className="font-light">GRP</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">
                Hull Configuration
              </span>
              <span className="font-light">Semi Displacement</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Superstructure</span>
              <span className="font-light">Flybridge</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-white/80">Naval Architect</span>
              <span className="font-light text-right">
                P.L. AUSONIO & Azimut R&D Dept
              </span>
            </div>
            <div>
              <p className="mt-3">
                Air conditioning, Stabilisers at anchor, WiFi connection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Image */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        <Image
          src="/images/rightImage1.jpg"
          alt="Pier Pressure Yacht in a Bay"
          fill // Fills the container
          className="object-cover"
          // HIGH FIDELITY SIZES STRATEGY:
          // Mobile: 100vw
          // Desktop: It takes 50% of the screen, but we ask for 75vw to force a denser, sharper image.
          sizes="(max-width: 1024px) 100vw, 75vw"
          // Max quality for crisp water/sky details
          quality={100}
          // Load immediately (LCP optimization)
          priority
        />
        {/* Optional overlay for better integration if needed */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
      </div>
    </section>
  );
};

export default YachtSpecs;
