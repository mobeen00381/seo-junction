import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Live Demo — Bright Smiles Dental Miami FL | SEO Junction',
  description: 'See exactly what your SEO Junction website looks like. This is a live demo site for Bright Smiles Dental in Miami, FL — built and managed by SEO Junction AI.',
}

export default function DentalDemoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── DEMO BANNER ── */}
      <div className="text-white text-center py-3 px-4 text-sm font-semibold relative z-50" style={{ background: '#059669' }}>
        🎯 DEMO SITE — This is what your business website will look like, powered by SEO Junction.
        <Link href="/onboarding" className="ml-3 underline font-bold hover:opacity-80">
          Want a site like this? Start free →
        </Link>
      </div>

      {/* ── DENTAL SITE TOPBAR ── */}
      <div className="bg-emerald-50 text-emerald-800 text-xs py-2 px-6 flex justify-center gap-8 flex-wrap font-bold border-b border-emerald-100">
        <span>📞 <strong>(305) 555-0812</strong></span>
        <span>🕒 <strong>Emergency</strong> Appointments Available</span>
        <span>🦷 <strong>Accepting</strong> New Patients</span>
        <span>⭐ <strong>4.9 Stars</strong> · 412 Google Reviews</span>
      </div>

      {/* ── DENTAL NAV ── */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <div className="font-black text-emerald-700 text-lg font-syne uppercase tracking-tight">Bright Smiles</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="tel:3055550812" className="font-bold text-white px-5 py-2 rounded-lg text-sm transition-all hover:scale-105" style={{ background: '#059669' }}>
          📅 Book Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)' }} className="px-6 py-20 text-center border-b border-emerald-100">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: '#fff', color: '#059669', border: '1px solid #05966933' }}>
            📍 Brickell · Miami, FL 33130
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight font-syne">
            Modern Dentistry in the <br /><span style={{ color: '#059669' }}>Heart of Miami</span>
          </h1>
          <p className="text-gray-600 mb-3 text-lg">Experience gentle, advanced dental care. From whitening to emergency repair — we make Miami smile.</p>
          <p className="text-sm italic mb-8 opacity-40 text-gray-500 font-medium">&quot;Hey Siri, find me a dentist near me open now&quot; — we show up first.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3055550812" className="font-bold text-white px-8 py-4 rounded-xl text-base shadow-lg shadow-emerald-200" style={{ background: '#059669' }}>📞 (305) 555-0812</a>
            <a href="#services" className="font-semibold px-8 py-4 rounded-xl text-base border border-emerald-200 text-emerald-800 hover:bg-white transition-all">See Services ↓</a>
          </div>
          <p className="text-xs mt-5 opacity-40 text-gray-600 font-bold tracking-wide uppercase">Open Late · Weekend Appointments · All Insurances</p>
        </div>
      </section>

      {/* ── E-E-A-T DOCTOR BIO ── */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg" style={{ background: '#059669' }}>DC</div>
            <div>
              <div className="font-bold text-gray-900 text-base">Dr. Elena Castillo — Cosmetic & Family Dentist</div>
              <div className="text-sm text-gray-500 mb-3">NYU Dentistry Graduate · 14 years serving Miami · Invisalign Platinum Provider</div>
              <p className="text-sm text-gray-700 leading-relaxed">I opened Bright Smiles to change how Miami thinks about the dentist. No pain, no judgment, just results. We use the latest digital scanning technology so you can see your new smile before we even start. This is my home, and I am proud to serve my community in Brickell and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-2 font-syne">Dental Services in Miami, FL</h2>
            <p className="text-gray-500">Advanced care for a healthy, beautiful smile.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '💎', title: 'Teeth Whitening', desc: 'Professional in-office whitening for a smile that shines. Results in one visit.', nlp: 'bleaching · peroxide · stain removal' },
              { icon: '🦷', title: 'Invisalign®', desc: 'Straighten your teeth without braces. We are a Platinum Invisalign provider in Brickell.', nlp: 'clear aligner · occlusal · digital scan' },
              { icon: '🦷', title: 'Dental Implants', desc: 'Permanent solution for missing teeth. Restoring your smile and your confidence.', nlp: 'titanium post · abutment · crown' },
              { icon: '🏥', title: 'Emergency Dental', desc: 'Same-day appointments for broken teeth, pain, or infections. Call us immediately.', nlp: 'pulpitis · abscess · root canal' },
              { icon: '🧼', title: 'Cleaning & Exams', desc: 'Preventative care to keep your smile healthy year-round. Digital X-rays included.', nlp: 'scaling · polishing · periodontal' },
              { icon: '🚑', title: 'Sedation Dentistry', desc: 'Anxiety-free dental visits. We offer multiple sedation options for your comfort.', nlp: 'nitrous oxide · IV sedation · painless' },
            ].map((s, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md transition-all bg-emerald-50/20">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide">{s.nlp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3 font-syne">Serving Brickell, Miami & Surrounding Areas</h2>
          <p className="text-gray-500 text-sm mb-6">We cover Brickell, Coral Gables, Coconut Grove, South Beach, and Downtown Miami. ZIP codes: <strong>33130, 33129, 33134, 33131, 33133</strong></p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Brickell 33130', 'Coral Gables', 'Coconut Grove', 'South Beach', 'Downtown Miami', 'Key Biscayne', 'Wynwood', 'Edgewater'].map((n, i) => (
              <span key={i} className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${i === 0 ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-700 border-gray-200'}`}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-10 font-syne">What Miami Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: 'Amanda C.', loc: 'Brickell, Miami', date: 'Mar 2025', text: 'Dr. Castillo is the best. I was terrified of dentists but her office made me feel so comfortable. My teeth have never looked better!' },
              { n: 'Robert H.', loc: 'Coral Gables, Miami', date: 'Feb 2025', text: "Best dental cleaning I&apos;ve ever had. No pain, extremely thorough. The digital scan of my teeth was fascinating to see." },
              { n: 'Sofia V.', loc: 'South Beach, Miami', date: 'Jan 2025', text: "Finally found a dentist in Miami that doesn&apos;t try to sell me things I don&apos;t need. Honest, professional, and very clean office." },
            ].map((r, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-5 shadow-sm">
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
      <section className="py-16 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 font-syne">Miami Dental Transparency — 2025 Rates</h2>
          <div className="overflow-x-auto rounded-xl border border-emerald-100 bg-white shadow-lg shadow-emerald-100">
            <table className="w-full text-sm">
              <thead style={{ background: '#059669' }}>
                <tr>
                  {['Service', 'Regular Price', 'Time', 'Insurance?', 'Urgency'].map(h => <th key={h} className="text-left px-4 py-3 text-white font-bold text-xs uppercase tracking-wide">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['New Patient Exam', '$99 Promo', '1 hr', 'Fully Covered', 'Low'],
                  ['In-Office Whitening', '$350', '1.5 hrs', 'Varies', 'Low'],
                  ['Emergency Dental', '$150 starting', '1 hr', 'Accepted', 'High'],
                  ['Simple Filling', '$200–$400', '1 hr', 'Accepted', 'Medium'],
                  ['Dental Crown', '$1,200+', '2 visits', 'Covered Part', 'Medium'],
                  ['Professional Cleaning', '$150', '1 hr', 'Fully Covered', 'Low'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/10'}>
                    {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-emerald-600 mt-3 text-center font-medium">💡 New Patienten Special: $99 for Full Exam + Cleaning + X-Rays. Limited time.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 font-syne">Patient Questions — Answered</h2>
          <div className="space-y-3">
            {[
              { q: 'Is there parking at your Brickell office?', a: 'Yes, we provide validated 2-hour parking in the building garage for all patients.' },
              { q: 'Do you offer payment plans for Invisalign?', a: 'Absolutely. We offer 0% interest financing through CareCredit and our own internal smile-plans to make your new smile affordable.' },
              { q: 'What happens during an emergency dental visit?', a: 'Our priority is stopping your pain. We will perform a quick X-ray, diagnose the issue, and usually perform the repair the same day to get you back to your life.' },
            ].map((f, i) => (
              <details key={i} className="border border-gray-200 rounded-xl group transition-all hover:border-emerald-500">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-emerald-50 rounded-xl transition-all">
                  {f.q}<span className="text-emerald-500">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#064e3b' }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-3 font-syne uppercase tracking-tight">Your New Smile Starts Here</h2>
        <p className="text-emerald-200 opacity-70 mb-8">Modern care. Gentle doctors. The best views in Brickell. Book your visit today.</p>
        <a href="tel:3055550812" className="inline-block font-bold text-emerald-900 px-10 py-4 rounded-xl text-base shadow-lg shadow-black/20" style={{ background: '#10b981' }}>
          📅 Click to Book Online
        </a>
        <p className="text-xs mt-4 opacity-30 text-white">Accepting All Major Insurance · Open Saturdays · Emergency Care</p>
      </section>

      {/* ── BACK TO SEO JUNCTION ── */}
      <div className="bg-emerald-600 text-white text-center py-5 px-6">
        <p className="text-sm font-medium mb-2">This site was built by <strong>SEO Junction</strong> in under 24 hours — automatically.</p>
        <Link href="/onboarding" className="inline-block font-bold text-emerald-600 bg-white px-6 py-2 rounded-lg text-sm hover:bg-white transition-colors hover:text-emerald-600">
          Get a site like this → Start Free Trial
        </Link>
      </div>

    </div>
  )
}
