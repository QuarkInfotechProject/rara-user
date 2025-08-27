"use client";
import {
  FileArrowDownIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react/dist/ssr";
import { HeaderProps } from "./type";

const HeaderBtm = ({ data }: HeaderProps) => {
  if (!data) return null;

  const handleShare = () => {
    console.log("Share clicked");
    // Add share functionality here
  };

  const handleDownload = () => {
    console.log("Download clicked");
  };

  return (
    <div className="flex flex-col w-full mb-3">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <div className="flex items-center justify-between w-full">
          {/* Actions Section - Static as requested */}
          <span className="flex items-center justify-between w-full">
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

export default HeaderBtm;
