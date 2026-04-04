import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'Hardware SEO — DIY & Tools Visibility | SEO Junction',
  description: 'SEO Junction helps local hardware stores rank for tools, paint, and garden supplies. Automated SEO posts for seasonal hardware needs. 30-day free trial.',
  keywords: 'SEO for hardware stores, tool shop marketing, local hardware SEO, DIY supplies near me, hardware store Google rank',
}

export default function SeoForHardwarePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#78716C,#44403C)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(245,158,11,0.2)',borderColor:'rgba(245,158,11,0.4)',color:'#FCD34D'}}>🔨 The Hardware Authority</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            The Go-To Shop for <br /><span className="text-amber-300">Tools & Supplies</span> — 0% Effort Required
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-amber-50 font-medium">When neighbors search for 'drill bits' or 'mulch near me', your hardware store should be the top result. We manage your Google profile with expert terms like 'PEX fittings' and 'garden tools' automatically.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-amber-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-amber-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">The Hardware SEO Edge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'🔩',title:'Technical Inventory',desc:'We use AI to target specific hardware terms like "PVC fittings", "galvanized pipe", and "fasteners" to reach professional contractors.'},
              {icon:'🏡',title:'Seasonal DIY',desc:'Our AI automatically posts home maintenance tips and seasonal product highlights (snow shovels, lawn seed) when search volume peaks.'},
              {icon:'🛠️',title:'Map Pack Power',desc:'Hardware stores live in the Map Pack. We optimize your GMB profile to ensure your phone number and location are always #1.'},
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
        title="Hardware Store Showcase"
        subtitle="Visual proof of the tool selection and expertise we help you market."
        items={[
          { title: 'Tool Specialist Section', category: 'Inventory', imageUrl: '#' },
          { title: 'Garden Center Layout', category: 'Seasonal', imageUrl: '#' },
          { title: 'Pro Contractor Counter', category: 'Service', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-amber-600 dark:text-amber-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Store Live For Only <span className="text-gray-900 dark:text-white">$19.99 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Hardware →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
