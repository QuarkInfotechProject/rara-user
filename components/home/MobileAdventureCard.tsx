import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Mountains } from "@phosphor-icons/react";

interface Adventure {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  groupSize: number;
  difficulty: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  currency?: string;
}

interface MobileAdventureCardProps {
  data: Adventure;
}

const MobileAdventureCard = ({ data }: MobileAdventureCardProps) => {
  const {
    title,
    startDate,
    endDate,
    duration,
    groupSize,
    difficulty,
    originalPrice,
    discountedPrice,
    image,
    currency = "USD",
  } = data;

  return (
    <div className="flex flex-col gap-3 h-full p-4 rounded-2xl border border-[#dde4d7] bg-white w-full">
      {/* Image with star rating overlay */}
      <div className="flex items-start gap-3">
        <div className="relative w-[100px] h-[90px]">
          <Image
            src={image}
            alt={title}
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
            {startDate} → {endDate}
          </div>
          <div className="text-md font-semibold text-[#1e2f22]">{title}</div>
        </div>
      </div>

      <div className="flex items-start justify-between w-full">
        {/* Content */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 text-sm text-darkslategray-300 font-mulish">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#71b344]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-[#71b344]" />
              <span>{groupSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mountains className="w-4 h-4 text-[#71b344]" />
              <span>{difficulty}</span>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xl font-extrabold text-[#1E2F22]">
              {currency} {discountedPrice.toLocaleString()}
            </div>
            {originalPrice !== discountedPrice && (
              <div className="text-sm line-through font-extrabold text-[#1E2F2280]">
                {currency} {originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Width Button */}
      <Button className="w-full rounded-[22px] bg-[#71b344] border-[#71b344] border-solid border-[1px] flex items-center justify-center py-3 px-4 gap-2 text-base text-white font-inter">
        <span>Book a Seat Now</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default MobileAdventureCard;
