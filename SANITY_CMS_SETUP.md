# 🎨 Sanity CMS Setup Guide - BetPro Network

## ✅ What's Installed

Sanity CMS is now integrated into your BetPro Network website! You'll have a beautiful admin panel to manage blog posts.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Create Sanity Account (2 minutes)

1. Go to https://www.sanity.io/
2. Click **"Get Started"**
3. Sign up with:
   - GitHub (recommended)
   - Google
   - Email

### Step 2: Create Project (2 minutes)

After signing in:
1. Click **"Create New Project"**
2. Project Name: **BetPro Network**
3. Dataset: **Production** (default)
4. Copy your **Project ID** (looks like: `abc123xy`)

### Step 3: Add Project ID to Your Code

Open these 2 files and replace `'your-project-id'`:

**File 1:** `sanity.config.ts`
```typescript
projectId: 'abc123xy', // ← Paste your Project ID here
```

**File 2:** `sanity/client.ts`
```typescript
projectId: 'abc123xy', // ← Paste your Project ID here
```

---

## 🎯 Access Your Admin Panel

Once you've added your Project ID:

### **PRODUCTION (Live Site) - RECOMMENDED:**

**Open admin panel:**
```
https://www.betpronetwork.com/admin
```

**Login** with your Sanity account

✅ **This is the URL you should use for managing blog posts!**

---

### **Development (Local Testing Only):**

If you want to test locally before publishing:

1. **Start the local server:**
   ```bash
   npm run dev
   ```

2. **Open local admin panel:**
   ```
   http://localhost:3000/admin
   ```

3. **Login** with your Sanity account

---

## ✨ How to Create Your First Blog Post

### From the Admin Panel:

1. Go to https://www.betpronetwork.com/admin
2. Click **"Blog Posts"** in the sidebar
3. Click **"+ Create"** button
4. Fill in:
   - **Title:** "PSL 2026 Betting Guide"
   - **Slug:** Click "Generate" (auto-creates URL)
   - **Excerpt:** Short description (2-3 sentences)
   - **Cover Image:** Upload image (drag & drop)
   - **Content:** Write your article (rich text editor)
   - **Category:** Select from dropdown
   - **Tags:** Add keywords (optional)
   - **Featured:** Check to show on homepage
   - **SEO Settings:** Meta title & description

5. Click **"Publish"** button

---

## 📝 Admin Panel Features

### What You Can Do:

✅ **Add New Posts** - Click "+ Create" button  
✅ **Edit Posts** - Click any post to edit  
✅ **Delete Posts** - Click "..." menu → Delete  
✅ **Upload Images** - Drag & drop images  
✅ **Preview** - See how post looks before publishing  
✅ **Schedule** - Set future publish dates  
✅ **SEO** - Set meta tags, descriptions, keywords  
✅ **Categories** - Organize by Cricket, Football, Casino, etc.  
✅ **Featured Posts** - Mark important posts to show first  

---

## 🔧 Current Status

### ✅ Installed & Ready:
- Sanity CMS packages
- Admin panel at `/admin`
- Blog post schema
- Image uploads
- Rich text editor
- SEO fields
- Categories & tags

### 🔄 Next Steps (Optional):
Your existing blog posts are still file-based. You can:
1. **Keep them** - They'll work alongside CMS posts
2. **Migrate them** - Copy content into CMS (manually)
3. **Use both** - CMS for new posts, files for old ones

---

## 📱 Admin Panel URL

**✅ Production (Use This for Managing Blog Posts):**
```
https://www.betpronetwork.com/admin
```

**Local Development (For Testing Only):**
```
http://localhost:3000/admin
```

**Login:** Use your Sanity account (created at sanity.io)

---

## 🎨 Blog Post Fields Explained

