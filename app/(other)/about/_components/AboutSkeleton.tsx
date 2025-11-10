
import { Skeleton } from "@/components/ui/skeleton";

export const WhoWeAreSkeleton = () => (
  <div id="who_we_are" className="mb-20 scroll-mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="hidden md:block">
        <Skeleton className="w-full h-96 rounded-xl" />
      </div>
    </div>
  </div>
);

export const WhatWeDoSkeleton = () => (
  <div
    id="what_we_do"
    className="mb-20 py-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 scroll-mt-20"
  >
    <div className="space-y-4">
      <Skeleton className="h-8 w-40" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <div className="space-y-2 mt-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  </div>
);

export const MissionValuesSkeleton = () => (
  <div id="mission" className="mb-20 scroll-mt-20">
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <div className="space-y-2 mt-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-8 w-40 mt-8" />
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  </div>
);

export const TeamSkeleton = () => (
  <div
    id="our-team"
    className="mt-20 pt-20 border-t border-slate-200 scroll-mt-20"
  >
    <div className="space-y-8">
      <Skeleton className="h-8 w-32" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="w-full h-64 rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const AdditionalSectionsSkeleton = () => (
  <div className="mb-20 flex flex-col gap-10">
    <div className="container mx-auto px-4 space-y-8">
      <Skeleton className="h-96 w-full rounded-xl" />
      <Skeleton className="h-96 w-full rounded-xl" />
    </div>
  </div>
);

export const AboutPageSkeleton = () => (
  <div className="w-full bg-white">
    <div className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <WhoWeAreSkeleton />
        <WhatWeDoSkeleton />
        <MissionValuesSkeleton />
        <TeamSkeleton />
      </div>
    </div>
    <AdditionalSectionsSkeleton />
  </div>
);
