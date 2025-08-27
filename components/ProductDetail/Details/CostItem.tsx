import Image from "next/image";
import { CostItemProps } from "../type";

const CostItem = ({ item, type }: CostItemProps) => {
  const textColor = "text-[#3E641C]";
  const iconSrc =
    type === "include" ? "/assets/checkmark.svg" : "/assets/cancel.svg";
  const iconAlt = type === "include" ? "checkmark" : "cancel";

  return (
    <span className={`flex items-center gap-2 ${textColor}`}>
      <Image
        src={iconSrc}
        width={100}
        height={100}
        alt={iconAlt}
        className="w-5 h-5"
      />
      {item.text}
    </span>
  );
};

export default CostItem;
