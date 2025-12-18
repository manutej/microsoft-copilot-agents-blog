import { getAllBlogSlugs, getBlogBySlug, getDifficultyColor } from '@/lib/blog'
import BlogContent from '@/components/BlogContent'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  // In Next.js 15+, params is a Promise and must be awaited
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-copilot-gray-900 dark:text-white mb-4">
          Blog post not found
        </h1>
        <a href="/" className="text-copilot-blue-500 hover:text-copilot-blue-700">
          Return to home
        </a>
      </div>
    )
  }

  const difficultyColor = getDifficultyColor(blog.difficulty)

  return (
    <div className="min-h-screen bg-white dark:bg-copilot-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-copilot-blue-700 to-copilot-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">{blog.subtitle}</p>

            {/* Metadata */}
            <div className="flex flex-wrap gap-3">
              <span className={`text-sm px-3 py-1 rounded-full font-medium ${difficultyColor}`}>
                {blog.difficulty}
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                {blog.readingTime} min read
              </span>
              {blog.handsOnTime > 0 && (
                <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  {blog.handsOnTime} min hands-on
                </span>
              )}
              <span className="text-sm px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                Updated: {blog.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites Section */}
      {blog.prerequisites && blog.prerequisites.length > 0 && (
        <div className="bg-copilot-blue-50 dark:bg-copilot-blue-900/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-lg font-bold text-copilot-gray-900 dark:text-white mb-3">
                Prerequisites
              </h2>
              <ul className="list-disc list-inside space-y-1 text-copilot-gray-700 dark:text-copilot-gray-300">
                {blog.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Learning Objectives */}
      {blog.learningObjectives && blog.learningObjectives.length > 0 && (
        <div className="bg-copilot-gray-50 dark:bg-copilot-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-lg font-bold text-copilot-gray-900 dark:text-white mb-3">
                What You'll Learn
              </h2>
              <ul className="list-disc list-inside space-y-1 text-copilot-gray-700 dark:text-copilot-gray-300">
                {blog.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Client Component */}
      <BlogContent blog={blog} />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl">
          <div className="pt-8 border-t border-copilot-gray-200 dark:border-copilot-gray-700">
            <div className="flex justify-between items-center">
              <div>
                {blog.slug !== '01-intro-copilot-agents' && (
                  <a
                    href="/"
                    className="text-copilot-blue-500 hover:text-copilot-blue-700 font-medium flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to All Blogs
                  </a>
                )}
              </div>
              <div>
                <a
                  href="/"
                  className="text-copilot-blue-500 hover:text-copilot-blue-700 font-medium flex items-center gap-2"
                >
                  View All Blogs
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
