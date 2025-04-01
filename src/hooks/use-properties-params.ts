"use client";
import { PropertyType } from "@/types/site";
import { useQueryState } from "nuqs";
import { useDebounce } from "./useDebounce";

export function usePropertiesParams({
  properties,
}: {
  properties: PropertyType[];
}) {
  const [searchTerm, setSearchTerm] = useQueryState("q", {
    defaultValue: "",
  });

  const debouncedSetSearchTerm = useDebounce(searchTerm, 500);

  // Filter properties based on URL params
  const filteredProperties = properties.filter((property) => {
    // Search term filter
    const searchMatch =
      !debouncedSetSearchTerm ||
      property.metadata?.title
        .toLowerCase()
        .includes(debouncedSetSearchTerm.toLowerCase()) ||
      property.metadata?.description
        .toLowerCase()
        .includes(debouncedSetSearchTerm.toLowerCase());

    return searchMatch;
  });

  return {
    searchTerm,
    setSearchTerm,
    filteredProperties,
  };
}
