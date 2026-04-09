import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free GMB Score Checker — See How AI Finds Your Business',
  description: 'Check how ChatGPT, Perplexity, and Google AI see your business in 10 seconds. Free. No signup. Get 3 quick wins to rank higher before your neighbours find someone else.',
  keywords: 'free GMB checker, Google Business Profile audit free, how AI sees my business, GMB score tool, local SEO audit free',
  openGraph: {
    title: 'Free GMB Score Checker — Neerzy Neural Audit 4.0',
    description: '10 seconds. Free. See how AI search engines find your local business — and how to rank higher than your neighbours.',
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
