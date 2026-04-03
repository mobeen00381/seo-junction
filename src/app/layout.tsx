import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'SEO Junction | Done-For-You Local SEO & Google My Business Management',
  description: 'Get more local customers from Google — without doing any work. SEO Junction builds your website, manages your Google Business Profile, and posts AI content monthly. 30-day free trial.',
  keywords: 'local SEO, Google My Business management, SEO for plumbers, SEO for electricians, done-for-you local SEO, GMB management tool',
  metadataBase: new URL('https://seo-junction.vercel.app'),
  openGraph: {
    title: 'SEO Junction | Done-For-You Local SEO',
    description: 'Get more local customers from Google — without doing any work.',
    url: 'https://seo-junction.vercel.app',
    siteName: 'SEO Junction',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Junction | Done-For-You Local SEO',
    description: 'Get more local customers from Google — without doing any work.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
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
              "description": "Done-for-you SEO websites and Google Business management for local service businesses — plumbers, electricians, HVAC, roofers.",
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
                  "description": "30 AI posts/month, priority AI, full GMB management, dedicated support"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "214",
                "bestRating": "5"
              },
              "featureList": [
                "Done-for-you website creation",
                "AI-generated SEO posts monthly",
                "Google My Business management",
                "Voice note and photo uploads",
                "Domain registration and ownership",
                "Local SEO optimization"
              ]
            })
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  )
}
