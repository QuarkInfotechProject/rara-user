import React from "react";
import { InquiryData } from "@/components/ProductDetail/type";

interface PricingTier {
  discounted_price_usd: number;
  number_of_people: number;
  original_price_usd: number;
}

interface InquiryProps {
  data: InquiryData & {
    prices: PricingTier[];
  };
}

function MobilePrice({ data }: InquiryProps) {
  const [guests, setGuests] = React.useState(1);

  const getCurrentPricing = () => {
    if (!data.prices || data.prices.length === 0) {
      return { originalPrice: 0, currentPrice: 0 };
    }

    const matchingPrice =
      data.prices.find((price) => price.number_of_people === guests) ||
      data.prices[0];

    return {
      originalPrice: matchingPrice.original_price_usd,
      currentPrice:
        matchingPrice.discounted_price_usd > 0
          ? matchingPrice.discounted_price_usd
          : matchingPrice.original_price_usd,
    };
  };

  const { originalPrice, currentPrice } = getCurrentPricing();
  const totalPrice = currentPrice * guests;

  const discountPercentage =
    originalPrice > currentPrice
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        {/* Select Number of People */}
        <div className="mb-6">
          <label className="text-gray-600 text-sm font-medium block mb-2">
            Number of People
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {data.prices.map((tier) => (
              <option key={tier.number_of_people} value={tier.number_of_people}>
                {tier.number_of_people}{" "}
                {tier.number_of_people === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/40 rounded-xl p-5">
          <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Price per person
          </p>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-bold text-gray-900">
              ${currentPrice}
            </span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {discountPercentage > 0 && (
            <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
              Save {discountPercentage}%
            </div>
          )}
        </div>

        {/* Total Price */}
        <div className="mt-5 pt-5 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">
              Total for {guests} {guests === 1 ? "person" : "people"}:
            </span>
            <span className="text-3xl font-bold text-gray-900">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilePrice;
