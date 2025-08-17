import React from "react";
import { Star } from "./Star";
import { StarsProps } from "@/types/google.types";

export const Stars: React.FC<StarsProps> = ({
  rating,
  size = 20,
  showHalfStars = true,
}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Full star
      stars.push(<Star key={i} filled={true} size={size} />);
    } else if (showHalfStars && i - 0.5 <= rating) {
      // Half star
      stars.push(<Star key={i} filled={false} halfFilled={true} size={size} />);
    } else {
      // Empty star
      stars.push(<Star key={i} filled={false} size={size} />);
    }
  }

  return (
    <div
      className="flex space-x-1"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {stars}
    </div>
  );
};

export default Stars;
