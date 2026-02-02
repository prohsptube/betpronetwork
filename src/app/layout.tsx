import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BetPro Network - Premium Betting ID Provider in Pakistan & Gulf Countries',
  description: 'Get your BetPro ID for online cricket betting, football, casino, horse racing, and more. Trusted by thousands in Pakistan, UAE, Saudi Arabia, Qatar, and Gulf countries. 24/7 support available.',
  keywords: 'betpro, betpro id, online betting Pakistan, cricket betting, sports betting, casino online, betting id Pakistan, UAE betting, Gulf countries betting',
  authors: [{ name: 'BetPro Network' }],
  metadataBase: new URL('https://www.betpronetwork.com'),
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'BetPro Network - Premium Betting ID Provider',
    description: 'Get your BetPro ID for cricket betting, football, casino, and more. Trusted service in Pakistan & Gulf countries.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.betpronetwork.com',
    siteName: 'BetPro Network',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BetPro Network',
      },
    ],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+923000539152" />
      </body>
    </html>
  )
}
