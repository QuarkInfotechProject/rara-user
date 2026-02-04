import CostItem from "./CostItem";
import { CostDetailProps } from "../type";

const CostDetail = ({ data, productName }: CostDetailProps) => {
  if (!data || (!data.includes?.length && !data.excludes?.length)) {
    return (
      <section id="cost-detail" aria-labelledby="cost-detail-heading" className="w-full flex flex-col gap-6">
        <h2 id="cost-detail-heading" className="text-3xl font-bold">{productName ? `${productName} Cost Detail` : "Cost Detail"}</h2>
        <div className="w-full p-6 rounded-3xl bg-[#F9FFF7] flex items-center justify-center">
          <p className="text-gray-500 text-lg">No cost details available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="cost-detail" aria-labelledby="cost-detail-heading" className="w-full flex flex-col gap-6">
      <h2 id="cost-detail-heading" className="text-2xl md:text-3xl font-bold">{productName ? `${productName} Cost Detail` : "Cost Detail"}</h2>

      {/* Includes */}
      {data.includes && data.includes.length > 0 && (
        <article className="w-full p-6 rounded-3xl bg-[#F9FFF7] flex flex-col gap-4">
          <h3 className="font-bold text-lg md:text-xl text-[#3E641C]">What's Included</h3>
          <ul className="w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {data.includes.map((item, index) => (
              <li key={item.id || `include-${index}`}>
                <CostItem
                  item={item}
                  type="include"
                />
              </li>
            ))}
          </ul>
        </article>
      )}

      {/* Excludes */}
      {data.excludes && data.excludes.length > 0 && (
        <article className="w-full p-6 rounded-3xl bg-[#FFF7F7] flex flex-col gap-4">
          <h3 className="font-bold text-xl text-[#641C1C]">
            What's Not Included
          </h3>
          <ul className="w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {data.excludes.map((item, index) => (
              <li key={item.id || `exclude-${index}`}>
                <CostItem
                  item={item}
                  type="exclude"
                />
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
};

export default CostDetail;
