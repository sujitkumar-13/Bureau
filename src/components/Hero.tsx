"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/heroBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: logo + text stacked, left-aligned along same vertical axis */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Removed duplicate/overlay logo per request */}
              <h1 className="text-4xl font-bold text-gray-900 font-montserrat leading-tight">
                Your Trusted Partner in Smart Investing
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Stock Bureau India is a stock market consulting and investment advisory company based in Delhi, helping individuals and businesses make informed, disciplined, and goal-oriented investment decisions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=916394016514"
                className="inline-flex items-center justify-center cursor-pointer bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold bg-[#15803d] hover:bg-[#166534] transition-colors whitespace-nowrap"
              >
                Start Investing
              </a>

              <a
                target="_blank"
                href="/#contact"
                className="inline-flex items-center justify-center cursor-pointer border-2 border-primary text-primary px-8 py-4 rounded-lg text-[#15803d] text-lg font-semibold hover:bg-primary hover:bg-[#15803d] hover:text-white transition-colors whitespace-nowrap"
              >
                Book Consulting Call
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-user-line text-primary" />
                </div>
                <span></span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-time-line text-primary" />
                </div>
                <span></span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-global-line text-primary" />
                </div>
                <span></span>
              </div>
            </div>
          </div>

          {/* Right side image or extra content could go here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
