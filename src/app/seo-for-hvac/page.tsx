import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO for HVAC Companies — Rank on Google & Get More HVAC Calls | SEO Junction',
  description: 'SEO Junction helps HVAC contractors rank on Google Maps and local search. Done-for-you website, GMB management, seasonal AI posts. 30-day free trial.',
  keywords: 'SEO for HVAC, Google My Business for HVAC, HVAC local SEO, rank HVAC business Google, get more HVAC customers',
}

export default function SeoForHvacPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-40 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#0891B2'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold px-4 py-2 rounded-lg text-white" style={{background:'#0891B2'}}>Start Free Trial</Link>
      </nav>

      <section style={{background:'linear-gradient(135deg,#012B38,#014F68)'}} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border" style={{background:'rgba(8,145,178,0.2)',borderColor:'rgba(8,145,178,0.4)',color:'#67E8F9'}}>❄️ Built for HVAC Contractors</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Get More HVAC Calls<br /><span style={{color:'#F59E0B'}}>Every Season</span> — Without<br />Any Extra Work
          </h1>
          <p className="mb-10 text-lg max-w-xl mx-auto" style={{color:'rgba(103,232,249,0.8)'}}>Summer AC calls. Winter heating calls. Year-round Google visibility. SEO Junction manages your Google presence so HVAC customers find you first — in every season.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-black px-8 py-4 rounded-xl text-base" style={{background:'#F59E0B'}}>Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border text-white" style={{borderColor:'rgba(255,255,255,0.25)'}}>See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" style={{fontFamily:'Syne,sans-serif'}}>The HVAC Google Problem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'☀️',title:'Summer and winter spikes — are you ready?',desc:'When temperatures spike, HVAC search volume jumps 400%. The contractors who prepared their Google presence in spring are the ones who get flooded with summer AC calls. The ones who didn\'t miss the whole peak season.'},
              {icon:'🗺️',title:'Your competitors are in the map pack — you are not',desc:'The local 3-pack gets 70% of all HVAC clicks. If your three main competitors show up there and you do not, you are working twice as hard to get half the calls they receive without trying.'},
              {icon:'🔄',title:'Seasonal content is a full-time job',desc:'To rank well year-round, you need fresh content every month — AC tune-up posts in spring, emergency cooling in summer, heating prep in fall. This takes hours. SEO Junction does it automatically for your business.'},
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

      <section className="py-16 px-6" style={{background:'#F0FDFE'}}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4" style={{fontFamily:'Syne,sans-serif'}}>HVAC Technical Terms — Built Into Every Post</h2>
          <p className="text-gray-600 mb-8 text-sm">Google verifies HVAC content expertise using specific technical entity terms. Our AI includes them naturally in every post we write for your company.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['refrigerant','evaporator coil','condenser','heat exchanger','air handler','BTU rating','SEER rating','ductwork','thermostat','compressor','refrigerant leak','mini split','heat pump','filter replacement','annual maintenance'].map((t,i)=>(
              <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold border text-cyan-700" style={{borderColor:'#A5F3FC',background:'white'}}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{background:'#012B38'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{fontFamily:'Syne,sans-serif'}}>More HVAC Calls — Summer and Winter — <span style={{color:'#F59E0B'}}>$19/Month</span></h2>
          <p className="mb-8" style={{color:'rgba(103,232,249,0.7)'}}>30-day free trial. Your website live in 24 hours. Seasonal posts automated.</p>
          <Link href="/onboarding" className="inline-block font-bold text-black px-10 py-4 rounded-xl" style={{background:'#F59E0B'}}>Start Free Trial — Built for HVAC →</Link>
        </div>
      </section>
    </div>
  )
}
