import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '../../../sanity/client'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogGrid from '../../components/BlogGrid'

export const metadata: Metadata = {
  title: 'Cricket News & Betting Tips - BetPro Network Blog',
  description: 'Read latest cricket news, match previews, betting tips, and expert analysis for Pakistan, UAE, and Gulf countries. Daily updates on PSL, IPL, T20, and more.',
  keywords: 'cricket news Pakistan, betting tips, PSL news, IPL betting, cricket analysis, sports news UAE',
  openGraph: {
    title: 'Cricket News & Betting Tips - BetPro Network Blog',
    description: 'Daily cricket news, match previews, and betting tips for Pakistan & Gulf countries',
    url: 'https://www.betpronetwork.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.betpronetwork.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'BetPro Network Blog - Cricket News & Betting Tips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cricket News & Betting Tips - BetPro Network',
    description: 'Daily cricket news and betting tips',
    images: ['https://www.betpronetwork.com/logo.png'],
  },
  alternates: {
    canonical: 'https://www.betpronetwork.com/blog',
  },
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
]

export default async function BlogPage() {
  const sanityPosts = await getBlogPosts()
  
  // Combine Sanity posts with legacy posts
  const allPosts = [
    ...sanityPosts.map((post: any) => ({
      slug: post.slug.current,
      title: post.title,
      excerpt: post.excerpt || 'Read the full article for more details.',
      date: new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: post.category || 'News',
      readTime: '5 min read',
      coverImage: post.coverImage,
      isFromCMS: true,
    })),
    ...legacyBlogPosts,
  ]

  // Schema.org structured data for blog page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "BetPro Network Blog - Cricket News & Betting Tips",
    "description": "Latest cricket news, match previews, betting tips, and expert analysis for Pakistan, UAE, and Gulf countries",
    "url": "https://www.betpronetwork.com/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allPosts.slice(0, 10).map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.betpronetwork.com/blog/${post.slug}`
      }))
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="copilot-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
          <div className="text-center text-white mt-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BetPro Network Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with latest cricket news, betting tips, match previews, and expert analysis
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to the <strong>BetPro Network Blog</strong>, your ultimate source for cricket news, betting tips, and expert analysis in <strong>Pakistan, UAE, Saudi Arabia, Qatar, and Gulf countries</strong>. Our team of sports analysts provides daily updates on <strong>PSL (Pakistan Super League)</strong>, <strong>IPL (Indian Premier League)</strong>, <strong>T20 World Cup</strong>, and international cricket matches.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're looking for <strong>cricket betting strategies</strong>, <strong>match previews</strong>, <strong>player statistics</strong>, or <strong>casino betting guides</strong>, our blog covers everything you need to make informed betting decisions. Get access to <strong>expert betting tips</strong>, <strong>odds analysis</strong>, and <strong>live match predictions</strong> from seasoned professionals in the sports betting industry.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid initialPosts={allPosts} />
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
