import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { NewsItem } from "@/types/news.types";

interface NewsCardProps {
  news: NewsItem;
  onReadMore?: (newsItem: NewsItem) => void;
}

const NewsCard = ({ news, onReadMore }: NewsCardProps) => {
  const handleReadMore = () => {
    onReadMore?.(news);
  };

  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <div className="w-full flex">
        <Image
          src={news.image}
          width={500}
          height={300}
          alt={news.title}
          className="w-full h-[420px] object-cover"
        />
      </div>
      <p className="text-gray-600">{news.date}</p>
      <h3 className="text-2xl font-bold leading-tight">{news.title}</h3>
      <Button
        variant="outline"
        className="bg-transparent p-0 border-none text-green-500 flex gap-2 items-center hover:text-green-600 transition-colors"
        onClick={handleReadMore}
      >
        Read More <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default NewsCard;
