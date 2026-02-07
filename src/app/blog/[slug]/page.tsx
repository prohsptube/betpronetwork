import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug, urlFor } from '../../../../sanity/client'
import { PortableText } from '@portabletext/react'
import { FaWhatsapp } from 'react-icons/fa'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const revalidate = 60

interface PageProps {
  params: {
    slug: string
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found - BetPro Network',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const pageUrl = `https://www.betpronetwork.com/blog/${params.slug}`
  const imageUrl = post.coverImage 
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : 'https://www.betpronetwork.com/logo.png'

  // Use SEO fields from Sanity CMS if available, with intelligent fallbacks
  const metaTitle = post.seo?.metaTitle || `${post.title} - BetPro Network Blog`
  const metaDescription = post.seo?.metaDescription || post.excerpt || `Read ${post.title} on BetPro Network. Latest cricket news, betting tips, and expert analysis for Pakistan & Gulf countries.`
  const keywords = post.seo?.keywords?.join(', ') || post.tags?.join(', ') || 'cricket betting, online betting Pakistan, sports betting'

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    authors: [{ name: post.author || 'BetPro Network' }],
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: metaDescription,
      url: pageUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: [post.author || 'BetPro Network'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: 'BetPro Network',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: metaDescription,
      images: [imageUrl],
      creator: '@betpronetwork',
      site: '@betpronetwork',
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function CMSBlogPost({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Use SEO fields with intelligent fallbacks for schema
  const schemaDescription = post.seo?.metaDescription || post.excerpt || `Read ${post.title} on BetPro Network`
  const schemaKeywords = post.seo?.keywords?.join(', ') || post.tags?.join(', ')

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.seo?.metaTitle || post.title,
    "description": schemaDescription,
    "image": post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : "https://www.betpronetwork.com/logo.png",
    "datePublished": post.publishedAt,
    "dateModified": post._updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author || "BetPro Network"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BetPro Network",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.betpronetwork.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.betpronetwork.com/blog/${params.slug}`
    },
    "keywords": schemaKeywords,
    "articleSection": post.category || "Betting News",
    "inLanguage": "en-US",
    "url": `https://www.betpronetwork.com/blog/${params.slug}`
  }

  const components = {
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h4>
      ),
      normal: ({ children }: any) => (
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-purple-600 pl-6 my-8 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-gray-700">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside space-y-3 mb-6 text-lg text-gray-700">{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-purple-600 font-mono text-sm">
          {children}
        </code>
      ),
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-700 underline"
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }: any) => (
        <div className="my-10 rounded-2xl overflow-hidden">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog image'}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      ),
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Hero Section */}
      <section className="copilot-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${params.slug}` }
          ]} />
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-8 mt-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          {post.category && (
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white mb-6">
              {post.category}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-blue-100">
            <span>{post.author || 'BetPro Team'}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={urlFor(post.coverImage).width(1200).url()}
              alt={post.title}
              width={1200}
              height={675}
              priority
              className="w-full h-auto"
            />
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.content} components={components} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Betting?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your BetPro ID now and start winning today!
          </p>
          <a
            href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp: +92 300 0539152
          </a>
        </div>
      </section>
    </main>
  )
}
