import React from "react";

const SongPromo = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
          🎶 Song & Movie Promotion
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We offer tailored promotional campaigns for songs and movies to
            enhance visibility across digital platforms. Whether you're a music
            artist or a filmmaker, we help you reach a wider audience, maximize
            engagement, and boost the impact of your release.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🎬 Why Promotion Matters
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Maximizes Reach</strong> – Expands your audience and
              exposure
            </li>
            <li>
              ✔️ <strong>Boosts Engagement</strong> – Increases shares,
              comments, and reactions
            </li>
            <li>
              ✔️ <strong>Generates Buzz</strong> – Creates hype and excitement
              around your release
            </li>
            <li>
              ✔️ <strong>Strategic Targeting</strong> – We target the right
              demographic for greater impact
            </li>
            <li>
              ✔️ <strong>Builds Anticipation</strong> – Keeps your audience
              eagerly waiting for the release
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
              <strong>Music Video Promotion</strong> – Distribute your music
              videos on YouTube, Instagram, TikTok, etc.
            </li>
            <li>
              <strong>Social Media Marketing</strong> – Targeted posts and ads
              on Instagram, Facebook, Twitter, and more
            </li>
            <li>
              <strong>Press Releases & Media Coverage</strong> – Get your song
              or movie covered by bloggers and journalists
            </li>
            <li>
              <strong>Collaborations with Influencers</strong> – Partner with
              influencers for more visibility
            </li>
            <li>
              <strong>Content Creation & Engagement</strong> – Memes, trailers,
              teasers, and more for viral marketing
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Increased views, listens, and shares</li>
            <li>✅ Viral content and engagement</li>
            <li>✅ Positive press coverage</li>
            <li>✅ A loyal fan base built around your brand</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Musicians & Singers</div>
            <div>• Film Producers & Directors</div>
            <div>• Record Labels</div>
            <div>• Independent Artists</div>
            <div>• Music & Movie Agencies</div>
            <div>• Content Creators & Influencers</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SongPromo;
