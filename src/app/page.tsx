import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import LivePreview from '@/components/LivePreview'
import TemplateGallery from '@/components/TemplateGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neerzy - Your Neighbours Are Searching. Be There.',
  description: 'Snap a photo of your latest job - we build your website, manage your Google profile, and post updates automatically. No tech skills. Free to start.',
  openGraph: {
    title: 'Neerzy - Your Neighbours Are Searching. Be There.',
    description: 'Snap a photo. We handle the website, Google profile, and content. Your neighbours find you.',
    url: 'https://www.neerzy.com',
  },
}

const STEPS = [
  { n: '01', icon: '📸', title: 'Send your work', desc: 'Snap a photo or voice note from the job site. WhatsApp, SMS - your choice. That\'s literally it.' },
  { n: '02', icon: '🚀', title: 'We publish it', desc: 'We write the copy, optimise for local search, and push the update to your website and Google Business Profile - automatically.' },
  { n: '03', icon: '🎯', title: 'Neighbours find you', desc: 'Local customers nearby see your freshest work in Google search and call your business directly.' },
]

const TESTIMONIALS = [
  { name: 'Mike Thompson', initials: 'MT', trade: 'Electrician', city: 'London, UK', quote: "I don't understand websites, but now my neighbours find me on Google and my phone actually rings." },
  { name: 'Sarah Johnson', initials: 'SJ', trade: 'Home Cleaner', city: 'Sydney, AU', quote: "I just send a photo of my finished job and it's on my site the same day. My booking rate tripled." },
  { name: 'David Chen', initials: 'DC', trade: 'HVAC Technician', city: 'San Francisco', quote: "Finally a way to show my installs to local neighbours without needing to be a tech expert." },
  { name: 'Sandra Miller', initials: 'SM', trade: 'Plumber', city: 'Austin, USA', quote: "This helped me show my work without any effort. My phone rings, my calendar fills. Simple." },
]

const CONTROLS = [
  { icon: '🤳', title: 'Approval required', desc: 'Every update sits in your inbox first. One tap to approve, one to edit. Your green light, every time - no exceptions.' },
  { icon: '🔒', title: 'Your data stays yours', desc: 'We never sell your data or post to third parties. Everything is encrypted and used only to build your profile.' },
  { icon: '📈', title: 'Local SEO built in', desc: 'Every update is crafted with the right local keywords, schema, and signals to surface your business when neighbours search.' },
  { icon: '🏅', title: 'Every job builds proof', desc: 'Your portfolio grows with every completed job. More proof means more trust from neighbours - and more inbound calls.' },
]

