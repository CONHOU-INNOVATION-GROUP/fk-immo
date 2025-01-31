import { Button } from "@/components/ui/button";
import { usePropertiesStore } from "@/store/properties";
import { Pagination } from "./filters/pagination";
import { PropertyCard } from "./property-card";

export const PropertyGrid = () => {
  const { paginatedProperties, totalProperties, resetFilters } =
    usePropertiesStore();

  if (paginatedProperties.length === 0) {
    return (
      <div className="space-y-4 text-center py-8">
        <div className="text-gray-500">
          Aucune propriété ne correspond à vos critères de recherche.
        </div>
        <Button onClick={resetFilters} variant="outline">
          Réinitialiser les filtres
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 text-sm text-gray-500">
        {totalProperties} propriété{totalProperties > 1 ? "s" : ""} trouvée
        {totalProperties > 1 ? "s" : ""}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {paginatedProperties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>

      <Pagination />
    </>
  );
};
