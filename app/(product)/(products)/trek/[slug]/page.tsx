import { Metadata } from "next";
import TrekDetailClient from "./TrekDetailClient";
import { stripHtmlAndTruncate } from "@/lib/utils";
import ProductSchema from "@/components/ProductSchema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fetch product data for metadata
async function getProductData(slug: string) {
  try {
    const baseURL = process.env.BASE_URL;
    if (!baseURL) return null;

    const response = await fetch(
      `${baseURL}/product/detail/${encodeURIComponent(slug)}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching product data for metadata:", error);
    return null;
  }
}

// Generate metadata for social sharing (Facebook, WhatsApp, Twitter)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const productData = await getProductData(slug);

  const siteOrigin = process.env.SITE_ORIGIN;
  const siteName = "RARA Treks, Tours and Travel";

  // Default metadata if product not found
  if (!productData) {
    return {
      title: "Trek Details - RARA Treks",
      description: "Explore amazing trekking adventures in Nepal with RARA Treks.",
      alternates: {
        canonical: `${siteOrigin}/trek/${slug}`,
      },
    };
  }

  const title = productData.meta?.metaTitle || productData.name;

  const description =
    productData.meta?.metaDescription ||
    stripHtmlAndTruncate(
      productData.short_description || productData.description,
      160
    );

  const url = siteOrigin ? `${siteOrigin}/trek/${slug}` : undefined;

  // Get the featured image URL
  const featuredImage =
    productData.files?.featuredImage?.url ||
    productData.files?.featuredImages?.[0]?.url;

  return {
    title,
    description,
    keywords:
      productData.meta?.keywords && productData.meta.keywords.length > 0
        ? productData.meta.keywords
        : [productData.name, productData.location].filter(Boolean),
    authors: [{ name: siteName }],
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName,
      locale: "en_US",
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: productData.name || "Trek Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@raratravels",
      images: [featuredImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Server component that renders the client component
export default async function TrekDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const productData = await getProductData(slug);

  return (
    <>
      <ProductSchema productData={productData} />
      <TrekDetailClient slug={slug} productData={productData} />
    </>
  );
}
