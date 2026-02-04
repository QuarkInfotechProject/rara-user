import { RootInterface } from "@/components/ProductDetail/type";
import { stripHtmlAndTruncate } from "@/lib/utils";

interface ProductSchemaProps {
    productData: RootInterface["data"];
}

const ProductSchema = ({ productData }: ProductSchemaProps) => {
    if (!productData) return null;

    const siteOrigin = process.env.SITE_ORIGIN || "https://www.raratreks.com";
    const url = `${siteOrigin}/trek/${productData.slug}`;

    // Prepare images
    const images = [
        productData.files?.featuredImage?.url,
        ...(productData.files?.featuredImages?.map((img) => img.url) || []),
        ...(productData.files?.galleryImages?.map((img) => img.url) || []),
    ].filter(Boolean) as string[];

    // Prepare offers (prices)
    const offers = productData.prices?.map((price) => ({
        "@type": "Offer",
        priceCurrency: "USD",
        price: price.discounted_price_usd || price.original_price_usd,
        availability: "https://schema.org/InStock",
        url: url,
        description: `Price for ${price.number_of_people} people`,
    }));

    // Prepare itinerary
    const itinerary = productData.itinerary?.map((item, index) => ({
        "@type": "Event",
        name: `Day ${item.order || index + 1}: ${item.time_window || "Day Activity"}`,
        description: item.activity,
        startDate: new Date().toISOString(), // Generic future date or leave generic
        endDate: new Date().toISOString(),
        location: {
            "@type": "Place",
            name: item.location || productData.location || "Nepal",
            address: {
                "@type": "PostalAddress",
                addressCountry: "NP",
                addressRegion: item.location,
            },
        },
    }));

    const schema = {
        "@context": "https://schema.org",
        "@type": ["Product", "Tour"], // Dual type for broad compatibility
        name: productData.name,
        description: stripHtmlAndTruncate(
            productData.short_description || productData.description || "",
            300
        ),
        image: images,
        sku: productData.slug,
        mpn: productData.id?.toString(),
        brand: {
            "@type": "Brand",
            name: "RARA Treks",
        },
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: Math.min(
                ...(productData.prices?.map((p) =>
                    Number(p.discounted_price_usd || p.original_price_usd)
                ) || [0])
            ),
            offerCount: productData.prices?.length || 0,
            offers: offers,
        },
        itinerary: {
            "@type": "ItemList",
            itemListElement: itinerary?.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: item,
            })),
        },
        aggregateRating: productData.total_rating
            ? {
                "@type": "AggregateRating",
                ratingValue: productData.average_rating || 5,
                reviewCount: productData.total_rating,
                bestRating: 5,
                worstRating: 1,
            }
            : undefined,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ProductSchema;
