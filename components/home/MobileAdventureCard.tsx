import Image from "next/image";
import React from "react";
import { Clock, Users } from "lucide-react";
import { Mountains } from "@phosphor-icons/react";
import { Adventure } from "./Adventure";
// import TrekInquiryPopup from "../ProductDetail/Details/Departure/Inquire";
import CustomTripBookingPopup from "../ProductDetail/Details/Departure/Booking";

interface MobileAdventureCardProps {
  data: Adventure;
}

const MobileAdventureCard = ({ data }: MobileAdventureCardProps) => {
  const { name, featuredImage, overview, id, prices, departures } = data;

  // Get the earliest departure dates
  const earliestDeparture = departures[0];
  const startDate = earliestDeparture?.departure_from || "";
  const endDate = earliestDeparture?.departure_to || "";

  // Get pricing info
  const priceInfo = prices[0];
  const originalPrice = parseFloat(priceInfo?.original_price_usd || "0");
  const discountedPrice = parseFloat(priceInfo?.discounted_price_usd || "0");
  const finalPrice = discountedPrice > 0 ? discountedPrice : originalPrice;

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="flex flex-col gap-3 h-full p-4 rounded-2xl border border-[#dde4d7] bg-white w-full">
      {/* Image with star rating overlay */}
      <div className="flex items-start gap-3">
        <div className="relative w-[100px] h-[90px]">
          <Image
            src={featuredImage.url}
            alt={name}
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute top-3 right-1 bg-black/70 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-medium">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs">4.8</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[#1E2F2280] text-xs font-semibold">
            {formatDate(startDate)} → {formatDate(endDate)}
          </div>
          <div className="text-md font-semibold text-[#1e2f22]">{name}</div>
        </div>
      </div>

      <div className="flex items-start justify-between w-full">
        {/* Content */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 text-sm text-darkslategray-300 font-mulish">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#71b344]" />
              <span>{overview.duration} Days</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#71b344]" />
              <span>{overview.group_size}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mountains className="w-4 h-4 text-[#71b344]" />
              <span>{overview.trip_grade}</span>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xl font-extrabold text-[#1E2F22]">
              USD {finalPrice.toLocaleString()}
            </div>
            {discountedPrice > 0 && originalPrice !== discountedPrice && (
              <div className="text-sm line-through font-extrabold text-[#1E2F2280]">
                USD {originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>

      <CustomTripBookingPopup
        buttonText="Book a seat now"
        trekTitle={name}
        trekId={id}
      />
      {/* Full Width Button
      <TrekInquiryPopup
        trekId={id}
        trekTitle={name}
        buttonText="Book a seat now"
        buttonClassName="rounded-[22px] bg-[#71b344] border-[#71b344] border-solid border-[1px] flex flex-row items-center justify-center py-2 px-4 gap-2 text-left text-base text-whitesmoke font-inter"
      /> */}
    </div>
  );
};

export default MobileAdventureCard;
