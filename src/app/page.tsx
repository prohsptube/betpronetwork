import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaFutbol, FaDice, FaHorse, FaTrophy, FaBaseballBall } from 'react-icons/fa'
import { GiTennisRacket } from 'react-icons/gi'
import { getAllBlogPosts, urlFor } from '../../sanity/client'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.betpronetwork.com',
  },
}

export const revalidate = 60

async function getLatestPosts() {
  try {
    const posts = await getAllBlogPosts()
    return posts.slice(0, 3)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function Home() {
  const latestPosts = await getLatestPosts()
  
  // Enhanced Schema.org structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BetPro Network",
    "url": "https://www.betpronetwork.com",
    "logo": "https://www.betpronetwork.com/logo.png",
    "description": "Premium betting ID provider serving Pakistan, UAE, Saudi Arabia, Qatar & Gulf countries. Cricket betting, football, casino, horse racing & more.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-300-0539152",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Urdu", "Arabic"],
      "areaServed": ["PK", "AE", "SA", "QA"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2450",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/betpronetwork",
      "https://www.instagram.com/betpronetwork",
      "https://twitter.com/betpronetwork"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Online Betting ID Provider",
    "provider": {
      "@type": "Organization",
      "name": "BetPro Network"
    },
    "areaServed": [
      {"@type": "Country", "name": "Pakistan"},
      {"@type": "Country", "name": "United Arab Emirates"},
      {"@type": "Country", "name": "Saudi Arabia"},
      {"@type": "Country", "name": "Qatar"}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Betting Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cricket Betting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Football Betting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Casino Games"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Horse Racing"}}
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get a BetPro ID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us on WhatsApp at +92 300 0539152, share your basic details, and receive your BetPro ID instantly within minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is BetPro Network available in Pakistan and UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BetPro Network serves customers in Pakistan, UAE, Saudi Arabia, Qatar, and all Gulf countries with 24/7 support."
        }
      },
      {
        "@type": "Question",
        "name": "What sports can I bet on with BetPro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can bet on cricket, football, tennis, horse racing, casino games, and many more sports with competitive odds."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are withdrawals processed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Withdrawals are processed instantly to within 15 minutes. We offer the fastest payout system in the region."
        }
      }
    ]
  }

  // Individual Review Schemas for Testimonials
  const review1Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "BetPro Network"
    },
    "author": {
      "@type": "Person",
      "name": "Ahmed Khan"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Best betting platform in Pakistan! Fast withdrawals and excellent customer support. I've been using BetPro for 2 years and never had any issues.",
    "datePublished": "2024-12-15"
  }

  const review2Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "BetPro Network"
    },
    "author": {
      "@type": "Person",
      "name": "Mohammed Al-Rashid"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "BetPro Network has the best odds for cricket betting. IPL and PSL betting experience is amazing. Highly recommended for UAE residents!",
    "datePublished": "2025-01-10"
  }

  const review3Schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "BetPro Network"
    },
    "author": {
      "@type": "Person",
      "name": "Saad Malik"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Instant ID creation and 24/7 WhatsApp support in Urdu is very helpful. Deposits and withdrawals are super fast. Trusted service!",
    "datePublished": "2025-01-28"
  }
  
  return (
    <main className="min-h-screen">
      {/* Schema.org JSON-LD - Multiple Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review1Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review2Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(review3Schema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Casino Background" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-blue-900/85 to-cyan-900/85"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Floating Sports Icons */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <FaBaseballBall className="absolute top-20 left-20 text-white/20 text-6xl animate-float" />
          <FaFutbol className="absolute top-40 right-32 text-white/20 text-5xl animate-float" />
          <FaDice className="absolute bottom-32 left-40 text-white/20 text-7xl animate-float" />
          <FaHorse className="absolute bottom-20 right-20 text-white/20 text-6xl animate-float" />
          <GiTennisRacket className="absolute top-1/2 left-1/4 text-white/20 text-5xl animate-float" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Welcome to <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
                    BetPro Network
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Your Premium Betting ID Provider
                </p>
                <p className="text-lg text-blue-200">
                  Serving Pakistan, UAE, Saudi Arabia, Qatar & Gulf Countries
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-blue-50">
                  Experience the thrill of online betting with BetPro Network. Get instant access to cricket, football, casino, horse racing, greyhound racing, tennis, and more.
                </p>
                <ul className="space-y-3 text-blue-50">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Instant ID Activation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Secure & Fast Transactions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Best Odds Guaranteed
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="space-y-4">
                <a 
                  href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
                >
                  <FaWhatsapp className="text-3xl" />
                  Get Your BetPro ID Now
                </a>
                <p className="text-sm text-blue-200">
                  WhatsApp us at <span className="font-semibold">+92 300 0539 152</span>
                </p>
              </div>
            </div>

            {/* Right Side - Sports Showcase */}
            <div className="relative">
              <div className="glass rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Available Sports</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                    <FaBaseballBall className="text-5xl text-cyan-300 mx-auto mb-3" />
                    <p className="text-white font-semibold">Cricket</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                    <FaFutbol className="text-5xl text-green-300 mx-auto mb-3" />
                    <p className="text-white font-semibold">Football</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                    <FaDice className="text-5xl text-purple-300 mx-auto mb-3" />
                    <p className="text-white font-semibold">Casino</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                    <FaHorse className="text-5xl text-yellow-300 mx-auto mb-3" />
                    <p className="text-white font-semibold">Horse Racing</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                    <GiTennisRacket className="text-5xl text-pink-300 mx-auto mb-3" />
                    <p className="text-white font-semibold">Tennis</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                    <FaTrophy className="text-5xl text-orange-300 mx-auto mb-3" />
                    <p className="text-white font-semibold">More Sports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium BetPro ID Provider for Pakistan, UAE & Gulf Countries</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>BetPro Network</strong> is the leading <strong>online betting ID provider</strong> serving customers across <strong>Pakistan, United Arab Emirates (UAE), Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman</strong>. We specialize in providing instant <strong>BetPro IDs</strong> for <strong>cricket betting</strong>, <strong>football betting</strong>, <strong>live casino games</strong>, <strong>horse racing</strong>, and multiple sports betting options with the best odds in the market.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our platform offers <strong>PSL betting (Pakistan Super League)</strong>, <strong>IPL betting (Indian Premier League)</strong>, <strong>T20 World Cup betting</strong>, and international cricket matches with <strong>live betting odds</strong>. Whether you're interested in <strong>cricket exchange betting</strong>, <strong>football match predictions</strong>, or <strong>online casino Pakistan</strong>, BetPro Network provides a secure, fast, and reliable betting experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Get your <strong>BetPro ID online</strong> within minutes through our <strong>WhatsApp betting service</strong> at <strong>+92 300 0539152</strong>. We offer <strong>24/7 customer support</strong> in English, Urdu, and Arabic, <strong>minimum deposit of just Rs. 500</strong>, <strong>instant withdrawals in 15 minutes</strong>, and the <strong>highest betting limits</strong> in the region. Join over <strong>5000+ satisfied customers</strong> who trust BetPro Network for their online betting needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose BetPro Section */}
      <section id="why-betpro" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose BetPro Network for Online Cricket Betting?
            </h2>
            <p className="text-xl text-gray-600">
              The most trusted betting ID provider in Pakistan, UAE, and Gulf Countries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <FaTrophy className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Odds Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer the most competitive odds in the market. Whether it's cricket, football, or casino games, you get maximum returns on your wins.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Higher odds than competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Best price guarantee on cricket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Live odds updates every second</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <FaWhatsapp className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Expert Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our dedicated support team is available round the clock via WhatsApp. Get instant help in Urdu, English, and Arabic for all your queries.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Response within 2 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Multi-language support team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Personal account managers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Secure & Fast</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your security is our priority. We use advanced encryption and secure payment methods to ensure your data and transactions are always protected.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>SSL encrypted transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Instant deposits & withdrawals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Your data is never shared</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <p className="text-gray-700 font-semibold">Happy Customers</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₨500</div>
              <p className="text-gray-700 font-semibold">Minimum Deposit</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15 Min</div>
              <p className="text-gray-700 font-semibold">Fast Withdrawals</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">20+</div>
              <p className="text-gray-700 font-semibold">Sports Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Get BetPro ID in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Start betting online in Pakistan & Gulf countries within minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 leading-relaxed">
                Message us on WhatsApp at <span className="font-semibold">+92 300 0539152</span> and tell us you want a BetPro ID.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verify Details</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your basic details and complete the simple verification process. Your information is kept 100% confidential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Playing</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your BetPro ID instantly and start enjoying unlimited betting on your favorite sports and games!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl"
            >
              <FaWhatsapp className="text-3xl" />
              Start Now - Get Your ID
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by 5000+ bettors across Pakistan and Gulf countries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Best betting platform in Pakistan! Fast withdrawals and excellent customer support. I've been using BetPro for 2 years and never had any issues."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ahmed Khan</p>
                  <p className="text-sm text-gray-500">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "BetPro Network has the best odds for cricket betting. IPL and PSL betting experience is amazing. Highly recommended for UAE residents!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mohammed Al-Rashid</p>
                  <p className="text-sm text-gray-500">Dubai, UAE</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Instant ID creation and 24/7 WhatsApp support in Urdu is very helpful. Deposits and withdrawals are super fast. Trusted service!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Saad Malik</p>
                  <p className="text-sm text-gray-500">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about BetPro Network
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">How do I get a BetPro ID?</h3>
              <p className="text-gray-700 leading-relaxed">
                Contact us on WhatsApp at <strong>+92 300 0539152</strong>, share your basic details, and receive your BetPro ID instantly within minutes. No complicated signup process!
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Is BetPro Network available in Pakistan and UAE?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, BetPro Network serves customers in <strong>Pakistan, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman</strong> with 24/7 support in English, Urdu, and Arabic.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">What sports can I bet on with BetPro?</h3>
              <p className="text-gray-700 leading-relaxed">
                You can bet on <strong>cricket, football, tennis, horse racing, greyhound racing, casino games, kabaddi,</strong> and many more sports. We cover all major leagues including <strong>PSL, IPL, EPL, UEFA Champions League,</strong> and international tournaments.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">How fast are withdrawals processed?</h3>
              <p className="text-gray-700 leading-relaxed">
                Withdrawals are processed <strong>instantly to within 15 minutes</strong>. We offer the fastest payout system in the region with multiple payment methods including bank transfer, Easypaisa, JazzCash, and cryptocurrency.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">What is the minimum deposit amount?</h3>
              <p className="text-gray-700 leading-relaxed">
                The minimum deposit is just <strong>Rs. 500</strong> (or equivalent in AED/SAR/QAR). This makes it accessible for everyone to start betting with a small amount and grow their winnings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Is my money safe with BetPro Network?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! We use <strong>bank-level encryption</strong>, secure payment gateways, and maintain strict data privacy policies. Your funds and personal information are 100% safe and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Cricket News */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Latest Cricket News
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with daily cricket news and betting tips
              </p>
            </div>
            <Link 
              href="/blog"
              className="text-purple-600 hover:text-purple-700 font-semibold text-lg flex items-center gap-2"
            >
              View All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  {post.coverImage ? (
                    <div className="h-48 relative">
                      <Image
                        src={urlFor(post.coverImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                      <FaBaseballBall className="text-white text-6xl" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt || 'Read the full article for more details.'}
                    </p>
                    <span className="text-purple-600 font-semibold">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 copilot-bg"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers across Pakistan and Gulf Countries
          </p>
          <a 
            href="https://wa.me/923000539152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            <FaWhatsapp className="text-3xl" />
            WhatsApp: +92 300 0539152
          </a>
        </div>
      </section>
    </main>
  )
}
