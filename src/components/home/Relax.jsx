"use client";
import React, { useEffect, useRef, useState } from "react";

const Relax = () => {
  // SAFETY FIX: Prevent browser from restoring previous scroll position on refresh
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-start py-12 md:py-20 lg:py-25 px-4 md:px-6 lg:px-0">
      {/* --- NEW SCROLL WRITING TEXT COMPONENT --- */}
      <ScrollWritingText />
      {/* ----------------------------------------- */}

      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 md:mt-8 lg:mt-10 w-full gap-2 lg:gap-2">
        {/* Left Grid */}
        <div className="grid  md:grid-rows-2 w-full gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full h-[240px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden relative">
              <video
                src="https://res.cloudinary.com/dc00mvv7f/video/upload/v1770108028/video22_euvi1q.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <StatCard
              number={16}
              suffix="+"
              title="Years of Excellence"
              description="Decades of hands-on expertise in premium yachting, combining technical excellence with refined service standards."
              bgColor="bg-[#F5F5F5]"
              textColor="text-[#0A162C]"
              suffixColor="text-[#B1B1B1]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <StatCard
              number={30}
              suffix="+"
              title="Luxury Competencies"
              description="From yacht management to charter services and lifestyle experiences — a complete understanding of the luxury maritime world."
              bgColor="bg-[#001E53]"
              textColor="text-white"
              suffixColor="text-white/40"
            />
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid md:grid-rows-2 w-full gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="hidden lg:block"></div>
            <StatCard
              number={96}
              suffix="%"
              title="Client Satisfaction"
              description="Discretion, precision and reliability at every stage. Our clients value trust, quality and long-term partnerships."
              bgColor="bg-[#064A7D]"
              textColor="text-white"
              suffixColor="text-white/40"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <StatCard
              number={10}
              suffix="+"
              title="Executive Expertise"
              description="Built on leadership, strategic thinking and deep industry insight — delivering solutions that exceed expectations."
              bgColor="bg-[#AEBDCA]"
              textColor="text-[#0A162C]"
              suffixColor="text-[#0A162C66]"
            />
            <div className="w-full h-[240px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden relative">
              <video
                src="https://res.cloudinary.com/dc00mvv7f/video/upload/v1770108041/video33_p6y1o6.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- NEW COMPONENT: Text that fills as you scroll ---
const ScrollWritingText = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // The text content split into words for precise control
  const words = [
    "R",
    "e",
    "l",
    "a",
    "x",
    ",",
    " ",
    "u",
    "n",
    "w",
    "i",
    "n",
    "d",
    " ",
    "a",
    "n",
    "d",
    " ",
    "d",
    "i",
    "n",
    "e",
    " ",
    "i",
    "n",
    " ",
    "b",
    "e",
    "a",
    "u",
    "t",
    "i",
    "f",
    "u",
    "l",
    " ",
    "I",
    "t",
    "a",
    "l",
    "i",
    "a",
    "n",
    "-",
    "d",
    "e",
    "s",
    "i",
    "g",
    "n",
    "e",
    "d",
    " ",
    "l",
    "u",
    "x",
    "u",
    "r",
    "y",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // CONFIG:
      // Start turning black when text enters bottom 85% of screen
      const start = windowHeight * 0.85;
      // Finish turning black when text reaches top 35% of screen
      const end = windowHeight * 0.35;

      // Calculate 0 to 1 progress based on scroll position
      let p = (start - top) / (start - end);

      // Clamp values
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <h1 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-medium leading-tight transition-colors duration-100">
        {words.map((word, i) => {
          const wordStart = i / words.length;
          const isBlack = progress > wordStart;

          return (
            <React.Fragment key={i}>
              <span
                className="transition-colors duration-200"
                style={{
                  color: isBlack ? "#0A162C" : "#B1B1B1",
                }}
              >
                {word}
              </span>
              {/* Insert the break after "beautiful" (index 5) */}
              {i === 35 && <br className="hidden md:block" />}
            </React.Fragment>
          );
        })}
      </h1>
    </div>
  );
};

// Stat Card Component with Count Up Animation
const StatCard = ({
  number,
  suffix,
  title,
  description,
  bgColor,
  textColor,
  suffixColor,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000; // 2 seconds
    const startValue = 0;
    const endValue = number;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (endValue - startValue) + startValue,
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, number]);

  return (
    <div
      ref={cardRef}
      className={`w-full h-[240px] sm:h-[300px] md:h-[340px] ${bgColor} flex flex-col items-start justify-between rounded-2xl p-3 sm:p-4 md:p-5`}
    >
      <div className="flex flex-row items-center font-medium text-[40px] sm:text-[56px] md:text-[64px]">
        <h1 className={textColor}>{count}</h1>
        <h1 className={suffixColor}>{suffix}</h1>
      </div>
      <div className="flex flex-col items-start justify-between gap-1 sm:gap-2">
        <h1
          className={`${textColor} font-semibold text-[14px] sm:text-[18px] md:text-[20px] leading-tight`}
        >
          {title}
        </h1>
        <p
          className={`${textColor} text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 md:leading-7`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Relax;
