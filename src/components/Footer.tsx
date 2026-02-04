"use client";

import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[#1e40af] font-montserrat">
                Bureau
              </div>
              <div className="text-2xl font-bold text-gray-300 font-montserrat">
                TRADING
              </div>
            </div>
            <p className="text-gray-400">
              Empowering traders with knowledge, strategies, and confidence to
              succeed in financial markets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about-us" className="block text-gray-400 hover:text-white">
                About Us
              </a>
              <a href="#courses" className="block text-gray-400 hover:text-white">
                Courses
              </a>
              <a href="#services" className="block text-gray-400 hover:text-white">
                Our Focus
              </a>
              <a
                href="#testimonials"
                className="block text-gray-400 hover:text-white"
              >
                Reviews
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <div className="space-y-2">
              <a
                href="/privacy-policy"
                className="block text-gray-400 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="block text-gray-400 hover:text-white"
              >
                Terms & Conditions
              </a>
              <a
                href="/cancellation-refund"
                className="block text-gray-400 hover:text-white"
              >
                Cancellation & Refund
              </a>
              <a
                href="/disclaimer"
                className="block text-gray-400 hover:text-white"
              >
                Disclaimer
              </a>
              <a href="/faqs" className="block text-gray-400 hover:text-white">
                FAQs
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <RiYoutubeFill className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <FaTelegramPlane className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/stockbureauindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm space-y-2">
          <p>© 2025 Bureau Trading. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="tel:+918303777132"
              className="text-gray-300 hover:text-white font-medium"
            >
              SkyTouch Media (+91-8303777132)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
