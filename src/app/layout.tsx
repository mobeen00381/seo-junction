import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SEO Junction | We help customers find your business on Google',
  description: 'Send a photo or voice note — we turn it into a professional online presence automatically. No tech skills needed. 30-day free trial.',
  keywords: 'local service business, Google visibility, contractor marketing, professional website',
  metadataBase: new URL('https://seo-junction.vercel.app'),
  openGraph: {
    title: 'SEO Junction | Get discovered on Google',
    description: 'We help customers find your business on Google.',
    url: 'https://seo-junction.vercel.app',
    siteName: 'SEO Junction',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Junction | Get discovered on Google',
    description: 'We help customers find your business on Google.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SEO Junction",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://seo-junction.vercel.app",
              "description": "Helping local service businesses get found on Google without technical skills.",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Basic Plan",
                  "price": "19.99",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M",
                  "description": "10 AI posts/month, done-for-you website, GMB updates"
                },
                {
                  "@type": "Offer",
                  "name": "Pro Plan",
                  "price": "39.99",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M",
                  "description": "Everything businesses need to get found on Google"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "214",
                "bestRating": "5"
              }
            })
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans selection:bg-blue-100 selection:text-blue-900">{children}</body>
    </html>
  )
}
