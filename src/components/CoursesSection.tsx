"use client";

import Image from "next/image";
import React, { useState } from "react";

// --------------------
// Contact Form Modal
// --------------------
type ContactFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    hasDemat: "",
    investmentAmount: "",
    experience: "",
    goal: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `New Consultation Request:
Name: ${formData.fullName}
Mobile: ${formData.mobile}
Email: ${formData.email}
Demat Account: ${formData.hasDemat}
Investment Amount: ${formData.investmentAmount}
Experience: ${formData.experience}
Goal: ${formData.goal}
Message: ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=918726774263&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-2xl font-bold text-gray-900">
            Request a Consultation
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Do you have a Demat Account?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasDemat"
                  value="Yes"
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasDemat"
                  value="No"
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <select
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="">Investment Amount</option>
            <option value="₹5,000">₹5,000</option>
            <option value="₹10,000">₹10,000</option>
            <option value="₹25,000">₹25,000</option>
            <option value="₹50,000+">₹50,000+</option>
          </select>

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="">Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Experienced">Experienced</option>
          </select>

          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="">Goal</option>
            <option value="Long-term investing">Long-term investing</option>
            <option value="Wealth creation">Wealth creation</option>
            <option value="Portfolio review">Portfolio review</option>
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Request a Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

// --------------------
// Courses Section
// --------------------
const CoursesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Trading Courses</h2>
            <p className="text-gray-600 text-lg">
              Monthly subscription & hand-hold mentorship available
            </p>

            <p className="text-gray-700">
              Learn Stocks, Options, Futures, Intraday, Swing & Value Investing
              and build a 7-figure portfolio.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </button>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/Stock-Market.jpeg"
              alt="Stock Market"
              width={500}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CoursesSection;