const PROCESS_STEPS = [
  { icon: '📸', label: 'Job done' },
  { icon: '📱', label: 'Snap photo or voice' },
  { icon: '🤖', label: 'AI writes post' },
  { icon: '✅', label: 'Approve in 1 tap' },
  { icon: '🌐', label: 'Live on Google' },
  { icon: '⭐', label: 'Review link sent' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{background:'var(--paper)', color:'var(--ink)'}}>
      
      <Navbar />

      {/* ⚡ HERO SECTION ⚡ */}
      <section className="relative pt-18 md:pt-24 pb-16 md:pb-0 overflow-hidden" style={{borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[2.333fr_1fr] gap-0 items-stretch min-h-[75vh]">
          
          {/* Left - Copy */}
          <div className="flex flex-col justify-center py-12 md:py-20 md:pr-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full text-[11px] font-bold tracking-[0.8px] uppercase px-4 py-1.5 mb-5 w-fit" style={{background:'var(--teal-soft)', color:'var(--teal)', border:'1px solid rgba(15,110,86,0.2)'}}>
              <div className="w-[7px] h-[7px] rounded-full" style={{background:'var(--teal2)', animation:'blink 2s ease-in-out infinite'}}></div>
              50+ local businesses found nearby
            </div>
            <h1 className="mb-4 max-w-[680px] leading-[1.1]">
              Every job you complete becomes a Google post and a 5-star review.
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-[540px] leading-relaxed font-medium" style={{color:'var(--ink)'}}>
              Snap a photo from the job site. Neerzy turns it into a professional post, updates your Google profile, and sends your customer a review link - automatically. No tech. No effort. Just more neighbours calling.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link href="/onboarding" className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95" style={{background:'var(--teal)', color:'var(--mint)'}}>
                Get Started Free →
              </Link>
              <Link href="/examples" className="text-sm font-medium flex items-center gap-2 transition-colors" style={{color:'var(--ink3)'}}>
                See live examples →
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
              {[
                'Free to start',
                'Live in 24 hours',
                '10 seconds per job'
              ].map((chip, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] font-bold" style={{color: 'var(--ink)'}}>
                  <span style={{color: 'var(--teal2)'}}>✓</span>
                  {chip}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-8" style={{borderTop:'1px solid var(--border)'}}>
               <div className="flex">
                 {['MT', 'SM', 'DC', 'SJ'].map((p, i) => (
                   <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{border:'2.5px solid var(--paper)', marginLeft: i > 0 ? '-8px' : '0', background:'var(--paper3)', color:'var(--ink2)'}}>{p}</div>
                 ))}
               </div>
               <div className="text-[13px]" style={{color:'var(--ink3)'}}>
                 <strong style={{color:'var(--ink2)'}}>50+ trades businesses</strong> already live on Google via Neerzy
               </div>
            </div>
          </div>

          {/* Right - Product Mockup */}
          <div className="relative flex flex-col items-center justify-start pt-6 md:pt-8 pb-12 md:pb-12 md:pl-6 gap-4 animate-fade-in" style={{animationDelay:'0.2s', background:'var(--paper)'}}>
            <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(circle, var(--paper3) 1px, transparent 1px)', backgroundSize:'24px 24px'}}></div>
            
            {/* Stat Cards */}
            <div className="flex gap-3 w-[258px] relative z-10">
              <div className="flex-1 rounded-xl p-3" style={{background:'var(--paper)', border:'1px solid var(--border2)'}}>
                <div className="text-[9px] font-semibold tracking-[0.8px] uppercase mb-1" style={{color:'var(--ink4)'}}>Monthly calls</div>
                <div className="font-display text-xl font-bold italic" style={{color:'var(--teal2)'}}>+34</div>
                <div className="text-[10px] font-semibold mt-1" style={{color:'var(--teal2)'}}>↗ 62% this month</div>
              </div>
              <div className="flex-1 rounded-xl p-3" style={{background:'var(--paper)', border:'1px solid var(--border2)'}}>
                <div className="text-[9px] font-semibold tracking-[0.8px] uppercase mb-1" style={{color:'var(--ink4)'}}>Google rank</div>
                <div className="font-display text-xl font-bold italic" style={{color:'var(--teal2)'}}>#1</div>
                <div className="text-[10px] font-semibold mt-1" style={{color:'var(--teal2)'}}>Local search</div>
              </div>
            </div>

            {/* Phone Frame */}
            <div className="w-[260px] h-[520px] rounded-[48px] p-2.5 relative z-10 shadow-4xl group/phone" style={{background:'var(--ink)', border:'1px solid rgba(255,255,255,0.08)'}}>
              <div className="w-full h-full rounded-[38px] overflow-hidden relative flex flex-col" style={{background:'var(--paper)', border:'1.5px solid var(--border2)'}}>
                
                {/* Real-world Header / Status Bar */}
                <div className="h-7 flex items-center px-6 shrink-0" style={{background:'var(--paper)'}}>
                  <div className="text-[10px] font-bold opacity-40">9:41</div>
                  <div className="ml-auto flex gap-1.5 opacity-30">
                    <div className="w-3 h-3 rounded-full border border-current"></div>
                    <div className="w-3 h-3 rounded-full border border-current"></div>
                  </div>
                </div>

                <div className="h-10 flex items-center px-4 gap-2 border-b border-black/[0.03] shrink-0" style={{background:'var(--ink)'}}>
                  <div className="flex gap-1.5">
                    <div className="w-[7px] h-[7px] rounded-full" style={{background:'#ff5f57'}}></div>
                    <div className="w-[7px] h-[7px] rounded-full" style={{background:'#ffbd2e'}}></div>
                    <div className="w-[7px] h-[7px] rounded-full" style={{background:'#27c93f'}}></div>
                  </div>
                  <div className="text-[9px] ml-auto font-medium" style={{color:'var(--ink4)'}}>mikes-electric.neerzy.com</div>
                </div>

                {/* Inner Content (Scrollable or just clipped) */}
                <div className="flex-1 overflow-hidden relative">
                  <div className="h-32 relative overflow-hidden shrink-0">
                    <img 
                      src="/hero-electrician-male.png" 
                      alt="Electrician Hero" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-[12px] flex items-center justify-center backdrop-blur-sm bg-white/20 border border-white/30">
                        <svg width="22" height="22" viewBox="0 0 26 26" fill="none"><path d="M13 3L22 8V18L13 23L4 18V8L13 3Z" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="13" cy="13" r="3" fill="#fff"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5">
                    <div className="font-display text-[15px] font-bold mb-0.5" style={{color:'var(--ink)'}}>Mike&apos;s Electric</div>
                    <div className="text-[10px] mb-2" style={{color:'var(--ink4)'}}>Electrician • London, UK</div>
                    <div className="text-[11px] mb-2.5" style={{color:'var(--sun2)'}}>★★★★★ 4.9 (124 reviews)</div>
                    
                    <div className="rounded-lg p-2.5 mb-2.5" style={{background:'var(--paper2)', border:'1px solid var(--border)'}}>
                      <div className="text-[9px] font-bold tracking-[1px] uppercase mb-1" style={{color:'var(--teal2)'}}>New • Today</div>
                      <div className="text-[10px] leading-relaxed" style={{color:'var(--ink3)'}}>Full rewire in Hackney - customer thrilled with the clean finish and new fuse board.</div>
                    </div>

                    <div className="rounded-lg p-2.5" style={{background:'var(--paper2)', border:'1px solid var(--border)'}}>
                      <div className="text-[11px] font-semibold mb-px" style={{color:'#1a0dab'}}>Mike&apos;s Electric | #1 Electrician London</div>
                      <div className="text-[9px] mb-1" style={{color:'#137333'}}>mikes-electric.neerzy.com</div>
                      <div className="text-[9px] leading-snug mb-1.5" style={{color:'var(--ink4)'}}>Top-rated electrician in London. 100+ 5-star reviews. EV chargers, rewiring, fuse boards...</div>
                      <div className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full" style={{background:'var(--teal-soft)', color:'var(--teal)'}}>
                        <div className="w-[5px] h-[5px] rounded-full" style={{background:'var(--teal2)'}}></div>
                        Live on Google
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="h-6 flex items-center justify-center shrink-0" style={{background:'var(--paper)'}}>
                  <div className="w-20 h-1 rounded-full opacity-10" style={{background:'var(--ink)'}}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 AFTER EVERY JOB FLOW 🚀 */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden" style={{background:'var(--paper2)', borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold italic mb-4">Here&apos;s what happens after every job</h2>
            <div className="h-1.5 w-24 bg-teal-500 mx-auto rounded-full opacity-20"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 items-start mb-20 relative">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group relative">
                <div className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl mb-6 transition-all group-hover:scale-110 shadow-sm" style={{background:'var(--paper)', border:'1px solid var(--border)'}}>
                  {step.icon}
                </div>
                <div className="text-[14px] font-bold leading-tight max-w-[120px]" style={{color:'var(--ink)'}}>
                  {step.label}
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-10 -right-4 translate-x-1/2 opacity-20"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto rounded-[32px] p-10 md:p-12 text-center" style={{background:'var(--ink)', border:'1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.2)'}}>
            <p className="text-xl md:text-2xl font-display font-bold italic leading-relaxed mb-6" style={{color:'var(--mint)'}}>
              &ldquo;10 jobs = <span style={{color:'var(--sun)'}}>10 posts + up to 10 reviews</span>. 50 jobs = strong Google presence. <span style={{color:'var(--teal2)'}}>100 jobs = you dominate your neighbourhood.</span>&rdquo;
            </p>
            <div className="text-[11px] font-black tracking-[3px] uppercase opacity-40 px-6 py-2 rounded-full border border-white/5 w-fit mx-auto" style={{color:'var(--paper)'}}>The Power of Compounding</div>
          </div>
        </div>
      </section>

      {/* 🚀 TICKER 🚀 */}
      <div className="py-3.5 px-6 md:px-12 flex items-center gap-4 overflow-hidden" style={{background:'var(--teal)'}}>
        {[
          { n: 'Worldwide', l: 'Market Presence' },
          { n: '50+', l: 'Local businesses on Neerzy' },
          { n: '300+', l: 'Job updates published this month' },
          { n: '0', l: 'Tech skills needed' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap flex-shrink-0">
            <span className="font-display text-xl font-bold italic" style={{color:'var(--mint)'}}>{item.n}</span>
            <span className="text-[12px] font-medium" style={{color:'rgba(245,249,246,0.65)'}}>{item.l}</span>
            {i < 3 && <div className="w-px h-5 ml-5 flex-shrink-0" style={{background:'rgba(255,255,255,0.15)'}}></div>}
          </div>
        ))}
      </div>

      {/* 🛠️ HOW IT WORKS 🛠️ */}
      <section className="py-20 md:py-24 px-6 md:px-12" style={{background:'var(--ink)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-5 flex items-center gap-3" style={{color:'rgba(168,240,200,0.4)'}}>
            How it works
            <span className="h-px w-7" style={{background:'rgba(168,200,200,0.15)'}}></span>
          </div>
          <h2 className="mb-4" style={{color:'var(--mint)'}}>Three steps.<br/><em style={{color:'var(--sun)'}}>Zero complexity.</em></h2>
          <p className="text-[15px] max-w-[480px] mb-12" style={{color:'rgba(245,249,246,0.5)'}}>We handle everything behind the scenes. You just show us your latest work.</p>
          <div className="grid md:grid-cols-3 gap-px rounded-[26px] overflow-hidden" style={{border:'1px solid rgba(168,240,200,0.1)', background:'rgba(168,240,200,0.06)'}}>
            {STEPS.map((s, i) => (
              <div key={i} className="p-8 md:p-10" style={{background:'rgba(14,26,20,0.98)'}}>
                <div className="font-display text-7xl font-bold italic leading-none tracking-tighter mb-4" style={{color:'rgba(168,240,200,0.07)'}}>{s.n}</div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5" style={{background:'rgba(168,240,200,0.08)', border:'1px solid rgba(168,240,200,0.12)'}}>{s.icon}</div>
                <h3 className="font-display text-lg font-bold mb-2" style={{color:'var(--paper)'}}>{s.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{color:'rgba(245,249,246,0.45)'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔐 CONTROL 🔐 */}
      <section className="py-20 md:py-24 px-6 md:px-12" style={{background:'var(--paper2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-5 flex items-center gap-3" style={{color:'var(--ink4)'}}>
            Always in control
            <span className="h-px w-7" style={{background:'var(--paper4)'}}></span>
          </div>
          <h2 className="mb-4">Nothing goes live<br/><em>without your say.</em></h2>
          <p className="text-[15px] max-w-[480px] mb-12" style={{color:'var(--ink3)'}}>We do all the work. You approve every update before a single neighbour sees it.</p>
          <div className="grid md:grid-cols-2 gap-px rounded-[26px] overflow-hidden" style={{border:'1px solid var(--border2)', background:'var(--border)'}}>
            {CONTROLS.map((c, i) => (
              <div key={i} className="p-8 md:p-9" style={{background:'var(--paper)'}}>
                <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center text-lg mb-5" style={{background:'var(--teal-soft)', border:'1px solid rgba(15,110,86,0.12)'}}>{c.icon}</div>
                <h3 className="font-display text-[17px] font-bold mb-2" style={{color:'var(--ink)'}}>{c.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{color:'var(--ink3)'}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎨 TEMPLATE GALLERY 🎨 */}
      <div style={{background:'var(--paper)'}}>
        <TemplateGallery />
      </div>

      {/* ⭐ TESTIMONIALS ⭐ */}
      <section className="py-20 md:py-24 px-6 md:px-12" style={{background:'var(--paper2)', borderTop:'1px solid var(--border)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-5 flex items-center gap-3" style={{color:'var(--ink4)'}}>
            Real trades professionals
            <span className="h-px w-7" style={{background:'var(--paper4)'}}></span>
          </div>
          <h2 className="mb-12">Built for people who<br/><em>work with their hands.</em></h2>
          <div className="grid md:grid-cols-2 gap-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-[18px] p-7" style={{background:'var(--paper2)', border:'1px solid var(--border2)'}}>
                <div className="text-[14px] tracking-[2px] mb-3.5" style={{color:'var(--sun2)'}}>★★★★★</div>
                <div className="font-display text-[17px] italic font-light leading-snug mb-5" style={{color:'var(--ink)'}}>&ldquo;{t.quote}&rdquo;</div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold" style={{background:'var(--paper3)', border:'1px solid var(--border2)', color:'var(--teal)'}}>{t.initials}</div>
                  <div>
                    <div className="text-[13px] font-bold" style={{color:'var(--ink)'}}>{t.name}</div>
                    <div className="text-[11px]" style={{color:'var(--ink4)'}}>{t.trade} • {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Value Row */}
          <div className="grid md:grid-cols-3 gap-3 mt-5">
            {[
              { icon: '🏠', title: 'Be seen by neighbours', desc: 'Appear in local searches when people nearby look for your services.' },
              { icon: '🤝', title: 'Build trust with your work', desc: 'Show your craft with real photos and voice-to-text project updates.' },
              { icon: '📈', title: 'Every job becomes proof', desc: 'Each completed job makes you more credible than every competitor who didn\'t post.' },
            ].map((v, i) => (
              <div key={i} className="rounded-[18px] p-6" style={{background:'var(--paper)', border:'1px solid var(--border)'}}>
                <div className="text-xl mb-2.5">{v.icon}</div>
                <div className="text-[14px] font-bold mb-1.5" style={{color:'var(--ink)'}}>{v.title}</div>
                <div className="text-[12px] leading-relaxed" style={{color:'var(--ink3)'}}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA BAND 🚀 */}
      <section className="py-20 px-6 md:px-12 grid md:grid-cols-[1fr_auto] gap-12 items-center" style={{background:'var(--sun)'}}>
        <div>
          <h2 className="mb-3" style={{color:'var(--ink)'}}>Your neighbours are<br/>searching right now.</h2>
          <p className="text-[14px] max-w-[440px] leading-relaxed mb-5" style={{color:'var(--ink2)'}}>Free to start. No credit card. No tech skills. Snap a photo from your next job — we handle everything else.</p>
          <div className="flex flex-wrap gap-5">
            {['Free to start', 'No tech skills', 'You stay in control', 'Live in 24 hrs'].map((c, i) => (
              <div key={i} className="text-[13px] font-semibold flex items-center gap-1.5" style={{color:'var(--ink2)'}}>
                <span className="font-black" style={{color:'var(--teal)'}}>✓</span> {c}
              </div>
            ))}
          </div>
        </div>
        <Link href="/onboarding" className="inline-block font-bold text-sm px-9 py-4 rounded-full whitespace-nowrap transition-all hover:scale-105 active:scale-95" style={{background:'var(--ink)', color:'var(--mint)'}}>
          Get Started on Neerzy →
        </Link>
      </section>

      {/* 📝 DISCLAIMER 📝 */}
      <div className="text-center py-4 px-6 text-[11px]" style={{color:'var(--ink4)', background:'var(--paper)', borderTop:'1px solid var(--border)'}}>
        Results may vary. Neerzy helps improve your online visibility — we do not guarantee specific rankings.
      </div>

      <Footer />
    </div>
  )
}
