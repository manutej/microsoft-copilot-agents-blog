import Link from 'next/link'
import { BlogMetadata, getDifficultyColor, getBlogArc } from '@/lib/blog'

interface BlogCardProps {
  blog: BlogMetadata
  index: number
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  const arc = getBlogArc(blog.slug)
  const difficultyColor = getDifficultyColor(blog.difficulty)

  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="group bg-white dark:bg-neutral-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-neutral-200 dark:border-neutral-800 h-full flex flex-col hover:-translate-y-0.5">
        {/* Arc Badge - Simplified with border */}
        <div className={`border-b border-neutral-200 dark:border-neutral-800 px-4 py-3`}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">{arc.name}</span>
            <span className="text-neutral-600 dark:text-neutral-400">{arc.description}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Blog Number */}
          <div className="text-accent-500 font-bold text-sm mb-2">
            Blog {index + 1} of 12
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors line-clamp-2">
            {blog.title}
          </h3>

          {/* Subtitle */}
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
            {blog.subtitle}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs px-2 py-1 rounded-full font-medium border ${difficultyColor}`}>
              {blog.difficulty}
            </span>
            <span className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
              {blog.readingTime} min read
            </span>
            {blog.handsOnTime > 0 && (
              <span className="text-xs px-2 py-1 rounded-full border border-accent-500/20 text-accent-700 dark:text-accent-300">
                {blog.handsOnTime} min hands-on
              </span>
            )}
          </div>

          {/* Learning Objectives Count */}
          {blog.learningObjectives.length > 0 && (
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {blog.learningObjectives.length} learning objectives
            </div>
          )}

          {/* Read More Arrow */}
          <div className="mt-4 flex items-center text-accent-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
