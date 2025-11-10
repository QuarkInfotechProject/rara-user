import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      <div className="hidden md:flex flex-row w-full items-center justify-center gap-10 mt-[-250px] relative text-center text-sm text-whitesmoke">
        {trips.map((trip: Trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>

      <div className="md:hidden relative w-full grid grid-cols-2 gap-2 absolute mt-[-200px] px-4">
        {/* <Carousel className="w-full">
          <CarouselContent className="-ml-6"> */}
            {trips.map((trip: Trip) => (
              // <CarouselItem
              //   key={trip.id}
              //   className="basis-[50%] md:basis-2/3 snap-center"
              // >
                <MobileTripCard trip={trip} />
              // </CarouselItem>
            ))}
          {/* </CarouselContent>
        </Carousel> */}
      </div>
    </>
  );
};
