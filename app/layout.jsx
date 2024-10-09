import { Anybody, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseTracker from "./components/MouseTracker";

const inter = Anybody({ subsets: ["latin"], variable: "--font-inter" });

// Metadata configuration
export const metadata = {
  title: "Isaac Chimaroke Anyim | Software Developer",
  description: "Isaac Chimaroke Anyim | Software Developer",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://isaacanyim-iota.vercel.app"
  ),
  keywords:
    "Isaac Chimaroke Anyim, Frontend Developer, Software Developer React, Next.js, Web Development, Portfolio, Developer , node",
  author: "Isaac Chimaroke Anyim",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaacanyim-iota.vercel.app/",
    title: "Isaac Chimaroke Anyim Portfolio Website",
    description: "Isaac Chimaroke Anyim | Frontend Developer",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Isaac Chimaroke Anyim Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CreatorLZ",
    title: "Isaac Chimaroke Anyim | Portfolio",
    description: "Isaac Chimaroke Anyim | Frontend Developer",
    image: "/seo.png",
  },
};

// Export viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// Export themeColor separately
export const themeColor = "#ffffff";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph Metadata */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        {/* Twitter Metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="theme-color" content={themeColor} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <MouseTracker />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
