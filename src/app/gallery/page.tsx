import { galleryImages } from "@/data/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from the streets of Northgate — nightlife, game days, and behind the scenes with NorthgateTV.",
  openGraph: {
    title: "Gallery | NorthgateTV",
    description: "Photos from the streets of Northgate.",
  },
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Gallery</h1>
      <p className="mt-2 text-gray-400">Snapshots from the streets of Northgate.</p>

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="break-inside-avoid bg-dark-card rounded-lg overflow-hidden border border-dark-border"
          >
            <div
              className="bg-gray-800"
              style={{ aspectRatio: parseInt(img.id) % 3 === 0 ? "3/4" : parseInt(img.id) % 2 === 0 ? "4/3" : "1/1" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-gray-800 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm text-white">{img.caption}</p>
              <p className="text-xs text-gray-500 mt-1">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
