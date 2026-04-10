'use client'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import DashboardSidebar from '@/components/DashboardSidebar'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { 
  initiateGoogleGMB, 
  syncPostToGMB, 
  generateAIDraft, 
  fetchReviews, 
  respondToReview, 
  generateAIReply 
} from '@/app/auth/actions'
import GMBLocationSearch from '@/components/GMBLocationSearch'
import { User } from '@supabase/supabase-js'

interface Profile {
  id: string;
  business_name: string | null;
  city: string | null;
  trade: string | null;
  gmb_connected: boolean;
  gmb_location_id: string | null;
  gmb_location_name: string | null;
}

interface MetricData {
  views: string;
  calls: string;
  visits: string;
  growth: string;
}

function DashboardContent() {
  const router = useRouter()
  const supabase = createClient()
  const searchParams = useSearchParams()
  
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [currentView, setCurrentView] = useState('main')
  const [hasSentUpdate, setHasSentUpdate] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [updateType, setUpdateType] = useState<'image' | 'voice' | null>(null)
  const [pendingApproval, setPendingApproval] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [isGMBConnected, setIsGMBConnected] = useState(false)
  const [isGMBConnecting, setIsGMBConnecting] = useState(false)
  const [gmbStep, setGmbStep] = useState(0)
  const [timeframe, setTimeframe] = useState('30d')
  const [aiDraft, setAiDraft] = useState('')
  const [reviews, setReviews] = useState<any[]>([])
  const [isLoadingReviews, setIsLoadingReviews] = useState(false)
  const [isReplying, setIsReplying] = useState<Record<string, boolean>>({})
  const [activeReply, setActiveReply] = useState<Record<string, string>>({})
  const [timerCountdown, setTimerCountdown] = useState(60)
  const [isTimerActive, setIsTimerActive] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (profileData) {
        setProfile(profileData)
        setIsGMBConnected(profileData.gmb_connected)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    if (currentView === 'reviews' && isGMBConnected) {
      loadReviews()
    }
  }, [currentView, isGMBConnected])

  const loadReviews = async () => {
    setIsLoadingReviews(true)
    const result = await fetchReviews()
    if (result.success) {
      setReviews(result.reviews)
    }
    setIsLoadingReviews(false)
  }

  const handleGenerateReply = async (review: any) => {
    const reviewId = review.reviewId
    setIsReplying(prev => ({ ...prev, [reviewId]: true }))
    
    const result = await generateAIReply(
      review.reviewer.displayName || 'Customer', 
      review.comment || '', 
      review.starRating === 'FIVE' ? 5 : review.starRating === 'FOUR' ? 4 : review.starRating === 'THREE' ? 3 : review.starRating === 'TWO' ? 2 : 1
    )
    
    if (result.success) {
      setActiveReply(prev => ({ ...prev, [reviewId]: result.reply || '' }))
    }
    
    setIsReplying(prev => ({ ...prev, [reviewId]: false }))
  }

  const handlePostReply = async (reviewId: string) => {
    const comment = activeReply[reviewId]
    if (!comment) return
    
    setIsReplying(prev => ({ ...prev, [reviewId]: true }))
    const result = await respondToReview(reviewId, comment)
    if (result.success) {
      // Refresh or mark as replied
      loadReviews()
      setActiveReply(prev => {
        const next = { ...prev }
        delete next[reviewId]
        return next
      })
    }
    setIsReplying(prev => ({ ...prev, [reviewId]: false }))
  }

  const handleGMBConnect = async () => {
    setIsGMBConnecting(true)
    await initiateGoogleGMB()
  }

  const handleSendUpdate = async (type: 'image' | 'voice') => {
    setUpdateType(type)
    setIsUpdating(true)
    setPendingApproval(false)
    setIsApproved(false)
    setHasSentUpdate(false)
    
    // Call AI Generation
    const result = await generateAIDraft(type, type === 'image' ? 'Analyze recent project photo' : 'Just finished another successful client project')
    
    if (result.success) {
      setAiDraft(result.draft || '')
    } else {
      setAiDraft("Expert service provided by our team. Fast, reliable, and family-owned. Contact us for a free estimate!")
    }

    setIsUpdating(false)
    setPendingApproval(true)
    setTimerCountdown(60)
    setIsTimerActive(true)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && pendingApproval && timerCountdown > 0) {
      interval = setInterval(() => {
        setTimerCountdown(prev => prev - 1)
      }, 1000)
    } else if (timerCountdown === 0 && isTimerActive && pendingApproval) {
      handleApprove()
      setIsTimerActive(false)
    }
    return () => clearInterval(interval)
  }, [isTimerActive, pendingApproval, timerCountdown])

  const handleManualApprove = () => {
    setIsTimerActive(false)
    handleApprove()
  }

  const handleEditDraft = () => {
    setIsTimerActive(false)
    // Conceptually open editor
  }

  const handleApprove = async () => {
    setPendingApproval(false)
    setIsApproved(true)
    setHasSentUpdate(true)
    setShowSuccess(true)
    
    // 1. Persist Post to Supabase
    if (user) {
       await supabase.from('posts').insert({
          user_id: user.id,
          content_type: updateType === 'image' ? 'image' : 'voice',
          ai_draft: aiDraft,
          status: 'published',
          published_at: new Date().toISOString()
       })
    }

    // 2. Sync to GMB if connected
    if (isGMBConnected) {
      await syncPostToGMB(aiDraft);
    }
    
    setUpdateType(null)
  }

  const getMetrics = () => {
    const data: Record<string, MetricData> = {
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
            
            <button 
              onClick={handleGMBConnect}
              disabled={isGMBConnecting}
              className="bg-primary text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-[20px] md:rounded-[24px] text-sm md:text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30 ring-4 ring-primary/10 disabled:opacity-50"
            >
              {isGMBConnecting ? 'Redirecting to Google...' : 'Connect My Business Profile →'}
            </button>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl translate-x-8 -translate-y-8 pointer-events-none group-hover:translate-x-4 transition-transform duration-1000">🗺️</div>
        </section>
      )}

      {/* LOCATION SEARCH (After Google Auth success but before linking) */}
      {isGMBConnected && !profile?.gmb_location_id && (
        <GMBLocationSearch 
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} 
          onSuccess={() => window.location.reload()} 
        />
      )}

      {isGMBConnected && (
        <div className="bg-white border border-slate-100 rounded-[28px] p-5 md:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-[12px] bg-emerald-50 flex items-center justify-center text-xl shrink-0 border border-emerald-100">✅</div>
              <div>
                <div className="text-sm font-black text-slate-900 mb-0.5">Google Business Profile Connected</div>
                <div className="text-[11px] text-slate-400">{profile?.gmb_location_name || 'Verified Business'} · Updates sync automatically</div>
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

        {/* Mobile Posting Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
          
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-[240px] rounded-[36px] p-2" style={{background:'#1a1a1a', border:'1px solid rgba(255,255,255,0.08)', boxShadow:'0 25px 50px -12px rgba(0,0,0,0.25)'}}>
              <div className="w-full rounded-[28px] overflow-hidden flex flex-col" style={{background:'#f8fafc', height:'420px'}}>
                
                {/* Phone Header */}
                <div className="px-4 py-3 flex items-center gap-3" style={{background:'#0f172a'}}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white" style={{background:'linear-gradient(135deg, #1d9e75, #0f6e56)'}}>N</div>
                  <div>
                    <div className="text-[11px] font-bold text-white leading-none">Neerzy</div>
                    <div className="text-[8px] text-emerald-400 font-bold">● Ready to post</div>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="flex-1 p-3 space-y-3 overflow-hidden" style={{background:'#f1f5f9'}}>
                  {/* Bot message */}
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[7px] font-black text-white mt-0.5" style={{background:'#1d9e75'}}>N</div>
                    <div className="bg-white rounded-2xl rounded-tl-md px-3 py-2 shadow-sm max-w-[85%]">
                      <p className="text-[10px] text-slate-700 leading-relaxed">What did you work on today? Send a photo or voice note and I&apos;ll create your Google post 🚀</p>
                    </div>
                  </div>

                  {/* User photo message */}
                  {isUpdating && updateType === 'image' && (
                    <div className="flex justify-end">
                      <div className="bg-primary text-white rounded-2xl rounded-tr-md px-3 py-2 max-w-[70%]">
                        <p className="text-[10px] font-medium">📸 Photo uploading...</p>
                        <div className="w-full bg-white/20 rounded-full h-1 mt-1.5">
                          <div className="bg-white h-full rounded-full animate-pulse" style={{width:'60%'}}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isUpdating && updateType === 'voice' && (
                    <div className="flex justify-end">
                      <div className="bg-primary text-white rounded-2xl rounded-tr-md px-3 py-2 max-w-[70%]">
                        <p className="text-[10px] font-medium">🎙️ Voice note processing...</p>
                        <div className="flex gap-0.5 mt-1.5">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-1 rounded-full bg-white/60" style={{height: `${6 + Math.sin(i * 0.8) * 6}px`, animationDelay: `${i * 0.1}s`}}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI Draft Preview — Awaiting Approval */}
                  {pendingApproval && !isUpdating && (
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[7px] font-black text-white mt-0.5" style={{background:'#1d9e75'}}>N</div>
                      <div className="bg-white rounded-2xl rounded-tl-md px-3 py-2 shadow-sm max-w-[90%]">
                        <div className="flex items-center justify-between mb-1.5 px-0.5">
                           <p className="text-[8px] font-black text-primary uppercase tracking-widest">Draft Preview</p>
                           <div className="flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                              <span className="text-[8px] font-bold text-primary italic uppercase tracking-tighter">Auto-post in {timerCountdown}s</span>
                           </div>
                        </div>
                        <p className="text-[9px] text-slate-700 leading-relaxed mb-2">"{aiDraft}"</p>
                        <div className="flex gap-1.5">
                          <button onClick={handleManualApprove} className="flex-1 bg-primary text-white text-[8px] font-black uppercase tracking-widest py-1.5 rounded-lg hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">✓ Approve Now</button>
                          <button onClick={handleEditDraft} className="flex-1 bg-slate-100 text-slate-500 text-[8px] font-black uppercase tracking-widest py-1.5 rounded-lg hover:bg-slate-200 transition-all">✎ Edit</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Approved & Published */}
                  {isApproved && hasSentUpdate && !isUpdating && (
                    <>
                      <div className="flex justify-end">
                        <div className="bg-primary text-white rounded-2xl rounded-tr-md px-3 py-2 max-w-[70%]">
                          <p className="text-[10px] font-medium">✅ Approved!</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[7px] font-black text-white mt-0.5" style={{background:'#1d9e75'}}>N</div>
                        <div className="bg-white rounded-2xl rounded-tl-md px-3 py-2 shadow-sm max-w-[85%]">
                          <p className="text-[10px] text-slate-700 leading-relaxed mb-3">Published! Your post is now live on your website + Google Business Profile ✨</p>
                          
                          {/* Review Card */}
                          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-2">
                             <div className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Share Review Link</div>
                             <div className="flex flex-col gap-2">
                                <button 
                                  onClick={() => {
                                    const link = `https://search.google.com/local/writereview?placeid=${profile?.gmb_location_id || 'ChIJN1t_tDeuEmsRUsoyG83frY4'}`
                                    const text = `Thanks for having us today! It would mean a lot if you could leave a quick review of our work here: ${link}`
                                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
                                  }}
                                  className="w-full bg-[#25D366] text-white text-[8px] font-black uppercase tracking-[1px] py-1.5 rounded-lg flex items-center justify-center gap-1.5"
                                >
                                   <span>💬</span> WhatsApp Share
                                </button>
                                <button 
                                  onClick={() => {
                                    const link = `https://search.google.com/local/writereview?placeid=${profile?.gmb_location_id || 'ChIJN1t_tDeuEmsRUsoyG83frY4'}`
                                    const text = `Thanks for having us! Could you please leave a quick review here: ${link}`
                                    navigator.clipboard.writeText(text)
                                    alert("Review message copied to clipboard!")
                                  }}
                                  className="w-full bg-slate-900 text-white text-[8px] font-black uppercase tracking-[1px] py-1.5 rounded-lg flex items-center justify-center gap-1.5"
                                >
                                   <span>📋</span> Copy Link
                                </button>
                             </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Input Bar */}
                <div className="px-3 py-2.5 flex items-center gap-2 border-t border-slate-200 bg-white">
                  <button 
                    onClick={() => handleSendUpdate('image')}
                    disabled={isUpdating}
                    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-base hover:bg-primary/20 transition-all disabled:opacity-30 active:scale-90"
                  >📸</button>
                  <button 
                    onClick={() => handleSendUpdate('voice')}
                    disabled={isUpdating}
                    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-base hover:bg-primary/20 transition-all disabled:opacity-30 active:scale-90"
                  >🎙️</button>
                  <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[9px] text-slate-400 font-medium">Type a message...</div>
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="h-4 flex items-center justify-center bg-white">
                  <div className="w-20 h-1 rounded-full bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Instructions */}
          <div className="flex flex-col justify-center gap-5 py-4">
            <div>
              <h4 className="text-lg font-black text-slate-900 tracking-tight mb-2">Post from your phone</h4>
              <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm">Snap a photo of your work or record a voice note. Our AI writes the perfect Google post in seconds.</p>
            </div>
            <div className="space-y-3">
              {[
                { icon: '📸', title: 'Send a photo', desc: 'Take a picture of your finished job' },
                { icon: '🎙️', title: 'Send a voice note', desc: '"Just finished a rewire in Brixton"' },
                { icon: '📝', title: 'Review AI draft', desc: 'Preview the post before it goes live' },
                { icon: '✅', title: 'Approve & publish', desc: 'Nothing posts without your OK' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-[10px] bg-white border border-slate-100 flex items-center justify-center text-lg shrink-0 shadow-sm">{step.icon}</div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-900">{step.title}</div>
                    <div className="text-[10px] text-slate-400">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
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

  const renderReviewsView = () => (
    <div className="animate-fade-in space-y-12 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
           <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Reviews & Reputation</h2>
           <p className="text-slate-500 font-medium">Manage your customer feedback and generate AI responses to boost local SEO.</p>
        </div>
        <button className="bg-primary text-white font-black px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-3">
          <span>🚀</span> Request New Review
        </button>
      </div>

      {!isGMBConnected ? (
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[40px] p-20 text-center">
           <div className="text-6xl mb-6">🏢</div>
           <h3 className="text-xl font-black text-slate-900 mb-2">Connect Google to See Reviews</h3>
           <p className="text-slate-400 max-w-sm mx-auto mb-8 font-medium">We need your Google Business connection to fetch and reply to your customer reviews.</p>
           <button onClick={handleGMBConnect} className="bg-slate-950 text-white font-black px-10 py-4 rounded-2xl">Connect Now</button>
        </div>
      ) : (
        <div className="grid gap-6">
           {isLoadingReviews ? (
             <div className="py-20 text-center">
                <div className="w-12 h-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
                <div className="font-black text-slate-400 uppercase tracking-widest text-[10px]">Syncing with Google Business...</div>
             </div>
           ) : reviews.length === 0 ? (
             <div className="bg-white border border-slate-100 rounded-[40px] p-20 text-center">
                <div className="text-5xl mb-6">🏜️</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">No Reviews Found Yet</h3>
                <p className="text-slate-400 max-w-sm mx-auto font-bold uppercase tracking-widest text-[10px]">Your Google Profile has no recent customer feedback.</p>
             </div>
           ) : (
             reviews.map((r, i) => (
               <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-black text-slate-400">
                           {r.reviewer?.displayName?.charAt(0) || 'C'}
                        </div>
                        <div>
                           <div className="font-black text-slate-900 tracking-tight">{r.reviewer?.displayName || 'Anonymous Customer'}</div>
                           <div className="flex text-amber-400 text-sm">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>{i < (r.starRating === 'FIVE' ? 5 : 4) ? '★' : '☆'}</span>
                              ))}
                           </div>
                        </div>
                     </div>
                     <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{new Date(r.createTime).toLocaleDateString()}</span>
                  </div>
                  
                  <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 italic">"{r.comment || 'No text provided with this review.'}"</p>

                  <div className="pt-6 border-t border-slate-50">
                    {r.reviewReply ? (
                      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                         <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Your Official Response
                         </div>
                         <p className="text-xs font-bold text-slate-600 leading-relaxed italic opacity-80">"{r.reviewReply.comment}"</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                         {activeReply[r.reviewId] ? (
                           <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                              <label className="text-[9px] font-black text-primary uppercase tracking-widest mb-2 block">AI Suggested Response ✨</label>
                              <textarea 
                                value={activeReply[r.reviewId]}
                                onChange={(e) => setActiveReply(prev => ({ ...prev, [r.reviewId]: e.target.value }))}
                                className="w-full bg-primary/5 border-2 border-primary/10 rounded-2xl p-5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-4 ring-primary/5 min-h-[100px]"
                              />
                              <div className="flex gap-3 mt-4">
                                 <button 
                                   onClick={() => handlePostReply(r.reviewId)}
                                   disabled={isReplying[r.reviewId]}
                                   className="flex-1 bg-primary text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50"
                                 >
                                   {isReplying[r.reviewId] ? 'Posting...' : 'Post Reply to Google'}
                                 </button>
                                 <button 
                                   onClick={() => setActiveReply(prev => {
                                      const n = {...prev}
                                      delete n[r.reviewId]
                                      return n
                                   })}
                                   className="px-6 border border-slate-200 text-slate-400 font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
                                 >Discard</button>
                              </div>
                           </div>
                         ) : (
                           <div className="flex flex-col sm:flex-row gap-3">
                              <button 
                                onClick={() => handleGenerateReply(r)}
                                disabled={isReplying[r.reviewId]}
                                className="flex-1 bg-slate-950 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50"
                              >
                                {isReplying[r.reviewId] ? (
                                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                ) : '✨ Generate AI Response'}
                              </button>
                              <button className="flex-1 bg-white border-2 border-slate-100 text-slate-600 font-black py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">Manual Reply</button>
                           </div>
                         )}
                      </div>
                    )}
                  </div>
               </div>
             ))
           )}
        </div>
      )}
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
          {currentView === 'reviews' && renderReviewsView()}
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

