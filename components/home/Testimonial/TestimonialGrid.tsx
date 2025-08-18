"use client";

import ScrollingColumn, { TestimonialData } from "./ScrollingColumn";

interface TestimonialGridProps {
  testimonials: TestimonialData[];
  className?: string;
}

export default function TestimonialGrid({
  testimonials,
  className = "",
}: TestimonialGridProps) {
  // Split testimonials into two columns
  const leftColumnData = testimonials.slice(
    0,
    Math.ceil(testimonials.length / 2)
  );
  const rightColumnData = testimonials.slice(
    Math.ceil(testimonials.length / 2)
  );

  return (
    <div
      className={`w-full lg:max-w-4xl grid grid-cols-2 gap-6 h-full ${className}`}
    >
      {/* Left Column - Scrolls Down */}
      <ScrollingColumn
        testimonials={leftColumnData}
        direction="down"
        keyPrefix="left"
      />

      {/* Right Column - Scrolls Up */}
      <ScrollingColumn
        testimonials={rightColumnData}
        direction="up"
        keyPrefix="right"
      />
    </div>
  );
}
