import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '../../sanity/client'

export const revalidate = 3600 // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.betpronetwork.com'
  
  // Get all blog posts from Sanity
  let blogPosts: any[] = []
  try {
    blogPosts = await getAllBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
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

  // Legacy blog posts with proper last modified dates
  const legacyBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/pakistan-vs-india-t20-preview`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/psl-2026-betting-guide`,
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ipl-betting-tips-gulf-countries`,
      lastModified: new Date('2026-01-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cricket-betting-guide-beginners`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Dynamic blog posts from Sanity with proper typing
  const dynamicBlogPosts: MetadataRoute.Sitemap = blogPosts
    .filter((post: any) => post.slug?.current) // Only include posts with valid slugs
    .map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: post.featured ? 0.9 : 0.8,
    }))

  return [...staticPages, ...legacyBlogPosts, ...dynamicBlogPosts]
}
