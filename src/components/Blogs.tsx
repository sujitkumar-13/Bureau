"use client";

import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import React, { useRef } from "react";

const BlogSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Adjust scroll amount as needed
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="blogs" className="py-14 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Latest Blogs
          </h2>
          <p className="text-gray-600 text-lg">
            Learn about investing, stock market basics, and smart financial
            decisions
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
            aria-label="Scroll left"
          >
            <RiArrowLeftLine className="text-xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-[#15803d] flex items-center justify-center text-white hover:bg-[#166534] transition-colors shadow-lg"
            aria-label="Scroll right"
          >
            <RiArrowRightLine className="text-xl" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[380px] border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col group snap-center"
          >
            {/* Image */}
            <div className="h-56 w-full relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              {/* Heading */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {blog.description}
              </p>

              {/* Read More */}
              <div className="mt-auto">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[#15803d] font-bold hover:text-[#166534] flex items-center gap-2 group/btn transition-colors"
                >
                  Read more
                  <RiArrowRightLine className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
