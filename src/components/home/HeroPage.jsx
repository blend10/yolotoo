"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroPage = () => {
  // MOBILE STATE ONLY
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide(1);
  const prevSlide = () => setActiveSlide(0);

  // DATA to reuse content easily for the Mobile View
  const content = [
    {
      id: 0,
      title: (
        <>
          Refined Luxury <br /> Cabins
        </>
      ),
      description:
        "The Ferretti 94 YOLO TOO is a 30-meter masterpiece of luxury, meticulously refitted in 2024 to offer an unparalleled yachting experience. Accommodating 10 guests in four elegant en-suite cabins, it blends timeless sophistication with modern comfort.",
      buttonText: "Contact Us",
      icon: "/images/whatsapp.svg",
    },
    {
      id: 1,
      title: (
        <>
          Beyond <br /> Yachting
        </>
      ),
      description:
        "Indulge in the jacuzzi on the upper deck, while an elite crew of five caters to your every need. Set sail through the breathtaking Balearic Islands, where crystal-clear waters, secluded coves, and world-class nightlife create the ultimate escape. YOLO TOO isn’t just a yacht—it’s a statement of refined living.",
      buttonText: "View Brochure",
      icon: "/images/arrow2.svg",
    },
  ];

  return (
    <div className=" h-screen w-full overflow-hidden">
      <video
        src="https://res.cloudinary.com/dc00mvv7f/video/upload/v1770108021/heroVideo_gislco.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full my-10 w-full items-center justify-center p-4">
        {/* ========================================= */}
        {/* MOBILE VIEW (Slider with Arrows)          */}
        {/* Visible on Mobile, Hidden on Desktop      */}
        {/* ========================================= */}
        <div className="md:hidden flex flex-col items-center justify-center mt-20 w-full gap-6">
          {/* The Active Card */}
          <div className="flex w-full max-w-[550px] flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-l from-[#D7D7D7]/10 to-[#313131]/20 p-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-[24px] leading-tight text-white">
              {content[activeSlide].title}
            </h1>
            <p className="text-xs leading-relaxed text-gray-200">
              {content[activeSlide].description}
            </p>
            <button className="rounded-full bg-white px-8 py-3 font-medium text-[#00183A] text-[18px] w-full transition active:scale-95">
              <div className="flex flex-row items-center justify-center gap-4">
                <h1>{content[activeSlide].buttonText}</h1>
                <Image
                  src={content[activeSlide].icon}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className={`p-3 rounded-full bg-white/20 backdrop-blur-md text-white transition-all ${activeSlide === 0 ? "opacity-50 cursor-not-allowed" : "active:scale-90"}`}
              disabled={activeSlide === 0}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              <div
                className={`h-2 w-2 rounded-full transition-colors ${activeSlide === 0 ? "bg-white" : "bg-white/40"}`}
              />
              <div
                className={`h-2 w-2 rounded-full transition-colors ${activeSlide === 1 ? "bg-white" : "bg-white/40"}`}
              />
            </div>

            <button
              onClick={nextSlide}
              className={`p-3 rounded-full bg-white/20 backdrop-blur-md text-white transition-all ${activeSlide === 1 ? "opacity-50 cursor-not-allowed" : "active:scale-90"}`}
              disabled={activeSlide === 1}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP VIEW (Your Original Code)         */}
        {/* Hidden on Mobile, Flex on Desktop         */}
        {/* ========================================= */}
        <div className="hidden md:flex w-full max-w-450 flex-row flex-wrap items-center justify-center gap-8 md:justify-between">
          {/* First Box */}
          <div className="flex max-w-[550px] flex-col items-start sticky  justify-between gap-6 rounded-2xl  bg-gradient-to-l from-[#D7D7D7]/10 to-[#313131]/20 p-8 backdrop-blur-sm transition-all hover:bg-white/20">
            <h1 className="text-[24px] md:text-[40px]  leading-tight text-white md:text-[60px]">
              Refined Luxury <br /> Cabins
            </h1>
            <p className=" text-xs md:text-lg leading-relaxed text-gray-200">
              The Ferretti 94 YOLO TOO is a 30-meter masterpiece of luxury,
              meticulously refitted in 2024 to offer an unparalleled yachting
              experience. Accommodating 10 guests in four elegant en-suite
              cabins, it blends timeless sophistication with modern comfort.
            </p>
            <button className="rounded-full bg-white px-8 py-3 font-medium text-[#00183A] text-[18px]  transition hover:bg-gray-200 hover:scale-105">
              <div className="flex flex-row items-center justify-start gap-4">
                <div>
                  <h1 className="">Contact Us</h1>
                </div>
                <div>
                  <Image
                    src="/images/whatsapp.svg"
                    alt="logo"
                    width={24}
                    height={24}
                  ></Image>
                </div>
              </div>
            </button>
          </div>

          {/* Second Box */}
          <div className="flex max-w-[550px] mt-20 md:mt-40 flex-col items-start justify-between gap-6 rounded-2xl  bg-gradient-to-l from-[#D7D7D7]/10 to-[#313131]/20 p-8 backdrop-blur-sm transition-all hover:bg-white/20">
            <h1 className="text-[24px] md:text-[40px]  leading-tight text-white md:text-[60px]">
              Beyond <br /> Yachting
            </h1>
            <p className="text-xs md:text-lg leading-relaxed text-gray-200">
              Indulge in the jacuzzi on the upper deck, while an elite crew of
              five caters to your every need. Set sail through the breathtaking
              Balearic Islands, where crystal-clear waters, secluded coves, and
              world-class nightlife create the ultimate escape. YOLO TOO isn’t
              just a yacht—it’s a statement of refined living.
            </p>
            <button className="rounded-full bg-white px-8 py-3 font-medium text-[#00183A] text-[18px]  transition hover:bg-gray-200 hover:scale-105">
              <div className="flex flex-row items-center justify-start gap-4">
                <div>
                  <h1 className="">View Brochure</h1>
                </div>
                <div>
                  <Image
                    src="/images/arrow2.svg"
                    alt="arrow  "
                    width={24}
                    height={24}
                  ></Image>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
