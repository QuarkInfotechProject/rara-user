import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = ({ count = 4 }) => {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full animate-pulse">
        <Skeleton className="h-8 w-64 bg-gray-300 mb-6" />
        <div className="grid grid-cols-4 gap-6 w-full">
          {Array.from({ length: count }, (_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-auto w-full flex flex-col gap-4 bg-gray-100">
                <Skeleton className="h-60 w-full bg-gray-300" />
                <div className="p-2 flex flex-col gap-4 w-full">
                  <Skeleton className="h-6 w-3/4 bg-gray-300" />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1">
                        <Skeleton className="h-4 w-4 bg-gray-300" />
                        <Skeleton className="h-4 w-24 bg-gray-300" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Skeleton className="h-4 w-4 bg-gray-300" />
                        <Skeleton className="h-4 w-24 bg-gray-300" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Skeleton className="h-4 w-4 bg-gray-300" />
                        <Skeleton className="h-4 w-24 bg-gray-300" />
                      </div>
                    </div>
                    <Skeleton className="h-8 w-16 bg-gray-300 mr-6" />
                  </div>
                </div>
              </Skeleton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
