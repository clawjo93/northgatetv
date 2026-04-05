import Link from "next/link";
import Image from "next/image";
import VideoCard from "@/components/VideoCard";
import BlogCard from "@/components/BlogCard";
import EmailSignup from "@/components/EmailSignup";
import { videos } from "@/data/videos";
import { getAllPosts } from "@/lib/blog";

const socialPlatforms = [
  {
    name: "YouTube",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 00.5 6.5S0 8.7 0 10.9v2.2c0 2.2.5 4.4.5 4.4a3 3 0 002.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 002.1-2.1s.5-2.2.5-4.4v-2.2c0-2.2-.5-4.4-.5-4.4zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
    href: "https://youtube.com/@northgatetv",
  },
  {
    name: "TikTok",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.5 2h3a5 5 0 005 5v3a8 8 0 01-5-1.8V16a6.5 6.5 0 11-5.6-6.4v3.2A3.3 3.3 0 1013 16V2h-.5z" />
      </svg>
    ),
    href: "https://tiktok.com/@northgatetv",
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 01-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.2 2.6.8 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21.4 1.2 20.7.8 19.9.6 19.1.3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" />
      </svg>
    ),
    href: "https://instagram.com/northgatetv",
  },
  {
    name: "X",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.8-7.6-6.7 7.6H.3l8.7-9.9L0 1.2h7.7l5.3 7 6-7zM17.6 20.6h2l-13-13.4h-2.2l13.2 13.4z" />
      </svg>
    ),
    href: "https://x.com/northgatetv",
  },
];

export default function Home() {
  const featuredVideos = videos.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO — Full viewport, video background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/logo.png"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-primary/20 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Logo with glow */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-xl p-2" style={{ filter: "drop-shadow(0 0 30px rgba(123, 47, 190, 0.6))" }}>
              <Image src="/logo.png" alt="NorthgateTV" width={140} height={140} className="h-28 w-auto" />
            </div>
          </div>

          {/* Location badge */}
          <p className="text-sm text-gray-400 font-medium tracking-[0.2em] uppercase mb-4">
            📍 NorthgateTV &bull; TX
          </p>

          {/* Tagline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Street Interviews. Bar Culture.{" "}
            <span className="text-primary-light">Real Nightlife.</span>
          </h1>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/videos"
              className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-black text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Watch Now
            </Link>
            <Link
              href="/merch"
              className="px-8 py-3.5 border-2 border-white text-white font-black text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-white hover:text-dark hover:scale-105"
            >
              Shop Merch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* LATEST DROPS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Latest Drops
            </h2>
          </div>
          <Link
            href="/videos"
            className="text-sm font-bold text-gray-400 hover:text-primary-light transition-colors tracking-wide uppercase"
          >
            View All Videos &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold text-gray-400 hover:text-primary-light transition-colors tracking-wide uppercase"
          >
            Read More &rarr;
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

      {/* SOCIAL PROOF */}
      <section className="relative py-16 grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-dark to-primary/10" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="text-gray-400 group-hover:text-primary-light transition-colors duration-300">
                  {platform.icon}
                </div>
                <span className="text-sm font-black tracking-[0.15em] text-white uppercase">
                  {platform.name}
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-primary-light transition-colors">
                  Follow Us
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section className="py-20 px-4">
        <EmailSignup />
      </section>
    </>
  );
}
