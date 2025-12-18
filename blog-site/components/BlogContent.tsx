'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useTheme } from 'next-themes'
import { BlogPost } from '@/lib/blog'

interface BlogContentProps {
  blog: BlogPost
}

export default function BlogContent({ blog }: BlogContentProps) {
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeSection, setActiveSection] = useState<string>('')
  const { theme } = useTheme()

  useEffect(() => {
    // Generate table of contents from markdown headings
    const headings = blog.content.match(/^#{1,3}\s+.+$/gm) || []
    const tocItems = headings.map((heading, index) => {
      const level = heading.match(/^#+/)?.[0].length || 1
      const text = heading.replace(/^#+\s+/, '')
      const id = `heading-${index}`
      return { id, text, level }
    })
    setToc(tocItems)
  }, [blog.content])

  useEffect(() => {
    // Track active section for TOC highlighting
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2, h3, h4')
      let current = ''

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top <= 100) {
          current = heading.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-8">
        {/* Table of Contents - Sticky Sidebar */}
        {toc.length > 0 && (
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-copilot-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {toc.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className={`block text-sm py-1 border-l-2 transition-colors ${
                      activeSection === item.id
                        ? 'border-copilot-blue-500 text-copilot-blue-500 font-medium'
                        : 'border-copilot-gray-300 dark:border-copilot-gray-700 text-copilot-gray-600 dark:text-copilot-gray-400 hover:border-copilot-blue-500 hover:text-copilot-blue-500'
                    }`}
                    style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Blog Content */}
        <article className="flex-1 max-w-4xl">
          <div className="prose prose-copilot dark:prose-invert max-w-none prose-lg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ children, ...props }) => {
                  const index = toc.findIndex(item => item.text === String(children))
                  const id = index >= 0 ? toc[index].id : ''
                  return <h2 id={id} {...props}>{children}</h2>
                },
                h3: ({ children, ...props }) => {
                  const index = toc.findIndex(item => item.text === String(children))
                  const id = index >= 0 ? toc[index].id : ''
                  return <h3 id={id} {...props}>{children}</h3>
                },
                h4: ({ children, ...props }) => {
                  const index = toc.findIndex(item => item.text === String(children))
                  const id = index >= 0 ? toc[index].id : ''
                  return <h4 id={id} {...props}>{children}</h4>
                },
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '')
                  const language = match ? match[1] : ''

                  return !inline && language ? (
                    <SyntaxHighlighter
                      style={theme === 'dark' ? oneDark : oneLight}
                      language={language}
                      PreTag="div"
                      showLineNumbers={language === 'python' || language === 'typescript' || language === 'javascript'}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
                img: ({ src, alt, ...props }) => {
                  // Handle images from public/images directory
                  const imageSrc = typeof src === 'string' && src.startsWith('images/') ? `/${src}` : src
                  return (
                    <img
                      src={typeof imageSrc === 'string' ? imageSrc : undefined}
                      alt={alt}
                      className="rounded-lg shadow-md my-8"
                      {...props}
                    />
                  )
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}
