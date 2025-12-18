# Microsoft Copilot Agents Blog - Deployment Guide

## Overview

This deployment guide covers local testing and Vercel production deployment for the Microsoft Copilot Agents blog site.

**Technology Stack:**
- Next.js 16.1.0 (App Router, Static Export)
- React 19.2.3
- Tailwind CSS 4.1.18
- TypeScript 5.9.3
- react-markdown with syntax highlighting
- Dark mode support with next-themes

**Blog Content:**
- 12 comprehensive blog posts (01-12)
- Markdown with frontmatter (YAML)
- Images referenced from `/images/` directory
- Code syntax highlighting for multiple languages
- GitHub Flavored Markdown (tables, task lists, etc.)

---

## Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Step 1: Install Dependencies

```bash
cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site
npm install --legacy-peer-deps
```

**Note:** We use `--legacy-peer-deps` due to ESLint version compatibility between Next.js 16 and Tailwind CSS 4.

### Step 2: Verify Directory Structure

Ensure symlinks are correctly created:

```bash
ls -la public/
# Should show:
# content -> ../../content
# images -> ../../images
```

If symlinks are missing, recreate them:

```bash
cd public
ln -s ../../content content
ln -s ../../images images
cd ..
```

### Step 3: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Expected Result:**
- Homepage displays with 4 learning arcs (Foundation, Integration, Enterprise, Advanced)
- All 12 blog cards visible and clickable
- Dark mode toggle in header works
- Responsive design at all breakpoints

### Step 4: Verify All Blogs Load

Test each blog post loads correctly:

```bash
# Open these URLs in your browser:
http://localhost:3000/blog/01-intro-copilot-agents
http://localhost:3000/blog/02-first-conversational-agent
http://localhost:3000/blog/03-knowledge-agents
http://localhost:3000/blog/04-agent-flows-automation
http://localhost:3000/blog/05-flows-automation
http://localhost:3000/blog/06-deployment-channels
http://localhost:3000/blog/07-security-governance
http://localhost:3000/blog/08-security-compliance
http://localhost:3000/blog/09-multi-channel
http://localhost:3000/blog/10-advanced-automation
http://localhost:3000/blog/11-measuring-roi
http://localhost:3000/blog/12-scaling-adoption
```

**Checklist:**
- [ ] Blog title and subtitle display correctly
- [ ] Prerequisites section appears (if any)
- [ ] Learning objectives list correctly
- [ ] Table of contents generates and highlights active section
- [ ] Markdown content renders with proper formatting
- [ ] Code blocks show syntax highlighting
- [ ] Tables render with borders
- [ ] Images load (if any)
- [ ] Dark mode works throughout page
- [ ] Previous/Next navigation works

### Step 5: Build Static Export

```bash
npm run build
```

**Expected Output:**
```
✓ Compiled successfully
✓ Generating static pages
Route (app)
  ○ /
  ● /blog/[slug]
    ├ /blog/01-intro-copilot-agents
    ├ /blog/02-first-conversational-agent
    └ [+10 more paths]
```

**Build artifacts:**
- Output directory: `out/`
- All pages pre-rendered as static HTML
- Assets optimized and bundled

### Step 6: Test Static Build Locally

```bash
npx serve out -l 3003
```

