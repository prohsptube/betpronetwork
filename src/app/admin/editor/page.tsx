'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft, FaSave, FaEye } from 'react-icons/fa'

function EditorContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const postId = searchParams.get('id')
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  
  // Basic fields
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [author, setAuthor] = useState('BetPro Team')
  const [featured, setFeatured] = useState(false)
  
  // SEO fields
  const [metaTitle, setMetaTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [focusKeyword, setFocusKeyword] = useState('')
  const [keywords, setKeywords] = useState('')
  const [urduTitle, setUrduTitle] = useState('')
  const [urduDescription, setUrduDescription] = useState('')
  const [targetRegions, setTargetRegions] = useState<string[]>([])
  const [pakistanKeywords, setPakistanKeywords] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'authenticated') {
      router.push('/admin/login')
      return
    }
    
    setIsAuthenticated(true)
    
    if (postId) {
      fetchPost()
    } else {
      setIsLoading(false)
    }
  }, [postId, router])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}`)
      const post = await response.json()
      
      setTitle(post.title || '')
      setSlug(post.slug?.current || '')
      setExcerpt(post.excerpt || '')
      setContent(post.content || '')
      setCategory(post.category || '')
      setTags(post.tags?.join(', ') || '')
      setAuthor(post.author || 'BetPro Team')
      setFeatured(post.featured || false)
      
      if (post.seo) {
        setMetaTitle(post.seo.metaTitle || '')
        setMetaDescription(post.seo.metaDescription || '')
        setFocusKeyword(post.seo.focusKeyword || '')
        setKeywords(post.seo.keywords?.join(', ') || '')
        
        if (post.seo.pakistanSeo) {
          setUrduTitle(post.seo.pakistanSeo.urduTitle || '')
          setUrduDescription(post.seo.pakistanSeo.urduDescription || '')
          setTargetRegions(post.seo.pakistanSeo.targetRegions || [])
          setPakistanKeywords(post.seo.pakistanSeo.pakistanKeywords?.join(', ') || '')
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      alert('Failed to load post')
    } finally {
      setIsLoading(false)
    }
  }

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (!postId) {
      setSlug(generateSlug(value))
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const postData = {
        title,
        slug: { _type: 'slug', current: slug },
        excerpt,
        content,
        category,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        author,
        featured,
        publishedAt: new Date().toISOString(),
        seo: {
          metaTitle: metaTitle || title,
          metaDescription: metaDescription || excerpt,
          focusKeyword,
          keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
          pakistanSeo: {
            urduTitle,
            urduDescription,
            targetRegions,
            pakistanKeywords: pakistanKeywords.split(',').map(k => k.trim()).filter(Boolean),
          },
        },
      }

      const url = postId ? `/api/admin/posts/${postId}` : '/api/admin/posts'
      const method = postId ? 'PATCH' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        alert(postId ? 'Post updated successfully!' : 'Post created successfully!')
        router.push('/admin')
      } else {
        alert('Failed to save post')
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Error saving post')
    } finally {
      setIsSaving(false)
    }
  }

  const handleRegionToggle = (region: string) => {
    setTargetRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaArrowLeft className="text-xl" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                {postId ? 'Edit Post' : 'Create New Post'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              {slug && (
                <Link
                  href={`/blog/${slug}`}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FaEye /> Preview
                </Link>
              )}
              <button
                onClick={handleSave}
                disabled={isSaving || !title || !slug}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                <FaSave /> {isSaving ? 'Saving...' : 'Save Post'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Editor Form */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                  placeholder="post-url-slug"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  URL: /blog/{slug || 'your-slug'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Brief description of the post"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                  placeholder="Write your post content here..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Tip: Use Markdown formatting for better content structure
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="cricket">Cricket</option>
                    <option value="football">Football</option>
                    <option value="casino">Casino</option>
                    <option value="betting-tips">Betting Tips</option>
                    <option value="news">News</option>
                    <option value="guide">Guide</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="cricket, betting, PSL, IPL"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Mark as Featured Post
                </label>
              </div>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">SEO Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Leave empty to use post title"
                  maxLength={60}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {metaTitle.length}/60 characters (recommended: 50-60)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Leave empty to use excerpt"
                  maxLength={160}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {metaDescription.length}/160 characters (recommended: 150-160)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Focus Keyword
                  </label>
                  <input
                    type="text"
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., cricket betting Pakistan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Keywords
                  </label>
                  <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="PSL, IPL, betting tips"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pakistan SEO */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pakistan Market SEO</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urdu Title (اردو عنوان)
                </label>
                <input
                  type="text"
                  value={urduTitle}
                  onChange={(e) => setUrduTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="پاکستان کرکٹ بیٹنگ"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urdu Description (اردو تفصیل)
                </label>
                <textarea
                  value={urduDescription}
                  onChange={(e) => setUrduDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Pakistan Regions
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['karachi', 'lahore', 'islamabad', 'rawalpindi', 'faisalabad', 'multan', 'peshawar', 'quetta', 'all-pakistan'].map((region) => (
                    <label key={region} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={targetRegions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="text-sm capitalize">{region.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pakistan Keywords (comma-separated)
                </label>
                <input
                  type="text"
                  value={pakistanKeywords}
                  onChange={(e) => setPakistanKeywords(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="PSL betting, Pakistan cricket, اردو keywords"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Link
              href="/admin"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSaving || !title || !slug}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors"
            >
              {isSaving ? 'Saving...' : postId ? 'Update Post' : 'Publish Post'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <EditorContent />
    </Suspense>
  )
}

