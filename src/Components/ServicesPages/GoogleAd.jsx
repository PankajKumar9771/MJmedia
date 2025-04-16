import React from "react";

const GoogleAds = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-600">
          📢 Google Ads
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We create and manage high-performing Google Ads campaigns that drive
            targeted traffic, leads, and sales. From search to display to video
            ads, we help your brand appear in front of the right audience at the
            right time.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🔥 Why Google Ads Work
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Instant Visibility</strong> – Appear at the top of
              search results
            </li>
            <li>
              ✔️ <strong>Highly Targeted</strong> – Show ads to the right people
              based on keywords, location, and behavior
            </li>
            <li>
              ✔️ <strong>Flexible Budget</strong> – Control costs and adjust as
              you go
            </li>
            <li>
              ✔️ <strong>Measurable Results</strong> – Track performance and
              optimize for conversions
            </li>
            <li>
              ✔️ <strong>Brand Awareness</strong> – Reach users across YouTube,
              Gmail, and Display Network
            </li>
          </ul>
        </section>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🎯 Our Services Include
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <strong>Search Ads</strong> – Appear on top of Google search
              results
            </li>
            <li>
              <strong>Display Ads</strong> – Banner ads across millions of
              websites
            </li>
            <li>
              <strong>Video Ads</strong> – YouTube ads for massive reach
            </li>
            <li>
              <strong>Shopping Ads</strong> – Showcase your products with images
              and prices
            </li>
            <li>
              <strong>Performance Tracking</strong> – Conversion setup,
              analytics, and regular reports
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ More website traffic and inquiries</li>
            <li>✅ Improved ROI and lower cost-per-click</li>
            <li>✅ Increased brand visibility</li>
            <li>✅ Higher conversion rates from relevant traffic</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• E-commerce Stores</div>
            <div>• Local Businesses</div>
            <div>• Startups</div>
            <div>• Service Providers</div>
            <div>• Real Estate Agents</div>
            <div>• Event Organizers</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GoogleAds;
