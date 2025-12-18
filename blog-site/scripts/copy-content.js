#!/usr/bin/env node

/**
 * Copy Content Script for Vercel Deployment
 *
 * This script runs before `next build` (via prebuild script)
 * and copies the blog content from the parent directory into
 * the blog-site directory so it's available during static generation.
 *
 * Why this is needed:
 * - Vercel only uploads the blog-site directory (configured in vercel.json)
 * - The content and images are in the parent directory
 * - We need to copy them locally before the build starts
 */

import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectRoot = join(__dirname, '..')
const parentDir = join(projectRoot, '..')

console.log('📦 Copying content for Vercel deployment...')
console.log(`Project root: ${projectRoot}`)
console.log(`Parent directory: ${parentDir}`)

/**
 * Recursively copy a directory
 */
function copyDirectoryRecursive(source, destination) {
  // Create destination directory if it doesn't exist
  if (!existsSync(destination)) {
    mkdirSync(destination, { recursive: true })
  }

  // Read source directory
  const entries = readdirSync(source)

  for (const entry of entries) {
    const sourcePath = join(source, entry)
    const destPath = join(destination, entry)
    const stat = statSync(sourcePath)

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectoryRecursive(sourcePath, destPath)
    } else {
      // Copy file
      copyFileSync(sourcePath, destPath)
    }
  }
}

try {
  // Copy content directory
  const contentSource = join(parentDir, 'content')
  const contentDest = join(projectRoot, 'content')

  console.log(`\nCopying content from: ${contentSource}`)
  console.log(`                  to: ${contentDest}`)

  if (existsSync(contentSource)) {
    copyDirectoryRecursive(contentSource, contentDest)
    const files = readdirSync(contentDest)
    console.log(`✅ Copied ${files.length} files from content/`)
  } else {
    console.warn('⚠️  Warning: Content source directory not found')
  }

  // Copy images directory to public/images
  const imagesSource = join(parentDir, 'images')
  const imagesDest = join(projectRoot, 'public', 'images')

  console.log(`\nCopying images from: ${imagesSource}`)
  console.log(`                 to: ${imagesDest}`)

  if (existsSync(imagesSource)) {
    copyDirectoryRecursive(imagesSource, imagesDest)
    const files = readdirSync(imagesDest)
    console.log(`✅ Copied ${files.length} files from images/`)
  } else {
    console.warn('⚠️  Warning: Images source directory not found')
  }

  console.log('\n✅ Content copy complete!\n')
} catch (error) {
  console.error('❌ Error copying content:', error)
  process.exit(1)
}