Open [http://localhost:3003](http://localhost:3003) and verify:

- [ ] All pages load
- [ ] Navigation works
- [ ] Dark mode persists
- [ ] No console errors

---

## Vercel Deployment

### Option 1: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow prompts to authenticate.

#### Step 3: Deploy to Vercel

```bash
cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site
vercel --prod
```

**Deployment process:**
1. Vercel detects Next.js framework
2. Runs `npm install --legacy-peer-deps` (from vercel.json)
3. Runs `npm run build`
4. Deploys static `out/` directory
5. Provides production URL

**Expected Output:**
```
✔ Deployed to production
https://microsoft-copilot-agents.vercel.app
```

### Option 2: Deploy via Vercel Dashboard

#### Step 1: Push to Git Repository

```bash
cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site
git init
git add .
git commit -m "Initial blog site deployment"
git remote add origin <your-git-repo-url>
git push -u origin main
```

#### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel auto-detects Next.js settings
5. **Override Install Command**: `npm install --legacy-peer-deps`
6. Click "Deploy"

#### Step 3: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add custom domain (e.g., `copilot-agents.yourdomain.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning (automatic)

---

## Environment Variables

**None required** - This is a static blog site with no backend or API keys.

If you add environment variables later:

```bash
# Local (.env.local)
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Vercel Dashboard
Project Settings → Environment Variables → Add Variable
```

---

## Build Configuration

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static export for Vercel
  trailingSlash: true,
  images: {
    unoptimized: true,       // Required for static export
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

export default nextConfig
```

### vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "installCommand": "npm install --legacy-peer-deps"
}
```

### package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Troubleshooting

### Issue 1: Symlinks Not Working

**Symptom:** Blog posts or images don't load

**Solution:**
```bash
cd blog-site/public
rm -f content images
ln -s ../../content content
ln -s ../../images images
```

### Issue 2: Tailwind CSS Not Working

**Symptom:** No styling, plain HTML

**Solution:**
```bash
# Verify @tailwindcss/postcss is installed
npm list @tailwindcss/postcss

# If missing, reinstall:
npm install -D @tailwindcss/postcss --legacy-peer-deps
```

### Issue 3: TypeScript Errors During Build

**Symptom:** Build fails with type errors

**Solution:**
```bash
# Check tsconfig.json was auto-generated correctly
cat tsconfig.json

# If issues persist, delete .next and rebuild:
rm -rf .next
npm run build
```

### Issue 4: Dark Mode Not Working

**Symptom:** Theme toggle doesn't switch modes

**Solution:**
- Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check `next-themes` is installed: `npm list next-themes`
- Verify `ThemeProvider` in `app/layout.tsx`

### Issue 5: Vercel Build Fails

**Symptom:** Deployment fails on Vercel

**Solution:**
1. Check Vercel build logs for specific error
2. Ensure `vercel.json` specifies `--legacy-peer-deps`
3. Verify all dependencies are in `package.json` (not just `devDependencies`)

### Issue 6: Images Not Loading on Vercel

**Symptom:** Images 404 on production

**Solution:**
- Verify `public/images` symlink exists
- Check image paths start with `/images/` (absolute path)
- Ensure `images.unoptimized: true` in `next.config.js`

---

## Performance Optimization

### Build Time
- **Local:** ~30 seconds
- **Vercel:** ~45-60 seconds

### Page Load Time
- **Homepage:** < 2 seconds
- **Blog Post:** < 2 seconds
- **Images:** Lazy loaded

### Lighthouse Scores (Target)
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Optimization Checklist
- [x] Static export (pre-rendered HTML)
- [x] Code syntax highlighting (client-side)
- [x] Dark mode (client-side)
- [x] Responsive images
- [x] Minified CSS/JS
- [x] No external API calls

---

## Maintenance

### Adding New Blog Posts

1. Create markdown file in `/content/`:
   ```bash
   cp content/01-intro-copilot-agents.md content/13-new-blog.md
   ```

2. Update frontmatter (YAML):
   ```yaml
   ---
   title: "New Blog Title"
   subtitle: "Subtitle Here"
   readingTime: 15
   handsOnTime: 30
   difficulty: Beginner
   prerequisites:
     - "Prerequisite 1"
     - "Prerequisite 2"
   learningObjectives:
     - "Learning objective 1"
     - "Learning objective 2"
   lastUpdated: "2024-12-18"
   ---
   ```

3. Rebuild and redeploy:
   ```bash
   npm run build
   vercel --prod
   ```

### Updating Existing Blogs

1. Edit markdown file in `/content/`
2. Update `lastUpdated` date in frontmatter
3. Test locally: `npm run dev`
4. Rebuild and deploy

### Adding Images

1. Add images to `/images/` directory
2. Reference in markdown: `![Alt text](images/filename.png)`
3. Images are automatically served from `/images/` in production

---

## Deployment Checklist

Before deploying to production:

- [ ] All 12 blogs render correctly locally
- [ ] No console errors in browser DevTools
- [ ] Dark mode works throughout site
- [ ] Table of contents navigation works
- [ ] Code syntax highlighting displays properly
- [ ] Tables render with borders
- [ ] Responsive at 375px, 768px, 1024px breakpoints
- [ ] Build completes successfully (`npm run build`)
- [ ] Static export in `out/` directory works (`npx serve out`)
- [ ] Git repository is up to date
- [ ] vercel.json configuration is correct

---

## Support and Resources

**Documentation:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [Vercel Deployment](https://vercel.com/docs)

**Project Structure:**
```
blog-site/
├── app/
│   ├── page.tsx               # Homepage
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Tailwind CSS
│   └── blog/[slug]/
│       └── page.tsx           # Dynamic blog post page
├── components/
│   ├── BlogCard.tsx           # Blog card component
│   ├── BlogContent.tsx        # Blog content renderer
│   └── DarkModeToggle.tsx     # Dark mode toggle
├── lib/
│   └── blog.ts                # Blog loading utilities
├── public/
│   ├── content -> ../../content   # Symlink to blog posts
│   └── images -> ../../images     # Symlink to images
├── next.config.js             # Next.js configuration
├── vercel.json                # Vercel deployment config
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
```

---

## Version History

- **v1.0.0** (2024-12-18): Initial deployment
  - 12 blog posts
  - Microsoft Copilot Blue theme
  - Dark mode support
  - Static export for Vercel
  - Table of contents
  - Syntax highlighting
  - Responsive design

---

**Last Updated:** December 18, 2024
**Deployment Status:** Ready for Production ✅
