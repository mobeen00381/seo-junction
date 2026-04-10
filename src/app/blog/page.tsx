'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const POSTS = [
  {
    id: '1',
    slug: 'ai-local-seo-contractors',
    image: '/blog/ai-strategy.png',
    title: 'How AI is Changing Local SEO for Contractors',
    excerpt: 'Discover why manual posting is dead and how AI automation is helping plumbers and electricians rank faster than ever.',
    date: 'April 4, 2026',
    category: 'AI Strategy',
  },
  {
    id: '2',
    slug: 'gmb-optimization-tips-2026',
    image: '/blog/gmb-tips.png',
    title: '5 Tips to Optimize Your GMB Profile in 2026',
    excerpt: 'Google Maps has changed. Learn the new "Answer Engine Orientation" signals you need to stay at the top.',
    date: 'March 28, 2026',
    category: 'GMB Tips',
  },
  {
    id: '3',
    slug: 'real-work-photos-marketing',
    image: '/blog/marketing-photos.png',
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
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-widest text-[10px]">Simple growth guides for local service pros.</p>
        </div>
      </header>

      <main className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {POSTS.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group block relative no-underline outline-none focus:ring-2 focus:ring-primary rounded-[32px] cursor-pointer"
            >
              <article className="h-full flex flex-col pointer-events-none">
                <div className="aspect-[16/10] bg-gray-100 dark:bg-slate-900 rounded-[32px] mb-8 overflow-hidden border border-gray-100 dark:border-slate-800 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary/10">
                   <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-[10px] font-black text-primary dark:text-emerald-400 uppercase tracking-[2px] bg-primary/5 dark:bg-emerald-400/10 px-4 py-1.5 rounded-full border border-primary/10 dark:border-emerald-400/20">{post.category}</span>
                   <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{post.date}</span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-tight italic uppercase tracking-tight">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed mb-8 font-medium flex-grow">{post.excerpt}</p>
                <div className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-[4px] border-b-2 border-primary/20 inline-block pb-1 group-hover:border-primary transition-all">
                  Read Article →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <section className="py-24 px-6 bg-navy text-white text-center relative z-10">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-8 tracking-tight uppercase italic">Ready to get your business found?</h2>
            <Link href="/onboarding" className="inline-block font-bold text-blue-900 bg-white px-12 py-5 rounded-2xl shadow-2xl transition-transform hover:scale-105 active:scale-95">Start 30-Day Free Trial →</Link>
         </div>
      </section>

      <Footer />
    </div>
  )
}
