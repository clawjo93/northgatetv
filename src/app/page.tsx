import Link from "next/link";
import Image from "next/image";
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-dark/90 to-dark z-10" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/90 text-white text-sm font-bold uppercase tracking-wider rounded-full animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full" />
              LIVE
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="NorthgateTV" width={120} height={120} className="h-24 w-auto" />
          </div>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
            Street interviews. Bar culture. Real nightlife.
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

      {/* Email Signup — just above footer */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <EmailSignup />
      </section>
    </>
  );
}
