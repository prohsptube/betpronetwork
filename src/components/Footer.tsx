import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="BetPro Network Logo" 
                width={40} 
                height={40} 
                className="rounded-lg"
              />
              <span className="text-xl font-bold">BetPro Network</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted betting ID provider in Pakistan, UAE, Saudi Arabia, Qatar, and Gulf Countries. Get instant access to cricket, football, casino, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/#why-betpro" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <a href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-lg font-bold mb-4">Available Sports</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cricket Betting</li>
              <li>Football Betting</li>
              <li>Casino Games</li>
              <li>Horse Racing</li>
              <li>Tennis Betting</li>
              <li>Live Casino</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
                <span>+92 300 0539152</span>
              </a>
              <p className="text-gray-400 text-sm">
                Available 24/7 in Urdu, English & Arabic
              </p>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.facebook.com/share/1APHYSEAqp/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a 
                  href="https://x.com/betproexch?s=21" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a 
                  href="https://www.facebook.com/share/18qwM7r5js/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors opacity-50 cursor-not-allowed"
                  title="Coming Soon"
                >
                  <FaTelegram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 BetPro Network. All rights reserved.</p>
          <p className="mt-2">
            Serving Pakistan | UAE | Saudi Arabia | Qatar | Kuwait | Bahrain | Oman
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Disclaimer: Please gamble responsibly. This service is for adults 18+ only.
          </p>
        </div>
      </div>
    </footer>
  )
}
