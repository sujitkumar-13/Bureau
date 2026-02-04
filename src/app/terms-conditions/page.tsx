import React from "react";

export const dynamic = "force-static";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              By accessing this website and availing services from{" "}
              <strong>Stock Bureau India</strong>, you agree to the following
              Terms & Conditions. Please read them carefully before using our
              services.
            </p>

            {/* 1. Scope of Services */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Scope of Services
              </h2>
              <p>
                Stock Bureau India provides investment education, market
                insights, and consulting services to help clients understand
                stock market concepts and investment strategies.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Advisory / educational in nature</li>
                <li>Based on publicly available market information</li>
                <li>
                  Not execution-based or discretionary trading services
                </li>
              </ul>
              <p className="mt-4">
                Stock Bureau India does not operate client demat or trading
                accounts and does not execute trades on behalf of clients.
              </p>
            </section>

            {/* 2. SEBI Compliance */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. SEBI Compliance & Regulatory Disclosure
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stock market investments are subject to market risks</li>
                <li>
                  Stock Bureau India does not provide assured or guaranteed
                  returns
                </li>
                <li>
                  Any discussion related to securities, markets, or strategies
                  is for informational and educational purposes only
                </li>
                <li>
                  Clients should take investment decisions based on their own
                  risk profile and financial situation
                </li>
              </ul>
            </section>

            {/* 3. No Guarantee */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. No Guarantee of Returns
              </h2>
              <p>Stock Bureau India does not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Profits</li>
                <li>Fixed or minimum returns</li>
                <li>Capital protection</li>
              </ul>
              <p className="mt-4">
                Past performance of securities or strategies does not guarantee
                future performance, as per SEBI guidelines.
              </p>
            </section>

            {/* 4. User Responsibilities */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Investment decisions are taken at the user&apos;s own
                  discretion
                </li>
                <li>
                  Users understand equity markets involve volatility and risk
                  of capital loss
                </li>
                <li>
                  No communication should be treated as a buy/sell guarantee
                </li>
                <li>
                  Users will independently verify information before investing
                </li>
              </ul>
            </section>

            {/* 5. Risk Disclosure */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Risk Disclosure
              </h2>
              <p>
                Equity, derivatives, and market-linked instruments involve risk
                of loss, including loss of capital. Market conditions,
                liquidity, economic factors, and global events may impact
                investments.
              </p>
              <p className="mt-4">
                Clients should invest only surplus funds and consult a
                qualified financial professional if required.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p>Stock Bureau India shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Losses due to market movements</li>
                <li>
                  Decisions taken by users based on shared information
                </li>
                <li>Indirect or consequential losses</li>
                <li>Technical, system, or connectivity issues</li>
              </ul>
            </section>

            {/* 7. Unauthorized Representation */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. No Unauthorized Representation
              </h2>
              <p>
                No employee, associate, or representative of Stock Bureau India
                is authorized to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Promise guaranteed returns</li>
                <li>Offer profit-sharing arrangements</li>
                <li>Make misleading or false claims</li>
              </ul>
              <p className="mt-4">
                Any such claims should be reported immediately.
              </p>
            </section>

            {/* 8. Intellectual Property */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Intellectual Property
              </h2>
              <p>
                All content on this website is protected under applicable
                Indian laws. Unauthorized copying, reproduction, or misuse is
                strictly prohibited.
              </p>
            </section>

            {/* 9. Governing Law */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms & Conditions are governed by the laws of India. All
                disputes shall fall under the jurisdiction of courts in
                Varanasi, Uttar Pradesh.
              </p>
            </section>

            {/* 10. Updates */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Updates & Modifications
              </h2>
              <p>
                Stock Bureau India reserves the right to modify these Terms &
                Conditions in line with regulatory or business requirements.
                Continued use of services implies acceptance of updated terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
