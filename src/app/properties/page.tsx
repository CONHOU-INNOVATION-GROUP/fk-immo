/* eslint-disable @next/next/no-img-element */
"use client";

import { FeaturesFilter } from "@/components/properties/features-filter";
import { Pagination } from "@/components/properties/pagination";
import { PriceFilter } from "@/components/properties/price-filter";
import { PropertyCard } from "@/components/properties/property-card";
import { SearchFilter } from "@/components/properties/search-filter";
import { TagFilter } from "@/components/properties/tag-filter";
import { Button } from "@/components/ui/button";
import { usePropertiesParams } from "@/hooks/use-properties-params";

export default function Properties() {
  const { paginatedProperties, totalProperties, resetFilters } =
    usePropertiesParams();

  return (
    <section className="py-20 px-4" id="properties">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Nos propriétés</h2>
          <p className="text-gray-600">Trouvez la propriété de vos rêves</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex items-center justify-between">
            <SearchFilter />
            <Button variant="outline" onClick={resetFilters}>
              Réinitialiser les filtres
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            <TagFilter />
            <PriceFilter />
          </div>

          <FeaturesFilter />
        </div>

        {/* Results */}
        {paginatedProperties.length === 0 ? (
          <div className="space-y-4 text-center py-8">
            <div className="text-gray-500">
              Aucune propriété ne correspond à vos critères de recherche.
            </div>
            <Button onClick={resetFilters} variant="outline">
              Réinitialiser les filtres
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-500">
              {totalProperties} propriété{totalProperties > 1 ? "s" : ""}{" "}
              trouvée
              {totalProperties > 1 ? "s" : ""}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {paginatedProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>

            <Pagination />
          </>
        )}
      </div>
    </section>
  );
}
