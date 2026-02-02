import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '../../sanity/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.betpronetwork.com'
  
  // Get all blog posts from Sanity
  let blogPosts: any[] = []
  try {
    blogPosts = await getAllBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Legacy blog posts
  const legacyBlogPosts = [
    'pakistan-vs-india-t20-preview',
    'psl-2026-betting-guide',
    'ipl-betting-tips-gulf-countries',
    'cricket-betting-guide-beginners',
    'online-casino-games-guide-uae',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-01-25'),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic blog posts from Sanity
  const dynamicBlogPosts = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt || post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...legacyBlogPosts, ...dynamicBlogPosts]
}
