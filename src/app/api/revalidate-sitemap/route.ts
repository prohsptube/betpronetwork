import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * API route to manually trigger sitemap revalidation
 * Usage: GET https://www.betpronetwork.com/api/revalidate-sitemap
 * 
 * Call this after publishing new posts to immediately update sitemap
 */
export async function GET() {
  try {
    // Revalidate the sitemap
    revalidatePath('/sitemap.xml')
    
    // Also revalidate blog listing
    revalidatePath('/blog')
    
    console.log('[Revalidate] Sitemap and blog revalidated successfully')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Sitemap and blog revalidated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('[Revalidate] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to revalidate',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
