import React from "react";

const InstagramHandle = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">
          📸 Instagram Account Handling
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We professionally manage your Instagram account to grow your
            audience, boost engagement, and strengthen your brand’s online
            presence. From content planning to analytics, we handle it all.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            💡 Why Instagram Management Is Important
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Builds a Consistent Brand</strong> – Stand out with
              professional and cohesive posts
            </li>
            <li>
              ✔️ <strong>Engages Your Audience</strong> – Regular stories, reels
              & responses keep followers active
            </li>
            <li>
              ✔️ <strong>Boosts Organic Growth</strong> – Optimized strategies
              increase reach without paid ads
            </li>
            <li>
              ✔️ <strong>Time-Saving</strong> – Focus on your business while we
              manage your presence
            </li>
            <li>
              ✔️ <strong>Data-Driven Strategy</strong> – We track insights and
              adapt for better results
            </li>
          </ul>
        </section>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🔧 Our Services Include
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <strong>Content Creation & Scheduling</strong> – High-quality
              posts, reels, and stories
            </li>
            <li>
              <strong>Hashtag Research</strong> – To improve discoverability and
              engagement
            </li>
            <li>
              <strong>Follower Interaction</strong> – Responding to DMs,
              comments, and mentions
            </li>
            <li>
              <strong>Account Optimization</strong> – Bio, highlights, and
              overall profile appeal
            </li>
            <li>
              <strong>Analytics & Reporting</strong> – Regular updates on growth
              and performance
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Increased followers and reach</li>
            <li>✅ Higher post engagement</li>
            <li>✅ More DMs and inquiries</li>
            <li>✅ Better brand recognition</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Influencers & Creators</div>
            <div>• Startups & Brands</div>
            <div>• E-commerce Stores</div>
            <div>• Artists & Musicians</div>
            <div>• Event Planners</div>
            <div>• Local Businesses</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstagramHandle;
