'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlus, FaEdit, FaTrash, FaEye, FaSignOutAlt, FaCog } from 'react-icons/fa'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt: string
  featured?: boolean
  coverImage?: any
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'authenticated') {
      setIsAuthenticated(true)
      fetchPosts()
    } else {
      router.push('/admin/login')
    }
    setIsLoading(false)
  }, [router])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/posts')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    setIsDeleting(postId)
    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        setPosts(posts.filter(post => post._id !== postId))
      } else {
        alert('Failed to delete post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Error deleting post')
    }
    setIsDeleting(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
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
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="BetPro" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BetPro Admin</h1>
                <p className="text-sm text-gray-500">Content Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/admin/settings"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaCog /> Settings
              </Link>
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaEye /> View Website
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats & Actions */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
            <p className="text-gray-600 mt-1">{posts.length} total posts</p>
          </div>
          <Link
            href="/admin/editor"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <FaPlus /> Create New Post
          </Link>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Published
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      No posts yet. Create your first post to get started!
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr key={post._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {post.coverImage && (
                            <Image
                              src={post.coverImage}
                              alt=""
                              width={60}
                              height={40}
                              className="rounded object-cover"
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{post.title}</div>
                            {post.excerpt && (
                              <div className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {post.category && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 capitalize">
                            {post.category}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {post.featured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/blog/${post.slug.current}`}
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 p-2"
                            title="View Post"
                          >
                            <FaEye />
                          </Link>
                          <Link
                            href={`/admin/editor?id=${post._id}`}
                            className="text-purple-600 hover:text-purple-800 p-2"
                            title="Edit Post"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(post._id)}
                            disabled={isDeleting === post._id}
                            className="text-red-600 hover:text-red-800 p-2 disabled:opacity-50"
                            title="Delete Post"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
