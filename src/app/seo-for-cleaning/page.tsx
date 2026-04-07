import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Cleaning Services — Get More Office & Home Bookings | Neerzy',
  description: 'Neerzy helps cleaning companies rank for "house cleaning near me" and "commercial janitorial". Done-for-you hygiene-focused AI posts. 30-day free trial.',
  keywords: 'SEO for cleaning services, maid service marketing, local cleaner SEO, rank janitorial business Google, deep cleaning SEO',
}

export default function SeoForCleaningPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter text-left text-gray-900 dark:text-white">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#1E293B,#334155)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(255,255,255,0.1)',borderColor:'rgba(255,255,255,0.2)',color:'#CBD5E1'}}>🧼 Pristine Growth SEO</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            The Number #1 Choice For <br /><span className="text-sky-300">New Bookings</span> — 100% Autopilot
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-blue-50 font-medium italic">When homeowners search 'house cleaning' or 'janitorial services near me', your company should be the top result. We automate your expertise on Google daily.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-slate-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-slate-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/examples" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Examples</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">Residential & Janitorial Dominance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'🏡',title:'House Keeping AI',desc:'We target high-intent searches like "recurrent maid service", "spring cleaning", and "move-in deep clean" to drive local homeowner calls.'},
              {icon:'🏢',title:'Janitorial Leads',desc:'Our AI automatically posts about "office sanitation", "floor waxing", and "disinfectant services"—building your authority in the B2B market.'},
              {icon:'🗺️',title:'Map Pack Presence',desc:'Cleaners live and die by their review-to-ranking ratio. We ensure your hours, location, and service categories stay hyper-optimized at the top.'},
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
        title="Pristine Results Showcase"
        subtitle="Visual proof of the spotless environments we help you market to Google."
        items={[
          { title: 'Full House Deep Clean', category: 'Residential', imageUrl: '#' },
          { title: 'Commercial Office Janitorial', category: 'Janitorial', imageUrl: '#' },
          { title: 'Post-Construction Cleanup', category: 'Specialized', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Company Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Cleaners →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
