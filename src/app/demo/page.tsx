import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Junction Demos | Experience Your New AI Website',
  description: 'See live examples of websites built automatically by SEO Junction for plumbers, electricians, and dentists.',
}

const DEMO_CARDS = [
  {
    name: 'Elite Plumbing Pro',
    city: 'Austin, TX',
    trade: 'Plumber',
    result: '+350% Google calls',
    days: 90,
    emoji: '🔧',
    color: '#1565C0',
    link: '/demo/plumbing',
    desc: 'High-conversion plumbing site with same-day booking focus and local service area optimization.'
  },
  {
    name: 'Spark Electrical',
    city: 'Denver, CO',
    trade: 'Electrician',
    result: 'Top 3 Map Pack',
    days: 60,
    emoji: '⚡',
    color: '#7C3AED',
    link: '/demo/electrical',
    desc: 'Electrical contractor site optimized for high-value keywords like "panel upgrades" and "EV chargers".'
  },
  {
    name: 'Bright Smiles Dental',
    city: 'Miami, FL',
    trade: 'Dentist',
    result: '42 new reviews',
    days: 120,
    emoji: '🦷',
    color: '#059669',
    link: '/demo/dental',
    desc: 'Premium clinic site focused on patient reviews, insurance transparency, and online appointment booking.'
  },
]

export default function DemoHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── NAV ── */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#1565C0' }}>S</div>
          <span className="font-bold text-gray-900">SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold text-black px-4 py-2 rounded-lg" style={{ background: '#F59E0B' }}>
          Back to Onboarding
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section className="px-6 py-20 text-center bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-syne">
            See What Your Website <br /><span className="text-blue-600">Will Look Like</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            These are actual demo sites built by our AI in under 24 hours. Every trade has a custom optimized experience designed to generate more calls.
          </p>
        </div>
      </section>

      {/* ── DEMO GRID ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {DEMO_CARDS.map((d, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl shadow-gray-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
                {/* EMOJI PREVIEW */}
                <div className="h-48 flex items-center justify-center text-7xl transition-transform group-hover:scale-110" style={{ background: d.color + '15' }}>
                  {d.emoji}
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1 font-syne">{d.name}</h3>
                      <p className="text-sm text-gray-400 font-medium">{d.trade} · {d.city}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {d.desc}
                  </p>

                  {/* RESULTS BADGE */}
                  <div className="bg-emerald-50 text-emerald-700 rounded-xl px-4 py-3 mb-8 border border-emerald-100">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">90-Day Result</div>
                    <div className="text-base font-black">{d.result}</div>
                  </div>

                  <Link href={d.link} className="block w-full text-center py-4 rounded-2xl font-bold text-white transition-all shadow-lg hover:shadow-xl active:scale-95" style={{ background: d.color }}>
                    View {d.trade} Demo →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 px-6 text-center border-t border-gray-100 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-4 font-syne">Ready to Build Your Own?</h2>
          <p className="text-gray-500 mb-10">Select your trade, buy your domain, and your site will be live within 24 hours.</p>
          <Link href="/onboarding" className="inline-block font-black text-black px-12 py-5 rounded-2xl text-lg shadow-xl shadow-amber-100 hover:scale-105 transition-all" style={{ background: '#F59E0B' }}>
            Start Free Trial Today
          </Link>
          <p className="text-xs text-gray-400 mt-6 font-medium">30-day free trial · Cancel anytime · No tech skills needed</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50 grayscale">
          <div className="w-6 h-6 rounded flex items-center justify-center text-white font-bold text-[10px]" style={{ background: '#1565C0' }}>S</div>
          <span className="font-bold text-gray-900 text-xs tracking-tight">SEO JUNCTION</span>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">© 2025 AI Website Builder for Local Service Businesses</p>
      </footer>
    </div>
  )
}
