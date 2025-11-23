"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual WhatsApp number (format: country code + number, e.g., 977XXXXXXXXXX)
  const whatsappNumber = "9779851177054";
  const whatsappMessage =
    "Hello! I would like to know more about RARA Treks and Tours.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="relative z-50">
      {/* Pulsing Ring Effect */}
      <div className="absolute inset-0 flex items-center justify-center animate-ping-slow">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 opacity-75"></div>
      </div>

      {/* WhatsApp Button */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/50 transform transition-all duration-300 ease-in-out hover:scale-110 animate-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="sm:w-6 sm:h-6" />
      </Link>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
