import React from "react";

export const dynamic = 'force-static';

export default function SwingCourse() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Swing Trading</h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Master swing trading techniques, trend analysis, and portfolio
              management for medium-term market opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
