import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

const STEPS = [
  { n:'1', icon:'🌐', title:'Buy your domain', desc:'Pick your .com — we register and set it up instantly.' },
  { n:'2', icon:'🛠️', title:'We build your website', desc:'Your professional, SEO-optimized site is live within 24 hours.' },
  { n:'3', icon:'📱', title:'Send updates from your phone', desc:'Snap a photo or voice note. That\'s it.' },
  { n:'4', icon:'📞', title:'Get more calls', desc:'Your site climbs Google rankings and brings in new customers.' },
]

const TESTIMONIALS = [
  { initials:'MT', name:'Mike T.', trade:'Plumber', city:'Denver, CO', stars:5, date:'March 2025', text:'I went from 2 Google calls a week to 9 calls a week in 45 days. SEO Junction just handled it. Worth every penny.', result:'+350% Google calls', color:'#1565C0' },
  { initials:'SR', name:'Sandra R.', trade:'Electrician', city:'Austin, TX', stars:5, date:'February 2025', text:'My Google profile started showing up in the top 3 for "electrician near me" within 6 weeks. My phone rings more now than ever.', result:'Top 3 Local Pack', color:'#1565C0' },
  { initials:'DK', name:'Dave K.', trade:'HVAC', city:'Phoenix, AZ', stars:5, date:'January 2025', text:'Summer season I got more calls than any year before. The weekly posts kept my GMB active and Google started ranking me higher.', result:'+22 calls/week', color:'#1565C0' },
  { initials:'LM', name:'Luis M.', trade:'Roofer', city:'Tampa, FL', stars:5, date:'March 2025', text:'After a storm hit Tampa I had a post up within an hour — SEO Junction generated it automatically. I got 14 storm damage calls that week.', result:'14 leads from one storm', color:'#7C3AED' },
  { initials:'JW', name:'Jan W.', trade:'Landscaper', city:'Seattle, WA', stars:5, date:'February 2025', text:'Setup took 20 minutes from my phone. They built my whole website and connected it to Google. I just send photos from job sites now.', result:'Site live in 24 hrs', color:'#7C3AED' },
]

const PLANS = [
  { name:'Basic', price:'19', posts:10, features:['Done-for-you website','10 AI posts/month','Google Business updates','Photo & voice uploads','Cancel anytime'], popular:false },
  { name:'Pro', price:'39', posts:30, features:['Everything in Basic','30 AI posts/month','Priority AI responses','Full GMB management','Dedicated support','Monthly SEO report'], popular:true },
  { name:'Agency', price:'79', posts:60, features:['Up to 5 client sites','60 AI posts/month','White-label reports','Client dashboard','API access','Dedicated Slack support'], popular:false },
]

const RESULTS = [
  { trade:'Plumber', city:'Austin TX', before:'2 calls/week', after:'9 calls/week', days:45 },
  { trade:'Electrician', city:'Denver CO', before:'No map pack', after:'Top 3 local pack', days:60 },
  { trade:'HVAC', city:'Phoenix AZ', before:'5 inquiries/week', after:'20 inquiries/week', days:90 },
]

const DEMOS = [
  { name:'Elite Plumbing Pro', city:'Austin, TX', trade:'Plumber', result:'+350% Google calls', days:90, emoji:'🔧', color:'#1565C0' },
  { name:'Spark Electrical', city:'Denver, CO', trade:'Electrician', result:'Top 3 Map Pack', days:60, emoji:'⚡', color:'#7C3AED' },
  { name:'Bright Smiles Dental', city:'Miami, FL', trade:'Dentist', result:'42 new reviews', days:120, emoji:'🦷', color:'#059669' },
]

