'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../sanity/client'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  coverImage?: any
  isFromCMS?: boolean
}

interface BlogGridProps {
  initialPosts: BlogPost[]
}

export default function BlogGrid({ initialPosts }: BlogGridProps) {
  const [postsToShow, setPostsToShow] = useState(9)

  const displayedPosts = initialPosts.slice(0, postsToShow)
  const hasMorePosts = postsToShow < initialPosts.length

  return (
    <>
      {/* Stats */}
      <div className="mb-8 text-center">
        <p className="text-gray-600 text-lg">
          Showing <span className="font-semibold text-purple-600">{displayedPosts.length}</span> of <span className="font-semibold text-purple-600">{initialPosts.length}</span> articles
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post: BlogPost) => (
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
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
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

      {/* Load More Button */}
      {hasMorePosts && (
        <div className="text-center mt-12">
          <button
            onClick={() => setPostsToShow(prev => prev + 6)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Load More Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
