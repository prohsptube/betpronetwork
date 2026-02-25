import { NextResponse } from 'next/server'
import { client, writeClient } from '../../../../../sanity/client'

export async function GET() {
  try {
    const posts = await client.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        "coverImage": coverImage.asset->url,
        category,
        tags,
        author,
        publishedAt,
        featured
      }`
    )
    
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Create post using Sanity write client
    const result = await writeClient.create({
      _type: 'blogPost',
      ...data,
    })
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
