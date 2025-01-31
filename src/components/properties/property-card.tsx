/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { PropertyType } from "@/types/site";
import Link from "next/link";

interface PropertyCardProps {
  property: PropertyType;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48">
        <img
          src={property.metadata.image}
          alt={property.metadata.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            {property.metadata.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">
            {property.metadata.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {property.metadata.description}
          </p>

          {/* Price */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Prix</p>
            <p className="text-lg font-bold text-gray-900">
              {property.metadata.price
                ? `${formatPrice(property.metadata.price)}`
                : "Prix sur demande"}
            </p>
          </div>

          {/* Features */}
          {property.metadata.features &&
            property.metadata.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 items-center">
                {property.metadata.features
                  .slice(0, 3)
                  .map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                {property.metadata.features.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{property.metadata.features.length - 3}
                  </span>
                )}
              </div>
            )}
        </div>
        <Link href={`/${property.slug}`} className="mt-auto">
          <Button className="w-full">Voir</Button>
        </Link>
      </div>
    </div>
  );
};
