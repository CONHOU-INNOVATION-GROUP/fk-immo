/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { services } from "@/lib/data";
import { useEffect, useState } from "react";

export const Services = () => {
  const [isCarouselEnabled, setIsCarouselEnabled] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const handleResize = () => {
      setIsCarouselEnabled(window.innerWidth >= 768); // Activer le carousel à partir de md
    };

    handleResize(); // Vérifier au chargement
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">NOS SERVICES</h2>

        <div className="relative ">
          {isCarouselEnabled ? (
                      <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full md:pl-8 "
                    >
                      <CarouselContent className="">
                        {services.map((service, index) => (
                         <CarouselItem key={index} className="basis-full md:basis-1/3">
                         <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                           {/* Image */}
                           <div className="h-56 md:h-64 w-full overflow-hidden rounded-t-3xl">
                             <img
                               src={service.image}
                               alt={service.title}
                               className="w-full h-full object-cover"
                             />
                           </div>
                       
                           {/* Contenu */}
                           <div className="p-4 md:p-6 flex flex-col gap-3">
                             <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                               {service.title}
                             </h3>
                             <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                               {service.description}
                             </p>
                           </div>
                         </div>
                       </CarouselItem>
                       
                        ))}
                      </CarouselContent>
                    </Carousel>
            
          ):(
            <div className="flex flex-col space-y-4 px-4 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-md overflow-hidden shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-md font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          )}
        </div>
      </div>
    </section>
  );
};
