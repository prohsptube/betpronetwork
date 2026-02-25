# 🗺️ Sitemap Update Guide

## Current Sitemap Configuration

Your sitemap is now configured to:
- ✅ **Auto-update every 60 seconds** when accessed
- ✅ **Fetch all posts from Sanity** dynamically
- ✅ **Prioritize Pakistan-optimized posts** (higher ranking)
- ✅ **Use latest update dates** (_updatedAt field)
- ✅ **Include all static pages** (homepage, blog listing)

## Sitemap Location

**Production:** `https://www.betpronetwork.com/sitemap.xml`  
**Local:** `http://localhost:3000/sitemap.xml`

---

## How Auto-Update Works

### When Posts Are Published from Admin:

1. You publish a post in `/admin` (Sanity)
2. Post is saved to Sanity database
3. Next time someone accesses the sitemap (within 60 seconds), it regenerates
4. Google crawls the sitemap and discovers new post
5. New post gets indexed by Google

### Revalidation Cycle:
- **Frequency:** 60 seconds (1 minute)
- **Trigger:** When someone/something requests `sitemap.xml`
- **Data Source:** Live from Sanity CMS
- **Smart Caching:** Next.js caches for 60 seconds, then regenerates

---

## Manual Sitemap Refresh (Instant Update)

If you need to **immediately** update the sitemap after publishing:

### Option 1: API Call
Visit this URL in your browser:
```
https://www.betpronetwork.com/api/revalidate-sitemap
```

This instantly refreshes:
- ✅ Sitemap.xml
- ✅ Blog listing page
- ✅ Forces cache clear

### Option 2: Simple Sitemap Access
Just visit:
```
https://www.betpronetwork.com/sitemap.xml
```

If 60 seconds have passed since last access, it auto-regenerates.

---

## What's Included in Sitemap

### Static Pages (Always Included):
1. **Homepage** (`/`)
   - Priority: 1.0
   - Change Frequency: Daily

2. **Blog Listing** (`/blog`)
   - Priority: 0.9
   - Change Frequency: Daily

### Dynamic Blog Posts (From Sanity):
- **All published posts** from your admin panel
- **Priority:** 
  - Featured posts: 0.9
  - Pakistan-targeted posts: 0.85
  - Regular posts: 0.8
- **Last Modified:** Uses `_updatedAt` from Sanity
- **Change Frequency:** Weekly

### What's NOT Included:
- ❌ `/admin` (disallowed in robots.txt)
- ❌ `/api` routes (disallowed in robots.txt)
- ❌ Draft posts (only published posts appear)

---

## Old Static Blog Posts

You still have these old static blog folders:
- `blog/pakistan-vs-india-t20-preview/`
- `blog/psl-2026-betting-guide/`
- `blog/ipl-betting-tips-gulf-countries/`
- `blog/cricket-betting-guide-beginners/`

### Options:

#### Option A: Migrate to Sanity (Recommended)
1. Go to `/admin`
2. Create new posts with the same slugs
3. Copy content from old posts
4. Delete old folders after migration
5. **Benefit:** Full SEO control, easier management

#### Option B: Keep Static Posts
- They will still be accessible via direct URLs
- They won't appear in sitemap (sitemap only shows Sanity posts)
- Google may continue to index them
- You lose the new SEO features for these posts

**Recommendation:** Migrate to Sanity for consistent SEO management.

---

## Submit Sitemap to Google

### Google Search Console Setup:

1. **Go to:** https://search.google.com/search-console
2. **Add Property:** `www.betpronetwork.com`
3. **Verify ownership:**
   - Use HTML tag method
   - Or use Google Analytics verification
   - Or use DNS verification

4. **Submit Sitemap:**
   - Go to "Sitemaps" in left menu
   - Enter: `sitemap.xml`
   - Click "Submit"

5. **Google will:**
   - Crawl your sitemap
   - Discover all blog posts
   - Index them in search results
   - Check for updates regularly

