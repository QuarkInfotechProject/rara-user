import React from "react";
import HeroSection from "@/components/home/hero-section";
import Journey from "@/components/home/Journey";
import MainTourComponent from "@/components/home/TravelContent";
import Experience from "@/components/home/Experience";
import Services from "@/components/home/Services";
import Why from "@/components/home/Why";
import Adventure from "@/components/home/Adventure";
import Testimonial from "@/components/home/Testimonial/Testimonial";
import News from "@/components/home/News";

async function Home() {
  return (
    <main className="flex flex-col gap-10 pb-10">
      <div className="w-full px-3 md:px-10">
        <HeroSection />
      </div>
      <Journey />
      <MainTourComponent />
      <Experience />
      <Services />
      <Why />
      <Adventure />
      <Testimonial />
      <News />
    </main>
  );
}

export default Home;
export const dynamic = "force-static";
