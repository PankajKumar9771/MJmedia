import React from "react";

const Development = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
          💻 Website & App Development
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We specialize in developing high-quality, responsive websites and
            mobile applications tailored to your brand’s identity and user
            goals. Whether you're starting from scratch or upgrading an existing
            platform, we deliver top-notch solutions.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🚀 Why Development Matters
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>First Impressions Count</strong> – A well-designed site
              builds trust
            </li>
            <li>
              ✔️ <strong>Improves User Experience</strong> – Smooth navigation
              keeps visitors engaged
            </li>
            <li>
              ✔️ <strong>Mobile-First</strong> – Most users browse via mobile
              devices
            </li>
            <li>
              ✔️ <strong>Boosts Conversions</strong> – Optimized design turns
              visitors into customers
            </li>
            <li>
              ✔️ <strong>Supports Growth</strong> – Scalable solutions for
              future expansion
            </li>
          </ul>
        </section>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🛠️ Our Services Include
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              <strong>Custom Website Development</strong> – From landing pages
              to e-commerce
            </li>
            <li>
              <strong>Mobile App Development</strong> – Android & iOS solutions
            </li>
            <li>
              <strong>Responsive Design</strong> – Works seamlessly across all
              devices
            </li>
            <li>
              <strong>Frontend & Backend</strong> – Full-stack development with
              modern tech
            </li>
            <li>
              <strong>Maintenance & Support</strong> – Ongoing updates and tech
              assistance
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Increased user engagement</li>
            <li>✅ Faster load times and SEO optimization</li>
            <li>✅ Higher conversion rates</li>
            <li>✅ Brand credibility and trust</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Startups</div>
            <div>• Local Businesses</div>
            <div>• E-commerce Brands</div>
            <div>• Personal Portfolios</div>
            <div>• Agencies & Enterprises</div>
            <div>• Bloggers & Creators</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Development;
