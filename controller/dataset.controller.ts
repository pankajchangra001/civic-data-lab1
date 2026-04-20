"use client";

import { useReducer, useEffect, useRef, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { datasetReducer } from "./dataset.reducer";
import { DatasetState } from "./dataset.types";
import { buildQueryString, cleanParams } from "@/utils/queryParams";
import { getDatasets } from "@/service/dataset.service";
import { debounce } from "@/utils/debounce";

interface ControllerProps {
  initialState: Omit<DatasetState, "loading" | "error" | "view">;
}

export const DatasetController = ({ initialState }: ControllerProps) => {
  const [state, dispatch] = useReducer(datasetReducer, {
    ...initialState,
    loading: false,
    error: null,
    view: "grid",
  });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const router = useRouter();
  const isFirstLoad = useRef(true);

  // ✅ Build CLEAN params (NO empty values)
  const buildParams = () =>
    cleanParams({
      query: state.filters.query || undefined,

      sectors: state.filters.sectors.length
        ? state.filters.sectors.join(",")
        : undefined,

      formats: state.filters.formats.length
        ? state.filters.formats.join(",")
        : undefined,

      tags: state.filters.tags.length
        ? state.filters.tags.join(",")
        : undefined,

      geographies: state.filters.geographies.length
        ? state.filters.geographies.join(",")
        : undefined,

      page: state.page,
      size: state.size,
      sort: state.sort,
      order: state.order,
    });

  // ✅ FETCH (skip first render because SSR already fetched)
  const fetchData = async () => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const res = await getDatasets(buildParams());

      dispatch({
        type: "SET_DATA",
        payload: {
          data: res.results,
          total: res.total,
          originalfilter: res.aggregations,
        },
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      dispatch({ type: "SET_ERROR", payload: message });
    }
  };

  // ✅ AUTO FETCH when listing params change
  useEffect(() => {
    fetchData();
    // ✅ SYNC URL (clean params only)
    const query = buildQueryString(state);
    router.replace(`?${query}`);
  }, [state.page, state.size, state.filters, state.sort, state.order]);

  // ✅ DEBOUNCED SEARCH
  const debouncedQuery = useMemo(
    () =>
      debounce((value: string) => {
        dispatch({ type: "SET_QUERY", payload: value });
      }, 500),
    [],
  );

  // ✅ ACTIONS (clean API for UI)
  const actions = {
    setQuery: debouncedQuery,

    setPage: (page: number) => dispatch({ type: "SET_PAGE", payload: page }),

    setSize: (size: number) => dispatch({ type: "SET_SIZE", payload: size }),

    setSort: (sort: "recent" | "alphabetical", order: "asc" | "desc") =>
      dispatch({ type: "SET_SORT", payload: { sort, order } }),

    setView: (view: DatasetState["view"]) => {
      dispatch({ type: "SET_VIEW", payload: view });
    },

    toggleFilter: (
      key: Exclude<keyof DatasetState["filters"], "query">,
      value: string,
    ) =>
      dispatch({
        type: "TOGGLE_FILTER",
        payload: { key, value },
      }),

    resetFilters: () => dispatch({ type: "RESET_FILTERS" }),
  };

  return {
    state,
    actions,
    showMobileFilter,
    setShowMobileFilter,
  };
};
