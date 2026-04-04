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
    default: "NorthgateTV — College Station Nightlife & Street Interviews",
    template: "%s | NorthgateTV",
  },
  description:
    "NorthgateTV covers the best nightlife, bars, and street interviews on Northgate in College Station, Texas. Made for Texas A&M students.",
  openGraph: {
    title: "NorthgateTV — College Station Nightlife & Street Interviews",
    description:
      "NorthgateTV covers the best nightlife, bars, and street interviews on Northgate in College Station, Texas.",
    url: "https://northgatetv.com",
    siteName: "NorthgateTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthgateTV",
    description:
      "College Station nightlife, bar reviews, and street interviews for Texas A&M students.",
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
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
