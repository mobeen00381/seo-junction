'use client'
import { useState, Suspense } from 'react'
import DashboardSidebar from '@/components/DashboardSidebar'

const MOCK_BUSINESSES = [
  { id: 1, name: "Elite Plumbing Pro", city: "Chicago", industry: "Plumbing", status: "Connected", updates: 42, score: 94, lastUpdate: "2h ago" },
  { id: 2, name: "Sunshine Dental", city: "Miami", industry: "Dental", status: "Pending", updates: 18, score: 88, lastUpdate: "5h ago" },
  { id: 3, name: "Sparky Electrical", city: "Austin", industry: "Electrical", status: "Connected", updates: 31, score: 91, lastUpdate: "1d ago" },
  { id: 4, name: "Clean Sweep Co", city: "Denver", industry: "Cleaning", status: "Connected", updates: 55, score: 96, lastUpdate: "30m ago" },
  { id: 5, name: "Rooter & Drain", city: "Seattle", industry: "Plumbing", status: "Error", updates: 12, score: 72, lastUpdate: "3d ago" },
  { id: 6, name: "Bright Smiles", city: "Phoenix", industry: "Dental", status: "Connected", updates: 24, score: 89, lastUpdate: "6h ago" },
]

const MOCK_FEED = [
  { id: 1, business: "Elite Plumbing Pro", action: "GMB Sync Success", type: "Image", time: "2h ago" },
  { id: 2, business: "Clean Sweep Co", action: "AI Article Published", type: "Text", time: "30m ago" },
  { id: 3, business: "Sunshine Dental", action: "Voice Note Processed", type: "Voice", time: "5h ago" },
  { id: 4, business: "Sparky Electrical", action: "AEO Optimization", type: "System", time: "1d ago" },
]

function AdminContent() {
  const [currentView, setCurrentView] = useState('admin_main')
  const [timeframe, setTimeframe] = useState('30d')

  const stats = {
    totalBusinesses: "156",
    totalViews: "284K",
    totalCalls: "12,420",
    totalUpdates: "1,420"
  }

  const renderAdminMain = () => (
    <div className="animate-fade-in space-y-12">
      {/* GLOBAL STATS GRID */}
      <section>
        <div className="flex justify-between items-end mb-8">
           <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Global Network Stats</h2>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Aggregate performance across all users</p>
           </div>
           <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
            {['24h', '7d', '30d', '1y', 'all'].map((t) => (
              <button 
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${timeframe === t ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {t === 'all' ? 'All Time' : t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Businesses</div>
            <div className="text-4xl font-black text-slate-900 leading-none mb-4">{stats.totalBusinesses}</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">+12 New this week</div>
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-6xl pointer-events-none group-hover:scale-110 transition-transform">🏢</div>
          </div>

          <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Global Profile Views</div>
            <div className="text-4xl font-black text-slate-900 leading-none mb-4">{stats.totalViews}</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">+18% growth</div>
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-6xl pointer-events-none group-hover:scale-110 transition-transform">👀</div>
          </div>

          <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Organic Reach Calls</div>
            <div className="text-4xl font-black text-slate-900 leading-none mb-4">{stats.totalCalls}</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">+22% growth</div>
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-6xl pointer-events-none group-hover:scale-110 transition-transform">📞</div>
          </div>

          <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden relative">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">AI Updates Sent</div>
            <div className="text-4xl font-black text-slate-900 leading-none mb-4">{stats.totalUpdates}</div>
            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">AEO/GEO Optimized</div>
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-6xl pointer-events-none group-hover:scale-110 transition-transform">🎙️</div>
          </div>
        </div>
      </section>

      {/* USER MANAGEMENT & ACTIVITY FEED */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Active Businesses</h3>
              <div className="text-[10px] font-black text-primary uppercase tracking-[2px]">Real-time Status Monitoring</div>
            </div>
            
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50/50 border-b border-slate-100">
                        <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Business</th>
                        <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">City/Industry</th>
                        <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Update</th>
                        <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">GMB Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {MOCK_BUSINESSES.map(biz => (
                       <tr key={biz.id} className="hover:bg-slate-50/50 transition-colors group">
                          <td className="px-8 py-6">
                             <div className="font-black text-slate-900">{biz.name}</div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: SEO-00{biz.id}</div>
                          </td>
                          <td className="px-8 py-6">
                             <div className="text-sm font-bold text-slate-900">{biz.city}</div>
                             <div className="text-[10px] font-black text-primary uppercase tracking-[2px]">{biz.industry}</div>
                          </td>
                          <td className="px-8 py-6">
                             <div className="text-sm font-bold text-slate-500">{biz.lastUpdate}</div>
                             <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[2px]">{biz.updates} Total</div>
                          </td>
                          <td className="px-8 py-6">
                             <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                                biz.status === 'Connected' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                biz.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                'bg-red-50 text-red-600 border-red-100'
                             }`}>
                                {biz.status}
                             </span>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* ACTIVITY FEED */}
         <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-4">Global Signal Feed</h3>
            <div className="bg-slate-950 rounded-[40px] p-8 text-white h-full shadow-2xl relative overflow-hidden">
               <div className="relative z-10 space-y-8">
                  {MOCK_FEED.map(item => (
                    <div key={item.id} className="flex gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          {item.type === 'Image' ? '📸' : item.type === 'Voice' ? '🎙️' : '🗞️'}
                       </div>
                       <div className="flex-1">
                          <div className="text-xs font-black tracking-tight">{item.business}</div>
                          <div className="text-[10px] font-black text-primary uppercase tracking-widest">{item.action}</div>
                          <div className="text-[9px] opacity-40 font-bold uppercase tracking-widest mt-1">{item.time}</div>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 rotate-12 -translate-y-4 translate-x-4">📡</div>
            </div>
         </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      <DashboardSidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 bg-white lg:bg-slate-50/30 overflow-y-auto">
        <header className="px-10 py-6 flex justify-between items-center bg-white border-b border-slate-100 sticky top-0 z-40">
           <div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[4px]">System Administration Overview</h2>
           </div>

           <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col text-right">
                 <div className="text-sm font-black text-slate-900">Mobeen Admin</div>
                 <div className="text-[9px] font-black text-primary uppercase tracking-widest">Superuser Mode</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white shadow-sm ring-1 ring-slate-100"></div>
           </div>
        </header>

        <div className="p-6 md:p-12 max-w-[1400px] mx-auto">
          {renderAdminMain()}
        </div>
      </main>
    </div>
  )
}

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
        </div>
      }>
        <AdminContent />
      </Suspense>
    </div>
  )
}
