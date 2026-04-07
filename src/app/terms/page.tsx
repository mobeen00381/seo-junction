import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Neerzy',
  description: 'Read the terms and conditions for using the Neerzy platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 italic tracking-tight uppercase">Terms of Service</h1>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Last Updated: April 2026</p>
        </div>
      </header>

      <article className="py-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">1. Acceptance of Terms</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">By accessing or using the Neerzy platform, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, you may not access the service.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">2. Use of AI Automation</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">Our platform uses artificial intelligence to generate Google Business Profile posts and website content. While we strive for absolute accuracy, the user is responsible for reviewing automated posts for industry compliance.</p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">3. Cancellation and Refunds</h2>
             <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">We offer a 30-day free trial. After the trial ends, the $19 setup fee is non-refundable. Monthly subscriptions can be cancelled at any time through the billing dashboard.</p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">4. SEO Outcomes</h2>
             <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed italic">"SEO is a compounding game." While most customers see Map Pack movement in 30-60 days, we do not guarantee specific rankings as Google's algorithm is outside of our direct control.</p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  )
}
