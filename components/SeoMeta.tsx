import Head from "next/head";

interface SEOMetaProps {
  title: string;
  description: string;
  url: string;
  siteName?: string;
  type?: string;
}

const SEOMeta = ({
  title,
  description,
  url,
  siteName = "RARA Treks, Tours and Travel",
  type = "website",
}: SEOMetaProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="trek, tour, travel, nepal, everest, adventure"
      />

      {/* Open Graph Meta Tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Additional Open Graph for better sharing */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@raratravels" />

      {/* WhatsApp specific (uses Open Graph) */}
      <meta property="og:image:type" content="image/jpeg" />

      {/* Canonical URL for SEO */}
      <link rel="canonical" href={url} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            name: title,
            description: description,
            url: url,
            provider: {
              "@type": "Organization",
              name: siteName,
              url: typeof window !== "undefined" ? window.location.origin : url,
            },
          }),
        }}
      />
    </Head>
  );
};

export default SEOMeta;
