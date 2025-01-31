/* eslint-disable @next/next/no-img-element */
import { expertise } from "@/lib/data";

export const Expertise = () => {
  return (
    <section className="py-24 px-4 bg-white" id="expertise">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          {expertise.title}
        </h2>

        <div className="flex gap-7 flex-col-reverse md:flex-row justify-center ">
          {/* Left side - Text and Features */}
          <div className="space-y-12 max-w-2xl w-full">
            {/* Description paragraphs */}
            <div className="space-y-4">
              {expertise.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {expertise.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="size-16"
                    />
                  </div>
                  <h3 className="text-sm font-bold">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <img
            src={expertise.image}
            alt="Expertise"
            className="object-cover h-[400px] md:h-full"
          />
        </div>
      </div>
    </section>
  );
};
