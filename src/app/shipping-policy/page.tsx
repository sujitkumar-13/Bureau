import React from "react";

export const dynamic = 'force-static';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Shipping & Delivery Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Buyers</h2>
              <p>
                For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Domestic Buyers</h2>
              <p>
                For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Timeline</h2>
              <p>
                Orders are shipped within 1-2 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="font-semibold text-blue-900">Important Note:</p>
                <p className="text-blue-800 mt-2">
                  SHUBHAM GUPTA is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 1-2 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.
                </p>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Address</h2>
              <p>
                Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration.
              </p>
            </section>

            <section className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
              <p className="mb-4">
                For any issues in utilizing our services, you may contact our helpdesk:
              </p>
              <div className="space-y-2">
                <p><strong>Phone:</strong> <a href="tel:8726774263" className="text-blue-600 hover:underline">8726774263</a></p>
                <p><strong>Email:</strong> <a href="mailto:benzzztrading@gmail.com" className="text-blue-600 hover:underline">benzzztrading@gmail.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
