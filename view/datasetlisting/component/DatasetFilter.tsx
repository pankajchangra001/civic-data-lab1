import type { DatasetState, Filters } from "@/controller/dataset.types";
import { Aggregations } from "@/service/dataset.service";
import { useState } from "react";

type FiltersProps = {
  filtersData: Aggregations;
  selectedFilters: Filters;
  onToggle: (
    key: Exclude<keyof DatasetState["filters"], "query">,
    value: string,
  ) => void;
  onReset: () => void;
  setShowMobileFilter: (val: boolean) => void;
};

export function Filters({
  filtersData,
  selectedFilters,
  onToggle,
  onReset,
  setShowMobileFilter,
}: FiltersProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className=""></div>
        <button
          onClick={() => setShowMobileFilter(false)}
          className="text-xs text-gray-500 font-medium lg:hidden m-2"
        >
          X
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xs font-bold text-gray-600 tracking-wide">
          FILTERS
        </h2>
        <button
          onClick={onReset}
          className="text-xs text-orange-500 font-medium"
        >
          RESET
        </button>
      </div>

      <FilterSection
        title="Sectors"
        data={filtersData?.sectors}
        selected={selectedFilters.sectors}
        onToggle={(val) => onToggle("sectors", val)}
      />

      <FilterSection
        title="Tags"
        data={filtersData?.tags}
        selected={selectedFilters.tags}
        onToggle={(val) => onToggle("tags", val)}
      />

      <FilterSection
        title="Formats"
        data={filtersData?.formats}
        selected={selectedFilters.formats}
        onToggle={(val) => onToggle("formats", val)}
      />

      <FilterSection
        title="Geographies"
        data={filtersData?.geographies}
        selected={selectedFilters.geographies}
        onToggle={(val) => onToggle("geographies", val)}
      />
    </div>
  );
}
type FilterSectionProps = {
  title: string;
  data: Record<string, number>;
  selected: string[];
  onToggle: (value: string) => void;
};

function FilterSection({
  title,
  data,
  selected,
  onToggle,
}: FilterSectionProps) {
  const [open, setOpen] = useState(true);

  if (!data) return null;

  const entries = Object.entries(data).map(([key, value]) => ({
    label: key,
    count: value,
  }));

  return (
    <div className="mb-4">
      {/* Section Header */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
      >
        <h3 className="text-xs font-semibold text-gray-700">
          {title} ({entries.length})
        </h3>
        <span className="text-gray-500 text-sm">{open ? "−" : "+"}</span>
      </div>

      {/* Options */}
      {open && (
        <div className="mt-2 mx-2  pr-1">
          {entries.map((item) => (
            <label
              key={item.label}
              className="flex items-center justify-between text-sm mb-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-orange-500"
                  checked={selected.includes(item.label)}
                  onChange={() => onToggle(item.label)}
                />
                <span className="text-gray-700 truncate max-w-[140px]">
                  {item.label}
                </span>
              </div>
              <span className="text-gray-400 text-xs">{item.count}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
