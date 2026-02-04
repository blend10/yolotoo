"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <footer className="bg-[#0F1724] w-full">
        <div className="max-w-450 mx-auto px-6 py-12 md:py-20 border-b border-[#E6E6E6]/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-10 lg:gap-0">
            <div className="flex flex-col items-start gap-6 ">
              <h1 className="text-[#E6E6E6] text-3xl md:text-[40px] font-medium leading-tight">
                Have questions or ready to <br className="hidden md:block" />{" "}
                plan your escape?
              </h1>
              <p className="text-[#E6E6E6] text-sm md:text-base leading-relaxed text-gray-400">
                Our team is here to assist with availability, itineraries and
                personalized <br className="hidden md:block" /> yacht charter
                requests.
              </p>

              {/* TRIGGER BUTTON */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#0F1724] uppercase font-semibold text-xs tracking-wide bg-white rounded-full px-6 py-3 hover:bg-gray-100 transition-colors"
              >
                Plan Your Yacht Escape
              </button>
            </div>

            <div className="flex flex-row items-start gap-4 max-w-sm">
              <div>
                <h1 className="text-xl uppercase text-white font-bold opacity-50">
                  /
                </h1>
              </div>
              <div>
                <p className="text-[#E6E6E6] text-sm leading-relaxed text-gray-400">
                  All charters are tailored to your preferences,{" "}
                  <br className="hidden md:block" />
                  availability and seasonal conditions to ensure{" "}
                  <br className="hidden md:block" /> the best possible
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-450 mx-auto px-6 py-12 md:py-20 flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-0">
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-row gap-6 text-[#E6E6E6] text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/brochure"
                className="hover:text-white transition-colors"
              >
                Brochure
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#E6E6E6] text-[10px] font-medium uppercase tracking-wider opacity-60">
                  Contact Us
                </h2>
                <a
                  href="tel:+34678983685"
                  className="text-[#E6E6E6] text-sm font-medium hover:text-white"
                >
                  <div className="flex flex-row gap-3 items-center">
                    {/* Make sure this path is correct or use a library icon */}
                    <img
                      src="/images/whatsapp.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <h2>+34 678 98 36 85</h2>
                  </div>
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-[#E6E6E6] text-[10px] font-medium uppercase tracking-wider opacity-60">
                  Availability
                </h2>
                <span className="text-[#E6E6E6] text-sm font-medium">
                  24/7 Concierge Service
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-6">
            <div className="w-[140px] md:w-[166px]">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={166}
                height={38}
                className="w-full h-auto"
              />
            </div>

            <div className="text-[#E6E6E6] text-xs font-medium flex flex-col lg:items-end gap-2 text-left lg:text-right opacity-60">
              <p>
                Questions? Let’s plan your escape. <br /> Contact our team for
                personalized charter options.
              </p>
              <p>© 2026 — Copyright</p>
            </div>
          </div>
        </div>
      </footer>

      {/* POPUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          {/* Modal Content */}
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl p-6 md:p-8 animate-scaleIn relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {/* Close Icon (X) */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="EX: Eliza"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="EX: Maguire"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="EX: Eliza Maguire@FlexUI.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg bg-[#0f172a] text-white font-medium hover:bg-[#1e293b] transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Footer;
