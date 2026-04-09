import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Local SEO Tips for Trades & AI Automation',
  description: 'Practical guides for plumbers, electricians, roofers, and other trades on Google ranking, GMB optimisation, and getting more neighbours calling. No jargon.',
  openGraph: {
    title: 'Blog — Local SEO Tips for Trades & AI Automation',
    description: 'Practical guides for plumbers, electricians, roofers, and other trades on Google ranking, GMB optimisation, and getting more neighbours calling. No jargon.',
    url: 'https://www.neerzy.com/blog',
  },
}

const POSTS = [
  {
    id: '1',
    title: 'How AI is Changing Local SEO for Contractors',
    excerpt: 'Discover why manual posting is dead and how AI automation is helping plumbers and electricians rank faster than ever.',
    date: 'April 4, 2026',
    category: 'AI Strategy',
  },
  {
    id: '2',
    title: '5 Tips to Optimize Your GMB Profile in 2026',
    excerpt: 'Google Maps has changed. Learn the new "Answer Engine Orientation" signals you need to stay at the top.',
    date: 'March 28, 2026',
    category: 'GMB Tips',
  },
  {
    id: '3',
    title: 'Why Real Work Photos are Your Best Marketing Tool',
    excerpt: 'Stop using stock photos. Here is how simple job site snaps can triple your local trust score.',
    date: 'March 15, 2026',
    category: 'Marketing',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />

      <header className="pt-40 pb-20 px-6 text-center bg-gray-50 dark:bg-slate-900/40 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight uppercase italic">The Junction <span className="text-primary italic">Blog</span></h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">Insights to help your local business dominate the search results.</p>
        </div>
      </header>

      <main className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-gray-100 dark:bg-slate-900 rounded-3xl mb-6 overflow-hidden border border-gray-100 dark:border-slate-800 transition-transform group-hover:scale-[1.02]">
                 <div className="w-full h-full flex items-center justify-center text-4xl opacity-20 grayscale group-hover:grayscale-0 transition-all">📰</div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">{post.category}</span>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{post.excerpt}</p>
              <div className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-widest border-b-2 border-primary/20 inline-block pb-1">Read Article →</div>
            </article>
          ))}
        </div>
      </main>

      <section className="py-24 px-6 bg-navy text-white text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-8 tracking-tight">Ready to get your business found?</h2>
            <Link href="/onboarding" className="inline-block font-bold text-blue-900 bg-white px-12 py-5 rounded-2xl shadow-2xl transition-transform hover:scale-105">Start 30-Day Free Trial →</Link>
         </div>
      </section>

      <Footer />
    </div>
  )
}
