import { getDatasets } from "@/service/dataset.service";
import { cleanParams, parseQueryParams } from "@/utils/queryParams";
import DatasetClient from "../../view/datasetlisting";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  const searchParamsdata = await searchParams;

  const parsed = parseQueryParams(searchParamsdata);

  // ✅ Build params safely (only include valid values)
  const params = cleanParams({
    query: parsed.filters.query || undefined,

    sectors: parsed.filters.sectors.length
      ? parsed.filters.sectors.join(",")
      : undefined,

    formats: parsed.filters.formats.length
      ? parsed.filters.formats.join(",")
      : undefined,

    tags: parsed.filters.tags.length
      ? parsed.filters.tags.join(",")
      : undefined,

    geographies: parsed.filters.geographies.length
      ? parsed.filters.geographies.join(",")
      : undefined,

    page: parsed.page,
    size: parsed.size,
    sort: parsed.sort,
    order: parsed.order,
  });

  const res = await getDatasets(params);

  return (
    <DatasetClient
      initialState={{
        data: res.results,
        total: res.total,
        page: parsed.page,
        size: parsed.size,
        sort: parsed.sort,
        order: parsed.order,
        filters: parsed.filters,
        originalfilter: res.aggregations,
      }}
    />
  );
}