### Expected Timeline:
- **Sitemap submission:** Instant
- **First crawl:** 1-3 days
- **Indexing:** 3-7 days
- **Ranking:** 2-4 weeks

---

## Sitemap for Other Search Engines

### Bing Webmaster Tools:
1. Go to: https://www.bing.com/webmasters
2. Add site: `www.betpronetwork.com`
3. Submit sitemap: `https://www.betpronetwork.com/sitemap.xml`

### Yandex (Russia):
1. Go to: https://webmaster.yandex.com
2. Add site
3. Submit sitemap

---

## Testing Your Sitemap

### Check Sitemap Validity:
1. Visit: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Enter: `https://www.betpronetwork.com/sitemap.xml`
3. Validate

### Check What's Included:
1. Open sitemap in browser: `https://www.betpronetwork.com/sitemap.xml`
2. You should see:
   - All your Sanity blog posts
   - Homepage
   - Blog listing page
   - Proper dates and priorities

### Check Logs (Production):
When sitemap regenerates, you'll see logs like:
```
[Sitemap] Fetched 3 blog posts from Sanity
[Sitemap] Adding post: pakistan-vs-india-showdown (2026-02-25)
[Sitemap] Adding post: betpro-review-pakistan-gulf (2026-02-24)
[Sitemap] Adding post: pakistan-refuses-india-t20 (2026-02-23)
[Sitemap] Total URLs: 5
```

---

## Sitemap SEO Features

### Pakistan Optimization:
- Posts with Pakistan regions selected get higher priority (0.85)
- Featured posts get highest priority (0.9)
- Regular posts get standard priority (0.8)

### Smart Last Modified:
- Uses `_updatedAt` from Sanity (when you last edited)
- Falls back to `publishedAt` if no updates
- Tells Google when content changed (important for re-indexing)

### Auto-Discovery:
- Google automatically finds new posts
- No manual work needed
- Updates propagate within 60 seconds

---

## Troubleshooting

### Sitemap shows old posts or missing new posts?

**Solution 1:** Wait 60 seconds and refresh
```
https://www.betpronetwork.com/sitemap.xml?t=123
```
(Add ?t parameter to bypass browser cache)

**Solution 2:** Force refresh via API
```
https://www.betpronetwork.com/api/revalidate-sitemap
```

**Solution 3:** Check Sanity
- Go to `/admin`
- Verify post is **published** (not draft)
- Check slug is valid (no spaces, special chars)

### Google not finding new posts?

1. **Check Google Search Console:**
   - Look for crawl errors
   - Check index coverage
   - See when sitemap was last fetched

2. **Request Indexing:**
   - Go to URL Inspection tool
   - Enter your blog post URL
   - Click "Request Indexing"

3. **Check robots.txt:**
   ```
   https://www.betpronetwork.com/robots.txt
   ```
   Make sure blog posts aren't disallowed

### Sitemap returns error?

- Check if Sanity is accessible
- Check environment variables (NEXT_PUBLIC_SANITY_PROJECT_ID)
- Check server logs for errors
- Verify Sanity query is working

---

## Best Practices

### After Publishing New Post:

1. ✅ Publish from `/admin`
2. ✅ Wait 60 seconds (or force refresh via API)
3. ✅ Check sitemap includes new post
4. ✅ Submit URL to Google Search Console (optional, for faster indexing)
5. ✅ Share on social media (drives traffic, helps SEO)

### Regular Maintenance:

- **Weekly:** Check Google Search Console for coverage issues
- **Monthly:** Review which posts are ranking
- **Quarterly:** Update old posts (Google loves fresh content)
- **When needed:** Force sitemap refresh after bulk updates

---

## Summary

Your sitemap now:
- ✅ Auto-updates every 60 seconds
- ✅ Includes all Sanity posts
- ✅ Prioritizes Pakistan-optimized content  
- ✅ Uses accurate last-modified dates
- ✅ Can be manually refreshed instantly
- ✅ Properly configured in robots.txt
- ✅ Ready for Google Search Console submission

**No manual work needed** - publish from admin and sitemap updates automatically! 🚀
