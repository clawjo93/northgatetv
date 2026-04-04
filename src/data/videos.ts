export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: "Street Interviews" | "Bar Reviews" | "Game Day" | "Events";
  date: string;
  videoUrl: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "What's Your Hottest Take? — Northgate Edition",
    description: "We hit the streets of Northgate to find out the wildest opinions Aggies are holding onto.",
    thumbnail: "/images/placeholder-video-1.jpg",
    category: "Street Interviews",
    date: "2026-03-28",
    videoUrl: "#",
  },
  {
    id: "2",
    title: "Ranking Every Bar on Northgate (Honest Review)",
    description: "We went to every single bar on Northgate in one night. Here's our honest ranking.",
    thumbnail: "/images/placeholder-video-2.jpg",
    category: "Bar Reviews",
    date: "2026-03-21",
    videoUrl: "#",
  },
  {
    id: "3",
    title: "Game Day Northgate: A&M vs LSU Tailgate Madness",
    description: "The energy on Northgate before the LSU game was INSANE. Here's what went down.",
    thumbnail: "/images/placeholder-video-3.jpg",
    category: "Game Day",
    date: "2026-03-14",
    videoUrl: "#",
  },
  {
    id: "4",
    title: "Northgate After Dark: Spring Break Edition",
    description: "Spring break on Northgate hit different this year. We captured it all.",
    thumbnail: "/images/placeholder-video-4.jpg",
    category: "Events",
    date: "2026-03-07",
    videoUrl: "#",
  },
  {
    id: "5",
    title: "Are You Smarter Than an Aggie? Street Quiz",
    description: "We quizzed random Aggies on campus trivia. The results were... interesting.",
    thumbnail: "/images/placeholder-video-5.jpg",
    category: "Street Interviews",
    date: "2026-02-28",
    videoUrl: "#",
  },
  {
    id: "6",
    title: "The Best Happy Hour Deals on Northgate",
    description: "We found the best happy hour deals so you don't have to. You're welcome.",
    thumbnail: "/images/placeholder-video-6.jpg",
    category: "Bar Reviews",
    date: "2026-02-21",
    videoUrl: "#",
  },
  {
    id: "7",
    title: "Midnight Yell From the Streets of Northgate",
    description: "Midnight Yell is a tradition — but have you seen it from Northgate?",
    thumbnail: "/images/placeholder-video-7.jpg",
    category: "Game Day",
    date: "2026-02-14",
    videoUrl: "#",
  },
  {
    id: "8",
    title: "Northgate Block Party Recap",
    description: "The biggest block party of the semester just happened. Here's the full recap.",
    thumbnail: "/images/placeholder-video-8.jpg",
    category: "Events",
    date: "2026-02-07",
    videoUrl: "#",
  },
];
