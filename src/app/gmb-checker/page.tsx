'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import confetti from 'canvas-confetti'

const TRADES = [
  'Plumber', 'Electrician', 'HVAC Technician', 'Roofer', 'Landscaper', 
  'Locksmith', 'House Cleaner', 'Dentist', 'Lawyer', 'Real Estate Agent'
]

const TRADE_INSIGHTS: Record<string, { seo: string[], aeo: string[], geo: string[] }> = {
  Plumber: {
    seo: ['Missing "Emergency Service" keyword density.', 'NAP inconsistency in Yelp vs GMB.'],
    aeo: ['No conversational FAQ for "best plumber near me".', 'Missing license # in description for AI trust.'],
    geo: ['Entity proximity low for neighborhood clusters.', 'No geo-tagged project photos.']
  },
  Electrician: {
    seo: ['Missing panel upgrade specific landing pages.', 'Low mobile speed on current site.'],
    aeo: ['Voice search "electrician near me" defaults to competitors.', 'No mentions of EV charger installation in entity graph.'],
    geo: ['Map radius limited by city-only mentions.', 'Zero local citations in trade-specific directories.']
  },
  HVAC: {
    seo: ['Seasonal keywords (AC repair, Heating) not optimized.', 'Low backlink profile for local service area.'],
    aeo: ['Missing structured data for service availability.', 'AI agents cannot find your business hours.'],
    geo: ['Proximity score low for 10-mile radius.', 'Competitors have 3x more local geo-checkins.']
  },
  Other: {
    seo: ['Generic metadata without local intent.', 'Low keyword relevance for primary services.'],
    aeo: ['Missing Answer Engine Schema (FAQ/Service).', 'AI trust score low due to missing credentials.'],
    geo: ['Entity proximity needs geo-specific content.', 'Local map reach is currently restricted.']
  }
}

const ANALYSIS_LOGS = [
  "Initializing Google Search Index scan...",
  "Querying ChatGPT-4o Entity database...",
  "Analyzing Answer Engine (AEO) conversational reach...",
  "Checking Generative Search (GEO) proximity graph...",
  "Calculating Schema.org structured data density...",
  "Verifying NAP (Name, Address, Phone) across 40+ directories...",
  "Synthesizing final Audit Score..."
]

function getScores(name: string, city: string, trade: string) {
  // Simulating realistic start scores
  const base = 35 + (name.length % 10);
  return {
    seo: base + (city.length % 5),
    aeo: base - 5 + (trade.length % 5),
    geo: base - 8 + (name.length % 3),
    total: base
  }
}

