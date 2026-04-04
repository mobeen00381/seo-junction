'use client'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function DashboardContent() {
  const searchParams = useSearchParams()
  const [hasSentUpdate, setHasSentUpdate] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [updateType, setUpdateType] = useState<'image' | 'voice' | null>(null)

  // Simulation: Check if we just came from onboarding activation
  useEffect(() => {
    if (searchParams.get('activate')) {
      // Just showing we're in "Activation Mode"
    }
  }, [searchParams])

  const handleSendUpdate = (type: 'image' | 'voice') => {
    setUpdateType(type)
    setIsUpdating(true)
    
    // Simulate upload/processing
    setTimeout(() => {
      setIsUpdating(false)
      setHasSentUpdate(true)
      setShowSuccess(true)
      setUpdateType(null)
    }, 2000)
  }

  return (
    <>
      {/* NAV */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{background:'var(--primary)'}}>S</div>
          <span className="font-bold tracking-tight">SEO Junction</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">Website Live</div>
          <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm"></button>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-6 py-12">
        
        {/* MOBILE UPDATE QR SECTION (Primary CTA) */}
        <div className="bg-white border-2 border-primary/10 rounded-[40px] p-8 mb-10 shadow-2xl shadow-primary/5 relative overflow-hidden group">
           <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-40 h-40 bg-gray-50 rounded-3xl p-4 flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-primary/30 transition-all">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://seo-junction.vercel.app/post/demo-user')}`} 
                  alt="Mobile Update QR" 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Update via Phone</h3>
                 <p className="text-sm text-gray-500 mb-6 font-medium">Scan with your phone to send updates instantly. **No login required.**</p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText('https://seo-junction.vercel.app/post/demo-user');
                        alert('Link copied to clipboard!');
                      }}
                      className="text-[10px] font-black text-primary bg-primary-light px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
                     >
                      Copy Direct Link
                    </button>
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-2.5 rounded-full uppercase tracking-widest flex items-center gap-2 border border-emerald-100">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                       PWA Ready
                    </span>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-9xl -translate-y-8 translate-x-8 group-hover:translate-x-4 transition-transform duration-1000">📱</div>
        </div>

        {/* SUCCESS FEEDBACK */}
        {showSuccess && (
          <div className="bg-emerald-600 text-white p-5 rounded-[24px] mb-10 flex items-center justify-between shadow-xl shadow-emerald-600/20 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-4">
              <span className="text-2xl">✨</span>
              <div>
                <div className="font-bold text-lg leading-none mb-1">Your update is live!</div>
                <div className="text-xs opacity-80">Google is now indexing your new content.</div>
              </div>
            </div>
            <button onClick={() => setShowSuccess(false)} className="text-white opacity-40 hover:opacity-100 transition-opacity">✕</button>
          </div>
        )}

        {/* ACTIVATION BANNER (If no update sent) */}
        {!hasSentUpdate && !isUpdating && (
          <div className="bg-white border-2 border-primary/5 rounded-[40px] p-10 text-center mb-10 shadow-sm transition-all duration-300">
            <div className="w-20 h-20 bg-primary-light text-primary rounded-[28px] flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner ring-1 ring-primary/10">📢</div>
            <h2 className="text-3xl font-black text-gray-900 mb-3 tracking-tighter decoration-primary decoration-4 underline-offset-8">Activate Your Business</h2>
            <p className="text-gray-500 mb-10 font-medium">Send your first update to start getting more local customers from Google.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSendUpdate('image')}
                className="flex flex-col items-center justify-center gap-4 p-8 bg-gray-50 rounded-[32px] border-2 border-transparent hover:border-primary hover:bg-white transition-all group shadow-sm hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">📸</span>
                <span className="font-black text-xs text-gray-900 uppercase tracking-widest">Post Photo</span>
              </button>
              <button 
                onClick={() => handleSendUpdate('voice')}
                className="flex flex-col items-center justify-center gap-4 p-8 bg-gray-50 rounded-[32px] border-2 border-transparent hover:border-primary hover:bg-white transition-all group shadow-sm hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">🎙️</span>
                <span className="font-black text-xs text-gray-900 uppercase tracking-widest">Voice Note</span>
              </button>
            </div>
          </div>
        )}

        {/* UPDATING STATE */}
        {isUpdating && (
          <div className="bg-white rounded-[40px] p-16 text-center shadow-sm border border-gray-100 animate-pulse">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="font-black text-xl text-gray-900 mb-1 tracking-tight">AI Post in Progress...</h2>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Applying AEO/GEO SEO signals for ${updateType}.</p>
          </div>
        )}

        {/* REINFORCEMENT MESSAGE */}
        {hasSentUpdate && !isUpdating && (
          <div className="bg-primary rounded-[40px] p-10 mb-10 text-white relative overflow-hidden shadow-2xl shadow-primary/30 transition-all duration-300">
            <div className="relative z-10 text-left">
              <h2 className="text-3xl font-black mb-2 tracking-tighter">Consistency Wins!</h2>
              <p className="opacity-80 text-sm mb-8 font-medium leading-relaxed">Regular updates from your phone build your local "E-E-A-T" ranking on Google Search & Maps.</p>
              
              <div className="flex gap-4">
                <button onClick={() => handleSendUpdate('image')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ring-1 ring-white/30">📸 New Photo</button>
                <button onClick={() => handleSendUpdate('voice')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ring-1 ring-white/30">🎙️ New Voice</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 text-[160px] opacity-10 translate-x-12 -translate-y-12 rotate-12 transition-transform duration-[4000ms] group-hover:rotate-45">🚀</div>
          </div>
        )}

        {/* STATS / FEED (Only visible after activation) */}
        {hasSentUpdate && (
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-gray-100 pb-4">
              <h3 className="font-black text-lg text-gray-900 tracking-tight">Recent Activity</h3>
              <div className="text-[10px] font-black text-primary uppercase tracking-[2px]">Total AI Updates: 1</div>
            </div>
            
            <div className="bg-white rounded-3xl border border-gray-100 p-6 flex gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl border border-emerald-100 shadow-inner">✨</div>
              <div>
                <div className="text-sm font-black text-gray-900 tracking-tight">First AI SEO Update Published</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Just now · Website & GMB Synced</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-[32px] border border-gray-100 p-6 shadow-sm">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-2 leading-none">Google Views</div>
                <div className="text-4xl font-black text-gray-900 leading-none">0<span className="text-xs opacity-20 ml-1">K</span></div>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-4 leading-relaxed">Updates take 24-48h to reflect in GMB stats</p>
              </div>
              <div className="bg-white rounded-[32px] border border-gray-100 p-6 shadow-sm">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-2 leading-none">New Leads</div>
                <div className="text-4xl font-black text-gray-900 leading-none">0</div>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-4 leading-relaxed">Keep posting to trigger your first ranking</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER NAV (Mobile optimized) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-4 flex justify-around items-center md:hidden">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => handleSendUpdate('image')} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xl">📸</span>
          <span className="text-[10px] font-bold">Update</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xl">⚙️</span>
          <span className="text-[10px] font-bold">Settings</span>
        </button>
      </div>
    </>
  )
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
