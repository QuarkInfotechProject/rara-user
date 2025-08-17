export interface GooglePlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews?: GoogleReview[];
  place_id: string;
  formatted_address?: string;
  website?: string;
}

export interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlacesResponse {
  result: GooglePlaceDetails;
  status: string;
  error_message?: string;
}

// Component Types
export interface ReviewData {
  rating: number;
  totalReviews: number;
  businessName?: string;
}

export interface GoogleRatingProps {
  placeId?: string;
  initialRating?: number;
  initialTotalReviews?: number;
  businessName?: string;
  showReviewCount?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
}

export interface StarProps {
  filled: boolean;
  halfFilled?: boolean;
  size?: number;
}

export interface StarsProps {
  rating: number;
  size?: number;
  showHalfStars?: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// Cache Types
export interface CacheItem<T> {
  data: T;
  timestamp: number;
}
