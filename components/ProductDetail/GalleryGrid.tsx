"use client";

import { useState } from "react";
import DesktopGallery from "./Gallery/DesktopGallery";
import GalleryDialog from "./Gallery/GalleryDialog";
import MobileGallery from "./Gallery/MobileGallery";
import { GalleryComponentProps } from "./type";

const GalleryGrid = ({ data }: GalleryComponentProps) => {
  const { images } = data;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };

  const handleShowMoreClick = () => {
    setCurrentImageIndex(4);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full">
      {/* Mobile View */}
      <MobileGallery images={images} onImageClick={handleImageClick} />

      {/* Desktop View */}
      <DesktopGallery
        images={images}
        onImageClick={handleImageClick}
        onShowMoreClick={handleShowMoreClick}
      />

      {/* Image Gallery Dialog */}
      <GalleryDialog
        images={images}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default GalleryGrid;
