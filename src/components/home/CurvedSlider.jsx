"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const DraggableCurvedSlider = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const slides = [
    { id: 1, image: "/images/slider1.jpg", alt: "Luxury Yacht" },
    { id: 2, image: "/images/slider2.jpg", alt: "Onboard Dining" },
    { id: 3, image: "/images/slider3.jpg", alt: "Mediterranean Coast" },
    { id: 4, image: "/images/slider4.jpg", alt: "Diving" },
    { id: 5, image: "/images/slider5.jpg", alt: "Sunset Deck" },
    { id: 6, image: "/images/slider6.jpg", alt: "Sunset Deck" },
    { id: 7, image: "/images/slider7.jpg", alt: "Sunset Deck" },
    { id: 8, image: "/images/slider8.jpg", alt: "Sunset Deck" },
    { id: 9, image: "/images/slider9.jpg", alt: "Sunset Deck" },
    { id: 10, image: "/images/slider10.jpg", alt: "Sunset Deck" },
    { id: 11, image: "/images/slider11.jpg", alt: "Sunset Deck" },
    { id: 12, image: "/images/slider12.jpg", alt: "Sunset Deck" },
    { id: 13, image: "/images/slider13.jpg", alt: "Sunset Deck" },
    { id: 14, image: "/images/slider14.jpg", alt: "Sunset Deck" },
    { id: 15, image: "/images/slider15.jpg", alt: "Sunset Deck" },
    { id: 16, image: "/images/slider16.jpg", alt: "Sunset Deck" },
    { id: 17, image: "/images/slider17.jpg", alt: "Sunset Deck" },
    { id: 18, image: "/images/slider18.jpg", alt: "Sunset Deck" },
    { id: 19, image: "/images/slider19.jpg", alt: "Sunset Deck" },
    { id: 20, image: "/images/slider20.jpg", alt: "Sunset Deck" },
    { id: 21, image: "/images/slider21.jpg", alt: "Sunset Deck" },
    { id: 22, image: "/images/slider22.jpg", alt: "Sunset Deck" },
    { id: 23, image: "/images/slider23.jpg", alt: "Sunset Deck" },
    { id: 24, image: "/images/slider24.jpg", alt: "Sunset Deck" },
    { id: 25, image: "/images/slider25.jpg", alt: "Sunset Deck" },
  ];

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6 mb-12 select-none">
        <h2 className="text-3xl md:text-4xl font-medium text-[#002b45] mb-6">
          The Yolo Too Experience
        </h2>
        <p className="text-[#002539] text-sm md:text-base mx-auto">
          The YOLO TOO experience is defined by refined comfort, personalized
          service and unforgettable moments at sea. From carefully curated
          itineraries to seamless onboard living, every detail is designed to
          offer a relaxed yet elevated yachting journey through the
          Mediterranean.
        </p>
      </div>

      <div className="relative w-full h-[420px] md:h-[500px]">
        {/* SVG Definition Block */}
        <svg className="absolute w-0 h-0">
          <defs>
            {/* MOBILE CURVE */}
            <clipPath id="curve-mask-mobile" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 Q 0.5 0.07 1 0 L 1 1 Q 0.5 0.95 0 1 Z" />
            </clipPath>

            {/* DESKTOP CURVE */}
            <clipPath id="curve-mask-desktop" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 Q 0.5 0.25 1 0 L 1 1 Q 0.5 0.85 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          ref={sliderRef}
          className={`w-full h-full overflow-x-auto flex gap-4 scrollbar-hide clip-path-responsive ${
            isDown
              ? "cursor-grabbing snap-none"
              : "cursor-grab snap-x snap-mandatory"
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[33vw] h-full flex-shrink-0 snap-center relative select-none"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover pointer-events-none"
                // FORCE SHARPNESS STRATEGY:
                // We deliberately overestimate the size.
                // Mobile: Slot is 85vw -> We request 100vw
                // Tablet: Slot is 45vw -> We request 80vw (force double density)
                // Desktop: Slot is 33vw -> We request 60vw (force double density)
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                // Maximum quality (disable compression artifacts)
                quality={100}
                // Prioritize visible ones for speed
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Default to Mobile Curve */
        .clip-path-responsive {
          clip-path: url(#curve-mask-mobile);
        }

        /* Switch to Desktop Curve on larger screens */
        @media (min-width: 768px) {
          .clip-path-responsive {
            clip-path: url(#curve-mask-desktop);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default DraggableCurvedSlider;
