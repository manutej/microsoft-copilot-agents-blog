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
      <div className="group bg-white dark:bg-copilot-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-copilot-gray-200 dark:border-copilot-gray-700 h-full flex flex-col">
        {/* Arc Badge */}
        <div className={`bg-gradient-to-r ${arc.color} px-4 py-2`}>
          <div className="flex items-center justify-between text-white text-sm">
            <span className="font-semibold">{arc.name}</span>
            <span className="text-white/80">{arc.description}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Blog Number */}
          <div className="text-copilot-blue-500 font-bold text-sm mb-2">
            Blog {index + 1} of 12
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-copilot-gray-900 dark:text-white mb-2 group-hover:text-copilot-blue-500 transition-colors line-clamp-2">
            {blog.title}
          </h3>

          {/* Subtitle */}
          <p className="text-copilot-gray-600 dark:text-copilot-gray-400 mb-4 line-clamp-2 flex-1">
            {blog.subtitle}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColor}`}>
              {blog.difficulty}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-copilot-gray-100 dark:bg-copilot-gray-700 text-copilot-gray-700 dark:text-copilot-gray-300">
              {blog.readingTime} min read
            </span>
            {blog.handsOnTime > 0 && (
              <span className="text-xs px-2 py-1 rounded-full bg-copilot-blue-100 dark:bg-copilot-blue-900 text-copilot-blue-700 dark:text-copilot-blue-200">
                {blog.handsOnTime} min hands-on
              </span>
            )}
          </div>

          {/* Learning Objectives Count */}
          {blog.learningObjectives.length > 0 && (
            <div className="text-sm text-copilot-gray-600 dark:text-copilot-gray-400">
              {blog.learningObjectives.length} learning objectives
            </div>
          )}

          {/* Read More Arrow */}
          <div className="mt-4 flex items-center text-copilot-blue-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
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
