# Vercel Deployment Steps

## Quick Deploy (Via Dashboard - RECOMMENDED)

The blog site is ready to deploy! Follow these steps:

### 1. Open Vercel Dashboard
Visit: https://vercel.com/manu-mulaveesalas-projects/microsoft-copilot-agents

### 2. Configure Root Directory
1. Go to **Settings** → **General**
2. Scroll to **Root Directory**
3. Click **Edit**
4. Enter: `blog-site`
5. Click **Save**

### 3. Trigger New Deployment
1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Click **Redeploy**
4. Check **Use existing Build Cache** = OFF
5. Click **Redeploy**

### 4. Wait for Build (~2-3 minutes)
The build will:
- Install dependencies in `blog-site/`
- Run prebuild script (copies content and images)
- Build all 12 blog posts as static HTML
- Deploy to Vercel CDN

### 5. Verify Deployment
Once complete, visit your production URL:
- **Production**: `https://microsoft-copilot-agents.vercel.app`
- Or the deployment URL shown in the dashboard

---

## What Gets Built

✅ **Homepage**: Blog series overview with 4 arcs
✅ **12 Blog Posts**: All blogs pre-rendered as static HTML
✅ **21 Diagrams**: All images loaded from `/images/`
✅ **Dark Mode**: Theme toggle working
✅ **Responsive**: Mobile, tablet, desktop layouts
✅ **SEO**: Meta tags, Open Graph, sitemap

---

## Expected Build Output

```
Route (app)
┌ ○ /                          (homepage)
├ ○ /_not-found               (404 page)
└ ● /blog/[slug]              (12 blog posts)
  ├ /blog/01-intro-copilot-agents
  ├ /blog/02-first-conversational-agent
  ├ /blog/03-knowledge-agents
  ├ /blog/04-agent-flows-automation
  ├ /blog/05-flows-automation
  ├ /blog/06-deployment-channels
  ├ /blog/07-security-governance
  ├ /blog/08-security-compliance
  ├ /blog/09-multi-channel
  ├ /blog/10-advanced-automation
  ├ /blog/11-measuring-roi
  └ /blog/12-scaling-adoption

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML
```

Total: **15 static pages** (homepage + 12 blogs + 404 + metadata)

---

## Troubleshooting

### Build Still Failing?

**Issue**: "No Next.js version detected"
**Solution**: Ensure Root Directory is set to `blog-site` in dashboard settings

**Issue**: "Content not found"
**Solution**: The prebuild script (`scripts/copy-content.js`) should run automatically. Check build logs for:
```
📦 Copying content for Vercel deployment...
✅ Copied 12 files from content/
✅ Copied 21 files from images/
```

### Custom Domain (Optional)

After successful deployment:
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Alternative: Deploy from Different Repository

If you prefer a cleaner setup:

1. **Create new repo with only blog-site/**:
   ```bash
   cd /Users/manu/Documents/LUXOR/blogs/microsoft-copilot-agents/blog-site
   git init
   git add .
   git commit -m "Microsoft Copilot Agents blog site"
   gh repo create copilot-blog-site --public --source=. --push
   ```

2. **Copy content before committing**:
   ```bash
   cp -r ../content ./content
   cp -r ../images ./public/images
   git add content public/images
   git commit -m "Add blog content and images"
   git push
   ```

3. **Import to Vercel**:
   - Import from GitHub: `copilot-blog-site`
   - Root Directory: `.` (root)
   - Framework: Next.js (auto-detected)
   - Deploy!

---

## GitHub Repository

✅ **Repository**: https://github.com/manutej/microsoft-copilot-agents-blog
✅ **Vercel Project**: https://vercel.com/manu-mulaveesalas-projects/microsoft-copilot-agents

---

## Next Steps After Deployment

1. ✅ **Test all 12 blog posts** render correctly
2. ✅ **Verify images** load on all blogs
3. ✅ **Test dark mode** toggle
4. ✅ **Check mobile** responsiveness
5. ✅ **Test navigation** (Previous/Next links)
6. ⏳ **Add custom domain** (optional)
7. ⏳ **Configure analytics** (optional)
8. ⏳ **Share with stakeholders**

---

**Status**: Ready to deploy via Vercel dashboard configuration ✅
