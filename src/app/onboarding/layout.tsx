import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started — Neerzy',
  description: 'Start free. Your website goes live in 24 hours. Only pay the domain fee today. No tech skills needed.',
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
