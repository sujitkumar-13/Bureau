"use client";

import React from "react";

const FAQs = [
  { q: "What do you do?", a: "Stock market consulting & investment advisory." },
  { q: "Do you give stock tips?", a: "No. We offer strategy-based guidance, not tips." },
  { q: "Who can invest with you?", a: "Beginners, professionals & long-term investors." },
  { q: "How are strategies made?", a: "Based on research, risk profile & goals." },
  { q: "Do you guarantee returns?", a: "No. Markets involve risk; returns aren’t guaranteed." },
  { q: "Is investing risky?", a: "Yes, but risk can be managed with planning." },
  { q: "Long-term or trading?", a: "Primarily long-term investing guidance." },
  { q: "Can you review my portfolio?", a: "Yes, portfolio review & optimization available." },
  { q: "How do I start?", a: "Book a consultation and goal assessment." },
  { q: "Is it beginner-friendly?", a: "Yes, we guide you step-by-step." },
  { q: "Is my data safe?", a: "Yes, complete confidentiality maintained." },
  { q: "Online consultation available?", a: "Yes, online & offline both." },
  { q: "Do I need a demat account?", a: "Yes, required to invest." },
  { q: "Minimum investment amount?", a: "No fixed minimum." },
  { q: "Are you SEBI registered?", a: "Details shared where applicable." },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {FAQs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-5"
            >
              <h4 className="font-semibold text-lg">{faq.q}</h4>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