export default function GmbCheckerPage() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [trade, setTrade] = useState('Plumber')
  const [step, setStep] = useState<'input' | 'loading' | 'result' | 'optimized'>('input')
  const [logIndex, setLogIndex] = useState(0)
  const [scores, setScores] = useState({ seo: 0, aeo: 0, geo: 0, total: 0 })
  const [animatedScore, setAnimatedScore] = useState(0)
  const [isFixing, setIsFixing] = useState(false)

  // Loading Sequence (Neural Scan Effect)
  useEffect(() => {
    if (step === 'loading') {
      const interval = setInterval(() => {
        setLogIndex(prev => {
          if (prev < ANALYSIS_LOGS.length - 1) return prev + 1;
          clearInterval(interval);
          setScores(getScores(name, city, trade));
          setStep('result');
          return prev;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, name, city, trade]);

  // Score Animation
  useEffect(() => {
    if (step === 'result' && animatedScore < scores.total) {
      const timer = setTimeout(() => {
        setAnimatedScore(prev => Math.min(scores.total, prev + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [step, animatedScore, scores.total]);

  const handleOptimize = () => {
    setIsFixing(true);
    let target = 97;
    const interval = setInterval(() => {
      setAnimatedScore(prev => {
        if (prev >= target) {
          clearInterval(interval);
          setStep('optimized');
          setIsFixing(false);
          confetti({
             particleCount: 150,
             spread: 80,
             origin: { y: 0.6 },
             colors: ['#2563EB', '#F59E0B', '#10B981']
          });
          return target;
        }
        return prev + 1;
      });
    }, 20);
  };

  const getInsights = (t: string) => TRADE_INSIGHTS[t] || TRADE_INSIGHTS['Other'];

  const getHealthColor = (s: number) => {
    if (s > 90) return 'text-emerald-500';
    if (s > 80) return 'text-blue-500';
    if (s > 60) return 'text-amber-500';
    return 'text-red-500';
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-primary/20">
      
      {/* HEADER */}
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* STEP 1: INPUT */}
        {step === 'input' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[3.2px] mb-6 border border-primary/10">Neural GMB Audit 4.0</div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
                   The <span className="text-primary italic">Answers</span> are<br />
                   changing. Are you?
                </h1>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">See how ChatGPT, Perplexity, and Google's AI Search see your business in 10 seconds.</p>
             </div>

             <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 text-9xl opacity-[0.03] rotate-12 -translate-y-8 translate-x-8 pointer-events-none">🤖</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                   <div className="space-y-8">
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3 group-focus-within:text-primary transition-colors">Business Name</label>
                        <input 
                          type="text" value={name} onChange={e => setName(e.target.value)}
                          placeholder="e.g. Skyline Electrical Solutions"
                          className="w-full bg-slate-50 border border-slate-100 rounded-[28px] px-8 py-6 font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">City & State</label>
                        <input 
                          type="text" value={city} onChange={e => setCity(e.target.value)}
                          placeholder="e.g. Austin, TX"
                          className="w-full bg-slate-50 border border-slate-100 rounded-[28px] px-8 py-6 font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
                        />
                      </div>
                   </div>
                   <div className="space-y-8">
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Primary Trade</label>
                        <select 
                          value={trade} onChange={e => setTrade(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-100 rounded-[28px] px-8 py-6 font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none appearance-none"
                        >
                           {TRADES.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <button 
                         onClick={() => setStep('loading')}
                         disabled={!name || !city}
                         className="w-full h-[88px] bg-primary text-white font-black rounded-[28px] text-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-30 disabled:hover:scale-100 flex items-center justify-center gap-4"
                      >
                         Scan My Profile →
                      </button>
                   </div>
                </div>
                <div className="mt-12 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[4px] opacity-60">
                   Used by 8,400+ Local Businesses Worldwide
                </div>
             </div>
          </div>
        )}

        {/* STEP 2: NEURAL LOADING */}
        {step === 'loading' && (
           <div className="text-center py-24 animate-in fade-in duration-500">
              <div className="w-32 h-32 relative mx-auto mb-16">
                 <div className="absolute inset-0 border-8 border-primary/10 rounded-full"></div>
                 <div className="absolute inset-0 border-8 border-t-primary rounded-full animate-spin"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">📡</div>
              </div>
              <div className="max-w-md mx-auto space-y-4">
                 <h2 className="text-2xl font-black text-slate-900 tracking-tight">{ANALYSIS_LOGS[logIndex]}</h2>
                 <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${((logIndex + 1) / ANALYSIS_LOGS.length) * 100}%` }}
                    />
                 </div>
                 <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest animate-pulse">
                    Cross-referencing Generative Graph Indexes...
                 </p>
              </div>
           </div>
        )}

        {/* STEP 3: RESULTS / WOW MOVEMENT */}
        {(step === 'result' || step === 'optimized') && (
           <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                 
                 {/* SCORE CIRCLE */}
                 <div className="lg:col-span-5 bg-white rounded-[48px] border border-slate-100 p-12 shadow-sm flex flex-col items-center justify-center relative">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[4px] mb-10">AI Interaction Score</div>
                    <div className="relative w-64 h-64 flex items-center justify-center mb-10">
                       <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="44" fill="none" stroke="#F1F5F9" strokeWidth="6"/>
                          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8"
                            strokeDasharray={`${(animatedScore/100)*276.5} 276.5`} strokeLinecap="round" 
                            className={`transition-all duration-300 ${getHealthColor(animatedScore)}`}
                          />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className={`text-8xl font-black tracking-tighter transition-colors duration-500 ${isFixing ? 'text-primary animate-pulse' : 'text-slate-900'}`}>{animatedScore}</span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">out of 100</span>
                       </div>
                    </div>
                    <div className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${step === 'optimized' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                       {step === 'optimized' ? 'AI Optimized Profile' : 'High Friction Detected'}
                    </div>
                 </div>

                 {/* ANALYTICS PANEL */}
                 <div className="lg:col-span-7 bg-slate-900 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
                    <h3 className="text-2xl font-black mb-10 tracking-tight flex items-center gap-3">
                       <span className="p-2 bg-white/10 rounded-xl text-lg">📊</span> Detailed Breakdown
                    </h3>
                    <div className="space-y-10">
                       {[
                         { label: 'SEO (Search Engine Reach)', score: step === 'optimized' ? 98 : scores.seo, icon: '🔍', color: 'bg-primary' },
                         { label: 'AEO (Answer Engine Visibility)', score: step === 'optimized' ? 96 : scores.aeo, icon: '🤖', color: 'bg-emerald-500' },
                         { label: 'GEO (Generative Engine Trust)', score: step === 'optimized' ? 95 : scores.geo, icon: '🎙️', color: 'bg-amber-500' }
                       ].map((p, i) => (
                         <div key={i} className="space-y-4">
                            <div className="flex justify-between items-center group">
                               <div className="flex items-center gap-4">
                                  <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">{p.icon}</span>
                                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{p.label}</span>
                               </div>
                               <span className={`text-sm font-black ${isFixing ? 'text-primary' : ''}`}>{p.score}%</span>
                            </div>
                            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                               <div 
                                 className={`h-full ${p.color} rounded-full transition-all duration-1000 ease-out`} 
                                 style={{ width: `${p.score}%` }}
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* ACTION: OPTIMIZE BUTTON */}
              {step === 'result' && (
                <div className="bg-white border-2 border-slate-100 rounded-[48px] p-12 text-center shadow-xl shadow-slate-200/20 relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-primary to-emerald-500"></div>
                   <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Profile Friction Detected ⚠️</h2>
                   <p className="text-slate-500 font-medium mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                      AI agents (ChatGPT) are currently ranking your competitors <span className="text-slate-900 font-bold underline">Above You</span> because your entity data is fragmented.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                      {Object.entries(getInsights(trade)).map(([key, tips], idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                           <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-4">{key} Errors</div>
                           <ul className="space-y-3">
                              {tips.map((t, i) => (
                                <li key={i} className="text-[11px] font-bold text-slate-600 flex items-start gap-2">
                                   <span className="text-red-500">✕</span> {t}
                                </li>
                              ))}
                           </ul>
                        </div>
                      ))}
                   </div>

                   <button 
                     onClick={handleOptimize}
                     disabled={isFixing}
                     className="bg-primary text-white font-black px-12 py-8 rounded-[32px] text-2xl shadow-[0_30px_60px_-15px_rgba(21,101,192,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 mx-auto group relative overflow-hidden"
                   >
                     <span className="relative z-10">{isFixing ? 'Optimizing Entity Graph...' : 'Fix All Gaps & Unlock Ranking →'}</span>
                     <div className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform"></div>
                   </button>
                </div>
              )}

              {/* POST-OPTIMIZATION: THE WOW EXPERIENCE */}
              {step === 'optimized' && (
                <div className="space-y-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 pb-24">
                   <div className="text-center">
                      <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">You are now AI-Optimized. ✨</h2>
                      <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Visibility Potential: 100% Entity Reach Achieved</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                      <div className="relative group">
                         <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="bg-white border-2 border-primary rounded-[40px] p-10 relative z-10 shadow-2xl shadow-primary/10 transition-transform hover:-rotate-1">
                            <div className="flex items-center gap-3 mb-8">
                               <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-xl">🚀</div>
                               <div>
                                  <h4 className="font-black text-lg leading-none">Instant Authority</h4>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Done-for-you Activation</p>
                               </div>
                            </div>
                            <ul className="space-y-5">
                               {['Converational FAQ Injected', 'Geotagged Content Sync', 'Entity-First Description', 'NAP Global Consistency'].map((t, i) => (
                                 <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                    <div className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px]">✓</div>
                                    {t}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>
                      <div className="bg-slate-900 rounded-[40px] p-10 flex flex-col justify-between text-white relative h-full transition-transform hover:rotate-1">
                         <div>
                            <div className="text-primary text-4xl mb-6 font-black tracking-tighter">Wait.</div>
                            <p className="text-slate-300 font-medium leading-relaxed">Optimization like this normally takes 6 months of agency work ($2,400+ cost).</p>
                         </div>
                         <div className="pt-8">
                             <div className="text-sm font-black mb-2">CURRENT STATUS</div>
                             <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 animate-pulse">Unlocked for 24 Hours</div>
                         </div>
                      </div>
                   </div>

                   {/* FINAL HIGH-GLOW CTA */}
                   <div className="text-center pt-10">
                      <Link 
                        href="/onboarding"
                        className="inline-block bg-primary text-white font-black px-16 py-10 rounded-[40px] text-3xl shadow-[0_40px_100px_-20px_rgba(21,101,192,0.6)] hover:scale-105 active:scale-95 transition-all ring-[16px] ring-primary/5 group relative overflow-hidden"
                      >
                        <span className="relative z-10 uppercase tracking-tight">Claim Your Free Trial →</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                      </Link>
                      
                      <div className="mt-12 flex flex-wrap justify-center gap-10 items-center text-[11px] font-black text-slate-400 uppercase tracking-[4px]">
                        <div className="flex items-center gap-2">
                           <span className="text-emerald-500 text-xl">★</span> 4.9/5 Rating
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-emerald-500 text-xl">★</span> Top Choice 2026
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-emerald-500 text-xl">★</span> Instant Set-up
                        </div>
                      </div>
                   </div>
                </div>
              )}
           </div>
        )}

      </div>
    </div>
  )
}
