import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free GMB Score Checker — See How AI Finds Your Business',
  description: 'Check how ChatGPT, Perplexity, and Google AI see your business in 10 seconds. Free. No signup. Get 3 quick wins to rank higher before your neighbours find someone else.',
  keywords: 'free GMB checker, Google Business Profile audit, AI search visibility tool, how does Google AI see my business, free local SEO tool',
  openGraph: {
    title: 'Free GMB Score Checker by Neerzy',
    description: 'Free. 10 seconds. See how AI search engines find your local business — and how to rank higher.',
    url: 'https://www.neerzy.com/gmb-checker',
  },
}

export default function GmbCheckerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
