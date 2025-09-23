"use client";
import {
  FileArrowDownIcon,
  MapPinAreaIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Star } from "lucide-react";

interface Dossier {
  id: number;
  content?: string | null;
  pdf_file: string;
}

interface HeaderProps {
  data: {
    type?: string;
    title?: string;
    name?: string;
    location?: string;
    rating?: number;
    total_rating?: number;
    tagline?: string;
    slug?: string;
    dossiers?: Dossier[];
  };
  shareData?: {
    slug: string;
    dossiers: Dossier[];
  };
}

const Header = ({ data, shareData }: HeaderProps) => {
  if (!data) return null;

  const { title, name, location, rating, total_rating, tagline } = data;
  const displayTitle = title || name;
  const dossiers = data.dossiers || shareData?.dossiers || [];
  const hasDossier = dossiers.length > 0 && dossiers[0]?.pdf_file;

  const formatRating = (score?: number, totalReviews?: number): string => {
    if (!score || !totalReviews) return "Yet to be reviewed";
    return `${score.toFixed(1)} (${totalReviews} reviews)`;
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: displayTitle || "Tour Details",
          text: `Check out this amazing tour: ${displayTitle}`,
          url: currentUrl,
        });
      } catch (error) {
        fallbackShare(currentUrl);
      }
    } else {
      fallbackShare(currentUrl);
    }
  };

  const fallbackShare = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (error) {
      prompt("Copy this link:", url);
    }
  };

  const handleDownload = () => {
    if (!dossiers.length) {
      alert("Dossier not available for download");
      return;
    }

    const dossier = dossiers[0];
    if (!dossier.pdf_file) {
      alert("Dossier file not available");
      return;
    }

    const link = document.createElement("a");
    link.href = dossier.pdf_file;
    link.download = displayTitle
      ? `${displayTitle.replace(/\s+/g, "_")}_dossier.pdf`
      : `tour_${dossier.id}_dossier.pdf`;
    link.target = "_blank";

    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      window.open(dossier.pdf_file, "_blank");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col items-start justify-start gap-2">
       
        <h1 className="text-3xl md:text-5xl font-bold">{displayTitle}</h1>

        <div className="flex items-center justify-between w-full">
          <span className="w-full md:w-auto flex items-center justify-between md:gap-4">
            {location && (
              <span className="flex items-center gap-1">
                <MapPinAreaIcon className="w-4 h-4 md:w-5 md:h-5" />
                <p className="text-xs md:text-lg">{location}</p>
              </span>
            )}

            {(rating && total_rating) || (!rating && !total_rating) ? (
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-green-500 fill-current" />
                <p className="text-xs md:text-base">
                  {formatRating(rating, total_rating)}
                </p>
              </span>
            ) : null}
          </span>

          <span className="hidden md:flex items-center gap-4">
            <button
              className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-gray-100"
              onClick={handleShare}
              type="button"
            >
              <ShareNetworkIcon className="w-5 h-5" />
              <p className="text-sm">Share</p>
            </button>

            <button
              className={`flex items-center gap-1 cursor-pointer transition-opacity p-2 rounded-lg hover:bg-gray-100 ${
                !hasDossier
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-80"
              }`}
              onClick={hasDossier ? handleDownload : undefined}
              type="button"
              disabled={!hasDossier}
            >
              <FileArrowDownIcon className="w-5 h-5" />
              <p className="text-sm">
                {hasDossier ? "Download" : "No Dossier"}
              </p>
            </button>
          </span>
        </div>
      </div>
    </div>  
  );
};

export default Header;
