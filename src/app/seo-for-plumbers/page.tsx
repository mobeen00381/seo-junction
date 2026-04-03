import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO for Plumbers — Rank on Google & Get More Plumbing Calls | SEO Junction',
  description: 'SEO Junction helps plumbers rank on Google and Google Maps. Done-for-you website + AI posts + GMB management. 30-day free trial. Most plumbers see results in 45 days.',
  keywords: 'SEO for plumbers, Google My Business for plumbers, plumber local SEO, rank plumbing business Google, get more plumbing customers',
}

export default function SeoForPlumbersPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-40 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold" style={{fontFamily:'Syne,sans-serif'}}>SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold px-4 py-2 rounded-lg text-white" style={{background:'#1565C0'}}>Start Free Trial</Link>
      </nav>

      <section style={{background:'linear-gradient(135deg,#0B1F3A,#162944)'}} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border" style={{background:'rgba(21,101,192,0.2)',borderColor:'rgba(21,101,192,0.4)',color:'#90CAF9'}}>🔧 Built for Plumbing Companies</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{fontFamily:'Syne,sans-serif'}}>
            Get Your Plumbing Business<br /><span style={{color:'#F59E0B'}}>to the Top of Google</span><br />Without Lifting a Finger
          </h1>
          <p className="text-blue-200 opacity-80 mb-10 text-lg max-w-xl mx-auto">You fix pipes. We fix your Google ranking. We build your website, manage your GMB profile, and post fresh plumbing content every month — automatically.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-black px-8 py-4 rounded-xl text-base" style={{background:'#F59E0B'}}>Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border text-white" style={{borderColor:'rgba(255,255,255,0.25)'}}>See Live Plumber Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" style={{ fontFamily: 'Syne, sans-serif' }}>We Know What Plumbers Deal With</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📵', title: "You&apos;re on job sites all day", desc: "You have no time to write posts, update your Google profile, or respond to reviews. Meanwhile your competitor who does is getting your calls." },
              { icon: '📍', title: "You don&apos;t show up on Google Maps", desc: "When someone searches &apos;plumber near me&apos; you should be in the top 3. If you&apos;re not, those calls go to someone else — every single day." },
              { icon: '😤', title: "You tried SEO and it didn&apos;t work", desc: "You paid an agency $500/month, got a confusing report, and saw zero results. SEO Junction shows you exactly what posts go live and exactly where you rank." },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Our AI Speaks Plumber</h2>
          <p className="text-gray-600 mb-8 text-sm">Google checks whether content was written by a real expert. Our posts include real plumbing terms that signal expertise to Google&apos;s algorithm.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['P-trap','hydro-jetting','sewer lateral','shut-off valve','water main','supply line','drain snake','backflow preventer','wax ring','anode rod','PEX pipe','galvanized pipe','slab leak'].map((t,i)=>(
              <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-200 bg-white text-blue-700">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{background:'#0B1F3A'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{fontFamily:'Syne,sans-serif'}}>Get More Plumbing Calls for <span style={{color:'#F59E0B'}}>$19/Month</span></h2>
          <p className="text-blue-200 opacity-70 mb-8">30-day free trial. Your website live in 24 hours. Cancel anytime.</p>
          <Link href="/onboarding" className="inline-block font-bold text-black px-10 py-4 rounded-xl" style={{background:'#F59E0B'}}>Start Free Trial — Built for Plumbers →</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10" style={{fontFamily:'Syne,sans-serif'}}>Plumber SEO Questions — Answered Simply</h2>
          <div className="space-y-3">
            {[
              {q:'How do I get my plumbing business on Google Maps?',a:'Three things drive Google Maps ranking for plumbers: a fully optimized Google Business Profile, consistent weekly posts to that profile, and a website with local keywords. SEO Junction handles all three automatically. Most plumbers see map pack movement within 30–60 days.'},
              {q:'How long does SEO take to work for a plumbing company?',a:'Most plumbers using SEO Junction see their first ranking improvements within 30–45 days. Calls and inquiries typically increase by month 2. SEO compounds over time — the longer you run it, the stronger your position gets.'},
              {q:'What keywords should a plumber target on Google?',a:'Start with your core service plus city — "plumber Austin TX," "emergency plumber Denver," "drain cleaning near me." Then add service-specific terms: water heater repair, pipe leak, sewer line. SEO Junction targets all of these automatically for your location.'},
              {q:'Do I need a website to rank on Google Maps?',a:'Technically no — but plumbers with a linked website rank 40% higher in Google Maps than those without one. SEO Junction builds the website for you as part of every plan.'},
            ].map((f,i)=>(
              <details key={i} className="border border-gray-200 rounded-xl">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-gray-50">
                  {f.q}<span className="text-blue-500 ml-4 flex-shrink-0">+</span>
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
