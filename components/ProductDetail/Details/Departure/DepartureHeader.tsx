"use client";

import { DepartureHeaderProps } from "./types";

const DepartureHeader = ({ title }: DepartureHeaderProps) => {
  return <h1 className="text-3xl font-bold text-[#71B344]">{title}</h1>;
};

export default DepartureHeader;
