import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agency Plan — White-Label Local SEO for Marketing Agencies | SEO Junction',
  description: 'Manage all your local business clients under your brand. SEO Junction Agency lets you deliver done-for-you local SEO and GMB management for 5–40+ clients without extra headcount.',
  keywords: 'white-label local SEO, SEO agency tool, local SEO platform for agencies, GMB management agency, resell local SEO',
}

interface AgencyPlan {
  name: string
  price: string
  clients: number
  posts: number | string
  features: string[]
  revenue: string
  popular?: boolean
}

const AGENCY_PLANS: AgencyPlan[] = [
  { name: 'Starter Agency', price: '79', clients: 5, posts: 150, features: ['Up to 5 client sites', '150 AI posts/month', 'White-label client reports', 'Client dashboard access', 'Email support'], revenue: '$495/mo if you charge $99/client' },
  { name: 'Growth Agency', price: '149', clients: 15, posts: 450, features: ['Up to 15 client sites', '450 AI posts/month', 'White-label reports', 'Priority support', 'Bulk CSV onboarding'], revenue: '$1,485/mo if you charge $99/client', popular: true },
  { name: 'Scale Agency', price: '249', clients: 40, posts: 1200, features: ['Up to 40 client sites', 'Unlimited posts', 'API access', 'Custom domain per client', 'Dedicated account manager'], revenue: '$3,960/mo if you charge $99/client' },
]

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-40 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: '#1565C0' }}>S</div>
          <span className="font-bold" style={{ fontFamily: 'Syne,sans-serif' }}>SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold px-4 py-2 rounded-lg text-white" style={{ background: '#1565C0' }}>Start Agency Trial</Link>
      </nav>

      <section style={{ background: 'linear-gradient(135deg,#0B1F3A,#162944)' }} className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border" style={{ background: 'rgba(21,101,192,0.2)', borderColor: 'rgba(21,101,192,0.4)', color: '#90CAF9' }}>🏢 For Marketing Agencies & Consultants</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{ fontFamily: 'Syne,sans-serif' }}>
            Manage All Your Local<br />Business Clients —<br /><span style={{ color: '#F59E0B' }}>Under Your Brand</span>
          </h1>
          <p className="text-blue-200 opacity-80 mb-10 text-lg max-w-xl mx-auto">SEO Junction Agency lets you deliver done-for-you local SEO and GMB management for 5, 15, or 40 clients — without hiring a single extra person.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-black px-8 py-4 rounded-xl text-base" style={{ background: '#F59E0B' }}>Start Agency Free Trial →</Link>
            <a href="mailto:agency@seo-junction.com" className="font-semibold px-8 py-4 rounded-xl text-base border text-white" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>Book a Demo Call</a>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" style={{ fontFamily: 'Syne,sans-serif' }}>Sound Familiar?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⏰', title: 'You spend hours manually posting to GMB profiles', desc: 'Every week you are logging into multiple client Google accounts, writing posts, uploading photos, responding to reviews. It takes hours. It does not scale.' },
              { icon: '📈', title: "You can't grow past 10 clients", desc: 'Taking on client 11 means either working weekends or hiring someone. Neither is a good answer. You need a system that scales without adding headcount.' },
              { icon: '😟', title: 'Clients ask why their GMB is not being updated', desc: 'You mean to post weekly but bigger priorities get in the way. Clients notice. It hurts retention. SEO Junction posts automatically so you never miss a week.' },
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

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Syne,sans-serif' }}>How Agency Mode Works</h2>
          </div>
          <div className="space-y-4">
            {[
              { n: '1', title: 'Add your client', desc: 'Enter their business name, trade, location, and services. Takes 3 minutes per client.' },
              { n: '2', title: 'AI generates branded posts', desc: 'Posts are written with their business name, city, services, and local keywords — under your agency brand, not ours.' },
              { n: '3', title: 'Posts go live automatically', desc: 'Content publishes to their website and Google Business Profile every week — without you touching anything.' },
              { n: '4', title: 'You send the report', desc: 'A white-labeled PDF with your logo shows the client their ranking progress, post activity, and review count growth.' },
              { n: '5', title: 'Client is happy — you look like an expert', desc: 'You deliver consistent, measurable results. Your clients stay longer. Your agency grows.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-5 p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: '#1565C0' }}>{s.n}</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">{s.title}</div>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY PRICING */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Syne,sans-serif' }}>Agency Pricing — Scale With Confidence</h2>
            <p className="text-gray-500 mt-3">All agency plans include a 14-day free trial.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {AGENCY_PLANS.map((p, i) => (
              <div key={i} className={`rounded-2xl border p-6 relative bg-white ${p.popular ? 'border-blue-500 shadow-xl shadow-blue-100' : 'border-gray-200'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1 rounded-full" style={{ background: '#1565C0' }}>Best Value</div>}
                <div className="font-bold text-gray-900 mb-1">{p.name}</div>
                <div className="text-4xl font-black text-gray-900 mb-1" style={{ fontFamily: 'Syne,sans-serif' }}>${p.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
                <div className="text-xs text-blue-600 font-bold mb-2">Up to {p.clients} clients · {p.posts} posts/mo</div>
                <div className="text-xs text-green-600 font-bold bg-green-50 rounded px-2 py-1 mb-5">💰 {p.revenue}</div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, fi) => <li key={fi} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
                <Link href="/onboarding" className={`block text-center text-sm font-bold py-3 rounded-xl ${p.popular ? 'text-white' : 'text-gray-900 border border-gray-200'}`} style={p.popular ? { background: '#1565C0' } : {}}>
                  Start 14-Day Free Trial
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 text-center">
            <div className="font-bold text-gray-900 mb-2">💡 The math works in your favor</div>
            <p className="text-sm text-gray-600">At the Growth Agency plan ($149/month), if you charge each client $99/month — that is <strong>$1,485/month revenue</strong> from 15 clients, with a <strong>$1,336 profit margin</strong> every month.</p>
          </div>
        </div>
      </section>

      {/* WHITE LABEL FEATURES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12" style={{ fontFamily: 'Syne,sans-serif' }}>What Agencies Get That Solo Plans Don&apos;t</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {icon:'🏷️',title:'Fully white-labeled',desc:'Your logo on every client report. Your agency name on every dashboard. Our name never appears to your clients.'},
              {icon:'📊',title:'Branded monthly PDF reports',desc:'Auto-generated ranking reports with your agency branding. Send them to clients with one click.'},
              {icon:'👥',title:'Client-facing dashboard',desc:'Each client gets their own login to see their posts, ranking, and review activity — under your brand.'},
              {icon:'⚡',title:'Bulk CSV onboarding',desc:'Add 10 clients at once by uploading a CSV. No manual entry. Scale without the busywork.'},
              {icon:'🔌',title:'API access',desc:'Integrate SEO Junction into your own platform or reporting dashboard using our REST API.'},
              {icon:'💬',title:'Dedicated Slack support',desc:'A real person in your Slack channel — not a ticket queue. For questions, escalations, and custom requests.'},
            ].map((f,i)=>(
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="text-2xl flex-shrink-0">{f.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1 text-sm">{f.title}</div>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-10" style={{fontFamily:'Syne,sans-serif'}}>Agency Questions</h2>
          <div className="space-y-3">
            {[
              {q:"Can my clients see that SEO Junction powers their SEO?",a:"No. Every client-facing element — reports, dashboards, emails — shows your agency brand only. SEO Junction is invisible to your clients. You look like the expert. We are the engine behind the scenes."},
              {q:"What happens to my clients' sites if I cancel?",a:"Your clients' websites and domains belong to them — not to you or to us. If you cancel, we give you a 30-day wind-down period to transition clients. Their sites keep running during that time."},
              {q:"Can I set different post frequencies for different clients?",a:"Yes. Each client account has independent settings. You can run one client at 10 posts/month and another at 30 posts/month from the same agency dashboard."},
              {q:"Do you have an affiliate or referral program?",a:"Yes — agencies who refer other agencies earn 20% recurring commission for 12 months. Contact agency@seo-junction.com to set this up."},
            ].map((f,i)=>(
              <details key={i} className="border border-gray-200 rounded-xl bg-white">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-gray-50">
                  {f.q}<span className="text-blue-500 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{background:'#0B1F3A'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{fontFamily:'Syne,sans-serif'}}>Scale Your Agency Without Adding Headcount</h2>
          <p className="text-blue-200 opacity-70 mb-8">14-day free trial on all agency plans. White-labeled from day one.</p>
          <Link href="/onboarding" className="inline-block font-bold text-black px-10 py-4 rounded-xl" style={{background:'#F59E0B'}}>Start Agency Free Trial →</Link>
        </div>
      </section>
    </div>
  )
}
