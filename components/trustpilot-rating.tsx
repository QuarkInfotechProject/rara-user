import React from "react";
import Image from "next/image";
import trustpilot from "@/assets/trustpilot.svg";
import Link from "next/link";

interface Props {
  className?: string;
}

function TrustPilotRating({ className }: Props) {
  return (
    <Link
      href="https://www.trustpilot.com/review/raratreks.com"
      rel="noreferrer"
      target="_blank"
      className={className}
    >
      <div className="grid grid-cols-[auto_auto] rounded-3xl gap-2 w-fit items-center">
        <div>
          <Image src={trustpilot} alt="Tripadvisor logo" className="size-12" />
        </div>
        {/* <div>
          <h4 className="font-semibold text-sm">Tripadvisor</h4>
          <div className="flex gap-1 *:block *:w-3 *:h-3 mt-0.5 *:rounded-full *:bg-green-400 *:aspect-square">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h6 className="text-sm">0 reviews</h6>
        </div> */}
        {/* <div>
          <h6 className="font-bebas-neue text-3xl">4.9</h6>
        </div> */}
      </div>
    </Link>
  );
}

export default TrustPilotRating;
