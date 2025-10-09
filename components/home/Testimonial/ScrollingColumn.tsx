"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export interface TestimonialData {
  id: number;
  user_name: string;
  product_name: string;
  overall_rating: number;
  public_review: string;
}

interface ScrollingColumnProps {
  testimonials: TestimonialData[];
  direction: "up" | "down";
  keyPrefix: string;
  className?: string;
}

export default function ScrollingColumn({
  testimonials,
  direction,
  keyPrefix,
  className = "",
}: ScrollingColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationIdRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  // Duplicate testimonials for seamless scrolling
  const duplicatedData = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const column = columnRef.current;
    if (!column) return;

    const scrollSpeed = 0.25;
    const maxScrollHeight = column.scrollHeight / 3;

    // Initialize scroll position only on first mount
    if (scrollPositionRef.current === 0 && direction === "up") {
      scrollPositionRef.current = maxScrollHeight;
      column.scrollTop = maxScrollHeight;
    } else if (scrollPositionRef.current === 0 && direction === "down") {
      scrollPositionRef.current = 0;
      column.scrollTop = 0;
    }

    const animate = () => {
      if (direction === "down") {
        // Scroll down
        scrollPositionRef.current += scrollSpeed;
        if (scrollPositionRef.current >= maxScrollHeight) {
          scrollPositionRef.current = 0;
        }
      } else {
        // Scroll up
        scrollPositionRef.current -= scrollSpeed;
        if (scrollPositionRef.current <= 0) {
          scrollPositionRef.current = maxScrollHeight;
        }
      }

      column.scrollTop = scrollPositionRef.current;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation if not hovered
    if (!isHovered) {
      animationIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [direction, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Store current scroll position when hovering
    const column = columnRef.current;
    if (column) {
      scrollPositionRef.current = column.scrollTop;
    }
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume animation from current position
  };

  return (
    <div
      ref={columnRef}
      className={`flex flex-col gap-6 h-full overflow-hidden scrollbar-hide ${className}`}
      style={{ scrollBehavior: "auto" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {duplicatedData.map((testimonial, index) => (
        <TestimonialCard
          key={`${keyPrefix}-${testimonial.id}-${index}`}
          name={testimonial.user_name}
          trek={testimonial.product_name}
          rating={testimonial.overall_rating}
          review={testimonial.public_review}
        />
      ))}
    </div>
  );
}
