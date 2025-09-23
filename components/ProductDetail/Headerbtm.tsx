"use client";
import {
  FileArrowDownIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react/dist/ssr";

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

const HeaderBtm = ({ data, shareData }: HeaderProps) => {
  if (!data) return null;

  const { title, name } = data;
  const displayTitle = title || name;
  const dossiers = data.dossiers || shareData?.dossiers || [];
  const hasDossier = dossiers.length > 0 && dossiers[0]?.pdf_file;

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
    <div className="flex flex-col w-full mb-3">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <div className="flex items-center justify-between w-full">
          <span className="flex items-center justify-between w-full">
            <button
              className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-gray-100"
              onClick={handleShare}
              type="button"
            >
              <ShareNetworkIcon className="w-5 h-5" />
              <p className="text-sm font-medium">Share</p>
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
              <p className="text-sm font-medium">
                {hasDossier ? "Download Dossier" : "Dossier Unavailable"}
              </p>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBtm;
