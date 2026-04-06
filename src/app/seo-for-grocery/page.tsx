import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Grocery Stores — Weekly Deals & Local Visibility | SEO Junction',
  description: 'SEO Junction helps local grocery stores rank for "fresh produce near me". Automated weekly specials posts and local inventory SEO. 30-day free trial.',
  keywords: 'SEO for grocery stores, local supermarket marketing, rank grocery store Google, fresh produce SEO, grocery near me',
}

export default function SeoForGroceryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#064E3B,#065F46)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(16,185,129,0.2)',borderColor:'rgba(16,185,129,0.4)',color:'#A7F3D0'}}>🍎 Fresh Local Visibility</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            Be the First Choice for <br /><span className="text-emerald-300">Fresh Groceries</span> — In Your Town
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-emerald-50 font-medium">When locals search for 'fresh produce' or 'bakery near me', your store should be the top result. We automate your weekly specials on Google so you don't have to.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-emerald-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-emerald-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">The Local Grocery Edge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'🥑',title:'Fresh Produce Keywords',desc:'We target high-intent searches like "organic vegetables", "fresh bakery", and "local deli" to drive foot traffic to your aisles.'},
              {icon:'📢',title:'Weekly Specials',desc:'Our AI automatically updates your Google profile with "Deal of the Week" posts, ensuring locals see your best prices first.'},
              {icon:'🗺️',title:'Map Pack Presence',desc:'We ensure your store hours, phone number, and location are hyper-optimized to show up in the critical Map Pack 3-spot.'},
            ].map((p,i)=>(
              <div key={i} className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-slate-800 transition-transform hover:scale-[1.03] text-left">
                <div className="text-4xl mb-6">{p.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery 
        title="Store & Product Showcase"
        subtitle="Visual highlights of the quality and selection we help you market."
        items={[
          { title: 'Organic Produce Aisle', category: 'Freshness', imageUrl: '#' },
          { title: 'Artisan Bakery Section', category: 'In-Store', imageUrl: '#' },
          { title: 'Weekly Special Display', category: 'Offers', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Market Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Grocers →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
