import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Pet Groomers — Book More Grooming Appointments | SEO Junction',
  description: 'SEO Junction helps pet groomers rank for "dog grooming near me". Automated breed-specific SEO posts, grooming tips, and local ranking. 30-day free trial.',
  keywords: 'SEO for pet groomers, dog grooming marketing, rank pet grooming Google, cat grooming SEO, pet groomer near me',
}

export default function SeoForPetGroomingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter text-left">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#EC4899,#BE185D)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(255,255,255,0.1)',borderColor:'rgba(255,255,255,0.2)',color:'#FCE7F3'}}>🐩 Local Pet Visibility</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            Pawsome Growth for <br /><span className="text-pink-200">Local Groomers</span> — 100% Autopilot
          </h1>
          <p className="mb-10 text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-pink-50 font-medium italic">When pet owners search 'poodle grooming' or 'nail trim near me', your salon should be the top result. We automate your expertise on Google daily.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-pink-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-pink-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">Grooming Salon Dominance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'🐕',title:'Breed-Specific SEO',desc:'We target high-intent searches like "Golden Retriever grooming", "cat hair removal", and "puppy first trim" to drive local owner calls.'},
              {icon:'✂️',title:'Grooming Authority',desc:'Our AI automatically posts hygiene tips and deshedding explanations, building your trust before the pet even enters your salon.'},
              {icon:'🗺️',title:'Map Pack Presence',desc:'Pet owners look for proximity. We ensure your hours, location, and pet categories are hyper-optimized to stay at the top.'},
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
        title="Fluffy Finished Projects"
        subtitle="Visual proof of the expert grooming care we help you market to Google."
        items={[
          { title: 'Full Doodle Groom', category: 'Styling', imageUrl: '#' },
          { title: 'Persian Cat De-shed', category: 'Hygiene', imageUrl: '#' },
          { title: 'Showroom Ready Poodle', category: 'Prep', imageUrl: '#' },
        ]}
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight text-center italic">30-Day Free Trial</h2>
          <p className="text-xl text-pink-600 dark:text-pink-400 mb-10 text-center uppercase tracking-widest font-bold font-inter">Get Your Shop Live For Only <span className="text-gray-900 dark:text-white">$19 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105" style={{background:'var(--premium-gradient)'}}>Start Free Trial — Built for Groomers →</Link>
          <p className="mt-6 text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-tighter">No long term contracts. cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
