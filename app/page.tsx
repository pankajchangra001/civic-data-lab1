import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-gray-50">
      {/* 🔹 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Explore Open Datasets Seamlessly
        </h1>

        <p className="text-gray-500 max-w-2xl mb-8 text-lg">
          Discover, filter, and analyze datasets across sectors, geographies,
          and formats—all in one place.
        </p>

        <div className="flex gap-4">
          <Link
            href="/datasets"
            className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary)] transition"
          >
            Explore Datasets
          </Link>

          <div className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition text-black">
            Learn More
          </div>
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Why Use CivicDataSpace?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Smart Search
            </h3>
            <p className="text-gray-500 text-sm">
              Quickly find datasets using advanced filters and keyword search.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Structured Insights
            </h3>
            <p className="text-gray-500 text-sm">
              Access well-organized datasets categorized by sectors and formats.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Easy Exploration
            </h3>
            <p className="text-gray-500 text-sm">
              Switch between grid and list views for better browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="bg-[var(--color-primary)] text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Start Exploring Today
        </h2>

        <p className="mb-6 text-blue-100">
          Access hundreds of datasets and unlock valuable insights.
        </p>

        <Link
          href="/datasets"
          className="px-6 py-3 bg-white text-[var(--color-primary)] rounded-md font-medium hover:bg-gray-100 transition"
        >
          Go to Datasets
        </Link>
      </section>
    </div>
  );
}
