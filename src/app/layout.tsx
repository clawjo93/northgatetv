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
    default: "NorthgateTV — Street Interviews & Nightlife",
    template: "%s | NorthgateTV",
  },
  description:
    "Street interviews, bar culture, and real nightlife content.",
  openGraph: {
    title: "NorthgateTV — Street Interviews & Nightlife",
    description:
      "Street interviews, bar culture, and real nightlife content.",
    url: "https://northgatetv.com",
    siteName: "NorthgateTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthgateTV",
    description:
      "Street interviews, bar culture, and real nightlife content.",
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
