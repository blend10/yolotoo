"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-white" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

const YachtSpecs2 = () => {
  const [openSection, setOpenSection] = useState("specs"); // 'specs' | 'watersports' | null

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="w-[97%] md:w-full max-w-450 mx-auto min-h-[600px] flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden my-12">
      {/* LEFT PANEL: Specifications */}
      <div className="w-full lg:w-1/2 bg-[#01747C] p-8 md:p-12 lg:p-16 text-white flex flex-col relative">
        {/* Subtle inner border/frame effect */}
        <div className="absolute inset-4 md:inset-8 border border-white/10 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide uppercase">
            Yolo Too
          </h2>

          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Crafted for a luxury Balearic escape, YOLO TOO hosts up to 10 guests
            in four en-suite cabins with modern comfort and elegance.
          </p>

          {/* Pricing Section */}
          <div className="mb-8 space-y-4">
            {/* High Season */}
            <div className="flex justify-between items-baseline text-sm md:text-base">
              <span className="font-bold">
                High Season <br />{" "}
                <span className="text-xs text-white/60 font-light">
                  (July & August)
                </span>
              </span>

              <div className="text-right">
                <div className="flex justify-end gap-8">
                  <span className="text-white/70 text-xs uppercase tracking-wider w-12 text-left">
                    Weekly
                  </span>
                  <span className="font-light">€ 60.000</span>
                </div>
                <div className="flex justify-end gap-8 mt-1">
                  <span className="text-white/70 text-xs uppercase tracking-wider w-12 text-left">
                    Daily
                  </span>
                  <span className="font-light">€ 9.000</span>
                </div>
              </div>
            </div>
            {/* Low Season */}
            <div className="flex justify-between items-baseline text-sm md:text-base">
              <span className="font-bold">
                Low Season <br />{" "}
                <span className="text-xs text-white/60 font-light">
                  (Rest of te year)
                </span>
              </span>
              <div className="text-right">
                <div className="flex justify-end gap-8">
                  <span className="text-white/70 text-xs uppercase tracking-wider w-12 text-left">
                    Weekly
                  </span>
                  <span className="font-light">€ 50.000</span>
                </div>
                <div className="flex justify-end gap-8 mt-1">
                  <span className="text-white/70 text-xs uppercase tracking-wider w-12 text-left">
                    Daily
                  </span>
                  <span className="font-light">€ 8.000</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] md:text-xs text-white/60 mt-4">
              ***Berth and VAT 21% not included in the charter rated
            </p>
          </div>

          <div className="border-t border-white/20">
            {/* Yacht Specifications Accordion */}
            <AccordionItem
              title="Yacht Specifications"
              isOpen={openSection === "specs"}
              onClick={() => toggleSection("specs")}
            >
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Builder</span>
                  <span className="font-light text-right">Ferretti</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Year</span>
                  <span className="font-light text-right">
                    2001 / Refit 024
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Length</span>
                  <span className="font-light text-right">29.5 mts</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Guests</span>
                  <span className="font-light text-right">
                    12 Day & 8 + 2 Overnight
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Crew</span>
                  <div className="text-right font-light flex flex-col">
                    <span>Captain</span>
                    <span>Engineer</span>
                    <span>Deckhand</span>
                    <span>Steward</span>
                    <span>Chef</span>
                  </div>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Bedrooms</span>
                  <div className="text-right font-light flex flex-col">
                    <span>1 x Master on Main Deck</span>
                    <span>1 x VIP</span>
                    <span>1 x Double with Pullman</span>
                    <span>1 x Twin with Pullman</span>
                  </div>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">
                    Maximum Speed
                  </span>
                  <span className="font-light text-right">22 knots</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">
                    Cruising Speed
                  </span>
                  <span className="font-light text-right">16 knots</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">
                    Fuel Consumption
                  </span>
                  <span className="font-light text-right">
                    450 Liters/hr @ 16 knots
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Range</span>
                  <span className="font-light text-right">500nm</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white/80">Stabilisers</span>
                  <span className="font-light text-right">
                    2 x Seakeeper 16 Gyroscope Stabilisers (New 2023)
                  </span>
                </div>
              </div>
            </AccordionItem>

            {/* Tenders & Watersports Accordion */}
            <AccordionItem
              title="Tenders & Watersports"
              isOpen={openSection === "watersports"}
              onClick={() => toggleSection("watersports")}
            >
              <ul className="list-disc list-inside text-xs md:text-sm font-light space-y-1 text-white/90">
                <li>3.85 m Williams Jet Tender</li>
                <li>2 x Jet e-foil</li>
                <li>3 x Stand Up Paddle</li>
                <li>Towable doughnut</li>
                <li>Waterski & wakeboard</li>
                <li>Snorkeling equipment</li>
                <li>1 x Seabob</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Image */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:h-auto relative">
        <Image
          src="/images/rightImage1.jpg"
          alt="YOLO TOO Yacht at Sea"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 75vw"
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default YachtSpecs2;
