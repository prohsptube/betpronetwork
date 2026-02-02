import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BetPro Network - Premium Betting ID Provider in Pakistan & Gulf Countries',
  description: 'Get your BetPro ID for online cricket betting, football, casino & more. Trusted by thousands in Pakistan, UAE, Saudi Arabia & Gulf. 24/7 support.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'BetPro Network - Premium Betting ID Provider',
    description: 'Get your BetPro ID for cricket betting, football, casino & more. Trusted in Pakistan & Gulf countries.',
    images: ['https://www.betpronetwork.com/logo.png'],
    creator: '@betpronetwork',
  },
  alternates: {
    canonical: 'https://www.betpronetwork.com',
    languages: {
      'en-US': 'https://www.betpronetwork.com',
      'en-PK': 'https://www.betpronetwork.com',
      'en-AE': 'https://www.betpronetwork.com',
    },
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
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XC5R8MEQQK"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XC5R8MEQQK');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+923000539152" />
      </body>
    </html>
  )
}
