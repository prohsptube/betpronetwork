import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://betpronetwork.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
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
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
