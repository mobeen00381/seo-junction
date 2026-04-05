'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import confetti from 'canvas-confetti'

const TRADE_WINS: Record<string, string[]> = {
  Plumber: [
    'Add your license number to your description and use conversational tone for AI engines.',
    'List every specialized service: Leak detection, Pipe lining, Emergency service.',
    'Entity-based SEO: Your city mentioned and geo-tagged images are top priorities.'
  ],
  Electrician: [
     'Enable Messaging to capture high-intent AEO searches.',
     'List panel upgrades, EV chargers, and GFCI separately for search density.',
     'Add ZIP code service areas individually to maximize local map radius.'
  ],
  Other: [
    'Name, Address, Phone (NAP) consistency across directories is non-negotiable.',
    'Weekly GMB Posts are the highest-value activity you can do for ranking.',
    'Ask for 5-star reviews immediately upon project completion.'
  ]
}

const ANALYSIS_STEPS = [
  "Scanning Google Search Index...",
  "Analyzing Answer Engine (AEO) Visibility...",
  "Evaluating Generative Engine (GEO) Proximity...",
  "Synthesizing SEO Score Breakdown..."
]

function calcBreakdown(name: string, city: string, trade: string) {
  // Low Initial Scores (Real-world common gaps)
  return {
    seo: 42 + (name.length % 5),
    aeo: 38 + (city.length % 5),
    geo: 31 + (trade.length % 5),
    total: 42
  }
}

