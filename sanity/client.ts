import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ol4jd4aa',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to fetch all blog posts
export async function getAllBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      tags,
      author,
      publishedAt,
      featured
    }`
  )
}

// Helper function to fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      content,
      category,
      tags,
      author,
      publishedAt,
      seo
    }`,
    { slug }
  )
}

// Helper function to fetch featured posts
export async function getFeaturedPosts(limit: number = 3) {
  return client.fetch(
    `*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      publishedAt
    }`
  )
}
