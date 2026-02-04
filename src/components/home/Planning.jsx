"use client";
import React, { useState, useEffect } from "react";

const Planning = () => {
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
      {/* 1. Main Container */}
      <div className="relative w-[97%] md:w-full max-w-450 h-200 mx-auto rounded-2xl my-20  overflow-hidden">
        {/* Background Video */}
        <video
          src="https://res.cloudinary.com/dc00mvv7f/video/upload/v1770108075/yacht_a3vsag.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        ></video>

        {/* Content Wrapper */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center w-full z-10">
          {/* Glass Card */}
          <div className="w-[90%] bg-[#00253933] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-0">
              {/* Title Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="font-semibold text-3xl md:text-[40px] leading-tight uppercase text-white drop-shadow-md">
                  Start Planning <br className="hidden md:block" /> Your Private
                  Yacht <br className="hidden md:block" /> Vacation
                </h1>
              </div>

              {/* Description & Button Section */}
              <div className="flex flex-col items-center md:items-end justify-between gap-6 w-full md:w-1/2">
                <h2 className="text-white max-w-lg">
                  Receive your personalized proposal with recommended yachts,
                  real-time availability & pricing tailored to your travel
                  style.
                </h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#00183A] text-base md:text-[18px] font-medium px-6 py-3 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-lg active:scale-95 duration-200"
                >
                  Plan My Yacht Escape
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
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
              {/* Name */}
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

              {/* Last Name */}
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

              {/* Email */}
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

              {/* Subject */}
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

              {/* Message */}
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
    </>
  );
};

export default Planning;
