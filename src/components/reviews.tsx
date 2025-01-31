"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Reviews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="relative py-32 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/review-bg.png')" }}
      id="reviews"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-16">AVIS CLIENT</h2>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <div className="text-center px-4">
                    {/* Review text */}
                    <blockquote className="text-xl mb-8">
                      {/* Quote mark */}
                      <span className="text-[#DC2626] text-8xl font-serif">
                        &ldquo;
                      </span>
                      <span className="text-black">{review.text}</span>
                    </blockquote>

                    {/* Author */}
                    <div className="text-[#DC2626] font-semibold">
                      {review.author}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-none text-white" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-none text-white" />
          </Carousel>
        </div>
      </div>
      {/* Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, i) => {
          return (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full bg-primary/50",
                current - 1 === i && "bg-primary"
              )}
            />
          );
        })}
      </div>
    </section>
  );
};
