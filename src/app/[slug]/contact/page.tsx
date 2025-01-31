"use client";

import { ContactForm } from "@/components/contact-form";
import { getProperty } from "@/lib/utils";
import { use } from "react";

export default function ContactPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(props.params);
  const property = getProperty(params.slug);

  if (!property) {
    return null;
  }

  return (
    <main className="pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="flex items-start gap-4">
            <img
              src={property.image}
              alt={property.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold">{property.title}</h1>
              <p className="text-gray-600">{property.description}</p>
              <p className="text-xl font-bold mt-2">
                {property.price
                  ? `FCFA ${property.price.toLocaleString()}`
                  : "Prix sur demande"}
              </p>
            </div>
          </div>
          <hr />
          <ContactForm property={property} />
        </div>
      </div>
    </main>
  );
}
