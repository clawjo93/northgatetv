import type { MerchItem } from "@/data/merch";

export default function MerchCard({ item }: { item: MerchItem }) {
  return (
    <div className="group bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-primary transition-colors">
      <div className="aspect-square bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
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
