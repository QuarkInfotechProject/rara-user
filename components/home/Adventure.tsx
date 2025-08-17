"use client";
import React from "react";
import { trekData } from "@/data/AdventureData";
import AdventureGrid from "./AdventureGrid";

const MainTourComponent = () => {
  return (
    <div className="w-full md:container px-4 py-8">
      <AdventureGrid title="Adventures" data={trekData} />
    </div>
  );
};

export default MainTourComponent;
