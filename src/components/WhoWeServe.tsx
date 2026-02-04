"use client";

import React from "react";
import {
  RiUser3Line,
  RiBriefcase4Line,
  RiStore2Line,
  RiSeedlingLine,
  RiPieChart2Line,
} from "react-icons/ri";

interface Audience {
  title: string;
  icon: React.ReactNode;
}

const audiences: Audience[] = [
  {
    title: "Retail Investors",
    icon: <RiUser3Line className="text-4xl" />,
  },
  {
    title: "Working Professionals",
    icon: <RiBriefcase4Line className="text-4xl" />,
  },
  {
    title: "Business Owners",
    icon: <RiStore2Line className="text-4xl" />,
  },
  {
    title: "First-Time Investors",
    icon: <RiSeedlingLine className="text-4xl" />,
  },
  {
    title: "Long-Term Wealth Planners",
    icon: <RiPieChart2Line className="text-4xl" />,
  },
];

const WhoWeServeSection: React.FC = () => {
  return (
    <section id="who-we-serve" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600">
            Guiding diverse investors toward financial clarity
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg hover:bg-blue-50 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-[#1e40af] group-hover:text-white transition-all duration-300">
                <div className="text-[#1e40af] group-hover:text-white transition-colors">
                  {audience.icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#1e40af] transition-colors">
                {audience.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;