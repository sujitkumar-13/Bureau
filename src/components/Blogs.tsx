"use client";

import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import Image from "next/image";

const BlogSection: React.FC = () => {
  return (
    <section id="blogs" className="py-14 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 font-montserrat">
        Latest Blogs
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Learn about investing, stock market basics, and smart financial decisions
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col group"
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
                  className="text-blue-700 font-bold hover:text-blue-900 flex items-center gap-2 group/btn transition-colors"
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
