"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const GalleryCarousel = () => {
  // 1. Data Source
  const slides = [
    {
      id: 0,
      category: "Exterior",
      image: "/images/slide11.jpg",
      alt: "Yacht Exterior Front View",
    },
    {
      id: 1,
      category: "Interior",
      image: "/images/slide22.jpg",
      alt: "Luxury Interior Lounge",
    },
    {
      id: 2,
      category: "Lifestyle",
      image: "/images/slide33.jpg",
      alt: "Guests Enjoying Water Sports",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // 2. Navigation Logic
  const nextSlide = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getLeftIndex = (i) => (i - 1 + slides.length) % slides.length;
  const getRightIndex = (i) => (i + 1) % slides.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullScreen) return;
      if (e.key === "Escape") setIsFullScreen(false);
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullScreen]);

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-450 mx-auto mb-12 flex flex-col lg:flex-row justify-between items-start">
        <div className="max-w-xl mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-5xl font-medium text-[#002b45] mb-6 leading-tight">
            Nothing compares to <br /> moments at sea.
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Discover life on board Yolo Too through moments of elegance,
            freedom, and pure enjoyment.
          </p>
        </div>

        <div className="flex gap-8 md:gap-16 w-full lg:w-auto mt-6 lg:mt-0 pt-6">
          {slides.slice(0, 3).map((slide, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex flex-col gap-2 cursor-pointer group ${
                idx === activeIndex ? "text-[#00183A]" : "text-[#00183A4D]"
              }`}
            >
              <span className="text-sm font-medium">0{idx + 1}</span>
              <div
                className={`h-[2px] w-full transition-colors duration-300 ${
                  idx === activeIndex ? "bg-[#002b45]" : "bg-[#00183A4D]"
                }`}
              ></div>
              <span className="text-sm font-medium uppercase tracking-wide group-hover:text-[#00183A] transition-colors">
                {slide.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-450 mx-auto h-[400px] md:h-[500px] flex items-center justify-center mt-12">
        {/* LEFT Preview */}
        <div
          onClick={prevSlide}
          className="hidden md:block absolute left-0 w-[15%] h-[60%] cursor-pointer transition-all duration-500 z-10 transform -translate-x-1/2 md:translate-x-0 group"
        >
          {/* FIX 1: Preview Image Optimization */}
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              key={`left-${getLeftIndex(activeIndex)}`}
              src={slides[getLeftIndex(activeIndex)].image}
              alt="Previous"
              fill
              className="object-cover animate-fadeIn"
              sizes="15vw"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-[#002b45] font-medium text-sm group-hover:opacity-80 transition-opacity">
            <img src="images/arrow22.svg" alt="arrow" className="rotate-180" />
            <span>Preview</span>
          </div>
        </div>

        {/* CENTER Active Image */}
        <div
          className="group relative w-full md:w-[65%] h-full z-20 shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 cursor-zoom-in"
          onDoubleClick={() => setIsFullScreen(true)}
        >
          {/* FIX 2: Main Image Optimization */}
          <Image
            key={`center-${activeIndex}`}
            src={slides[activeIndex].image}
            alt="Active"
            fill
            className="object-cover animate-fadeIn"
            sizes="(max-width: 768px) 100vw, 65vw"
            priority // Load the active slide immediately
          />

          {/* HINT OVERLAY */}
          <div
            className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full 
             opacity-100 md:opacity-0 md:group-hover:opacity-100 
             transition-opacity pointer-events-none flex items-center gap-2 z-30"
          >
            <Maximize2 size={12} />
            <span className="md:hidden">Double tap to expand</span>
            <span className="hidden md:inline">Double click to expand</span>
          </div>
        </div>

        {/* RIGHT Preview */}
        <div
          onClick={nextSlide}
          className="hidden md:block absolute right-0 w-[15%] h-[60%] cursor-pointer transition-all duration-500 z-10 group"
        >
          {/* FIX 3: Preview Image Optimization */}
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              key={`right-${getRightIndex(activeIndex)}`}
              src={slides[getRightIndex(activeIndex)].image}
              alt="Next"
              fill
              className="object-cover animate-fadeIn"
              sizes="15vw"
            />
          </div>
          <div className="mt-4 flex items-center justify-start gap-2 text-[#002b45] font-medium text-sm group-hover:opacity-80 transition-opacity">
            <span>Next</span>
            <img src="images/arrow22.svg" alt="arrow" />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 md:hidden z-30">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/80 rounded-full shadow-lg active:scale-95 transition-transform"
          >
            <Image
              src="images/arrow22.svg"
              alt="arrow"
              width={18}
              height={18}
              className="rotate-180"
            />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/80 rounded-full shadow-lg active:scale-95 transition-transform"
          >
            <Image
              src="images/arrow22.svg"
              alt="arrow"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-md animate-in fade-in duration-300">
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50"
          >
            <X size={40} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
            {/* FIX 4: Unoptimized for Full Screen Zoom */}
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].alt}
              fill
              className="object-contain shadow-2xl rounded-lg"
              unoptimized={true}
              priority
            />

            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-50"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-50"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none z-50">
              <h3 className="text-white text-xl md:text-2xl font-light tracking-wide bg-black/40 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
                {slides[activeIndex].category}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;
