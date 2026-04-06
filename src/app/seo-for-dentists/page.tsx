import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Dentists — Get More New Patients & Rank #1 | SEO Junction',
  description: 'SEO Junction helps dentists rank on Google Maps and local search. Done-for-you hygiene reminders, emergency dental AI posts, and more. 30-day free trial.',
  keywords: 'SEO for dentists, Google My Business for dentists, local dental SEO, dental practice marketing, get more dental patients',
}

export default function SeoForDentistPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#0E7490,#155E75)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(255,255,255,0.1)',borderColor:'rgba(255,255,255,0.2)'}}>🦷 Dentistry Growth Engine</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            Fill Your Calendar with <br /><span className="text-cyan-300">New Patients</span> — 100% On Autopilot
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed">Most dental patients search "dentist near me" and call the top 3 results. We put your practice in that top spot. No complex SEO jargon, just real patient calls.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-cyan-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-cyan-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/examples" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Examples</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">How We Grow Your Practice</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'🦷',title:'Emergency Ranking',desc:'When someone has a toothache, they don’t wait. We ensure you show up #1 for emergency dental searches in your exact neighborhood.'},
              {icon:'💉',title:'Treatment Education',desc:'Our AI automatically posts hygiene tips and treatment explanations to your site, building trust with patients before they even call.'},
              {icon:'📅',title:'Hygiene Recalls',desc:'We emphasize the importance of regular cleanings through seasonal Google posts, keeping your existing patients coming back.'},
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
        title="Smile Showcase"
        subtitle="Real facility and treatment results from our dental partners."
        items={[
          { title: 'Advanced Whitening', category: 'Cosmetic', imageUrl: '#' },
          { title: 'Modern Hygiene Suite', category: 'Facility', imageUrl: '#' },
          { title: 'Oral Surgery Case', category: 'Surgery', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Clinic Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Dentists →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
