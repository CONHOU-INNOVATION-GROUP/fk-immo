"use client";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { PropertyType } from "@/types/site";
import { PropertyCard } from "./properties/property-card";

export default function FilteredProperties({
  properties,
}: {
  properties: PropertyType[];
}) {
  const { filteredProperties } = usePropertiesParams({ properties });

  return (
    <>
      {/* Results */}
      {filteredProperties.length === 0 ? (
        <div className="space-y-4 text-center py-8">
          <div className="text-gray-500">
            Aucune propriété ne correspond à vos critères de recherche.
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-500">
            {filteredProperties.length} propriété
            {filteredProperties.length > 1 ? "s" : ""} trouvée
            {filteredProperties.length > 1 ? "s" : ""}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
