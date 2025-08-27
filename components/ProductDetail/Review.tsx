import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ReviewProps, Review as ReviewType } from "./type";

// Individual Review Card Component
const ReviewCard = ({ review }: { review: ReviewType }) => {
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

  return (
    <div
      className={`p-6 rounded-2xl text-white flex flex-col gap-3 bg-[#1E2F22] ${review.marginTop}`}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full">
          <Image
            src={review.avatar}
            alt={`${review.name} avatar`}
            width={40}
            height={40}
            className="rounded-full w-20 h-20 object-cover"
          />
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

// Main Review Component
const Review = ({ data }: ReviewProps) => {
  // Handle case where data might be undefined or empty
  if (!data || data.length === 0) {
    return (
      <div className="w-full flex flex-col gap-4 mb-6">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">Review</h1>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#71B344] hover:bg-[#5A8F37] text-white rounded-full px-6 py-2 transition-colors duration-200 flex items-center gap-2 border-[#71B344] hover:border-[#5A8F37]"
          >
            Write Review
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-center py-8 text-gray-500">
          No reviews available yet.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4 mb-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-bold">Review</h1>
        <Button
          variant="outline"
          size="sm"
          className="bg-[#71B344] hover:bg-[#5A8F37] text-white rounded-full px-6 py-2 transition-colors duration-200 flex items-center gap-2 border-[#71B344] hover:border-[#5A8F37]"
        >
          Write Review
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="w-full flex items-start gap-4 overflow-x-auto">
        {data.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
