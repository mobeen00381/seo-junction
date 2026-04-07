'use client'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import AdminSidebar from '@/components/AdminSidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip auth check for the login page itself
    if (pathname === '/admin/login') {
      setIsAuthorized(true)
      return
    }

    const auth = localStorage.getItem('seo_admin_auth')
    if (auth === 'true') {
      setIsAuthorized(true)
    } else {
      setIsAuthorized(false)
      router.push('/admin/login')
    }
  }, [pathname, router])

  // Show nothing while checking auth to prevent UI flicker
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
      </div>
    )
  }

  // Login page layout (no sidebar)
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white selection:bg-primary/20">
      <AdminSidebar />
      <main className="flex-1 bg-slate-900/50 overflow-y-auto relative">
        <header className="px-10 py-8 flex justify-between items-center bg-slate-950/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
           <div>
              <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[4px]">System Administration Grid</h2>
              <h1 className="text-xl font-black tracking-tight text-white mt-1">Neerzy Mission Control</h1>
           </div>

           <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col text-right">
                 <div className="text-sm font-black text-white">Network Admin 🛡️</div>
                 <div className="text-[9px] font-black text-primary uppercase tracking-widest mt-1">Status: Operational</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-2xl glass transition-transform hover:scale-105 cursor-pointer">👤</div>
           </div>
        </header>

        <div className="p-8 md:p-14 max-w-[1600px] mx-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="w-16 h-16 border-4 border-primary/10 border-t-primary rounded-full animate-spin shadow-2xl shadow-primary/20"></div>
            </div>
          }>
            {children}
          </Suspense>
        </div>

        {/* Neural Grid Overlay (Optional Decor) */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(21,101,192,0.1),transparent)] transition-opacity"></div>
      </main>
    </div>
  )
}
