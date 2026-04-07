'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AdminSidebarItemProps {
  icon: string
  label: string
  active?: boolean
  onClick?: () => void
}

const AdminSidebarItem = ({ icon, label, active, onClick }: AdminSidebarItemProps) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-primary text-white shadow-xl shadow-primary/30 border border-primary/20 scale-[1.02]' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
)

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-[300px] bg-slate-950 border-r border-white/5 h-screen sticky top-0 p-8 shadow-2xl">
      <div className="flex items-center gap-4 mb-14 px-2">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20">S</div>
        <div>
           <span className="font-black text-xl tracking-tighter text-white block leading-none">Neerzy</span>
           <span className="text-[9px] font-black text-primary uppercase tracking-[3px] mt-1 block">Superuser Panel</span>
        </div>
      </div>

      <nav className="flex-1 space-y-3">
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[4px] mb-4 px-4">Network Ops</div>
        <AdminSidebarItem 
          icon="🛡️" 
          label="Mission Control" 
          active={pathname === '/admin'} 
          onClick={() => window.location.href = '/admin'} 
        />
        <AdminSidebarItem 
          icon="👥" 
          label="User Accounts" 
          active={pathname === '/admin/users'} 
          onClick={() => {}} 
        />
        <AdminSidebarItem 
          icon="📡" 
          label="Neural Status" 
          active={pathname === '/admin/health'} 
          onClick={() => {}} 
        />
        
        <div className="pt-10 pb-4 text-[10px] font-black text-slate-500 uppercase tracking-[4px] px-4 border-b border-white/5 mb-4 opacity-50">Growth Metrics</div>
        <AdminSidebarItem 
          icon="📈" 
          label="Conversion Maps" 
          active={pathname === '/admin/analytics'} 
          onClick={() => {}} 
        />
        <AdminSidebarItem 
          icon="🏗️" 
          label="Batch Updates" 
          active={pathname === '/admin/batch'} 
          onClick={() => {}} 
        />
        <AdminSidebarItem 
          icon="⚙️" 
          label="Global Settings" 
          active={pathname === '/admin/settings'} 
          onClick={() => {}} 
        />
      </nav>

      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="bg-white/5 rounded-[24px] p-6 mb-6">
           <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">System Health</div>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-300">Operational</span>
           </div>
        </div>
        <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
          <span className="text-xl group-hover:scale-110 transition-transform">🚪</span>
          <span className="font-bold text-sm tracking-tight text-red-500/80">Exit Admin Mode</span>
        </button>
      </div>
    </aside>
  )
}
