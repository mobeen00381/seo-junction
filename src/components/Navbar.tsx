'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

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
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className={`text-[10px] py-2 px-6 font-bold tracking-[2px] uppercase flex justify-center gap-6 md:gap-10 flex-wrap pointer-events-auto transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-24 md:max-h-20 opacity-100'}`} style={{background:'var(--teal)', color:'var(--mint)'}}>
        <span className="flex items-center gap-2">⭐ 50+ businesses</span>
        <span className="hidden sm:flex items-center gap-2">⏱ 300+ updates</span>
        <span className="flex items-center gap-2" style={{color:'var(--sun)'}}>✅ No tech skills</span>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className={`w-full pointer-events-auto transition-all duration-300 ${isScrolled || isMenuOpen ? 'backdrop-blur-md border-b py-3 shadow-xl' : 'bg-transparent py-4 md:py-6'}`} style={{background: isScrolled || isMenuOpen ? 'var(--paper)' : 'transparent', borderColor: 'var(--border)'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex justify-between items-center transition-all">
          
          {/* Neerzy Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <svg className="w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-110" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="8" fill="#1d9e75"/>
              <circle cx="15" cy="13" r="5" fill="none" stroke="#a8f0c8" strokeWidth="1.8"/>
              <circle cx="15" cy="13" r="2" fill="#a8f0c8"/>
              <path d="M10 21 Q15 17 20 21" stroke="#a8f0c8" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            </svg>
            <span className="font-bold text-xl md:text-2xl tracking-tight font-display" style={{color:'var(--ink)'}}>
              Neer<span style={{color:'var(--teal2)'}}>zy</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[13px] font-medium transition-all hover:translate-y-[-1px]"
                style={{color:'var(--ink3)'}}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/onboarding" className="px-6 py-2.5 rounded-full font-bold text-[13px] transition-all hover:scale-105 active:scale-95" style={{background:'var(--teal)', color:'var(--mint)'}}>
              Get Started Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-2xl transition-transform hover:scale-110"
              style={{background:'var(--paper2)', color:'var(--ink)'}}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 border-b animate-in shadow-2xl" style={{background:'var(--paper)', borderColor:'var(--border)'}}>
            <div className="flex flex-col p-8 gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold transition-all flex items-center justify-between"
                    style={{color:'var(--ink)'}}
                  >
                    {link.name}
                    <span style={{opacity:0.2}}>→</span>
                  </Link>
                ))}
                <Link 
                  href="/onboarding" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-5 rounded-full font-bold text-lg shadow-2xl"
                  style={{background:'var(--teal)', color:'var(--mint)'}}
                >
                  Get Started Free →
                </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
