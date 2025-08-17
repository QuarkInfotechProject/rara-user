import React, { useState, useEffect } from "react";
import { GoogleLogo } from "./GoogleLogo";
import { Stars } from "./Stars";
import { GoogleRatingProps, ReviewData } from "@/types/google.types";
import { formatRating, getRatingText } from "@/lib/utils/googleApi";

export const GoogleRating: React.FC<GoogleRatingProps> = ({
  placeId,
  initialRating = 0,
  initialTotalReviews = 0,
  businessName,
  showReviewCount = true,
  size = "medium",
  className = "",
  onClick,
}) => {
  const [reviewData, setReviewData] = useState<ReviewData>({
    rating: initialRating,
    totalReviews: initialTotalReviews,
    businessName,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Size configurations
  const sizeConfig = {
    small: { logo: 18, star: 16, padding: "px-4 py-2", text: "text-sm" },
    medium: { logo: 24, star: 20, padding: "px-6 py-3", text: "text-base" },
    large: { logo: 28, star: 24, padding: "px-8 py-4", text: "text-lg" },
  };

  const config = sizeConfig[size];

  // Fetch reviews from API
  const fetchGoogleReviews = async (
    placeId: string
  ): Promise<ReviewData | null> => {
    try {
      const response = await fetch(`/api/google-reviews?placeId=${placeId}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch reviews");
      }

      const data = await response.json();
      return {
        rating: data.rating || 0,
        totalReviews: data.user_ratings_total || 0,
        businessName: data.name,
      };
    } catch (error) {
      console.error("Error fetching Google reviews:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (placeId && !initialRating) {
      setLoading(true);
      setError(null);

      fetchGoogleReviews(placeId)
        .then((data) => {
          if (data) {
            setReviewData(data);
          }
        })
        .catch((err) => {
          setError(err.message || "Failed to load reviews");
        })
        .finally(() => setLoading(false));
    }
  }, [placeId, initialRating]);

  // Loading skeleton
  if (loading) {
    return (
      <div className={`google-rating-container ${config.padding} ${className}`}>
        <div className="animate-pulse flex items-center">
          <div className={`w-6 h-6 bg-gray-300 rounded mr-3`} />
          <div className="flex space-x-1 mr-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-5 h-5 bg-gray-200 rounded`} />
            ))}
          </div>
          <div className="w-24 h-4 bg-gray-300 rounded" />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        className={`google-rating-container ${config.padding} ${className} border-red-200`}
      >
        <span className="text-red-600 text-sm">Failed to load rating</span>
      </div>
    );
  }

  // Don't render if no rating data
  if (!reviewData.rating && !initialRating) {
    return null;
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (placeId) {
      // Default behavior: open Google reviews
      window.open(
        `https://search.google.com/local/reviews?placeid=${placeId}`,
        "_blank"
      );
    }
  };

  return (
    <div
      className={`flex items-center bg-white rounded-full pl-6 pr-12 py-2 border border-gray-200 transition-all duration-300 ${
        config.padding
      } ${className} fade-in ${onClick || placeId ? "cursor-pointer" : ""}`}
      onClick={handleClick}
      role={onClick || placeId ? "button" : "img"}
      tabIndex={onClick || placeId ? 0 : -1}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && (onClick || placeId)) {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Google rating: ${getRatingText(reviewData.rating)}${
        showReviewCount && reviewData.totalReviews
          ? ` based on ${reviewData.totalReviews} reviews`
          : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <GoogleLogo size={config.logo} />
        <div className="flex flex-col gap-1">
          <Stars rating={reviewData.rating} size={config.star} />
          <div className="flex items-center gap-2">
            <span className={` text-gray-700 font-medium ${config.text}`}>
              {getRatingText(reviewData.rating)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleRating;
