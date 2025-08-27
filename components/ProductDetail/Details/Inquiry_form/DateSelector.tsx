import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateSelectorProps {
  onDateChange?: (fromDate: Date | null, toDate: Date | null) => void;
}

function DateSelector({ onDateChange }: DateSelectorProps) {
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);

  const handleFromDateSelect = (date: Date | undefined) => {
    setFromDate(date);
    onDateChange?.(date || null, toDate || null);
  };

  const handleToDateSelect = (date: Date | undefined) => {
    setToDate(date);
    onDateChange?.(fromDate || null, date || null);
  };

  return (
    <div className="mb-6 border p-4 rounded-2xl relative">
      <h3 className="text-gray-700 font-medium mb-3 px-2 absolute -top-3.5 bg-white">
        Date
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-500 mb-2">From</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal text-gray-600 border-gray-300 bg-white hover:bg-gray-50"
              >
                <span>
                  {fromDate ? fromDate.toLocaleDateString() : "Select Date"}
                </span>
                <Calendar className="ml-auto h-4 w-4 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={fromDate}
                onSelect={handleFromDateSelect}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  if (date < today) return true;
                  if (toDate && date > toDate) return true;
                  return false;
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-2">To</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal text-gray-600 border-gray-300 bg-white hover:bg-gray-50"
              >
                <span>
                  {toDate ? toDate.toLocaleDateString() : "Select Date"}
                </span>
                <Calendar className="ml-auto h-4 w-4 text-gray-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={toDate}
                onSelect={handleToDateSelect}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  if (date < today) return true;
                  if (fromDate && date < fromDate) return true;
                  return false;
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default DateSelector;
