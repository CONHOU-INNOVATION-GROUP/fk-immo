/* eslint-disable @next/next/no-img-element */
"use client";

import { FeaturesFilter } from "./properties/filters/features-filter";
import { PriceFilter } from "./properties/filters/price-filter";
import { SearchFilter } from "./properties/filters/search-filter";
import { TagFilter } from "./properties/filters/tag-filter";
import { PropertyGrid } from "./properties/property-grid";

export const PropertiesPage = () => {
  return (
    <section className="py-16 px-4" id="properties">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Nos propriétés</h2>
          <p className="text-gray-600">Trouvez la propriété de vos rêves</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <SearchFilter />

          <div className="flex flex-wrap gap-6">
            <TagFilter />
            <PriceFilter />
          </div>

          <FeaturesFilter />
        </div>

        <PropertyGrid />
      </div>
    </section>
  );
};
