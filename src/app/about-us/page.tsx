import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RiCheckDoubleLine } from "react-icons/ri";

export const dynamic = "force-static";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 lg:pt-28 pb-16">

        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content & Image Split */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            {/* Image Section - First on mobile for visual appeal, or second. Let's generally keep text first for "About Us" reading flow, or image first for engagement. User said "like all about page", usually image is prominent. Let's put image on right for Desktop. */}
            <div className="lg:w-1/2 order-2 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square max-h-[500px]">
                <Image
                  src="/why-choose-us.png" // Reusing this relevant image
                  alt="Stock Bureau India Team and Philosophy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 order-1 lg:order-1 space-y-6 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p>
                <strong>Stock Bureau India</strong> is a premier stock market consulting
                and investment advisory firm based in Varanasi. We were built on a
                simple yet powerful belief: investing should be <strong>informed, disciplined, and honest</strong>.
              </p>
              <p>
                In an industry often clouded by noise and false promises, we stand for clarity. With over <strong>5+ years of experience</strong>, we have guided investors through various market cycles, helping them navigate volatility and build robust portfolios.
              </p>
              <p>
                Our track record speaks for itself. We have successfully guided and managed investments worth more than <strong>₹50 Lakhs+</strong>, always prioritizing long-term wealth creation over short-term speculation.
              </p>
              <div className="bg-green-50 border-l-4 border-[#15803d] p-4 rounded-r-lg mt-6">
                <p className="italic text-gray-800 font-medium">
                  "We don’t promise guaranteed returns — instead, we help investors develop clarity, patience, and a winning mindset."
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section - Integrated clean look */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Why Investors Trust Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Proven Experience", desc: "5+ years navigating bullish and bearish market cycles." },
                { title: "₹50 Lakhs+ Managed", desc: "Disciplined and risk-aware handling of investor capital." },
                { title: "90% Client Satisfaction", desc: "Our clients value our honesty and consistent guidance." },
                { title: "Risk-Focused Approach", desc: "Capital protection is prioritized over unrealistic returns." },
                { title: "Personalized Guidance", desc: "Strategies tailored to your unique financial goals and risk appetite." },
                { title: "Transparent & Ethical", desc: "No false promises. No hidden agendas. Just responsible investing." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="mt-1 flex-shrink-0 text-[#15803d] text-2xl">
                    <RiCheckDoubleLine />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-[#15803d] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative elements could go here */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
              <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
                "To guide investors with integrity, knowledge, and a long-term vision for sustainable wealth creation."
              </p>
              <div className="pt-6">
                <a
                  href="/#contact" // Assuming contact section ID or page
                  className="inline-block bg-white text-[#15803d] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
