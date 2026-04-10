import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import LivePreview from '@/components/LivePreview'
import TemplateGallery from '@/components/TemplateGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
  description: 'Snap a photo from your latest job — Neerzy builds your website, manages your Google profile, and sends automatic review requests. No tech skills. Free to start. Live in 24 hours.',
  openGraph: {
    title: 'Neerzy — Every Job Becomes a Google Post and a 5-Star Review',
    description: 'Snap a photo. We handle your website, Google profile, and reviews — automatically.',
    url: 'https://www.neerzy.com',
  },
}

const STEPS = [
  { n: '01', icon: '📸', title: 'Send your work', desc: 'Snap a photo or voice note from the job site. WhatsApp, SMS - your choice. That\'s literally it.' },
  { n: '02', icon: '🚀', title: 'We publish it', desc: 'We write the copy, optimise for local search, and push the update to your website and Google Business Profile - automatically.' },
  { n: '03', icon: '🎯', title: 'Neighbours find you', desc: 'Local customers nearby see your freshest work in Google search and call your business directly.' },
  { n: '04', icon: '⭐', title: 'Reviews on autopilot', desc: 'Your customer gets a review link automatically. One tap — they leave you a 5-star Google review. No awkward asking.' },
];

const TESTIMONIALS = [
  { name: 'Mike Thompson', initials: 'MT', trade: 'Electrician', city: 'London, UK', quote: "I don't understand websites, but now my neighbours find me on Google and my phone actually rings.", img: '/testimonials/mike.png' },
  { name: 'Sarah Johnson', initials: 'SJ', trade: 'Home Cleaner', city: 'Sydney, AU', quote: "I just send a photo of my finished job and it's on my site the same day. My booking rate tripled.", img: '/testimonials/sarah.png' },
  { name: 'David Chen', initials: 'DC', trade: 'HVAC Technician', city: 'San Francisco', quote: "Finally a way to show my installs to local neighbours without needing to be a tech expert.", img: '/testimonials/david.png' },
  { name: 'Sandra Miller', initials: 'SM', trade: 'Plumber', city: 'Austin, USA', quote: "This helped me show my work without any effort. My phone rings, my calendar fills. Simple.", img: '/testimonials/sandra.png' },
  { name: 'Tom Richards', initials: 'TR', trade: 'Roofer', city: 'Manchester, UK', quote: "I used to spend hours on my phone after a long day. Now Neerzy handles my Google posts and reviews automatically.", img: '/testimonials/tom.png' },
  { name: 'Emma Wilson', initials: 'EW', trade: 'Locksmith', city: 'Melbourne, AU', quote: "The automated review link is a game changer. I get 5-star reviews before I've even finished packing my tools.", img: '/testimonials/emma.png' },
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
      <section className="relative pt-10 md:pt-14 pb-10 md:pb-0 overflow-hidden" style={{borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.85fr_1fr] gap-0 items-stretch min-h-[60vh]">
          
          {/* Left - Copy */}
          <div className="flex flex-col justify-center py-12 md:py-20 md:pr-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full text-[11px] font-bold tracking-[0.8px] uppercase px-4 py-1.5 mb-5 w-fit" style={{background:'var(--teal-soft)', color:'var(--teal)', border:'1px solid rgba(15,110,86,0.2)'}}>
              <div className="w-[7px] h-[7px] rounded-full" style={{background:'var(--teal2)', animation:'blink 2s ease-in-out infinite'}}></div>
              Worldwide Market Presence
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
              <Link href="/examples" className="text-sm font-bold flex items-center gap-2 transition-colors hover:text-primary" style={{color:'var(--ink2)'}}>
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
               <div className="text-[13px]" style={{color:'var(--ink2)'}}>
                 <strong style={{color:'var(--ink)'}}>Trades businesses worldwide</strong> already live on Google via Neerzy
               </div>
            </div>
          </div>

          {/* Right - Product Mockup */}
          <div className="relative flex flex-col items-center justify-center pt-12 pb-12 md:pl-6 animate-fade-in" style={{animationDelay:'0.2s'}}>
            <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(circle, var(--paper3) 1px, transparent 1px)', backgroundSize:'24px 24px'}}></div>
            
            {/* Phone Frame */}
            <div className="w-[260px] h-[520px] rounded-[48px] p-2.5 relative z-10 shadow-4xl group/phone" style={{background:'var(--ink)', border:'1px solid rgba(255,255,255,0.08)'}}>
              
              {/* Floating Stat 1 - Top Right */}
              <div className="absolute -right-12 top-10 w-[100px] rounded-xl p-2.5 shadow-2xl animate-float z-20" style={{background:'var(--paper)', border:'1px solid var(--border2)', backdropFilter:'blur(10px)'}}>
                <div className="text-[7px] font-black tracking-[1px] uppercase mb-1 opacity-50">Local Rank</div>
                <div className="font-display text-lg font-black italic leading-none" style={{color:'var(--teal2)'}}>#1</div>
                <div className="text-[8px] font-bold mt-1.5" style={{color:'var(--ink4)'}}>Local Search</div>
              </div>

              {/* Floating Stat 2 - Middle Right */}
              <div className="absolute -right-14 bottom-32 w-[110px] rounded-xl p-2.5 shadow-2xl animate-float z-20" style={{background:'var(--paper)', border:'1px solid var(--border2)', animationDelay:'1s', backdropFilter:'blur(10px)'}}>
                <div className="text-[7px] font-black tracking-[1px] uppercase mb-1 opacity-50">Monthly Calls</div>
                <div className="font-display text-lg font-black italic leading-none" style={{color:'var(--teal2)'}}>+34</div>
                <div className="text-[8px] font-bold mt-1.5 flex items-center gap-1">
                  <span style={{color:'var(--teal2)'}}>↗</span> 
                  <span style={{color:'var(--ink4)'}}>62% mth</span>
                </div>
              </div>

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
      <section className="py-14 px-6 md:px-12 relative overflow-hidden" style={{background:'var(--paper2)', borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold italic mb-3">Here&apos;s what happens after every job</h2>
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
      <section className="py-14 md:py-16 px-6 md:px-12" style={{background:'var(--ink)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-4 flex items-center gap-3" style={{color:'rgba(168,240,200,0.4)'}}>
            How it works
            <span className="h-px w-7" style={{background:'rgba(168,200,200,0.15)'}}></span>
          </div>
          <h2 className="mb-3" style={{color:'var(--mint)'}}>Four steps.<br/><em style={{color:'var(--sun)'}}>Zero complexity.</em></h2>
          <p className="text-[15px] max-w-[480px] mb-12" style={{color:'rgba(245,249,246,0.5)'}}>We handle everything behind the scenes. You just show us your latest work.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px rounded-[26px] overflow-hidden" style={{border:'1px solid rgba(168,240,200,0.1)', background:'rgba(168,240,200,0.06)'}}>
            {STEPS.map((s, i) => (
              <div key={i} className="p-8 md:p-10 premium-card" style={{background:'rgba(14,26,20,0.98)'}}>
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
      <section className="py-14 md:py-16 px-6 md:px-12" style={{background:'var(--paper2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-4 flex items-center gap-3" style={{color:'var(--ink4)'}}>
            Always in control
            <span className="h-px w-7" style={{background:'var(--paper4)'}}></span>
          </div>
          <h2 className="mb-3">Nothing goes live<br/><em>without your say.</em></h2>
          <p className="text-[15px] max-w-[480px] mb-10" style={{color:'var(--ink3)'}}>We do all the work. You approve every update before a single neighbour sees it.</p>
          <div className="grid md:grid-cols-2 gap-px rounded-[26px] overflow-hidden" style={{border:'1px solid var(--border2)', background:'var(--border)'}}>
            {CONTROLS.map((c, i) => (
              <div key={i} className="p-8 md:p-9 premium-card" style={{background:'var(--paper)'}}>
                <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center text-lg mb-5" style={{background:'var(--teal-soft)', border:'1px solid rgba(15,110,86,0.12)'}}>{c.icon}</div>
                <h3 className="font-display text-[17px] font-bold mb-2" style={{color:'var(--ink)'}}>{c.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{color:'var(--ink3)'}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📱 HOME SCREEN SECTION 📱 */}
      <section className="py-14 md:py-20 px-6 md:px-12 overflow-hidden" style={{background:'var(--ink)'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Left — Phone Mockup (Home Screen) */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="w-[260px] h-[520px] rounded-[48px] p-2.5 shadow-4xl" style={{background:'#1a1a1a', border:'1px solid rgba(255,255,255,0.08)'}}>
              <div className="w-full h-full rounded-[38px] overflow-hidden relative flex flex-col" style={{background:'linear-gradient(160deg, #1a1a2e 0%, #0f0f23 50%, #16213e 100%)'}}>
                
                {/* Status Bar */}
                <div className="h-8 flex items-center px-6 shrink-0">
                  <div className="text-[11px] font-bold" style={{color:'rgba(255,255,255,0.6)'}}>9:41</div>
                  <div className="ml-auto flex gap-1 items-center opacity-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                  </div>
                </div>

                {/* Home Screen Area */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                  
                  {/* App Icons Row */}
                  <div className="grid grid-cols-4 gap-5">
                    {/* Neerzy App — Highlighted */}
                    <div className="flex flex-col items-center gap-1.5 group">
                      <div className="w-14 h-14 rounded-[16px] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110" style={{background:'linear-gradient(135deg, #1d9e75 0%, #0f6e56 100%)'}}>
                        <svg className="w-7 h-7" viewBox="0 0 30 30" fill="none">
                          <circle cx="15" cy="13" r="5" fill="none" stroke="#a8f0c8" strokeWidth="1.8"/>
                          <circle cx="15" cy="13" r="2" fill="#a8f0c8"/>
                          <path d="M10 21 Q15 17 20 21" stroke="#a8f0c8" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                        </svg>
                      </div>
                      <span className="text-[10px] font-medium" style={{color:'rgba(255,255,255,0.8)'}}>Neerzy</span>
                    </div>
                    
                    {/* WhatsApp */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-14 h-14 rounded-[16px] flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'}}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                      </div>
                      <span className="text-[10px] font-medium" style={{color:'rgba(255,255,255,0.5)'}}>WhatsApp</span>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-14 h-14 rounded-[16px] flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, #34C759 0%, #248A3D 100%)'}}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                      </div>
                      <span className="text-[10px] font-medium" style={{color:'rgba(255,255,255,0.5)'}}>Phone</span>
                    </div>

                    {/* Camera */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-14 h-14 rounded-[16px] flex items-center justify-center shadow-lg" style={{background:'linear-gradient(135deg, #636366 0%, #48484A 100%)'}}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
                      </div>
                      <span className="text-[10px] font-medium" style={{color:'rgba(255,255,255,0.5)'}}>Camera</span>
                    </div>
                  </div>

                  {/* Neerzy Highlight Pulse */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{background:'rgba(29,158,117,0.15)', border:'1px solid rgba(29,158,117,0.3)'}}>
                    <div className="w-2 h-2 rounded-full" style={{background:'var(--teal2)', animation:'blink 2s ease-in-out infinite'}}></div>
                    <span className="text-[11px] font-bold" style={{color:'var(--mint)'}}>One tap — you&apos;re posting</span>
                  </div>
                </div>

                {/* Dock */}
                <div className="h-16 flex items-center justify-center gap-5 mx-4 mb-2 rounded-[22px] shrink-0" style={{background:'rgba(255,255,255,0.08)', backdropFilter:'blur(20px)'}}>
                  <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{background:'linear-gradient(135deg, #34C759 0%, #248A3D 100%)'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{background:'linear-gradient(135deg, #007AFF 0%, #0055D4 100%)'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                  </div>
                  <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{background:'linear-gradient(135deg, #FF9500 0%, #FF3B30 100%)'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                  </div>
                  <div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{background:'linear-gradient(135deg, #5856D6 0%, #AF52DE 100%)'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="h-5 flex items-center justify-center shrink-0">
                  <div className="w-28 h-1 rounded-full" style={{background:'rgba(255,255,255,0.2)'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Copy & Access Cards */}
          <div className="order-1 md:order-2">
            <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-5 flex items-center gap-3" style={{color:'rgba(168,240,200,0.4)'}}>
              Always accessible
              <span className="h-px w-7" style={{background:'rgba(168,240,200,0.15)'}}></span>
            </div>
            <h2 className="mb-5" style={{color:'var(--mint)'}}>Lives on your home screen<br/><em style={{color:'var(--sun)'}}>— like WhatsApp.</em></h2>
            <p className="text-[15px] max-w-[440px] mb-10 leading-relaxed" style={{color:'rgba(245,249,246,0.55)'}}>
              After signup, add Neerzy to your home screen in 5 seconds. One tap — you&apos;re posting a job. No browser. No login. No searching.
            </p>

            {/* Access Method Cards */}
            <div className="space-y-3">
              {/* Primary — Home Screen */}
              <div className="rounded-[18px] p-5 flex items-center gap-4" style={{background:'rgba(29,158,117,0.12)', border:'1px solid rgba(29,158,117,0.25)'}}>
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl shrink-0" style={{background:'rgba(29,158,117,0.2)'}}>📱</div>
                <div>
                  <div className="text-[14px] font-bold mb-0.5" style={{color:'var(--mint)'}}>Home Screen</div>
                  <div className="text-[12px]" style={{color:'rgba(245,249,246,0.45)'}}>Primary — one tap to post, always visible</div>
                </div>
                <div className="ml-auto text-[9px] font-black tracking-[1.5px] uppercase px-3 py-1 rounded-full shrink-0" style={{background:'var(--teal)', color:'var(--mint)'}}>Recommended</div>
              </div>

              {/* Direct Link */}
              <div className="rounded-[18px] p-5 flex items-center gap-4" style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl shrink-0" style={{background:'rgba(255,255,255,0.05)'}}>🔗</div>
                <div>
                  <div className="text-[14px] font-bold mb-0.5" style={{color:'var(--paper)'}}>Direct Link</div>
                  <div className="text-[12px]" style={{color:'rgba(245,249,246,0.35)'}}>Backup — bookmark your dashboard URL</div>
                </div>
              </div>

              {/* QR Code */}
              <div className="rounded-[18px] p-5 flex items-center gap-4" style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl shrink-0" style={{background:'rgba(255,255,255,0.05)'}}>📷</div>
                <div>
                  <div className="text-[14px] font-bold mb-0.5" style={{color:'var(--paper)'}}>QR Code</div>
                  <div className="text-[12px]" style={{color:'rgba(245,249,246,0.35)'}}>First-time use — scan to install instantly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎨 TEMPLATE GALLERY 🎨 */}
      <div style={{background:'var(--paper)'}}>
        <TemplateGallery />
      </div>

      {/* ⭐ TESTIMONIALS ⭐ */}
      <section className="py-14 md:py-16 px-6 md:px-12" style={{background:'var(--paper2)', borderTop:'1px solid var(--border)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-5 flex items-center gap-3" style={{color:'var(--ink4)'}}>
            Real trades professionals
            <span className="h-px w-7" style={{background:'var(--paper4)'}}></span>
          </div>
          <h2 className="mb-12">Built for people who<br/><em>work with their hands.</em></h2>
          <div className="grid md:grid-cols-3 gap-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-[18px] p-6" style={{background:'var(--paper2)', border:'1px solid var(--border2)'}}>
                <div className="text-[14px] tracking-[2px] mb-3.5" style={{color:'var(--sun2)'}}>★★★★★</div>
                <div className="font-display text-[15px] italic font-light leading-snug mb-5" style={{color:'var(--ink)'}}>&ldquo;{t.quote}&rdquo;</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{border:'1px solid var(--border2)'}}>
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold" style={{color:'var(--ink)'}}>{t.name}</div>
                    <div className="text-[11px]" style={{color:'var(--ink4)'}}>{t.trade} • {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 VALUE STRIP 🚀 */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{background:'var(--ink)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            { icon: '🏠', title: 'Be seen by neighbours', desc: 'Appear in local searches when people nearby look for your services.' },
            { icon: '🤝', title: 'Build trust with your work', desc: 'Show your craft with real photos and voice-to-text project updates.' },
            { icon: '📈', title: 'Every job becomes proof', desc: 'Each completed job makes you more credible than every competitor who didn\'t post.' },
          ].map((v, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="text-3xl">{v.icon}</div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{color:'var(--mint)'}}>{v.title}</h3>
                <p className="text-[13px] leading-relaxed opacity-70" style={{color:'var(--paper)'}}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔒 SAFE & SECURE SECTION 🔒 */}
      <section className="py-14 md:py-20 px-6 md:px-12" style={{background:'var(--paper)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)'}}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-center">
          
          {/* Left — Copy */}
          <div>
            <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-5 flex items-center gap-3" style={{color:'var(--ink4)'}}>
              Trust &amp; Security
              <span className="h-px w-7" style={{background:'var(--paper4)'}}></span>
            </div>
            <h2 className="mb-4">Safe. Secure.<br/><em>Always yours.</em></h2>
            <p className="text-[15px] max-w-[400px] leading-relaxed" style={{color:'var(--ink3)'}}>
              Your livelihood depends on your online presence. We protect it like our own.
            </p>
          </div>

          {/* Right — Security Cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: '🔒', title: 'Device binding', desc: "Your account is tied to your device. A stranger with your link can\u2019t access your account on their phone." },
              { icon: '🔑', title: 'New device protection', desc: "If you switch phones, we send a one-time code to verify it\u2019s really you." },
              { icon: '⏱️', title: 'Auto session expiry', desc: "Sessions expire automatically. You\u2019re never left exposed." },
              { icon: '🏠', title: 'Your domain, your data', desc: "Your website, your Google profile, your reviews. We never lock you in." },
            ].map((s, i) => (
              <div key={i} className="rounded-[18px] p-6" style={{background:'var(--paper2)', border:'1px solid var(--border2)'}}>
                <div className="w-10 h-10 rounded-[11px] flex items-center justify-center text-lg mb-4" style={{background:'var(--teal-soft)', border:'1px solid rgba(15,110,86,0.12)'}}>
                  {s.icon}
                </div>
                <h3 className="font-display text-[15px] font-bold mb-1.5" style={{color:'var(--ink)'}}>{s.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{color:'var(--ink3)'}}>{s.desc}</p>
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
        <Link href="/onboarding" className="inline-block font-bold text-sm px-9 py-4 rounded-full whitespace-nowrap transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(15,110,86,0.2)]" style={{background:'var(--ink)', color:'var(--mint)'}}>
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
