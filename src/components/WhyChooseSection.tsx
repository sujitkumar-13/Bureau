"use client";

import Image from "next/image";
import React, { useState } from "react";

/* =========================
   CONTACT FORM MODAL
========================= */

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

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919997690669&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-2xl font-bold">Request a Consultation</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          {/* Demat */}
          <div>
            <p className="font-medium mb-2">
              Do you have a Demat Account?
            </p>
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
            className="w-full bg-[#15803d] text-white py-4 rounded-lg font-semibold hover:bg-[#166534]"
          >
            Continue on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

/* =========================
   WHY CHOOSE SECTION (UI SAME)
========================= */

const WhyChooseSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#15803d] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#166534] shadow-lg hover:scale-105 active:scale-95 transition"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WhyChooseSection;
