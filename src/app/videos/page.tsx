"use client";

import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import { videos, type Video } from "@/data/videos";

const categories = ["All", "Street Interviews", "Bar Reviews", "Game Day", "Events"] as const;

export default function VideosPage() {
  const [active, setActive] = useState<string>("All");

  const filtered: Video[] =
    active === "All" ? videos : videos.filter((v) => v.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Videos</h1>
      <p className="mt-2 text-gray-400">Street interviews, bar reviews, game day content, and more.</p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === cat
                ? "bg-primary text-white"
                : "bg-dark-card text-gray-400 hover:text-white border border-dark-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
