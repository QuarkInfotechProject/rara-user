"use client";

import { useState, useCallback } from "react";
import { DepartureItem, DepartureProps } from "../type";
import CustomTripSection from "./Departure/CustomTripSection";
import DepartureHeader from "./Departure/DepartureHeader";
import DepartureTable from "./Departure/DepartureTable";
import MonthTabs from "./Departure/MonthTabs";
import NoDataMessage from "./Departure/NoDataMessage";

const Departure = ({ data }: DepartureProps) => {
  // Early return if no data is provided
  if (!data) {
    return <NoDataMessage />;
  }

  const availableMonths: string[] = Object.keys(data).filter(
    (month: string) => data[month] && data[month].length > 0
  );

  const [activeTab, setActiveTab] = useState<string>(availableMonths[0] || "");

  const handleEnquire = useCallback((departure: DepartureItem): void => {
    alert(
      `Enquiry for: ${departure.dateRange}\nPrice: ${departure.price} per person`
    );
  }, []);

  const handleCreateCustomTrip = useCallback((): void => {
    alert("Redirecting to custom trip creation...");
  }, []);

  const handleTabChange = useCallback((month: string): void => {
    setActiveTab(month);
  }, []);

  const currentDepartures: DepartureItem[] = data[activeTab] || [];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-6 p-6 bg-[#1E2F22] text-white rounded-2xl">
        <DepartureHeader title="Departure Date" />

        <div className="flex flex-col gap-3">
          <p>Select Departure Dates</p>

          <div className="w-full flex flex-col gap-3">
            <MonthTabs
              availableMonths={availableMonths}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            <DepartureTable
              departures={currentDepartures}
              onEnquire={handleEnquire}
            />
          </div>
        </div>
      </div>

      <CustomTripSection onCreateCustomTrip={handleCreateCustomTrip} />
    </div>
  );
};

export default Departure;
