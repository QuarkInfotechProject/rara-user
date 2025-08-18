"use client";
import React, { useEffect, useMemo } from "react";
import axios from "axios";
import useProductSearch from "@/lib/hooks/use-product-search";
import ProductGrid from "@/components/search/product-grid";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product.types";
import useProductSearchTags from "@/lib/hooks/use-product-search-tags";
import { useMapView } from "@/lib/context/google-map-provider";
import { PaginatedResponse } from "@/types/index.types";
import SearchPagination from "@/components/search/search-pagination";
import { searchContent } from "@/lib/data/search";

function SearchPage() {
  const { filter } = useProductSearch();
  const { bounds, reset } = useMapView();
  const { activeTag } = useProductSearchTags();
  const typeData = searchContent?.[filter.type as keyof typeof searchContent];

  const { data: products, isPending } = useQuery<PaginatedResponse<Product>>({
    queryKey: ["chn-search", filter, bounds],
    queryFn: async () => {
      const { data } = await axios.post<PaginatedResponse<Product>>(
        "/api/product/list",
        {
          filters: {
            ...filter,
            // Remove type filtering to get all products
            type: undefined,
            bounds: bounds,
          },
        },
        {
          params: {
            page: 1, // Always fetch from page 1
            per_page: 1000, // Fetch a large number to get all products
          },
        }
      );
      return data;
    },
    throwOnError: false,
  });

  // Group products by type
  const productsByType = useMemo(() => {
    if (!products?.data.data) return [];

    // Group products by type
    const grouped = products.data.data.reduce((acc, product) => {
      const type = product.type;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(product);
      return acc;
    }, {} as Record<string, Product[]>);

    // Convert to array with dynamic configuration
    return Object.entries(grouped)
      .map(([type, productList]) => ({
        type,
        products: productList,
        config: {
          title: type.charAt(0).toUpperCase() + type.slice(1) + "s",
          description: `Explore our ${type} options`,
        },
      }))
      .sort((a, b) => a.type.localeCompare(b.type)); // Sort alphabetically
  }, [products?.data.data]);

  useEffect(() => {
    reset();
  }, [filter.type]);

  return (
    <main>
      <div className="sticky top-20">
        <div className="w-full">
          <div className="w-full">
            <div className="px-6 md:p-8 !pb-0">
              <h4 className="font-bebas-neue text-3xl md:text-4xl">
                {activeTag?.name ?? typeData?.name ?? "All Products"}
              </h4>
              <p>
                {activeTag?.description ??
                  typeData?.description ??
                  "Discover all our offerings organized by category"}
              </p>
            </div>

            {/* Display all products together */}
            <ProductGrid
              className="p-6 md:p-8 !pb-0"
              products={products?.data.data || []}
            />

            {/* Show loading or no products message */}
            {isPending && (
              <div className="p-6 md:p-8 flex justify-center">
                <div className="text-lg">Loading products...</div>
              </div>
            )}

            {!isPending &&
              (!products?.data.data || products.data.data.length === 0) && (
                <div className="p-6 md:p-8 text-center text-gray-500">
                  <p className="text-xl">No products found</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
