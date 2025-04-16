import React from "react";

const YoutubeHandle = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-red-600">
          🎥 YouTube Account Handling
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We manage and grow your YouTube channel with a complete strategy
            including content planning, video optimization, and consistent
            audience engagement to help you achieve visibility and success.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📢 Why YouTube Management Matters
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Improves Discoverability</strong> – Better titles,
              tags, and descriptions
            </li>
            <li>
              ✔️ <strong>Increases Watch Time</strong> – Consistent content
              retains viewers
            </li>
            <li>
              ✔️ <strong>Boosts Subscriber Growth</strong> – Proven tactics to
              grow your audience
            </li>
            <li>
              ✔️ <strong>Monetization Support</strong> – Helps you reach
              monetization milestones
            </li>
            <li>
              ✔️ <strong>Time-Saving</strong> – Let professionals handle the
              backend while you focus on content
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
              <strong>Content Strategy</strong> – Topic ideas, publishing
              schedules, and audience targeting
            </li>
            <li>
              <strong>SEO Optimization</strong> – Titles, descriptions, tags,
              and thumbnails
            </li>
            <li>
              <strong>Channel Branding</strong> – Logo, banner, and consistent
              branding
            </li>
            <li>
              <strong>Video Uploads</strong> – Scheduled posting with best
              practices
            </li>
            <li>
              <strong>Analytics Monitoring</strong> – Insights on traffic,
              engagement, and suggestions for growth
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Subscriber growth</li>
            <li>✅ More views and higher watch time</li>
            <li>✅ Better video rankings in search results</li>
            <li>✅ Increased engagement (likes, comments, shares)</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• YouTubers & Influencers</div>
            <div>• Educational Creators</div>
            <div>• Brands & Businesses</div>
            <div>• Musicians & Artists</div>
            <div>• Coaches & Consultants</div>
            <div>• Vloggers & Streamers</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YoutubeHandle;
