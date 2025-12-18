import { getAllBlogs } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'

export default function HomePage() {
  const blogs = getAllBlogs()

  // Group blogs by arc (learning track)
  const foundationBlogs = blogs.filter(b => b.slug.startsWith('01') || b.slug.startsWith('02') || b.slug.startsWith('03'))
  const integrationBlogs = blogs.filter(b => b.slug.startsWith('04') || b.slug.startsWith('05') || b.slug.startsWith('06'))
  const enterpriseBlogs = blogs.filter(b => b.slug.startsWith('07') || b.slug.startsWith('08') || b.slug.startsWith('09'))
  const advancedBlogs = blogs.filter(b => b.slug.startsWith('10') || b.slug.startsWith('11') || b.slug.startsWith('12'))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-copilot-blue-700 via-copilot-blue-500 to-copilot-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Microsoft Copilot Agents
              <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl mt-2">
                Complete Business Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Transform your business with AI agents. Learn to build, deploy, and scale intelligent automation
              using Microsoft Copilot Studio — no coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog/01-intro-copilot-agents"
                className="bg-white text-copilot-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-copilot-blue-50 transition-colors"
              >
                Start Learning
              </a>
              <a
                href="https://copilotstudio.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-copilot-blue-700 transition-colors"
              >
                Try Copilot Studio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-copilot-gray-50 dark:bg-copilot-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-copilot-blue-500 mb-2">12</div>
              <div className="text-copilot-gray-600 dark:text-copilot-gray-400">Comprehensive Blogs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-copilot-blue-500 mb-2">4</div>
              <div className="text-copilot-gray-600 dark:text-copilot-gray-400">Learning Arcs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-copilot-blue-500 mb-2">~180</div>
              <div className="text-copilot-gray-600 dark:text-copilot-gray-400">Minutes Reading Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-copilot-blue-500 mb-2">100%</div>
              <div className="text-copilot-gray-600 dark:text-copilot-gray-400">No-Code Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Arc 1: Foundation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-copilot-blue-700 to-copilot-blue-500 text-white px-6 py-2 rounded-lg mb-4">
              <h2 className="text-2xl font-bold">Arc 1: Foundation</h2>
            </div>
            <p className="text-lg text-copilot-gray-600 dark:text-copilot-gray-400 max-w-3xl">
              Master the fundamentals of Microsoft Copilot Agents. Build your first FAQ agent and conversational assistant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foundationBlogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Arc 2: Integration */}
      <section className="bg-copilot-gray-50 dark:bg-copilot-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg mb-4">
              <h2 className="text-2xl font-bold">Arc 2: Integration</h2>
            </div>
            <p className="text-lg text-copilot-gray-600 dark:text-copilot-gray-400 max-w-3xl">
              Connect agents to your business systems. Learn Power Automate flows, multi-channel deployment, and knowledge integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationBlogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={foundationBlogs.length + index} />
            ))}
          </div>
        </div>
      </section>

      {/* Arc 3: Enterprise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-lg mb-4">
              <h2 className="text-2xl font-bold">Arc 3: Enterprise</h2>
            </div>
            <p className="text-lg text-copilot-gray-600 dark:text-copilot-gray-400 max-w-3xl">
              Deploy agents at scale with enterprise security, governance, and compliance. Multi-channel strategies and security best practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseBlogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={foundationBlogs.length + integrationBlogs.length + index} />
            ))}
          </div>
        </div>
      </section>

      {/* Arc 4: Advanced */}
      <section className="bg-copilot-gray-50 dark:bg-copilot-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-lg mb-4">
              <h2 className="text-2xl font-bold">Arc 4: Advanced</h2>
            </div>
            <p className="text-lg text-copilot-gray-600 dark:text-copilot-gray-400 max-w-3xl">
              Master advanced automation, measure ROI, and scale organization-wide adoption. Become a Copilot Agents expert.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedBlogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={foundationBlogs.length + integrationBlogs.length + enterpriseBlogs.length + index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-copilot-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with our comprehensive introduction and build your first AI agent in under an hour — no coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/01-intro-copilot-agents"
              className="bg-white text-copilot-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-copilot-blue-50 transition-colors"
            >
              Start with Blog 1
            </a>
            <a
              href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-copilot-blue-700 transition-colors"
            >
              Official Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
