import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
}

export default function BlogCard({ slug, title, description, date, category, readingTime }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-primary transition-colors"
    >
      <div className="aspect-[16/9] bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-primary/80 text-xs font-medium rounded text-white">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-primary-light transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
          <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
