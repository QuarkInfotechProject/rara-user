"use client";

import TestimonialHeader from "./TestimonialHeader";
import TestimonialBackground from "./TestimonialBackground";
import TestimonialGrid from "./TestimonialGrid";
import { testimonialData } from "./testimonialData";
import MobileTestimonial from "./MobileTestimonial";

interface TestimonialProps {
  className?: string;
  onReadAllClick?: () => void;
}

export default function Testimonial({
  className = "",
  onReadAllClick,
}: TestimonialProps) {
  const handleReadAllClick = () => {
    if (onReadAllClick) {
      onReadAllClick();
    } else {
      // Default behavior - you can customize this
      console.log("Read all reviews clicked");
    }
  };

  return (
    <div
      className={`w-full flex items-start h-full overflow-hidden justify-start ${className}`}
    >
      <div className="w-full hidden lg:flex flex-col items-start justify-start relative gap-12">
        {/* Background Image */}
        <TestimonialBackground />

        {/* Content Overlay */}
        <div className="w-full container z-2 pt-12 flex flex-col items-start justify-start gap-12 absolute inset-0">
          {/* Header Section */}
          <TestimonialHeader onReadAllClick={handleReadAllClick} />

          {/* Testimonial Grid with Scrolling Columns */}
          <TestimonialGrid testimonials={testimonialData} />
        </div>
      </div>

      <div className="block lg:hidden">
        <MobileTestimonial />
      </div>
    </div>
  );
}
