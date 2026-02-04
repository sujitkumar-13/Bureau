import React from "react";

export const dynamic = "force-static";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Stock Bureau India respects your privacy and is committed to
              protecting the personal information you share with us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or contact
              us for services.
            </p>

            {/* 1. Information We Collect */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p>
                We may collect the following information when you use our
                website or services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>
                  Investment-related details (such as investment goals,
                  experience, demat account status, and investment amount)
                </li>
                <li>
                  Any information you voluntarily provide through forms or
                  messages
                </li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact you regarding consultations and services</li>
                <li>Understand your investment needs and goals</li>
                <li>Provide personalized stock market consulting</li>
                <li>Improve our website and services</li>
                <li>Maintain internal records and compliance</li>
              </ul>
              <p className="mt-4">
                We do not sell or rent your personal information to third
                parties.
              </p>
            </section>

            {/* 3. Data Protection & Security */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Data Protection & Security
              </h2>
              <p>
                We take reasonable and appropriate measures to protect your
                personal information from unauthorized access, misuse, or
                disclosure. Only authorized personnel have access to client
                data.
              </p>
            </section>

            {/* 4. Sharing of Information */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Sharing of Information
              </h2>
              <p>
                Your personal information may be shared only in the following
                cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When required by law or regulatory authorities</li>
                <li>
                  With trusted service partners strictly for business
                  operations (if applicable)
                </li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* 5. Cookies */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Cookies & Website Analytics
              </h2>
              <p>
                Our website may use cookies or similar technologies to improve
                user experience and analyze website traffic. Cookies do not
                collect personally identifiable information unless you choose
                to provide it.
              </p>
            </section>

            {/* 6. Third-Party Links */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. Stock
                Bureau India is not responsible for the privacy practices or
                content of such external sites.
              </p>
            </section>

            {/* 7. Investor Disclaimer */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Investor Disclaimer
              </h2>
              <p>
                Stock market investments are subject to market risks.
                Information shared on our website is for educational and
                advisory purposes only and should not be considered guaranteed
                investment advice.
              </p>
            </section>

            {/* 8. Consent */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Your Consent
              </h2>
              <p>
                By using our website or submitting your information, you
                consent to this Privacy Policy and agree to the collection and
                use of your data as described.
              </p>
            </section>

            {/* 9. Updates */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Updates to This Policy
              </h2>
              <p>
                Stock Bureau India reserves the right to update or modify this
                Privacy Policy at any time. Changes will be reflected on this
                page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
