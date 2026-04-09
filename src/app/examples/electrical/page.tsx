import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Electrical Demo — Every Job Becomes a Google Post and a 5-Star Review',
  description: 'See how an electrical business looks with Neerzy. This live demo site shows how every job becomes a Google post and a 5-star review automatically.',
  openGraph: {
    title: 'Electrical Demo | Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
    description: 'A live demo of an electrical website built and managed by Neerzy AI. See your business on Google.',
    url: 'https://www.neerzy.com/examples/electrical',
  },
}

export default function ElectricalDemoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── DEMO BANNER ── */}
      <div className="text-white text-center py-3 px-4 text-sm font-semibold relative z-50" style={{ background: '#7C3AED' }}>
        🎯 DEMO SITE — This is what your business website will look like, powered by Neerzy.
        <Link href="/onboarding" className="ml-3 underline font-bold hover:opacity-80">
          Want a site like this? Start free →
        </Link>
      </div>

      {/* ── ELECTRICIAN SITE TOPBAR ── */}
      <div className="bg-yellow-500 text-black text-xs py-2 px-6 flex justify-center gap-8 flex-wrap font-bold">
        <span>📞 <strong>(303) 555-0192</strong></span>
        <span>⚡ <strong>Emergency</strong> 24/7 Available</span>
        <span>🏅 CO Licensed Journeyman <strong>#EJ-99281</strong></span>
        <span>⭐ <strong>5.0 Stars</strong> · 142 Google Reviews</span>
      </div>

      {/* ── ELECTRICIAN NAV ── */}
      <nav className="bg-white border-b px-6 py-6 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <div className="font-bold text-gray-900 text-xl tracking-tight">Spark Electrical</div>
        <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-500">
          <a href="#services" className="hover:text-purple-600">Services</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#reviews" className="hover:text-purple-600">Reviews</a>
          <a href="#faq" className="hover:text-purple-600">FAQ</a>
        </div>
        <a href="tel:3035550192" className="font-bold text-white px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90" style={{ background: '#7C3AED' }}>
          Call Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#1a0533,#2d0f5e)' }} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8" style={{ background: 'rgba(124,58,237,0.2)', color: '#C4B5FD', border: '1px solid rgba(124,58,237,0.3)' }}>
            📍 Capitol Hill · Denver, CO 80203
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Top-Rated Electrician in <span style={{ color: '#F59E0B' }}>Denver, CO</span> —<br />
            Safe, Fast & Reliable
          </h1>
          <p className="text-purple-100 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">If your power is out in Capitol Hill right now — we can be there in 30 minutes.</p>
          <p className="text-xs italic mb-10 opacity-50 text-white">&quot;Hey Siri, find me an electrician near me open now&quot; — we show up first.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:3035550192" className="font-bold text-black px-10 py-5 rounded-2xl text-lg shadow-xl shadow-amber-500/20" style={{ background: '#F59E0B' }}>Call (303) 555-0192</a>
            <a href="#services" className="font-semibold px-10 py-5 rounded-2xl text-lg border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all">See All Services</a>
          </div>
          <p className="text-xs mt-8 opacity-40 text-white font-medium uppercase tracking-widest">License #EJ-99281 · 12 years serving Denver · Available 24/7</p>
        </div>
      </section>

      {/* ── E-E-A-T AUTHOR BIO ── */}
      <section className="py-20 px-6 bg-purple-50 border-b border-purple-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg" style={{ background: '#7C3AED' }}>MG</div>
            <div>
              <div className="font-bold text-gray-900 text-xl mb-1">Marcus Grant — CO Licensed Journeyman Electrician</div>
              <div className="text-sm text-purple-600 font-bold mb-6 uppercase tracking-wide">License #EJ-99281 · 12 years serving Denver · EV Charger Specialist</div>
              <p className="text-gray-700 leading-relaxed text-lg">I started Spark Electrical because I saw too many Denver homeowners getting overcharged for simple fixes. Whether it&apos;s a flickering light in an old Victorian home or a new EV charger installation, I treat every project with the same focus on safety and precision. I live in Denver, and I treat every customer like a neighbor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Electrical Services in Denver, CO</h2>
            <p className="text-gray-500 text-lg">All work is guaranteed and meets current NEC safety codes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Panel Upgrades', desc: 'Old fuse boxes or undersized panels replaced with modern 200-amp service.', nlp: 'breaker panel · amperage · load calc' },
              { icon: '🚗', title: 'EV Chargers', desc: 'Level 2 home charging stations installed for Tesla, Rivian, and all major electric vehicles.', nlp: '240V · NEMA 14-50 · charging port' },
              { icon: '💡', title: 'Lighting Install', desc: 'Recessed lighting, chandeliers, and landscape lighting setup for better home ambiance.', nlp: 'puck light · dimmer switch · LED' },
              { icon: '🔌', title: 'Outlets & GFCI', desc: 'Fixing dead outlets and installing required GFCI protection in kitchens and baths.', nlp: 'ground fault · receptacle · pigtail' },
              { icon: '🏠', title: 'Home Rewiring', desc: 'Replacing old aluminum or knob-and-tube wiring with safe, modern copper circuits.', nlp: 'copper wire · circuit map · junction box' },
              { icon: '🚨', title: '24/7 Emergency', desc: 'Rapid response for power outages, burning smells, or sparking panels.', nlp: 'short circuit · hot wire · emergency call' },
            ].map((s, i) => (
              <div key={i} className="border border-gray-100 rounded-3xl p-8 hover:border-purple-200 hover:shadow-xl transition-all bg-white group">
                <div className="text-4xl mb-6 transition-transform group-hover:scale-110">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="text-xs font-bold text-purple-600 uppercase tracking-widest">{s.nlp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3 font-syne">Serving Capitol Hill, Denver & Surrounding Areas</h2>
          <p className="text-gray-500 text-sm mb-6">We cover Capitol Hill, LoDo, Cherry Creek, RiNo, Highlands, and all of Metro Denver. ZIP codes: <strong>80203, 80206, 80202, 80205, 80211</strong></p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Capitol Hill 80203', 'LoDo', 'RiNo District', 'Highlands', 'Cherry Creek', 'Washington Park', 'City Park', 'Five Points', 'Curtis Park'].map((n, i) => (
              <span key={i} className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${i === 0 ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-700 border-gray-200'}`}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-10 font-syne">What Denver Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: 'Sarah L.', loc: 'Capitol Hill, Denver', date: 'Mar 2025', text: 'Marcus was incredible. Had an emergency with my breaker panel and he was here in 25 minutes. Extremely professional and fair pricing.' },
              { n: 'Julian P.', loc: 'RiNo, Denver', date: 'Feb 2025', text: "Installed our Tesla charger perfectly. Handled the permit and everything. It looks super clean and works great. Highly recommend." },
              { n: 'Elena D.', loc: 'Cherry Creek, Denver', date: 'Jan 2025', text: "Very thorough. Found a fire hazard in our old Victorian wiring that other electricians missed. Marcus saved our home!" },
            ].map((r, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-5">
                <div className="text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">&quot;{r.text}&quot;</p>
                <div className="font-bold text-gray-900 text-sm">{r.n}</div>
                <div className="text-xs text-gray-400">{r.loc} · {r.date} · Verified Google Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 font-syne">Denver Electrical Costs — 2025 Rates</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead style={{ background: '#7C3AED' }}>
                <tr>
                  {['Service', 'Denver Price', 'Time', 'Permit?', 'Urgency'].map(h => <th key={h} className="text-left px-4 py-3 text-white font-bold text-xs uppercase tracking-wide">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Outlet replacement', '$120–$250', '1 hr', 'No', 'Low'],
                  ['EV charger install', '$600–$1,200', '2–4 hrs', 'Yes', 'Medium'],
                  ['Panel upgrade', '$1,800–$3,500', '6–8 hrs', 'Yes', 'Medium'],
                  ['Recessed lighting', '$150/fixture', 'Varies', 'Sometimes', 'Low'],
                  ['Emergency call-out', '$175 flat fee', 'Varies', 'N/A', 'High'],
                  ['Smart home setup', '$200–$800', '1–3 hrs', 'No', 'Low'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-purple-600 mt-3 text-center font-medium">💡 Safety inspection included with every panel upgrade. Ask when you book.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 font-syne">Questions About Denver Electricians</h2>
          <div className="space-y-3">
            {[
              { q: 'How fast can an electrician get to Capitol Hill?', a: 'We prioritize Capitol Hill for emergency calls and can usually have a technician on-site in under 45 minutes.' },
              { q: 'Is a permit required for an EV charger in Denver?', a: 'Yes, the City of Denver requires an electrical permit for any new circuit installation. We handle the entire permitting and inspection process for you.' },
              { q: 'Why is my circuit breaker constantly tripping?', a: 'It could be a simple overload or a more serious issue like a short circuit or ground fault. If it continues to trip, call us immediately to prevent a potential electrical fire.' },
            ].map((f, i) => (
              <details key={i} className="border border-gray-200 rounded-xl group">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-xl">
                  {f.q}<span className="text-purple-500">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#1a0533' }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-3 font-syne">Need an Electrician in Denver Right Now?</h2>
        <p className="text-purple-200 opacity-70 mb-8">Licensed. Insured. 12 years serving Metro Denver. Safe work guaranteed.</p>
        <a href="tel:3035550192" className="inline-block font-bold text-black px-10 py-4 rounded-xl text-base" style={{ background: '#F59E0B' }}>
          📞 (303) 555-0192 — Call Marcus
        </a>
        <p className="text-xs mt-4 opacity-30 text-white">CO License #EJ-99281 · Available 24/7 · Safety-First focus</p>
      </section>

      {/* ── BACK TO Neerzy ── */}
      <div className="bg-purple-600 text-white text-center py-5 px-6">
        <p className="text-sm font-medium mb-2">This site was built by <strong>Neerzy</strong> in under 24 hours — automatically.</p>
        <Link href="/onboarding" className="inline-block font-bold text-purple-600 bg-white px-6 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
          Get a site like this → Start Free Trial
        </Link>
      </div>

    </div>
  )
}
