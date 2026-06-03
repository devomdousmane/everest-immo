import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://everest-immo.com"),
  title: {
    default: "Everest Immo — Agence immobilière d'exception à Dakar",
    template: "%s | Everest Immo",
  },
  description:
    "Everest Immo, agence immobilière haut de gamme à Dakar. Vente et location d'appartements, duplex et villas de prestige. Estimation gratuite, accompagnement personnalisé.",
  keywords: [
    "agence immobilière Dakar", "immobilier luxe Dakar", "appartement vente Dakar",
    "villa Dakar", "Corniche Ouest", "Fann Mermoz", "Mermoz Dakar",
    "immobilier haut de gamme Sénégal", "Everest Immo", "achat appartement Dakar",
  ],
  authors: [{ name: "Everest Immo" }],
  creator: "Everest Immo",
  publisher: "Everest Immo",
  alternates: { canonical: "https://everest-immo.com" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://everest-immo.com",
    siteName: "Everest Immo",
    title: "Everest Immo — L'immobilier d'exception à Dakar",
    description: "Agence immobilière haut de gamme à Dakar. Appartements, duplex et villas de prestige en vente et location.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Everest Immo — Agence immobilière Dakar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Immo — Immobilier d'exception à Dakar",
    description: "Vente et location de biens de prestige à Dakar, Sénégal.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: {
    google: "REMPLACER_PAR_VOTRE_CODE_GOOGLE_SEARCH_CONSOLE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Everest Immo",
  url: "https://everest-immo.com",
  logo: "https://everest-immo.com/logo-evrest-v2.PNG",
  image: "https://everest-immo.com/og-image.jpg",
  description: "Agence immobilière haut de gamme à Dakar, spécialisée dans la vente et la location de biens de prestige.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malick Sy Médina",
    addressLocality: "Dakar",
    addressCountry: "SN",
  },
  telephone: "+221776431490",
  email: "contact@everest-immo.com",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
