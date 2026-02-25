'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaSave, FaKey, FaUser } from 'react-icons/fa'

export default function SettingsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  
  // Current credentials
  const [currentPassword, setCurrentPassword] = useState('')
  
  // New credentials
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'authenticated') {
      router.push('/admin/login')
      return
    }
    
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [router])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    
    // Validation
    if (!currentPassword) {
      setError('Please enter your current password')
      return
    }
    
    if (!newUsername && !newPassword) {
      setError('Please enter new username or new password')
      return
    }
    
    if (newPassword && newPassword !== confirmPassword) {
      setError('New passwords do not match')
      return
    }
    
    if (newPassword && newPassword.length < 6) {
      setError('New password must be at least 6 characters')
      return
    }
    
    setIsSaving(true)
    
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newUsername: newUsername || undefined,
          newPassword: newPassword || undefined,
        }),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setMessage(data.message)
        setCurrentPassword('')
        setNewUsername('')
        setNewPassword('')
        setConfirmPassword('')
      } else {
        setError(data.message || 'Failed to update settings')
      }
    } catch (error) {
      setError('Error updating settings')
    } finally {
      setIsSaving(false)
    }
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
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="BetPro" width={40} height={40} className="rounded-lg" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Admin Settings</h1>
                  <p className="text-sm text-gray-500">Change your credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Account Credentials</h2>
            <p className="text-sm text-gray-600">
              Update your admin username and password. You'll need to login again after changing.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            {/* Messages */}
            {message && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <div className="whitespace-pre-wrap">{message}</div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Current Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaKey className="text-gray-400" />
                </div>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your current password"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Required to verify your identity
              </p>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* New Username */}
            <div>
              <label htmlFor="newUsername" className="block text-sm font-medium text-gray-700 mb-2">
                New Username (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  id="newUsername"
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Leave empty to keep current username"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Only fill if you want to change your username
              </p>
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                New Password (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaKey className="text-gray-400" />
                </div>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Leave empty to keep current password"
                  minLength={6}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Minimum 6 characters. Only fill if you want to change your password
              </p>
            </div>

            {/* Confirm New Password */}
            {newPassword && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaKey className="text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Confirm your new password"
                    required
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Link
                href="/admin"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors"
              >
                <FaSave /> {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <div className="text-blue-600 mt-0.5">ℹ️</div>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Credentials are stored in environment variables</li>
                  <li>Changes will log you out automatically</li>
                  <li>You'll need to re-login with new credentials</li>
                  <li>Make sure to remember your new credentials!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
