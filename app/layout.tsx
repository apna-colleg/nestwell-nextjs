import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

// Body font - highly readable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font - modern, friendly geometric
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Mono font for code
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nestwell | Find Your Perfect Home",
    template: "%s | Nestwell",
  },
  description:
    "Making your first home journey simple and stress-free. Browse properties, save favorites, and connect with trusted agents.",
  keywords: [
    "real estate",
    "homes for sale",
    "first-time homebuyer",
    "property listings",
    "houses",
    "apartments",
  ],
  authors: [{ name: "Nestwell" }],
  creator: "Nestwell",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nestwell",
    title: "Nestwell | Find Your Perfect Home",
    description:
      "Making your first home journey simple and stress-free. Browse properties, save favorites, and connect with trusted agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestwell | Find Your Perfect Home",
    description:
      "Making your first home journey simple and stress-free. Browse properties, save favorites, and connect with trusted agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#2D2824" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nestwell.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Nestwell",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Nestwell is a trusted real estate platform helping you find your perfect home. Browse thousands of properties, connect with experienced real estate agents, and make your property dreams come true.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
    sameAs: [
      // Add your social media profiles here when available
      // "https://www.facebook.com/nestwell",
      // "https://www.twitter.com/nestwell",
      // "https://www.linkedin.com/company/nestwell",
      // "https://www.instagram.com/nestwell",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nestwell",
    url: baseUrl,
    description:
      "Find your perfect home with Nestwell. Browse real estate listings, connect with agents, and discover properties for sale and rent.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://cdn.sanity.io" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </head>
        <body
          className={`${inter.variable} ${plusJakarta.variable} ${geistMono.variable} font-body antialiased`}
        >
          {children}
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
