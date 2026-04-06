'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  icon: string
  label: string
  active?: boolean
  onClick?: () => void
}

const SidebarItem = ({ icon, label, active, onClick }: SidebarItemProps) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
)

interface DashboardSidebarProps {
  currentView: string
  onViewChange: (view: string) => void
}

export default function DashboardSidebar({ currentView, onViewChange }: DashboardSidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-[280px] bg-white border-r border-slate-100 h-screen sticky top-0 p-6">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">S</div>
        <span className="font-black text-xl tracking-tighter text-slate-900">SEO Junction</span>
      </div>

      <nav className="flex-1 space-y-2">
        <SidebarItem 
          icon="📊" 
          label="My Business" 
          active={currentView === 'main'} 
          onClick={() => {
            onViewChange('main');
            window.location.href = '/dashboard';
          }} 
        />
        <SidebarItem 
          icon="👤" 
          label="Profile" 
          active={currentView === 'profile'} 
          onClick={() => onViewChange('profile')} 
        />
        <SidebarItem 
          icon="🌐" 
          label="My Domains" 
          active={currentView === 'domains'} 
          onClick={() => onViewChange('domains')} 
        />
        <SidebarItem 
          icon="⚙️" 
          label="Settings" 
          active={currentView === 'settings'} 
          onClick={() => onViewChange('settings')} 
        />
        <SidebarItem 
          icon="💳" 
          label="Subscription" 
          active={currentView === 'subscription'} 
          onClick={() => onViewChange('subscription')} 
        />
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-50">
        <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all group">
          <span className="text-xl group-hover:scale-110 transition-transform">🚪</span>
          <span className="font-bold text-sm tracking-tight">Log Out</span>
        </button>
      </div>
    </aside>
  )
}
