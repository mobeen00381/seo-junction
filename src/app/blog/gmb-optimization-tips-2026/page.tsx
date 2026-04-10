import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Optimize Your Google Business Profile in 2026 — 5 Tips for Trades',
  description: 'Learn how to optimize your Google My Business profile in 2026. These 5 Google Business Profile tips help plumbers, electricians, and tradespeople rank higher on Google Maps and get more calls.',
  keywords: 'how to optimize Google My Business, Google Business Profile tips 2026, GMB optimization for tradespeople, how to rank on Google Maps, get more Google reviews',
  openGraph: {
    title: 'How to Optimize Your Google Business Profile in 2026 — 5 Tips for Trades',
    description: '5 proven Google My Business optimization tips that help plumbers and electricians rank in the local top 3 without hiring an agency.',
    url: 'https://www.neerzy.com/blog/gmb-optimization-tips-2026',
  },
}

export default function Article2() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />
      
      <article className="max-w-[720px] mx-auto px-6 pt-40 pb-24 leading-[1.8]">
        {/* BREADCRUMB */}
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">Blog</Link>
          <span className="opacity-30">→</span>
          <span>GMB Tips</span>
        </div>

        {/* CATEGORY + DATE */}
        <div className="flex gap-4 items-center mb-6 flex-wrap">
          <span className="bg-primary/5 text-primary text-[10px] font-black px-3 py-1 rounded-full border border-primary/10 uppercase tracking-widest">GMB Tips</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">March 28, 2026</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-50">· 7 min read</span>
        </div>

        {/* IMAGE */}
        <div className="mb-12 rounded-[48px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl">
          <img 
            src="/blog/gmb-tips.png" 
            alt="Optimized Google Business Profile mockup" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight italic uppercase">
          How to <span className="text-primary">Optimize Your Google Business Profile</span> in 2026 — 5 Tips for Tradespeople
        </h1>

        {/* INTRO */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium border-l-4 border-primary pl-6 italic">
          Your Google Business Profile is the most powerful free marketing tool available to any local trade business. In 2026, knowing how to optimize it correctly is the difference between a fully booked diary and a quiet phone.
        </p>

        <p className="mb-6">
          Most tradespeople set up their Google Business Profile once and never touch it again. That is the mistake. Google rewards businesses that keep their profile fresh, active, and full of genuine reviews. The ones that do this consistently show up in the Local 3-Pack — the top 3 map results that get 70% of all clicks.
        </p>

        <p className="mb-12">
          Here are the 5 most important Google My Business optimization tips for 2026 — written specifically for plumbers, electricians, HVAC engineers, roofers, and every other trade that relies on local customers finding them first.
        </p>

        {/* TIP 1 */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] overflow-hidden mb-8 transition-transform hover:scale-[1.01]">
          <div className="bg-slate-950 p-6 flex items-center gap-4">
            <span className="bg-primary text-white w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs">1</span>
            <h2 className="text-lg font-black text-white italic uppercase tracking-tight m-0">Post to your profile every single week</h2>
          </div>
          <div className="p-8">
            <p className="mb-4 text-sm leading-relaxed">
              The single biggest thing you can do to rank higher on Google Maps is post to your Google Business Profile consistently. Google treats fresh content the same way a supermarket treats fresh bread — the fresher it is, the more prominently it gets displayed.
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              A post does not need to be long or clever. A photo of a job with two sentences describing what you did is enough. <span className="italic opacity-60">"Replaced a corroded stopcock on a Victorian terrace in Hackney. Job done in under an hour."</span> That is a post. That is a ranking signal.
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">
              The problem: most tradespeople don&apos;t post because they are busy. Neerzy automates this after every job.
            </p>
          </div>
        </div>

        {/* TIP 2 */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] overflow-hidden mb-8 transition-transform hover:scale-[1.01]">
          <div className="bg-slate-950 p-6 flex items-center gap-4">
            <span className="bg-primary text-white w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs">2</span>
            <h2 className="text-lg font-black text-white italic uppercase tracking-tight m-0">Make every post mention your town or postcode</h2>
          </div>
          <div className="p-8">
            <p className="mb-4 text-sm leading-relaxed">
              Google ranks local businesses based on relevance to the searcher&apos;s location. The more clearly your profile signals where you work, the more confidently Google places you in front of people in that area.
            </p>
            <p className="text-sm leading-relaxed">
              Every post should include the area. "Bathroom refit in Clapham, SW4" tells Google something specific. "Bathroom refit" tells Google nothing useful. As you build up posts, Google builds a map of your service area automatically.
            </p>
          </div>
        </div>

        {/* TIP 3 */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] overflow-hidden mb-8 transition-transform hover:scale-[1.01]">
          <div className="bg-slate-950 p-6 flex items-center gap-4">
            <span className="bg-primary text-white w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs">3</span>
            <h2 className="text-lg font-black text-white italic uppercase tracking-tight m-0">How to get more reviews — the right way</h2>
          </div>
          <div className="p-8">
            <p className="mb-6 text-sm leading-relaxed">
              Reviews are the second biggest ranking factor in Google Maps. More reviews, higher average rating, more recent reviews — all of these push your profile higher.
            </p>

            <Link href="/" className="block group/stat">
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-6 transition-all group-hover/stat:bg-primary/10 group-hover/stat:border-primary/20 group-hover/stat:scale-[1.01]">
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">The numbers speak clearly with Neerzy.com</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                  Tradespeople who send a review link immediately after a job collect <span className="text-primary italic">8 to 10 times more reviews</span> than those who wait.
                </div>
                <div className="mt-3 text-[10px] font-black text-primary uppercase tracking-[4px] opacity-0 group-hover/stat:opacity-100 transition-all">Start collecting reviews →</div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed opacity-60 italic">
              A direct Google review link removes all friction. Your customer taps the link, sees the review box, taps the stars, writes one sentence, hits submit. Done in 15 seconds.
            </p>
          </div>
        </div>

        {/* TIP 4 */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] overflow-hidden mb-8 transition-transform hover:scale-[1.01]">
          <div className="bg-slate-950 p-6 flex items-center gap-4">
            <span className="bg-primary text-white w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs">4</span>
            <h2 className="text-lg font-black text-white italic uppercase tracking-tight m-0">Add real job photos — not stock images</h2>
          </div>
          <div className="p-8">
            <p className="mb-4 text-sm leading-relaxed">
              Google&apos;s AI in 2026 reads photos. It understands what is in them — a P-trap under a sink, a new consumer unit, fresh roof tiles. When your photos show real trade work, Google categorises your business more accurately.
            </p>
            <p className="text-sm leading-relaxed italic">
              Stock photos of happy people shaking hands do nothing for your ranking. A photo of your actual work — taken on your actual phone — tells Google: This is real work, this person is an expert, and this is happening near the seeker.
            </p>
          </div>
        </div>

        {/* TIP 5 */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] overflow-hidden mb-12 transition-transform hover:scale-[1.01]">
          <div className="bg-slate-950 p-6 flex items-center gap-4">
            <span className="bg-primary text-white w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs">5</span>
            <h2 className="text-lg font-black text-white italic uppercase tracking-tight m-0">Keep your website and profile in sync</h2>
          </div>
          <div className="p-8">
            <p className="mb-4 text-sm leading-relaxed">
              Google compares your Google Business Profile to your website. When both say the same business name, the same area, the same services — Google trusts you more and ranks you higher.
            </p>
            <p className="text-sm leading-relaxed font-bold text-primary/80 uppercase tracking-widest text-[10px]">
              When Neerzy publishes a post to both your website and your Google profile simultaneously, both are always in sync.
            </p>
          </div>
        </div>

        {/* BONUS — AEO SECTION */}
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 mt-12 tracking-tight uppercase italic border-b border-primary/20 pb-2 inline-block">
          Answer Engine Optimisation (AEO)
        </h2>

        <p className="mb-6">
          In 2026, Google is not the only place your neighbours find local businesses. ChatGPT, Perplexity, and Google&apos;s own AI Overviews now answer questions like "who is the best electrician near me?" directly.
        </p>

        <p className="mb-12">
          To appear in these AI answers, you need a clear, consistent online presence. The businesses that invest in their Google profile quality now will be the ones that AI systems recommend automatically for years to come.
        </p>

        {/* FAQ */}
        <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 mt-12 italic uppercase tracking-tighter">Frequently asked questions</h2>
        <div className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
          {[
            { q: 'How often should I post on my Google Business Profile?', a: 'At least once per week. Businesses that post weekly see 50% more engagement than those that post monthly. Neerzy makes it possible to post daily with zero effort.' },
            { q: 'How long does it take to rank on Google Maps?', a: 'With consistent weekly posting and new reviews, most businesses see improvements in their ranking within 30 to 60 days. It compounds over time.' },
            { q: 'Can I optimize my profile without a website?', a: 'You can, but plumbers and electricians with a linked website rank 40% higher than those without one. Google needs the extra evidence from your site to trust your listing.' },
          ].map((faq, i) => (
            <div key={i} className="py-6 group">
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors italic uppercase tracking-tight">{faq.q}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* CTA BOX */}
        <div className="bg-slate-950 border border-white/5 rounded-[48px] p-10 md:p-16 mt-20 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-12 text-9xl opacity-[0.03] rotate-12 -translate-y-8 translate-x-8 group-hover:scale-110 group-hover:opacity-[0.05] transition-all pointer-events-none italic font-black">AI</div>
          
          <div className="text-[10px] font-black tracking-[4px] uppercase text-primary mb-8">Do all 5 tips — automatically</div>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none italic uppercase">
            Want your Google profile <span className="text-primary italic">optimised</span> after every job?
          </h3>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto font-bold uppercase tracking-widest text-[10px]">
             Neerzy snaps a photo, writes the post, publishes it to your Google profile and website, and sends your customer a review link — all automatically.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/onboarding"
              className="bg-primary hover:bg-primary/90 text-white font-black text-sm uppercase tracking-widest px-12 py-6 rounded-full transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Start 30-Day Free Trial — Try Neerzy Now →
            </Link>
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-loose">
              30-day free trial · One-time £29/$29 domain fee · No tech skills · Cancel anytime
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
