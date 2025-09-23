
export interface Review {
  id: number;
  name: string;
  country?: string | null;
  email?: string;
  avatar: string; 
  trek: string; 
  rating: number; 
  review: string; 
  marginTop?: string; 

  // Additional API data (optional, for future use)
  cleanliness?: number;
  hospitality?: number;
  value_for_money?: number;
  communication?: number;
  overall_rating?: number;
  reply_to_public_review?: string | null;
  approved?: boolean;
  reviewed_at?: string;
}

export interface ReviewData {
  rating: number;
  review: string;
  name: string;
  email: string;
  photo: File | null;
}

export interface ReviewProps {
  data: {
    slug: string;
    title: string;
    average_rating: number;
    total_rating: number;
    total_comment: number;
  };
}
