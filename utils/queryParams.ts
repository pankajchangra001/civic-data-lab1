import { Filters } from "@/controller/dataset.types";

export interface ParsedParams {
  filters: Filters;
  page: number;
  size: number;
  sort: "recent" | "alphabetical";
  order: "asc" | "desc";
}

// ✅ helper to normalize string | string[]
const getString = (value: string | string[] | undefined): string => {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
};

// ✅ helper for arrays
const getArray = (value: string | string[] | undefined): string[] => {
  if (!value) return [];
  const str = Array.isArray(value) ? value[0] : value;
  return str.split(",").filter(Boolean);
};

export const parseQueryParams = (
  searchParams: Record<string, string | string[] | undefined>,
): ParsedParams => {
  return {
    filters: {
      query: getString(searchParams.query), // ✅ FIXED
      sectors: getArray(searchParams.sectors),
      formats: getArray(searchParams.formats),
      tags: getArray(searchParams.tags),
      geographies: getArray(searchParams.geographies),
    },
    page: Number(getString(searchParams.page)) || 1,
    size: Number(getString(searchParams.size)) || 9,
    sort:
      (getString(searchParams.sort) as "recent" | "alphabetical") || "recent",
    order: (getString(searchParams.order) as "asc" | "desc") || "desc",
  };
};

type Params = Record<string, string | number | undefined>;

export const cleanParams = (params: Params): Record<string, string> => {
  const cleaned: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      value !== "undefined"
    ) {
      cleaned[key] = String(value);
    }
  });

  return cleaned;
};

// utils/queryParams.ts

import { DatasetState } from "../controller/dataset.types";

export const buildQueryString = (state: DatasetState): string => {
  const params = new URLSearchParams();

  // ✅ Filters
  if (state.filters.query) {
    params.set("query", state.filters.query);
  }

  if (state.filters.sectors.length) {
    params.set("sectors", state.filters.sectors.join(","));
  }

  if (state.filters.formats.length) {
    params.set("formats", state.filters.formats.join(","));
  }

  if (state.filters.tags.length) {
    params.set("tags", state.filters.tags.join(","));
  }

  if (state.filters.geographies.length) {
    params.set("geographies", state.filters.geographies.join(","));
  }

  // ✅ Pagination + sorting (always useful → always include)
  params.set("page", String(state.page));
  params.set("size", String(state.size));
  params.set("sort", state.sort);
  params.set("order", state.order);

  return params.toString();
};
