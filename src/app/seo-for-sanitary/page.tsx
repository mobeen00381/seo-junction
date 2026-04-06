import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'Sanitary & Tiles SEO — Showroom Visibility | SEO Junction',
  description: 'SEO Junction helps sanitary stores rank for luxury tiles, bathroom fittings, and kitchen fixtures. Automated showroom SEO. 30-day free trial.',
  keywords: 'SEO for sanitary stores, tile shop marketing, local bathroom fittings SEO, luxury tiles near me, sanitary store Google rank',
}

export default function SeoForSanitaryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#1E293B,#0F172A)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(148,163,184,0.1)',borderColor:'rgba(148,163,184,0.3)',color:'#CBD5E1'}}>🚿 Luxury Showroom SEO</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center text-white">
            Transform Your <br /><span className="text-indigo-400">Showroom Traffic</span> — Automatically
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-indigo-100 font-medium">When homeowners search for 'luxury tiles' or 'bathroom vanities', your showroom should be the top result. We optimize your Google profile with expert terms like 'ceramic tiles' and 'CP fittings' automatically.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-indigo-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-indigo-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">The Sanitary SEO Edge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'💎',title:'Luxe Term Targeting',desc:'We use AI to target specific sanitary terms like "anti-skid tiles", "one-piece closet", and "designer faucets" to reach high-value buyers.'},
              {icon:'🖼️',title:'Showroom Showcase',desc:'Our AI automatically posts new catalog highlights and design inspiration to your Google profile, keeping your showroom visible to locals.'},
              {icon:'🗺️',title:'Map Pack Presence',desc:'Sanitary stores live in the Map Pack. We ensure your hours, showroom address, and product categories are always #1.'},
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
        title="Showroom & Product Showcase"
        subtitle="Visual highlights of the premium selection we help you market."
        items={[
          { title: 'Luxury Tile Display', category: 'Showroom', imageUrl: '#' },
          { title: 'Modern Vanity Suite', category: 'Inventory', imageUrl: '#' },
          { title: 'Designer Fitting Demo', category: 'Products', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Shop Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Sanitary →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
