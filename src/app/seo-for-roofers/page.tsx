import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Roofers — Be First When Neighbours Need You',
  description: 'After every storm, neighbours search for roofers urgently. Neerzy keeps your Google profile active so you are first when they need you. Try free today.',
  keywords: 'SEO for roofers, roofing company Google Maps, storm damage leads, local roofer website, roof repair near me ranking',
  openGraph: {
    title: 'SEO for Roofers — Neerzy',
    description: 'Storm hits. Neighbours search. Be the roofer they find first. Neerzy keeps your Google profile ready.',
    url: 'https://www.neerzy.com/seo-for-roofers',
  },
}

export default function SeoForRoofersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter text-left">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#0F172A,#334155)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(245,158,11,0.2)',borderColor:'rgba(245,158,11,0.4)',color:'#FCD34D'}}>🏠 High-Authority Roofing SEO</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center text-white">
            The Number #1 Choice For <br /><span className="text-amber-400">Roofing Leads</span> — 100% Autopilot
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-blue-50 font-medium italic">When homeowners search 'roof leak repair' or 'best roofer near me', your company should be the top result. We automate your expertise on Google daily.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-slate-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-slate-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/examples" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Examples</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">Storm Damage & Replacement Dominance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'⛈️',title:'Storm Damage Leads',desc:'We target high-intent searches like "emergency roof repair", "hail damage estimate", and "shingle replacement" to capture immediate local calls.'},
              {icon:'🏘️',title:'Residential Authority',desc:'Our AI automatically posts material reviews and installation guides (asphalt, metal, tile), building trust with families in your area.'},
              {icon:'🏗️',title:'Commercial Roofing',desc:'We use professional roofing terms like "EPDM membrane", "TPO roofing", and "flat roof coatings" to reach business owners.'},
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
        title="Roofing Project Showcase"
        subtitle="Visual proof of the durable roofing work we help you market to Google."
        items={[
          { title: 'Full Shingle Replacement', category: 'Residential', imageUrl: '#' },
          { title: 'Commercial TPO Install', category: 'Commercial', imageUrl: '#' },
          { title: 'Storm Damage Patching', category: 'Emergency', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-4 text-center uppercase tracking-widest font-bold font-inter">Launch your real business online � your own domain, for a one-time <span className="text-gray-900 dark:text-white">�19/$19</span> setup fee.</p>`n          <p className="text-sm text-gray-400 dark:text-gray-500 mb-10 text-center italic max-w-md mx-auto">This is your business. Your name on the door. Yours forever � even if you leave Neerzy.</p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Roofers →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
