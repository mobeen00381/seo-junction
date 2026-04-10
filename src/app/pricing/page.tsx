import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Neerzy Pricing — Local SEO for Trades From $29/Month',
  description: 'Plans from $29/month. Done-for-you website, AI job posts, Google Business management, and auto review requests after every job. 30-day free trial. No contracts.',
  openGraph: {
    title: 'Neerzy Pricing — From $29/Month',
    description: '30-day free trial. Cancel anytime. Website live in 24 hours. Auto review link after every job.',
    url: 'https://www.neerzy.com/pricing',
  },
}

const PLANS = [
  {
    name: 'Starter',
    price: '29',
    posts: 10,
    popular: false,
    badge: null,
    desc: 'For new businesses getting online',
    features: [
      'Done-for-you website',
      '10 AI job posts/month (website + GMB)',
      'Google Business updates',
      'Photo & voice uploads',
      'Auto review link after every job',
      'Home screen access — no login',
      'Cancel anytime',
    ],
  },
  {
    name: 'Pro',
    price: '59',
    posts: 30,
    popular: true,
    badge: '⭐ Most Popular',
    desc: 'For active trades dominating their area',
    features: [
      'Everything in Starter',
      '30 AI job posts/month',
      'Priority AI — post live in 2 minutes',
      'Full GMB management',
      'Smart review reminders',
      'Monthly ranking report PDF',
      'Dedicated support',
      'Free domain transfer',
    ],
  },
  {
    name: 'Growth',
    price: '99',
    posts: 60,
    popular: false,
    badge: '🔥 Growth',
    desc: 'For the #1 trade in their postcode',
    features: [
      'Everything in Pro',
      '60 AI job posts/month',
      'Competitor rank tracker',
      'Review response AI',
      'Social media posting',
      'WhatsApp integration',
      'Priority phone support',
    ],
  },
  {
    name: 'Agency',
    price: '199',
    posts: 'Unlimited',
    popular: false,
    badge: '🏢 Agency',
    clients: 'Up to 10 client sites',
    desc: 'For agencies managing multiple trade clients',
    features: [
      'Up to 10 client sites',
      'Unlimited AI posts',
      'White-label client reports',
      'Client dashboard access',
      'API access',
      'Dedicated Slack support',
      'Custom branding',
    ],
  },
]

