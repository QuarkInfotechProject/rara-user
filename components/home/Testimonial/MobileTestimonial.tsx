"use client";

import TestimonialHeader from "./TestimonialHeader";
import Image from "next/image";
import HorizontalScrollingRow from "./MobileScrollingColumn";

interface MobileTestimonialProps {
  className?: string;
  onReadAllClick?: () => void;
  testimonials: {
    id: number;
    user_name: string;
    product_name: string;
    overall_rating: number;
    public_review: string;
  }[];
  isLoading?: boolean;
  error?: string | null;
}

export default function MobileTestimonial({
  className = "",
  onReadAllClick,
  testimonials,
  isLoading = false,
  error = null,
}: MobileTestimonialProps) {
  const handleReadAllClick = () => {
    if (onReadAllClick) {
      onReadAllClick();
    } else {
      console.log("Read all reviews clicked");
    }
  };

  return (
    <div
      className={`w-full flex items-start min-h-[85vh] overflow-hidden justify-start ${className}`}
    >
      <div className="w-full min-h-[85vh] relative flex flex-col items-start justify-end relative gap-12">
        <div className="">
          <Image
            src="/assets/testimonialbg.png"
            width={1200}
            height={400}
            alt="Testimonial Background"
            className="w-full object-cover"
            priority
          />
        </div>
        {/* Content Overlay */}
        <div className="w-full container z-2 pt-12 flex flex-col items-start justify-start absolute top-0">
          {/* Header Section */}
          <TestimonialHeader onReadAllClick={handleReadAllClick} />

          {isLoading ? (
            <div className="w-full flex items-center justify-center py-12">
              <p className="text-gray-600">Loading testimonials...</p>
            </div>
          ) : error ? (
            <div className="w-full flex items-center justify-center py-12">
              <p className="text-red-600">Error: {error}</p>
            </div>
          ) : (
            <HorizontalScrollingRow testimonials={testimonials} />
          )}
        </div>
      </div>
    </div>
  );
}
