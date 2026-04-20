"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-xl">
          {/* Icon */}
          <div className="text-5xl mb-4">⚠️</div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Something went wrong
          </h1>

          {/* Description */}
          <p className="text-gray-500 mb-4">
            We encountered an unexpected error. Please try again.
          </p>

          {/* Optional error message (dev only) */}
          {process.env.NODE_ENV === "development" && (
            <p className="text-xs text-red-500 mb-4 break-all">
              {error.message}
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="px-5 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Go to Home
            </Link>

            <Link
              href="/datasets"
              className="px-5 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Browse Datasets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
