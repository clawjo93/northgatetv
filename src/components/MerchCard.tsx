import Image from "next/image";
import type { MerchItem } from "@/data/merch";

export default function MerchCard({ item }: { item: MerchItem }) {
  return (
    <div className="group bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-primary transition-colors">
      <div className="aspect-square bg-gray-800 relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{item.category}</p>
        <h3 className="mt-1 text-base font-semibold text-white">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-400">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-white">${item.price}</span>
          <a
            href={item.shopUrl}
            className="px-4 py-2 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
