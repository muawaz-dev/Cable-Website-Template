// app/layout.tsx — Root Layout
// Wraps all pages with Navbar, Footer, and global metadata

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Harden Communications | Structured Cabling, Security & VoIP Denver CO",
    template: "%s | Harden Communications",
  },
  description:
    "Harden Communications delivers professional structured cabling, CCTV security camera installation, and Avaya IP Office VoIP phone systems for businesses in Denver CO and the Front Range.",
  keywords: [
    "structured cabling Denver",
    "CCTV security cameras Denver",
    "Avaya IP Office Denver",
    "VoIP phone systems Denver",
    "cable installation Denver CO",
    "network cabling Front Range",
    "Hikvision security cameras",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hardencommunications.com",
    siteName: "Harden Communications",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        {/* Site-wide Navigation */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Site-wide Footer */}
        <Footer />
      </body>
    </html>
  );
}
// END Root Layout