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
    default: 'Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
    template: '%s | Neerzy',
  },
  description: 'Snap a photo from your latest job — Neerzy builds your website, manages your Google profile, and sends automatic review requests. No tech skills. Free to start. Live in 24 hours.',
  keywords: 'local SEO for tradespeople, Google My Business management, trades website builder, get more neighbours calling, no tech skills SEO',
  authors: [{ name: 'Neerzy', url: 'https://www.neerzy.com' }],
  creator: 'Neerzy',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    siteName: 'Neerzy',
    locale: 'en_GB',
    title: 'Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
    description: 'Snap a photo. We handle your website, Google profile, and reviews — automatically.',
    url: 'https://www.neerzy.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
    description: 'Snap a photo from your latest job — Neerzy handles your website, Google profile, and reviews automatically.',
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
            __html: JSON.stringify([

              /* ═══ 1. SOFTWARE APPLICATION ════════════════════════════════
                 Unlocks: ⭐ star rating + pricing in Google search results  */
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Neerzy",
                "url": "https://www.neerzy.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "description": "Every job you complete becomes a Google post and a 5-star review. Neerzy builds your website, manages your Google Business Profile, and sends automatic review requests — no tech skills needed.",
                "featureList": [
                  "Done-for-you trade website",
                  "AI job post generation from photos and voice notes",
                  "Google Business Profile management",
                  "Automatic review link after every job",
                  "Home screen access — no daily login required",
                  "Smart review reminders when inactive",
                  "White-label agency dashboard"
                ],
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Starter",
                    "price": "29.00",
                    "priceCurrency": "USD",
                    "description": "Website + 10 AI posts/month + auto review link after every job",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "billingDuration": "P1M"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "Pro",
                    "price": "59.00",
                    "priceCurrency": "USD",
                    "description": "Everything in Starter + 30 posts + smart review reminders + monthly ranking report",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "billingDuration": "P1M"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "Growth",
                    "price": "99.00",
                    "priceCurrency": "USD",
                    "description": "Everything in Pro + 60 posts + competitor tracker + review response AI + social posting",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "billingDuration": "P1M"
                    }
                  },
                  {
                    "@type": "Offer",
                    "name": "Agency",
                    "price": "199.00",
                    "priceCurrency": "USD",
                    "description": "Up to 10 client sites, unlimited AI posts, white-label reports, client dashboard, API access",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "billingDuration": "P1M"
                    }
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "214",   // ← UPDATE this to your real review count
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Mike Thompson" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody": "I don't understand websites, but now my neighbours find me on Google and my phone actually rings.",
                    "datePublished": "2025-03-01"
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Emma Wilson" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody": "The automated review link is a game changer. I get 5-star reviews before I've even finished packing my tools.",
                    "datePublished": "2025-03-15"
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Sandra Miller" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody": "This helped me show my work without any effort. My phone rings, my calendar fills. Simple.",
                    "datePublished": "2025-02-20"
                  }
                ]
              },

              /* ═══ 2. ORGANIZATION ════════════════════════════════════════
                 Tells Google: Neerzy is a real company with contact info  */
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Neerzy",
                "url": "https://www.neerzy.com",
                "logo": "https://www.neerzy.com/logo.png",
                "description": "Helping local service businesses get found by neighbours — with zero tech skills needed.",
                "foundingDate": "2024",
                "areaServed": ["GB", "US", "AU", "AE", "CA"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "hello@neerzy.com",  // ← UPDATE with your real email
                  "availableLanguage": "English",
                  "hoursAvailable": "Mo-Fr 09:00-18:00"
                },
                "sameAs": [
                  "https://www.facebook.com/neerzy",     // ← UPDATE with real URLs
                  "https://www.instagram.com/neerzy",
                  "https://www.linkedin.com/company/neerzy"
                ]
              },

              /* ═══ 3. FAQ PAGE ════════════════════════════════════════════
                 Unlocks: your answers showing in Google "People Also Ask" */
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does Neerzy help local businesses rank on Google?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Neerzy builds a professional website for your trade and manages your Google Business Profile. Every time you snap a job photo, our AI writes a post, publishes it to your site and Google profile, and sends your customer an automatic review link. This keeps your Google presence fresh and active — the two biggest local ranking signals Google uses."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly will my business appear on Google?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Your website is live within 24 hours of signing up. Most Neerzy businesses start appearing in local Google searches within 2 to 4 weeks of their first job posts going live."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need any technical skills to use Neerzy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Zero. If you can take a photo on your phone, you can use Neerzy. You snap a photo from the job site — we handle everything else. No websites to manage, no Google accounts to update."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the automatic review link work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "After every job you post on Neerzy, we generate a direct Google review link for you to send to your customer via WhatsApp or SMS. Your customer taps it and leaves a 5-star review in one step — no searching, no Google account needed from them."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I own my website and domain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — 100%. Your domain is registered in your name. You can transfer it out at any time with no restrictions, even if you cancel your Neerzy subscription."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does Neerzy cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Neerzy plans start from $29 per month after a 30-day free trial. The only upfront cost is a one-time $19.99 domain setup fee. There are no contracts — cancel anytime."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which trades and service businesses does Neerzy work for?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Neerzy works for any local service business — plumbers, electricians, HVAC engineers, roofers, landscapers, cleaners, locksmiths, pet groomers, dentists, and more. If your customers search Google to find you, Neerzy helps them find you first."
                    }
                  }
                ]
              }

            ])
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
