/* eslint-disable @next/next/no-img-element */
import { CustomMDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { formatPrice, getProperty } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function PropertyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(props.params);
  const property = getProperty(params.slug);

  if (!property) {
    notFound();
  }

  const { title, image, tag, price, details, features } = property.metadata;

  return (
    <main className="pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Tag */}
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold">{title}</h1>

            {/* Price */}
            <div className="space-y-1">
              <p className="text-sm text-gray-600">FCFA</p>
              <p className="text-4xl font-bold">
                {price && formatPrice(price)}
              </p>
            </div>

            {/* Property Details Form */}
            <div className="grid grid-cols-2 gap-4">
              {details &&
                Object.entries(details).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-4 bg-gray-50 rounded-lg space-y-1"
                  >
                    <p className="text-sm text-gray-500 capitalize">{key}</p>
                    <p className="font-medium text-gray-900">{value}</p>
                  </div>
                ))}
            </div>

            {/* Features */}
            {features && (
              <div className="space-y-2">
                <Label>Caractéristiques</Label>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mt-12 prose max-w-none">
            <CustomMDX source={property.content} />
          </div>
          <Link href={`/${params.slug}/contact`}>
            <Button className="w-full bg-[#DC2626] hover:bg-red-700">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
