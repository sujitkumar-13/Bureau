"use client";

import React, { useState, useEffect } from "react";
import { RiStarFill } from "react-icons/ri";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mishra",
    role: "Varanasi",
    image: "/testimonials/1.jpg",
    feedback:
      "Before coming to Stock Bureau India, the stock market felt confusing. They explained things in a simple way and focused more on managing risk than making false promises. That really built my trust.",
    rating: 5,
  },
  {
    name: "Neha Singh",
    role: "Working Professional",
    image: "/testimonials/2.jpg",
    feedback:
      "As a beginner, I had many doubts and fears. The team guided me step by step and helped me understand long-term investing clearly. I finally feel confident about my investment decisions.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    image: "/testimonials/3.jpg",
    feedback:
      "What stood out for me was their honesty. There were no guarantees or flashy claims—just logical, research-based guidance. That's exactly what serious investors need.",
    rating: 5,
  },
  {
    name: "Pooja Sharma",
    role: "First-Time Investor",
    image: "/testimonials/4.jpg",
    feedback:
      "They patiently explained market risks and helped me plan investments according to my goals. I felt supported and informed throughout the process.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trust isn't built overnight. It grows with honest advice, clear communication, and responsible guidance. Here's what our clients have to say about their journey with Stock Bureau India.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-full text-left">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-600">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-base italic">
                    "{t.feedback}"
                  </p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <RiStarFill key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex
                  ? "bg-[#15803d] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 mt-8 italic">
          📌 Results may vary. Testimonials reflect individual experiences and do not guarantee investment returns.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
