"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./testimonialData";

const MobileCarousel = () => {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonialData.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard
                name={testimonial.name}
                trek={testimonial.trek}
                rating={testimonial.rating}
                review={testimonial.review}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
