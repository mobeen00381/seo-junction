import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for HVAC Companies — Rank on Google & Get More HVAC Calls | SEO Junction',
  description: 'SEO Junction helps HVAC contractors rank on Google Maps and local search. Done-for-you website, GMB management, seasonal AI posts. 30-day free trial.',
  keywords: 'SEO for HVAC, Google My Business for HVAC, HVAC local SEO, rank HVAC business Google, get more HVAC customers',
}

export default function SeoForHvacPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#012B38,#014F68)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(8,145,178,0.2)',borderColor:'rgba(8,145,178,0.4)',color:'#67E8F9'}}>❄️ Built for HVAC Contractors</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            Get More HVAC Calls<br /><span className="text-amber-400">Every Season</span> — Without<br />Any Extra Work
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-cyan-100 font-medium">Summer AC calls. Winter heating calls. Year-round Google visibility. SEO Junction manages your Google presence so customers find you first — in every season.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-cyan-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-cyan-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">The HVAC Google Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'☀️',title:'Seasonal Spikes',desc:'When temperatures spike, HVAC searches jump 400%. The contractors who prepared their Google presence in spring are the ones who get flooded with summer AC calls.'},
              {icon:'🗺️',title:'Map Pack Dominance',desc:'The local 3-pack gets 70% of all HVAC clicks. If your three main competitors show up there and you do not, you are working twice as hard for half the calls.'},
              {icon:'🔄',title:'Automated Content',desc:'To rank well year-round, you need fresh posts every month — Tun-ups, emergency cooling, heating prep. SEO Junction does it automatically for your business.'},
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
        title="HVAC Performance Showcase"
        subtitle="Visual proof of the high-quality diagnostics and installations we help you market."
        items={[
          { title: 'Full Ductwork Overhaul', category: 'Installation', imageUrl: '#' },
          { title: 'Compressor Diagnostic', category: 'Repair', imageUrl: '#' },
          { title: 'Annual System Tune-up', category: 'Maintenance', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center border-b border-gray-100 dark:border-slate-800 pb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">HVAC Technical Expertise</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm font-medium">Google verifies HVAC authority using specific technical terms. Our AI includes them naturally in every post we write for your company.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['refrigerant','evaporator coil','condenser','heat exchanger','air handler','BTU rating','SEER rating','ductwork','thermostat','compressor','refrigerant leak','mini split','heat pump','filter replacement','annual maintenance'].map((t,i)=>(
              <span key={i} className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-100 dark:border-cyan-900 bg-cyan-50/30 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400">{t}</span>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
          <h2 className="text-4xl font-black mb-6 tracking-tight italic text-gray-900 dark:text-white">30-Day Free Trial</h2>
          <p className="text-xl text-cyan-600 dark:text-cyan-400 mb-10 uppercase tracking-widest font-black">Get Your HVAC Site Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for HVAC →</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
