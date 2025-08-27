import { Coins } from "lucide-react";

interface PriceHeaderProps {
  originalPrice: string;
  currentPrice: string;
  discount: string;
}

function PriceHeader({
  originalPrice,
  currentPrice,
  discount,
}: PriceHeaderProps) {
  return (
    <div className=" rounded-t-2xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Coins className="w-5 h-5 text-green-700" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm text-green-700">Starting from</span>
            <span className="text-sm text-green-600 line-through font-medium">
              {originalPrice}
            </span>
          </div>
          <span className="text-2xl font-bold text-green-800">
            {currentPrice}
          </span>
        </div>
      </div>
      <div className="bg-[#E07A5F] text-white text-sm px-3 py-1 rounded-full font-medium">
        {discount}
      </div>
    </div>
  );
}

export default PriceHeader;