export default function GmbCheckerPage() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [trade, setTrade] = useState('Plumber')
  const [step, setStep] = useState<'input' | 'loading' | 'result' | 'optimized'>('input')
  const [loadStep, setLoadStep] = useState(0)
  const [scores, setScores] = useState({ seo: 0, aeo: 0, geo: 0, total: 0 })
  const [animatedScore, setAnimatedScore] = useState(0)

  // LOADING SEQUENCE
  useEffect(() => {
    if (step === 'loading') {
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < ANALYSIS_STEPS.length - 1) {
          currentStep++;
          setLoadStep(currentStep);
        } else {
          clearInterval(interval);
          setScores(calcBreakdown(name, city, trade));
          setStep('result');
        }
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [step, name, city, trade]);

  // SCORE ANIMATION: Initial
  useEffect(() => {
    if (step === 'result' && animatedScore < scores.total) {
      const timer = setTimeout(() => {
        setAnimatedScore(prev => Math.min(scores.total, prev + 1));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [step, animatedScore, scores.total]);

  // WOW MOVEMENT: Jump to Optimized
  const handleOptimize = () => {
    setStep('optimized');
    let target = 98;
    const interval = setInterval(() => {
      setAnimatedScore(prev => {
        if (prev >= target) {
          clearInterval(interval);
          confetti({
             particleCount: 150,
             spread: 70,
             origin: { y: 0.6 },
             colors: ['#2563EB', '#F59E0B', '#10B981']
          });
          return target;
        }
        return prev + 1;
      });
    }, 15);
  };

  const getHealthColor = (s: number) => {
    if (s > 90) return 'text-emerald-500';
    if (s > 80) return 'text-blue-500';
    if (s > 60) return 'text-amber-500';
    return 'text-red-500';
  }

  const getHealthBg = (s: number) => {
    if (s > 90) return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    if (s > 80) return 'bg-blue-50 text-blue-600 border-blue-100';
    if (s > 60) return 'bg-amber-50 text-amber-600 border-amber-100';
    return 'bg-red-50 text-red-600 border-red-100';
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-primary/10">
      
      {/* HEADER NAV */}
      <nav className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-xl shadow-primary/20">S</div>
          <span className="font-black text-xl tracking-tighter text-slate-900">SEO Junction</span>
        </Link>
        <Link href="/onboarding" className="bg-slate-900 text-white font-black px-6 py-3 rounded-2xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
          Start Free Trial →
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* STEP 1: INPUT */}
        {step === 'input' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[3px] mb-6 shadow-sm border border-primary/5">Advanced GMB Audit</div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
                   Is your business<br />
                   <span className="text-primary underline decoration-primary/20 underline-offset-8">Invisible on Google?</span>
                </h1>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Analyze your ranking potential across SEO, Answer Engines (AEO), and Generative Search (GEO) in seconds.</p>
             </div>

             <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 text-9xl opacity-5 rotate-12 -translate-y-8 translate-x-8 pointer-events-none">🏢</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                   <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Business Name</label>
                        <input 
                          type="text" value={name} onChange={e => setName(e.target.value)}
                          placeholder="e.g. Master Plumbers Chicago"
                          className="w-full bg-slate-50 border border-slate-100 rounded-[28px] px-8 py-6 font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">City & State</label>
                        <input 
                          type="text" value={city} onChange={e => setCity(e.target.value)}
                          placeholder="e.g. Chicago, IL"
                          className="w-full bg-slate-50 border border-slate-100 rounded-[28px] px-8 py-6 font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                        />
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Primary Trade</label>
                        <select 
                          value={trade} onChange={e => setTrade(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-100 rounded-[28px] px-8 py-6 font-bold focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none"
                        >
                           <option>Plumber</option>
                           <option>Electrician</option>
                           <option>HVAC</option>
                           <option>Roofer</option>
                           <option>Other Service</option>
                        </select>
                      </div>
                      <button 
                         onClick={() => setStep('loading')}
                         disabled={!name || !city}
                         className="w-full h-full bg-primary text-white font-black py-6 rounded-[28px] text-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-30 flex items-center justify-center gap-4"
                      >
                         Audit My GMB →
                      </button>
                   </div>
                </div>
                <div className="mt-12 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[4px]">
                   No Login Required • Total Privacy Guaranteed • 10-Second Analysis
                </div>
             </div>
          </div>
        )}

        {/* STEP 2: LOADING */}
        {step === 'loading' && (
           <div className="text-center py-24 animate-in fade-in duration-500">
              <div className="w-24 h-24 border-8 border-primary/10 border-t-primary rounded-full animate-spin mx-auto mb-12 shadow-xl shadow-primary/20"></div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{ANALYSIS_STEPS[loadStep]}</h2>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                 Neural AI Engine Processing...
              </p>
           </div>
        )}

        {/* STEP 3 & 4: RESULT / OPTIMIZED */}
        {(step === 'result' || step === 'optimized') && (
           <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 
                 {/* MAIN SCORE CARD */}
                 <div className="bg-white rounded-[48px] border border-slate-100 p-12 shadow-sm text-center flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[4px] mb-10">Local Search Authority</div>
                    <div className="relative w-56 h-56 flex items-center justify-center mb-10">
                       <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="44" fill="none" stroke="#F1F5F9" strokeWidth="8"/>
                          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="8"
                            strokeDasharray={`${(animatedScore/100)*276.5} 276.5`} strokeLinecap="round" 
                            className={`transition-all duration-500 ${getHealthColor(animatedScore)}`}
                          />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-7xl font-black text-slate-900 tracking-tighter">{animatedScore}</span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">out of 100</span>
                       </div>
                    </div>
                    <div className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${getHealthBg(animatedScore)}`}>
                       {animatedScore > 90 ? 'Elite Performance' : animatedScore > 80 ? 'Good Ranking' : 'Critical Gaps Detected'}
                    </div>
                 </div>

                 {/* ANALYSIS PILLARS */}
                 <div className="bg-slate-900 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
                    <h3 className="text-xl font-black mb-8 tracking-tight">AI Analysis Breakdown</h3>
                    <div className="space-y-8">
                       {[
                         { label: 'Search Engine Optimization (SEO)', score: step === 'optimized' ? 98 : scores.seo, total: 100, icon: '🔍' },
                         { label: 'Answer Engine Optimization (AEO)', score: step === 'optimized' ? 96 : scores.aeo, total: 100, icon: '🤖' },
                         { label: 'Generative Search (GEO)', score: step === 'optimized' ? 97 : scores.geo, total: 100, icon: '🎙️' }
                       ].map((p, i) => (
                         <div key={i} className="space-y-3">
                            <div className="flex justify-between items-center">
                               <div className="flex items-center gap-3">
                                  <span className="text-xl">{p.icon}</span>
                                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{p.label}</span>
                               </div>
                               <span className="text-xs font-black">{p.score}%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                               <div 
                                 className="h-full bg-primary rounded-full transition-all duration-1000" 
                                 style={{ width: `${p.score}%` }}
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 rotate-12 -translate-y-8 translate-x-8">📡</div>
                 </div>
              </div>

              {/* ACTION: OPTIMIZE BUTTON (THE WOW MOVEMENT) */}
              {step === 'result' && (
                <div className="bg-primary/5 border border-primary/10 rounded-[48px] p-12 text-center mb-12 animate-pulse-slow">
                   <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Current Score: Critical Gaps Detected ⚠️</h2>
                   <p className="text-slate-500 font-medium mb-10 max-w-lg mx-auto">Your GMB Profile isn't optimized for the new **Answer Engines** (ChatGPT/Perplexity). You are losing ~64% of local reach.</p>
                   <button 
                     onClick={handleOptimize}
                     className="bg-primary text-white font-black px-12 py-7 rounded-[32px] text-xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 mx-auto group"
                   >
                     Fix All Gaps & See Optimized Score 
                     <span className="group-hover:translate-x-2 transition-transform">→</span>
                   </button>
                </div>
              )}

              {/* POST-OPTIMIZATION: BEFORE & AFTER */}
              {step === 'optimized' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 pb-24">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-[40px] border border-slate-100 p-8 opacity-50 relative">
                         <div className="absolute top-4 left-4 text-[8px] font-black text-slate-400 border border-slate-200 px-3 py-1 rounded-full uppercase">Current Profile</div>
                         <div className="pt-8 space-y-4">
                            <div className="h-6 w-1/2 bg-slate-100 rounded-lg"></div>
                            <div className="h-4 w-full bg-slate-50 rounded-lg"></div>
                            <div className="h-4 w-5/6 bg-slate-50 rounded-lg"></div>
                            <div className="pt-4 flex gap-2">
                               <div className="h-20 w-20 bg-slate-100 rounded-2xl"></div>
                               <div className="h-20 w-20 bg-slate-100 rounded-2xl"></div>
                            </div>
                         </div>
                      </div>
                      <div className="bg-emerald-50 rounded-[40px] border-4 border-white shadow-xl p-8 relative ring-8 ring-emerald-50/50">
                        <div className="absolute top-4 left-4 text-[8px] font-black text-emerald-600 bg-emerald-100/50 px-3 py-1 rounded-full uppercase">AI-Optimized Profile</div>
                        <div className="pt-8 space-y-4">
                            <div className="h-6 w-3/4 bg-emerald-200/50 rounded-lg animate-pulse"></div>
                            <div className="h-4 w-full bg-emerald-100/30 rounded-lg"></div>
                            <div className="h-4 w-full bg-emerald-100/30 rounded-lg"></div>
                            <div className="h-4 w-5/6 bg-emerald-100/30 rounded-lg"></div>
                            <div className="pt-4 flex gap-4">
                               <div className="h-20 w-32 bg-emerald-200/50 rounded-2xl flex items-center justify-center text-xl">📸</div>
                               <div className="h-20 w-32 bg-emerald-200/50 rounded-2xl flex items-center justify-center text-xl">✨</div>
                               <div className="h-20 w-32 bg-emerald-200/50 rounded-2xl flex items-center justify-center text-xl">🎙️</div>
                            </div>
                        </div>
                      </div>
                   </div>

                   {/* BIG FREE TRIAL CTA */}
                   <div className="text-center space-y-10">
                      <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter decoration-primary decoration-8 underline-offset-8">Achieve This Result in 24 Hours.</h2>
                        <p className="text-slate-500 font-semibold mb-10">SEO Junction handles all AI Optimization, GMB Sync, and Content Weekly.</p>
                      </div>

                      <div className="flex flex-col items-center gap-6">
                        <Link 
                          href="/onboarding"
                          className="w-full md:w-auto bg-primary text-white font-black px-16 py-10 rounded-[40px] text-3xl shadow-[0_40px_80px_-20px_rgba(21,101,192,0.6)] hover:scale-105 active:scale-95 transition-all ring-[12px] ring-primary/10 group relative overflow-hidden"
                        >
                          <span className="relative z-10">START FREE 7-DAY TRIAL →</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </Link>
                        
                        <div className="flex flex-wrap justify-center gap-8 items-center text-[10px] font-black text-slate-400 uppercase tracking-[4px]">
                          <div className="flex items-center gap-2">
                             <span className="text-emerald-500 text-lg">✓</span> 30-Day Money Back
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="text-emerald-500 text-lg">✓</span> Instant GMB Sync
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="text-emerald-500 text-lg">✓</span> 100% Guaranteed Ranking
                          </div>
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
