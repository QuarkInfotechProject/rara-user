"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ClockCounterClockwiseIcon,
  MapPinAreaIcon,
  MountainsIcon,
  PersonSimpleHikeIcon,
  PathIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Itinerary as ItineraryType, ItineraryProps } from "../type";

const Itinerary = ({ data: itineraryData }: ItineraryProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const getItineraryAsArray = (itinerary: ItineraryType) => {
    return Object.entries(itinerary).map(([key, dayData]) => ({
      key,
      dayNumber: parseInt(key.replace("day", "")),
      data: dayData,
    }));
  };

  const itineraryArray = itineraryData
    ? getItineraryAsArray(itineraryData)
    : [];

  const handleExpandAll = () => {
    if (isAllExpanded) {
      // Collapse all
      setExpandedItems([]);
      setIsAllExpanded(false);
    } else {
      // Expand all
      const allItems = itineraryArray.map((item) => `item-${item.dayNumber}`);
      setExpandedItems(allItems);
      setIsAllExpanded(true);
    }
  };

  const handleAccordionChange = (value: string) => {
    const newExpandedItems = value ? [value] : [];
    setExpandedItems(newExpandedItems);
    setIsAllExpanded(newExpandedItems.length === itineraryArray.length);
  };

  if (!itineraryData) {
    return (
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">Itinerary</h1>
        </div>
        <p className="text-gray-500">No itinerary data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-bold">Itinerary</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={handleExpandAll}
          className="bg-transparent border-none"
        >
          {isAllExpanded ? "Collapse all" : "Expand all"}
        </Button>
      </div>
      <div className="w-full">
        <Accordion
          type="multiple"
          value={expandedItems}
          onValueChange={setExpandedItems}
          className="w-full"
        >
          {itineraryArray.map((item, index) => (
            <AccordionItem
              key={item.key}
              value={`item-${item.dayNumber}`}
              className="bg-white rounded-3xl px-4 mb-4"
            >
              <AccordionTrigger className="w-full font-bold text-xl underline-none hover:underline-none text-[#3E641C]">
                <div className="w-full text-start items-center flex justify-start gap-12 ">
                  <span className="underline-none">
                    Day <br />
                    {item.dayNumber.toString().padStart(2, "0")}:
                  </span>{" "}
                  {item.data.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="w-full flex flex-col pl-16">
                  <p className="text-[16px] pl-1">{item.data.description}</p>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="flex items-center justify-start gap-2">
                      <ClockCounterClockwiseIcon className="w-6 h-6" />
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm text-gray-400">Duration</p>
                        <h1 className="font-bold">{item.data.duration}</h1>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                      <MapPinAreaIcon className="w-6 h-6" />
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm text-gray-400">Location</p>
                        <h1 className="font-bold">{item.data.location}</h1>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                      <Image
                        src="/assets/maximum-altitude.svg"
                        alt="altitude"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm text-gray-400">Max Altitude</p>
                        <h1 className="font-bold">{item.data.maxAltitude}</h1>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                      <PersonSimpleHikeIcon className="w-6 h-6" />
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm text-gray-400">Activities</p>
                        <h1 className="font-bold">{item.data.activities}</h1>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                      <PathIcon className="w-6 h-6" />
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm text-gray-400">Accommodation</p>
                        <h1 className="font-bold">{item.data.accommodation}</h1>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                      <MountainsIcon className="w-6 h-6" />
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-sm text-gray-400">Meals</p>
                        <h1 className="font-bold">{item.data.meal}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Itinerary;
