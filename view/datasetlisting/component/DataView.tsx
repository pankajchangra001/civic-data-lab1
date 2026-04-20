"use client";

import { Dataset } from "@/service/dataset.service";
import GridCard from "./GridCard";
import ListCard from "./ListCard";

type Props = {
  data: Dataset[];
  view: "grid" | "list";
  onReset?: () => void;
  hasFilters?: boolean;
};

export default function DataView({ data, view, onReset, hasFilters }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-4xl mb-3">📂</div>

        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          No datasets found
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Try adjusting your filters or search query
        </p>

        {hasFilters && (
          <button
            onClick={onReset}
            className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {data.map((item, idx) => (
            <GridCard key={idx} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {data.map((item, idx) => (
            <ListCard key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
