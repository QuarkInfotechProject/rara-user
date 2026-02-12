"use client";

import { Skeleton } from "@/components/ui/skeleton";

const ReviewSkeleton = () => {
    return (
        <div className="p-6 rounded-2xl bg-[#1E2F22]/50 flex flex-col gap-3 min-w-[280px] md:min-w-0">
            <div className="flex items-center gap-2">
                <Skeleton className="w-12 h-12 rounded-full " />
                <div className="flex flex-col gap-1 w-full flex-1">
                    <Skeleton className="h-4 w-24 " />
                    <Skeleton className="h-3 w-32 " />
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="h-4 w-4 " />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <Skeleton className="h-3 w-full " />
                <Skeleton className="h-3 w-full " />
                <Skeleton className="h-3 w-3/4 " />
            </div>
        </div>
    );
};

export default ReviewSkeleton;
