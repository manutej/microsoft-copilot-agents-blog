import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import DarkModeToggle from '@/components/DarkModeToggle'

export const metadata: Metadata = {
  title: 'Microsoft Copilot Agents for Business | Complete Guide',
  description: 'Master Microsoft Copilot Agents with our comprehensive 12-part blog series. From foundations to enterprise deployment.',
  keywords: ['Microsoft Copilot Agents', 'Copilot Studio', 'AI Agents', 'Business Automation', 'No-Code', 'Microsoft 365'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Header */}
          <header className="bg-white dark:bg-copilot-gray-800 border-b border-copilot-gray-200 dark:border-copilot-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a href="/" className="text-2xl font-bold text-copilot-blue-500 hover:text-copilot-blue-700 transition-colors">
                    Microsoft Copilot Agents
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://copilotstudio.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-copilot-gray-600 dark:text-copilot-gray-400 hover:text-copilot-blue-500 transition-colors"
                  >
                    Copilot Studio
                  </a>
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-copilot-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Microsoft Copilot Agents</h3>
                  <p className="text-copilot-gray-400 text-sm">
                    Comprehensive blog series teaching you to build, deploy, and scale AI agents for business automation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Learning Tracks</h3>
                  <ul className="text-copilot-gray-400 text-sm space-y-2">
                    <li>Foundation (Blogs 1-3)</li>
                    <li>Integration (Blogs 4-6)</li>
                    <li>Enterprise (Blogs 7-9)</li>
                    <li>Advanced (Blogs 10-12)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Resources</h3>
                  <ul className="text-copilot-gray-400 text-sm space-y-2">
                    <li>
                      <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Official Documentation
                      </a>
                    </li>
                    <li>
                      <a href="https://copilotstudio.microsoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Copilot Studio
                      </a>
                    </li>
                    <li>
                      <a href="https://powerusers.microsoft.com/t5/Microsoft-Copilot-Studio/bd-p/PVACommunity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Community Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-copilot-gray-700 text-center text-copilot-gray-400 text-sm">
                <p>Last Updated: December 18, 2024 | 12-Part Blog Series</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
