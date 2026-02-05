"use client";

import React, { useState } from "react";

const ContactSection: React.FC = () => {
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

        // Mobile Validation: numeric only
        if (name === "mobile") {
            const numericValue = value.replace(/\D/g, "");
            // Check if length is ok (e.g. max 10, or allow typing more but only digits)
            // User just asked for "sirf number fill kar sakte"
            if (numericValue.length <= 10) {
                setFormData((prev) => ({ ...prev, [name]: numericValue }));
            }
            return;
        }

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
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600">
                        Fill out the form below and we'll help you start your investment journey.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                                <input
                                    name="mobile"
                                    placeholder="Enter your contact number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    // type="tel" // Good practice
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email (optional)"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Row: Demat Account + Investment Amount */}
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Demat Account */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Do you have a Demat Account?</label>
                                <div className="flex gap-6 h-[50px] items-center">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasDemat"
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                            className="w-4 h-4 text-[#15803d] focus:ring-[#15803d]"
                                        />
                                        <span>Yes</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasDemat"
                                            value="No"
                                            onChange={handleChange}
                                            required
                                            className="w-4 h-4 text-[#15803d] focus:ring-[#15803d]"
                                        />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>

                            {/* Investment Amount */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Minimum Amount You Can Invest</label>
                                <select
                                    name="investmentAmount"
                                    value={formData.investmentAmount}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select Amount</option>
                                    <option value="₹5,000">₹5,000</option>
                                    <option value="₹10,000">₹10,000</option>
                                    <option value="₹25,000">₹25,000</option>
                                    <option value="₹50,000+">₹50,000+</option>
                                </select>
                            </div>
                        </div>

                        {/* Row: Experience + Goal */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Investment Experience */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Investment Experience</label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select Experience</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Experienced">Experienced</option>
                                </select>
                            </div>
                            {/* Investment Goal */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Investment Goal</label>
                                <select
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select Goal</option>
                                    <option value="Long-term investing">Long-term investing</option>
                                    <option value="Wealth creation">Wealth creation</option>
                                    <option value="Portfolio review">Portfolio review</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell us briefly how we can help you"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#15803d] focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#15803d] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#166534] shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                        >
                            Request a Consultation
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Your details are 100% confidential.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
