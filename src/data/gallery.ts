export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/images/gallery-1.jpg", alt: "Northgate neon lights", caption: "Neon lights on Northgate", category: "Nightlife" },
  { id: "2", src: "/images/gallery-2.jpg", alt: "Street interview crowd", caption: "Street interviews in action", category: "Behind the Scenes" },
  { id: "3", src: "/images/gallery-3.jpg", alt: "Game day crowd", caption: "Game day energy on University Dr", category: "Game Day" },
  { id: "4", src: "/images/gallery-4.jpg", alt: "Bar crowd shot", caption: "Packed house at the Dixie Chicken", category: "Nightlife" },
  { id: "5", src: "/images/gallery-5.jpg", alt: "NorthgateTV crew", caption: "The NorthgateTV crew before a shoot", category: "Behind the Scenes" },
  { id: "6", src: "/images/gallery-6.jpg", alt: "Tailgate setup", caption: "Pre-game tailgate vibes", category: "Game Day" },
  { id: "7", src: "/images/gallery-7.jpg", alt: "Northgate from above", caption: "Aerial view of Northgate", category: "Nightlife" },
  { id: "8", src: "/images/gallery-8.jpg", alt: "Midnight Yell", caption: "Midnight Yell at Kyle Field", category: "Game Day" },
  { id: "9", src: "/images/gallery-9.jpg", alt: "Camera setup", caption: "Setting up for a late-night shoot", category: "Behind the Scenes" },
];
