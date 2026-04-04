import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch NorthgateTV street interviews, bar reviews, game day content, and event recaps from Northgate in College Station.",
  openGraph: {
    title: "Videos | NorthgateTV",
    description: "Street interviews, bar reviews, and more from Northgate.",
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
