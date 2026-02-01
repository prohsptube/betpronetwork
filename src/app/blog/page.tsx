import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '../../../sanity/client'
import { urlFor } from '../../../sanity/client'

export const metadata: Metadata = {
  title: 'Cricket News & Betting Tips - BetPro Network Blog',
  description: 'Read latest cricket news, match previews, betting tips, and expert analysis for Pakistan, UAE, and Gulf countries. Daily updates on PSL, IPL, T20, and more.',
  keywords: 'cricket news Pakistan, betting tips, PSL news, IPL betting, cricket analysis, sports news UAE',
}

export const revalidate = 60 // Revalidate every 60 seconds

async function getBlogPosts() {
  try {
    const posts = await getAllBlogPosts()
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

const legacyBlogPosts = [
  {
    slug: 'pakistan-vs-india-t20-preview',
    title: 'Pakistan vs India T20 Match Preview & Betting Tips',
    excerpt: 'Complete analysis and betting odds for the upcoming Pakistan vs India T20 showdown. Expert predictions and tips for the biggest match of the year.',
    date: 'February 1, 2026',
    category: 'Match Preview',
    readTime: '8 min read',
  },
  {
    slug: 'psl-2026-betting-guide',
    title: 'PSL 2026 Complete Betting Guide for Pakistan',
    excerpt: 'Everything you need to know about betting on Pakistan Super League 2026. Team analysis, player form, and best betting strategies.',
    date: 'January 30, 2026',
    category: 'League Guide',
    readTime: '12 min read',
  },
  {
    slug: 'ipl-betting-tips-gulf-countries',
    title: 'IPL Betting Tips for UAE & Gulf Countries',
    excerpt: 'Expert betting strategies for IPL matches with the best odds. Learn how to maximize your winnings on Indian Premier League.',
    date: 'January 28, 2026',
    category: 'Betting Tips',
    readTime: '10 min read',
  },
  {
    slug: 'cricket-betting-guide-beginners',
    title: 'Cricket Betting Guide for Beginners in Pakistan',
    excerpt: 'New to cricket betting? This comprehensive guide covers everything from basic terms to advanced strategies for Pakistani bettors.',
    date: 'January 25, 2026',
    category: 'Beginners Guide',
    readTime: '15 min read',
  },
  {
    slug: 'online-casino-games-guide-uae',
    title: 'Online Casino Games Guide for UAE Players',
    excerpt: 'Discover the best online casino games available for UAE players. From slots to live dealer games, we cover everything.',
    date: 'January 20, 2026',
    category: 'Casino Guide',
    readTime: '9 min read',
  },
]

export default async function BlogPage() {
  const sanityPosts = await getBlogPosts()
  
  // Combine Sanity posts with legacy posts
  const allPosts = [
    ...sanityPosts.map((post: any) => ({
      slug: post.slug.current,
      title: post.title,
      excerpt: post.excerpt,
      date: new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: post.category || 'News',
      readTime: '5 min read',
      coverImage: post.coverImage,
      isFromCMS: true,
    })),
    ...legacyBlogPosts,
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="copilot-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BetPro Network Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with latest cricket news, betting tips, match previews, and expert analysis
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post: any) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  {post.coverImage ? (
                    <div className="h-48 relative">
                      <Image
                        src={urlFor(post.coverImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-purple-600">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-3">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      {post.isFromCMS && (
                        <>
                          <span>•</span>
                          <span className="text-green-600 font-semibold">New</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="text-purple-600 font-semibold inline-flex items-center gap-2">
                      Read Full Article
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Betting?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your BetPro ID now and start winning today!
          </p>
          <a 
            href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            WhatsApp: +92 300 0539152
          </a>
        </div>
      </section>
    </main>
  )
}
