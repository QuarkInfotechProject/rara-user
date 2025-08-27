"use client";

import DepartureHeader from "./DepartureHeader";

const NoDataMessage = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6 bg-[#1E2F22] text-white rounded-2xl">
      <DepartureHeader title="Departure Date" />
      <p className="text-center py-8">No departure data available.</p>
    </div>
  );
};

export default NoDataMessage;
