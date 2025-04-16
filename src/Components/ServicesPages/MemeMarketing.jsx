import React from "react";

const MemeMarketing = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
          📢 Meme Marketing
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We specialize in meme marketing to creatively promote your brand and
            engage your target audience. Memes are the language of the internet
            — we use them strategically to boost awareness, relatability, and
            shareability of your message.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🔥 Why Meme Marketing Works
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Highly Shareable</strong> – Memes go viral easily and
              reach a wider audience
            </li>
            <li>
              ✔️ <strong>Connects with Youth</strong> – Especially effective
              among Gen Z & Millennials
            </li>
            <li>
              ✔️ <strong>Boosts Engagement</strong> – Fun content attracts
              likes, comments, and shares
            </li>
            <li>
              ✔️ <strong>Cost-Effective</strong> – Low-cost strategy with high
              ROI potential
            </li>
            <li>
              ✔️ <strong>Relatable Messaging</strong> – Makes your brand feel
              human and relevant
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
              <strong>Meme Creation</strong> – Custom, funny, brand-relevant
              memes
            </li>
            <li>
              <strong>Social Media Distribution</strong> – Across Instagram,
              Twitter, Facebook & more
            </li>
            <li>
              <strong>Influencer Meme Campaigns</strong> – Collaborations with
              meme pages & creators
            </li>
            <li>
              <strong>Trend-Based Marketing</strong> – Jump on trending formats
              for viral growth
            </li>
            <li>
              <strong>Community Engagement</strong> – Build loyal followers
              through humor
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Viral reach and organic growth</li>
            <li>✅ Better engagement than traditional ads</li>
            <li>✅ Increased social media visibility</li>
            <li>✅ Stronger connection with younger audiences</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Startups & Brands</div>
            <div>• Influencers & Celebrities</div>
            <div>• E-commerce Businesses</div>
            <div>• Content Creators</div>
            <div>• Digital Marketing Agencies</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MemeMarketing;
