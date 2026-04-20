import { Aggregations } from "@/service/dataset.service";
import { DatasetState } from "./dataset.types";

export type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | {
      type: "SET_DATA";
      payload: {
        data: DatasetState["data"];
        total: number;
        originalfilter: Aggregations;
      };
    }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_SIZE"; payload: number }
  | {
      type: "SET_SORT";
      payload: {
        sort: "recent" | "alphabetical";
        order: "asc" | "desc";
      };
    }
  | { type: "SET_VIEW"; payload: DatasetState["view"] }
  | { type: "SET_QUERY"; payload: string }
  | {
      type: "TOGGLE_FILTER";
      payload: {
        key: keyof DatasetState["filters"];
        value: string;
      };
    }
  | { type: "RESET_FILTERS" };

export const datasetReducer = (
  state: DatasetState,
  action: Action,
): DatasetState => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "SET_DATA":
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        originalfilter: action.payload.originalfilter,
        loading: false,
        error: null,
      };

    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    case "SET_SIZE":
      return {
        ...state,
        size: action.payload,
        page: 1, // reset page
      };

    case "SET_SORT":
      return {
        ...state,
        sort: action.payload.sort,
        order: action.payload.order,
        page: 1, // reset page
      };

    case "SET_VIEW":
      return {
        ...state,
        view: action.payload,
      };

    case "SET_QUERY":
      return {
        ...state,
        filters: {
          ...state.filters,
          query: action.payload,
        },
        page: 1, // reset page
      };

    case "TOGGLE_FILTER": {
      const { key, value } = action.payload;

      // key is guaranteed to be one of filters keys
      const currentValues = state.filters[key];

      // ❗ safeguard: only arrays should be toggled
      if (!Array.isArray(currentValues)) return state;

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...state,
        filters: {
          ...state.filters,
          [key]: updatedValues,
        },
        page: 1, // reset page
      };
    }

    case "RESET_FILTERS":
      return {
        ...state,
        filters: {
          query: "",
          sectors: [],
          formats: [],
          tags: [],
          geographies: [],
        },
        page: 1,
      };

    default:
      return state;
  }
};
