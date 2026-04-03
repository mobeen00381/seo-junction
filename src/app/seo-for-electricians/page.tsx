import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO for Electricians — Rank on Google & Get More Electrical Calls | SEO Junction',
  description: 'SEO Junction helps electricians rank on Google Maps and local search. Done-for-you website, GMB management, and AI posts. 30-day free trial. More calls in 60 days.',
  keywords: 'SEO for electricians, Google My Business for electricians, electrician local SEO, rank electrical business Google',
}

export default function SeoForElectriciansPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-40 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#7C3AED'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold px-4 py-2 rounded-lg text-white" style={{background:'#7C3AED'}}>Start Free Trial</Link>
      </nav>

      <section style={{background:'linear-gradient(135deg,#1a0533,#2d0f5e)'}} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border" style={{background:'rgba(124,58,237,0.2)',borderColor:'rgba(124,58,237,0.4)',color:'#C4B5FD'}}>⚡ Built for Electrical Contractors</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Get Your Electrical Business<br /><span style={{color:'#F59E0B'}}>Into Google&apos;s Top 3</span><br />Without the SEO Headaches
          </h1>
          <p className="mb-10 text-lg max-w-xl mx-auto" style={{color:'rgba(196,181,253,0.8)'}}>You run electrical jobs all day. You should not be writing Google posts at night. SEO Junction builds your site, manages your GMB, and posts content every month — all without you doing a thing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-black px-8 py-4 rounded-xl text-base" style={{background:'#F59E0B'}}>Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border text-white" style={{borderColor:'rgba(255,255,255,0.25)'}}>See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" style={{fontFamily:'Syne,sans-serif'}}>What Electricians Struggle With</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'⚡',title:'Panel upgrades are your best job — but nobody finds you for them',desc:'High-value searches like "200 amp panel upgrade" and "EV charger installation" are wide open in most cities. Without SEO, those leads go to whoever has the best Google presence — not necessarily the best electrician.'},
              {icon:'🗺️',title:'You are invisible in the local map pack',desc:'The three electricians in the Google Maps box above search results get 70% of all clicks. If you are not in those three spots, most people searching near you never see your name.'},
              {icon:'⭐',title:'You have great reviews but nobody sees them',desc:'Five stars on Google means nothing if you do not rank. SEO Junction makes sure the right people find your profile, read your reviews, and call you — not your competitor.'},
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

      <section className="py-16 px-6 bg-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4" style={{fontFamily:'Syne,sans-serif'}}>Posts Written in Electrician Language</h2>
          <p className="text-gray-600 mb-8 text-sm">Google&apos;s algorithm verifies that your content was written by a real electrical expert. Our AI includes the technical terms that prove it.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['circuit breaker','GFCI outlet','load panel','junction box','conduit','arc fault','ground fault','service entrance','200 amp upgrade','watt meter','EV charger','subpanel','dedicated circuit','electrical permit','voltage drop'].map((t,i)=>(
              <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold border text-purple-700" style={{borderColor:'#C4B5FD',background:'white'}}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{background:'#1a0533'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{fontFamily:'Syne,sans-serif'}}>More Electrical Jobs from Google — <span style={{color:'#F59E0B'}}>$19/Month</span></h2>
          <p className="mb-8" style={{color:'rgba(196,181,253,0.7)'}}>30-day free trial. Your website live in 24 hours. Cancel anytime.</p>
          <Link href="/onboarding" className="inline-block font-bold text-black px-10 py-4 rounded-xl" style={{background:'#F59E0B'}}>Start Free Trial — Built for Electricians →</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10" style={{fontFamily:'Syne,sans-serif'}}>Electrician SEO Questions</h2>
          <div className="space-y-3">
            {[
              {q:'How do I get my electrical business on Google Maps?',a:'The three biggest factors: a complete Google Business Profile with all services listed (including EV charger, panel upgrade, GFCI), weekly posts to your GMB profile, and a website that mentions your service areas and ZIP codes. SEO Junction handles all three automatically.'},
              {q:'What services should I list on Google for my electrical business?',a:'List every service you offer — most electricians only list 3 when they could list 15+. Include: panel upgrades, circuit breaker repair, GFCI installation, EV charger installation, landscape lighting, smart home wiring, electrical inspections. Each one is a separate search keyword.'},
              {q:'How long until my electrical business ranks on Google?',a:'Most electrical contractors see their first ranking movement within 45–60 days. High-value searches like "200 amp panel upgrade near me" often rank faster because fewer competitors optimize for them specifically.'},
            ].map((f,i)=>(
              <details key={i} className="border border-gray-200 rounded-xl">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-gray-50">
                  {f.q}<span className="text-purple-500 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
