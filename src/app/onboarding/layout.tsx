import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started — Neerzy',
  description: 'Start free. Your website goes live in 24 hours. Only pay the £29/$29 domain fee today. No contracts, no tech skills needed.',
  robots: {
    index: false, // Keep checkout hidden from Google — intentional
    follow: false,
  },
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
