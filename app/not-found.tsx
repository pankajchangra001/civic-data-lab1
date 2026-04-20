import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-xl">
          {/* Big 404 */}
          <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page not found
          </h2>

          {/* Description */}
          <p className="text-gray-500 mb-6">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              Go to Home
            </Link>

            <a
              href="/datasets"
              className="px-5 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Browse Datasets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
