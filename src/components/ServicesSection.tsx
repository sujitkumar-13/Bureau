
"use client";

import React from "react";
import {
  RiLineChartLine,
  RiLightbulbLine,
  RiPieChartLine,
  RiSearchLine,
  RiShieldCheckLine,
} from "react-icons/ri";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Stock Market Consulting",
    description:
      "Professional guidance for equity market participation based on market analysis, trends, and individual risk profiles.",
    icon: <RiLineChartLine className="text-primary text-3xl" />,
  },
  {
    title: "Investment Advisory",
    description:
      "Tailored investment strategies aligned with your financial goals — short-term, medium-term, or long-term.",
    icon: <RiLightbulbLine className="text-primary text-3xl" />,
  },
  {
    title: "Portfolio Review & Optimization",
    description:
      "Detailed evaluation of existing portfolios to improve performance, manage risk, and rebalance effectively.",
    icon: <RiPieChartLine className="text-primary text-3xl" />,
  },
  {
    title: "Market Research & Analysis",
    description:
      "Technical and fundamental analysis to support informed investment decisions.",
    icon: <RiSearchLine className="text-primary text-3xl" />,
  },
  {
    title: "Risk Management Guidance",
    description:
      "Helping investors understand and manage market volatility with structured approaches.",
    icon: <RiShieldCheckLine className="text-primary text-3xl" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-10 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive Investment Solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <div className="text-[#1e40af] text-2xl">
                    {service.icon}
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 text-left text-gray-600 leading-relaxed flex-1">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
