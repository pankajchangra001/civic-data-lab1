import { Aggregations, Dataset } from "@/service/dataset.service";

export type ViewMode = "grid" | "list";

export interface Filters {
  query: string;
  sectors: string[];
  formats: string[];
  tags: string[];
  geographies: string[];
}

export interface DatasetState {
  loading: boolean;
  error: string | null;

  data: Dataset[];
  total: number;
  originalfilter: Aggregations;

  page: number;
  size: number;

  view: ViewMode;

  sort: "recent" | "alphabetical";
  order: "asc" | "desc";

  filters: Filters;
}