| Field | What It Does | Required |
|-------|--------------|----------|
| **Title** | Post headline | ✅ Yes |
| **Slug** | URL (auto-generated from title) | ✅ Yes |
| **Excerpt** | Short description for listings | ✅ Yes |
| **Cover Image** | Main image (shows in listings) | No |
| **Content** | Full article (rich text editor) | No |
| **Category** | Cricket, Football, Casino, etc. | No |
| **Tags** | Keywords for search | No |
| **Author** | Who wrote it (default: "BetPro Team") | No |
| **Published Date** | When to publish (default: now) | No |
| **Featured** | Show on homepage | No |
| **SEO Settings** | Meta tags for Google | No |

---

## 🖼️ How to Add Images

1. **Cover Image:**
   - Click "Upload" or drag & drop
   - Recommended size: 1200x630px
   - Formats: JPG, PNG, WebP

2. **Images in Content:**
   - Click "+" button in content
   - Select "Image" block
   - Upload or drag & drop

---

## 🔐 Managing Users

### Add Team Members:

1. Go to https://www.sanity.io/manage
2. Select **"BetPro Network"** project
3. Click **"Members"**
4. Click **"Invite Member"**
5. Enter email
6. Set role:
   - **Administrator** - Full access
   - **Editor** - Can edit, can't change settings
   - **Viewer** - Read-only

**Free Tier:** 3 users included

---

## 🚀 After Deployment

When you deploy to Vercel/Netlify:

1. **Add Environment Variable:**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xy
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. **Admin Panel URL:**
   ```
   https://yourdomain.com/admin
   ```

3. **CORS Settings:**
   - Go to https://www.sanity.io/manage
   - Select project
   - Settings → API
   - Add your domain to CORS origins:
     - `https://yourdomain.com`
     - `https://*.vercel.app` (if using Vercel)

---

## 💡 Quick Tips

### Writing Great Blog Posts:

1. **Title:** 50-60 characters max
2. **Excerpt:** 150-160 characters
3. **Content:** Use headings (H2, H3) to organize
4. **Images:** Add 2-3 images per post
5. **SEO:** Fill out meta description (155 characters)
6. **Tags:** 3-5 relevant keywords
7. **Category:** Always select one

### Best Practices:

✅ Save drafts frequently (auto-saves every 30s)  
✅ Preview before publishing  
✅ Use featured posts for important news  
✅ Add alt text to images (for SEO)  
✅ Check post on mobile after publishing  

---

## 🎯 What Happens Next?

### Current Blog System:
Your current blogs are still files in `src/app/blog/`. They'll continue to work.

### CMS Blogs (Future):
Once you add your Project ID and create posts in CMS, you can:
- **Option 1:** Update blog page to fetch from CMS
- **Option 2:** Keep both (file-based + CMS)
- **Option 3:** Migrate old posts to CMS manually

**For now:** Your site works as-is. The CMS is ready when you are!

---

## 📞 Need Help?

### Common Issues:

**Can't access /admin?**
- **On Production (betpronetwork.com):** Just visit https://www.betpronetwork.com/admin and login
- **On Local:** Make sure `npm run dev` is running, then visit http://localhost:3000/admin
- Check you added Project ID to both files (.env.local and sanity.config.ts)

**Login not working?**
- Clear browser cache
- Try incognito mode
- Make sure you're logged into Sanity.io

**Images not uploading?**
- Check file size (max 10MB)
- Use JPG, PNG, or WebP format
- Check internet connection

---

## 🎉 You're All Set!

1. ✅ Sanity CMS installed
2. ⏳ Create account at sanity.io
3. ⏳ Add Project ID to config files
4. ⏳ Access admin at /admin
5. ⏳ Create your first blog post

**Next:** Get your Project ID and start posting!

---

## 📝 Quick Reference

**Admin Panel:** http://localhost:3001/admin  
**Sanity Dashboard:** https://www.sanity.io/manage  
**Documentation:** https://www.sanity.io/docs  

**Free Tier Includes:**
- Unlimited content
- 3 users
- Image hosting
- API requests
- Admin panel

**Upgrade if you need:**
- More users ($10/user/month)
- More bandwidth
- Priority support
