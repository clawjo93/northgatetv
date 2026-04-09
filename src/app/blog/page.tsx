import BlogCard from "@/components/BlogCard";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Bar guides, game day tips, nightlife guides, and more from NorthgateTV — your source for Northgate content in College Station.",
  openGraph: {
    title: "Blog | NorthgateTV",
    description: "Bar guides, game day tips, and nightlife content for Texas A&M students.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Blog</h1>
      <p className="mt-2 text-gray-400">Guides, tips, and stories from the streets of Northgate.</p>

      {/* Categories */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 bg-dark-card text-gray-400 text-sm rounded-lg border border-dark-border"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Posts */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            category={post.category}
            readingTime={post.readingTime}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}
