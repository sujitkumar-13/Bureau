"use client";

import { useState } from "react";
import { RiCloseLine, RiArrowRightLine } from "react-icons/ri";

type Blog = {
  id: number;
  title: string;
  description: string;
  slug: string;
  content: {
    intro: string;
    sections: {
      heading?: string;
      content: string;
      points?: string[];
    }[];
  };
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Stock Market Basics: A Simple Guide for Beginners",
    description:
      "Stock market kya hota hai, kaise kaam karta hai aur beginners ke liye ye long-term wealth kaise banata hai – simple language me samjhein.",
    slug: "stock-market-basics-for-beginners",
    content: {
      intro:
        "If you are new to investing, the stock market may seem confusing at first. However, once you understand the basics, it becomes a powerful tool for long-term wealth creation.",
      sections: [
        {
          content:
            "The stock market is a place where shares of publicly listed companies are bought and sold. When you buy a share, you own a small part of that company and participate in its growth.",
        },
        {
          heading: "How the Stock Market Works",
          content:
            "Companies raise money by listing their shares on stock exchanges like NSE and BSE. Investors buy these shares, and their prices move based on company performance, economic factors, and market demand.",
        },
        {
          heading: "Key Terms Every Beginner Should Know",
          content: "",
          points: [
            "Shares: Units of ownership in a company",
            "Stock Exchange: Platform where shares are traded",
            "Market Price: Current trading price of a share",
            "Long-Term Investing: Holding shares for years to grow wealth",
          ],
        },
        {
          content:
            "The stock market is not gambling when approached with proper knowledge, patience, and discipline.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "How to Start Investing in the Stock Market in India",
    description:
      "India me stock market investing shuru karne ka complete step-by-step guide – Demat account se lekar long-term thinking tak.",
    slug: "start-investing-stock-market-india",
    content: {
      intro:
        "Starting your stock market journey in India is simpler than most people think.",
      sections: [
        {
          heading: "Step-by-Step Guide to Get Started",
          content: "",
          points: [
            "Open a Demat & Trading Account - A Demat account stores your shares electronically, while a trading account helps you buy and sell them.",
            "Understand Your Financial Goals - Decide whether you are investing for long-term wealth, future security, or financial independence.",
            "Know Your Risk Appetite - Every investor has a different risk tolerance. Your investments should match your comfort level.",
            "Start Small and Stay Consistent - You don't need a large amount to begin. Consistency matters more than the amount.",
            "Think Long-Term - Avoid reacting to daily market movements. Long-term investing helps reduce risk.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "Demat Account Explained: Everything a New Investor Should Know",
    description:
      "Demat account kya hota hai, kyun zaroori hai aur Demat aur Trading account me kya difference hota hai – beginners ke liye guide.",
    slug: "demat-account-explained",
    content: {
      intro:
        "A Demat Account is mandatory for investing in the Indian stock market. It holds your shares and securities in electronic form.",
      sections: [
        {
          heading: "Why a Demat Account Is Important",
          content: "",
          points: [
            "Eliminates physical share certificates",
            "Safe and secure holding of investments",
            "Easy buying, selling, and tracking of shares",
          ],
        },
        {
          heading: "Difference Between Demat and Trading Account",
          content: "",
          points: [
            "Demat Account: Stores your shares",
            "Trading Account: Used to place buy and sell orders",
          ],
        },
        {
          content:
            "Always open your Demat account with a SEBI-registered broker to ensure safety and compliance.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Difference Between Investing and Trading",
    description:
      "Investing aur trading me kya farq hota hai? Risk, time aur approach ke basis par simple comparison beginners ke liye.",
    slug: "difference-between-investing-and-trading",
    content: {
      intro:
        "Many beginners confuse investing with trading, but both approaches are very different.",
      sections: [
        {
          heading: "Investing",
          content: "",
          points: [
            "Long-term approach",
            "Focuses on company fundamentals",
            "Lower risk when done correctly",
            "Suitable for beginners and working professionals",
          ],
        },
        {
          heading: "Trading",
          content: "",
          points: [
            "Short-term approach",
            "Focuses on price movements",
            "Higher risk",
            "Requires time, experience, and discipline",
          ],
        },
        {
          content:
            "For most new investors, long-term investing is safer and more sustainable than frequent trading.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Common Mistakes First-Time Investors Make",
    description:
      "New investors ke common mistakes jaise panic selling, quick profit chasing aur unhe avoid kaise karein – practical advice.",
    slug: "common-mistakes-first-time-investors",
    content: {
      intro:
        "Most beginners lose money not because the market is bad, but due to avoidable mistakes.",
      sections: [
        {
          heading: "Common Investor Mistakes",
          content: "",
          points: [
            "Chasing quick profits",
            "Following unverified tips or social media advice",
            "Ignoring risk management",
            "Investing without clear goals",
            "Panic selling during market volatility",
          ],
        },
        {
          heading: "How to Avoid These Mistakes",
          content: "",
          points: [
            "Invest with a clear plan",
            "Focus on learning and discipline",
            "Diversify your investments",
            "Stay patient during market ups and downs",
          ],
        },
        {
          content:
            "Successful investing is built on consistency, patience, and informed decision-making.",
        },
      ],
    },
  },
];

const BlogSection: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const getRecommendedBlogs = (currentBlogId: number) => {
    return blogs.filter((blog) => blog.id !== currentBlogId).slice(0, 3);
  };

  const openBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-14 px-4 max-w-7xl mx-auto">
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
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            {/* Text-based header instead of image */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
              <div className="flex items-center justify-center h-32">
                <h3 className="text-xl font-bold text-gray-900 text-center line-clamp-3">
                  {blog.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>

              <button
                onClick={() => openBlog(blog)}
                className="text-[#1e40af] font-semibold hover:text-[#1d4ed8] flex items-center gap-2 group"
              >
                Read more
                <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full my-8 relative max-h-[90vh] overflow-hidden flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeBlog}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
              aria-label="Close"
            >
              <RiCloseLine className="text-2xl text-gray-800" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 rounded-2xl">
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pr-12">
                  {selectedBlog.title}
                </h1>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {selectedBlog.content.intro}
                </p>

                {selectedBlog.content.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.heading}
                      </h2>
                    )}

                    {section.content && (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}

                    {section.points && (
                      <ul className="space-y-3 mb-4">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#1e40af] mt-1 flex-shrink-0">
                              •
                            </span>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Recommended Blogs */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Recommended Blogs
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {getRecommendedBlogs(selectedBlog.id).map((recBlog) => (
                      <div
                        key={recBlog.id}
                        onClick={() => openBlog(recBlog)}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gray-50 hover:bg-blue-50"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                          {recBlog.title}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                          {recBlog.description}
                        </p>
                        <span className="text-[#1e40af] text-xs font-medium flex items-center gap-1">
                          Read more
                          <RiArrowRightLine className="text-sm" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cancel Button at Bottom */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                  <button
                    onClick={closeBlog}
                    className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
