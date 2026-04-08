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
  const [timeframe, setTimeframe] = useState('30d')

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

      {/* PERFORMANCE GRID */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Business Performance</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Real-time local SEO impact</p>
          </div>
          
          <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
            {['24h', '7d', '30d', '1y', 'all'].map((t) => (
              <button 
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${timeframe === t ? 'bg-white text-primary shadow-sm shadow-primary/10' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {t === 'all' ? 'All Time' : t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">👀</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Profile Views</div>
            </div>
            <div className="text-6xl font-black text-slate-900 leading-none mb-2 tracking-tighter">{metrics.views}</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               {metrics.growth} vs prev period
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-9xl pointer-events-none group-hover:scale-110 transition-transform duration-1000">📈</div>
          </div>

          <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📞</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Organic Calls</div>
            </div>
            <div className="text-6xl font-black text-slate-900 leading-none mb-2 tracking-tighter">{metrics.calls}</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               {metrics.growth} vs prev period
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-9xl pointer-events-none group-hover:scale-110 transition-transform duration-1000">📞</div>
          </div>

          <div className="bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🌐</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Website Visits</div>
            </div>
            <div className="text-6xl font-black text-slate-900 leading-none mb-2 tracking-tighter">{metrics.visits}</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               {metrics.growth} vs prev period
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-9xl pointer-events-none group-hover:scale-110 transition-transform duration-1000">🌎</div>
          </div>
        </div>
      </section>

      {/* GMB CONNECTION CTA */}
      {!isGMBConnected && (
        <section className="bg-white border-4 border-primary/5 rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-primary/5 relative overflow-hidden group">
          <div className="w-32 h-32 rounded-[32px] bg-primary/10 flex items-center justify-center text-6xl relative z-10 group-hover:rotate-6 transition-transform duration-500">🏢</div>
          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter decoration-primary decoration-4 underline-offset-8">Connect Google My Business</h2>
            <p className="text-slate-500 font-medium mb-8 max-w-md">Sync your phone updates directly to Google Maps and Search. **10x your local reach instantly.**</p>
            <button 
              onClick={() => setIsGMBConnected(true)}
              className="bg-primary text-white font-black px-10 py-5 rounded-[24px] text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30 ring-4 ring-primary/10"
            >
              Connect My Business Profile →
            </button>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl translate-x-8 -translate-y-8 pointer-events-none group-hover:translate-x-4 transition-transform duration-1000">🗺️</div>
        </section>
      )}

      {isGMBConnected && (
        <div className="bg-emerald-500 text-white p-4 rounded-full flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest animate-in slide-in-from-top-4">
           <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
           Synced to Google Business Profile @ Elite Plumbing Pro
        </div>
      )}

      {/* ACCESS METHODS & POSTING */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">Quick Access</h3>
          <span className="text-[9px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-widest">3 ways to post</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Home Screen — Primary */}
          <div className="bg-slate-950 rounded-[28px] p-6 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-4" style={{background:'rgba(29,158,117,0.2)'}}>📱</div>
              <h4 className="text-base font-black mb-1 tracking-tight">Home Screen</h4>
              <p className="text-[12px] opacity-50 mb-4 leading-relaxed">Add Neerzy to your phone&apos;s home screen. One tap — you&apos;re posting.</p>
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-black uppercase tracking-widest bg-emerald-500 text-white px-2.5 py-1 rounded-full">Recommended</span>
                <span className="text-[8px] font-black uppercase tracking-widest text-white/30">No login needed</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-6 text-7xl opacity-[0.04] translate-x-4 -translate-y-4 pointer-events-none group-hover:scale-110 transition-transform duration-700">📱</div>
          </div>

          {/* Direct Link */}
          <div className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-4 bg-blue-50">🔗</div>
              <h4 className="text-base font-black text-slate-900 mb-1 tracking-tight">Direct Link</h4>
              <p className="text-[12px] text-slate-400 mb-4 leading-relaxed">Bookmark your posting URL. Works from any browser, any device.</p>
              <div className="bg-slate-50 rounded-xl px-4 py-2.5 flex items-center justify-between gap-2">
                <code className="text-[10px] font-bold text-slate-500 truncate">neerzy.com/post/demo-user</code>
                <button className="text-[8px] font-black text-primary uppercase tracking-widest shrink-0 hover:underline">Copy</button>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl mb-4 bg-amber-50">📷</div>
              <h4 className="text-base font-black text-slate-900 mb-1 tracking-tight">QR Code</h4>
              <p className="text-[12px] text-slate-400 mb-4 leading-relaxed">Scan from any phone to open your posting page instantly.</p>
              <div className="w-24 h-24 bg-white rounded-xl p-1.5 border border-slate-100 mx-auto md:mx-0">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://www.neerzy.com/post/demo-user')}`} alt="QR" className="w-full h-full" />
              </div>
            </div>
          </div>
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

