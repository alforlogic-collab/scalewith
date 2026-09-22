import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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

const siteUrl = "https://rajaaisystems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raja AI Systems — Intelligent AI Systems & Business Automation",
    template: "%s — Raja AI Systems",
  },
  description:
    "Raja AI Systems designs and builds intelligent AI infrastructure for modern businesses — voice agents, chatbots, workflow automation, CRM and custom AI systems.",
  applicationName: "Raja AI Systems",
  keywords: [
    "AI systems",
    "AI voice agents",
    "business automation",
    "CRM intelligence",
    "lead generation",
    "custom AI infrastructure",
  ],
  authors: [{ name: "Raja AI Systems" }],
  creator: "Raja AI Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Raja AI Systems",
    title: "Raja AI Systems — Intelligent AI Systems & Business Automation",
    description:
      "AI infrastructure that turns complex business operations into intelligent, automated systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja AI Systems — Intelligent AI Systems & Business Automation",
    description:
      "AI infrastructure that turns complex business operations into intelligent, automated systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raja AI Systems",
    url: siteUrl,
    description:
      "Designs and builds intelligent AI infrastructure for modern businesses.",
    slogan: "Intelligent systems for modern business.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-[#f4f4f5]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
