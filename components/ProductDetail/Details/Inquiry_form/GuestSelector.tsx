import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GuestCounts {
  infant: number;
  child: number;
  adult: number;
}

interface GuestSelectorProps {
  onGuestChange?: (guests: GuestCounts) => void;
}

function GuestSelector({ onGuestChange }: GuestSelectorProps) {
  const [guests, setGuests] = useState<GuestCounts>({
    infant: 0,
    child: 0,
    adult: 0,
  });

  const updateGuests = (type: keyof GuestCounts, value: number) => {
    const newGuests = { ...guests, [type]: value };
    setGuests(newGuests);
    onGuestChange?.(newGuests);
  };

  const GuestDropdown = ({
    label,
    value,
    type,
  }: {
    label: string;
    value: number;
    type: keyof GuestCounts;
  }) => (
    <div className="flex-1">
      <label className="block text-sm text-gray-500 mb-2">{label}</label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between text-gray-600 border-gray-300 bg-white hover:bg-gray-50"
          >
            {value}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {[...Array(11)].map((_, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => updateGuests(type, i)}
              className="cursor-pointer"
            >
              {i}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="mb-6 border p-4 rounded-2xl relative">
      <h3 className="text-gray-700 font-medium mb-3 px-2 absolute -top-3.5 bg-white">
        Guests
      </h3>
      <div className="grid grid-cols-3 gap-3">
        <GuestDropdown label="Infant" value={guests.infant} type="infant" />
        <GuestDropdown label="Child" value={guests.child} type="child" />
        <GuestDropdown label="Adult" value={guests.adult} type="adult" />
      </div>
    </div>
  );
}

export default GuestSelector;
export type { GuestCounts };
