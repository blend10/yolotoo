import React from "react";

const Accommodation = () => {
  const features = [
    {
      title: "01.  Accommodation",
      text: `Number of guests: 10
      Number of cabins: 5 
      Cabin configuration: 4 Double
    Cabins, 1 Twin Cabins
    Bed configuration: 1 King Beds,
     3 Queen Beds, 2 Single Beds`,
    },
    {
      title: "02.  Equipment",
      text: `Engines2 x Man V12-1900HP 
      (new 2023) 2 single-phase 
      generator-27kW / 230V
       AC - 50Hz for EU system 29kW / 
       60Hz for USA system Range is 
       1,000nm at 10kts`,
    },
    {
      title: "03.  Watersports",
      text: `Tender + Toys14' Williams tender 2 
      Seabobs upgraded with quick 
      chargers and fixed selfie camera 
      Wakeboard Fishing Rods 2 x SUPs 
      (Inflatable) Snorkel Gear 
      Beach chairs`,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Header with Underline */}
            <div className="w-full mb-6 border-b border-[#002539] pb-4">
              <h3 className="text-xl md:text-2xl font-medium text-[#01747C] uppercase tracking-wide">
                {feature.title}
              </h3>
            </div>

            {/* Body Text */}
            <p className="text-[#002539] text-sm md:text-base text-justify whitespace-pre-line">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
