/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
    <section className="mt-12" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">NOS SERVICES</h2>

        <div className="relative">
          {isCarouselEnabled ? (
            <div className="relative px-4 md:px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="">
                  {services.map((service, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
                        {/* Image - hauteur fixe */}
                        <div className="h-56 md:h-64 w-full overflow-hidden rounded-t-3xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                    
                        {/* Contenu - hauteur flexible mais uniforme */}
                        <div className="p-4 md:p-6 flex flex-col gap-3 flex-grow">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-sm leading-relaxed line-clamp-3">
                            {service.description}
                          </p>
                          <div className="mt-auto pt-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="text-sm mt-2 bg-red-600 text-white">Voir plus</Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                  <DialogTitle>{service.title}</DialogTitle>
                                </DialogHeader>
                                <div className="mt-4">
                                  <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                  />
                                  <p className="text-gray-700">{service.description}</p>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Scroll Buttons */}
                <CarouselPrevious className="absolute left-0 -translate-y-1/2 bg-blue-500 text-white shadow-md border-0 hover:bg-gray-100" />
                <CarouselNext className="absolute right-0 -translate-y-1/2 bg-blue-500 text-white shadow-md border-0 hover:bg-gray-100" />
              </Carousel>
            </div>
          ) : (
            <div className="flex flex-col space-y-4 px-4 pb-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-md overflow-hidden shadow-md flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="text-md font-bold">{service.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                    <div className="mt-auto pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="text-xs">Voir plus</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-sm mx-auto">
                          <DialogHeader>
                            <DialogTitle>{service.title}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <p className="text-gray-700">{service.description}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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