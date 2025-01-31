import { properties } from "@/lib/properties";
import { PropertyType } from "@/types/site";
import { create } from "zustand";

interface PropertiesState {
  // Search and filter state
  searchTerm: string;
  selectedTag: string;
  selectedFeatures: string[];
  priceRange: {
    min: number;
    max: number;
  };

  // Pagination state
  currentPage: number;
  itemsPerPage: number;

  // Actions
  setSearchTerm: (term: string) => void;
  setSelectedTag: (tag: string) => void;
  toggleFeature: (feature: string) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  resetFilters: () => void;

  // Computed
  filteredProperties: PropertyType[];
  paginatedProperties: PropertyType[];
  totalPages: number;
  totalProperties: number;
}

// Calculate initial max price
const maxPrice = Math.max(...properties.map((p) => p.price || 0));

export const usePropertiesStore = create<PropertiesState>()((set, get) => ({
  // Initial state
  searchTerm: "",
  selectedTag: "",
  selectedFeatures: [],
  priceRange: {
    min: 0,
    max: maxPrice,
  },
  currentPage: 1,
  itemsPerPage: 9,

  // Actions
  setSearchTerm: (term) => {
    set((state) => ({
      ...state,
      searchTerm: term.toLowerCase(),
      currentPage: 1,
    }));
  },

  setSelectedTag: (tag) => {
    set((state) => ({
      ...state,
      selectedTag: tag,
      currentPage: 1,
    }));
  },

  toggleFeature: (feature) => {
    set((state) => ({
      ...state,
      selectedFeatures: state.selectedFeatures.includes(feature)
        ? state.selectedFeatures.filter((f) => f !== feature)
        : [...state.selectedFeatures, feature],
      currentPage: 1,
    }));
  },

  setPriceRange: (range) => {
    set((state) => ({
      ...state,
      priceRange: range,
      currentPage: 1,
    }));
  },

  setCurrentPage: (page) => {
    set((state) => ({
      ...state,
      currentPage: page,
    }));
  },

  setItemsPerPage: (items) => {
    set((state) => ({
      ...state,
      itemsPerPage: items,
      currentPage: 1,
    }));
  },

  resetFilters: () => {
    set((state) => ({
      ...state,
      searchTerm: "",
      selectedTag: "",
      selectedFeatures: [],
      priceRange: {
        min: 0,
        max: maxPrice,
      },
      currentPage: 1,
    }));
  },

  // Computed properties
  get filteredProperties() {
    const state = get();
    return properties.filter((property) => {
      // Search term filter
      const searchMatch =
        !state.searchTerm ||
        property.title.toLowerCase().includes(state.searchTerm) ||
        property.description.toLowerCase().includes(state.searchTerm);

      // Tag filter
      const tagMatch = !state.selectedTag || property.tag === state.selectedTag;

      // Features filter
      const featuresMatch =
        state.selectedFeatures.length === 0 ||
        state.selectedFeatures.every((feature) =>
          property.features?.includes(feature)
        );

      // Price range filter
      const priceMatch =
        !property.price ||
        (property.price >= state.priceRange.min &&
          property.price <= state.priceRange.max);

      return searchMatch && tagMatch && featuresMatch && priceMatch;
    });
  },

  get paginatedProperties() {
    const state = get();
    const filtered = get().filteredProperties;
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    return filtered.slice(startIndex, startIndex + state.itemsPerPage);
  },

  get totalPages() {
    const state = get();
    return Math.ceil(get().filteredProperties.length / state.itemsPerPage);
  },

  get totalProperties() {
    return get().filteredProperties.length;
  },
}));
