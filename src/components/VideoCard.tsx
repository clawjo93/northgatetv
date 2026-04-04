import type { Video } from "@/data/videos";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.videoUrl}
      className="group block bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-primary transition-colors"
    >
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center group-hover:bg-primary transition-colors z-20">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
          {video.category}
        </span>
        <h3 className="mt-1 text-base font-semibold text-white group-hover:text-primary-light transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{video.description}</p>
        <p className="mt-2 text-xs text-gray-500">{new Date(video.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
      </div>
    </a>
  );
}
