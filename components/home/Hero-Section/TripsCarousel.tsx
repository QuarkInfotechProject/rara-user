import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TripCard } from "./TripCard";
import { MobileTripCard } from "./MobileTripCard";
import { Trip } from "./types";

interface TripsCarouselProps {
  trips: Trip[];
}

export const TripsCarousel = ({
  trips,
}: TripsCarouselProps) => {
  return (
    <>
      <div className="hidden md:flex flex-row items-start justify-start gap-10 mt-[-250px] relative text-center text-sm text-whitesmoke">
        {trips.map((trip: Trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>

      <div className="md:hidden relative w-full mt-[-250px] px-4">
        <Carousel className="w-full">
          <CarouselContent className="-ml-6">
            {trips.map((trip: Trip) => (
              <CarouselItem
                key={trip.id}
                className="basis-[80%] md:basis-1/3 pl-6 snap-center"
              >
                <MobileTripCard trip={trip} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
