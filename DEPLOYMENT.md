# Vercel Deployment Guide

## Prerequisites
- Git installed
- GitHub account (to host repository)
- Vercel account (free at https://vercel.com)

## Step-by-Step Deployment

### 1. Initialize Git Repository

From the project root (`dutch-taxi-transfers/`):

```bash
git init
git add .
git commit -m "Initial commit: Dutch Taxi Transfers SEO-optimized Next.js site"
```

### 2. Push to GitHub

Create a new repository on GitHub (https://github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dutch-taxi-transfers.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**

1. Go to https://vercel.com/new
2. Click "Continue with GitHub"
3. Select your `dutch-taxi-transfers` repository
4. Configure:
   - **Project Name:** `dutch-taxi-transfers`
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
5. Click "Deploy"
6. Wait for deployment to complete

**Option B: Via Vercel CLI**

```bash
npm install -g vercel
vercel
# Follow the interactive prompts
```

### 4. Configure Environment Variables (if needed)

In Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_APP_URL = https://your-domain.vercel.app
```

### 5. Set Custom Domain (Optional)

In Vercel Dashboard → Project Settings → Domains:

1. Click "Add Domain"
2. Enter your domain (e.g., `dutchtaxitransfers.nl`)
3. Update DNS records as instructed

### 6. Verify Deployment

- Visit: `https://dutch-taxi-transfers.vercel.app`
- Test homepage and all service pages
- Check schema markup: Use [Google Rich Results Test](https://search.google.com/test/rich-results)

## Post-Deployment Tasks

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Validate schema markup on each page
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics 4
- [ ] Test booking CTAs
- [ ] Monitor Core Web Vitals in Vercel Analytics

## Rollback (if needed)

On Vercel Dashboard → Deployments:
1. Find the previous stable deployment
2. Click "..." → "Promote to Production"

## Build & Deployment Logs

- View in Vercel Dashboard → Deployments tab
- Download logs for debugging

## Questions?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
