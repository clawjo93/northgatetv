import type { Video } from "@/data/videos";
import Image from "next/image";

export default function VideoCard({ video }: { video: Video }) {
  const hasYouTube = !!video.youtubeId;
  const thumbnailUrl = hasYouTube
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null;
  const href = hasYouTube
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : video.videoUrl;
  const isReal = href && href !== "#";

  const Card = (
    <div className="group block bg-dark-card rounded-xl overflow-hidden border border-dark-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-card to-dark flex items-center justify-center">
            <svg className="w-16 h-16 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        {thumbnailUrl && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        )}
        {thumbnailUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/40">
              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em] bg-primary text-white rounded-full">
            {video.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-white group-hover:text-primary-light transition-colors line-clamp-2 uppercase tracking-tight">
          {video.title}
        </h3>
        <p className="mt-2 text-xs text-gray-500">
          {new Date(video.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
      </div>
    </div>
  );

  if (!isReal) return Card;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Card}
    </a>
  );
}
