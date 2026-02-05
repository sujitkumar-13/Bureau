"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href={'/'} className="flex-shrink-0 -my-2" onClick={closeMenu}>
            <div className="flex items-center">
              <Image
                width={200}
                height={60}
                src="/nlogo2.png"
                alt="Stock Bureau India"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#blogs"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Our Focus
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            <button
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=919997690669",
                  "_blank"
                )
              }
              className="bg-[#15803d] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#166534] transition-colors whitespace-nowrap font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <RiCloseLine className="w-8 h-8" />
              ) : (
                <RiMenu3Line className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          <Link
            href="/about-us"
            className="text-gray-700 hover:text-[#15803d] font-medium text-lg"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/#blogs"
            className="text-gray-700 hover:text-[#15803d] font-medium text-lg"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            href="/#services"
            className="text-gray-700 hover:text-[#15803d] font-medium text-lg"
            onClick={closeMenu}
          >
            Our Focus
          </Link>
          <Link
            href="/#testimonials"
            className="text-gray-700 hover:text-[#15803d] font-medium text-lg"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 hover:text-[#15803d] font-medium text-lg"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=918303777132",
                "_blank"
              );
              closeMenu();
            }}
            className="bg-[#15803d] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#166534] transition-colors font-medium text-center w-full"
          >
           Start Investing
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
