import { NextResponse } from 'next/server'
import { client, writeClient } from '../../../../../../sanity/client'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await client.fetch(
      `*[_type == "blogPost" && _id == $id][0]`,
      { id: params.id }
    )
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    
    const result = await writeClient
      .patch(params.id)
      .set(data)
      .commit()
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await writeClient.delete(params.id)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
