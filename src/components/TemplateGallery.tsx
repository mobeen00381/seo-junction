'use client'
import { useState, useEffect } from 'react'

const TEMPLATES = [
  { id: 'plumbing', name: 'Plumbing Pro', color: '#1565C0', emoji: '🔧', desc: 'Trustworthy, solid blue for established trades.', demoLink: '/seo-for-plumbers' },
  { id: 'electrician', name: 'Bright Spark', color: '#FACC15', emoji: '⚡', desc: 'High-visibility safety yellow with bold accents.', demoLink: '/seo-for-electricians' },
  { id: 'hvac', name: 'Climate Control', color: '#3B82F6', emoji: '❄️', desc: 'Modern, balanced blue for clean service vibes.', demoLink: '/seo-for-hvac' },
  { id: 'cleaning', name: 'Fresh Estate', color: '#10B981', emoji: '🧹', desc: 'Eco-friendly emerald for premium cleaning.', demoLink: '/seo-for-cleaning' },
  { id: 'dentist', name: 'Pure Smile', color: '#06B6D4', emoji: '🦷', desc: 'Clinic-fresh Cyan focused on hygiene & trust.', demoLink: '/seo-for-dentists' },
  { id: 'landscaping', name: 'Green Canopy', color: '#15803D', emoji: '🌳', desc: 'Natural forest tones for outdoor mastery.', demoLink: '/seo-for-landscaping' },
  { id: 'roofing', name: 'Slate Guard', color: '#4B5563', emoji: '🏠', desc: 'Rugged, reliable grey for construction power.', demoLink: '/seo-for-roofers' },
  { id: 'locksmith', name: 'Rapid Shield', color: '#B91C1C', emoji: '🔑', desc: 'Emergency red for immediate site confidence.', demoLink: '/seo-for-locksmith' },
  { id: 'pet-grooming', name: 'Happy Paws', color: '#8B5CF6', emoji: '🐕', desc: 'Modern, playful tones for pet care professionals.', demoLink: '/seo-for-pet-grooming' },
  { id: 'sanitary', name: 'Pro Scan', color: '#64748B', emoji: '🚽', desc: 'B2B and B2C sanitary services site with Cost per Lead focus.', demoLink: '/seo-for-sanitary' },
  { id: 'grocery', name: 'Local Mart', color: '#F97316', emoji: '🛒', desc: 'Neighborhood inventory search and delivery focused.', demoLink: '/seo-for-grocery' },
  { id: 'hardware', name: 'Project Pro', color: '#475569', emoji: '🛠️', desc: 'Heavy-duty hardware site with contractor account features.', demoLink: '/seo-for-hardware' },
]

const BRAND_COLORS = [
  { name: 'SEO Blue', primary: '#1565C0', active: '#0D47A1', secondary: '#7C3AED', light: '#E3F2FD' },
  { name: 'Emerald', primary: '#10B981', active: '#065F46', secondary: '#059669', light: '#ECFDF5' },
  { name: 'Ambition', primary: '#F59E0B', active: '#B45309', secondary: '#D97706', light: '#FFFBEB' },
  { name: 'Electric', primary: '#7C3AED', active: '#5B21B6', secondary: '#2563EB', light: '#F5F3FF' },
  { name: 'Rose', primary: '#E11D48', active: '#9F1239', secondary: '#FB7185', light: '#FFF1F2' },
]

export default function TemplateGallery({ onSelect }: { onSelect?: (id: string, color?: string) => void }) {
  const [selectedTemplate, setSelectedTemplate] = useState('plumbing')
  const [selectedColor, setSelectedColor] = useState(BRAND_COLORS[0].primary)

  useEffect(() => {
    const saved = localStorage.getItem('theme-color')
    if (saved) {
      setSelectedColor(saved)
    }
  }, [])

  const applyColor = (color: typeof BRAND_COLORS[0]) => {
    setSelectedColor(color.primary)
    document.documentElement.style.setProperty('--primary', color.primary)
    document.documentElement.style.setProperty('--primary-active', color.active)
    document.documentElement.style.setProperty('--primary-light', color.light)
    document.documentElement.style.setProperty('--secondary', color.secondary)
    localStorage.setItem('theme-color', color.primary)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* BRAND COLOR SELECTION */}
        <div className="text-center mb-24 animate-in fade-in slide-in-from-top-4 duration-700">
           <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[3.2px] mb-8 border border-primary/10">Site Customization</div>
           <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight italic uppercase">1. Pick Your Brand Identity</h2>
           <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-[9px] italic">"Choose the primary color that represents your business excellence."</p>
           
           <div className="flex flex-wrap justify-center gap-8">
              {BRAND_COLORS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => applyColor(c)}
                  className={`group relative flex flex-col items-center gap-4 transition-all ${selectedColor === c.primary ? 'scale-110' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
                >
                  <div 
                    className={`w-16 h-16 rounded-[22px] border-4 shadow-3xl transition-all ${selectedColor === c.primary ? 'border-gray-900 dark:border-white' : 'border-transparent'}`}
                    style={{ backgroundColor: c.primary }}
                  />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${selectedColor === c.primary ? 'text-gray-900 dark:text-white opacity-100' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`}>{c.name}</span>
                </button>
              ))}
           </div>
        </div>

        <div className="h-px bg-gray-100 dark:bg-slate-800 mb-24"></div>

        {/* TEMPLATE GRID */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight italic uppercase">2. Select Your Structure</h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px] italic italic">"Choose a template optimized for your industry's conversion."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {TEMPLATES.map((t) => (
            <div 
              key={t.id} 
              className={`group relative rounded-[40px] border-2 transition-all p-4 cursor-pointer overflow-hidden ${selectedTemplate === t.id ? 'border-primary shadow-3xl shadow-primary/20 bg-white dark:bg-slate-900' : 'border-gray-50 dark:border-slate-800/50 hover:border-gray-200'}`}
              onClick={() => setSelectedTemplate(t.id)}
            >
              {/* Template Preview Card */}
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] bg-gray-50 dark:bg-slate-950/80 relative mb-6">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(circle_at_50%_10%,rgba(0,0,0,0.02),transparent)]">
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-all duration-500 origin-center drop-shadow-2xl">{t.emoji}</div>
                  <div className="w-12 h-2 bg-primary/20 rounded-full mb-4" style={{ background: selectedColor + '44' }}></div>
                  <div className="w-20 h-1 bg-gray-200/50 rounded-full mb-1"></div>
                  <div className="w-24 h-1 bg-gray-200/50 rounded-full"></div>
                </div>
                
                {/* ACTION OVERLAY */}
                <div className="absolute inset-0 bg-navy/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center p-8 gap-4">
                   <a 
                     href={t.demoLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={(e) => e.stopPropagation()}
                     className="w-full bg-white/10 text-white font-black py-4 rounded-xl text-xs shadow-lg hover:bg-white/20 active:scale-95 transition-all uppercase tracking-widest border border-white/10 text-center"
                   >
                     👁️ Live Preview
                   </a>
                   <button 
                     onClick={() => onSelect?.(t.id, selectedColor)}
                     className="w-full bg-primary text-white font-black py-5 rounded-2xl text-[10px] shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
                   >
                     🚀 Use This Style
                   </button>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="font-black text-gray-900 dark:text-white mb-2 tracking-tight flex items-center justify-between">
                    {t.name}
                    <span className="text-[8px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest">Optimized</span>
                </div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[2px] leading-relaxed italic">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
