import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Content directory resolution:
// - In production (Vercel): content is copied to ./content during prebuild
// - In development: content can be in ./content or ../content
function getContentDirectory(): string {
  const localContent = path.join(process.cwd(), 'content')
  const parentContent = path.join(process.cwd(), '..', 'content')

  // Check if local content exists (Vercel production or after prebuild)
  if (fs.existsSync(localContent)) {
    return localContent
  }

  // Check if parent content exists (development with symlink)
  if (fs.existsSync(parentContent)) {
    return parentContent
  }

  // Default to local (will fail if neither exists)
  return localContent
}

const contentDirectory = getContentDirectory()

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  readingTime: number
  handsOnTime: number
  difficulty: string
  prerequisites: string[]
  learningObjectives: string[]
  lastUpdated: string
  content: string
}

export interface BlogMetadata {
  slug: string
  title: string
  subtitle: string
  readingTime: number
  handsOnTime: number
  difficulty: string
  prerequisites: string[]
  learningObjectives: string[]
  lastUpdated: string
}

export function getAllBlogs(): BlogMetadata[] {
  // Get all markdown files from content directory
  const files = fs.readdirSync(contentDirectory)
  const mdFiles = files.filter(file => file.endsWith('.md'))

  const blogs = mdFiles.map(filename => {
    const slug = filename.replace('.md', '')
    const filePath = path.join(contentDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      readingTime: data.readingTime || 0,
      handsOnTime: data.handsOnTime || 0,
      difficulty: data.difficulty || 'Beginner',
      prerequisites: data.prerequisites || [],
      learningObjectives: data.learningObjectives || [],
      lastUpdated: data.lastUpdated || '',
    }
  })

  // Sort by slug (which starts with numbers like 01-, 02-, etc.)
  return blogs.sort((a, b) => a.slug.localeCompare(b.slug))
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      readingTime: data.readingTime || 0,
      handsOnTime: data.handsOnTime || 0,
      difficulty: data.difficulty || 'Beginner',
      prerequisites: data.prerequisites || [],
      learningObjectives: data.learningObjectives || [],
      lastUpdated: data.lastUpdated || '',
      content,
    }
  } catch (error) {
    console.error(`Error loading blog post: ${slug}`, error)
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  // Handle case where content directory doesn't exist yet (e.g., during Vercel build)
  if (!fs.existsSync(contentDirectory)) {
    // Return the known blog slugs as fallback
    return [
      '01-intro-copilot-agents',
      '02-first-conversational-agent',
      '03-knowledge-agents',
      '04-autonomous-agents',
      '05-multimodal-agents',
      '06-enterprise-integration',
      '07-agent-orchestration',
      '08-security-compliance',
      '09-monitoring-optimization',
      '10-industry-solutions',
      '11-advanced-patterns',
      '12-future-roadmap'
    ]
  }

  const files = fs.readdirSync(contentDirectory)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''))
}

// Helper to generate blog URL
export function getBlogUrl(slug: string): string {
  return `/blog/${slug}`
}

// Helper to get difficulty color
export function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermediate': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Advanced': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Expert': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }
  return colors[difficulty] || colors['Beginner']
}

// Helper to get arc (learning track) for blog
export function getBlogArc(slug: string): {
  name: string
  description: string
  color: string
} {
  const arcMap: Record<string, any> = {
    '01': { name: 'Foundation', description: 'Core Concepts', color: 'from-copilot-blue-700 to-copilot-blue-500' },
    '02': { name: 'Foundation', description: 'Core Concepts', color: 'from-copilot-blue-700 to-copilot-blue-500' },
    '03': { name: 'Foundation', description: 'Core Concepts', color: 'from-copilot-blue-700 to-copilot-blue-500' },
    '04': { name: 'Integration', description: 'Building Solutions', color: 'from-blue-600 to-cyan-500' },
    '05': { name: 'Integration', description: 'Building Solutions', color: 'from-blue-600 to-cyan-500' },
    '06': { name: 'Integration', description: 'Building Solutions', color: 'from-blue-600 to-cyan-500' },
    '07': { name: 'Enterprise', description: 'Production Ready', color: 'from-purple-600 to-pink-500' },
    '08': { name: 'Enterprise', description: 'Production Ready', color: 'from-purple-600 to-pink-500' },
    '09': { name: 'Enterprise', description: 'Production Ready', color: 'from-purple-600 to-pink-500' },
    '10': { name: 'Advanced', description: 'Mastery & Scale', color: 'from-red-600 to-orange-500' },
    '11': { name: 'Advanced', description: 'Mastery & Scale', color: 'from-red-600 to-orange-500' },
    '12': { name: 'Advanced', description: 'Mastery & Scale', color: 'from-red-600 to-orange-500' },
  }

  const prefix = slug.substring(0, 2)
  return arcMap[prefix] || arcMap['01']
}
