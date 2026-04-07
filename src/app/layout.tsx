import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { seo, profile, academicProfiles, publications } = portfolioData;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(seo.url),
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: profile.title,
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.title} — Medical Oncologist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: seo.url,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${seo.url}/#person`,
      name: profile.fullName,
      jobTitle: "Medical Oncologist",
      worksFor: {
        "@type": "Hospital",
        name: "Vietnam National Cancer Hospital (K Hospital)",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hanoi",
          addressCountry: "VN",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Hanoi Medical University",
      },
      url: seo.url,
      sameAs: academicProfiles.map((ap) => ap.url),
    },
    ...publications.map((pub) => ({
      "@type": "ScholarlyArticle",
      headline: pub.title,
      author: pub.authors.split(", ").map((a) => ({
        "@type": "Person",
        name: a,
      })),
      isPartOf: {
        "@type": "Periodical",
        name: pub.journal,
      },
      datePublished: String(pub.year),
      ...(pub.doi ? { identifier: `https://doi.org/${pub.doi}` } : {}),
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
