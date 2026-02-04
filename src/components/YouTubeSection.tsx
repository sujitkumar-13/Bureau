"use client";

import React from "react";
import Image from "next/image";
import {
  RiYoutubeFill,
  RiPlayFill,
  RiInstagramFill,
  RiTelegramLine,
} from "react-icons/ri";

const YouTubeSection: React.FC = () => {
  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Our YouTube Channel
          </h2>
          <p className="text-xl text-gray-600">
            100K+ Subscribers Learning Trading Daily
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Daily Market Analysis & Trading Tips
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join our thriving community of traders who rely on our daily
                market insights, technical analysis, and live trading sessions.
                Our YouTube channel has become the go-to resource for both
                beginners and experienced traders.
              </p>

              {/* Stats - removed 100K+ Subscribers per request and centered remaining two */}
              <div className="grid grid-cols-2 gap-6 text-center max-w-md">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Videos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Daily</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/@benzztrading", "_blank")
                }
                className="cursor-pointer bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <RiYoutubeFill className="w-5 h-5" />
                <span>Watch Now</span>
              </button>
              {/* Telegram button - white with blue border/text */}
              <button
                onClick={() =>
                  window.open("https://t.me/benzzztrading", "_blank")
                }
                className="cursor-pointer bg-white text-[#0088cc] border border-[#0088cc] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#e6f7ff] transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <RiTelegramLine className="w-5 h-5" />
                <span>Telegram</span>
              </button>
              {/* Instagram button - colorful gradient similar to Instagram */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/benzz_trading",
                    "_blank"
                  )
                }
                className="cursor-pointer bg-linear-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-95 transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg"
              >
                <RiInstagramFill className="w-5 h-5" />
                <span>Instagram</span>
              </button>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl relative">
              <iframe
                src="https://www.youtube.com/embed/ZeDEOv90qb4?si=bdLACc659yJ40Wzq&autoplay=1&mute=1&playsinline=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* LIVE Badge (optional, uncomment if needed) */}
            {/* <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
    <div className="flex items-center space-x-2 text-red-600">
      <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
      <span className="text-sm font-medium">LIVE</span>
    </div>
  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
