import { Skeleton } from "./ui/skeleton";

const BlogSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Skeleton className="bg-gray-300 h-6 w-80 mb-4" />
      <Skeleton className="bg-gray-300 h-12 w-100 mb-4" />
      <div className="flex items-center gap-3 w-full">
        <Skeleton className="bg-gray-300 h-6 w-32 mb-4" />
        <Skeleton className="bg-gray-300 h-4 w-4 mb-4" />
        <Skeleton className="bg-gray-300 h-6 w-32 mb-4" />
        <Skeleton className="bg-gray-300 h-4 w-4 mb-4" />
        <Skeleton className="bg-gray-300 h-6 w-32 mb-4" />
        <Skeleton className="bg-gray-300 h-6 w-32 mb-4" />
      </div>
      <Skeleton className="bg-gray-300 h-80 w-full mb-4" />
      <Skeleton className="bg-gray-300 h-26 w-80 mb-4" />
      <Skeleton className="bg-gray-300 h-20 w-80 mb-4" />
    </div>
  );
}
export default BlogSkeleton