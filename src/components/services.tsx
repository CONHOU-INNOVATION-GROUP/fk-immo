/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { services } from "@/lib/data";

export const Services = () => {
  return (
    <section className="" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">NOS SERVICES</h2>

        <div className="relative ">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full md:pl-24 "
          >
            <CarouselContent className="">
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-2/3 md:basis-1/3">
                  <div className="bg-white rounded-md  h-full md:rounded-3xl overflow-hidden shadow-md md:shadow-xl">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-2 md:p-6  flex  flex-col gap-2">
                      <h3 className="text-md md:text-xl font-bold">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
