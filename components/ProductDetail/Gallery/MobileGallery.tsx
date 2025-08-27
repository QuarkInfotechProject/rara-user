"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryImage } from "../type";

interface MobileGalleryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const MobileGallery = ({ images, onImageClick }: MobileGalleryProps) => {
  return (
    <div className="block md:hidden w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-[300px] overflow-hidden ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => onImageClick(index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default MobileGallery;
