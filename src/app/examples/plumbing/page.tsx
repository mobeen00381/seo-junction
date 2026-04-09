import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plumbing Demo — Every Job Becomes a Google Post and a 5-Star Review',
  description: 'See how a plumbing business looks with Neerzy. This live demo site shows how every job becomes a Google post and a 5-star review automatically.',
  openGraph: {
    title: 'Plumbing Demo | Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
    description: 'A live demo of a plumbing website built and managed by Neerzy AI. See your business on Google.',
    url: 'https://www.neerzy.com/examples/plumbing',
  },
}

export default function PlumbingDemoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── DEMO BANNER ── */}
      <div className="text-white text-center py-3 px-4 text-sm font-semibold relative z-50" style={{ background: '#1565C0' }}>
        🎯 DEMO SITE — This is what your business website will look like, powered by Neerzy.
        <Link href="/onboarding" className="ml-3 underline font-bold hover:opacity-80">
          Want a site like this? Start free →
        </Link>
      </div>

      {/* ── PLUMBER SITE TOPBAR ── */}
      <div className="bg-red-700 text-white text-xs py-2 px-6 flex justify-center gap-8 flex-wrap">
        <span>📞 <strong>(512) 555-4821</strong></span>
        <span>⏱ <strong>Same-Day</strong> Service Available</span>
        <span>🏅 TX Master Plumber <strong>License #MP-44821</strong></span>
        <span>⭐ <strong>4.9 Stars</strong> · 284 Google Reviews</span>
      </div>

      {/* ── PLUMBER NAV ── */}
      <nav className="bg-white border-b px-6 py-6 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <div className="font-bold text-gray-900 text-xl tracking-tight">Elite Plumbing Pro</div>
        <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-500">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#reviews" className="hover:text-primary">Reviews</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
        </div>
        <a href="tel:5125554821" className="font-bold text-white px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90" style={{ background: '#DC2626' }}>
          Call Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#1B1B2F,#162944)' }} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8" style={{ background: 'rgba(220,38,38,0.2)', color: '#FCA5A5', border: '1px solid rgba(220,38,38,0.3)' }}>
            📍 South Congress Ave · Austin, TX 78704
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Trusted Plumber in <span style={{ color: '#FCA5A5' }}>Austin, TX</span> —<br />
            Fast, Licensed & Local
          </h1>
          {/* ✅ VOICE SEARCH PHRASE */}
          <p className="text-blue-100 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">If you need a plumber near South Congress Austin right now — we are 15 minutes away.</p>
          <p className="text-xs italic mb-10 opacity-50 text-white">&quot;Hey Siri, find me a plumber near me open now&quot; — we show up first.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:5125554821" className="font-bold text-white px-10 py-5 rounded-2xl text-lg shadow-xl shadow-red-900/40" style={{ background: '#DC2626' }}>Call (512) 555-4821</a>
            <a href="#services" className="font-semibold px-10 py-5 rounded-2xl text-lg border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all">See All Services</a>
          </div>
          <p className="text-xs mt-8 opacity-40 text-white font-medium uppercase tracking-widest">License #MP-44821 · 16 years serving Austin · Available 24/7</p>
        </div>
      </section>

      {/* ── E-E-A-T AUTHOR BIO ── */}
      <section className="py-20 px-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg" style={{ background: '#1565C0' }}>CR</div>
            <div>
              <div className="font-bold text-gray-900 text-xl mb-1">Carlos Reyes — TX Licensed Master Plumber</div>
              <div className="text-sm text-primary font-bold mb-6 uppercase tracking-wide">License #MP-44821 · 16 years serving Austin · Backflow Preventer Certified</div>
              <p className="text-gray-700 leading-relaxed text-lg">I grew up in South Congress. I have worked on every type of Austin home — old bungalows in Travis Heights, new builds in Bouldin Creek, and everything in between. I started Elite Plumbing Pro to give Austin families honest, fair plumbing at a price that makes sense. These are my neighbors — I treat every job that way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plumbing Services in Austin, TX</h2>
            <p className="text-gray-500 text-lg">All work comes with a 1-year parts and labor warranty.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚿', title: 'Drain Cleaning', desc: 'Clogged drains cleared with a drain snake or hydro-jet. Kitchen, bathroom, and main sewer lateral.', nlp: 'P-trap · hydro-jetting · sewer lateral' },
              { icon: '🔧', title: 'Pipe Leak Repair', desc: 'Burst pipes, copper joint leaks, supply line failures, and slab leaks found and fixed same day.', nlp: 'supply line · copper pipe · slab leak' },
              { icon: '🌡️', title: 'Water Heater', desc: 'Tank and tankless water heater repair or replacement. We stock most units — same-day installs daily.', nlp: 'tankless · anode rod · heating element' },
              { icon: '🚽', title: 'Toilet Repair', desc: 'Running toilets waste 200 gallons a day. We fix flapper valves, wax rings, and fill valves fast.', nlp: 'wax ring · flapper · fill valve' },
              { icon: '🏠', title: 'Repiping', desc: 'Old galvanized or lead pipes replaced with modern PEX or copper. Brown water is a sign to call us.', nlp: 'PEX · galvanized · backflow preventer' },
              { icon: '🚨', title: 'Emergency Plumbing', desc: '24/7 response for burst pipes, flooding, and sewer backups. Serving South Congress area in 60 min.', nlp: 'water main · main shutoff · emergency' },
            ].map((s, i) => (
              <div key={i} className="border border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all bg-white group">
                <div className="text-4xl mb-6 transition-transform group-hover:scale-110">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="text-xs font-bold text-primary uppercase tracking-widest">{s.nlp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3 font-syne">Serving South Congress, Austin & Surrounding Areas</h2>
          <p className="text-gray-500 text-sm mb-6">We cover South Congress, Bouldin Creek, Travis Heights, South Lamar, Barton Springs, and all of Austin. ZIP codes: <strong>78704, 78745, 78748, 78749, 78741</strong></p>
          <div className="flex flex-wrap justify-center gap-2">
            {['South Congress 78704', 'Bouldin Creek', 'Travis Heights', 'South Lamar', 'Barton Springs', 'Zilker Park', 'East Austin 78702', 'Downtown Austin 78701', 'North Loop 78756'].map((n, i) => (
              <span key={i} className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${i === 0 ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-200'}`}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-10 font-syne">What Austin Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: 'Karen T.', loc: 'South Congress, Austin', date: 'Mar 2025', text: 'Called at 7am for a burst pipe. Carlos was here by 8:30. Fixed it fast, cleaned up after himself. Price was exactly what he quoted — not a dollar more.' },
              { n: 'Mike S.', loc: 'Bouldin Creek, Austin', date: 'Feb 2025', text: "Water heater broke Sunday night. They came out, found a failed heating element, had hot water back the same visit. I couldn't believe it." },
              { n: 'Diane R.', loc: 'Travis Heights, Austin', date: 'Jan 2025', text: "Very honest. Told me my P-trap just needed cleaning — didn't try to sell me a full drain replacement. That kind of honesty is rare." },
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
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 font-syne">Austin Plumbing Costs — 2025 Rates</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead style={{ background: '#1565C0' }}>
                <tr>
                  {['Service', 'Austin Price', 'Time', 'Permit?', 'Urgency'].map(h => <th key={h} className="text-left px-4 py-3 text-white font-bold text-xs uppercase tracking-wide">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Faucet repair', '$150–$350', '1–2 hrs', 'No', 'Low'],
                  ['Drain cleaning', '$120–$280', '1–2 hrs', 'No', 'Medium'],
                  ['Toilet repair', '$100–$300', '1 hr', 'No', 'Low'],
                  ['Water heater replace', '$900–$2,000', '2–4 hrs', 'Sometimes', 'Medium'],
                  ['Pipe leak repair', '$250–$900', '1–4 hrs', 'Sometimes', 'High'],
                  ['Emergency call-out', '+ $150–$300 fee', 'Varies', 'Varies', 'Emergency'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-primary mt-3 text-center font-medium">💡 Diagnostic fee waived when you hire us for the repair. Ask when you call.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 font-syne">Questions About Austin Plumbers</h2>
          <div className="space-y-3">
            {[
              { q: 'How fast can a plumber get to South Congress, Austin?', a: 'We aim for 60-minute response to the South Congress and Bouldin Creek area. For standard appointments, same-day slots are available if you call before noon.' },
              { q: 'Do I need a permit for plumbing work in Austin?', a: 'For simple repairs like fixing a faucet or clearing a drain — no permit needed. For water heater replacement, new pipe runs, or repiping — yes, a City of Austin permit is required. We pull every permit for you.' },
              { q: 'Why is my water brown in my Austin home?', a: 'Brown water almost always means corroding galvanized pipes — common in older Austin bungalows built before 1970. Call us for an assessment. Waiting too long means a full pipe failure and water damage.' },
            ].map((f, i) => (
              <details key={i} className="border border-gray-200 rounded-xl group">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 rounded-xl">
                  {f.q}<span className="text-blue-500">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#1B1B2F' }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-3 font-syne">Need a Plumber in Austin Right Now?</h2>
        <p className="text-blue-200 opacity-70 mb-8">Licensed. Insured. 16 years serving South Congress and all of Austin. Call anytime.</p>
        <a href="tel:5125554821" className="inline-block font-bold text-black px-10 py-4 rounded-xl text-base" style={{ background: '#F59E0B' }}>
          📞 (512) 555-4821 — Call Free
        </a>
        <p className="text-xs mt-4 opacity-30 text-white">TX License #MP-44821 · Available 24/7 · Free estimate</p>
      </section>

      {/* ── BACK TO Neerzy ── */}
      <div className="bg-primary text-white text-center py-5 px-6">
        <p className="text-sm font-medium mb-2">This site was built by <strong>Neerzy</strong> in under 24 hours — automatically.</p>
        <Link href="/onboarding" className="inline-block font-bold text-primary bg-white px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
          Get a site like this → Start Free Trial
        </Link>
      </div>

    </div>
  )
}
