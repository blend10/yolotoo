"use client"; // Required for hooks in Next.js App Router

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// 1. DATA
const contentData = [
  {
    id: 1,
    title: "Midday: Adventure & Exploration",
    text: "Anchor in a secluded cove off Formentera, where the turquoise sea is irresistible. Dive into an afternoon of adventure—snorkeling through vibrant marine life, jet-skiing across the waves, or paddleboarding along the coastline. After working up an appetite, the onboard chef serves a Mediterranean feast on the shaded aft deck, complete with freshly grilled seafood, chilled champagne, and panoramic ocean views.",
    image: "/images/section1.jpg",
    width: 640,
    height: 504,
    desktopPosition: "top-10 right-0",
    slideFrom: "right",
  },
  {
    id: 2,
    title: "Morning: Serenity & Indulgence",
    text: "Wake up to the gentle lapping of waves as the sun rises over the Balearic horizon. Step onto the aft deck, where a beautifully prepared breakfast of fresh tropical fruits, artisanal pastries, and gourmet coffee awaits. As the yacht glides through crystal-clear waters, take a refreshing morning dip off the swim platform before lounging on the sun-kissed deck.",
    image: "/images/section2.png",
    width: 848,
    height: 693,
    desktopPosition: "top-[25%] left-0",
    slideFrom: "left",
  },
  {
    id: 3,
    title: "Evening: Sunset & Celebration",
    text: "As golden hour paints the sky, sip sundowners on the flybridge while the yacht cruises towards Ibiza’s iconic Es Vedrà. A private sunset dinner is served under the stars, featuring a bespoke tasting menu and fine wines selected by the crew. As the night unfolds, choose between an intimate onboard soirée with curated cocktails and live music or step ashore to experience Ibiza’s legendary nightlife in VIP style.",
    image: "/images/section3.jpg",
    width: 848,
    height: 693,
    desktopPosition: "top-[50%] right-10",
    slideFrom: "right",
  },
  {
    id: 4,
    title: "Afternoon: Relaxation & Rejuvenation",
    text: "After lunch, retreat to the upper deck’s jacuzzi, cocktail in hand, as the sea breeze drifts around you. Indulge in a spa treatment or simply unwind on the plush sunbeds, basking in the effortless luxury of YOLO TOO. For a cultural touch, tender ashore to explore Ibiza’s hidden beaches or stroll through the charming streets of a whitewashed Balearic village.",
    image: "/images/section4.jpg",
    width: 640,
    height: 504,
    desktopPosition: "bottom-0 left-0",
    slideFrom: "left",
  },
];

// --- REUSABLE SCROLL REVEAL TEXT COMPONENT (CHARACTER BY CHARACTER) ---
// Turns text from gray to black/color letter by letter as you scroll
const ScrollRevealText = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // CHANGED: Split by empty string "" to get individual characters
  const chars = text.split("");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // CONFIG: Start revealing when element enters bottom 90% of screen
      const start = windowHeight * 0.9;
      // Finish revealing when element reaches top 40% of screen
      const end = windowHeight * 0.4;

      let p = (start - top) / (start - end);
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => {
        // Map progress to character index
        const charStart = i / chars.length;
        const isVisible = progress > charStart;

        return (
          <span
            key={i}
            // Faster duration (100ms) makes character animations look smoother
            className="transition-colors duration-100"
            style={{
              // Gray (#B1B1B1) -> Dark Blue (#002539)
              color: isVisible ? "#002539" : "#B1B1B1",
            }}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
};

// Reusable "Luxurious" Reveal Component
const SmoothReveal = ({ children, className = "", direction = "left" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "left" ? "-translate-x-24" : "translate-x-24";

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) 
        ${className}
        ${isVisible ? "opacity-100 translate-x-0 blur-0" : `opacity-0 ${hiddenTransform} blur-sm`}
      `}
    >
      {children}
    </div>
  );
};

const Onboard = () => {
  return (
    <div className="max-w-450 mx-auto relative px-6 overflow-hidden">
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mb-16 lg:mb-32 gap-8 lg:gap-0">
        <div className="lg:w-1/2">
          <h1 className="text-[#0A162C] font-medium text-3xl md:text-4xl lg:text-[50px] leading-tight">
            How does your day look <br /> onboard Yolo Too?
          </h1>
        </div>
        <div className="lg:w-1/2 lg:text-right">
          {/* --- REPLACED STATIC P TAG WITH SCROLL REVEAL COMPONENT --- */}
          <ScrollRevealText
            className="text-base md:text-lg lg:text-[20px] leading-relaxed transition-colors duration-300"
            text="Crafted for a luxury Balearic escape, YOLO TOO hosts up to 10 guests in four en-suite cabins with modern comfort and elegance. After dropping anchor in a secluded cove, the clear turquoise sea becomes your playground for snorkeling, swimming and waterside exploration."
          />
          {/* --------------------------------------------------------- */}
        </div>
      </div>

      {/* --- MOBILE LAYOUT (Flex Column) --- */}
      <div className="flex flex-col gap-4 relative lg:hidden">
        {contentData.map((item) => (
          <SmoothReveal
            key={`mobile-${item.id}`}
            direction={item.id % 2 === 0 ? "right" : "left"}
            className="mb-10 text-left"
          >
            <div className="w-full">
              {/* FIX 1: OPTIMIZED MOBILE IMAGES */}
              <Image
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                // On mobile, these images are full width (100vw).
                // Quality 90 fixes the Retina blur.
                sizes="100vw"
              />
            </div>
            <h2 className="text-[#002539] text-2xl font-semibold mt-2">
              {item.title}
            </h2>
            <p className="font-light text-[#002539] text-base max-w-xl">
              {item.text}
            </p>
          </SmoothReveal>
        ))}
      </div>

      {/* --- DESKTOP LAYOUT (Absolute Positions + Smooth Reveal) --- */}
      <div className="hidden lg:block relative w-full h-[2800px]">
        {contentData.map((item) => (
          <SmoothReveal
            key={`desktop-${item.id}`}
            direction={item.slideFrom}
            className={`absolute w-[40%] flex flex-col items-end ${item.desktopPosition}`}
          >
            <div className="w-fit">
              {/* FIX 2: OPTIMIZED DESKTOP IMAGES */}
              <Image
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                // On desktop, these take up about 40% of the viewport width.
                sizes="(max-width: 1200px) 50vw, 40vw"
                quality={90}
              />
              <div>
                <h2 className="text-[#002539] text-[26px] font-semibold mt-4">
                  {item.title}
                </h2>
                <p className="font-light text-[#002539] text-lg ">
                  {item.text}
                </p>
              </div>
            </div>
          </SmoothReveal>
        ))}
      </div>
    </div>
  );
};

export default Onboard;
