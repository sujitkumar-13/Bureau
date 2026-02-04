"use client";

import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Our Philosophy
          </h2>
        </div>

        {/* Quote Card */}
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12 mb-12 relative">
          <RiDoubleQuotesL className="absolute top-6 left-6 text-5xl text-blue-100" />
          <RiDoubleQuotesR className="absolute bottom-6 right-6 text-5xl text-blue-100" />
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 text-center leading-relaxed mb-8 italic">
            Successful investing is not about timing the market, but about time, discipline, and the right strategy.
          </p>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              At Stock Bureau India, we believe in{" "}
              <span className="font-semibold text-[#1e40af]">education-led investing</span>,{" "}
              <span className="font-semibold text-[#1e40af]">realistic expectations</span>, and{" "}
              <span className="font-semibold text-[#1e40af]">consistency</span>.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center">
            <span className="text-yellow-600 mr-2">⚠️</span>
            Disclaimer
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Stock market investments are subject to market risks. Past performance is not indicative of future returns. Clients are advised to understand all risks before investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
