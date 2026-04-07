export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: "Street Interviews" | "Bar Reviews" | "Game Day" | "Events";
  date: string;
  videoUrl: string;
  youtubeId?: string;
}

export function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "NorthgateTV — Latest Drop",
    description: "Catch the latest from NorthgateTV — street interviews, bar culture, and real nightlife.",
    thumbnail: "https://img.youtube.com/vi/5eOFFsoYy04/maxresdefault.jpg",
    category: "Street Interviews",
    date: "2026-04-05",
    videoUrl: "https://youtu.be/5eOFFsoYy04",
    youtubeId: "5eOFFsoYy04",
  },
  {
    id: "2",
    title: "NorthgateTV — Bar Reviews",
    description: "Bar culture, real reviews, and the best spots on Northgate.",
    thumbnail: "https://img.youtube.com/vi/ltwgkGO2JE4/maxresdefault.jpg",
    category: "Bar Reviews",
    date: "2026-04-05",
    videoUrl: "https://youtu.be/ltwgkGO2JE4",
    youtubeId: "ltwgkGO2JE4",
  },
  {
    id: "3",
    title: "NorthgateTV — Street Interviews",
    description: "Real people, real answers. Street interviews from the heart of Northgate.",
    thumbnail: "https://img.youtube.com/vi/hc_Y2y-Ji1k/maxresdefault.jpg",
    category: "Street Interviews",
    date: "2026-04-05",
    videoUrl: "https://youtu.be/hc_Y2y-Ji1k",
    youtubeId: "hc_Y2y-Ji1k",
  },
  {
    id: "4",
    title: "NorthgateTV — Nightlife",
    description: "Northgate after dark. The real nightlife, unfiltered.",
    thumbnail: "https://img.youtube.com/vi/D6Fn_8T31x8/maxresdefault.jpg",
    category: "Events",
    date: "2026-04-05",
    videoUrl: "https://youtu.be/D6Fn_8T31x8",
    youtubeId: "D6Fn_8T31x8",
  },
  {
    id: "5",
    title: "NorthgateTV — Street Interviews Vol. 2",
    description: "More real people, more real answers. Street interviews from Northgate.",
    thumbnail: "https://img.youtube.com/vi/YBPBIJMn07I/maxresdefault.jpg",
    category: "Street Interviews",
    date: "2026-04-05",
    videoUrl: "https://youtu.be/YBPBIJMn07I",
    youtubeId: "YBPBIJMn07I",
  },

];
