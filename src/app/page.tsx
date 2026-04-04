import Link from 'next/link'
import LivePreview from '@/components/LivePreview'
import TemplateGallery from '@/components/TemplateGallery'
import FaqAccordion from '@/components/FaqAccordion'

const STEPS = [
  { n: '1', icon: '📸', title: 'Send your work', desc: 'Snap a photo or send a voice note of your latest job.' },
  { n: '2', icon: '🚀', title: 'We publish it', desc: 'We update your website and Google profile automatically.' },
  { n: '3', icon: '📞', title: 'Get more calls', desc: 'Local customers find you on Google and call your business.' },
]

const TESTIMONIALS = [
  { name: 'Mike Thompson', trade: 'Electrician', city: 'London, UK', quote: "I don’t understand websites, but now my business shows online.", star: 5, color: '#1565C0' },
  { name: 'Sandra Miller', trade: 'Plumber', city: 'Austin, USA', quote: "This helped me show my work without any effort. My phone actually rings.", star: 5, color: '#7C3AED' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* TOPBAR */}
      <div className="bg-navy text-white text-[10px] py-1.5 px-4 font-bold tracking-widest uppercase flex justify-center gap-8 flex-wrap">
        <span>⭐ 50+ local businesses using this</span>
        <span>⏱ 300+ updates published</span>
        <span>✅ No tech skills needed</span>
      </div>

      {/* NAV */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-110" style={{ background: 'var(--premium-gradient)' }}>S</div>
          <span className="font-black text-gray-900 text-xl tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>SEO Junction</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="/demo" className="hover:text-blue-600 transition-colors">Examples</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-xs font-bold text-gray-400 hover:text-gray-900 uppercase tracking-widest">Log In</Link>
          <Link href="/onboarding" className="text-sm font-black text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all" style={{ background: 'var(--premium-gradient)' }}>
            Get Your Business Online
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.05] tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            Show your work.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Get discovered on Google.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send a photo or voice note — we turn it into a professional online presence automatically. No computer needed.
          </p>
          <div className="flex flex-col items-center gap-4 mb-20">
            <Link href="/onboarding" className="text-lg font-black text-white px-10 py-5 rounded-2xl shadow-2xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all bg-navy">
              Get Your Business Online
            </Link>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span>No tech skills needed</span>
              <span className="w-1 h-1 rounded-full bg-gray-200"></span>
              <span>Free to start</span>
              <span className="w-1 h-1 rounded-full bg-gray-200"></span>
              <span>You stay in control</span>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW INTEGRATION */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <LivePreview />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>3 Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((s, i) => (
              <div key={i} className="group text-center">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-4xl mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 border border-gray-100">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROL & SAFETY SECTION */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex gap-2 items-center bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
             <span className="text-amber-400">🛡️</span> Secure & Controlled
          </div>
          <h2 className="text-4xl font-black mb-8 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>You&apos;re always in control.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm text-blue-400">✓</span>
                 Approval Required
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 You review and approve every update before it goes live. Nothing happens without your green light.
               </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm text-green-400">🔒</span>
                 Data Security
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Your data is secure. We never post to third-parties or Google without your explicit permission.
               </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -z-0"></div>
      </section>

      {/* TEMPLATE GALLERY SECTION */}
      <TemplateGallery />

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>Built for real service professionals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full font-black text-white flex items-center justify-center text-xl mb-6 shadow-lg rotate-3" style={{ background: t.color }}>{t.name[0]}</div>
                <div className="text-amber-400 text-xl mb-6">★★★★★</div>
                <p className="text-xl font-bold text-gray-800 italic leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-sm font-black text-gray-900 uppercase tracking-widest">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-1 font-bold">{t.trade} · {t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section className="py-24 px-6">
         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="text-center">
               <div className="text-4xl mb-6">📍</div>
               <h3 className="font-black text-gray-900 mb-3 uppercase tracking-tight">Be seen by local customers</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Appear in local searches when neighbors look for your services.</p>
            </div>
            <div className="text-center">
               <div className="text-4xl mb-6">🤝</div>
               <h3 className="font-black text-gray-900 mb-3 uppercase tracking-tight">Build trust with your work</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Show off your craft with photos and voice-to-text project updates.</p>
            </div>
            <div className="text-center">
               <div className="text-4xl mb-6">📈</div>
               <h3 className="font-black text-gray-900 mb-3 uppercase tracking-tight">Turn your jobs into proof</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Every job becomes more proof that you are the best pro in town.</p>
            </div>
         </div>
      </section>

      {/* EXPECTATION SETTING (LEGAL + TRUST) */}
      <div className="max-w-xl mx-auto text-center pb-20 px-6">
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[2px] mb-8 select-none">
          Results may vary. We help improve your online visibility, not guarantee rankings.
        </p>
        <Link href="/onboarding" className="inline-flex items-center gap-3 text-lg font-black text-white px-12 py-6 rounded-3xl shadow-3xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all bg-navy">
          Get Started Now <span className="text-2xl">→</span>
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-7 h-7 rounded-lg bg-navy flex items-center justify-center text-white font-black text-xs">S</div>
            <span className="font-black text-gray-900 text-sm tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>SEO Junction</span>
          </div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">© 2026 SEO Junction. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
