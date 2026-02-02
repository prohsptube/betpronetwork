import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaFutbol, FaDice, FaHorse, FaTrophy, FaBaseballBall } from 'react-icons/fa'
import { GiTennisRacket } from 'react-icons/gi'

export default function Home() {
  return (
    <main className="min-h-screen">
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

      {/* Why Choose BetPro Section */}
      <section id="why-betpro" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose BetPro Network?
            </h2>
            <p className="text-xl text-gray-600">
              The most trusted betting platform in Pakistan and Gulf Countries
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
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Your BetPro ID is just minutes away
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
            <Link href="/blog/pakistan-vs-india-t20-preview" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <FaBaseballBall className="text-white text-6xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Pakistan vs India T20 Match Preview & Betting Tips
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete analysis and betting odds for the upcoming Pakistan vs India T20 showdown...
                  </p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/psl-2026-betting-guide" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <FaTrophy className="text-white text-6xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    PSL 2026 Complete Betting Guide for Pakistan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know about betting on Pakistan Super League 2026...
                  </p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ipl-betting-tips-gulf-countries" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <FaBaseballBall className="text-white text-6xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    IPL Betting Tips for UAE & Gulf Countries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expert betting strategies for IPL matches with the best odds...
                  </p>
                  <span className="text-purple-600 font-semibold">Read More →</span>
                </div>
              </div>
            </Link>
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
