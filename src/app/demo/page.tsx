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
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* ── NAV ── */}
      <nav className="bg-white dark:bg-slate-950/80 border-b border-gray-100 dark:border-slate-800 px-6 py-6 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105" style={{ background: 'var(--premium-gradient)' }}>S</div>
          <span className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-100 dark:shadow-none hover:opacity-90 transition-all bg-navy">
          Back to Onboarding
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section className="px-6 py-24 text-center bg-gray-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            See What Your Website <br /><span className="text-blue-600 dark:text-blue-400 font-bold">Will Look Like</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            These are actual demo sites built by our system in under 24 hours. Every trade has a custom optimized experience designed to generate more calls.
          </p>
        </div>
      </section>

      {/* ── DEMO GRID ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {DEMO_CARDS.map((d, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-gray-100 dark:shadow-none transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-900">
                {/* EMOJI PREVIEW */}
                <div className="h-52 flex items-center justify-center text-8xl transition-transform group-hover:scale-110" style={{ background: d.color + '15' }}>
                  {d.emoji}
                </div>

                {/* CONTENT */}
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{d.name}</h3>
                      <p className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">{d.trade} · {d.city}</p>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                    {d.desc}
                  </p>

                  {/* RESULTS BADGE */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 rounded-2xl px-6 py-4 mb-10 border border-emerald-100 dark:border-emerald-900/30">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">90-Day Result</div>
                    <div className="text-lg font-bold">{d.result}</div>
                  </div>

                  <Link href={d.link} className="block w-full text-center py-5 rounded-2xl font-bold text-white transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg" style={{ background: d.color }}>
                    View {d.trade} Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 px-6 text-center border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Build Your Own?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg leading-relaxed">Select your trade, and your site will be live within 24 hours.</p>
          <Link href="/onboarding" className="inline-block font-bold text-white px-12 py-5 rounded-3xl text-lg shadow-xl shadow-blue-200 dark:shadow-none hover:scale-105 transition-all bg-navy">
            Start Free Trial Today
          </Link>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-10 font-bold uppercase tracking-widest">30-day free trial • Cancel anytime • No tech skills needed</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t border-gray-100 dark:border-slate-800 text-center dark:bg-slate-950">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50 grayscale dark:invert">
          <div className="w-6 h-6 rounded flex items-center justify-center text-white font-bold text-[10px]" style={{ background: '#1565C0' }}>S</div>
          <span className="font-bold text-gray-900 text-xs tracking-tight">SEO JUNCTION</span>
        </div>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">© 2026 AI Website Builder for Local Service Businesses</p>
      </footer>
    </div>
  )
}
