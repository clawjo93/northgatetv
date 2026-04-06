import { galleryImages } from "@/data/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from the streets of Northgate — nightlife, events, and behind the scenes with NorthgateTV.",
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

      <div className="mt-6 bg-dark-card border border-primary/30 rounded-lg p-6 text-center">
        <p className="text-lg text-gray-300">
          📸 Gallery coming soon — follow us on Instagram{" "}
          <a
            href="https://instagram.com/northgatestv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:text-white transition-colors font-semibold"
          >
            @northgatestv
          </a>{" "}
          for the latest
        </p>
      </div>

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="break-inside-avoid bg-dark-card rounded-lg overflow-hidden border-2 border-primary/20"
          >
            <div
              className="bg-gray-900"
              style={{ aspectRatio: parseInt(img.id) % 3 === 0 ? "3/4" : parseInt(img.id) % 2 === 0 ? "4/3" : "1/1" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-gray-900 flex items-center justify-center p-4">
                <p className="text-gray-500 text-sm text-center font-medium">{img.caption}</p>
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
