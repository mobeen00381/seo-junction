import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — Local SEO Plans from $19/month | SEO Junction',
  description: 'SEO Junction plans from $19/month. Done-for-you website, AI posts, and Google Business management. 30-day free trial. See a real AI post example before you sign up.',
}

const PLANS = [
  { name:'Basic', price:'19.99', posts:10, features:['Done-for-you website','10 AI posts/month (website + GMB)','Google Business updates','Photo & voice uploads','Cancel anytime'], popular:false },
  { name:'Pro', price:'39.99', posts:30, features:['Everything in Basic','30 AI posts/month','Priority AI responses','Full GMB management','Dedicated support','Monthly SEO report PDF','Free domain transfer'], popular:true },
  { name:'Agency', price:'79.00', posts:60, features:['Up to 5 client sites','60 AI posts/month','White-label client reports','Client dashboard','API access','Dedicated Slack support'], popular:false },
]

const FAQS = [
  { q:'What happens after my 30-day free trial?', a:'You will be charged your plan price automatically. Cancel anytime before the trial ends and you pay nothing. We send a reminder 3 days before your trial ends.' },
  { q:'What does one AI post actually include?', a:'Each post is 300–500 words written for your business, city, and trade. It includes your keywords, local neighborhood names, services, and phone number. It posts to your website and Google Business Profile the same day.' },
  { q:'Do I own my domain and website?', a:'Yes, 100%. The domain is in your name. Transfer it out anytime. Your website content is always yours — we never hold it hostage.' },
  { q:'How is this different from Google Ads?', a:'Google Ads stop the moment you stop paying. SEO Junction builds ranking that compounds — the longer you run it, the stronger your position. Most customers see better ROI from our SEO than Ads by month 3.' },
  { q:'Will AI posts sound like my actual business?', a:'Yes. Our AI uses your business name, city, services, and trade-specific language in every post. Local neighborhood names and your phone number are included. Customers frequently cannot tell it from human-written content.' },
  { q:'Do I need any technical knowledge?', a:'Zero. Send a photo from your phone, a voice note, or a text message. Our AI does everything else — writing, posting, optimizing. If you can send a text, you can use SEO Junction.' },
  { q:'What if I already have a website?', a:'We can work alongside your existing site or replace it. Many customers keep their old site and add our GMB management and content layer on top. Discuss this during onboarding.' },
  { q:'Can I change plans later?', a:'Yes — upgrade or downgrade anytime from your dashboard. Changes take effect on your next billing cycle. No fees for switching.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm bg-navy">S</div>
          <span className="font-bold text-gray-900 tracking-tight">SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="text-sm font-bold px-6 py-3 rounded-xl bg-navy text-white hover:opacity-90 transition-all shadow-lg shadow-blue-100">Start Free Trial</Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-primary dark:text-primary-light mb-3">Pricing</div>
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">More Google Calls.<br />Starting at $19/Month.</h1>
          <p className="text-gray-500 max-w-md mx-auto font-medium">30-day free trial on all plans. Only pay the $19.99 domain fee today. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PLANS.map((p) => (
            <div key={p.name} className={`rounded-3xl border p-8 relative transition-all ${p.popular?'border-primary shadow-2xl shadow-primary/10':'border-gray-100 hover:border-gray-200 shadow-sm'}`}>
              {p.popular&&<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black text-white px-5 py-1.5 rounded-full uppercase tracking-widest bg-navy">Most Popular</div>}
              <div className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-2">{p.name}</div>
              <div className="text-4xl font-black text-gray-900 mb-1 tracking-tighter">${p.price}<span className="text-sm font-bold text-gray-300">/mo</span></div>
              <div className="text-xs text-primary font-bold mb-8 uppercase tracking-wide">{p.posts} AI posts/month</div>
              <ul className="space-y-2.5 mb-7">
                {p.features.map((f,i)=><li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500 flex-shrink-0">✓</span>{f}</li>)}
              </ul>
              <Link href="/onboarding" className={`block text-center text-sm font-bold py-4 rounded-2xl transition-all shadow-lg ${p.popular?'bg-navy text-white hover:scale-[1.02]':'text-gray-900 border-2 border-gray-100 hover:bg-gray-50'}`}>
                Start 30-Day Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* SAMPLE AI POST */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mb-16">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Example Output</div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Here Is Exactly What Your AI Post Looks Like</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden max-w-2xl mx-auto">
            <div className="h-36 flex items-center justify-center text-5xl" style={{background:'linear-gradient(135deg,#EFF6FF,#DBEAFE)'}}>🌡️</div>
            <div className="p-6">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-xs font-bold px-2 py-1 rounded" style={{background:'#DCFCE7',color:'#166534'}}>SEO Score: 94/100</span>
                <span className="text-xs font-bold px-2 py-1 rounded" style={{background:'#EFF6FF',color:'#1565C0'}}>Posted to Website + GMB</span>
                <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600">324 words</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">3 Signs Your Water Heater Needs Replacing — Rodriguez Plumbing, Austin TX</h3>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p>Is your hot water running out faster than it used to? Most tank water heaters last 8 to 12 years. After that, they start failing — usually at the worst time.</p>
                <p>Sign 1: Water is not as hot as it used to be. A failing heating element or worn anode rod causes this. Sign 2: Popping or rumbling sounds — sediment buildup on the tank bottom. Sign 3: Rust-colored water from hot taps — rust inside the tank.</p>
                <p>We serve Austin including South Congress, Bouldin Creek, Travis Heights, and ZIP codes 78704 and 78745. Call Rodriguez Plumbing at (512) 555-0000 today.</p>
              </div>
              <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">Posted automatically to website + Google Business Profile</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12 tracking-tight">Everything You Need to Know</h2>
          <div className="space-y-3">
            {FAQS.map((f,i)=>(
              <details key={i} className="border border-gray-200 rounded-xl">
                <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center hover:bg-gray-50">
                  {f.q}<span className="text-blue-500 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
