import { getProperties } from "@/lib/utils";
import Link from "next/link";
import { PropertyCard } from "./properties/property-card";
import { Button } from "./ui/button";

export const FeaturedProperties = () => {
  const featuredProperties = getProperties().slice(0, 6);

  return (
    <section className="py-16 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Nos propriétés</h2>
            <p className="text-gray-600">Découvrez nos meilleures propriétés</p>
          </div>
          <Link href="/properties">
            <Button variant="outline" size="lg">
              Voir toutes les propriétés
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/properties">
            <Button size="lg">Explorer toutes nos propriétés</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
