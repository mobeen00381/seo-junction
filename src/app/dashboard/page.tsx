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
        
        {/* SUCCESS FEEDBACK */}
        {showSuccess && (
          <div className="bg-green-600 text-white p-4 rounded-2xl mb-8 flex items-center justify-between shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <div>
                <div className="font-bold">Your update is live on your website</div>
                <div className="text-xs opacity-90">Google is now indexing your new content.</div>
              </div>
            </div>
            <button onClick={() => setShowSuccess(false)} className="text-white opacity-60 hover:opacity-100">✕</button>
          </div>
        )}

        {/* ACTIVATION BANNER (If no update sent) */}
        {!hasSentUpdate && !isUpdating && (
          <div className="bg-white border-2 border-primary/10 rounded-3xl p-8 text-center mb-10 shadow-sm transition-all duration-300">
            <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📢</div>
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Activate Your Website</h2>
            <p className="text-gray-500 mb-8">Send your first update to start getting more local customers from Google.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSendUpdate('image')}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-primary hover:bg-primary-light transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">📸</span>
                <span className="font-bold text-sm text-gray-900">Upload Image</span>
              </button>
              <button 
                onClick={() => handleSendUpdate('voice')}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-primary hover:bg-primary-light transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">🎙️</span>
                <span className="font-bold text-sm text-gray-900">Record Voice</span>
              </button>
            </div>
          </div>
        )}

        {/* UPDATING STATE */}
        {isUpdating && (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="font-bold text-gray-900 mb-1">Posting Update...</h2>
            <p className="text-sm text-gray-400">Processing your {updateType} and updating your website.</p>
          </div>
        )}

        {/* REINFORCEMENT MESSAGE */}
        {hasSentUpdate && !isUpdating && (
          <div className="bg-primary rounded-3xl p-8 mb-10 text-white relative overflow-hidden shadow-xl shadow-primary/20 transition-all duration-300">
            <div className="relative z-10 text-left">
              <h2 className="text-2xl font-black mb-2 tracking-tight">Keep It Up!</h2>
              <p className="opacity-80 text-sm mb-6">Regular updates from your phone help you get more visibility on Google.</p>
              
              <div className="flex gap-4">
                <button onClick={() => handleSendUpdate('image')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold transition-all">📸 New Image</button>
                <button onClick={() => handleSendUpdate('voice')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold transition-all">🎙️ New Voice</button>
              </div>
            </div>
            <div className="absolute top-0 right-0 text-8xl opacity-10 translate-x-4 -translate-y-4">🚀</div>
          </div>
        )}

        {/* MOBILE UPDATE QR SECTION */}
        <div className="bg-white border border-gray-100 rounded-[32px] p-8 mb-10 shadow-sm relative overflow-hidden group">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 bg-gray-50 rounded-3xl p-4 flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-primary/30 transition-colors">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://seo-junction.vercel.app/post/demo-user')}`} 
                  alt="Mobile Update QR" 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">Update via Phone</h3>
                 <p className="text-sm text-gray-500 mb-6">Scan this QR code with your phone camera to send updates instantly. **No login required.**</p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText('https://seo-junction.vercel.app/post/demo-user');
                        alert('Link copied to clipboard!');
                      }}
                      className="text-xs font-bold text-primary bg-primary-light px-4 py-2 rounded-full uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                     >
                      Copy Direct Link
                    </button>
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-2 rounded-full uppercase tracking-widest flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                       Active Now
                    </span>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-6xl">📱</div>
        </div>

        {/* STATS / FEED (Only visible after activation) */}
        {hasSentUpdate && (
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <h3 className="font-bold text-gray-900">Recent Activity</h3>
              <div className="text-xs font-bold text-blue-600">Total Updates: 1</div>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">✅</div>
              <div>
                <div className="text-sm font-bold text-gray-900">First Update Sent</div>
                <div className="text-xs text-gray-400">Just now · Website & GMB Updated</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Google Views</div>
                <div className="text-xl font-black text-gray-900" style={{fontFamily:'Syne,sans-serif'}}>0</div>
                <div className="text-[10px] text-gray-400 font-medium">Updates take 24-48h to reflect in stats</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">New Leads</div>
                <div className="text-xl font-black text-gray-900" style={{fontFamily:'Syne,sans-serif'}}>0</div>
                <div className="text-[10px] text-gray-400 font-medium">Keep posting to get your first call</div>
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
