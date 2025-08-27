import React, { useState } from "react";
import CustomDropdown from "./NavData/CustomDropdown";
import { navigationData } from "./NavData/data";
import NavItem from "./NavData/NavItem";
import { DropdownItem } from "./NavData/type";


const NavigationMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleItemClick = (item: DropdownItem) => {
    console.log("Navigating to:", item.slug);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full flex justify-center gap-24 pb-6 bg-[#F2F5F0] items-center py-6">
      {navigationData.map((navItem) => {
        const isActive = activeDropdown === navItem.id;

        return (
          <CustomDropdown
            key={navItem.id}
            items={navItem.dropdownItems}
            trigger={
              <NavItem
                icon={navItem.icon}
                label={navItem.label}
                isActive={isActive}
              />
            }
            isOpen={isActive}
            onToggle={() => handleDropdownToggle(navItem.id)}
            onItemClick={handleItemClick}
          />
        );
      })}
    </div>
  );
};

export default NavigationMenu;
