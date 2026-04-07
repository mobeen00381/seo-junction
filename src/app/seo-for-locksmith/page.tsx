import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Locksmiths — Rank #1 for Emergency Searches | Neerzy',
  description: 'Neerzy helps locksmiths dominate the Google Map Pack. Done-for-you emergency lockout posts, car key AI terms, and more. 30-day free trial.',
  keywords: 'SEO for locksmiths, locksmith GMB marketing, rank locksmith near me, emergency locksmith SEO, locksmith calls',
}

export default function SeoForLocksmithPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter text-left">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#0F172A,#1E293B)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(245,158,11,0.2)',borderColor:'rgba(245,158,11,0.4)',color:'#FCD34D'}}>🔑 Rapid Locksmith SEO</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            The Number #1 Choice For <br /><span className="text-amber-400">Emergency Calls</span> — Rank #1
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-blue-100 font-medium italic">When someone is locked out, they don't surf the web. They call the first result on Google Maps. We put you there.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-slate-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-slate-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/examples" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Examples</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">Locksmith Dominance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'🚗',title:'Auto Lockout AI',desc:'We target high-intent searches like "car key replacement", "fob programming", and "unlock car near me" to capture high-value automotive calls.'},
              {icon:'🏠',title:'Residential Trust',desc:'Our AI automatically posts security tips and rekeying explanations, building your authority as the safest locksmith in the neighborhood.'},
              {icon:'🏢',title:'Commercial Leads',desc:'We use professional security terms like "master key systems", "panic bars", and "access control" to reach business owners.'},
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
        title="Expert Security Work"
        subtitle="Visual proof of the precise security and lock work we help you market."
        items={[
          { title: 'High-Security Deadbolt', category: 'Residential', imageUrl: '#' },
          { title: 'Commercial Key System', category: 'Commercial', imageUrl: '#' },
          { title: 'Smart Lock Installation', category: 'Tech', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-rose-600 dark:text-rose-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Shop Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Locksmiths →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
