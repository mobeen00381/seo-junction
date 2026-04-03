'use client'
import { useState } from 'react'

const FAQS = [
  { q:'How does SEO Junction help local businesses rank on Google?', a:'We build a fast SEO-optimized website and manage your Google Business Profile. Our AI posts fresh content to your site and GMB every month — the two biggest local ranking signals Google uses.' },
  { q:'What types of businesses does SEO Junction work for?', a:'Any local service business — plumbers, electricians, HVAC, roofers, landscapers, dentists, and more. If customers search Google to find you, SEO Junction will help you show up.' },
  { q:'How long does it take to see results?', a:'Most businesses see ranking improvements within 30–45 days. Calls and inquiries typically increase by month 2. SEO compounds — the longer you run it, the stronger your position gets.' },
  { q:'Do I own my website and domain?', a:'Yes — 100%. The domain is registered in your name. The website content is yours. You can transfer everything out at any time with no restrictions.' },
  { q:'What is included in each AI post?', a:'Each post is 300–500 words written for your business, city, and trade. It includes local keywords, your services, and contact info. It posts to your website and Google Business Profile automatically.' },
  { q:'How much does SEO Junction cost?', a:'Plans start at $19/month after a 30-day free trial. The domain setup is a one-time $19.99 fee. No contracts — cancel anytime.' },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 font-semibold text-gray-900 text-sm flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{f.q}</span>
            <span className="text-blue-500 text-xl ml-4 flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
