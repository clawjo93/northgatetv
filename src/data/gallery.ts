export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "", alt: "Northgate neon lights", caption: "Neon lights on Northgate", category: "Nightlife" },
  { id: "2", src: "", alt: "Street interview crowd", caption: "Street interviews in action", category: "Behind the Scenes" },
  { id: "3", src: "", alt: "Game day crowd", caption: "Game day energy", category: "Game Day" },
  { id: "4", src: "", alt: "Bar crowd shot", caption: "Packed house on Northgate", category: "Nightlife" },
  { id: "5", src: "", alt: "NorthgateTV crew", caption: "The NorthgateTV crew before a shoot", category: "Behind the Scenes" },
  { id: "6", src: "", alt: "Tailgate setup", caption: "Pre-game tailgate vibes", category: "Game Day" },
  { id: "7", src: "", alt: "Northgate from above", caption: "Aerial view of Northgate", category: "Nightlife" },
  { id: "8", src: "", alt: "Late night scene", caption: "Late night on the strip", category: "Game Day" },
  { id: "9", src: "", alt: "Camera setup", caption: "Setting up for a late-night shoot", category: "Behind the Scenes" },
];
