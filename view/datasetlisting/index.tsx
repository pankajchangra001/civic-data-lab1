"use client";

import { DatasetController } from "@/controller/dataset.controller";
import { DatasetState } from "@/controller/dataset.types";
import Breadcrumbs from "@/view/components/Breadcrumbs";
import { Filters } from "./component/DatasetFilter";
import { hasActiveFilters } from "@/utils/helper";
import DataView from "./component/DataView";
import DataAppliedFilter from "./component/DataAppliedFilter";
import DataShimmer from "./component/DataShimmer";

interface DatasetClientProps {
  initialState: Omit<DatasetState, "loading" | "error" | "view">;
}

export default function DatasetClient({ initialState }: DatasetClientProps) {
  const { state, actions, showMobileFilter, setShowMobileFilter } =
    DatasetController({ initialState });

  const totalPages = Math.ceil(state.total / state.size);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "All Data" }]}
      />

      <div className="flex flex-col  bg-white min-h-screen">
        <div className="max-w-7xl mx-auto  flex  justify-between ">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-72 p-4 ">
            <Filters
              filtersData={state.originalfilter}
              selectedFilters={state.filters}
              onToggle={actions.toggleFilter}
              onReset={actions.resetFilters}
              setShowMobileFilter={setShowMobileFilter}
            />
          </aside>

          {/* Mobile Filters */}
          {showMobileFilter && (
            <div className="fixed top-16 left-0 w-full bg-white z-50 p-4 shadow-md lg:hidden">
              <Filters
                filtersData={state.originalfilter}
                selectedFilters={state.filters}
                onToggle={actions.toggleFilter}
                onReset={actions.resetFilters}
                setShowMobileFilter={setShowMobileFilter}
              />
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 p-4">
            <div className="max-w-7xl mx-auto">
              {/* Top Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 bg-white mb-4">
                <div className="relative w-full md:w-[600px] ">
                  <input
                    type="text"
                    placeholder="Start typing to search for any Dataset"
                    className="w-full pl-10 pr-4 py-2 text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => actions.setQuery(e.target.value)}
                  />
                  <svg
                    className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                  </svg>
                </div>
                <div className="flex border rounded-md overflow-hidden">
                  <button
                    onClick={() => actions.setView("grid")}
                    className={`p-2 ${
                      state.view === "grid"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-white text-gray-500"
                    }`}
                    aria-label="Switch to grid view"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill={state.view === "grid" ? "#5985E1" : "#666666"}
                    >
                      <path d="M200-520q-24.54 0-42.27-17.73Q140-555.46 140-580v-180q0-24.54 17.73-42.27Q175.46-820 200-820h180q24.54 0 42.27 17.73Q440-784.54 440-760v180q0 24.54-17.73 42.27Q404.54-520 380-520H200Zm0 380q-24.54 0-42.27-17.73Q140-175.46 140-200v-180q0-24.54 17.73-42.27Q175.46-440 200-440h180q24.54 0 42.27 17.73Q440-404.54 440-380v180q0 24.54-17.73 42.27Q404.54-140 380-140H200Zm380-380q-24.54 0-42.27-17.73Q520-555.46 520-580v-180q0-24.54 17.73-42.27Q555.46-820 580-820h180q24.54 0 42.27 17.73Q820-784.54 820-760v180q0 24.54-17.73 42.27Q784.54-520 760-520H580Zm0 380q-24.54 0-42.27-17.73Q520-175.46 520-200v-180q0-24.54 17.73-42.27Q555.46-440 580-440h180q24.54 0 42.27 17.73Q820-404.54 820-380v180q0 24.54-17.73 42.27Q784.54-140 760-140H580ZM200-580h180v-180H200v180Zm380 0h180v-180H580v180Zm0 380h180v-180H580v180Zm-380 0h180v-180H200v180Zm380-380Zm0 200Zm-200 0Zm0-200Z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => actions.setView("list")}
                    className={`p-2 ${
                      state.view === "list"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-white text-gray-500"
                    }`}
                    aria-label="Switch to list view"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill={state.view === "list" ? "#5985E1" : "#666666"}
                    >
                      <path d="M212.31-527.69q-30.31 0-51.31-21-21-21-21-51.31v-135.38q0-30.31 21-51.31 21-21 51.31-21h535.38q30.31 0 51.31 21 21 21 21 51.31V-600q0 30.31-21 51.31-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85Q760-595.38 760-600v-135.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85Q200-740 200-735.38V-600q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Zm0 435.38q-30.31 0-51.31-21-21-21-21-51.31V-360q0-30.31 21-51.31 21-21 51.31-21h535.38q30.31 0 51.31 21 21 21 21 51.31v135.38q0 30.31-21 51.31-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85Q760-220 760-224.62V-360q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85Q200-364.62 200-360v135.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-747.69v160-160Zm0 375.38v160-160Z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  {/* Sort */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() =>
                      actions.setSort(
                        state.sort || "recent",
                        state.order == "asc" ? "desc" : "asc",
                      )
                    }
                  >
                    <path d="M8 17V7" />
                    <path d="M6 9l2-2 2 2" />
                    <path d="M16 7v10" />
                    <path d="M18 15l-2 2-2-2" />
                  </svg>
                  <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50 text-black">
                    <select
                      value={state.sort}
                      onChange={(e) => {
                        if (
                          e.target.value === "recent" ||
                          e.target.value === "alphabetical"
                        )
                          actions.setSort(e.target.value, state.order);
                      }}
                      className="bg-transparent text-sm outline-none cursor-pointer"
                      aria-label="Select the sort"
                    >
                      <option value="recent">Latest Updated</option>
                      <option value="alphabetical">Alphabetical</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setShowMobileFilter((prev) => !prev)}
                    className="bg-transparent text-sm outline-none cursor-pointer text-black lg:hidden"
                  >
                    Filters
                  </button>
                </div>
              </div>

              <DataAppliedFilter
                selectedFilters={state.filters}
                onToggle={actions.toggleFilter}
                onReset={actions.resetFilters}
              />

              {/* Data Grid/List */}
              {state.loading ? (
                <DataShimmer view={state.view} />
              ) : state.data.length > 0 ? (
                <DataView data={state.data} view={state.view} />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    No datasets found
                  </h2>

                  <p className="text-sm text-gray-500 mb-4">
                    Try adjusting your filters or search query
                  </p>

                  {hasActiveFilters(state.filters) && (
                    <button
                      onClick={actions.resetFilters}
                      className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-6 bg-white border rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                {/* Rows per page */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Rows per page</span>
                  <select
                    value={state.size}
                    onChange={(e) => actions.setSize(Number(e.target.value))}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {Array.from({ length: 3 }, (_, i) => (i + 1) * 9).map(
                      (num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                {/* Page Info + Controls */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>
                    Page {String(state.page).padStart(2, "0")} of{" "}
                    {String(totalPages).padStart(2, "0")}
                  </span>

                  <div className="flex gap-2">
                    <button
                      disabled={state.page === 1}
                      onClick={() => actions.setPage(1)}
                      className="px-2 disabled:opacity-30"
                    >
                      {"<<"}
                    </button>

                    <button
                      disabled={state.page === 1}
                      onClick={() => actions.setPage(state.page - 1)}
                      className="px-2 disabled:opacity-30"
                    >
                      {"<"}
                    </button>

                    <button
                      disabled={state.page >= totalPages}
                      onClick={() => actions.setPage(state.page + 1)}
                      className="px-2 disabled:opacity-30"
                    >
                      {">"}
                    </button>

                    <button
                      disabled={state.page >= totalPages}
                      onClick={() => actions.setPage(totalPages)}
                      className="px-2 disabled:opacity-30"
                    >
                      {">>"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
