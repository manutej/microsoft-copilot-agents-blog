# Vercel Deployment Fix Summary

## Problem

Vercel build was failing with error:
```
Error: ENOENT: no such file or directory, scandir '/vercel/path0/public/content'
```

## Root Cause

1. **Content location**: Blog content is in `/Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/content/`
2. **Blog-site location**: Next.js app is in `/Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site/`
3. **Vercel deployment**: Only the `blog-site` directory was being uploaded to Vercel
4. **Missing files**: The `content/` and `images/` directories in the parent weren't available during build

## Solutions Implemented

### 1. Updated lib/blog.ts with Smart Content Resolution
```typescript
function getContentDirectory(): string {
  const localContent = path.join(process.cwd(), 'content')
  const parentContent = path.join(process.cwd(), '..', 'content')

  // Check if local content exists (Vercel production after prebuild)
  if (fs.existsSync(localContent)) {
    return localContent
  }

  // Check if parent content exists (development with parent directory)
  if (fs.existsSync(parentContent)) {
    return parentContent
  }

  return localContent
}
```

### 2. Added Prebuild Script
- Created `scripts/copy-content.js` to copy content and images during build
- Updated `package.json`:
  ```json
  {
    "scripts": {
      "prebuild": "node scripts/copy-content.js",
      "build": "next build"
    }
  }
  ```

### 3. Fixed Next.js 15+ Async Params Handling
```typescript
// app/blog/[slug]/page.tsx
export default async function BlogPostPage({ params }: PageProps) {
  // In Next.js 15+, params is a Promise and must be awaited
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  // ...
}
```

### 4. Updated .gitignore
```
# Copied content (from parent directory during build)
/content/
/public/images/
```

## Current Status

### ✅ **Local Build**: SUCCESSFUL
- All 12 blog posts generated
- Content properly loaded
- No errors during build

### ⚠️ **Vercel Deployment**: REQUIRES FINAL CONFIGURATION

The issue is that Vercel still can't find the content/images directories because they're not being uploaded.

## Final Solution Options

### Option A: Deploy from Parent Directory (RECOMMENDED)

1. **Configure Vercel Project**:
   - Go to Vercel project settings → General → Root Directory
   - Set to `blogs/microsoft-copilot-agents` (parent directory)
   - Update Build Settings:
     - Build Command: `cd blog-site && npm run build`
     - Output Directory: `blog-site/out`
     - Install Command: `cd blog-site && npm install --legacy-peer-deps`

2. **Vercel.json** (already in parent directory):
   ```json
   {
     "buildCommand": "cd blog-site && npm run build",
     "outputDirectory": "blog-site/out",
     "framework": "nextjs",
     "installCommand": "cd blog-site && npm install --legacy-peer-deps"
   }
   ```

3. **Deploy**:
   ```bash
   cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents
   vercel --prod
   ```

### Option B: Commit Content to Repository

If deploying from parent doesn't work, commit content and images:

```bash
cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site
git add -f ../content ../images
git commit -m "chore: Add blog content and images for Vercel deployment"
```

Then update `.gitignore` to allow these directories:
```
# Allow content and images from parent
!../content/
!../images/
```

## Test Commands

### Local Testing
```bash
cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site
rm -rf .next out content public/images
npm run build
```

### Vercel Deployment
```bash
cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents
vercel --prod --yes
```

## Files Modified

1. `/blogs/microsoft-copilot-agents/blog-site/lib/blog.ts` - Smart content resolution
2. `/blogs/microsoft-copilot-agents/blog-site/scripts/copy-content.js` - Prebuild content copy
3. `/blogs/microsoft-copilot-agents/blog-site/package.json` - Added prebuild script
4. `/blogs/microsoft-copilot-agents/blog-site/app/blog/[slug]/page.tsx` - Async params fix
5. `/blogs/microsoft-copilot-agents/blog-site/.gitignore` - Exclude copied content
6. `/blogs/microsoft-copilot-agents/vercel.json` - Deployment configuration

## Next Steps

1. **Via Vercel Dashboard**:
   - Go to https://vercel.com/manu-mulaveesalas-projects/blog-site/settings/general
   - Change Root Directory to `blogs/microsoft-copilot-agents`
   - Trigger new deployment

2. **OR via CLI** (if parent directory deployment doesn't work):
   - Commit content and images to repository (Option B above)
   - Deploy from blog-site directory

## Success Criteria

✅ Vercel build completes without errors
✅ All 12 blog posts accessible
✅ Content properly rendered
✅ Images load correctly
✅ Homepage lists all blogs

---

**Last Updated**: 2025-12-18
**Build Status**: Local ✅ | Vercel ⚠️ (pending configuration)
