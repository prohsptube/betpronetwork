'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="BetPro Network Logo" 
              width={40} 
              height={40} 
              className="rounded-lg"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              BetPro Network
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/#why-betpro" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Why BetPro
            </Link>
            <a 
              href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              Get ID
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/#why-betpro" 
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why BetPro
            </Link>
            <a 
              href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              <FaWhatsapp className="text-xl" />
              Get BetPro ID
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
