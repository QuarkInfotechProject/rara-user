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

interface MobileCarouselProps {
  testimonials: {
    id: number;
    user_name: string;
    product_name: string;
    overall_rating: number;
    public_review: string;
  }[];
}

const MobileCarousel = ({ testimonials }: MobileCarouselProps) => {
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
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard
                name={testimonial.user_name}
                trek={testimonial.product_name}
                rating={testimonial.overall_rating}
                review={testimonial.public_review}
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
