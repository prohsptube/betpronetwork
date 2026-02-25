import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '../../sanity/client'

export const revalidate = 60 // Revalidate sitemap every minute for quick updates

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.betpronetwork.com'
  
  // Get all blog posts from Sanity
  let blogPosts: any[] = []
  try {
    blogPosts = await getAllBlogPosts()
    console.log(`[Sitemap] Fetched ${blogPosts.length} blog posts from Sanity`)
  } catch (error) {
    console.error('[Sitemap] Error fetching blog posts:', error)
  }

  // Static pages with proper dates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Dynamic blog posts from Sanity with enhanced SEO
  const dynamicBlogPosts: MetadataRoute.Sitemap = blogPosts
    .filter((post: any) => post.slug?.current) // Only include posts with valid slugs
    .map((post: any) => {
      // Use _updatedAt for lastModified (more accurate than publishedAt for content changes)
      const lastModified = post._updatedAt 
        ? new Date(post._updatedAt) 
        : post.publishedAt 
        ? new Date(post.publishedAt) 
        : new Date()
      
      // Higher priority for featured posts and Pakistan-targeted posts
      let priority = 0.8
      if (post.featured) priority = 0.9
      if (post.seoRegions && post.seoRegions.length > 0) priority = 0.85
      
      console.log(`[Sitemap] Adding post: ${post.slug.current} (${lastModified.toISOString()})`)
      
      return {
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority,
      }
    })

  console.log(`[Sitemap] Total URLs: ${staticPages.length + dynamicBlogPosts.length}`)
  return [...staticPages, ...dynamicBlogPosts]
}
