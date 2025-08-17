'use client';

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/types/news.types";

const newsData: NewsItem[] = [
  {
    id: "1",
    image: "/assets/1.png",
    date: "2025/06/25",
    title:
      "These are the reason why Nepal is the best destination for your natural journey bucket list",
    slug: "nepal-natural-journey-destination",
  },
  {
    id: "2",
    image: "/assets/2.png",
    date: "2025/07/10",
    title: "Discovering Hidden Gems: 10 Unexplored Trails in the Himalayas",
    slug: "hidden-gems-himalayan-trails",
  },
  {
    id: "3",
    image: "/assets/3.png",
    date: "2025/07/18",
    title: "Sustainable Tourism: How to Travel Responsibly in Mountain Regions",
    slug: "sustainable-mountain-tourism",
  },
];

interface NewsProps {
  newsItems?: NewsItem[];
  onViewAll?: () => void;
  onNewsClick?: (newsItem: NewsItem) => void;
}

const News = ({ newsItems = newsData, onViewAll, onNewsClick }: NewsProps) => {
  const handleViewAll = () => {
    onViewAll?.();
  };

  const handleNewsClick = (newsItem: NewsItem) => {
    onNewsClick?.(newsItem);
  };

  // Take only first 3 items
  const displayedNews = newsItems.slice(0, 3);

  return (
    <div className="w-full container flex flex-col gap-4 pt-8">
      <div className="flex w-full items-end justify-between lg:mb-8">
        <div className="flex flex-col gap-1">
          <p className="text-xl lg:text-2xl font-satisfy">
            Here is our insight on the latest trend
          </p>
          <h1 className="text-3xl lg:text-4xl flex items-center gap-1 font-bold text-gray-900">
            Stories & <span className="text-[#71B344]">News</span>
          </h1>
        </div>
        {/* Custom navigation buttons */}
        <div className="hidden lg:flex items-center justify-center">
          <Button className="flex items-center gap-1" onClick={handleViewAll}>
            View All <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedNews.map((news, index) => (
          <div
            key={news.id}
            className={`${index === 0 || index === 2 ? "mt-8" : ""}`}
          >
            <NewsCard news={news} onReadMore={handleNewsClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;