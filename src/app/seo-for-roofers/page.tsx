import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO for Roofers — Rank on Google After Every Storm | SEO Junction',
  description: 'SEO Junction helps roofing companies rank on Google and capture storm damage leads. Done-for-you website, GMB management, AI posts. 30-day free trial.',
  keywords: 'SEO for roofers, Google My Business for roofers, roofing company local SEO, storm damage leads, rank roofing business Google',
}

export default function SeoForRoofersPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-40 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#B45309'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold px-4 py-2 rounded-lg text-white" style={{background:'#B45309'}}>Start Free Trial</Link>
      </nav>

      <section style={{background:'linear-gradient(135deg,#1C0A00,#3D1A00)'}} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border" style={{background:'rgba(180,83,9,0.2)',borderColor:'rgba(180,83,9,0.4)',color:'#FCD34D'}}>🏠 Built for Roofing Companies</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Capture Storm Leads Before<br /><span style={{color:'#F59E0B'}}>Your Competitor Does</span> —<br />Rank on Google Year-Round
          </h1>
          <p className="mb-10 text-lg max-w-xl mx-auto" style={{color:'rgba(253,211,77,0.7)'}}>After a storm hits your city, search volume for roofing jumps 400%. The contractor with the best Google presence gets the first wave of calls. SEO Junction makes sure that is you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-black px-8 py-4 rounded-xl text-base" style={{background:'#F59E0B'}}>Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border text-white" style={{borderColor:'rgba(255,255,255,0.25)'}}>See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" style={{fontFamily:'Syne,sans-serif'}}>Why Roofers Lose Google Leads</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'🌩️',title:'Storm hits — you are not ranked yet',desc:'After hail or wind damage, homeowners search immediately. If your Google profile has not been active and your website has no storm content, you will not appear. The roofer who posted storm content last month gets all those calls.'},
              {icon:'🏡',title:'Insurance job keywords are untapped',desc:'Searches like "roof insurance claim help" and "hail damage roof repair" are high-intent and high-value. Most roofers never target them. SEO Junction adds them automatically to your content and GMB profile.'},
              {icon:'📸',title:'No before/after photos on your GMB',desc:'Roofing is a visual trade. Homeowners want to see the work. Google prioritizes GMB profiles with regular fresh photos. SEO Junction prompts you for job photos and posts them to your profile automatically.'},
            ].map((p,i)=>(
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4" style={{fontFamily:'Syne,sans-serif'}}>Roofing Terms Built Into Every Post</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {['flashing','underlayment','fascia','soffit','ridge cap','ice dam','decking','sheathing','drip edge','valley','storm damage','hail damage','insurance claim','roof inspection','shingle replacement'].map((t,i)=>(
              <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold border text-amber-800" style={{borderColor:'#FDE68A',background:'white'}}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{background:'#1C0A00'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{fontFamily:'Syne,sans-serif'}}>Rank Before the Next Storm Hits — <span style={{color:'#F59E0B'}}>$19/Month</span></h2>
          <p className="mb-8" style={{color:'rgba(253,211,77,0.6)'}}>30-day free trial. Storm-ready content posted automatically. Cancel anytime.</p>
          <Link href="/onboarding" className="inline-block font-bold text-black px-10 py-4 rounded-xl" style={{background:'#F59E0B'}}>Start Free Trial — Built for Roofers →</Link>
        </div>
      </section>
    </div>
  )
}
