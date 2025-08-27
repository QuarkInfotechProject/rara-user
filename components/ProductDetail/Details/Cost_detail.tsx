import { CostDetailProps } from "../type";
import CostItem from "./CostItem";

const CostDetail = ({ data }: CostDetailProps) => {
  if (!data) {
    return (
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Cost Detail</h1>
        <div className="w-full p-6 rounded-3xl bg-[#F9FFF7] flex items-center justify-center">
          <p className="text-gray-500 text-lg">No data found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Cost Detail</h1>

      {/* Includes */}
      <div className="w-full p-6 rounded-3xl bg-[#F9FFF7] flex flex-col gap-4">
        <h2 className="font-bold text-lg">Includes</h2>
        <div className="w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.includes.map((item) => (
            <CostItem key={item.id} item={item} type="include" />
          ))}
        </div>
      </div>

      {/* Excludes */}
      <div className="w-full p-6 rounded-3xl bg-[#F9FFF7] flex flex-col gap-4">
        <h2 className="font-bold text-lg">Excludes</h2>
        <div className="w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.excludes.map((item) => (
            <CostItem key={item.id} item={item} type="exclude" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostDetail;
