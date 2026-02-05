"use client";

import React from "react";
import { RiLightbulbLine, RiShieldCheckLine, RiLineChartLine } from "react-icons/ri";

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-montserrat mb-4">
              Stock Bureau India
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-[#15803d] mb-8">
              Your Trusted Partner in Smart Investing
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Stock Bureau India is a stock market consulting and investment advisory company based in <span className="font-semibold text-gray-900">Varanasi</span>, helping individuals and businesses make informed, disciplined, and goal-oriented investment decisions.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              We focus on <span className="font-semibold text-[#15803d]">research-backed strategies</span>, <span className="font-semibold text-[#15803d]">risk management</span>, and <span className="font-semibold text-[#15803d]">long-term wealth creation</span>.
            </p>
          </div>

          {/* Highlighted Statement */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[#15803d] rounded-xl p-6 md:p-8 max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-semibold text-gray-900 text-center flex items-center justify-center flex-wrap">
              <span className="mr-3 text-3xl">👉</span>
              <span>Because investing should be <span className="text-[#15803d]">strategic</span>, not <span className="line-through text-red-600">speculative</span>.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
