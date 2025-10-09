"use client";

import { Star } from "lucide-react";
import { Review } from "./types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  // Get first letter of name
  const getInitial = (name: string): string => {
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <div
      className={`p-6 rounded-2xl text-white flex flex-col gap-3 bg-[#1E2F22] min-w-[280px] md:min-w-0 ${
        review.marginTop || ""
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center">
          <span className="text-[#1E2F22] font-bold text-xl">
            {getInitial(review.name)}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold">{review.name}</span>
          <p className="font-satisfy text-xs text-gray-300">{review.trek}</p>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
