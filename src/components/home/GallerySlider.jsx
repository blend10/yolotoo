"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Image from "next/image";

const galleryData = [
  {
    id: 1,
    title: "Cabins",
    description:
      "Our eight spacious, above-deck cabins accommodate up to 16 guests in quiet comfort. Each features floor-to-ceiling windows.",
    image: "/images/photo1.jpg",
    category: "Exterior",
  },
  {
    id: 2,
    title: "Dining Area",
    description:
      "Experience world-class dining with panoramic views of the ocean, served by our expert culinary team.",
    image: "/images/photo2.jpg",
    category: "Interior",
  },
  {
    id: 3,
    title: "Sun Deck",
    description:
      "Relax on our expansive sun deck featuring plush loungers and a jacuzzi for the ultimate unwinding experience.",
    image: "/images/photo3.jpg",
    category: "Exterior",
  },
  {
    id: 4,
    title: "Master Suite",
    description:
      "The master suite offers unparalleled luxury with a private terrace, king-sized bed, and premium amenities.",
    image: "/images/photo4.jpg",
    category: "Interior",
  },
  {
    id: 5,
    title: "Lounge Bar",
    description:
      "Socialize in our sophisticated lounge bar, stocked with premium spirits and fine wines from around the world.",
    image: "/images/photo5.jpg",
    category: "Interior",
  },
  {
    id: 6,
    title: "Water Sports",
    description:
      "Access our collection of water toys including jet skis, paddleboards, and diving gear from the rear platform.",
    image: "/images/photo6.jpg",
    category: "Activity",
  },
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const thumbnailsRef = useRef(null);
  const isFirstRender = useRef(true);

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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

  useEffect(() => {
    if (thumbnailsRef.current) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      const activeThumbnail = thumbnailsRef.current.children[currentIndex];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div className="max-w-450 mx-auto px-4 py-8 md:py-20">
      <div className="flex justify-end mb-4">
        <span className="text-[#0A162C] font-medium text-lg tracking-widest bg-white/50 backdrop-blur px-3 py-1 rounded-full">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(galleryData.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[800px]">
        {/* Main Display Area */}
        <div
          className="relative w-full lg:w-[80%] h-[400px] md:h-[500px] lg:h-full rounded-[24px] md:rounded-[32px] overflow-hidden group bg-gray-200 cursor-zoom-in"
          onDoubleClick={() => setIsFullScreen(true)}
        >
          {/* FIX 1: Use Next.js Image for main display with quality settings */}
          <Image
            src={galleryData[currentIndex].image}
            alt={galleryData[currentIndex].title}
            fill
            className="object-cover transition-all duration-500"
            priority={true}
          />

          <div
            className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full 
            opacity-100 md:opacity-0 md:group-hover:opacity-100 
            transition-opacity pointer-events-none flex items-center gap-2 z-20"
          >
            <Maximize2 size={12} />
            <span className="md:hidden">Double tap to expand</span>
            <span className="hidden md:inline">Double click to expand</span>
          </div>

          <div className="absolute bottom-8 left-4 md:left-8 max-w-[90%] md:max-w-[480px] z-10 pointer-events-none">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-white shadow-lg pointer-events-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3">
                {galleryData[currentIndex].title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90 font-light line-clamp-3 md:line-clamp-none">
                {galleryData[currentIndex].description}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute z-20 
              top-1/3 -translate-y-1/2 left-4 
              md:top-auto md:translate-y-0 md:bottom-8 md:left-auto md:right-24 
              w-10 h-10 md:w-14 md:h-14 
              bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center 
              transition-all shadow-lg cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-[#0A162C]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute z-20 
              top-1/3 -translate-y-1/2 right-4 
              md:top-auto md:translate-y-0 md:bottom-8 md:right-8
              w-10 h-10 md:w-14 md:h-14 
              bg-white/80 hover:bg-white backdrop-blur rounded-full flex items-center justify-center 
              transition-all shadow-lg cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-6 h-6 text-[#0A162C]" />
          </button>
        </div>

        {/* Thumbnails Sidebar */}
        <div
          ref={thumbnailsRef}
          className="w-full lg:w-[20%] flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide snap-x"
        >
          {galleryData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`
                relative flex-shrink-0 lg:flex-shrink snap-center
                w-[140px] md:w-[160px] lg:w-full h-[90px] md:h-[100px] lg:h-[calc(100%/6-14px)] 
                rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 bg-gray-200 `}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"

                // Thumbnails don't need extremely high quality, 75-80 is fine
              />
              {currentIndex !== index && (
                <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors z-10" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- FULL SCREEN MODAL --- */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-md animate-in fade-in duration-300">
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50"
          >
            <X size={40} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
            {/* FIX 2: Use unoptimized for full screen modal */}
            {/* We want the absolute maximum quality when the user zooms in */}
            <Image
              src={galleryData[currentIndex].image}
              alt={galleryData[currentIndex].title}
              fill
              className="object-contain shadow-2xl rounded-lg"
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
                {galleryData[currentIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;
