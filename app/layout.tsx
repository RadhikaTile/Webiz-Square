import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Webiz Square | Premier Web & Custom Software Development Company",
  description:
    "Webiz Square is an industry-leading software development agency in Nashik, India. We build high-performance Next.js websites, custom ERPs, mobile applications, and high-ROI digital marketing engines.",
  keywords: [
    "Web Development Company Nashik",
    "Custom ERP Software Development India",
    "Next.js Development Agency",
    "Mobile App Development",
    "UI/UX Design Studio",
    "SEO Agency Nashik",
    "Webiz Square One ERP",
    "Bachat Gat Online"
  ],
  authors: [{ name: "Webiz Square Software Solutions LLP" }],
  creator: "Webiz Square Software Solutions LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Webiz Square | High-Performance Web & Enterprise ERP Solutions",
    description:
      "Transform your digital presence with ultra-fast Next.js web applications, custom enterprise ERP software, and scalable digital solutions.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/hero-digital-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Webiz Square Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webiz Square | Enterprise Software & Web Development",
    description: "Innovating Code. Engineering Global Digital Growth.",
    images: ["/images/hero-digital-showcase.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/logo/webiz-white-logo.png`,
    "@id": SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nashik",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422009",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.9975,
      longitude: 73.7898,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.github,
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#07070b] text-slate-100 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
