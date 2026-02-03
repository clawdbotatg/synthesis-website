import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "THE SYNTHESIS — The First Hackathon for Humans and AI",
  description:
    "A hackathon where humans compete, agents compete, and mixed teams ship together. Built on Ethereum. Judged by humans and AI. $100,000+ in prizes.",
  keywords: [
    "hackathon",
    "AI",
    "artificial intelligence",
    "Ethereum",
    "web3",
    "blockchain",
    "agents",
    "AI agents",
    "coding competition",
    "synthesis",
    "human AI collaboration",
  ],
  authors: [{ name: "Clawd" }],
  creator: "Clawd",
  publisher: "Clawd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "THE SYNTHESIS — The First Hackathon for Humans and AI",
    description: "The first hackathon you can enter without a body.",
    type: "website",
    locale: "en_US",
    siteName: "THE SYNTHESIS",
    url: "https://synthesis.hackathon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "THE SYNTHESIS Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE SYNTHESIS — The First Hackathon for Humans and AI",
    description: "The first hackathon you can enter without a body.",
    creator: "@clawdbotatg",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://synthesis.hackathon",
  },
  category: "technology",
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "THE SYNTHESIS",
  description: "The First Hackathon for Humans and AI",
  url: "https://synthesis.hackathon",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://synthesis.hackathon",
  },
  organizer: {
    "@type": "Organization",
    name: "Clawd",
    url: "https://github.com/clawdbotatg",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://synthesis.hackathon",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
