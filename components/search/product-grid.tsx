import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/types/product.types";
import { cn } from "@/lib/utils";
import ProductCard4 from "../product/product-card-4";
import { Button } from "@/components/ui/button";
import InquirePopup from "@/app/(product)/_components/booking/inquire-popup";
import BookingPopup from "@/app/(product)/_components/booking/booking-popup";
import TrekCard from "../home/TrekCard/TrekCard";

interface Props {
  products: Product[] | undefined;
  className?: string;
  loading?: boolean;
}

function ProductGrid({ products, className, loading }: Props) {
  return (
    <div>
      <ScrollArea className={cn(products?.length || loading ? "h-full md:h-full" : "h-full md:h-full", className)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <ProductCard4 key={index} loading />)
            : products?.map((product) => (
               <TrekCard />
              ))}
          {products?.length === 0 && (
            <div className="w-full h-full flex justify-center items-center py-5 sm:col-span-2 md:col-span-1 lg:col-span-2 2xl:col-span-3">
              No Results Found
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default ProductGrid;

function ProductCardInquireActionButton({ product }: { product: Product }) {
  return (
    <InquirePopup
      product={{
        id: product.id,
        type: product.type,
        name: product.name,
        location: product.location,
        averageRating: product.average_rating,
        featuredImage: product.featuredImage,
        relatedProducts: [],
        prices: product.prices,
      }}
    >
      <Button size="sm">Inquire</Button>
    </InquirePopup>
  );
}

function ProductCardReserveActionButton({ product }: { product: Product }) {
  return (
    <BookingPopup
      product={{
        id: product.id,
        type: product.type,
        name: product.name,
        location: product.location,
        averageRating: product.average_rating,
        featuredImage: product.featuredImage,
        relatedProducts: [],
        prices: product.prices,
      }}
    >
      <Button size="sm">Reserve</Button>
    </BookingPopup>
  );
}
