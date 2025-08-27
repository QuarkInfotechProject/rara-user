"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "../type";

interface DesktopGalleryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  onShowMoreClick: () => void;
}

const DesktopGallery = ({
  images,
  onImageClick,
  onShowMoreClick,
}: DesktopGalleryProps) => {
  const [mainImage, tallImage, smallImage, overlayImage] = images;
  const remainingImagesCount = images.length - 4;
  const showRemainingCount = remainingImagesCount > 0;

  return (
    <div className="hidden md:flex w-full h-[480px] grid grid-cols-2 gap-4">
      {/* Left side - single large image */}
      {mainImage && (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => onImageClick(0)}
          />
        </div>
      )}

      {/* Right side - grid of smaller images */}
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
        {/* Top left image - spans 1 col, 2 rows */}
        {tallImage && (
          <div className="relative w-full h-full overflow-hidden rounded-2xl row-span-2">
            <Image
              src={tallImage.src}
              alt={tallImage.alt}
              fill
              className="object-cover cursor-pointer"
              onClick={() => onImageClick(1)}
            />
          </div>
        )}

        {/* Top right image */}
        {smallImage && (
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              src={smallImage.src}
              alt={smallImage.alt}
              fill
              className="object-cover cursor-pointer"
              onClick={() => onImageClick(2)}
            />
          </div>
        )}

        {/* Bottom right image with overlay */}
        {overlayImage && (
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              src={overlayImage.src}
              alt={overlayImage.alt}
              fill
              className="object-cover cursor-pointer"
              onClick={() => onImageClick(3)}
            />
            {showRemainingCount && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button
                  variant="outline"
                  className="underline hover:none text-white bg-transparent border-none"
                  onClick={onShowMoreClick}
                >
                  +{remainingImagesCount} Photos
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopGallery;
