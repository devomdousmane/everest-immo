import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { properties, formatPrice } from "@/lib/properties";
import PropertyDetail from "./PropertyDetail";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};
  const price = formatPrice(property.price, property.status);
  return {
    title: property.title,
    description: `${property.type} ${property.status === "Vente" ? "à vendre" : "à louer"} — ${property.area} m², ${property.bedrooms} chambres. ${property.location}. ${price}.`,
    alternates: { canonical: `https://everest-immo.com/biens/${property.slug}` },
    openGraph: {
      title: `${property.title} | Everest Immo`,
      description: property.description,
      images: [{ url: property.image, width: 1200, height: 800, alt: property.title }],
      type: "website",
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `https://everest-immo.com/biens/${property.slug}`,
    image: property.images,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "XOF",
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.location,
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    floorSize: { "@type": "QuantitativeValue", value: property.area, unitCode: "MTK" },
    numberOfRooms: property.rooms,
    numberOfBedrooms: property.bedrooms,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PropertyDetail property={property} />
    </>
  );
}
