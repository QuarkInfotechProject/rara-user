import React from "react";
import { ChevronDown } from "lucide-react";
import {
  PersonSimpleHike,
  Jeep,
  Mountains,
  AirplaneTakeoff,
  PersonSimpleTaiChi,
} from "@phosphor-icons/react";

interface NavItemProps {
  icon: string;
  label: string;
  isActive: boolean;
}

const iconComponents = {
  PersonSimpleHike,
  Jeep,
  Mountains,
  AirplaneTakeoff,
  PersonSimpleTaiChi,
};

const NavItem = ({ icon, label, isActive }: NavItemProps) => {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents];

  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer transition-colors duration-200">
      <IconComponent
        size={32}
        className={isActive ? "text-[#1E2F22]" : "text-[#1E2F22]/40"}
      />
      <span className="flex items-center gap-1">
        <p className={isActive ? "text-gray-800" : "text-gray-400"}>{label}</p>
        <ChevronDown
          className={`text-md transition-colors duration-200 ${
            isActive ? "text-gray-800" : "text-gray-400"
          }`}
          size={18}
        />
      </span>
    </div>
  );
};

export default NavItem;
