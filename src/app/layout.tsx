import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import AIAssistant from '@/components/AIAssistant'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.neerzy.com'),
  title: {
    default: 'Neerzy — Your Neighbours Are Searching. Be There.',
    template: '%s | Neerzy',
  },
  description: 'Snap a photo of your latest job. Neerzy turns it into a professional website and Google presence automatically. No tech skills. No stress. Just more calls from neighbours.',
  keywords: 'local business website, Google My Business management, local SEO for tradespeople, get more local customers, neighbour marketing',
  authors: [{ name: 'Neerzy' }],
  creator: 'Neerzy',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Neerzy',
    title: 'Neerzy — Your Neighbours Are Searching. Be There.',
    description: 'Snap a photo. We handle the website, Google profile, and monthly content. Your neighbours find you — automatically.',
    url: 'https://www.neerzy.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neerzy — Neighbours Find You on Google',
    description: 'Snap a photo from your latest job. We do the rest.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Neerzy",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://www.neerzy.com",
              "description": "Helping local service businesses get found by neighbours on Google — with zero tech skills needed.",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Basic Plan",
                  "price": "19",
                  "priceCurrency": "USD",
                  "billingIncrement": "P1M",
                  "description": "10 AI posts/month, done-for-you website, GMB updates"
                },
                {
                  "@type": "Offer",
                  "name": "Pro Plan",
                  "price": "39",
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
      <body className="antialiased font-sans selection:bg-teal-100 dark:selection:bg-teal-900 selection:text-teal-900 dark:selection:text-teal-100 transition-colors duration-300 overflow-x-hidden">
        {children}
        <AIAssistant />
      </body>
    </html>
  )
}
