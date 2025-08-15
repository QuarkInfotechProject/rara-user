"use client";

import Image from "next/image";

interface TestimonialBackgroundProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function TestimonialBackground({
  src = "/assets/testimonialbg.png",
  alt = "Testimonial Background",
  className = "",
}: TestimonialBackgroundProps) {
  return (
    <div className={`w-full ${className}`}>
      <Image
        src={src}
        width={1200}
        height={400}
        alt={alt}
        className="w-full object-cover"
        priority
      />
    </div>
  );
}