const TRADES = ['🔧 Plumbers','⚡ Electricians','❄️ HVAC','🏠 Roofers','🌱 Landscapers','🦷 Dentists','🐾 Vets','🔑 Locksmiths','🚗 Auto Shops','🧹 Cleaners']

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* TOPBAR */}
      <div className="text-white text-xs py-2 px-4 flex justify-center gap-8 flex-wrap font-medium" style={{background:'#0B1F3A'}}>
        <span>⭐ <strong>4.9 Stars</strong> — 214 Reviews</span>
        <span>⏱ <strong>Live in 24 Hours</strong></span>
        <span>🔒 <strong>Domain Is Yours Forever</strong></span>
        <span>✅ <strong>30-Day Free Trial</strong></span>
      </div>

      {/* NAV */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'#1565C0'}}>S</div>
          <span className="font-bold text-gray-900">SEO Junction</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/demo" className="hover:text-blue-600">Demo</Link>
          <Link href="/gmb-checker" className="hover:text-blue-600">GMB Checker</Link>
          <Link href="/agency" className="hover:text-blue-600">Agency</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</Link>
          <Link href="/onboarding" className="text-sm font-bold text-black px-4 py-2 rounded-lg" style={{background:'#F59E0B'}}>Get Started Free</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 text-center" style={{background:'#0B1F3A'}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-6 leading-tight">
            Get more local customers<br />
            <span style={{color:'#F59E0B'}}>from Google</span> — without<br />
            doing any work
          </h1>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{color:'rgba(219,234,254,0.8)'}}>
            We build your website, optimize your Google presence, and keep it updated. You just send updates from your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-black px-8 py-4 rounded-xl text-base" style={{background:'#F59E0B'}}>
              Start with your domain ($19.99)
            </Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border text-white" style={{borderColor:'rgba(255,255,255,0.25)'}}>
              See Live Demo
            </Link>
          </div>
          <p className="text-xs mt-5 text-white" style={{opacity:0.4}}>30-day free trial on service · Domain is yours forever · No tech skills needed</p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap justify-center">
          {[
            {icon:'🏅', label:'Google Verified', sub:'Certified GMB partner'},
            {icon:'🆓', label:'30-Day Free Trial', sub:'No credit card pressure'},
            {icon:'🔒', label:'Domain Ownership', sub:'Yours forever'},
            {icon:'📄', label:'No Contracts', sub:'Cancel anytime'},
            {icon:'⭐', label:'4.9★ Rated', sub:'214 verified reviews'},
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 border-r border-gray-100 last:border-r-0">
              <span className="text-xl">{b.icon}</span>
              <div>
                <div className="font-bold text-gray-900 text-sm">{b.label}</div>
                <div className="text-xs text-gray-400">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESULTS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Real Businesses. Real Numbers.</h2>
            <p className="text-gray-500 mt-3">Actual results from actual local businesses using SEO Junction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESULTS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">{r.trade} · {r.city}</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Before</div>
                    <div className="font-bold text-gray-700 text-sm">{r.before}</div>
                  </div>
                  <div className="text-2xl text-green-500 font-bold">→</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">After</div>
                    <div className="font-bold text-green-600 text-sm">{r.after}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 border-t border-gray-50 pt-3">In {r.days} days · Organic Google only</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900">From Zero to Live in Under 24 Hours</h2>
            <p className="text-gray-500 mt-3">No coding. No agencies. No meetings. You just send updates from your phone.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 bg-blue-50">{s.icon}</div>
                <div className="text-xs font-bold text-blue-600 mb-2">Step {s.n}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="py-20 px-6" style={{background:'#0B1F3A'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white mb-4">See What Your Website Will Look Like</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {DEMOS.map((d, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border" style={{borderColor:'rgba(255,255,255,0.1)'}}>
                <div className="h-36 flex items-center justify-center text-5xl" style={{background:d.color+'22'}}>{d.emoji}</div>
                <div className="p-5" style={{background:'rgba(255,255,255,0.05)'}}>
                  <div className="font-bold text-white mb-1">{d.name}</div>
                  <div className="text-xs mb-3" style={{color:'rgba(147,197,253,0.7)'}}>{d.city}</div>
                  <div className="text-xs text-green-400 font-bold mb-4">Results ({d.days} Days): {d.result}</div>
                  <Link href="/demo" className="block text-center text-sm font-bold py-2 px-4 rounded-lg" style={{background:'#F59E0B', color:'#000'}}>
                    View {d.trade} Demo →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900">What Local Business Owners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0,3).map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{background:t.color}}>{t.initials}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.trade} · {t.city}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="text-xs font-bold text-green-600 bg-green-50 rounded-lg px-3 py-1.5 inline-block">{t.result}</div>
                <div className="text-xs text-gray-400 mt-3">{t.date}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {TESTIMONIALS.slice(3).map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{background:t.color}}>{t.initials}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.trade} · {t.city}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="text-xs font-bold text-green-600 bg-green-50 rounded-lg px-3 py-1.5 inline-block">{t.result}</div>
                <div className="text-xs text-gray-400 mt-3">{t.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">More Google Calls — Starting at $19/Month</h2>
          <p className="text-gray-500 mb-12">30-day free trial on every plan. Only pay the $19.99 domain fee today.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {PLANS.map((p) => (
              <div key={p.name} className={`rounded-2xl border p-6 text-left relative ${p.popular ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1 rounded-full" style={{background:'#1565C0'}}>Most Popular</div>}
                <div className="font-bold text-gray-900 mb-1">{p.name}</div>
                <div className="text-3xl font-black text-gray-900 mb-1">${p.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
                <div className="text-xs text-blue-600 font-bold mb-5">{p.posts} updates/month</div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/onboarding" className={`block text-center text-sm font-bold py-3 px-4 rounded-xl ${p.popular ? 'text-white' : 'text-gray-900 border border-gray-200'}`} style={p.popular ? {background:'#1565C0'} : {}}>
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADES */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Built For These Trades</div>
          <div className="flex flex-wrap justify-center gap-3">
            {TRADES.map((t, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{background:'#0B1F3A'}}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Get More Customers<br />
            <span style={{color:'#F59E0B'}}>From Google?</span>
          </h2>
          <p className="mb-10 text-lg" style={{color:'rgba(219,234,254,0.7)'}}>Join hundreds of local businesses growing with SEO Junction.</p>
          <Link href="/onboarding" className="inline-flex items-center gap-2 font-bold text-black px-10 py-5 rounded-xl text-base" style={{background:'#F59E0B'}}>
            Start 30-Day Free Trial →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-xs" style={{background:'#1565C0'}}>S</div>
              <span className="font-bold text-white text-sm">SEO Junction</span>
            </div>
            <p className="text-xs leading-relaxed">Better Google presence for local service businesses. Just send updates from your phone.</p>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Product</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/demo" className="hover:text-white">Live Demo</Link></li>
              <li><Link href="/gmb-checker" className="hover:text-white">Free GMB Checker</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Trades</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/seo-for-plumbers" className="hover:text-white">SEO for Plumbers</Link></li>
              <li><Link href="/seo-for-electricians" className="hover:text-white">SEO for Electricians</Link></li>
              <li><Link href="/seo-for-hvac" className="hover:text-white">SEO for HVAC</Link></li>
              <li><Link href="/seo-for-roofers" className="hover:text-white">SEO for Roofers</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Company</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/agency" className="hover:text-white">For Agencies</Link></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs">
          © 2025 SEO Junction. All rights reserved.
        </div>
      </footer>

    </div>
  )
}
