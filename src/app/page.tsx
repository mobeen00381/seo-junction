import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import LivePreview from '@/components/LivePreview'
import TemplateGallery from '@/components/TemplateGallery'
import FaqAccordion from '@/components/FaqAccordion'
import ThemeToggle from '@/components/ThemeToggle'

const STEPS = [
  { n: '1', icon: '📸', title: 'Send your work', desc: 'Snap a photo or send a voice note of your latest job.' },
  { n: '2', icon: '🚀', title: 'We publish it', desc: 'We update your website and Google profile automatically.' },
  { n: '3', icon: '📞', title: 'Get more calls', desc: 'Local customers find you on Google and call your business.' },
]

const TESTIMONIALS = [
  { name: 'Mike Thompson', trade: 'Electrician', city: 'London, UK', quote: "I don’t understand websites, but now my business shows online.", star: 5, image: '/testimonials/mike.png' },
  { name: 'Sandra Miller', trade: 'Plumber', city: 'Austin, USA', quote: "This helped me show my work without any effort. My phone actually rings.", star: 5, image: '/testimonials/sandra.png' },
  { name: 'David Chen', trade: 'HVAC Technician', city: 'San Francisco, USA', quote: "Finally, a way to show my installs to local neighbors without being a tech expert.", star: 5, image: '/testimonials/david.png' },
  { name: 'Sarah Johnson', trade: 'Home Cleaner', city: 'Sydney, AU', quote: "I just send a photo of my work, and it's on my site. My booking rate tripled!", star: 5, image: '/testimonials/sarah.png' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* TOPBAR */}
      <div className="bg-navy text-white text-[10px] py-1.5 px-4 font-bold tracking-widest uppercase flex justify-center gap-8 flex-wrap">
        <span>⭐ 50+ local businesses using this</span>
        <span>⏱ 300+ updates published</span>
        <span>✅ No tech skills needed</span>
      </div>

      {/* NAV */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-50/30 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Show your work.<br />
            <span className="text-primary dark:text-primary-light">Get discovered on Google.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send a photo or voice note — we turn it into a professional online presence automatically. No technical skills needed.
          </p>
          <div className="flex flex-col items-center gap-6 mb-24">
            <Link href="/onboarding" className="text-lg font-bold text-white px-12 py-5 rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none hover:scale-[1.02] active:scale-95 transition-all bg-navy">
              Get Your Business Online
            </Link>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-2">✓ No tech skills needed</span>
              <span className="flex items-center gap-2">✓ Free to start</span>
              <span className="flex items-center gap-2">✓ You stay in control</span>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW INTEGRATION */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <LivePreview whatsapp="+1234567890" businessName="Mike's Electric" domain="mikes-electric.com" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Three Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-4xl mx-auto mb-10 border border-gray-100 dark:border-slate-700">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROL & SAFETY SECTION */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-white uppercase tracking-widest">You are always in control.</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <h3 className="text-lg font-bold mb-5 flex items-center gap-3 text-white">
                 <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm text-blue-400">✓</span>
                 Approval Required
               </h3>
               <p className="text-gray-300 leading-relaxed">
                 You review and approve every update before it goes live. Nothing happens without your green light.
               </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <h3 className="text-lg font-bold mb-5 flex items-center gap-3 text-white">
                 <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm text-green-400">🔒</span>
                 Data Security
               </h3>
               <p className="text-gray-300 leading-relaxed">
                 Your data is secure. We never post to third-parties or Google without your explicit permission.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE GALLERY SECTION */}
      <div className="dark:bg-slate-950">
        <TemplateGallery />
      </div>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Built for real service professionals</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t, i) => {
              const colors = ['bg-blue-600', 'bg-purple-600', 'bg-emerald-600', 'bg-rose-600'];
              const initials = t.name.split(' ').map(n => n[0]).join('');
              return (
                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
                  <div className={`w-20 h-20 rounded-full mb-6 shadow-xl border-4 border-white dark:border-slate-700 flex items-center justify-center text-2xl font-black text-white ${colors[i % colors.length]}`}>
                    {initials}
                  </div>
                  <div className="text-amber-400 text-sm mb-4">★★★★★</div>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-auto">
                    <div className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-[2px]">{t.name}</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 font-bold">{t.trade} · {t.city}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section className="py-24 px-6 dark:bg-slate-950">
         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="text-center">
               <div className="text-4xl mb-6">📍</div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tight">Be seen by local customers</h3>
               <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Appear in local searches when neighbors look for your services.</p>
            </div>
            <div className="text-center">
               <div className="text-4xl mb-6">🤝</div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tight">Build trust with your work</h3>
               <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Show off your craft with photos and voice-to-text project updates.</p>
            </div>
            <div className="text-center">
               <div className="text-4xl mb-6">📈</div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-tight">Turn your jobs into proof</h3>
               <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Every job becomes more proof that you are the best pro in town.</p>
            </div>
         </div>
      </section>

      {/* EXPECTATION SETTING (LEGAL + TRUST) */}
      <div className="max-w-xl mx-auto text-center pb-20 px-6 dark:bg-slate-950">
        <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-[2px] mb-8 select-none">
          Results may vary. We help improve your online visibility, not guarantee rankings.
        </p>
        <Link href="/onboarding" className="inline-flex items-center gap-3 text-lg font-black text-white px-12 py-6 rounded-3xl shadow-3xl shadow-blue-200 dark:shadow-none hover:scale-105 active:scale-95 transition-all bg-navy">
          Get Started Now <span className="text-2xl">→</span>
        </Link>
      </div>

      <Footer />

    </div>
  )
}
