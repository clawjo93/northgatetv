import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Northgate TV | College Station's Local Media Platform",
    template: "%s | Northgate TV",
  },
  description:
    "Northgate TV is College Station's #1 local media platform. Street interviews, nightlife coverage, and local business spotlights reaching 450,000+ monthly viewers in Bryan/College Station TX.",
  keywords: [
    "Northgate TV",
    "Northgate TV College Station",
    "College Station local media",
    "Bryan College Station nightlife",
    "Northgate district Texas A&M",
    "BCS local media",
    "College Station street interviews",
    "Northgate bar scene",
    "local advertising College Station",
    "Bryan TX media",
  ],
  openGraph: {
    title: "Northgate TV | College Station's Local Media Platform",
    description:
      "Northgate TV is College Station's #1 local media platform. Street interviews, nightlife coverage, and local business spotlights reaching 450,000+ monthly viewers in Bryan/College Station TX.",
    url: "https://northgatetv.com",
    siteName: "Northgate TV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northgate TV | College Station's Local Media Platform",
    description:
      "College Station's #1 local media platform. 450,000+ monthly viewers covering the Northgate district, Texas A&M, and BCS nightlife.",
  },
  metadataBase: new URL("https://northgatetv.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
