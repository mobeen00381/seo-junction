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
      
      {/* NAV */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-40 pb-24 md:pb-40 overflow-hidden border-b border-gray-100 dark:border-slate-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-in text-left">
            <div className="inline-flex items-center gap-3 text-[10px] md:text-11px font-black tracking-[2px] uppercase text-slate-500 mb-8 border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="w-12 h-[1px] bg-slate-200 dark:bg-slate-800"></span>
              For local service businesses
            </div>
            <h1 className="mb-8 font-poppins text-slate-900 dark:text-white">
              Show your work.<br />
              Get found on <span className="italic-accent text-secondary">Google.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
              Send a photo or voice note from any job — we turn it into a professional website and Google presence 
              <span className="text-slate-900 dark:text-white font-bold italic"> automatically.</span> No technical skills needed.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
              <Link href="/onboarding" className="w-full sm:w-auto text-sm font-black text-navy bg-primary px-10 py-5 rounded-full shadow-2xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all text-center uppercase tracking-widest">
                Get Your Business Online →
              </Link>
              <Link href="/examples" className="w-full sm:w-auto text-sm font-black text-slate-400 hover:text-slate-900 dark:hover:text-white p-5 transition-all uppercase tracking-widest text-center">
                See examples →
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-gray-100 dark:border-slate-900">
               <div className="flex -space-x-3">
                 {['MT', 'SM', 'DC', 'SJ'].map((p, i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500">{p}</div>
                 ))}
               </div>
               <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                 <span className="text-slate-900 dark:text-white">50+ local businesses</span> already live
               </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8 flex gap-4">
               <div className="flex-1 glass p-6 rounded-[32px] border-slate-200/50 dark:border-slate-800/50">
                 <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 italic tracking-tighter">50+</div>
                 <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Businesses online</div>
               </div>
               <div className="flex-1 glass p-6 rounded-[32px] border-slate-200/50 dark:border-slate-800/50">
                 <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 italic tracking-tighter">300+</div>
                 <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Updates published</div>
               </div>
            </div>
            <div className="animate-float">
              <LivePreview whatsapp="+1234567890" businessName="Mike's Electric" domain="mikes-electric.com" />
            </div>
          </div>

        </div>
      </section>

      {/* STATS TICKER */}
      <div className="bg-slate-50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-800 py-6 overflow-hidden">
        <div className="flex items-center gap-12 animate-slide whitespace-nowrap px-6">
           {[
             { n: '50+', l: 'Local businesses using SEO Junction' },
             { n: '300+', l: 'Job updates published this month' },
             { n: '0', l: 'Tech skills needed to get started' },
             { n: 'USA · UK · UAE · AU', l: 'Serving businesses across four markets' }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-3">
               <span className="text-lg font-black text-secondary italic">{item.n}</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.l}</span>
               {i < 3 && <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-800 ml-8"></div>}
             </div>
           ))}
        </div>
      </div>

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
            {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5 group">
                  <div className="w-24 h-24 rounded-full mb-6 p-1.5 bg-white dark:bg-slate-700 shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover rounded-full md:filter md:grayscale md:hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="text-amber-400 text-sm mb-4">★★★★★</div>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 italic leading-relaxed mb-6 group-hover:text-primary transition-colors">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-auto">
                    <div className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-[2px]">{t.name}</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 font-bold">{t.trade} · {t.city}</div>
                  </div>
                </div>
            ))}
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
