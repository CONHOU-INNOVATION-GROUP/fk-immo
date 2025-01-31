"use client";
import { PropertyType } from "@/types/site";
import { useQueryState } from "nuqs";

export function usePropertiesParams({
  properties,
}: {
  properties: PropertyType[];
}) {
  const [searchTerm, setSearchTerm] = useQueryState("q", {
    defaultValue: "",
  });

  // Filter properties based on URL params
  const filteredProperties = properties.filter((property) => {
    // Search term filter
    const searchMatch =
      !searchTerm ||
      property.metadata?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      property.metadata?.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return searchMatch;
  });

  return {
    searchTerm,
    setSearchTerm,
    filteredProperties,
  };
}
