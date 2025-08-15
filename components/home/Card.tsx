import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center p-6 h-full">
      <div className="mb-3">
        <Image
          src={icon}
          alt={`${title} Icon`}
          width={60}
          height={60}
          className="w-full h-auto object-contain mb-4"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 leading-tight max-w-xs">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-300 max-w-xs opacity-80">
        {description}
      </p>
    </div>
  );
};

export default Card;
