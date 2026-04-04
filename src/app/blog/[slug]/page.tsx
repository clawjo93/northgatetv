import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "NorthgateTV",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-primary-light hover:text-white transition-colors">
            &larr; Back to Blog
          </Link>
          <div className="mt-4">
            <span className="px-3 py-1 bg-primary/20 text-primary-light text-sm rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>&middot;</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>

        {/* Share buttons */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <p className="text-sm text-gray-400 mb-3">Share this post</p>
          <div className="flex gap-3">
            {[
              { label: "X", href: `https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://northgatetv.com/blog/${post.slug}`)}` },
              { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://northgatetv.com/blog/${post.slug}`)}` },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-gray-400 hover:text-white hover:border-primary transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-dark-border">
            <h2 className="text-xl font-bold text-white mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="block bg-dark-card p-4 rounded-lg border border-dark-border hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary-light">{rp.category}</span>
                  <h3 className="mt-1 text-base font-semibold text-white">{rp.title}</h3>
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">{rp.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
