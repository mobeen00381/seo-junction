import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Why Real Work Photos are Your Best Marketing Tool — Neerzy',
  description: 'Real work photos from your phone are more powerful than any ad. Learn how plumbers, electricians, and roofers use job site photos to rank higher on Google, build local trust, and get more customers — with zero ad spend.',
  keywords: 'Google Business Profile photos tips, job site photos marketing, how to market trade business online, get more customers as a plumber, trades marketing without social media',
  openGraph: {
    title: 'Why Your Job Site Photos Are Your Best Marketing Tool',
    description: 'One photo from your phone after a job can rank you higher on Google, build trust with neighbours, and bring in more calls — automatically.',
    url: 'https://www.neerzy.com/blog/real-work-photos-marketing',
  },
}

export default function Article3() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-inter">
      <Navbar />
      
      <article className="max-w-[720px] mx-auto px-6 pt-40 pb-24 text-slate-900 dark:text-slate-100 leading-[1.8]">
        {/* BREADCRUMB */}
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">Blog</Link>
          <span className="opacity-30">→</span>
          <span>Marketing</span>
        </div>

        {/* CATEGORY + DATE */}
        <div className="flex gap-4 items-center mb-6 flex-wrap">
          <span className="bg-primary/5 text-primary text-[10px] font-black px-3 py-1 rounded-full border border-primary/10 uppercase tracking-widest">Marketing</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">March 15, 2026</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-50">· 5 min read</span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight italic uppercase">
          Why Your <span className="text-primary italic">Job Site Photos</span> Are Your Best Marketing Tool
        </h1>

        {/* INTRO */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium border-l-4 border-primary pl-6 italic">
          You do not need a marketing budget to grow your trade business in 2026. You need a phone, a finished job, and 10 seconds. The photo you take at the end of every job is worth more than any Facebook ad.
        </p>

        <p className="mb-6">
          Most tradespeople think marketing means spending money, writing content, or being on social media. None of that is true. The most effective marketing a plumber, electrician, roofer, or cleaner can do in 2026 is showing their actual work — to Google, to their neighbours, and to the algorithm that decides who gets called first.
        </p>

        <p className="mb-12">
          This article explains exactly why real job site photos are so powerful and how to use them to rank higher on Google and get more local customers — with no advertising budget and no marketing knowledge required.
        </p>

        {/* H2 */}
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 mt-12 tracking-tight uppercase italic border-b border-primary/20 pb-2 inline-block">
          Why stock photos destroy your local Google ranking
        </h2>

        <p className="mb-6">
          Many trade business websites and Google profiles use stock photos — images of smiling professionals in clean uniforms or generic tool kits. These photos look professional. But they are killing your Google ranking.
        </p>

        <p className="mb-12">
          In 2026, Google&apos;s AI can read and understand photos. When it sees a genuine photo of a boiler installation in a real house, it learns that your business does boiler installations. When it sees a stock photo of a man smiling at a clipboard, it learns nothing about your business at all.
        </p>

        {/* TIP BOXES */}
        <h2 className="text-xl font-black bg-slate-950 text-white px-6 py-3 inline-block uppercase italic tracking-tighter mb-8">Google Business Profile Photo Tips</h2>
        <div className="grid gap-6 mb-12">
          {[
            { icon: '📸', title: 'Before and after photos', desc: 'Show the problem and the solution. A blocked drain before and a clear drain after. These tell a story and build instant trust.' },
            { icon: '🏠', title: 'The finished job in context', desc: 'A photo of the completed work in the actual room. Not a close-up — the whole job, in the whole space. This helps neighbours visualise the work.' },
            { icon: '📍', title: 'Photos with location context', desc: 'A recognisable street or a local landmark in the background. This makes your profile feel genuinely local — not like a national chain.' },
            { icon: '🔧', title: 'Trade-specific details', desc: 'Show the specifics of your trade. The new P-trap. The fresh soldered joint. These details say "I know what I am doing" clearly.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-6 items-start bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 transition-transform hover:scale-[1.01]">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white mb-2 italic uppercase tracking-tight">{item.title}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* H2 */}
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 mt-12 tracking-tight uppercase italic border-b border-primary/20 pb-2 inline-block">
          Market your trade online — without social media
        </h2>

        <p className="mb-6">
          The biggest misconception in trades marketing is that you need to be on Instagram or TikTok. You do not. Those platforms require constant content creation and a large following before they generate any real business.
        </p>

        <p className="mb-12">
          Google is different. People search Google because they need a plumber <span className="italic font-bold">right now</span>. They are ready to call. They are ready to book. You just need to be the one they find first. The most effective way to market is to put your job photos where people are looking.
        </p>

        {/* THE SYSTEM BOX */}
        <div className="bg-primary/5 border border-primary/10 rounded-[48px] p-10 md:p-16 mb-12 relative overflow-hidden">
          <div className="text-[10px] font-black text-primary uppercase tracking-[4px] mb-8">The 10-second system</div>
          <div className="space-y-6">
            {[
              { step: '1', text: 'Finish the job' },
              { step: '2', text: 'Take one photo of the finished work on your phone' },
              { step: '3', text: 'Send it to Neerzy (takes 5 seconds)' },
              { step: '4', text: 'AI writes a professional post with local keywords' },
              { step: '5', text: 'Post goes live on your website and Google profile automatically' },
              { step: '6', text: 'Your customer gets a review link automatically' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-center">
                <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">{item.step}</div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight italic">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mb-12">
          Do this after every job. After 10 jobs you have 10 posts and 10 reviews. After 100 jobs you are the obvious first choice every time someone in your area searches for your trade.
        </p>

        {/* H2 */}
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 mt-12 tracking-tight uppercase italic border-b border-primary/20 pb-2 inline-block">
          The Psychology of Local Trust
        </h2>

        <p className="mb-6">
          When a homeowner is choosing between two plumbers — one with 5 generic photos and one with 60 photos of real jobs done in their neighbourhood — the decision is easy. The second plumber wins.
        </p>

        <p className="mb-12">
          Trust is the most important factor. A homeowner is letting you into their house. They need to know you are real, competent, and local. Nothing communicates all three faster than a photo of you doing real work a few streets away.
        </p>

        {/* FAQ */}
        <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 mt-12 italic uppercase tracking-tighter">Frequently asked questions</h2>
        <div className="divide-y divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
          {[
            { q: 'What photos should I post on my Google profile?', a: 'Real photos of your work are always best — before and after shots, finished installations, and jobs in progress.' },
            { q: 'How often should I add new photos?', a: 'Aim for at least one per week. If you work every day, one photo per day is even better to signal daily activity to Google.' },
            { q: 'Do photos really help with ranking?', a: 'Yes. Profiles with regular, genuine photos receive 35% more clicks and higher placement in Maps results than profiles without them.' },
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
          
          <div className="text-[10px] font-black tracking-[4px] uppercase text-primary mb-8">Your photo does all the work</div>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none italic uppercase">
            Take one photo. <span className="text-primary italic">Neerzy</span> does the rest.
          </h3>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto font-bold uppercase tracking-widest text-[10px]">
             Neerzy turns your job photos into professional Google posts and review requests — automatically. No tech skills. No marketing knowledge.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/onboarding"
              className="bg-primary hover:bg-primary/90 text-white font-black text-sm uppercase tracking-widest px-12 py-6 rounded-full transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Start Free Trial — Your Website Live in 24 Hours →
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
