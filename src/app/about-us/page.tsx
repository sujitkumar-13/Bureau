import React from "react";

export const dynamic = "force-static";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              <strong>Stock Bureau India</strong> is a stock market consulting
              and investment advisory firm based in Varanasi, built with a
              simple belief — investing should be informed, disciplined, and
              honest.
            </p>

            <p>
              With over <strong>5+ years of experience</strong>, we have guided
              investors through different market cycles, helping them
              understand risks, build structured portfolios, and make
              confident decisions.
            </p>

            <p>
              So far, we have guided and managed investments worth more than{" "}
              <strong>₹50 Lakhs+</strong>, always focusing on research-backed
              strategies rather than short-term hype.
            </p>

            <p>
              Our approach is practical and transparent. We don’t promise
              guaranteed returns — instead, we help investors develop clarity,
              patience, and long-term thinking in the stock market.
            </p>

            {/* Why Choose Us */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Why Choose Stock Bureau India
              </h2>

              <ul className="space-y-4">
                <li>
                  ✔ <strong>Proven Experience:</strong> With 5+ years in the
                  stock market, we understand how markets behave during both
                  bullish phases and volatility.
                </li>
                <li>
                  ✔ <strong>₹50 Lakhs+ Managed:</strong> Disciplined and
                  risk-aware handling of investor capital.
                </li>
                <li>
                  ✔ <strong>90% Client Satisfaction:</strong> Our clients value
                  honesty, clarity, and consistent guidance.
                </li>
                <li>
                  ✔ <strong>Risk-Focused Approach:</strong> Capital protection
                  is prioritized over unrealistic return expectations.
                </li>
                <li>
                  ✔ <strong>Personalized Guidance:</strong> Every strategy is
                  tailored to individual goals, risk appetite, and time
                  horizon.
                </li>
                <li>
                  ✔ <strong>Transparent & Ethical:</strong> No false promises.
                  No guaranteed profits. Only responsible investing.
                </li>
              </ul>
            </section>

            {/* Commitment */}
            <section className="mt-10 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Commitment
              </h2>
              <p>
                To guide investors with integrity, knowledge, and a long-term
                vision for sustainable wealth creation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
