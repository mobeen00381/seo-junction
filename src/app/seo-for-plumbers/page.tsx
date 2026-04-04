import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'SEO for Plumbers — Rank on Google & Get More Plumbing Calls | SEO Junction',
  description: 'SEO Junction helps plumbers rank on Google and Google Maps. Done-for-you website + AI posts + GMB management. 30-day free trial. Most plumbers see results in 45 days.',
  keywords: 'SEO for plumbers, Google My Business for plumbers, plumber local SEO, rank plumbing business Google, get more plumbing customers',
}

export default function SeoForPlumbersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter text-left">
      <Navbar />

      <section style={{background:'linear-gradient(135deg,#0B1F3A,#162944)'}} className="px-6 py-40 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-6 border" style={{background:'rgba(21,101,192,0.2)',borderColor:'rgba(21,101,192,0.4)',color:'#90CAF9'}}>🔧 Built for Plumbing Companies</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
            Get Your Plumbing Business<br /><span className="text-amber-400">to the Top of Google</span><br />On 100% Autopilot
          </h1>
          <p className="text-blue-100 opacity-80 mb-10 text-lg max-w-xl mx-auto leading-relaxed">You fix pipes. We fix your Google ranking. We build your website, manage your GMB profile, and post fresh plumbing content every week — automatically.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="font-bold text-blue-900 bg-white px-8 py-4 rounded-xl text-base shadow-xl hover:bg-blue-50 transition-all">Start 30-Day Free Trial →</Link>
            <Link href="/demo" className="font-semibold px-8 py-4 rounded-xl text-base border border-white/30 hover:bg-white/10 transition-all">See Live Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">The Plumbing Google Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📵', title: "No Time for Marketing", desc: "You're on job sites all day. You have no time to write posts or update Google. Meanwhile, your competitor who does is getting your calls." },
              { icon: '📍', title: "Invisible on Maps", desc: "When someone searches 'plumber near me' you should be in the top 3. If you're not, those high-value calls go to someone else — every single day." },
              { icon: '😤', title: "SEO That Actually Works", desc: "Most agencies charge $500/month for 'reports'. SEO Junction is $19.99. We show you exactly what posts go live and exactly where you rank." },
            ].map((p, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-slate-800 transition-transform hover:scale-[1.03] text-left">
                <div className="text-4xl mb-6">{p.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectGallery 
        title="Plumbing Projects"
        subtitle="See the type of expert work we help you showcase to Google."
        items={[
          { title: 'Full Bathroom Repiping', category: 'Installation', imageUrl: '#' },
          { title: 'Emergency Leak Repair', category: 'Emergency', imageUrl: '#' },
          { title: 'Commercial Drain Cleaning', category: 'Maintenance', imageUrl: '#' },
        ]}
      />

      <section className="py-16 px-6 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Our AI Speaks Plumber</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm font-medium">Google checks whether content was written by an expert. Our posts include real plumbing terms that signal authority to Google&apos;s algorithm.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['P-trap','hydro-jetting','sewer lateral','shut-off valve','water main','supply line','drain snake','backflow preventer','wax ring','anode rod','PEX pipe','galvanized pipe','slab leak'].map((t,i)=>(
              <span key={i} className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0B1F3A] text-white">
        <div className="max-w-3xl mx-auto text-center border-b border-white/10 pb-20">
          <h2 className="text-4xl font-black mb-6 tracking-tight italic">30-Day Free Trial</h2>
          <p className="text-xl text-blue-200 mb-10 uppercase tracking-widest font-black">Get Your Site Live For Only <span className="text-white">$19.99 One-Time</span></p>
          <Link href="/onboarding" className="inline-block font-bold text-blue-900 bg-white px-12 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105">Start Free Trial — Built for Plumbers →</Link>
        </div>

        <div className="max-w-2xl mx-auto mt-20">
          <h2 className="text-2xl font-black text-center text-white mb-10 italic uppercase tracking-tighter">Plumber SEO Questions — Answered</h2>
          <div className="space-y-4">
            {[
              {q:'How do I get my plumbing business on Google Maps?',a:'Three things drive Google Maps ranking for plumbers: a fully optimized Google Business Profile, consistent weekly posts to that profile, and a website with local keywords. SEO Junction handles all three automatically. Most plumbers see map pack movement within 30–60 days.'},
              {q:'How long does SEO take to work for a plumbing company?',a:'Most plumbers using SEO Junction see their first ranking improvements within 30–45 days. Calls and inquiries typically increase by month 2. SEO compounds over time — the longer you run it, the stronger your position gets.'},
              {q:'What keywords should a plumber target on Google?',a:'Start with your core service plus city — "plumber Austin TX," "emergency plumber Denver," "drain cleaning near me." Then add service-specific terms: water heater repair, pipe leak, sewer line. SEO Junction targets all of these automatically for your location.'},
              {q:'Do I need a website to rank on Google Maps?',a:'Technically no — but plumbers with a linked website rank 40% higher in Google Maps than those without one. SEO Junction builds the website for you as part of every plan.'},
            ].map((f,i)=>(
              <details key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                <summary className="px-6 py-5 font-bold text-white text-sm cursor-pointer list-none flex justify-between items-center hover:bg-white/10 transition-colors">
                  {f.q}<span className="text-amber-400 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-sm text-blue-100/70 leading-relaxed border-t border-white/5">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
