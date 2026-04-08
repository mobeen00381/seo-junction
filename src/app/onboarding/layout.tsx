import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started — Neerzy',
  description: 'Start free. Your website goes live in 24 hours. Your own domain, registered in your name, for a one-time \u00a319/$19 setup fee.',
  robots: {
    index: false, // Keep checkout out of Google results
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
