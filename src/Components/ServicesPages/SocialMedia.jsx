import React from "react";

const SocialMediaMarketing = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          📱 Social Media Marketing
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            Our social media marketing services help your business grow its
            online presence, build brand loyalty, and engage your target
            audience on platforms like Instagram, Facebook, LinkedIn, and
            Twitter.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🚀 Why Social Media Marketing Matters
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✔️ Increase Brand Awareness</li>
            <li>✔️ Engage Directly with Your Audience</li>
            <li>✔️ Drive Targeted Traffic to Your Website</li>
            <li>✔️ Cost-effective Advertising Options</li>
            <li>✔️ Real-time Performance Analytics</li>
          </ul>
        </section>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🎯 Our Services Include
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <strong>Content Creation</strong> – Reels, Stories, Graphics &
              Captions
            </li>
            <li>
              <strong>Ad Campaign Management</strong> – Facebook & Instagram Ads
            </li>
            <li>
              <strong>Page Optimization</strong> – Bios, Highlights, CTAs
            </li>
            <li>
              <strong>Analytics Reports</strong> – Track growth and performance
            </li>
            <li>
              <strong>Strategy Building</strong> – Monthly calendars and goals
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ More followers and engagement</li>
            <li>✅ Higher website visits and conversions</li>
            <li>✅ Improved online credibility</li>
            <li>✅ Better return on ad spend</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Small Businesses</div>
            <div>• Startups</div>
            <div>• E-commerce Brands</div>
            <div>• Creators & Influencers</div>
            <div>• Local Services</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
