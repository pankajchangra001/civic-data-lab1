import { DatasetState, Filters } from "@/controller/dataset.types";

type Props = {
  selectedFilters: Filters;
  onToggle: (
    key: Exclude<keyof DatasetState["filters"], "query">,
    value: string,
  ) => void;
  onReset: () => void;
};

const DataAppliedFilter = ({ selectedFilters, onToggle, onReset }: Props) => {
  // remove query completely
  const keys: Exclude<keyof Filters, "query">[] = [
    "sectors",
    "formats",
    "tags",
    "geographies",
  ];

  const activeFilters = keys.flatMap((key) =>
    selectedFilters[key].map((value) => ({ key, value })),
  );

  if (activeFilters.length === 0) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {/* Chips */}
      {activeFilters.map(({ key, value }, idx) => (
        <div
          key={`${key}-${value}-${idx}`}
          className="flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-100 text-gray-700"
        >
          <span className="truncate max-w-[120px]">{value}</span>

          <button
            onClick={() => onToggle(key, value)}
            className="text-gray-400 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>
      ))}

      {/* Reset */}
      <button
        onClick={onReset}
        className="ml-2 text-xs font-medium text-orange-600 hover:underline"
      >
        Reset All
      </button>
    </div>
  );
};

export default DataAppliedFilter;
