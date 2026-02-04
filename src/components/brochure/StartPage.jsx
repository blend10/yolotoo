import React from "react";
import Image from "next/image";

const StartPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden">
      {/* Background Hero Image */}
      <Image
        src="/images/BrochureBg.jpg"
        alt="Yacht Brochure Background"
        fill
        sizes="100vw"
        priority
        className="object-cover -z-10"
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Content */}
      <div className="relative bottom-10 z-10 flex flex-col items-center gap-8">
        <h1 className="text-[40px] md:text-[60px] font-medium text-white tracking-wide uppercase drop-shadow-lg">
          Brochure
        </h1>

        <div className="animate-bounce mt-4 cursor-pointer">
          <Image
            src="/images/arrowDown.svg"
            alt="Scroll Down"
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
