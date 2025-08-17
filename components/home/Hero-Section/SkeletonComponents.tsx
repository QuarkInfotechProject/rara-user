import React from "react";

export const TripCardSkeleton = () => (
  <div className="flex flex-col items-center justify-center p-0 gap-2 overflow-hidden">
    <div className="relative w-[231px] h-[332px] rounded-2xl overflow-hidden bg-gray-300 animate-pulse">
      <div className="absolute bottom-0 py-1 bg-gray-400 left-0 right-0 flex flex-row items-center justify-center py-[1px] px-0">
        <div className="w-[180px] h-4 bg-gray-500 rounded animate-pulse"></div>
      </div>
    </div>
    <div className="flex flex-col items-start justify-start text-lg">
      <div className="w-[231px] h-6 bg-gray-300 rounded animate-pulse"></div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <section className="relative w-full rounded-[20px] lg:min-h-screen justify-center overflow-hidden">
    <div className="w-full relative flex flex-col items-center justify-start py-0 box-border text-left text-[64px] lg:min-h-screen font-sen">
      <div className="self-stretch rounded-[20px] h-[541px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[90px] px-2 md:px-5 pb-[68px] box-border relative gap-4 bg-gray-300 animate-pulse">
        <div className="w-[400px] h-16 bg-gray-400 rounded animate-pulse mb-2 lg:mb-6"></div>
        <div className="w-32 h-10 bg-gray-400 rounded-[22px] animate-pulse"></div>

        {/* Social media skeleton */}
        <div className="w-[24.4px] absolute top-[calc(50%_-_36px)] left-[40px] hidden lg:flex flex-col items-center justify-center gap-[18px]">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-6 h-6 bg-gray-400 rounded animate-pulse"
            ></div>
          ))}
        </div>

        {/* Rating skeleton */}
        <div className="w-[24.4px] absolute top-[calc(50%_-_36px)] right-[40px] hidden lg:flex flex-col items-center justify-center gap-2.5">
          <div className="w-[22px] h-[22px] bg-gray-400 rounded animate-pulse"></div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-400 rounded animate-pulse"
              ></div>
            ))}
          </div>
          <div className="w-6 h-4 bg-gray-400 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Trip cards skeleton */}
      <div className="flex flex-row items-start justify-start gap-10 mt-[-250px] relative">
        {[...Array(4)].map((_, index) => (
          <TripCardSkeleton key={index} />
        ))}
      </div>
    </div>
  </section>
);
