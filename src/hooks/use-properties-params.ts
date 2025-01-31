"use client";

import { getProperties } from "@/lib/properties";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

// Calculate initial max price once

export function usePropertiesParams() {
  const properties = getProperties(["src", "app", "properties", "contents"]);
  const [searchTerm, setSearchTerm] = useQueryState("q", {
    defaultValue: "",
  });

  const INITIAL_MAX_PRICE = Math.max(
    ...properties.map((p) => p.metadata?.price || 0)
  );

  const [selectedTag, setSelectedTag] = useQueryState("tag", {
    defaultValue: "",
  });

  const [selectedFeatures, setSelectedFeatures] = useQueryState(
    "features",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const [minPrice, setMinPrice] = useQueryState(
    "min",
    parseAsInteger.withDefault(0)
  );

  const [maxPrice, setMaxPrice] = useQueryState(
    "max",
    parseAsInteger.withDefault(INITIAL_MAX_PRICE)
  );

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const itemsPerPage = 9;

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

    // Tag filter
    const tagMatch = !selectedTag || property.metadata?.tag === selectedTag;

    // Features filter
    const featuresMatch =
      selectedFeatures.length === 0 ||
      selectedFeatures.every((feature) =>
        property.metadata?.features?.includes(feature)
      );

    // Price range filter
    const priceMatch =
      !property.metadata?.price ||
      (property.metadata?.price >= minPrice &&
        property.metadata?.price <= maxPrice);

    return searchMatch && tagMatch && featuresMatch && priceMatch;
  });

  // Calculate pagination
  const totalProperties = filteredProperties.length;
  const totalPages = Math.ceil(totalProperties / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProperties = filteredProperties.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const resetFilters = () => {
    setSearchTerm(null);
    setSelectedTag(null);
    setSelectedFeatures(null);
    setMinPrice(null);
    setMaxPrice(null);
    setPage(null);
  };

  return {
    // Filters
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
    selectedFeatures,
    setSelectedFeatures,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    // Pagination
    page,
    setPage,
    itemsPerPage,
    totalPages,
    // Results
    filteredProperties,
    paginatedProperties,
    totalProperties,
    // Actions
    resetFilters,
  };
}
