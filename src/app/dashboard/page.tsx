'use client'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import DashboardSidebar from '@/components/DashboardSidebar'

function DashboardContent() {
  const searchParams = useSearchParams()
  const [currentView, setCurrentView] = useState('main')
  const [hasSentUpdate, setHasSentUpdate] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [updateType, setUpdateType] = useState<'image' | 'voice' | null>(null)
  const [isGMBConnected, setIsGMBConnected] = useState(false)
  const [isGMBConnecting, setIsGMBConnecting] = useState(false)
  const [gmbStep, setGmbStep] = useState(0)
  const [timeframe, setTimeframe] = useState('30d')

  const handleGMBConnect = () => {
    setIsGMBConnecting(true)
    setGmbStep(1)
    setTimeout(() => setGmbStep(2), 1200)
    setTimeout(() => setGmbStep(3), 2400)
    setTimeout(() => {
      setIsGMBConnecting(false)
      setIsGMBConnected(true)
      setGmbStep(0)
    }, 3600)
  }

  const handleSendUpdate = (type: 'image' | 'voice') => {
    setUpdateType(type)
    setIsUpdating(true)
    setTimeout(() => {
      setIsUpdating(false)
      setHasSentUpdate(true)
      setShowSuccess(true)
      setUpdateType(null)
    }, 2000)
  }

  const getMetrics = () => {
    const data: Record<string, any> = {
      '24h': { views: '12', calls: '2', visits: '5', growth: '+2%' },
      '7d': { views: '142', calls: '11', visits: '45', growth: '+8%' },
      '30d': { views: '1.2K', calls: '48', visits: '312', growth: '+14%' },
      '1y': { views: '15.4K', calls: '592', visits: '4.2K', growth: '+122%' },
      'all': { views: '28.1K', calls: '1.1K', visits: '8.4K', growth: '+340%' }
    }
    return data[timeframe] || data['30d']
  }

  const metrics = getMetrics()

  const renderMainView = () => (
    <div className="animate-fade-in space-y-10">
      {/* SUCCESS FEEDBACK */}
      {showSuccess && (
        <div className="bg-emerald-600 text-white p-6 rounded-[24px] mb-10 border-4 border-white shadow-2xl flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-500">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/20 rounded-3xl flex items-center justify-center text-3xl">✨</div>
              <div>
                 <div className="font-black text-xl tracking-tighter leading-none mb-1">Dual-Sync Successful!</div>
                 <p className="text-xs font-medium opacity-80">Your update is now live on your **Website** and **Google My Business**.</p>
              </div>
           </div>
           <button onClick={() => setShowSuccess(false)} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">Dismiss</button>
        </div>
      )}

      {/* PERFORMANCE ANALYTICS */}
      <section className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 md:p-6 border-b border-slate-50 gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight mb-0.5">Business Performance</h3>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Real-time local SEO impact</p>
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-xl gap-0.5">
            {['24h', '7d', '30d', '1y', 'all'].map((t) => (
              <button 
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${timeframe === t ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {t === 'all' ? 'All' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 divide-x divide-slate-50">
          {[
            { label: 'Profile Views', value: metrics.views, icon: '👀', color: 'text-primary' },
            { label: 'Organic Calls', value: metrics.calls, icon: '📞', color: 'text-emerald-600' },
            { label: 'Website Visits', value: metrics.visits, icon: '🌐', color: 'text-blue-600' },
          ].map((m, i) => (
            <div key={i} className="p-4 md:p-6 text-center">
              <div className="text-lg md:text-2xl mb-1">{m.icon}</div>
              <div className={`text-2xl md:text-4xl font-black tracking-tighter leading-none mb-1 ${m.color}`}>{m.value}</div>
              <div className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Growth Badge */}
        <div className="px-5 md:px-6 py-3 bg-emerald-50/50 border-t border-b border-slate-50 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{metrics.growth} growth vs previous period</span>
        </div>

        {/* Chart Area */}
        <div className="p-5 md:p-6">
          <div className="relative h-48 md:h-56 w-full">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] font-bold text-slate-300 uppercase tracking-widest w-8">
              <span>High</span>
              <span></span>
              <span>Low</span>
            </div>
            
            {/* Chart */}
            <div className="ml-10 h-full relative">
              <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="400" y2="40" stroke="#f1f5f9" strokeWidth="1"/>
                <line x1="0" y1="80" x2="400" y2="80" stroke="#f1f5f9" strokeWidth="1"/>
                <line x1="0" y1="120" x2="400" y2="120" stroke="#f1f5f9" strokeWidth="1"/>
                
                {/* Area fill */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={timeframe === '24h' ? '#3b82f6' : timeframe === '7d' ? '#6366f1' : '#10b981'} stopOpacity="0.15"/>
                    <stop offset="100%" stopColor={timeframe === '24h' ? '#3b82f6' : timeframe === '7d' ? '#6366f1' : '#10b981'} stopOpacity="0.01"/>
                  </linearGradient>
                </defs>
                
                {/* Different chart shapes per timeframe */}
                {timeframe === '24h' && (
                  <>
                    <path d="M0,120 Q50,110 100,105 Q150,95 200,100 Q250,90 300,85 Q350,80 400,75 L400,160 L0,160 Z" fill="url(#chartGradient)"/>
                    <path d="M0,120 Q50,110 100,105 Q150,95 200,100 Q250,90 300,85 Q350,80 400,75" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="400" cy="75" r="4" fill="#3b82f6"/>
                  </>
                )}
                {timeframe === '7d' && (
                  <>
                    <path d="M0,130 Q60,120 120,95 Q180,85 220,90 Q280,70 340,55 Q370,45 400,40 L400,160 L0,160 Z" fill="url(#chartGradient)"/>
                    <path d="M0,130 Q60,120 120,95 Q180,85 220,90 Q280,70 340,55 Q370,45 400,40" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="400" cy="40" r="4" fill="#6366f1"/>
                  </>
                )}
                {timeframe === '30d' && (
                  <>
                    <path d="M0,140 Q40,135 80,120 Q120,110 160,95 Q200,85 240,70 Q280,60 320,45 Q360,35 400,25 L400,160 L0,160 Z" fill="url(#chartGradient)"/>
                    <path d="M0,140 Q40,135 80,120 Q120,110 160,95 Q200,85 240,70 Q280,60 320,45 Q360,35 400,25" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="400" cy="25" r="4" fill="#10b981"/>
                  </>
                )}
                {timeframe === '1y' && (
                  <>
                    <path d="M0,145 Q30,140 60,135 Q90,125 120,105 Q160,90 200,80 Q240,65 280,45 Q320,30 360,18 Q380,12 400,8 L400,160 L0,160 Z" fill="url(#chartGradient)"/>
                    <path d="M0,145 Q30,140 60,135 Q90,125 120,105 Q160,90 200,80 Q240,65 280,45 Q320,30 360,18 Q380,12 400,8" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="400" cy="8" r="4" fill="#10b981"/>
                  </>
                )}
                {timeframe === 'all' && (
                  <>
                    <path d="M0,150 Q25,148 50,145 Q75,140 100,130 Q130,115 160,100 Q190,85 220,70 Q250,55 280,40 Q310,28 340,18 Q370,10 400,5 L400,160 L0,160 Z" fill="url(#chartGradient)"/>
                    <path d="M0,150 Q25,148 50,145 Q75,140 100,130 Q130,115 160,100 Q190,85 220,70 Q250,55 280,40 Q310,28 340,18 Q370,10 400,5" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="400" cy="5" r="4" fill="#10b981"/>
                  </>
                )}
              </svg>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-2 text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                {timeframe === '24h' && <><span>12am</span><span>6am</span><span>12pm</span><span>6pm</span><span>Now</span></>}
                {timeframe === '7d' && <><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Today</span></>}
                {timeframe === '30d' && <><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Now</span></>}
                {timeframe === '1y' && <><span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Now</span></>}
                {timeframe === 'all' && <><span>Start</span><span>Month 3</span><span>Month 6</span><span>Month 9</span><span>Now</span></>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GMB CONNECTION CTA */}
      {!isGMBConnected && (
        <section className="bg-white border border-slate-100 rounded-[28px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm relative overflow-hidden group">
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-[20px] md:rounded-[32px] bg-primary/10 flex items-center justify-center text-4xl md:text-6xl relative z-10 group-hover:rotate-6 transition-transform duration-500 shrink-0">🏢</div>
          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-2 md:mb-3 tracking-tighter">Connect Google My Business</h2>
            <p className="text-slate-500 font-medium mb-5 md:mb-8 max-w-md text-sm">Sync your phone updates directly to Google Maps and Search. 10x your local reach instantly.</p>
            
            {isGMBConnecting ? (
              <div className="space-y-4 max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin shrink-0"></div>
                  <span className="text-sm font-bold text-slate-900">{gmbStep === 1 ? 'Connecting to Google...' : gmbStep === 2 ? 'Verifying business profile...' : 'Syncing data...'}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-700" style={{width: gmbStep === 1 ? '33%' : gmbStep === 2 ? '66%' : '100%'}}></div>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleGMBConnect}
                className="bg-primary text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-[20px] md:rounded-[24px] text-sm md:text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30 ring-4 ring-primary/10"
              >
                Connect My Business Profile →
              </button>
            )}
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl translate-x-8 -translate-y-8 pointer-events-none group-hover:translate-x-4 transition-transform duration-1000">🗺️</div>
        </section>
      )}

      {isGMBConnected && (
        <div className="bg-white border border-slate-100 rounded-[28px] p-5 md:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-[12px] bg-emerald-50 flex items-center justify-center text-xl shrink-0 border border-emerald-100">✅</div>
              <div>
                <div className="text-sm font-black text-slate-900 mb-0.5">Google Business Profile Connected</div>
                <div className="text-[11px] text-slate-400">Elite Plumbing Pro · Updates sync automatically</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Sync
              </span>
              <button onClick={() => setIsGMBConnected(false)} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-red-500 transition-colors">Disconnect</button>
            </div>
          </div>
        </div>
      )}

      {/* ACCESS METHOD */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">Quick Access</h3>
        </div>

        <div className="bg-slate-950 rounded-[28px] p-6 md:p-8 text-white relative overflow-hidden group mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="w-14 h-14 rounded-[16px] flex items-center justify-center text-3xl shrink-0" style={{background:'rgba(29,158,117,0.2)'}}>📱</div>
            <div className="flex-1">
              <h4 className="text-lg font-black mb-1 tracking-tight">Add Neerzy to your Home Screen</h4>
              <p className="text-[13px] opacity-50 leading-relaxed max-w-lg">One tap from your phone — you&apos;re posting a job. No browser, no login, no searching. Lives right next to WhatsApp.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[8px] font-black uppercase tracking-widest bg-emerald-500 text-white px-3 py-1.5 rounded-full">Recommended</span>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/30">No login needed</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-6 text-7xl opacity-[0.04] translate-x-4 -translate-y-4 pointer-events-none group-hover:scale-110 transition-transform duration-700">📱</div>
        </div>

        {/* Desktop Posting */}
        <div className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
            <div>
              <h4 className="text-base font-black text-slate-900 tracking-tight mb-1">Desktop Posting</h4>
              <p className="text-[12px] text-slate-400">Send an update from your computer right now.</p>
            </div>
            <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Or use your phone above</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => handleSendUpdate('image')}
              className="flex items-center justify-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">📸</span>
              <span className="font-black text-xs text-slate-900 uppercase tracking-widest">Upload Photo</span>
            </button>
            <button 
              onClick={() => handleSendUpdate('voice')}
              className="flex items-center justify-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">🎙️</span>
              <span className="font-black text-xs text-slate-900 uppercase tracking-widest">Voice Note</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )

  const renderDomainsView = () => (
    <div className="animate-fade-in space-y-12">
       <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter decoration-primary decoration-8 underline-offset-8 mb-4">My Domains</h2>
          <p className="text-slate-500 font-medium">Manage your domains and DNS settings for professional SEO results.</p>
       </div>

       <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-50">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[24px] bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl border border-emerald-100">🌎</div>
                <div>
                   <div className="text-xl font-black text-slate-900 leading-none mb-2">eliteplumbingpro.com</div>
                   <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-widest">Primary Domain • Active</div>
                </div>
             </div>
             <button className="text-xs font-black text-primary uppercase tracking-[2px]">Manage DNS</button>
          </div>

          <div className="space-y-6">
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Domain Actions</h4>
             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <button className="p-8 rounded-3xl border-2 border-slate-50 hover:border-primary text-left transition-all group">
                   <div className="flex items-center gap-4 mb-2">
                      <div className="text-2xl group-hover:rotate-12 transition-transform">🚀</div>
                      <div className="text-xl font-black text-slate-900">Transfer Domain</div>
                   </div>
                   <p className="text-sm text-slate-500 font-medium">Get your EPP transfer code for eliteplumbingpro.com. Our team will handle the technical migration for you.</p>
                </button>
             </div>
          </div>
       </div>

       <div className="bg-amber-50 border-4 border-amber-200/50 rounded-[40px] p-10">
          <h3 className="text-xl font-black text-amber-900 mb-4 tracking-tight flex items-center gap-3">
             <span>🛡️</span> "Propper" DNS Configuration
          </h3>
          <p className="text-sm text-amber-800 font-medium mb-8">If you connected a domain you already own, ensure these records are set at your registrar (GoDaddy, Namecheap, etc.):</p>
          <div className="space-y-4">
             <div className="flex items-center justify-between bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-amber-200">
                <div className="text-xs"><span className="font-bold opacity-40 uppercase tracking-widest mr-4">Type:</span> <strong>A</strong></div>
                <div className="text-xs"><span className="font-bold opacity-40 uppercase tracking-widest mr-4">Name:</span> <strong>@</strong></div>
                <div className="text-xs font-black text-primary">76.76.21.21</div>
             </div>
             <div className="flex items-center justify-between bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-amber-200">
                <div className="text-xs"><span className="font-bold opacity-40 uppercase tracking-widest mr-4">Type:</span> <strong>CNAME</strong></div>
                <div className="text-xs"><span className="font-bold opacity-40 uppercase tracking-widest mr-4">Name:</span> <strong>www</strong></div>
                <div className="text-xs font-black text-primary">cname.seo-junction.app</div>
             </div>
          </div>
       </div>
    </div>
  )

  const renderSubscriptionView = () => (
    <div className="animate-fade-in space-y-12">
        <div>
           <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Subscription</h2>
           <p className="text-slate-500 font-medium">Manage your billing, plan, and service status.</p>
        </div>
        
        <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm relative overflow-hidden">
           <div className="flex items-center justify-between mb-12">
              <div>
                 <div className="text-[10px] font-black text-primary uppercase tracking-[2px] mb-2">Current Plan</div>
                 <div className="text-4xl font-black text-slate-900 leading-none">Professional <span className="text-lg opacity-20">$49/mo</span></div>
              </div>
              <div className="flex items-baseline gap-1">
                 <span className="text-2xl font-black text-slate-900">12</span>
                 <span className="text-xs font-bold text-slate-400">updates remaining</span>
              </div>
           </div>

           <div className="flex gap-4 mb-20">
              <button className="flex-1 bg-slate-50 font-black py-4 rounded-2xl text-xs uppercase tracking-[2px]">Upgrade Plan</button>
              <button className="flex-1 bg-slate-50 font-black py-4 rounded-2xl text-xs uppercase tracking-[2px]">Billing History</button>
           </div>

           <div className="pt-10 border-t border-slate-50">
              <h4 className="text-sm font-black text-slate-900 mb-2">Cancel Subscription</h4>
              <p className="text-sm text-slate-400 font-medium mb-8 max-w-sm">Cancelling your subscription will take your website offline and stop all Google My Business updates immediately.</p>
              <button className="bg-red-50 text-red-500 font-black px-8 py-4 rounded-xl text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">End Service Period</button>
           </div>
        </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      <DashboardSidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 bg-white lg:bg-slate-50/30 overflow-y-auto">
        <header className="px-10 py-6 flex justify-between items-center bg-white border-b border-slate-100 sticky top-0 z-40">
           <div className="lg:hidden flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary"></div>
           </div>
           
           <div className="hidden lg:block">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[4px]">
                 {currentView === 'main' ? 'Overview' : currentView.toUpperCase()}
              </h2>
           </div>

           <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200/50 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                 System Online
              </span>
              <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm ring-1 ring-slate-100"></div>
           </div>
        </header>

        <div className="p-6 md:p-12 max-w-6xl mx-auto">
          {currentView === 'main' && renderMainView()}
          {currentView === 'domains' && renderDomainsView()}
          {currentView === 'subscription' && renderSubscriptionView()}
          {(currentView === 'profile' || currentView === 'settings') && (
            <div className="py-20 text-center animate-fade-in">
               <div className="text-6xl mb-6">🚧</div>
               <h3 className="text-2xl font-black text-slate-900">Setting Up View...</h3>
               <p className="text-slate-400">The <strong>{currentView}</strong> module is being synchronized with your business profile.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
        </div>
      }>
        <DashboardContent />
      </Suspense>
    </div>
  )
}

