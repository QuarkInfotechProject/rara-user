import React from "react";
import Error404Img from "@/assets/images/404.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Compass, Home } from "lucide-react";

async function NotFound() {
  return (
    <main className="min-h-screen ">
      <section className="flex flex-col justify-center items-center px-4 py-20 gap-8">
        {/* 404 Image */}
        <div className="relative w-11/12 max-w-md">
          <Image
            className="w-full"
            src={Error404Img}
            alt="404 Lost Traveler"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 justify-center items-center max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Compass className="w-8 h-8 text-green-600" />
            <h1 className="font-bebas-neue text-5xl md:text-6xl text-slate-900">
              Page Not Found
            </h1>
            <MapPin className="w-8 h-8 text-green-600" />
          </div>

          <p className="text-lg text-slate-600 max-w-md">
            Looks like you've wandered off the trail! This destination doesn't
            exist in our adventure map. But don't worry—there are plenty of
            amazing treks waiting for you.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              className="rounded-full px-8 py-6 text-base bg-green-600 hover:bg-green-700"
              asChild
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-green-600 text-green-600 hover:bg-green-50"
              asChild
            >
              <Link href="/treks" className="flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Explore Treks
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-slate-200 w-full">
            <p className="text-sm text-slate-500 mb-4">Quick Navigation</p>
            <div className="flex flex-wrap justify-center gap-3">              
              <Link
                href="/blog"
                className="px-4 py-2 text-sm bg-white border border-slate-200 rounded-full hover:border-green-600 hover:text-green-600 transition"
              >
                Travel Guide
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm bg-white border border-slate-200 rounded-full hover:border-green-600 hover:text-green-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
