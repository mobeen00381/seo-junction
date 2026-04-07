import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Neerzy',
  description: 'Learn how we protect your business data and user privacy here at Neerzy.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 italic tracking-tight uppercase">Privacy Policy</h1>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Last Updated: April 2026</p>
        </div>
      </header>

      <article className="py-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">1. Information Collection</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">We collect information provided during signup including business name, service area, and contact details. This is used solely to configure Google Business profiles and generate website content.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">2. Use of Collected Data</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">Business metadata is processed by our AI models to generate niche-specific marketing copy. We do not sell your personal or business data to third-party advertisers.</p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">3. Security Protcols</h2>
             <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">All customer data is encrypted via industry-standard SSL and stored on secure cloud servers. We take proactive measures to prevent unauthorized data access.</p>
          </section>

          <section className="mb-12">
             <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-xs">4. Compliance</h2>
             <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed italic">"Privacy is a human right." Neerzy complies with GDPR and CCPA standards where applicable to ensure user safety and transparency at all times.</p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  )
}
