"use client";
import React from "react";
import CHNLogo from "../chn-logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useHeader from "@/lib/hooks/use-header";
import { Search } from "lucide-react";
import MobileMenu from "./mobile-menu";

function MobileHeader() {
  const { isTransparent } = useHeader();

  return (
    <header className="relative z-10 md:hidden">
      <div
        className={cn(
          "px-6 gap-3 items-center py-4",
          !isTransparent && "border-b bg-white",
          isTransparent && "[&_svg]:text-white"
        )}
      >
        <div className=" w-full px-4 flex flex-col justify-between shadow-[0_0_15px_0_rgba(0,0,0,0.1)] rounded-full mt-8 mb-3 items-center py-3">
          <div className="flex w-full justify-between items-center">
            <div>
              <Link href="/">
                <CHNLogo
                  variant={isTransparent ? "white" : "default"}
                  className="w-full h-14 object-contain"
                />
              </Link>
            </div>
            {/* <QuickSearchPopup> */}
            <div className="px-4">
              <Search size={20} stroke="gray" />
            </div>
            {/* </QuickSearchPopup> */}
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

export default MobileHeader;
