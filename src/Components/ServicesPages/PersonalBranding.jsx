import React from "react";

const PersonalBranding = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "80px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          💼 Personal Branding
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We help individuals build a powerful and influential online
            presence. Whether you're an entrepreneur, influencer, public
            speaker, artist, or professional — personal branding is your key to
            standing out in the digital world.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🚀 Why Personal Branding Matters
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Establish Authority</strong> – Be recognized as an
              expert in your field
            </li>
            <li>
              ✔️ <strong>Build Trust</strong> – People trust people, not logos.
              Be the face of your brand
            </li>
            <li>
              ✔️ <strong>Increase Opportunities</strong> – Unlock new clients,
              collaborations, and media features
            </li>
            <li>
              ✔️ <strong>Grow Your Audience</strong> – Attract followers who
              believe in your story and values
            </li>
            <li>
              ✔️ <strong>Stand Out</strong> – Differentiate yourself in a
              crowded marketplace
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
              <strong>Content Strategy & Creation</strong> – Tailored for
              Instagram, LinkedIn, YouTube
            </li>
            <li>
              <strong>Social Media Management</strong> – Scheduling, engagement
              & insights
            </li>
            <li>
              <strong>Visual Identity Development</strong> – Logos, banners,
              templates, photoshoots
            </li>
            <li>
              <strong>Influencer Growth Techniques</strong> – Real followers, no
              bots!
            </li>
            <li>
              <strong>Google Presence & SEO</strong> – Boost online visibility
              and credibility
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Boosted profile visits and engagement</li>
            <li>✅ More business inquiries or collaborations</li>
            <li>✅ A trustworthy and consistent brand image</li>
            <li>✅ Growth in personal influence and credibility</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎤 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Coaches & Mentors</div>
            <div>• Influencers & Public Figures</div>
            <div>• Founders & Entrepreneurs</div>
            <div>• Freelancers & Artists</div>
            <div>• Professionals in any field</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalBranding;
