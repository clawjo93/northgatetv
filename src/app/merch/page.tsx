import MerchCard from "@/components/MerchCard";
import { merchItems } from "@/data/merch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official NorthgateTV merch — hats, tees, hoodies, koozies, and stickers. Rep the brand on Northgate.",
  openGraph: {
    title: "Merch | NorthgateTV",
    description: "Official NorthgateTV merch for Aggies.",
  },
};

export default function MerchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Merch</h1>
      <p className="mt-2 text-gray-400">Rep NorthgateTV on and off the strip.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchItems.map((item) => (
          <MerchCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
