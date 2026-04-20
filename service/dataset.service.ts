import axiosClient from "./api/axiosClient";

interface GetDataSetParams {
  query?: string;
  Geography?: string;
  sectors?: string;
  tags?: string;
  formats?: string;
  size?: number;
  page?: number;
  sort?: string;
  order?: string;
}
// Metadata
export interface MetadataItem {
  metadata_item: {
    label: string;
  };
  value: string;
}

// Organization
export interface Organization {
  name: string;
  logo: string;
}

// Dataset
export interface Dataset {
  id: string;
  title: string;
  description: string;
  slug: string;
  created: string;
  modified: string;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED" | string;
  dataset_type: "DATA" | string;

  metadata: MetadataItem[];

  tags: string[];
  sectors: string[];
  formats: string[];
  catalogs: string[];
  geographies: string[];

  has_charts: boolean;
  download_count: number;
  trending_score: number;
  is_individual_dataset: boolean;

  organization: Organization;
  user: unknown | null;
  prompt_metadata: unknown | null;
}

// Aggregations
export interface Aggregations {
  dataset_type: {
    doc_count_error_upper_bound: number;
    sum_other_doc_count: number;
    buckets: {
      key: string;
      doc_count: number;
    }[];
  };

  sectors: Record<string, number>;
  tags: Record<string, number>;
  formats: Record<string, number>;
  geographies: Record<string, number>;
}

// Final API Response
export interface getDatasetResponse {
  results: Dataset[];
  total: number;
  aggregations: Aggregations;
}

export const getDatasets = async (
  params: GetDataSetParams,
): Promise<getDatasetResponse> => {
  return axiosClient.get("/api/search/dataset/", { params });
};
