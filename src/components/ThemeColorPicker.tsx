'use client'
import { useState, useEffect } from 'react'

const THEME_COLORS = [
  { name: 'SEO Blue', primary: '#1565C0', active: '#0D47A1', secondary: '#7C3AED', light: '#E3F2FD' },
  { name: 'Emerald', primary: '#10B981', active: '#065F46', secondary: '#059669', light: '#ECFDF5' },
  { name: 'Ambition', primary: '#F59E0B', active: '#B45309', secondary: '#D97706', light: '#FFFBEB' },
  { name: 'Electric', primary: '#7C3AED', active: '#5B21B6', secondary: '#2563EB', light: '#F5F3FF' },
  { name: 'Rose', primary: '#E11D48', active: '#9F1239', secondary: '#FB7185', light: '#FFF1F2' },
]

export default function ThemeColorPicker() {
  const [selectedColor, setSelectedColor] = useState(THEME_COLORS[0].primary)

  useEffect(() => {
    const saved = localStorage.getItem('theme-color')
    if (saved) {
      const color = THEME_COLORS.find(c => c.primary === saved) || THEME_COLORS[0]
      applyColor(color)
    }
  }, [])

  const applyColor = (color: typeof THEME_COLORS[0]) => {
    setSelectedColor(color.primary)
    document.documentElement.style.setProperty('--primary', color.primary)
    document.documentElement.style.setProperty('--primary-active', color.active)
    document.documentElement.style.setProperty('--primary-light', color.light)
    document.documentElement.style.setProperty('--secondary', color.secondary)
    localStorage.setItem('theme-color', color.primary)
  }

  return (
    <div className="fixed bottom-8 right-8 z-[60] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-100 dark:border-slate-800 p-4 rounded-[32px] shadow-2xl animate-fade-in group">
       <div className="flex flex-col gap-4">
         <div className="flex gap-2 overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
           {THEME_COLORS.map((c) => (
             <button
               key={c.name}
               onClick={() => applyColor(c)}
               className={`w-8 h-8 rounded-full border-4 transition-all hover:scale-110 ${selectedColor === c.primary ? 'border-gray-900 scale-110' : 'border-transparent'}`}
               style={{ backgroundColor: c.primary }}
               title={c.name}
             />
           ))}
         </div>
         <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse" style={{ background: 'var(--premium-gradient)' }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
           </div>
           <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">Theme Engine</div>
         </div>
       </div>
    </div>
  )
}
