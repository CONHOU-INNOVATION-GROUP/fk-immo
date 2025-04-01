import FilteredProperties from "@/components/filteredProperties";
import { SearchFilter } from "@/components/properties/filters/search-filter";
import { getProperties } from "@/lib/utils";
import { Suspense } from "react";

export default async function Properties() {
  const properties = getProperties();

  return (
    <Suspense>
      <section className="py-20 px-4" id="properties">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Nos propriétés</h2>
            <p className="text-gray-600">Trouvez la propriété de vos rêves</p>
          </div>
          <div className="my-3">
            <SearchFilter properties={properties} />
          </div>
          <FilteredProperties properties={properties} />
        </div>
      </section>
    </Suspense>
  );
}