const FAQS = [
  { q:'What happens after my 30-day free trial?', a:'You will be charged your plan price automatically. Cancel anytime before the trial ends and you pay nothing. We send a reminder 3 days before your trial ends.' },
  { q:'What does one AI post actually include?', a:'Each post is 300–500 words written for your business, city, and trade. It includes your keywords, local neighborhood names, services, and phone number. It posts to your website and Google Business Profile the same day.' },
  { q:'Do I own my domain and website?', a:'Yes, 100%. The domain is in your name. Transfer it out anytime. Your website content is always yours — we never hold it hostage.' },
  { q:'How is this different from Google Ads?', a:'Google Ads stop the moment you stop paying. Neerzy builds ranking that compounds — the longer you run it, the stronger your position. Most customers see better ROI from our SEO than Ads by month 3.' },
  { q:'Will AI posts sound like my actual business?', a:'Yes. Our AI uses your business name, city, services, and trade-specific language in every post. Local neighborhood names and your phone number are included. Customers frequently cannot tell it from human-written content.' },
  { q:'Do I need any technical knowledge?', a:'Zero. Send a photo from your phone, a voice note, or a text message. Our AI does everything else — writing, posting, optimizing. If you can send a text, you can use Neerzy.' },
  { q:'What if I already have a website?', a:'We can work alongside your existing site or replace it. Many customers keep their old site and add our GMB management and content layer on top. Discuss this during onboarding.' },
  { q:'Can I change plans later?', a:'Yes — upgrade or downgrade anytime from your dashboard. Changes take effect on your next billing cycle. No fees for switching.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{background:'var(--paper)', color:'var(--ink)'}}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20 mt-20">
        <div className="text-center mb-16">
          <div className="text-[10px] font-black tracking-[4px] uppercase text-primary mb-6">Pricing Plans</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none italic uppercase">More Neighbours Calling.<br /><span className="text-primary italic">Starting at $29/Month.</span></h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto font-medium">Launch your real business online — your own domain for a one-time £29/$29 setup fee.</p>
          <p className="text-slate-400 dark:text-slate-500 max-w-md mx-auto text-[11px] mt-4 italic uppercase font-bold tracking-widest opacity-60">This is your business. Your name on the door. Yours forever — even if you leave Neerzy.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PLANS.map((p) => (
            <div key={p.name} className={`rounded-[32px] border p-8 relative transition-all ${p.popular?'border-primary bg-primary/5 shadow-2xl shadow-primary/10':'border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/20'}`}>
              {p.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black text-white px-5 py-2 rounded-xl uppercase tracking-widest bg-slate-950 whitespace-nowrap border border-white/10">{p.badge}</div>}
              <div className="font-black text-gray-400 dark:text-gray-500 uppercase text-[10px] tracking-widest mb-4">{p.name}</div>
              <div className="text-4xl font-black mb-2 tracking-tighter">${p.price}<span className="text-sm font-bold opacity-30">/mo</span></div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-6 h-10 line-clamp-2 font-medium">{p.desc}</div>
              <div className="text-[10px] text-primary dark:text-emerald-400 font-black mb-8 uppercase tracking-[2px] bg-primary/5 dark:bg-emerald-400/10 px-4 py-1.5 rounded-full border border-primary/10 dark:border-emerald-400/20 w-fit">{p.posts} AI posts/month</div>
              <ul className="space-y-3 mb-10">
                {p.features.map((f,i)=><li key={i} className="text-[13px] font-bold text-slate-600 dark:text-slate-300 flex gap-3 italic uppercase tracking-tight"><span className="text-emerald-500 flex-shrink-0">✓</span>{f}</li>)}
              </ul>
              <Link href="/onboarding" className={`block text-center text-[10px] font-black uppercase tracking-[2px] py-5 rounded-2xl transition-all shadow-lg ${p.popular?'bg-slate-950 text-white hover:scale-[1.02]':'text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                Start 30-Day Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* SAMPLE AI POST */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[40px] border border-slate-100 dark:border-slate-800 p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <div className="text-[10px] font-black tracking-[4px] uppercase text-primary mb-4">Example Output</div>
            <h2 className="text-3xl font-black mb-4 tracking-tighter italic uppercase">Here Is Exactly What Your AI Post Looks Like</h2>
          </div>
          <div className="bg-white dark:bg-slate-950 rounded-[32px] border border-slate-100 dark:border-slate-800 overflow-hidden max-w-2xl mx-auto shadow-2xl">
            <div className="h-36 flex items-center justify-center text-5xl" style={{background:'linear-gradient(135deg, var(--mint), var(--teal-soft))'}}>🌡️</div>
            <div className="p-8">
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full" style={{background:'rgba(22,101,52,0.1)',color:'#10b981', border:'1px solid rgba(16,185,129,0.2)'}}>SEO Score: 94/100</span>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full" style={{background:'rgba(37,99,235,0.1)',color:'#3b82f6', border:'1px solid rgba(59,130,246,0.2)'}}>Posted to Website + GMB</span>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">324 words</span>
              </div>
              <h3 className="font-black text-xl mb-4 leading-tight">3 Signs Your Water Heater Needs Replacing — Rodriguez Plumbing, Austin TX</h3>
              <div className="text-[13px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                <p>Is your hot water running out faster than it used to? Most tank water heaters last 8 to 12 years. After that, they start failing — usually at the worst time.</p>
                <p>Sign 1: Water is not as hot as it used to be. A failing heating element or worn anode rod causes this. Sign 2: Popping or rumbling sounds — sediment buildup on the tank bottom. Sign 3: Rust-colored water from hot taps — rust inside the tank.</p>
                <p>We serve Austin including South Congress, Bouldin Creek, Travis Heights, and ZIP codes 78704 and 78745. Call Rodriguez Plumbing at (512) 555-0000 today.</p>
              </div>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">Posted automatically to website + Google Business Profile</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 tracking-tighter italic uppercase">Everything You Need to Know</h2>
          <div className="space-y-4">
            {FAQS.map((f,i)=>(
              <details key={i} className="border border-slate-100 dark:border-slate-800 rounded-[28px] overflow-hidden bg-white dark:bg-slate-900 group shadow-sm">
                <summary className="px-8 py-6 font-black text-[13px] uppercase tracking-widest cursor-pointer list-none flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  {f.q}<span className="text-primary flex-shrink-0 ml-4 text-xl">＋</span>
                </summary>
                <div className="px-8 pb-8 pt-4 text-[14px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
