import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started — Neerzy',
  description: 'Snap a photo. We handle your website, Google profile, and reviews — automatically. Free to start. Live in minutes. Only pay the £29/$29 domain fee today. No contracts, no tech skills needed.',
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
