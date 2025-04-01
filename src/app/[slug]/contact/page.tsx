/* eslint-disable @next/next/no-img-element */

import { ContactForm } from "@/components/contact-form";
import { formatPrice, getProperty } from "@/lib/utils";

export default async function ContactPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const property = getProperty(params.slug);

  if (!property) {
    return null;
  }

  const { title, image, description, price } = property.metadata;

  return (
    <main className="pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="flex items-start gap-4">
            <img
              src={image}
              alt={title}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h1 className="text-xl  md:text-2xl font-bold">{title}</h1>
              <p className="text-gray-600 text-sm md:text-base">
                {description}
              </p>
              <p className="text-xl font-bold mt-2">
                {price ? `${formatPrice(price)}` : "Prix sur demande"}
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
