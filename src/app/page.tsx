import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import BlogCard from "@/components/BlogCard";
import EmailSignup from "@/components/EmailSignup";
import { videos } from "@/data/videos";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const featuredVideos = videos.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-dark/80 to-dark z-10" />
        <div className="absolute inset-0 bg-gray-900 opacity-30" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-white">Northgate</span>
            <span className="text-primary">TV</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            College Station&apos;s #1 nightlife and street interview content brand. Made for Aggies, by Aggies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/videos"
              className="px-8 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Watch Now
            </Link>
            <Link
              href="/merch"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20"
            >
              Shop Merch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-dark-border bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "YouTube Subscribers", value: "25K+" },
            { label: "TikTok Followers", value: "50K+" },
            { label: "Videos Published", value: "200+" },
            { label: "Instagram Followers", value: "15K+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Videos */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Videos</h2>
          <Link href="/videos" className="text-sm text-primary-light hover:text-white transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">From the Blog</h2>
          <Link href="/blog" className="text-sm text-primary-light hover:text-white transition-colors">
            Read more &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              category={post.category}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <EmailSignup />
      </section>
    </>
  );
}
