"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const DraggableCurvedSlider = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const slides = [
    { id: 1, image: "/images/item1.jpg", alt: "Luxury Yacht" },
    { id: 2, image: "/images/item2.jpg", alt: "Onboard Dining" },
    { id: 3, image: "/images/item3.jpg", alt: "Mediterranean Coast" },
    { id: 4, image: "/images/item4.jpg", alt: "Diving" },
    { id: 5, image: "/images/item5.jpg", alt: "Sunset Deck" },
    { id: 6, image: "/images/item6.jpg", alt: "Sunset Deck" },
    { id: 7, image: "/images/item7.jpg", alt: "Sunset Deck" },
    { id: 8, image: "/images/item8.jpg", alt: "Sunset Deck" },
    { id: 9, image: "/images/item9.jpg", alt: "Sunset Deck" },
    { id: 10, image: "/images/item10.jpg", alt: "Sunset Deck" },
    { id: 11, image: "/images/item11.jpg", alt: "Sunset Deck" },
    { id: 11, image: "/images/item12.jpg", alt: "Sunset Deck" },
    { id: 11, image: "/images/item13.jpg", alt: "Sunset Deck" },
    { id: 11, image: "/images/item14.png", alt: "Sunset Deck" },
    { id: 11, image: "/images/item15.png", alt: "Sunset Deck" },
    { id: 11, image: "/images/item16.png", alt: "Sunset Deck" },
    { id: 11, image: "/images/item17.png", alt: "Sunset Deck" },
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
            {/* MOBILE CURVE: Shallower (0.1 instead of 0.25) for narrow screens */}
            <clipPath id="curve-mask-mobile" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 Q 0.5 0.07 1 0 L 1 1 Q 0.5 0.95 0 1 Z" />
            </clipPath>

            {/* DESKTOP CURVE: Your original deep curve */}
            <clipPath id="curve-mask-desktop" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 Q 0.5 0.25 1 0 L 1 1 Q 0.5 0.85 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          ref={sliderRef}
          // Added 'clip-path-responsive' class here
          className={`w-full h-full overflow-x-auto flex gap-4 scrollbar-hide clip-path-responsive ${
            isDown
              ? "cursor-grabbing snap-none"
              : "cursor-grab snap-x snap-mandatory"
          }`}
          // Removed inline style={{ clipPath: ... }} in favor of CSS class
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[33vw] h-full flex-shrink-0 snap-center relative select-none"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover pointer-events-none"
                priority={slide.id <= 2}
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
