import React, { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { DropdownItem } from "./type";

interface CustomDropdownProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: (item: DropdownItem) => void;
}

const CustomDropdown = ({
  items,
  trigger,
  isOpen,
  onToggle,
  onItemClick,
}: CustomDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [isOpen, items]);

  const handleItemHover = (item: DropdownItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={onToggle}
        className="cursor-pointer transition-colors duration-200"
      >
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 flex min-w-[600px] max-w-[800px]">
            {/* Sidebar List */}
            <div className="w-64 bg-gray-50 rounded-l-lg">
              {items.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => handleItemHover(item)}
                  onClick={() => onItemClick(item)}
                  className={`px-4 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between group ${
                    selectedItem?.id === item.id
                      ? "bg-green-50 text-green-700 border-r-2 border-green-500"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="font-medium text-sm">{item.label}</span>
                  <ChevronRight
                    size={16}
                    className={`transition-colors ${
                      selectedItem?.id === item.id
                        ? "text-green-500"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex">
              {/* Text Content */}
              <div className="flex-1 p-6">
                {selectedItem && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {selectedItem.label}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {selectedItem.description}
                    </p>
                    <button
                      onClick={() => onItemClick(selectedItem)}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
                    >
                      Inquire Availability
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                )}
              </div>

              {/* Image Area */}
              <div className="w-48 h-40 m-4 rounded-lg overflow-hidden">
                {selectedItem && (
                  <img
                    src={
                      selectedItem.image ||
                      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    }
                    alt={selectedItem.label}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
