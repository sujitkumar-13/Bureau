"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Stock Bureau India
          </h2>
          <p className="text-xl text-gray-600">
            Research-driven investing with a long-term mindset
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/why-choose-us.png"
              alt="Investment Consulting"
              width={500}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-6">
              A Trusted Partner in Your Investment Journey
            </h3>

            <div className="text-gray-700 space-y-4 text-lg">
              <p>📍 <strong>Based in Varanasi</strong>, serving investors across India.</p>
              <p>📑 <strong>Research-backed & data-driven approach</strong>.</p>
              <p>👥 <strong>Personalized consulting</strong>, not generic tips.</p>
              <p>🔒 <strong>Strong focus on risk control</strong>.</p>
              <p>🤝 <strong>Long-term relationship mindset</strong>.</p>
            </div>

            <div className="mt-10">
              <Link
                href="#contact"
                className="bg-[#15803d] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#166534] shadow-lg hover:scale-105 active:scale-95 transition inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

