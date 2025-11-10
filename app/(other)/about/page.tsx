"use client";

import { useEffect, useState } from "react";
import HeroSection from "./_components/HeroSection";
import Team from "./_components/Team";
import News from "@/components/home/News";
import Why from "@/components/home/Why";
import {
  WhoWeAreSkeleton,
  WhatWeDoSkeleton,
  MissionValuesSkeleton,
  TeamSkeleton,
  AdditionalSectionsSkeleton,
} from "./_components/AboutSkeleton";

interface PageData {
  type: string;
  title: string;
  slug: string;
  header: string;
  content1: string;
  content2: string;
  content3: string;
  featuredImage: string;
  meta: {
    metaTitle: string;
    keywords: string[];
    metaDescription: string;
  };
}

const About = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/product/page/detail/about");

        if (!response.ok) {
          throw new Error("Failed to fetch page data");
        }

        const result = await response.json();

        if (result.code === 0 && result.data) {
          setPageData(result.data);
          // Update meta tags
          document.title = result.data.meta.metaTitle;
          const metaDescription = document.querySelector(
            'meta[name="description"]'
          );
          if (metaDescription) {
            metaDescription.setAttribute(
              "content",
              result.data.meta.metaDescription
            );
          }
        } else {
          throw new Error(result.message || "Failed to load page data");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  // Handle scroll to section
  useEffect(() => {
    if (!loading && pageData) {
      const hash = window.location.hash?.slice(1);

      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    }
  }, [loading, pageData]);

  if (error) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <p className="text-red-600 font-semibold text-lg">
            {error || "Failed to load page"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full bg-white">
        <HeroSection />
        <div className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <WhoWeAreSkeleton />
            <WhatWeDoSkeleton />
            <MissionValuesSkeleton />
            <TeamSkeleton />
          </div>
        </div>
        <AdditionalSectionsSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <HeroSection />

      {/* Main Content */}
      <div className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Who We Are Section */}
          <div id="who_we_are" className="mb-20 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="prose prose-lg max-w-none text-slate-700"
                  dangerouslySetInnerHTML={{ __html: pageData?.content1 || "" }}
                />
              </div>
              {pageData?.featuredImage && (
                <div className="hidden md:block">
                  <img
                    src={pageData.featuredImage}
                    alt="Rara Treks"
                    className="w-full h-auto rounded-xl shadow-xl object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* What We Do Section */}
          <div
            id="what_we_do"
            className="mb-20 py-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 scroll-mt-20"
          >
            <div
              className="prose prose-lg max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: pageData?.content2 || "" }}
            />
          </div>

          {/* Mission & Values Section */}
          <div id="mission" className="mb-20 scroll-mt-20">
            <div
              className="prose prose-lg max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: pageData?.content3 || "" }}
            />
          </div>

          {/* Team Section */}
          <div
            id="our-team"
            className="mt-20 pt-20 border-t border-slate-200 scroll-mt-20"
          >
            <Team />
          </div>
        </div>
      </div>

      {/* Why and News Sections */}
      <div className="mb-20 flex flex-col gap-10">
        <Why />
        <News />
      </div>
    </div>
  );
};

export default About;
