"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to close menu
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    // Fixed header with z-index 50
    <div className="bg-black/10 backdrop-blur-2xl fixed top-0 left-0 z-50 w-full transition-all border-b border-white/5">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto flex py-4 px-6 justify-between flex-row items-center">
        {/* 1. LEFT: Home Link (Desktop Only) */}
        <div className="hidden md:block w-1/3">
          <Link href="/">
            <h1 className="text-white font-semibold uppercase cursor-pointer hover:opacity-80 transition-opacity tracking-widest text-sm">
              home
            </h1>
          </Link>
        </div>

        {/* 2. CENTER: Logo */}
        <div className="w-auto md:w-1/3 flex md:justify-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={170}
              height={36}
              className="w-[120px] md:w-[170px] h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* 3. RIGHT: Desktop Brochure Button */}
        <div className="hidden md:flex w-1/3 justify-end">
          <Link href="/brochure">
            {/* UPDATED MODERN BUTTON (Glassmorphism) */}
            <button className="group relative flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300">
              <span className="text-white text-sm font-medium tracking-wide uppercase">
                Brochure
              </span>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black transition-transform duration-300 ">
                {/* Simple Arrow SVG */}
                <img src="/images/arrow.svg" alt="" />
              </div>
            </button>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`absolute top-full left-0 w-full bg-black/80 backdrop-blur-3xl border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 py-12"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-white text-xl font-semibold uppercase tracking-widest hover:text-gray-300 transition-colors">
              Home
            </h1>
          </Link>

          {/* Mobile Brochure Button with Auto-Close */}
          <Link href="/brochure" onClick={closeMenu}>
            <button className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 active:scale-95 transition-all">
              <span className="text-white text-lg font-medium tracking-wide">
                Brochure
              </span>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
                <img src="/images/arrow.svg" alt="" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
