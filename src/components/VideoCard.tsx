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

  return (
    <a
      href={href}
      target={hasYouTube ? "_blank" : undefined}
      rel={hasYouTube ? "noopener noreferrer" : undefined}
      className="group block bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-primary transition-all hover:scale-[1.02] duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-white rounded">
            {video.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-white group-hover:text-primary-light transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{video.description}</p>
        <p className="mt-2 text-xs text-gray-500">
          {new Date(video.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
      </div>
    </a>
  );
}
