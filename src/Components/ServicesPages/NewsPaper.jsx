import React from "react";

const NewspaperAds = () => {
  return (
    <div
      className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32"
      style={{ marginTop: "70px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center text-red-700">
          📰 Newspaper Ads / Offline Ads
        </h1>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We provide effective newspaper and offline advertising solutions to
            help your brand reach a broad and diverse audience. Whether it’s for
            branding, events, job postings, or classifieds, we help you get
            featured in the leading newspapers.
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            🧭 Why Newspaper Ads Still Work
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>
              ✔️ <strong>Wide Reach</strong> – Tap into a large and trusted
              readership
            </li>
            <li>
              ✔️ <strong>Credibility</strong> – Newspapers are perceived as
              reliable sources
            </li>
            <li>
              ✔️ <strong>Local & National Coverage</strong> – Target your
              audience effectively
            </li>
            <li>
              ✔️ <strong>Longer Shelf Life</strong> – Ads stay visible for an
              entire day or longer
            </li>
            <li>
              ✔️ <strong>Better Focus</strong> – Less distraction compared to
              digital platforms
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
              <strong>Classified Ads</strong> – For jobs, matrimonials, real
              estate, and more
            </li>
            <li>
              <strong>Display Ads</strong> – Large format visual ads in major
              newspapers
            </li>
            <li>
              <strong>Front & Back Page Ads</strong> – Premium placements for
              maximum impact
            </li>
            <li>
              <strong>Regional Language Ads</strong> – Reach local audiences in
              their language
            </li>
            <li>
              <strong>Ad Design & Creative</strong> – We design attractive and
              clear ads
            </li>
          </ul>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            📈 Results You Can Expect
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✅ Increased walk-ins or phone inquiries</li>
            <li>✅ Stronger local presence and awareness</li>
            <li>✅ Higher trust and credibility</li>
            <li>✅ Improved responses for job ads and classifieds</li>
          </ul>
        </section>

        {/* Ideal For */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">🎯 Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg">
            <div>• Local Businesses</div>
            <div>• Educational Institutes</div>
            <div>• Real Estate Agencies</div>
            <div>• Job Consultancies</div>
            <div>• Event Organizers</div>
            <div>• Political Campaigns</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewspaperAds;
