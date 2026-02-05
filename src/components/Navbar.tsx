"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between ">
          {/* Brand */}
          <Link href={'/'} className="flex-shrink-0 -my-2 ">
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
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#blogs"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Our Focus
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <button
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=919997690669",
                  "_blank"
                )
              }
              className="bg-[#15803d] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#166534] transition-colors whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;