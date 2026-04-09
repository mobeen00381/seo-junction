import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Live Examples — See Your Trade Website Before You Sign Up',
  description: 'Browse live websites Neerzy built for plumbers, electricians, HVAC, roofers, dentists and more. See exactly what your business site will look like — for free.',
  openGraph: {
    title: 'Neerzy Live Examples — 12 Real Trade Websites',
    description: 'Plumbers in Austin. Electricians in London. Roofers in Sydney. See what Neerzy builds for your trade in seconds.',
    url: 'https://www.neerzy.com/examples',
  },
}

const EXAMPLE_CARDS = [
  {
    name: 'Elite Plumbing Pro',
    city: 'Austin, TX',
    trade: 'Plumber',
    result: '+350% Google calls',
    emoji: '🔧',
    color: '#1565C0',
    link: '/seo-for-plumbers',
    desc: 'High-conversion plumbing site with same-day booking focus and local service area optimization.'
  },
  {
    name: 'Spark Electrical',
    city: 'Denver, CO',
    trade: 'Electrician',
    result: 'Top 3 Map Pack',
    emoji: '⚡',
    color: '#7C3AED',
    link: '/seo-for-electricians',
    desc: 'Electrical contractor site optimized for high-value keywords like "panel upgrades" and "EV chargers".'
  },
  {
    name: 'Bright Smiles Dental',
    city: 'Miami, FL',
    trade: 'Dentist',
    result: '42 new reviews',
    emoji: '🦷',
    color: '#059669',
    link: '/seo-for-dentists',
    desc: 'Premium clinic site focused on patient reviews, insurance transparency, and online appointment booking.'
  },
  {
    name: 'Green Leaf Gardeners',
    city: 'Portland, OR',
    trade: 'Landscaping',
    result: '+280% local reach',
    emoji: '🌿',
    color: '#10B981',
    link: '/seo-for-landscaping',
    desc: 'Visual-heavy landscaping site showcasing recent project galleries and seasonal maintenance booking.'
  },
  {
    name: 'Arctic Air Solutions',
    city: 'Phoenix, AZ',
    trade: 'HVAC',
    result: '15 lead calls daily',
    emoji: '❄️',
    color: '#3B82F6',
    link: '/seo-for-hvac',
    desc: 'Optimized HVAC site for emergency repairs and annual maintenance membership signups.'
  },
  {
    name: 'Safe Haven Locksmith',
    city: 'Chicago, IL',
    trade: 'Locksmith',
    result: '#1 for 24/7 Keywords',
    emoji: '🔑',
    color: '#F59E0B',
    link: '/seo-for-locksmith',
    desc: 'Hyper-local locksmith site designed for rapid mobile interaction and mobile service verification.'
  },
  {
    name: 'Fresh Start Cleaners',
    city: 'London, UK',
    trade: 'Cleaning',
    result: '300% booking growth',
    emoji: '🧹',
    color: '#EC4899',
    link: '/seo-for-cleaning',
    desc: 'Streamlined cleaning services site with instant pricing transparency and recurring service booking.'
  },
  {
    name: 'Top Tier Roofing',
    city: 'Sydney, AU',
    trade: 'Roofer',
    result: 'Top 3 Google Search',
    emoji: '🏠',
    color: '#EF4444',
    link: '/seo-for-roofers',
    desc: 'Robust roofing site highlighting material warranties, safety certifications, and insurance claims help.'
  },
  {
    name: 'Happy Paws Grooming',
    city: 'Toronto, CA',
    trade: 'Pet Grooming',
    result: 'Fully Booked / 2 Weeks',
    emoji: '🐕',
    color: '#8B5CF6',
    link: '/seo-for-pet-grooming',
    desc: 'Friendly pet care site featuring service packages, breed portfolios, and automated booking.'
  },
  {
    name: 'Pro Scan Sanitary',
    city: 'Dubai, UAE',
    trade: 'Sanitary',
    result: '40% Cost per Lead reduction',
    emoji: '🚽',
    color: '#64748B',
    link: '/seo-for-sanitary',
    desc: 'B2B and B2C sanitary services site focusing on rapid response and large-scale facility maintenance.'
  },
  {
    name: 'Mega Mart Local',
    city: 'Mumbai, IN',
    trade: 'Grocery',
    result: '2.5x delivery increase',
    emoji: '🛒',
    color: '#F97316',
    link: '/seo-for-grocery',
    desc: 'Local grocery site optimized for neighborhood inventory search and recurring delivery models.'
  },
  {
    name: 'Builder Pro Hardware',
    city: 'New York, US',
    trade: 'Hardware',
    result: '500+ Local Inquiries',
    emoji: '🛠️',
    color: '#475569',
    link: '/seo-for-hardware',
    desc: 'Heavy-duty hardware site showcasing stock availability and pro-contractor account features.'
  }
]

export default function ExamplesHubPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* ── HERO ── */}
      <section className="px-6 pt-40 pb-24 text-center bg-gray-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[3.2px] mb-8 border border-primary/10">Industry Examples</div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-none tracking-tighter">
             Select Your Trade — <br /><span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--premium-gradient)' }}>See Your New Website</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed italic">
            "These are live versions of what our AI builds for you in seconds."
          </p>
        </div>
      </section>

      {/* ── EXAMPLES GRID ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {EXAMPLE_CARDS.map((d, i) => (
              <div key={i} className="group relative rounded-[40px] overflow-hidden border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-gray-100 dark:shadow-none transition-all hover:scale-[1.02] hover:border-blue-200 dark:hover:border-blue-900">
                {/* EMOJI PREVIEW */}
                <div className="h-44 flex items-center justify-center text-7xl transition-all group-hover:scale-110" style={{ background: d.color + '15' }}>
                  {d.emoji}
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1 tracking-tight truncate">{d.name}</h3>
                      <p className="text-[9px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-[2px]">{d.trade} · {d.city}</p>
                    </div>
                  </div>

                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-8 h-10 overflow-hidden line-clamp-2">
                    {d.desc}
                  </p>

                  {/* RESULTS BADGE */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl px-6 py-4 mb-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden group/badge">
                    <div className="absolute inset-0 bg-emerald-500/5 -translate-y-full group-hover/badge:translate-y-0 transition-transform"></div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">Impact Result</div>
                    <div className="text-base font-black text-slate-900 dark:text-white">{d.result}</div>
                  </div>

                  <Link href={d.link} className="block w-full text-center py-4.5 rounded-xl font-black text-white transition-all shadow-2xl hover:shadow-primary/30 active:scale-95 text-sm uppercase tracking-widest" style={{ background: d.color }}>
                    Launch Example →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-32 px-6 text-center border-t border-gray-100 dark:border-slate-800 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 text-9xl opacity-[0.03] rotate-12 -translate-y-8 translate-x-8 pointer-events-none">🚀</div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">Don't see your trade?</h2>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed font-medium italic">Our AI adapts to any local service profession in seconds.</p>
          <Link href="/onboarding" className="inline-block bg-white text-navy font-black px-12 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
            Build Your Own Now →
          </Link>
          <p className="text-[10px] text-white/40 mt-12 font-black uppercase tracking-[4px]">Verified Security · No Tech Skills Needed · Instant Launch</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
