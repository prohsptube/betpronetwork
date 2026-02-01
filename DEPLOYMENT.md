# Deployment Guide for BetPro Network

This guide will help you deploy your BetPro Network website to production.

## Option 1: Deploy to Vercel (Recommended - Free)

Vercel is the company behind Next.js and offers the best integration.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Install Vercel CLI (Optional)**
   ```bash
   npm install -g vercel
   ```

3. **Deploy via GitHub**
   - Push your code to GitHub
   - Go to Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

4. **Deploy via CLI**
   ```bash
   cd D:\ClientsWorking\betpronetwork
   vercel
   ```
   Follow the prompts to deploy.

5. **Custom Domain**
   - In Vercel dashboard, go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., betpronetwork.com)
   - Update your domain's DNS settings as instructed

## Option 2: Deploy to Netlify

### Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up

2. **Build Command**
   ```bash
   npm run build
   ```

3. **Publish Directory**
   ```
   .next
   ```

4. **Deploy**
   - Connect your GitHub repository
   - Netlify will auto-detect Next.js
   - Click "Deploy Site"

## Option 3: Deploy to Your Own Server

### Requirements:
- Node.js 18+ installed
- PM2 for process management

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Start the application**
   ```bash
   pm2 start npm --name "betpronetwork" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx (Reverse Proxy)**
   ```nginx
   server {
       listen 80;
       server_name betpronetwork.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d betpronetwork.com
   ```

## Environment Variables

Before deploying, create a `.env.local` file:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://betpronetwork.com

# WhatsApp Number (already in code, but can be moved here)
NEXT_PUBLIC_WHATSAPP_NUMBER=+923001234567

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify WhatsApp button works
- [ ] Check mobile responsiveness
- [ ] Test all blog articles
- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Setup Google Analytics (optional)
- [ ] Setup Facebook Pixel (optional)
- [ ] Test page load speed with PageSpeed Insights
- [ ] Verify SSL certificate is working

## SEO Setup After Deployment

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property
   - Verify ownership
   - Submit sitemap: `https://betpronetwork.com/sitemap.xml`

2. **Google Analytics** (Optional)
   - Create GA4 property
   - Add tracking code to your site
   - Monitor traffic

3. **Social Media Meta Tags**
   - Already included in the code
   - Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## Performance Optimization

The site is already optimized, but you can:

1. **Enable Image Optimization**
   - Already configured in `next.config.js`

2. **Add CDN** (Vercel/Netlify do this automatically)

3. **Enable Caching**
   - Vercel/Netlify handle this automatically

## Monitoring

1. **Vercel Analytics** (if using Vercel)
   - Automatically enabled
   - Shows real-time performance

2. **Error Tracking** (Optional)
   - Setup [Sentry](https://sentry.io)
   - Add to `next.config.js`

## Maintenance

### Updating Content

To add new blog posts:
1. Create new folder in `src/app/blog/your-new-post/`
2. Copy `page.tsx` from existing post
3. Update content
4. Update `src/app/blog/page.tsx` to include new post in list
5. Deploy changes

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Troubleshooting

**Build Fails**
- Check all imports are correct
- Verify all dependencies are installed
- Check for TypeScript errors

**Images Not Loading**
- Verify image URLs in `next.config.js`
- Check image paths are correct

**WhatsApp Button Not Working**
- Verify phone number format: +923001234567
- Test link directly in browser

## Support

For deployment issues:
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)

## Cost Estimate

- **Vercel/Netlify Free Tier**: $0/month (sufficient for starting)
- **Custom Domain**: ~$10-15/year
- **SSL Certificate**: Free (Let's Encrypt)
- **Hosting (if self-hosted)**: $5-20/month depending on traffic

## Recommended First Deployment: Vercel

**Why Vercel?**
- Free SSL
- Automatic CDN
- Zero configuration
- Automatic deployments from Git
- Best Next.js support
- Free tier is generous

Simply connect your GitHub repo and deploy in 2 minutes!
