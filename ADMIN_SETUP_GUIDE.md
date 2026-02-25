# BetPro Network - Environment Variables

## Required Environment Variables

### Sanity CMS Configuration
```env
# Public variables (exposed to browser)
NEXT_PUBLIC_SANITY_PROJECT_ID=ol4jd4aa
NEXT_PUBLIC_SANITY_DATASET=production

# Private variable (server-side only) - Required for Admin Panel
SANITY_API_TOKEN=your_sanity_write_token_here
```

### Admin Authentication
```env
# Admin panel credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=betpro2026
```

## How to Get Your Sanity API Token

1. Go to https://www.sanity.io/manage
2. Select your project: **BetPro Network** (ol4jd4aa)
3. Click on **API** in the left sidebar
4. Click on **Tokens** tab
5. Click **Add API Token**
6. Give it a name: "BetPro Admin Panel"
7. Select permissions: **Editor** (read + write)
8. Click **Save**
9. Copy the token and add it to your `.env.local` file

## Setup Instructions

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in all the required values

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Security Notes

- Never commit `.env.local` to version control
- The `.env.example` file should NOT contain real values
- `SANITY_API_TOKEN` grants write access - keep it secure
- Change `ADMIN_PASSWORD` in production
- Consider using environment-specific passwords

## Vercel Deployment

Add these environment variables to your Vercel project:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add all variables from above
5. Redeploy your application
