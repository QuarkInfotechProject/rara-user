import React from "react";
import { StarProps } from "@/types/google.types";

export const Star: React.FC<StarProps> = ({
  filled,
  halfFilled = false,
  size = 20,
}) => (
  <div className="relative" style={{ width: size, height: size }}>
    {/* Background star (empty) */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="text-gray-300 absolute top-0 left-0"
    >
      <path
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>

    {/* Filled star */}
    {(filled || halfFilled) && (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="text-yellow-400 absolute top-0 left-0"
        style={{
          clipPath: halfFilled ? "inset(0 50% 0 0)" : "none",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <path
          fill="currentColor"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    )}
  </div>
);

export default Star;
