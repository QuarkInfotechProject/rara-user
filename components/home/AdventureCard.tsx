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

interface AdventureCardProps {
  data: Adventure;
}

const AdventureCard = ({ data }: AdventureCardProps) => {
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
    <div className="flex gap-3 items-center justify-center h-full p-2 rounded-2xl border border-[#dde4d7] bg-white">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={image}
          alt={title}
          width={255}
          height={200}
          className="rounded-lg w-[255px] h-[230px] object-cover"
        />
      </div>
      <div className="flex-1 w-full relative flex flex-col items-start justify-start gap-[38px] text-left text-sm text-darkslategray-400 font-sen">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
            <div className="self-stretch text-[#1E2F2280] relative leading-[150%] font-semibold">
              {startDate}→{endDate}
            </div>
            <div className=" text-2xl leading-[150%] font-semibold text-[#1e2f22]">
              {title}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-3 text-darkslategray-300 font-mulish">
            <div className="flex flex-row items-center justify-start gap-1">
              <Clock className="text-sm w-4 h-4 text-[#71b344]" />
              <div className="relative leading-[150%]">{duration}</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <Users className="text-sm w-4 h-4 text-[#71b344]" />
              <div className="relative leading-[150%]">{groupSize}</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-1">
              <Mountains className="text-sm w-4 h-4 text-[#71b344]" />
              <div className="relative leading-[150%]">{difficulty}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-0 text-right text-xl text-[#1E2F22] font-mulish">
          <div className="flex flex-col items-start justify-center font-mulish">
            <div className="relative leading-[150%] font-extrabold">
              {currency} {discountedPrice.toLocaleString()}
            </div>
            {originalPrice !== discountedPrice && (
              <div className="relative text-sm [text-decoration:line-through] leading-[150%] font-extrabold text-[#1E2F2280]">
                {currency} {originalPrice.toLocaleString()}
              </div>
            )}
          </div>
          <Button className="rounded-[22px] bg-[#71b344] border-[#71b344] border-solid border-[1px] flex flex-row items-center justify-center py-2 px-4 gap-2 text-left text-base text-whitesmoke font-inter">
            <div className="relative leading-[150%]">Book a seat now</div>
            <ArrowRight className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
