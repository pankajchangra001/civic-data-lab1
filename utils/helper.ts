import { Filters } from "@/controller/dataset.types";

export function hasActiveFilters(filters: Filters) {
  return Object.entries(filters).some(([key, value]) => {
    if (key === "query") return value !== "";
    return Array.isArray(value) && value.length > 0;
  });
}

export function formatDate(dateString?: string) {
  if (!dateString) return "-";

  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  let month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  // truncate if length > 4
  if (month.length > 4) {
    month = month.slice(0, 3);
  }

  return `${day} ${month} ${year}`;
}
