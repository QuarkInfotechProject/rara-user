"use client";
import {
  FileArrowDownIcon,
  MapPinAreaIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Star } from "lucide-react";
import { HeaderProps } from "./type";

const Header = ({ data }: HeaderProps) => {
  // Handle missing data gracefully
  if (!data) return null;

  const { title, location, rating } = data;

  // Format rating display
  const formatRating = (score: number, maxScore: number): string =>
    `${score}/${maxScore}`;

  // Format location display
  const formatLocation = (region: string, district: string): string =>
    `${region}, ${district}`;

  // Static handlers for share and download (as requested)
  const handleShare = () => {
    console.log("Share clicked");
    // Add share functionality here
  };

  const handleDownload = () => {
    console.log("Download clicked");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <div className="flex items-center justify-between w-full">
          <span className="w-full md:w-auto flex items-center justify-between md:gap-2">
            {/* Location Section */}
            {location && (
              <span className="flex items-center gap-1">
                <MapPinAreaIcon />
                <p className="text-xs md:text-lg">{formatLocation(location.region, location.district)}</p>
              </span>
            )}

            {/* Rating Section */}
            {rating && (
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-green-500 fill-current" />
                <p>
                  {formatRating(rating.score, rating.maxScore)}{" "}
                  {rating.reviewText}
                </p>
              </span>
            )}
          </span>

          {/* Actions Section - Static as requested */}
          <span className="hidden md:flex items-center gap-2">
            <span
              className="flex items-center gap-1 cursor-pointer hover:opacity-80"
              onClick={handleShare}
            >
              <ShareNetworkIcon />
              <p>Share</p>
            </span>

            <span
              className="flex items-center gap-1 cursor-pointer hover:opacity-80"
              onClick={handleDownload}
            >
              <FileArrowDownIcon />
              <p>Download</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
