'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'GMB Checker', href: '/gmb-checker' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Grows Confidence Globally) */}
      <div className={`bg-navy text-white text-[10px] py-2 px-6 font-black tracking-[2px] uppercase flex justify-center gap-6 md:gap-10 flex-wrap pointer-events-auto transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-24 md:max-h-20 opacity-100'}`}>
        <span className="flex items-center gap-2">⭐ 50+ businesses</span>
        <span className="hidden sm:flex items-center gap-2">⏱ 300+ updates</span>
        <span className="flex items-center gap-2 text-emerald-400">✅ No tech skills</span>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className={`w-full pointer-events-auto transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 py-3 shadow-xl' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex justify-between items-center transition-all">
          
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center text-white font-black text-lg md:text-xl transition-transform group-hover:scale-110 shadow-lg shadow-primary/20" style={{ background: 'var(--premium-gradient)' }}>S</div>
            <span className={`font-black text-lg md:text-xl tracking-tighter transition-colors ${isScrolled || isMenuOpen ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white md:text-gray-900'}`}>SEO Junction</span>
          </Link>

          {/* Desktop Links - Optimized Spacing */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black uppercase tracking-[1.5px] text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-all hover:translate-y-[-1px]"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/onboarding" className="bg-navy dark:bg-white text-white dark:text-navy px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">Get Started</Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-gray-900 dark:text-white transition-transform hover:scale-110 bg-slate-100 dark:bg-slate-800 rounded-2xl"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
            <div className="flex flex-col p-8 gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-black text-gray-900 dark:text-white hover:text-primary transition-all flex items-center justify-between"
                  >
                    {link.name}
                    <span className="opacity-20">→</span>
                  </Link>
                ))}
                <Link 
                  href="/onboarding" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-primary text-white text-center py-6 rounded-3xl font-black text-lg shadow-2xl shadow-primary/20"
                >
                  Get Started Now →
                </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
