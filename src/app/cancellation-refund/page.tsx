import React from "react";

export const dynamic = "force-static";

export default function CancellationRefund() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Refund & Cancellation Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              This Refund & Cancellation Policy outlines the terms under which
              refunds or cancellations may be requested for services offered by{" "}
              <strong>Stock Bureau India</strong>.
            </p>

            {/* 1. Nature of Services */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Nature of Services
              </h2>
              <p>
                Stock Bureau India provides investment consulting, advisory
                guidance, and educational services.
              </p>
              <p className="mt-4">
                Due to the intangible, professional, and time-bound nature of
                these services, refunds are subject to the conditions mentioned
                in this policy.
              </p>
            </section>

            {/* 2. Cancellation */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Cancellation by Client
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Clients may request cancellation before the commencement of
                  services.
                </li>
                <li>
                  Once a consultation session, advisory service, or research
                  access has started, cancellation requests will not be
                  accepted.
                </li>
              </ul>
            </section>

            {/* 3. Refund Policy */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Refund Policy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  No refunds will be provided once the service has commenced or
                  been delivered, either partially or fully.
                </li>
                <li>
                  Fees paid for consultations, advisory services, or
                  subscriptions are non-refundable.
                </li>
              </ul>
              <p className="mt-4">
                This is because professional time, research, and expertise are
                allocated immediately upon service initiation.
              </p>
            </section>

            {/* 4. Exceptional Cases */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Exceptional Cases
              </h2>
              <p>
                Refunds may be considered only in exceptional circumstances,
                such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Duplicate payment</li>
                <li>Technical error during payment processing</li>
              </ul>
              <p className="mt-4">
                Any such request must be submitted in writing along with valid
                proof for verification.
              </p>
            </section>

            {/* 5. Processing Time */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Processing Time
              </h2>
              <p>
                If a refund is approved (where applicable), it will be processed
                within <strong>7–10 working days</strong> via the original
                payment method.
              </p>
            </section>

            {/* 6. No Return-Based Claims */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. No Profit or Return-Based Claims
              </h2>
              <p>Refund requests will not be entertained based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Investment performance</li>
                <li>Market losses</li>
                <li>Non-achievement of expected returns</li>
              </ul>
              <p className="mt-4">
                Stock market outcomes are market-driven and beyond the control
                of Stock Bureau India.
              </p>
            </section>

            {/* 7. Modification */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Modification of Services
              </h2>
              <p>Stock Bureau India reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or reschedule services</li>
                <li>Change service structure or pricing</li>
                <li>
                  Discontinue a service due to regulatory or business
                  considerations
                </li>
              </ul>
              <p className="mt-4">
                Such changes do not qualify for refunds.
              </p>
            </section>

            {/* 8. Updates */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Policy Updates
              </h2>
              <p>
                Stock Bureau India reserves the right to update or modify this
                Refund & Cancellation Policy at any time. Changes will be
                effective immediately upon posting on the website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
