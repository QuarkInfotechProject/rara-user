import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Rating } from "./types";

interface RatingComponentProps {
  rating: Rating;
}

export const RatingComponent = ({
  rating,
}: RatingComponentProps) => {
  const renderStars = (
    ratingScore: number,
    maxStars: number
  ): JSX.Element[] => {
    return Array.from({ length: maxStars }, (_, index: number) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(ratingScore)
            ? "text-black fill-black"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-[24.4px] absolute top-[calc(50%_-_36px)] right-[40px] hidden lg:flex flex-col items-center justify-center gap-2.5 z-[3] text-xs text-black font-mulish">
      <Image
        className="w-[22px] relative max-h-full overflow-hidden"
        width={22}
        height={22}
        sizes="100vw"
        alt="Google"
        src={rating.googleIcon}
      />
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-end gap-1">
        {renderStars(rating.score, rating.maxStars)}
      </div>
      <div className="relative leading-[150%] font-medium">{rating.score}</div>
    </div>
  );
};
