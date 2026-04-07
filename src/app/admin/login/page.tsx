'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [key, setKey] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Hardcoded Access Key for Demo
    if (key === 'junction2026') {
      localStorage.setItem('seo_admin_auth', 'true')
      setTimeout(() => {
        router.push('/admin')
      }, 1500)
    } else {
      setTimeout(() => {
        setError(true)
        setLoading(false)
        setTimeout(() => setError(false), 2000)
      }, 800)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden selection:bg-primary/30">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(21,101,192,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* LOGO AREA */}
        <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-3 group mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-2xl shadow-2xl transition-transform group-hover:scale-105">S</div>
                <div className="text-left">
                    <div className="text-2xl font-black tracking-tighter text-white">Neerzy</div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[4px]">Mission Control</div>
                </div>
            </Link>
            <h1 className="text-xl font-black text-white tracking-tight">System Node Access 🛡️</h1>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2 leading-loose">UNAUTHORIZED ACCESS IS STRICTLY MONITORED</p>
        </div>

        {/* LOGIN FORM */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/5 p-10 rounded-[48px] shadow-4xl relative group">
            <div className={`absolute inset-0 bg-red-500/5 rounded-[48px] transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <form onSubmit={handleLogin} className="space-y-8 relative z-10">
                <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 px-2">Access Key Override</label>
                    <input 
                        type="password" 
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder="••••••••••••"
                        className={`w-full bg-white/5 border-2 ${error ? 'border-red-500/50' : 'border-white/5 focus:border-primary/50'} rounded-3xl p-6 text-xl font-black text-white tracking-widest transition-all outline-none placeholder:text-slate-800`}
                        required
                    />
                </div>

                <button 
                    disabled={loading}
                    className="w-full h-[88px] bg-primary text-white font-black rounded-3xl text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20 relative overflow-hidden group/btn"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Verifying...</span>
                        </div>
                    ) : (
                        <span className="group-hover/btn:tracking-[2px] transition-all">Authorize Node →</span>
                    )}
                </button>
            </form>
        </div>

        {/* FOOTER INFO */}
        <div className="mt-12 text-center text-slate-600 font-black text-[9px] uppercase tracking-[5px] select-none">
            AES-256 System Encryption • Global Network Hub
        </div>
      </div>
    </div>
  )
}
