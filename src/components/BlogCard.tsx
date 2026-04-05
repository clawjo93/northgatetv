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
      className="group block bg-dark-card rounded-xl overflow-hidden border border-dark-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-card to-dark" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em] bg-primary text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-white group-hover:text-primary-light transition-colors line-clamp-2 uppercase tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-xs text-gray-400 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center gap-3 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
          <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="text-dark-border">&bull;</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
