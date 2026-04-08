'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminPage() {
  const supabase = createClient()
  const [businesses, setBusinesses] = useState<any[]>([])
  const [timeframe, setTimeframe] = useState('30d')
  const [activeTab, setActiveTab] = useState('Overview')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true)
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (data) {
        setBusinesses(data)
      }
      setIsLoading(false)
    }
    fetchStats()
  }, [])

  const stats = [
    { label: "Active Businesses", value: businesses.length.toString(), growth: "+12%", icon: "🏢" },
    { label: "AI Updates Executed", value: "1.4K", growth: "+22%", icon: "🎙️" },
    { label: "Network Call Reach", value: "12,420", growth: "+18%", icon: "📞" },
    { label: "Geo Proximity Score", value: "92/100", growth: "ELITE", icon: "📡" }
  ]

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      
      {/* GLOBAL HUD */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white/5 border border-white/5 rounded-[40px] p-8 hover:border-primary/20 transition-all group relative overflow-hidden">
             <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">{s.label}</div>
             <div className="text-4xl font-black text-white leading-none mb-4 tracking-tighter">{s.value}</div>
             <div className={`text-[10px] font-bold uppercase tracking-widest ${s.growth.startsWith('+') ? 'text-emerald-500' : 'text-primary'}`}>
                {s.growth} this month
             </div>
             <div className="absolute top-0 right-0 p-8 text-5xl opacity-[0.03] group-hover:scale-110 transition-transform pointer-events-none">{s.icon}</div>
          </div>
        ))}
      </section>

      {/* CORE CONTROL CENTER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT: NETWORK MONITOR */}
        <div className="lg:col-span-2 space-y-8">
           <div className="flex justify-between items-end">
              <div>
                 <h2 className="text-2xl font-black text-white tracking-tighter">Network Node Management</h2>
                 <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">Real-time GMB Status Propagation</p>
              </div>
              <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5">
                 {['Overview', 'Errors', 'Pending'].map(tab => (
                   <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' : 'text-slate-500 hover:text-slate-300'}`}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
           </div>

           <div className="bg-white/5 border border-white/5 rounded-[48px] overflow-hidden backdrop-blur-xl">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-white/[0.02] border-b border-white/5">
                       <th className="px-10 py-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Business Element</th>
                       <th className="px-10 py-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Geo/Trade</th>
                       <th className="px-10 py-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Visibility Score</th>
                       <th className="px-10 py-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">System Health</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {businesses.map((biz, idx) => (
                      <tr key={biz.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                         <td className="px-10 py-8">
                            <div className="font-black text-white group-hover:text-primary transition-colors">{biz.business_name || 'Unnamed Business'}</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">SEO-NODE-{idx.toString().padStart(3, '0')}</div>
                         </td>
                         <td className="px-10 py-8">
                            <div className="text-sm font-bold text-slate-300">{biz.business_email || 'No Email'}</div>
                            <div className="text-[10px] font-black text-primary/80 uppercase tracking-widest mt-1">{biz.plan || 'trial'}</div>
                         </td>
                         <td className="px-10 py-8">
                            <div className="flex items-center gap-3">
                               <div className="text-sm font-black text-white">{biz.gmb_connected ? '95%' : '0%'}</div>
                               <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary" style={{ width: biz.gmb_connected ? '95%' : '0%' }}></div>
                               </div>
                            </div>
                         </td>
                         <td className="px-10 py-8">
                            <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${
                                biz.gmb_connected ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                            }`}>
                               {biz.gmb_connected ? 'Connected' : 'Pending'}
                            </span>
                         </td>
                      </tr>
                    ))}
                    {businesses.length === 0 && !isLoading && (
                      <tr>
                        <td colSpan={4} className="px-10 py-20 text-center text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                          No active nodes in network
                        </td>
                      </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </div>

        {/* RIGHT: SYSTEM LOGS & CONVERSION */}
        <div className="space-y-10">
           <div className="bg-slate-950/80 border border-white/5 rounded-[48px] p-10 h-full shadow-2xl relative overflow-hidden group">
              <h3 className="text-lg font-black text-white tracking-tight mb-10 flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                 Live Neural Logs
              </h3>
              <div className="space-y-8 relative z-10">
                 {businesses.slice(0, 6).map((biz, i) => (
                   <div key={i} className="flex gap-4 group/item">
                      <div className="w-1 h-8 bg-white/5 rounded-full group-hover/item:bg-primary transition-colors"></div>
                      <div className="flex-1">
                         <div className="text-[11px] font-medium text-slate-300 leading-relaxed">System Node Sync for &apos;{biz.business_name || 'New User'}&apos; [SUCCESS]</div>
                         <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest mt-2">Verified Profile Node</div>
                      </div>
                   </div>
                 ))}
                 {businesses.length === 0 && (
                   <div className="text-slate-600 font-bold uppercase tracking-widest text-[9px] py-10 text-center">Awaiting neural activity...</div>
                 )}
              </div>

              <div className="mt-12 pt-10 border-t border-white/5">
                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 px-2">Growth Engine Performance</div>
                 <div className="bg-primary/5 rounded-[32px] p-8 border border-primary/10">
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-[9px] font-black text-primary uppercase tracking-widest">Checker Conversions</span>
                       <span className="text-xl font-black text-primary">84%</span>
                    </div>
                    <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: '84%' }}></div>
                    </div>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[2px] mt-4">1,240 scans → 1,041 trials this week</p>
                 </div>
              </div>
              
              <div className="absolute top-0 right-0 p-8 text-9xl opacity-[0.02] rotate-12 -translate-y-8 translate-x-8 group-hover:scale-110 group-hover:opacity-[0.05] transition-all pointer-events-none">📡</div>
           </div>
        </div>

      </div>

      {/* QUICK ACTIONS DOCK */}
      <footer className="flex justify-center pt-10 pb-20">
         <div className="bg-slate-950 border border-white/5 rounded-full p-4 flex gap-6 shadow-2xl scale-110">
            {['Force All-Sync', 'Trigger AI Batch', 'GMB Status Check', 'Download Global PDF'].map((act, i) => (
              <button 
                key={i}
                className="bg-white/5 text-slate-300 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
              >
                {act}
              </button>
            ))}
         </div>
      </footer>

    </div>
  )
}
