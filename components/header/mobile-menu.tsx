"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  PersonSimpleHike,
  Jeep,
  Mountains,
  AirplaneTakeoff,
  PersonSimpleTaiChi,
} from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  dropdownItems: string[];
}

const navigationItems: NavigationItem[] = [
  {
    id: "trek",
    label: "Trek",
    icon: PersonSimpleHike,
    dropdownItems: [
      "Everest Base Camp",
      "Annapurna Circuit",
      "Langtang Valley",
      "Manaslu Circuit",
    ],
  },
  {
    id: "tour",
    label: "Tour",
    icon: Mountains,
    dropdownItems: [
      "Cultural Tours",
      "Heritage Sites",
      "City Tours",
      "Temple Tours",
    ],
  },
  {
    id: "departures",
    label: "Departures",
    icon: AirplaneTakeoff,
    dropdownItems: [
      "Group Departures",
      "Private Departures",
      "Fixed Departures",
      "Custom Departures",
    ],
  },
  {
    id: "activities",
    label: "Activities",
    icon: PersonSimpleTaiChi,
    dropdownItems: [
      "Rock Climbing",
      "Paragliding",
      "River Rafting",
      "Bungee Jumping",
    ],
  },
  {
    id: "safari",
    label: "Safari",
    icon: Jeep,
    dropdownItems: [
      "Jungle Safari",
      "Wildlife Safari",
      "Jeep Safari",
      "Elephant Safari",
    ],
  },
];

const MobileMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchMove, setTouchMove] = useState({ x: 0, y: 0 });
  const [isSwiping, setIsSwiping] = useState(false);

  const handleDropdownChange = (itemId: string, isOpen: boolean) => {
    setActiveDropdown(isOpen ? itemId : null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
    setTouchMove({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchMove({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });

    const deltaX = Math.abs(e.touches[0].clientX - touchStart.x);
    const deltaY = Math.abs(e.touches[0].clientY - touchStart.y);

    // If horizontal movement is greater than vertical and exceeds threshold, it's a swipe
    if (deltaX > deltaY && deltaX > 10) {
      setIsSwiping(true);
    }
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isSwiping) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  return (
    <div className="w-full px-4 py-2">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full max-w-sm mx-auto"
      >
        <CarouselContent>
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeDropdown === item.id;

            return (
              <CarouselItem key={item.id} className="basis-1/4">
                <DropdownMenu
                  onOpenChange={(isOpen) =>
                    handleDropdownChange(item.id, isOpen)
                  }
                >
                  <DropdownMenuTrigger asChild>
                    <div
                      className="flex flex-col items-center gap-1 cursor-pointer transition-colors duration-200 p-2"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onClick={handleClick}
                    >
                      <IconComponent
                        size={24}
                        weight="fill"
                        color="#1f2937"
                        style={{ color: "#1f2937" }}
                      />
                      <span className="flex items-center gap-1">
                        <p
                          className={`text-xs transition-colors duration-200 font-medium ${
                            isActive ? "text-gray-900" : "text-gray-800"
                          }`}
                        >
                          {item.label}
                        </p>
                        <ChevronDown
                          className={`transition-colors duration-200 ${
                            isActive ? "text-gray-900" : "text-gray-800"
                          }`}
                          size={12}
                        />
                      </span>
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="center"
                    className="w-40"
                    side="bottom"
                  >
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="cursor-pointer hover:bg-gray-50 text-sm"
                      >
                        {dropdownItem}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MobileMenu;
