import React from "react";

const SEO = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          🚀 SEO Services (Search Engine Optimization)
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We offer expert SEO services that improve your website’s visibility,
            boost organic traffic, and rank higher on search engines. Our
            strategy is focused on delivering long-term and measurable results.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">📢 Why SEO Matters</h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Increases Visibility</strong> – Appear on top of search
              results
            </li>
            <li>
              ✔️ <strong>Drives Targeted Traffic</strong> – Attract users
              looking for your services
            </li>
            <li>
              ✔️ <strong>Builds Credibility</strong> – Higher rankings build
              trust with users
            </li>
            <li>
              ✔️ <strong>Cost-Effective</strong> – Long-term ROI without
              continuous ad spend
            </li>
            <li>
              ✔️ <strong>Better User Experience</strong> – Fast, mobile-friendly
              sites rank better
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
              <strong>Keyword Research</strong> – Identify high-performing
              keywords for your niche
            </li>
            <li>
              <strong>On-Page SEO</strong> – Title tags, meta descriptions,
              header structure, and content optimization
            </li>
            <li>
              <strong>Off-Page SEO</strong> – Link building, guest posts, and
              backlink strategies
            </li>
            <li>
              <strong>Technical SEO</strong> – Sitemap, robots.txt, mobile
              optimization, site speed
            </li>
            <li>
              <strong>SEO Audits</strong> – Complete website analysis and
              improvement roadmap
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Higher search engine rankings</li>
            <li>✅ Increased organic website traffic</li>
            <li>✅ More qualified leads</li>
            <li>✅ Improved website performance and user experience</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• E-commerce Stores</div>
            <div>• Local Businesses</div>
            <div>• Service Providers</div>
            <div>• Blogs & Content Sites</div>
            <div>• Startups & Enterprises</div>
            <div>• Digital Agencies</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SEO;
